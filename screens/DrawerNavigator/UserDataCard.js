import React, { Component, useState, useContext, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";

const UserDataCard = ({ item },isActive) => {

    const [attendanceData, setAttendanceData] = useState([
        { name: 'Ajith', designation: 'React Developer', date: '2-01-2024', status: 'Approved' },
        { name: 'Ajith', designation: 'React Developer', date: '28-01-2024', status: 'Approved' },
        { name: 'Ajith', designation: 'React Developer', date: '5-02-2024', status: 'Approved' },
        // { name: 'Ajith', designation: 'React Developer', date: '15-02-2024', status: 'Pending' },
        // { name: 'Ajith', designation: 'React Developer', date: '21-02-2024', status: 'Pending' },
        // { name: 'Ajith', designation: 'React Developer', date: '28-02-2024', status: 'Approved' },
        // { name: 'Ajith', designation: 'React Developer', date: '15-02-2024', status: 'Pending' },
    ]);
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <View style={{ backgroundColor: isActive ? activeColors.primary : activeColors.text, padding: 10, borderColor: 'black', borderWidth: 1, margin: 10, marginHorizontal: 15, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                <Text style={{ color: isActive ? activeColors.text : activeColors.primary,fontSize: 18, fontWeight: 'bold', }}>Name :</Text>
                {/* <Text style={{ color: isActive ? activeColors.text : activeColors.primary,fontSize: 18, fontWeight: 'bold', marginLeft: 55, paddingLeft: 55 }}>{item.name}</Text> */}
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Designation :</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 25, paddingLeft: 35 }}>{item.designation}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Date :</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 60, paddingLeft: 60 }}>{item.date}</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>Status :</Text>
                <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 18, fontWeight: 'bold', marginLeft: 60, paddingLeft: 45 }}>{item.status}</Text>
            </View> */}
        </View>
    )
}

export default UserDataCard;