import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
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
// import { 
//   Provider as PaperProvider, 
//   DefaultTheme as PaperDefaultTheme,
//   MD2DarkTheme as PaperDarkTheme 
// } from 'react-native-paper';
// import SplashScreen from 'react-native-splash-screen';
import { requestUserPermission,NotificationListener,GetFCMToken} from "./src/utils/pushnotification_helper";

export const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
function App() {
  useEffect(()=>{
    requestUserPermission();
    NotificationListener();
    GetFCMToken();
  },[])
  // useEffect(()=> {
  //   // SplashScreen.hide();
  //   SplashScreen.hide;
  // })
  
  // .CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     background: '#333333',
  //     text: '#ffffff'
  //   }
  // }
  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    // <PaperProvider theme={theme}>

    <Provider store={store}>
      <SafeAreaProvider>
        {/* <ThemeProvider> */}
          <NavigationContainer 
          // theme={theme}
          >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginContainer} />
              {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="OTP Verification" component={OTPScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        {/* </ThemeProvider> */}
      </SafeAreaProvider>
    </Provider>
    // </PaperProvider>
  )
}

export default App;
