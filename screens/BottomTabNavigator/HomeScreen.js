import React, { Component, useEffect, useState,useContext } from "react";
import { View, Text, Image, TouchableHighlight, BackHandler, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Card } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { BIRTHDAY_LIST_API } from "../../apis/api";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Images, nowTheme } from '../../constants';
import { SHOW_BIRTHDAY_LIST, showBirthdayDetails } from "../../actions/birthdayAction";
import { useTheme } from '@react-navigation/native';

import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";

const { width, height } = Dimensions.get('screen');
function Home(isActive) {

    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const navigation = useNavigation();
    const [empDetails, setEmpDetails] = useState('');
    // const [dob,SetDob]=useState('');
    const dispatch = useDispatch();
    // const { colors } = useTheme();
    // const theme = useTheme();
    const handleLogin = () => {
        navigation.navigate('Login');
    }

    useEffect(() => {
        handleBirthdayData();
    }
    )
    const handleBirthdayData = () => {
        fetch(BIRTHDAY_LIST_API, {
            method: 'POST'
        }).then((response) => {
            response.json().then((data) => {
                // console.log("dataResponse++", data.resultdata)
                setEmpDetails(data.resultdata)
            })

            // response.json().then(i => i.forEach(i => console.log(i.responseData.First_Name,i.responseData.DOB)))
        }).catch((err) => {
            console.log(`Error: ${err}`)
        });
    }
    // console.log("empDetails", empDetails)

    const handleBirthdayInfo = () => {
        dispatch(showBirthdayDetails(), onSuccess, onError);
    }
    function onSuccess(response) {
        // console.log("birthday details are :", response)
    }

    function onError(error) {
        console.log('onError response:', error)
    }
    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <ImageBackground
                    // source={Images.Onboarding}
                    source={require('./../../images/registerImg.jpg')}
                    style={{ flex: 1, height: height, width, zIndex: 1 }}
                >
                    <View style={{ margin: 15 }}>

                        <Card style={{backgroundColor: isActive ? activeColors.primary : activeColors.text}}>
                            <View>
                                <Text style={[styles.birthTitle,{color: isActive ? activeColors.text : activeColors.primary}]}>Birthdays</Text>
                            </View>
                            <View style={styles.birthdayDetails}>
                                <View style={styles.contents}>
                                    <Image source={require('./../../images/userProfile.jpg')} style={styles.imagesize} />
                                    <Text style={styles.contents}>KUMAR</Text>
                                    <Text style={[styles.contentsDate ,{color: isActive ? activeColors.text : activeColors.primary}]}>17 February</Text>
                                    {/* <Text style={styles.contents}>Year</Text> */}
                                </View>
                                <View>
                                    <Image source={require('./../../images/userProfile.jpg')} style={styles.imagesize} />
                                    <Text style={styles.contents}>DINESH</Text>
                                    <Text style={[styles.contentsDate,{color: isActive ? activeColors.text : activeColors.primary}]}>22 February</Text>
                                    {/* <Text style={styles.contents}>Year</Text> */}
                                </View>

                            </View>
                            {/* <View >
                                <FlatList
                                    contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 15 }}
                                    data={empDetails.slice(0, 2)}
                                    renderItem={renderItemUI}
                                    keyExtractor={(item) => item.EmpId}
                                />
                            </View> */}
                        </Card>
                    </View>
                    <View style={{ marginVertical: 25, margin: 15,backgroundColor: isActive ? activeColors.primary : activeColors.text}}>
                        <Calendar
                    theme={{
                        // backgroundColor:'green',
                        calendarBackground:{
                            backgroundColor: isActive ? activeColors.primary : activeColors.text,
                            color: isActive ? activeColors.text : activeColors.primary,
                        },
                       dayTextColor:'#2877ed',
                        // contentStyle:'black',
                        // monthTextColor:isActive?activeColors.text:activeColors.primary,
                        
                        //monthTextColor:{color: isActive ? activeColors.text : activeColors.primary},
                        // dayTextColor:{color: isActive ? activeColors.primary : activeColors.text},
                        // dayTextColor:{color: isActive ? activeColors.text : activeColors.primary},
                        todayBackgroundColor:'yellow'
                    }}
                        // theme={{backgroundColor:'blue'}}
                             style={[styles.calenderStyle,
                                // {color: isActive ? activeColors.text : activeColors.primary},
                                // {backgroundColor: isActive ? activeColors.primary : activeColors.text}
                            ]}
                        />
                    </View>
                    <View>
                        {/* <View style={{backgroundColor:'white' }}> */}
                        <Card style={{ padding: 10, marginHorizontal: 15, backgroundColor: isActive ? activeColors.primary : activeColors.text, color: 'black' }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={[styles.announcementTitle,
                                {color: isActive ? activeColors.text : activeColors.primary},
                ]}>Announcements</Text>
                                <Text style={[styles.announcementContent,{color: isActive ? activeColors.text : activeColors.primary},
                ]}>Expenses bills to be claimed every month</Text>
                                <Text style={[styles.announcementContent,{color: isActive ? activeColors.text : activeColors.primary},
                ]}>All of you are requested to submit all leave/time sheets every week</Text>
                            </View>
                        </Card>
                    </View>

                </ImageBackground>
            </View>
        </ScrollView>
    );
}

const renderItemUI = ({ item }) => {
    // console.log('item++++', item)
    //style={styles.contents} 
    return (
        <View style={styles.birthdayDetails}>
            <View style={{ flexDirection: 'column' }}>
                <Image source={require('./../../images/userProfile.jpg')} style={styles.imagesize} />
                <Text style={styles.contents}>{item.First_Name}</Text>
                {/* <Text style={styles.contents}>{item.DOB}</Text> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: '#527853',
        // backgroundColor: '#61A3BA'
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor:'#fad587'
    },
    mainCardView: {
        height: 10,
        width: 10,
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row"
    },
    calenderStyle: {
        borderRadius: 10,
    },
    announcementTitle: {
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 7,
        fontSize: 20,
        color: 'black'
    },
    announcementContent: {
        fontSize: 18,
        marginBottom: 5,
        color: 'black'
    },
    birthTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 5,
        fontWeight:'400',
        //color: isActive ? activeColors.text : activeColors.primary,
        // color:'black',
    
    },
    birthdayDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        marginHorizontal: 10,
        textAlign: "center",
    },
    imagesize: {
        // marginVertical: 30
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10
    },
    contents: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#2da4ed',
        // textTransform: 'capitalize'
    },
    contentsDate: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'black',
        // textTransform: 'capitalize'
    }
    // birthdayDetails: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     justifyContent: 'space-evenly',
    //     marginVertical: 10,
    //     textAlign: "center"
    // },
    // imagesize: {
    //     // marginVertical: 30
    //     width: 100,
    //     height: 100,
    //     resizeMode: 'cover',
    //     borderRadius: 10
    // },
    // contents: {
    //     alignSelf: 'center',
    //     fontSize: 20,
    //     textTransform: 'capitalize'
    // }

})
export default Home;