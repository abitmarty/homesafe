// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';


class JoinEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            joinId: "",
        };
    }

    render() {
    return(
        <View
        style={styles.container}
        behaiour="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Join id"
                value={this.state.joinId}
                onChangeText={text => this.setState({ joinId: this.state.joinId = text})}
                style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {
                    // firebase.firestore().collection('friends').add({
                    //     accepted: false,
                    //     requested: firebase.auth().currentUser.email,
                    //     target: this.state.email
                    // })

                    this.props.navigation.navigate('Activities');
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

export default JoinEvent;