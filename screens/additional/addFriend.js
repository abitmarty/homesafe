// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';

class AddFriend extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
          };
    }



    // getUser = async() => {
    //     const friendsDocument = await firestore().collection("friends").doc("k9IoVfKM2gUbeblW6Zsi").get();
    // }

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
                    alert(this.state.email);
                }}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
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
    buttonText:{
        color: '#fff',
        fontWeight: "700"
    },
});

export default AddFriend;