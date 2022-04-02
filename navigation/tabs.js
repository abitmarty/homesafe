import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'




import Activities from '../screens/activities';
import Dashboard from '../screens/dashboard'
import Friends from '../screens/friends'

const Tab = createBottomTabNavigator();

const dashboardName = "Dashboard";
const activitesName = "Activities";
const friendsName = "Friends";

function MyTabs() {
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
                } else {
                    iconName = 'calendar';
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
            
        <Tab.Screen name={activitesName} component={Activities} />
        <Tab.Screen name={dashboardName} component={Dashboard} />
        <Tab.Screen name={friendsName} component={Friends} />
        </Tab.Navigator>
    </NavigationContainer>

  );
}

export default MyTabs;