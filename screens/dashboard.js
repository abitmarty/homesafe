import React, {useEffect, useState, Component} from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image, ProgressBarAndroid } from 'react-native';
import AddFriend from './additional/addFriend';
import { auth } from '../firebase';
import firestore from "@react-native-firebase/firestore";
import firebase from 'firebase/compat/app';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            progressbar: 0,
        };

        this.subscriber = firebase.firestore().collection('progresstemp').doc('rTVCYN9QHbVbPO2Csaor').onSnapshot(doc => {
            try{ 
                this.setState({
                    progressbar: doc.data().progress
                });
            } catch(e) { console.error(e); }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                {firebase.auth().currentUser.email === "jacob@mail.com" ?
                <View>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    onPress={() => {                      
                        firebase.firestore()
                        .collection('progresstemp')
                        .doc('rTVCYN9QHbVbPO2Csaor')
                        .update({
                            progress: Math.round((this.state.progressbar - 0.05) * 100) / 100,
                        })
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        firebase.firestore()
                        .collection('progresstemp')
                        .doc('rTVCYN9QHbVbPO2Csaor')
                        .update({
                            progress: Math.round((this.state.progressbar + 0.05) * 100) / 100,
                        })
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        firebase.firestore()
                        .collection('progresstemp')
                        .doc('rTVCYN9QHbVbPO2Csaor')
                        .update({
                            progress: 0,
                        })
                    }}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Progress: {this.state.progressbar}</Text>
                </View>
                </View>
                : null }
                <View style={styles.friendContainer}>
                        <Text style={styles.title}>Friends on the move</Text>
                        <View style={styles.topTitleEvent}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../assets/roundness.png')}
                                />
                                <Text style={styles.eventName}>Jacob</Text>
                        </View>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={this.state.progressbar}
                            style={{width: '100%', height: 50, color: '#5DB075', borderRadius: 10
                            , transform: [{ scaleX: 1.0 }, { scaleY: 2 }]}}
                            />
                        <Text style={styles.title}>Friends on the map</Text>
                        <Image
                        style={{width: 360, height: 300, marginTop: 27}}
                                    source={require('../assets/Dashmap.png')}
                                />
    
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
        justifyContent: 'space-around'
    },
    button:{
        backgroundColor: '#5DB075',
        width: '30%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    friendContainer: {
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
    topTitleEvent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 27
    },
    tinyLogo: {
        width: 16,
        height: 16
    },
    eventName: {
        fontWeight: '700',
        marginLeft: 10,
        fontSize: 16
    },
});
export default Dashboard;