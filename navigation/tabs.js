import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState, useEffect } from 'react';
import { auth } from '../firebase';


import LoginScreen from '../screens/additional/LoginScreen';
import Activities from '../screens/activities';
import Dashboard from '../screens/dashboard'
import Friends from '../screens/friends'
import AddFriend from '../screens/additional/addFriend';


const Tab = createBottomTabNavigator();

const dashboardName = "Dashboard";
const activitesName = "Activities";
const friendsName = "Friends";
const loginName = "Login";
const addFriendName = "AddFriend"

function MyTabs() {
    const [isSignedIn, setSignedIn] = useState()

    React.useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
           setSignedIn(user ? true : false)
      });
      return unsubscribe;
    }, [])

  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={dashboardName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if(rn === dashboardName) {
                    iconName = 'stats-chart';
                } else if (rn === friendsName) {
                    iconName = 'person';
                } else if (rn === activitesName){
                    iconName = 'calendar';
                } else {
                    iconName = 'log-in';
                }

                return <Ionicons name={iconName} size={size} color={color} />


            },
            tabBarStyle:{
                height:60,
                backgroundColor: '#000000'
            },
            tabBarItemStyle:{
                activeTintColor: '#5DB075'
            }
        })}
        tabBarOptions={{
            activeTintColor: '#5DB075',
            inactiveTintColor: '#ffffff',
            labelStyle: { paddingBottom: 10, fontSize: 10, outerHeight: 100},
        }}
        >
        {
             isSignedIn ? (
                 <>
                   <Tab.Screen name={activitesName} component={Activities} />
                   <Tab.Screen name={dashboardName} component={Dashboard} />
                   <Tab.Screen name={friendsName} component={Friends} />
                   <Tab.Screen name={addFriendName} component={AddFriend} 
                   options={{
                    tabBarButton: () => null,
                    tabBarVisible:false //hide tab bar on this screen
            
                    }}/>
                 </>
             ) : (
               <>
                <Tab.Screen name={"Login"} component={LoginScreen} />
               </>
             )
        } 
        </Tab.Navigator>
    </NavigationContainer>

  );
}

export default MyTabs;