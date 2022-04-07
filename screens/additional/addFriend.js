// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';


class AddFriend extends Component{
    constructor(props){
        console.log('---------------------');
        console.log('Loaded add friends page');
        super(props);
        this.state = {
            email: "",
            friendRequests: []
        };
        // this.getAllFriends();
        this.subscriber = firebase.firestore().collection('friends').where('target', '==', firebase.auth().currentUser.email).onSnapshot(docs =>{
            let friendRequests = [];
            docs.forEach(doc => {
                friendRequests.push(doc.data())
            })
            this.setState({ friendRequests });
            console.log(friendRequests);
        });
    }

    getAllFriends = async () => {
        console.log('Calling firestore')
        const friends = await firebase.firestore().collection('friends').where('target', '==', firebase.auth().currentUser.email).get();
        console.log(friends);
        console.log('Done calling firestore')
    }

    render() {
    return(
        <View
        style={styles.container}
        behaiour="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Email"
                value={this.state.email}
                onChangeText={text => this.setState({ email: this.state.email = text})}
                style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {
                    console.log("Email: ", this.state.email);
                }}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Friend requests:</Text>
                {this.state.friendRequests.map(request => <View style={styles.requests}>
                    <Text style={styles.requestedName}>{request.requested}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            
                        }}
                        style={styles.buttonSmall}
                        >
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => {
                            
                        }}
                        style={styles.buttonSmallNo}
                        >
                            <Text style={styles.buttonText}>x</Text>
                        </TouchableOpacity>
                    </View>)}
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 40
    },
    buttonContainer: {
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
    buttonSmall: {
        backgroundColor: '#5DB075',
        width: '30%',
        padding: 5,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonSmallNo: {
        backgroundColor: '#B05D5D',
        width: '10%',
        marginLeft: '10%',
        padding: 5,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontWeight: "700"
    },
    title:{
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left',
        marginTop: 20
    },
    requests:{
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        marginTop: 10
    },
    requestedName: {
        width: '50%'
    }
});

export default AddFriend;