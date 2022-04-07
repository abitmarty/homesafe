// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text, Image, Switch } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';


class PersonalFriendpage extends Component{
    constructor(props){
        super(props);
        this.params = this.props.route.params;
        this.state = {
            isEnabled: false,
        };
    }

    

    render() {
        this.params = this.props.route.params;

    return(
        <View
        style={styles.container}
        behaiour="padding"
        >
            <Image
                style={styles.friendIcon}
                source={require('../../assets/Friends-round.png')}
            />
            <Text style={styles.name}>{(this.params.user).split("@")[0]}</Text>
            <View style={styles.trusteeContainer}>
                <Text style={styles.title}>Trustee</Text>
                <Switch
                    style={styles.toggle}
                    trackColor={{ false: "#767577", true: "#CFE8D6" }}
                    thumbColor={this.state.isEnabled ? "#5DB075" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        this.setState({ isEnabled: !this.state.isEnabled });

                        console.log("clicked");
                    }}
                    value={this.state.isEnabled}
                />
            </View>
            <Text style={styles.explanation}>A trustee is always able to see your location when you're on the move</Text>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    onPress={() => {
                        firebase.firestore().collection('friends').where('target', '==', firebase.auth().currentUser.email).where('requested', '==', this.params.user).onSnapshot(docs =>{
                            docs.forEach(doc => {
                                doc.ref.delete()
                            })
                        });

                        firebase.firestore().collection('friends').where('requested', '==', firebase.auth().currentUser.email).where('target', '==', this.params.user).onSnapshot(docs =>{
                            docs.forEach(doc => {
                                doc.ref.delete()
                            })
                        });

                        this.props.navigation.navigate('Friends');
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Remove friend</Text>
                    </TouchableOpacity>
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
    friendIcon: {
        marginTop: 30,
        width: 200,
        height: 200
    },
    name: {
        fontWeight: '700',
        fontSize: 20,
        marginTop: 20
    },
    explanation: {
        width: '90%',
        color: '#767676',
        marginTop: 10
    },
    title:{
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left',
        width: '60%'
    },
    trusteeContainer: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    buttonContainer:{
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        backgroundColor: '#fff',
        borderColor: '#5DB075',
        borderWidth: 1,
        width: '100%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
        fontWeight: '700'
    },
});

export default PersonalFriendpage;