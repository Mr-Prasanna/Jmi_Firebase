import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { sendOTP, saveRegistrationFormData } from '../actions/registerAction';
import { loginRequest } from '../actions/authActions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Formik } from 'formik';
// import { validationSchema } from '../validation/Validation';
// import { registerRequest } from '../actions/registerAction';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Alert } from 'react-native';
import { REGISTER_API } from "../apis/api";
import OTPScreen from "./OtpScreen";
function RegisterScreen() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const successMsg = '';
    const errorMsg = '';
    const [error, setError] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();


    const isEmailValid = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    }
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    const handleValidate = () => {
        if (name.trim().length > 0) {
            setNameError('')
        } else {
            setNameError('Name Required')
        }
        if (email.trim().length > 0) {
            if (!isEmailValid(email.trim())) {
                setEmailError('Email invaild')
            } else {
                setEmailError('')
            }
        } else {
            setEmailError('Email Required');
        }

        if (password.trim() === '') {
            setPasswordError('Password Required!!!');
        }
        else if (password.length > 0 && password.length < 8) {
            setPasswordError('Password length should have 8 characters')
        }
        else {
            setPasswordError('')
        }

        if (confirmPassword.trim() === '') {
            setConfirmPasswordError('Confirm Password Required!!!')
        }
        else if (!confirmPassword === password) {
            setConfirmPasswordError('Confirm Password should match with password')
        }
        else {
            setConfirmPasswordError('')
        }

    }
    const handleRegister = () => {

        // navigation.navigate("OTP Verification", { email })

        const getRegisterData = {
            "name": name,
            "email": email,
            "password": password
        }
        dispatch(saveRegistrationFormData(getRegisterData, onSuccess, onError))
    };
    function onSuccess(response) {
        console.log("onSuccessRegisterResponse+++", response);
        if (response.status == "SUCCESS") {
            navigation.navigate("OTP Verification", { email })
        }
        else {
            Alert.alert("ErrorMsg", response.message);
        }
    }

    function onError(error) {
        console.log("onRegError+", error.message)
        Alert.alert("onRegError", error);
    }
    return (

        <View style={styles.container}>
            <View style={styles.acountTitle}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.description}>If you are a new user register this account and all the feilds are madatory.</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.iconContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setName(value)}
                        value={name}
                        placeholder='Name'
                        minLength={3}
                        maxLength={25}
                        onChange={handleValidate}
                    // inlineImageLeft="user"
                    // left={<TextInput.Icon icon="account" />}
                    />
                    <MaterialCommunityIcons name="account-circle" color={'#000'} size={26} style={styles.Icon} />

                </View>
                <Text style={{ color: 'red' }}>{nameError}</Text>
                <View style={styles.iconContainer}>
                    <TextInput
                        style={styles.input}

                        
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(value) => setEmail(value)}
                        value={email}
                        placeholder='Email'
                        onChange={handleValidate}
                    />
                     <MaterialCommunityIcons name="email" color={'#000'} size={26} style={styles.Icon} />

                </View>
                <Text style={{ color: 'red' }}>{emailError}</Text>
                {/* {touched.email && errors.email && <Text>{errors.email}</Text>} */}
                <View style={styles.iconContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setPassword(value)}
                    // onChangeText={(value) => handleChange('password', value)}
                    value={password}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    minLength={6}
                    maxLength={8}
                    onChange={handleValidate}
                />
                 <MaterialCommunityIcons name="lock" color={'#000'} size={26} style={styles.Icon} />

                </View>
                <Text style={{ color: 'red' }}>{passwordError}</Text>
                {/* {touched.password && errors.password && <Text>{errors.password}</Text>} */}
                <View style={styles.iconContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setConfirmPassword(value)}
                    // onChangeText={(value) => handleChange('password', value)}
                    value={confirmPassword}
                    placeholder="Enter Confirm Password"
                    secureTextEntry={true}
                    maxLength={8}
                    onChange={handleValidate}
                />
                 <MaterialCommunityIcons name="lock" color={'#000'} size={26} style={styles.Icon} />

                </View>
                <Text style={{ color: 'red' }}>{confirmPasswordError}</Text>

                <View style={styles.submitevent}>
                    <TouchableHighlight onPress={handleRegister}  >
                        <Text>Register</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.actbutton}>
                    <Text>If you have an account ?</Text>
                    <TouchableHighlight onPress={handleLogin}>
                        <View >
                            <Text style={{ color: 'red' }}> Login</Text>
                        </View>
                    </TouchableHighlight>

                </View>
                {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
            </View>

        </View>

    )

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    acountTitle: {
        backgroundColor: '#e0c71f',
        paddingBottom: 10
    },

    title: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 28,
        color: '#fff'
    },
    description: {
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
    },
    body: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 40
        // marginRight: 20
    },
    actbutton: {
        // alignItems:'center',
        color: "#f5f6f7",
        padding: 10,
        marginLeft: 20,
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: '900',
        flexDirection: 'row',
        marginTop: 10

    },

    submitevent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: '#eb692d',
        color: '#fafaf7',
        fontSize: 20,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginTop: 10

    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingBottom: 10,
    },
    Icon: {
        position: 'absolute',
        right: 60,
        alignSelf: 'center',
        alignItems: 'center',

    }

})
export default RegisterScreen;