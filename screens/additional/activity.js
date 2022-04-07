// import * as React from 'react';
import React, {useEffect, useState, Component} from 'react'
import { View, Text, Image, Switch } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import firestore from "@react-native-firebase/firestore";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import firebase from 'firebase/compat/app';


class Activity extends Component{
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
            <View style={styles.activityInfocontainer}>
                <Text style={styles.eventTitle}>{this.params.event[0].name}</Text>
                <Text style={styles.eventSubTitle}>{this.params.event[0].discription}</Text>
                <Text style={styles.eventCreator}>Event created by: {this.params.event[0].creator.split("@")[0]}</Text>
                    <View style={styles.trusteeContainer}>
                    <Text style={styles.title}>Anonymous</Text>
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
                <TouchableOpacity
                    onPress={() => {
                        firebase.firestore().collection("events").doc(this.params.id).onSnapshot(doc =>{
                            // doc.data().attendees.arrayRemove(firebase.auth().currentUser.email)
                            doc.ref.delete();
                        });

                        this.props.navigation.navigate('Activities');
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Delete event</Text>
                    </TouchableOpacity>
                <Text style={styles.joinCode}>Join using id: {this.params.id}</Text>
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
    eventTitle: {
        fontSize: 24,
        fontWeight: '700',
        margin: 27,
        color: "#000"
    },
    eventSubTitle: {
        color: "#767676",
        width: '90%',
    },
    activityInfocontainer:{
        width: '90%'
    },
    eventCreator: {
        color: '#5DB075',
        marginTop: 27
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
    joinCode: {
        marginTop: 27,
        textAlign: 'center'
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
        fontWeight: '700',
        marginTop: 27
    },
    buttonText: {
        fontWeight: '700'
    }
});

export default Activity;