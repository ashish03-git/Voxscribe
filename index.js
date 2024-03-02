/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import {LoginManager} from 'react-native-fbsdk-next';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

// firbase initializations
export const firestoreConfig = {
  apiKey: 'AIzaSyA55Sh2UJABrW6besyP7EWhAeUonOxaiYg',
  appId: '1:494688737824:android:e402eff670244d8ed5fa45',
  authDomain: 'voxscribe-031001.firebaseapp.com',
  databaseURL:
    'https://webrtc.org/getting-started/firebase-rtc-codelab#enable_cloud_firestore',
  messagingSenderId: '1011295888314',
  projectId: 'voxscribe-031001',
  storageBucket: 'gs://voxscribe-031001.appspot.com',
};
// console.log(firebase.apps.length);
if (!firebase.apps.length) {
  firebase.initializeApp(firestoreConfig);
  // console.log(app);
}

// facebook login
LoginManager.setLoginBehavior('native_only');

AppRegistry.registerComponent(appName, () => App);
