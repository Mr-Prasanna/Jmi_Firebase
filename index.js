
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
import Firebase from "@react-native-firebase/app"




AppRegistry.registerComponent(appName, () => App);
