/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase from '@react-native-firebase/app';
import { LoginManager } from 'react-native-fbsdk-next';

// firbase initializations
Firebase.initializeApp({
    apiKey: "AIzaSyA55Sh2UJABrW6besyP7EWhAeUonOxaiYg",
    appId:"1:494688737824:android:e402eff670244d8ed5fa45",
    // authDomain: "",
    databaseURL: "https://webrtc.org/getting-started/firebase-rtc-codelab#enable_cloud_firestore",
    projectId: "voxscribe-031001",
    storageBucket: "voxscribe-031001.appspot.com",
    // messagingSenderId: "948984656115"
  })

// facebook login
LoginManager.setLoginBehavior("native_only")

AppRegistry.registerComponent(appName, () => App);
