import 'react-native-gesture-handler'
import { Appearance,Alert } from "react-native";
import React, { useEffect,useState,useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { 
//   NavigationContainer, 
//   DefaultTheme as NavigationDefaultTheme,
//   DarkTheme as NavigationDarkTheme
// } from '@react-navigation/native';
import {
  // NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';

// import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import store from './store/store';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootSaga from './sagas/rootSaga';
import RegisterScreen from './screens/RegisterScreen';
import OTPScreen from './screens/OtpScreen';
import HelpScreen from './screens/HomePage';
import HomePage from './screens/HomePage';
import { Text, View } from 'react-native';
// import { ThemeProvider } from './ThemeContext';
import LoginContainer from './Container/LoginContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { ThemeProvider } from './themes/ThemeContext';
import { ThemeContext } from './context/ThemeContext';
import { storeData, getData } from "./config/asyncStorage";

import {requestUserPermission,NotificationListener,GetFCMToken,sendFcmToken} from "./src/utils/pushnotification_helper";
import {PermissionsAndroid} from 'react-native';
import { PreferencesContext } from './themes/PreferencesContext';
import SignupScreen from './screens/SignupScreen';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
// import { requestUserPermission } from './src/utils/notificationService';
export const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)



function App() {
 
  const [theme, setTheme] = useState({ mode: Appearance.getColorScheme() });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode };
    }
    setTheme(newTheme);
    storeData("homeTheme", newTheme);
  };

  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("homeTheme");
      if (themeData) {
        updateTheme(themeData);
      }
    } catch (message) {
      Alert.alert("message",message);
    } 
  };
  useEffect(()=>{
    sendFcmToken();
    // requestUserPermissions();
    // requestUserPermission();
    // NotificationListener();
    // GetFCMToken();
    fetchStoredTheme()
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme
      setTheme({ mode: colorScheme });
    });
  },[])




  // useEffect(()=> {
  //   // SplashScreen.hide();
  //   SplashScreen.hide;
  // })
  
  
  return (
   
    <ThemeContext.Provider value={{ theme,updateTheme}}>
    <Provider store={store}>
      <SafeAreaProvider>
      
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ 
              headerShown: false,
              // headerStyle: { backgroundColor: colors.backgrounds.default },
              }}>
              <Stack.Screen name="Login" component={LoginContainer} />
              {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
              <Stack.Screen name="Home" component={HomePage} />
              {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
              <Stack.Screen name="Register" component={SignupScreen} />
              <Stack.Screen name="OTP Verification" component={OTPScreen} />
            </Stack.Navigator>
          </NavigationContainer>
         
      </SafeAreaProvider>
    </Provider>
    </ThemeContext.Provider>
    
  )
}

export default App;
