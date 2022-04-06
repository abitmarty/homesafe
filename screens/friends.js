import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import AddFriend from './additional/addFriend';

function Friends ({navigation}){
        
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('AddFriend');
                }}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Add friends</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendContainer}>
                <Text style={styles.title}>Friend list:</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonContainer:{
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
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    friendContainer: {
        marginTop: 40,
        alignItems: 'flex-start',
        width: '90%'
    },
    title:{
        color: '#000',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'left'
    }
});

export default Friends;