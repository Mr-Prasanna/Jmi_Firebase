import React, { Component } from "react";
import { View, Text, TouchableHighlight, Image,BackHandler, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "../BottomTabNavigator/BotomTabScreen";
import About from "./AboutScreen";
import Help from "./HelpScreen";
import Profiles from "./ProfileScreen";
import ShowTimesheet from "../BottomTabNavigator/ShowTimesheet";
import Logout from "./LogoutScreen";
import TimeSheet from "../BottomTabNavigator/TimesheetScreen";
import ImageInDrawer from "../ImageInDrawer";
const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation={false}  
       initialRouteName='Home'
        // drawerContent={(props) => <ImageInDrawer {...props} />} 
        >
            <Drawer.Screen name='Home'  
            component={MyTabs}
             options={{
                title: 'HOME',
                headerTitleAlign:'left',
                headerShown: true,
                headerRight: () => <ImageInDrawer />,
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="home-circle" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ), 
                 
            }}
            />
            <Drawer.Screen name="Help" component={Help} 
             options={{
                title: 'HELP',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="help-box" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
             <Drawer.Screen name="Profile"
                component={Profiles}
                options={{
                    title: 'PROFILE',
                    drawerIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="account-circle" color={focused ? 'red' : '#000'} size={26} style={styles.Icon}/>
                        ),
                }}
            />
            <Drawer.Screen name="About" component={About}
             options={{
                title: 'ABOUT',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="information" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
            <Drawer.Screen name="Logout" component={Logout} 
             options={{
                title: 'LOGOUT',
                drawerIcon: ({focused}) => (
                    <MaterialCommunityIcons name="logout" color={focused ? 'red' : '#000'} size={26} style={styles.Icon} />
                ),
             }}
            />
        </Drawer.Navigator>
    );
}

const styles= StyleSheet.create({
    Icon: {
        position: 'absolute',
        // right: 75,
        alignSelf: 'right',
        alignItems: 'left',

    },
    imagesize: {
        // marginVertical: 30
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10
    },
})

export default MyDrawer;