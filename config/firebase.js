import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2IrbXmZmwv_3t1q7RHloTcjwnKxD8cEo",
  authDomain: "fir-auth-88ab4.firebaseapp.com",
  projectId: "fir-auth-88ab4",
  storageBucket: "fir-auth-88ab4.appspot.com",
  messagingSenderId: "420692160957",
  appId: "1:420692160957:web:bb402ce4560f63d4d722d4"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);