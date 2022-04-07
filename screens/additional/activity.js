import React, {useEffect, useState, Component} from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import AddFriend from './additional/addFriend';
import { auth } from '../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';

class Friends extends Component{
    constructor(props){
        super(props);

        this.state = {
            friends: [],
        };
        
        
    }
    
    render(){
        return(
            <View style={styles.container}>

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

});

export default Friends;