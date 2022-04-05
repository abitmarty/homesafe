// import * as React from 'react';
import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function LoginScreen ({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behaiour="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Email"
                // value={}
                // onChangeTExt={text =>}
                style={styles.input}
                />
                <TextInput
                placeholder="Password"
                // value={}
                // onChangeTExt={text =>}
                style={styles.input}
                secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {}}
                style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        backgroundColor: '#5DB075',
        width: '100%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 15,
        borderColor: '#5DB075',
        borderWidth: 1
    },
    buttonText:{
        color: '#fff',
        fontWeight: "700"
    },
    buttonTextOutline:{
        color: '#000',
        fontWeight: "700"
    }
});