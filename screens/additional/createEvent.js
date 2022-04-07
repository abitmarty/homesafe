// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';


class CreateEvent extends Component{
    constructor(props){
        super(props);

        this.state = {
            eventName: "",
            discription: "",
            zip: "",
            houseNr: "",
            date: ""
        };
    }

    render() {
        // this.state = {
        //     eventName: "",
        //     discription: "",
        //     zip: "",
        //     houseNr: "",
        //     date: ""
        // };
    return(
        <KeyboardAvoidingView
        style={styles.container}
        behaiour="padding"
        >
            <TextInput
                placeholder="Event name"
                value={this.state.eventName}
                onChangeText={text => this.setState({ eventName: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Event discription"
                value={this.state.discription}
                onChangeText={text => this.setState({ discription: text })}
                style={styles.inputBig}
                multiline={true}
            />
            <View style={styles.verticalContainer}>
                <TextInput
                    placeholder="ZIP"
                    value={this.state.zip}
                    onChangeText={text => this.setState({ zip: text })}
                    style={styles.inputVert}
                    multiline={true}
                />
                <TextInput
                    placeholder="House nr"
                    value={this.state.houseNr}
                    onChangeText={text => this.setState({ houseNr: text })}
                    style={styles.inputVert}
                    multiline={true}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    firebase.firestore().collection('events').add({
                        attendees: [firebase.auth().currentUser.email],
                        creator: firebase.auth().currentUser.email,
                        date: this.state.date,
                        discription: this.state.discription,
                        housenr: this.state.houseNr,
                        name: this.state.eventName,
                        zip: this.state.zip
                    })

                    this.props.navigation.navigate('Activities');
                }}
                style={[styles.button]}
                >
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
        </KeyboardAvoidingView>
    );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input:{
        width: '90%',
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 40
    },
    inputBig:{
        width: '90%',
        height: 100,
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 27,
        textAlignVertical: "top"
    },
    verticalContainer:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputVert:{
        width: '45%',
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 27
    },
    button:{
        backgroundColor: '#5DB075',
        width: '90%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
        marginTop: 27
    },
    buttonText:{
        color: '#fff',
        fontWeight: '700'
    }
    
});

export default CreateEvent;