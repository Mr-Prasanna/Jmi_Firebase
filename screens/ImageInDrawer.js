import React, { Component, useState } from "react";
// import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { View, Image, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const ImageInDrawer = () => {
    return (
        <View >
            <Image source={require('./../images/jlogo_JMI.png')} style={styles.imagesize} />
        </View>
    )
}

const styles = StyleSheet.create({
    imagesize: {
        // marginVertical: 30
        width: 60,
        height: 32,
        resizeMode: 'cover',
        // borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 45,
        //  marginVerticle:15
    },
})

export default ImageInDrawer;