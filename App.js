import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './navigation/tabs';
import LoginScreen from './screens/additional/LoginScreen';
import firebase from 'firebase/compat/app';
import auth from 'firebase/compat/auth';
import { useNavigation } from '@react-navigation/core';

export default function App() {
  
  if (1 == 1){
    return (
      <LoginScreen />
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
