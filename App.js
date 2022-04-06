import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import * as Location from 'expo-location';
import { NavigationContainer, useNavigation } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './navigation/tabs';
import LoginScreen from './screens/additional/LoginScreen';
import { auth } from './firebase';

export default function App() {
  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     navigation.navigate('Dashboard');
  //     // alert("Should go dash");
  //   })
  // }, [])
  
  if (1 == 1){
    return (
      <MyTabs />
    );
  }
  return (
    <MyTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
