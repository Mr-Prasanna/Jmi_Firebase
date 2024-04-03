import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

  export const sendFcmToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log("Token fcm : ",token)
   const registerApi= axios.post('http://192.168.60.247:8080/register', {token});//192.168.60.247
   console.log("api works",registerApi)
    await axios.post('http://192.168.60.247:8080/register', {token});
  } catch (err) {
    //Do nothing
    console.log(err.response.data);
    return;
  }
};


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

 export async function GetFCMToken() {
  let fcmtoken = await AsyncStorage.getItem("fcmtoken");
  console.log(fcmtoken, "old token")
  if (!fcmtoken) {
    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log(fcmtoken, "new token");
        await AsyncStorage.setItem("fcmtoken", fcmtoken);
      }
      
    } catch (error) {
      console.log(error, "Error in fcmtoken")
    }
  }
}

export const NotificationListener = () => {
messaging().onNotificationOpenedApp( remoteMessage =>{
  console.log('Notification caused app to open from background state :',remoteMessage.notification)

});

messaging()
.getInitialNotification()
.then(remoteMessage =>{
  if(remoteMessage){
    console.log(
      'Notification caused app to open from quit state:',
      remoteMessage.notification,
    );
  }

});
// messaging().onMessage(async remoteMessage =>{
//   console.log("notification on foreground state.....",remoteMessage)
// })
}



// export const requestUserPermissions = async () => {
//   const authorizationStatus = await messaging().requestPermission();

//   if (authorizationStatus) {
//     // Register App with FCM
//     await messaging().registerDeviceForRemoteMessages();
    
//     // Generate FCM Token
//     await messaging().getToken();
//     console.log("Authorization Status - ", authorizationStatus);
//   }
// };

