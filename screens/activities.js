import React, {useEffect, useState, Component} from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import AddFriend from './additional/addFriend';
import { auth } from '../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';

class Activities extends Component{
    constructor(props){
        console.log('---------------------');
        console.log('Loaded friends page');
        super(props);

        this.state = {
            events: [],
        };

        this.subscriber = firebase.firestore().collection('events').onSnapshot(docs =>{
            let events = [];
            docs.forEach(doc => {
                if((doc.data().attendees).includes(firebase.auth().currentUser.email)){
                    events.push(doc.data())
                }
                this.setState({ events });
            })
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
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                    <Text>      </Text>
                    <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('AddFriend');
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Join</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.activitiesContainer}>
                    <Text style={styles.title}>Activities</Text>
                    {this.state.events.map(event =>
                    <TouchableOpacity style={styles.eventElementContainer}
                    onPress={() => {
                        
                    }}>
                        <View style={styles.topTitleEvent}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/roundness.png')}
                            />
                            
                            <Text style={styles.eventName}>{event.name}</Text>
                        </View>
                        <View syle={styles.friendInformationBox}>
                            <Text style={styles.eventInfo}>{event.discription}</Text>
                        </View>
                    </TouchableOpacity>)}
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
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    button:{
        backgroundColor: '#5DB075',
        width: '40%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700'
    },
    activitiesContainer: {
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
        width: 16,
        height: 16
    },
    eventElementContainer: {
        width: '100%',
        marginTop: 30
    },
    eventName: {
        fontWeight: '700',
        marginLeft: 10,
        fontSize: 16
    },
    eventInfo: {
        color: '#767676',
        marginTop: 5,
        fontSize: 14,
    },
    topTitleEvent: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Activities;