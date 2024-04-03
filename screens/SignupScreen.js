import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Image, TouchableHighlight, StyleSheet, Dimensions, ImageBackground, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../constants/Images';
import { Block, } from 'galio-framework';
import { Card } from "react-native-paper";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get('screen');

function SignupScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [animating, setAnimating] = useState(false);

    const closeActivityIndicator = () => {
        setAnimating(true);
        setTimeout(() => {
            setAnimating(false);
            navigation.navigate("Login");
        }, 1000);
    };

    const handleLogin = () => {
        // closeActivityIndicator();
        navigation.navigate('Login');
    }


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

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                closeActivityIndicator();
                // Alert.alert("Success", "Register successfully", [{ text: "OK", onPress: () => { navigation.navigate('Login') } }]);

            } catch (err) {
                // Alert.alert("Error", err.message)
                Alert.alert("Error", "This email is already in use")
                console.log("get error : ", err.message);
            }
        }
    }
    return (

        <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 0, flexDirection: 'column',justifyContent: 'center'}} 
        behavior="position" enabled   
        keyboardVerticalOffset={200}
        >
            <View style={styles.container}>
                <Block flex middle>
                    <ImageBackground
                        // source={Images.Onboarding}
                        // source={Images.ProfileBackground}
                      source={Images.RegisterBackground}
                        style={{ flex: 1, height: height, width, zIndex: 1 }}
                    >

                        <View style={styles.image}>
                            {/* <Image resizeMode={'cover'} source={require('../images/register1.png')} /> */}
                        </View>
                        <View>
                            <Card style={styles.mainCardView}>
                                <Text style={[styles.title]}>
                                    REGISTER</Text>
                                <Block style={{ marginVertical: 15 }}>
                                    <Block style={styles.blockView}>
                                        <TextInput
                                            
                                            style={styles.textInputs}
                                            onChangeText={(value) => setEmail(value)}
                                            value={email}
                                            placeholder='Email ID'
                                            placeholderTextColor={'#0a0a0a'}
                                            //required={true}
                                            onChange={handleValidate}
                                        />

                                        <MaterialCommunityIcons name="email" color={'#000'} size={24} style={styles.Icon} />
                                    </Block>
                                    {<Text style={{ color: 'red', marginLeft: 30, paddingLeft: 25 }}>{emailError}</Text>}

                                    {/* {emailError && <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 }}>{emailError}</Text>} */}

                                    <Block style={styles.blockView}>
                                        <TextInput
                                            style={styles.textInputs}
                                            onChangeText={(value) => setPassword(value)}
                                            value={password}
                                            placeholder="Password"
                                            placeholderTextColor={'#0a0a0a'}
                                            secureTextEntry={true}
                                            // maxLength={8}
                                            onChange={handleValidate}
                                        />

                                        <MaterialCommunityIcons name="lock" color={'#000'} size={24} style={styles.Icon} />

                                    </Block>
                                    {<Text style={{ color: 'red', marginLeft: 30, paddingLeft: 25 }}>{passwordError}</Text>}

                                    {/* {passwordError && <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 }}>{passwordError}</Text>} */}
                                    
                                    <View style={styles.submitevent}>
                                        <Block>
                                            <TouchableOpacity color="primary" round style={styles.loginButton} onPress={handleSubmit}>
                                                <Text
                                                    style={{ fontFamily: 'montserrat-bold', color: 'white' }}
                                                    size={14}
                                                // color={nowTheme.COLORS.WHITE}
                                                >
                                                    REGISTER
                                                </Text>
                                                {/* <MaterialCommunityIcons name="" color={'white'} size={24} style={styles.Icon} /> */}
                                            </TouchableOpacity>
                                        </Block>
                                    </View>
                                </Block>

                                <View style={styles.actbutton}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>If you already register?</Text>
                                    <TouchableHighlight onPress={handleLogin}>
                                        <View >
                                            <Text style={styles.signupBtn}>Login</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                {handleSubmit && <ActivityIndicator
                                    animating={animating}
                                    // color="#bc2b78"
                                    color="#f2711b"
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
        </KeyboardAwareScrollView>
    )

}

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
        marginTop: 80,
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
        //   marginBottom: 15,
        marginBottom: 10,
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
        height: height * 0.46,
        marginHorizontal: 30,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: '#050e42',
        //   backgroundColor:'#125dde',
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
    loginButton: {
        // alignItems: "center",
        backgroundColor: '#eb692d',
        // backgroundColor: 'white',
        //color: '#fafaf7',
        //color:'white',
        fontSize: 20,
        //fontWeight: '200',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 21.5,

    },


});
export default SignupScreen;