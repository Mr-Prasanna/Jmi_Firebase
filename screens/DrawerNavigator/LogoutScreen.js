import React, { Component, useEffect } from "react";
import { View, Text, TouchableHighlight, BackHandler, StyleSheet, Alert } from 'react-native';
//import FontAwesome, { SolidIcons, RegularIcons, BrandIcons, FontAwesomeIcon, parseIconFromClassName } from 'react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
function Logout() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.navigate('Login');
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b0e39a' }}>
            <Text>Logout Screen</Text>
            {/* <View>
                <TouchableHighlight onPress={BackHandler.exitApp()}>Logout</TouchableHighlight>
            </View> */}
        </View>
    );
}

const styles=StyleSheet.create({
    button: {
        // alignItems: "center",
        marginHorizontal: 0,
        backgroundColor: '#eb692d',
        //color: '#fafaf7',
        //color:'white',
        fontSize: 20,
        //fontWeight: '200',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 10

    },
})

export default Logout;

