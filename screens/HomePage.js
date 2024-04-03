import React, { Component } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import MyTabs from "./BottomTabNavigator/BotomTabScreen";
import MyDrawer from "./DrawerNavigator/DrawerNaviagtionScreen";
{/* <ion-icon name="home"></ion-icon>
const settingsIcon = parseIconFromClassName("fa-duotone fa-gear") */}


export const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Tab=createMaterialBottomTabNavigator();
// function MyDrawer() {
//     return (
//         <Drawer.Navigator useLegacyImplementation={false} >
//             <Drawer.Screen name='Home' component={MyTabs}/>
//             <Drawer.Screen name="Rewards" component={Rewards} />
//             <Drawer.Screen name="Help" component={Help} />
//             <Drawer.Screen name="About" component={About} />
//         </Drawer.Navigator>
//     );
// }

// function MyTabs() {
//     return (
//         <Tab.Navigator screenOptions={{ headerShown: true }} barStyle={{ marginLeft:10, marginRight:10 }}>
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 Options={{
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ focused }) => (//home-circle-outline
//                     <MaterialCommunityIcons name="home" color={focused ? 'red' : '#000'} size={26} />),
//                 }}
//             />
//             <Tab.Screen name="Profile"
//                 component={Profile}
//                 options={{
//                     tabBarLabel: 'Profile',
//                     tabBarIcon: ({ focused }) => (
//                     <MaterialCommunityIcons name="account" color={focused ? 'red' : '#000'} size={26} />
//                         ),
//                 }}
//             />
//             <Tab.Screen name="Settings" 
//             component={Settings} 
//             options={{
//                 tabBarLabel: 'Settings',
//                 tabBarIcon: ({ focused }) => (
//                         <MaterialCommunityIcons name="cog" color={focused ? 'red' : '#000'} size={26} />
//                     ),
//             }}
//             />
//         </Tab.Navigator>
//     )
// }
export default function HomePage() {
    return (

        <MyDrawer/>


    )
}
const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    screens:{
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }
})
// export default HomePage;