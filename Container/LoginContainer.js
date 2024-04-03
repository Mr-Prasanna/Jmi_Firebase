import React, { useState,useEffect } from "react";
import { useTheme } from '@react-navigation/native';
import LoginScreen from "../screens/LoginScreen";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_SUCCESS, loginRequest, LOGIN_REQUEST } from '../actions/authActions';
import { Alert } from "react-native";
import SplashScreen from 'react-native-splash-screen';
function LoginContainer() {
    // const initialState = {
    //     email: '',
    //     password: '',
    // };
    // const [inputs, setInputs] = useState(initialState);
    // const handleOnchange = (text, input) => {
    //     setInputs(prevState => ({ ...prevState, [input]: text }));
    // };
    // const submitHandler = () => {
    //     console.log(inputs);
    // };
    // const [email, setEmail] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [emailValidError, setEmailValidError] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    // const [incorrectMsg, setIncorrectMsg] = useState('');
    // const error = useSelector((state) => state.login.error);
    // const dispatch = useDispatch();

    // const navigation = useNavigation();
    // const isEmailValid = (initialState.email) => {
    //     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //     return emailPattern.test(initialState.email);
    // };
    // const handleValidate = () => {
    //     // console.log("EMAIL", initialState.email)
    //     if (initialState.email.trim() == '') {
    //         setEmailError('Email Required');
    //     }
    //     // else if (!isEmailValid(email.trim())) {
    //     //     setEmailError('Email invaild')
    //     // }
    //     else {
    //         setEmailError('')
    //     }

    //     if (initialState.password.trim() !== '') {
    //         setPasswordError('');
    //     }
    //     else {
    //         setPasswordError('Password Required')
    //     }
    // }

    // const handleRegister = () => {
    //     navigation.navigate('Register');
    // }
    // const handleLogin = () => {
    //     handleValidate()
    //     const getData = {
    //         "email": initialState.email,
    //         "password": initialState.password
    //     }
    //     dispatch(loginRequest(getData, onSuccess, onError));//, onFailure
    //     console.log("getData", getData);
    //     console.log("onSuccess", onSuccess.bind)
    // };

    // function onSuccess(response) {
    //     console.log("onSuccessResponse+++", response);
    //     if (response.status == "SUCCESS") {
    //         navigation.navigate("Home")
    //     }
    //     else {
    //         Alert.alert("ErrorMsg", response.message);
    //     }
    // }

    // function onError(error) {
    //     console.log("onError", error.message)
    //     Alert.alert("onError", error);
    // }
    useEffect(()=> {
        SplashScreen.hide();
      })
    return (
        <LoginScreen />

        // email={email}
        // emailError={emailError}
        // passwordError={passwordError}
        // onSuccess={onSuccess}
        // onError={onError}
        // submitHandler={submitHandler}
        // handleOnchange={handleOnchange}
        // handleLogin={handleLogin}
        // handleRegister={handleRegister}
        // handleValidate={handleValidate}
       
    )
}
export default LoginContainer;