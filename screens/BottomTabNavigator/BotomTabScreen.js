import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./HomeScreen";
// import Profiles from "../DrawerNavigator/ProfileScreen";
import Settings from "./SettingScreen";
import TimeSheet from "./TimesheetScreen";
import ShowTimesheet from "./ShowTimesheet";
import Help from "../DrawerNavigator/HelpScreen";


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} barStyle={{ marginLeft:10, marginRight:10 }}>
           
            <Tab.Screen name='Home'
            component={Home}
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({focused}) => (
                    <MaterialCommunityIcons name="home-circle" color={focused ? 'red':'#000'} size={26} />
                ),
                tabBarLabelStyle:({fontSize:15, fontWeight:'500',color:'#000'})
            }}
            />
           
             <Tab.Screen name="Timesheet" 
            component={TimeSheet} 
            options={{
                tabBarLabel: 'Timesheet',
                tabBarIcon: ({ focused }) => ( //plus-circle
                    <MaterialCommunityIcons name="text-box-plus" color={focused ? 'red' : '#000'} size={26} />
                    ),
                    tabBarLabelStyle:({fontSize:15, fontWeight:'500',color:'#000'}) 
                }}
            />

            <Tab.Screen name="Show timesheet" component={ShowTimesheet} 

            options ={{
                tabBarLabel:'Show Timesheet',
                tabBarIcon:({ focused}) => (
                    <MaterialCommunityIcons name="text-box-search" color={focused ? 'red': '#000'} size={26} />
                ),
                tabBarLabelStyle:({fontSize:13, fontWeight:'500',color:'#000'})
            }}
            />
                {/* <Tab.Screen name="Settings" 
                component={Settings} 
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="cog" color={focused ? 'red' : '#000'} size={26} />
                        ),
                        tabBarLabelStyle:({fontSize:15, fontWeight:'500',color:'#000'})
                }}
                /> */}
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    tabBarText:{
        fontSize:15, fontWeight:'500',color:'#000' 
    },
    screens:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})

