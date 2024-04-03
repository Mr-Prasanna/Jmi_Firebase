import React, { Component, useState, useContext, useMemo, useEffect } from "react";
// import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { StyleSheet, Text, View, ActivityIndicator, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
// import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
// import { useTheme } from '@react-navigation/native';
// import { useTheme } from '../../themeContext';

import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";
import UserDataCard from "./UserDataCard";
const { width, height } = Dimensions.get('screen');

// import useThemeContext from '../../themes/util/useThemeContext';
function About(isActive) {
    const { theme } = useContext(ThemeContext);
    const activeColors = colors[theme.mode];

    const [attendanceData, setAttendanceData] = useState([
        { name: 'Ajith', designation: 'React Developer', date: '2-01-2024', status: 'Approved' },
        { name: 'Ajith', designation: 'React Developer', date: '28-01-2024', status: 'Approved' },
        { name: 'Ajith', designation: 'React Developer', date: '5-02-2024', status: 'Approved' },
        // { name: 'Ajith', designation: 'React Developer', date: '15-02-2024', status: 'Pending' },
        // { name: 'Ajith', designation: 'React Developer', date: '21-02-2024', status: 'Pending' },
        // { name: 'Ajith', designation: 'React Developer', date: '28-02-2024', status: 'Approved' },
        // { name: 'Ajith', designation: 'React Developer', date: '15-02-2024', status: 'Pending' },
    ]);
    const snapPoints = useMemo(() => ['25%', '50%', '70%', '90'], []);
    const navigation = useNavigation();
    const [animating, setAnimating] = useState(true);
    // const { colors } = useTheme();

    const toggleBottomNavigationView = () => {
        closeActivityIndicator();
        setVisible(!visible);
    };
    const closeActivityIndicator = () => {
        setTimeout(() => {
            setAnimating(false)
        }, 3000)
    }
    useEffect(() => {
        closeActivityIndicator(), []
    });
    const handlePrevScreen = () => {
        navigation.navigate('Show timesheet');
    }

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#9dfc03'}}>
        //     <Text>About Screen</Text>
        //  </View>
        // <ScrollView>
        <View style={[styles.container]}>
            <ImageBackground
                source={require('./../../images/registerImg.jpg')}
                style={styles.imageBackgroundContainer}
                // imageStyle={styles.imageBackground}
                >
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.submitevent}>
                        <TouchableHighlight onPress={handlePrevScreen}>
                            <View style={styles.button}>
                                <Text style={{ color: 'white', fontWeight: '700' }}></Text>
                                <MaterialCommunityIcons name='arrow-left-circle' color={'white'} size={30} style={styles.Icon} />
                            </View>

                        </TouchableHighlight>
                    </View>
                    <Text style={styles.title}>ATTENDANCE DETAILS</Text>


                </View>

                <View style={styles.activityContainer}>
                    <ActivityIndicator
                        animating={animating}
                        // color="#bc2b78"
                        color="#f2711b"
                        size="large"
                        style={styles.activityIndicator}
                    />
                </View>
                {!animating && <BottomSheet index={3} snapPoints={snapPoints}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
                        <ImageBackground
                            source={require('./../../images/registerImg.jpg')}
                            style={styles.imageBackgroundContainer}
                            imageStyle={styles.imageBackground}
                        >
                            {/* <Text style={styles.title}>ATTENDANCE DETAILS</Text> */}
                            {/* <ScrollView> */}
                            <View>
                                {/* <ScrollView  contentContainerStyle={{ flexGrow:1 ,   justifyContent: 'space-between'}}> */}
                                <FlatList
                                    data={attendanceData}
                                    // data={[
                                    //     { name: 'Ajith', designation: 'Developer',date: '10-02-2024' ,status: 'Pending' },
                                    // ]}
                                    //    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                                    //renderItem={renderItemUI}
                                    renderItem={({item}) =>
                                    <View style={{ backgroundColor: isActive ? activeColors.primary : activeColors.text, padding: 10, borderColor: 'black', borderWidth: 1, margin: 10, marginHorizontal: 15, borderRadius: 10 }}>
                                    <View style={styles.renderItemView}>
                                        <Text style={[styles.renderItemText,{color: isActive ? activeColors.text : activeColors.primary }]}>Name :</Text>
                                        <Text style={[styles.renderItemText,{marginLeft: 55, paddingLeft: 55,color: isActive ? activeColors.text : activeColors.primary }]}>{item.name}</Text>
                                    </View>
                                    <View style={styles.renderItemView}>
                                        <Text style={[styles.renderItemText,{ color: isActive ? activeColors.text : activeColors.primary }]}>Designation :</Text>
                                        <Text style={[styles.renderItemText,{ marginLeft: 25, paddingLeft: 35,color: isActive ? activeColors.text : activeColors.primary }]}>{item.designation}</Text>
                                    </View>
                                    <View style={styles.renderItemView}>
                                        <Text style={[styles.renderItemText,{ color: isActive ? activeColors.text : activeColors.primary }]}>Date :</Text>
                                        <Text style={[styles.renderItemText,{ fontSize: 18, fontWeight: 'bold', marginLeft: 60, paddingLeft: 60,color: isActive ? activeColors.text : activeColors.primary }]}>{item.date}</Text>
                                    </View>
                                    <View style={styles.renderItemView}>
                                        <Text style={[styles.renderItemText,{ color: isActive ? activeColors.text : activeColors.primary}]}>Status :</Text>
                                        <Text style={[styles.renderItemText,{ color: isActive ? activeColors.text : activeColors.primary,marginLeft: 60, paddingLeft: 45 }]}>{item.status}</Text>
                                    </View>
                                </View> 
                                   }

                                />
                                {/* </ScrollView> */}
                            </View>
                            {/* </ScrollView> */}
                            {/*handleSearch */}
                            {/* <View style={styles.submitevent}>
                            <TouchableHighlight onPress={handlePrevScreen}>
                                <View style={styles.button}>
                                    <Text style={{ color: 'white', fontWeight: '700' }}></Text>
                                    <MaterialCommunityIcons name='arrow-left-circle' color={'white'} size={24} style={styles.Icon} />
                                </View>

                            </TouchableHighlight>
                        </View> */}

                        </ImageBackground>
                    </ScrollView>
                </BottomSheet>}
            </ImageBackground>
        </View>
    )
}
// const renderItemUI = ({ item }, isActive) => {
   
//     return (
//         // <UserDataCard/>
//         <View style={{ backgroundColor: isActive ? activeColors.primary : activeColors.text, padding: 10, borderColor: 'black', borderWidth: 1, margin: 10, marginHorizontal: 15, borderRadius: 10 }}>
//             <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Name :</Text>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 55, paddingLeft: 55 }}>{item.name}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Designation :</Text>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 25, paddingLeft: 35 }}>{item.designation}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Date :</Text>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 60, paddingLeft: 60 }}>{item.date}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
//                 <Text style={{ color: isDarkMode ? 'white' : 'black',fontSize: 18, fontWeight: 'bold' }}>Status :</Text>
//                 <Text style={{ color: isDarkMode ? 'white' : 'black',fontSize: 18, fontWeight: 'bold', marginLeft: 60, paddingLeft: 45 }}>{item.status}</Text>
//             </View>
//         </View>
//     )
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 22,
        // backgroundColor: '#80746b'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    imageBackgroundContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    imageBackground: {
        width: width,
        height: height
    },
    title: {
        paddingVertical: 25,
        paddingHorizontal: 30,
        fontSize: 21,
        color: "white",
        textAlign: 'center'
        // color: '#f0b20a'
        // color:'#d41b0b'
    },
    activityContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        // height:50
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    submitevent: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignContent: 'space-around',
        // alignSelf: 'flex-end',
        alignSelf: 'center',
        marginHorizontal: 10,
        marginTop: 5,
        paddingTop: 5,
        fontSize: 30,
        alignItems: 'center'
        // alignItems: 'flex-end',
        // backgroundColor:'orange'
        // borderCurve:20

    },
    button: {
        alignItems: "center",
        alignSelf: "center",
        // backgroundColor: '#eb692d',
        // backgroundColor: 'white',
        //color: '#fafaf7',
        color: 'white',
        fontSize: 20,
        //fontWeight: '200',
        // paddingHorizontal: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'flex-end',
        borderRadius: 21.5,

    },
    Icon: {
        position: 'absolute',
        // left: 20,
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent:'center',
        marginTop: 8
        // justifyContent:'center'

    },
    renderItemView:{
        flexDirection: 'row',
         marginHorizontal: 15 
    },
    renderItemText:{
        fontSize: 18,
        fontWeight: 'bold'
    }

});
export default About;