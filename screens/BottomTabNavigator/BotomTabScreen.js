import React, { useContext } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./HomeScreen";
// import Profiles from "../DrawerNavigator/ProfileScreen";
import Settings from "../DrawerNavigator/SettingScreen";
import TimeSheet from "./TimesheetScreen";
import ShowTimesheet from "./ShowTimesheet";
import Help from "../DrawerNavigator/HelpScreen";

import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";
const Tab = createBottomTabNavigator();

export default function MyTabs(isActive) {

    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
   
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false ,
            tabBarStyle:{
                backgroundColor: isActive ? activeColors.primary : activeColors.text, 
                
            },
            // tabBarLabelStyle:{
            //     color: isActive ? activeColors.text : activeColors.primary,                           
 
            // }
            }} barStyle={{ marginLeft:10, marginRight:10}} 
        
        >
           
            <Tab.Screen name='Home'
            component={Home}
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({focused}) => (
                    <MaterialCommunityIcons name="home-circle" color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} />
                ),
                tabBarLabelStyle:({fontSize:15, fontWeight:'500',color: isActive ? activeColors.text : activeColors.primary,                           
            })
            }}
            />
           
             <Tab.Screen name="Timesheet" 
            component={TimeSheet} 
            options={{
                tabBarLabel: 'Timesheet',
                tabBarIcon: ({ focused }) => ( //plus-circle
                    <MaterialCommunityIcons name="text-box-plus" color={focused ? 'red' : isActive ? activeColors.text : activeColors.primary} size={26} />
                    ),
                    tabBarLabelStyle:({fontSize:15, fontWeight:'500',color: isActive ? activeColors.text : activeColors.primary}) 
                }}
            />

            <Tab.Screen name="Show timesheet" component={ShowTimesheet} 

            options ={{
                tabBarLabel:'Show Timesheet',
                tabBarIcon:({ focused}) => (
                    <MaterialCommunityIcons name="text-box-search" color={focused ? 'red': isActive ? activeColors.text : activeColors.primary} size={26} />
                ),
                tabBarLabelStyle:({fontSize:13, fontWeight:'500',color: isActive ? activeColors.text : activeColors.primary,})
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
    },
    tabBarIcon:{
        fontSize:15, fontWeight:'500'
    }
})

