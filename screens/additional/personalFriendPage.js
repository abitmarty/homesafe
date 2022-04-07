// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';


class PersonalFriendpage extends Component{
    constructor(props){
        super(props);
        this.params = this.props.route.params;
    }

    render() {
        this.params = this.props.route.params;
    return(
        <View
        style={styles.container}
        behaiour="padding"
        >
            <Text>{this.params.user}</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    helo: {
        width: '50%'
    }
});

export default PersonalFriendpage;