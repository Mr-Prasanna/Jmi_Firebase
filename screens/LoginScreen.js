// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity,Pressable, ActivityIndicator, TouchableHighlight, StyleSheet, Image, Alert, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, DataTable } from "react-native-paper";
import { LOGIN_SUCCESS, loginRequest, LOGIN_REQUEST } from '../actions/authActions';
// import axios from 'axios';
import { LOGIN_API } from '../apis/api';
// import { loginSuccess, loginFailure } from './actions';
import LoginContainer from '../Container/LoginContainer';
// import SplashScreen from 'react-native-splash-screen';
import { Input, Block, theme, Icon } from 'galio-framework';
import { Button } from '../components';
import { Images, nowTheme } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');
import { useTheme } from '@react-navigation/native';
// import { useTheme } from '../ThemeContext';
function LoginScreen(props) {

    const [email, setEmail] = useState('j.prasanna102@gmail.com');
    const [emailError, setEmailError] = useState('');
    // const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('pass@123');
    const [hidePass, setHidePass] = useState(true)
    const [passwordError, setPasswordError] = useState('');
    const [incorrectMsg, setIncorrectMsg] = useState('');
    const [animating, setAnimating] = useState(false);
    const dispatch = useDispatch();
    const { colors } = useTheme();
    //     const { isDarkMode, toggleTheme } = useTheme();

    //   const screenStyle = {
    //     backgroundColor: isDarkMode ? '#333' : '#fff',
    //     color: isDarkMode ? '#fff' : '#333',
    //   };

    // const error = useSelector((state) => state.login.error);
    // useEffect(()=> {
    //     // SplashScreen.hide();
    //     SplashScreen.hide();
    //   })

    const navigation = useNavigation();
    const isEmailValid = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    }
    const handleValidate = () => {
        if (email.trim() == '') {
            setEmailError('Email Required');
        }
        else if (!isEmailValid(email.trim())) {
            setEmailError('Email invaild')
        }
        else {
            setEmailError('')
        }

        if (password.trim() !== '') {
            setPasswordError('');
        }
        else {
            setPasswordError('Password Required')
        }
    }

    const closeActivityIndicator = () => {
        setAnimating(true);
        setTimeout(() => {
            setAnimating(false);
            navigation.navigate("Home");
        }, 1000);
    };
    const handleSignIn = () => {
        // navigation.navigate("Home")
        if (email === 'j.prasanna102@gmail.com' && password === 'pass@123') {
            // Alert.alert("Success", "Login Successfully")
            closeActivityIndicator();
            // navigation.navigate("Home")
        }
        else {
            Alert.alert("Error", "Login Failed")
        }
    }
    const handleLogin = () => {
        // navigation.navigate("Timesheet")
        navigation.navigate("Home")
        // const getData = {
        //     "email": email,
        //     "password": password
        // }
        // dispatch(loginRequest(getData, onSuccess, onError));//, onFailure
        // console.log("getData", getData);
        // console.log("onSuccess", onSuccess.bind)
    };

    function onSuccess(response) {
        console.log("onSuccessResponse+++", response);
        if (response.status == "SUCCESS") {
            // Alert.alert("Success", "Login Successfully")
            navigation.navigate("Home")
        }
        else {
            Alert.alert("ErrorMsg", response.message);
        }
    }

    function onError(error) {
        console.log("onError", error.message)
        Alert.alert("onError", error);
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        // <ScrollView>
        <View style={[styles.container,]}>
            <Block flex middle>
                <ImageBackground
                    // source={Images.Onboarding}
                    source={Images.RegisterBackground}
                    style={{ flex: 1, height: height, width, zIndex: 1 }}
                >

                    <View style={styles.image}>
                        <Image resizeMode={'cover'} source={require('../images/logo-rbg1.png')} />
                    </View>
                    {/* <View style={{ marginVertical: 45, paddingVertical: 55 }}> */}
                    {/* <Button title="Toggle Theme" onPress={toggleTheme} /> */}
                    {/* <Switch onPress={toggleTheme}/> */}
                    <View>
                        {/* <TouchableOpacity style={{ backgroundColor: colors.card }}>
                            <Text style={{ color: colors.text }}>Button!</Text>
                        </TouchableOpacity> */}
                        <Card style={styles.mainCardView}>
                            <Text style={styles.title}>LOGIN</Text>
                            <Block style={{ marginVertical: 15 }}>
                                <Block style={styles.blockView}>
                                    <TextInput
                                        id='email'
                                        // style={styles.input}
                                        style={styles.textInputs}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        // onChangeText={text => props.handleOnchange(text, 'email')}
                                        onChangeText={(value) => setEmail(value)}
                                        value={email}
                                        placeholder='Email ID'
                                        required={true}
                                        onChange={handleValidate}
                                    />
                                    <MaterialCommunityIcons name="email" color={'#000'} size={24} style={styles.Icon} />
                                </Block>
                                {/* </View> */}
                                {emailError && <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 }}>{emailError}</Text>}
                                {/* {props.emailError && <Text style={{ color: 'red' }}>{props.emailError}</Text>} */}
                                <Block style={styles.blockView}>
                                    <TextInput
                                        style={styles.textInputs}
                                        onChangeText={(value) => setPassword(value)}
                                        value={password}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        maxLength={8}
                                        onChange={handleValidate}
                                    />
                                    <MaterialCommunityIcons name="lock" color={'#000'} size={24} style={styles.Icon} />
                                    {/* {
                                        password &&
                                        <MaterialCommunityIcons style={{ paddingRight: 15, }}
                                            name={password ? "eye-outline" : "eye-off-outline"}
                                            size={20} color='gray'
                                            onPress={() => setPassword(!password)} />
                                    } */}
                                </Block>
                                {passwordError && <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 }}>{passwordError}</Text>}
                                {/* {props.passwordError && <Text style={{ color: 'red' }}>{props.passwordError}</Text>} */}
                                {/* {error && <Text>{error}</Text>} */}
                                <View style={styles.submitevent}>
                                    <Block>
                                        <Button color="primary" round style={styles.createButton} onPress={handleSignIn}>
                                            <Text
                                                style={{ fontFamily: 'montserrat-bold', color: 'white' }}
                                                size={14}
                                            // color={nowTheme.COLORS.WHITE}
                                            >
                                                LOGIN
                                            </Text>
                                            <MaterialCommunityIcons name="arrow-right-circle" color={'white'} size={24} style={styles.Icon} />
                                        </Button>
                                    </Block>
                                </View>
                            </Block>

                            <View style={styles.actbutton}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Don't have an account ?</Text>
                                <TouchableHighlight onPress={handleRegister}>
                                    <View >
                                        <Text style={styles.signupBtn}>Sign up</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            {handleSignIn && <ActivityIndicator
                                animating={animating}
                                color="#bc2b78"
                                size="large"
                                style={styles.activityIndicator}
                            />}
                            {/* </ImageBackground> */}
                        </Card>

                        {/* <Text>{incorrectMsg}</Text> */}
                    </View>
                </ImageBackground>
            </Block>

        </View>
        // </ScrollView>


    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#61A3BA',
        backgroundColor: '#fff',
        // backgroundColor: '#527853',
        // alignItems: 'center',
        // backgroundColor:' #2aa7f5',
        // backgroundColor: '#6678ed',
        justifyContent: 'center',
    },
    image: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 90,
        paddingTop: 95,
        height: height * 0.2,
        marginBottom: 15
        // marginBottom:5
        // paddingTop: 50
        // paddingVerticle:30
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 28,
        // color: '#f0b20a',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
    },
    description: {
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        color: '#d1220a'
    },
    searchIcon: {
        padding: 10,
    },
    blockView: {
        width: width * 0.7,
        marginBottom: 15,
        alignSelf: 'center'
    },
    textInputs: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 21.5,
        color: 'black',
        // color: '#b5c9f5',
        paddingLeft: 50,
        backgroundColor: 'white',
        marginHorizontal: 5,
        alignContent: 'center'
        // paddingVertical:5
        // marginVertical:10
    },
    input: {
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        borderRadius: 21.5,
        // marginRight: 20
        textAlign: 'center',
        fontFamily: 'montserrat-regular',
        color: '#78c2fa'
    },
    passwordInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        fontSize: 10,
        margin: 20,
        alignSelf: 'flex-end',
    },
    pwd: {
        flexDirection: 'row',
        // marginLeft: 10,
        // textAlign: "right",
        color: '#2196f3',
        // alignSelf: "flex-start",
        justifyContent: 'flex-end'
    },

    actbutton: {
        // alignItems:'center',
        color: "#f5f6f7",
        // padding: 10,
        marginLeft: 20,
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: '800',
        flexDirection: 'row',
        // marginVertical:60,
    },
    buttons: {
        marginTop: 25,
        marginBottom: 40,
        backgroundColor: '#fc6626',
    },
    button: {
        // alignItems: "center",
        marginHorizontal: 0,
        // backgroundColor: '#eb692d',
        backgroundColor: '#fc6626',
        color: '#fafaf7',
        fontSize: 20,
        //fontWeight: '200',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 10

    },
    submitevent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignSelf: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
        // paddingBottom: 10,
    },
    Icon: {
        position: 'absolute',
        left: 20,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 12
        // justifyContent:'center'

    },
    mainCardView: {
        //  height: 360, width: 350, 
        width: width * 0.9,
        height: height * 0.45,
        marginHorizontal: 30,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: '#050e42',
        alignItem: 'center',
        alignSelf: 'center',
        display: 'flex',
        paddingVertical: 10
    },
    mainCardView1: {
        // backgroundColor: 'invisible',
        // backgroundColor: '#f0eee9',
        // backgroundColor:'#4f3cc9',
        // backgroundColor:'#1d2b91',
        // backgroundColor:'#383333',
        backgroundColor: '#050e42',
        height: 350,
        borderWidth: 2,
        borderColor: 'white',
        // opacity:0.2
        marginHorizontal: 15,
        paddingTop: 10,
        marginVertical: 5

    },
    signupBtn: {
        fontWeight: '700',
        color: 'red',
        fontSize: 18,
        marginLeft: 5,
        //    color:'red',
        //    color: '#f05522'

    }
    ,
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 21.5,
        marginHorizontal: 5
    },
    imageBackgroundContainer: {
        // width: width,
        // height: height,
        resizeMode: 'contain',
        padding: 0,
        zIndex: 1
    },
    imageBackground: {
        // width: width,
        // height: height
        marginTop: 0,
        paddingTop: 20,
        resizeMode: 'cover',
        // paddingHorizontal:40
    },


});
export default LoginScreen;
