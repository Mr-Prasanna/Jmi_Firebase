import React, { useContext } from "react";
import { View, Text, TouchableHighlight, Image, BackHandler, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "../BottomTabNavigator/BotomTabScreen";
import About from "./AboutScreen";
import Settings from "./SettingScreen";
import Help from "./HelpScreen";
import Profiles from "./ProfileScreen";
import ShowTimesheet from "../BottomTabNavigator/ShowTimesheet";
import Logout from "./LogoutScreen";

import TimeSheet from "../BottomTabNavigator/TimesheetScreen";
import ImageInDrawer from "../ImageInDrawer";
import {
    TouchableRipple, Switch, useTheme,
} from 'react-native-paper';

import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderBackground } from "@react-navigation/elements";
const Drawer = createDrawerNavigator();
function MyDrawer(isActive) {
    
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
   

    return (


        <Drawer.Navigator useLegacyImplementation={false}
            initialRouteName='Home'
         
     screenOptions={{
        headerTintColor:isActive?activeColors.text:activeColors.primary,
        headerStyle:{
            backgroundColor: isActive ? activeColors.primary : activeColors.text,  
        },
        drawerStyle:{
            backgroundColor: isActive ? activeColors.primary : activeColors.text,  
                  
        },
        drawerLabelStyle:{
            color: isActive ? activeColors.text : activeColors.primary,                           

        },
        // drawerContentStyle:{
        //     color: isActive? activeColors.text: activeColors.primary

        // }
     }}

        >
            <Drawer.Screen name='Home'
                component={MyTabs}
                options={{
                    title: 'HOME',
                    // drawerLabelStyle:{
                    //     color: isActive ? activeColors.text : activeColors.primary,                           

                    // },
                    //headerTitleAlign: 'left',
                    // headerTitleStyle:{
                    //     color: isActive ? activeColors.text : activeColors.primary,                           
                    // },
                //     headerStyle:{
                //     backgroundColor: isActive ? activeColors.primary : activeColors.text,  
                // },              
                    headerShown: true,
                    headerRight: () => <ImageInDrawer/>,
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="home-circle" color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} style={styles.Icon} />
                    ),

                }}
            />
            <Drawer.Screen name="Help" component={Help}
                options={{
                    title: 'HELP',
                    
                    // drawerContentContainerStyle:{
                    //     backgroundColorcolor: isActive ? activeColors.text : activeColors.primary,                           

                    // },
               
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="help-box"  color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} style={styles.Icon} />
                    ),
                }}
            />
            <Drawer.Screen name="Profile"
                component={Profiles}
                options={{
                    title: 'PROFILE',
                       
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="account-circle"  color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} style={styles.Icon} />
                    ),
                }}
            />
            <Drawer.Screen name="About" component={About}
                options={{
                    title: 'ABOUT',
                        
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="information"  color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} style={styles.Icon} />
                    ),
                }}
            />
             <Drawer.Screen name="Settings" component={Settings}
                options={{
                    title: 'SETTINGS',
                     
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="cog"  color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} style={styles.Icon} />
                    ),
                }}
            />
           
            <Drawer.Screen name="Logout" component={Logout}
                options={{
                    title: 'LOGOUT',
                        
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="logout"  color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} style={styles.Icon} />
                    ),
                }}
            />
           
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
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
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    drawerSection: {
        marginTop: 15,
    },
})

export default MyDrawer;