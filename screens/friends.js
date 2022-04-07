import React, {useEffect, useState, Component} from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import AddFriend from './additional/addFriend';
import { auth } from '../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';

class Friends extends Component{
    constructor(props){
        console.log('---------------------');
        console.log('Loaded friends page');
        super(props);

        this.state = {
            friends: [],
            otherFriends: []
        };
        
        
        // TODO: combine queries. 
        // Get friends that added you
        this.subscriber = firebase.firestore().collection('friends').where('target', '==', firebase.auth().currentUser.email).where('accepted', '==', true).onSnapshot(docs =>{
            let friends = [];
            docs.forEach(doc => {
                friends.push(doc.data())
            })
            this.setState({ friends });
            console.log(friends);
        });

        // Get friends you added
        this.subscriber2 = firebase.firestore().collection('friends').where('requested', '==', firebase.auth().currentUser.email).where('accepted', '==', true).onSnapshot(docs2 =>{
            let otherFriends = [];
            docs2.forEach(doc2 => {
                otherFriends.push({target: doc2.data().requested, requested: doc2.data().target, accepted: doc2.data().accepted})
            })
            this.setState({ otherFriends });
        });
        
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('AddFriend');
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Add friends</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.friendContainer}>
                    <Text style={styles.title}>Friend list:</Text>
                    {this.state.friends.map(friend =>
                    <TouchableOpacity style={styles.friendListedElementContainer}
                    onPress={() => {
                        console.log(friend.requested)
                        this.props.navigation.navigate('Personal', {
                            user: friend.requested
                        });
                    }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/Friends.png')}
                        />
                        <View syle={styles.friendInformationBox}>
                            <Text style={styles.friendName}>{friend.requested}</Text>
                            <Text style={styles.friendInfo}>No upcomming events in the next week.</Text>
                        </View>
                    </TouchableOpacity>)}
                    {/* {this.state.otherFriends.map(friend =>
                    <View style={styles.friendListedElementContainer}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/Friends.png')}
                        />
                        <View syle={styles.friendInformationBox}>
                            <Text style={styles.friendName}>{friend.requested}</Text>
                            <Text style={styles.friendInfo}>No upcomming events in the next week.</Text>
                        </View>
                    </View>)} */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    button:{
        backgroundColor: '#5DB075',
        width: '100%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    friendContainer: {
        marginTop: 40,
        alignItems: 'flex-start',
        width: '90%'
    },
    title:{
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left'
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    friendListedElementContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30
    }, 
    friendName: {
        fontWeight: '700',
        marginLeft: 10
    },
    friendInfo: {
        marginLeft: 10
    }
});

export default Friends;