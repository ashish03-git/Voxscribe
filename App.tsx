import {View, Text} from 'tamagui';
import React, {useEffect} from 'react';
import {TamaguiProvider} from 'tamagui';
import appConfig from './tamagui.config';
import Navigation from './src/Navigation/Navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  StreamVideo,
  StreamVideoClient,
  User,
  Logger,
} from '@stream-io/video-react-native-sdk';

const apiKey = 'np8ymdw2x6ym'; // the API key can be found in the "Credentials" section
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNoaXNoX3ZveF8wMSJ9.XhC4_HdLBWLjqWdra9XV917k77wYptFTB_ZTlC56sfU'; // the token can be found in the "Credentials" section
const user: User = {
  id: 'ashish_vox_01',
  name: 'Ashish',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriyfh0bCJ1Ntxe6soZ_rFVS5rr31zxIoNiftvkZOnfg&s',
  // type: 'guest',
}; // the user id can be found in the "Credentials" section
const callId = 'NTBGsj5vBVuW'; // the call id can be found in the "Credentials" section

const App = () => {
  const client = new StreamVideoClient({
    apiKey,
    token,
    user,
  });
  return (
    <TamaguiProvider config={appConfig}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <StreamVideo client={client}>
          <Navigation />
        </StreamVideo>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export default App;

// steam call setupt
/*
import {useState,useMemo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeScreen} from './src/HomeScreen';
import {CallScreen} from './src/CallScreen';

const apiKey = 'np8ymdw2x6ym'; // the API key can be found in the "Credentials" section
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNoaXNoX3ZveF8wMSJ9.XhC4_HdLBWLjqWdra9XV917k77wYptFTB_ZTlC56sfU'; // the token can be found in the "Credentials" section
const user: User = {
  id: 'ashish_vox_01',
  name:"Ashish",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriyfh0bCJ1Ntxe6soZ_rFVS5rr31zxIoNiftvkZOnfg&s"
  // type: 'guest',
}; // the user id can be found in the "Credentials" section
const callId = 'NTBGsj5vBVuW'; // the call id can be found in the "Credentials" section

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const goToCallScreen = () => setActiveScreen('call-screen');
  const goToHomeScreen = () => setActiveScreen('home');

  const client = new StreamVideoClient({
    apiKey,
    token,
    user,
  });

  const theme = useMemo(
    () => ({
      callControlsButton: {
        container: {
          borderRadius: 10,
        },
      },
      hangupCallButton: {
        container: {
          backgroundColor: 'blue',
        },
      },
      toggleAudioPublishingButton: {
        container: {
          backgroundColor: 'green',
        },
      },
    }),
    [],
  );

  return (
    <StreamVideo client={client} style={theme}>
    <SafeAreaView style={styles.container}>
      {activeScreen === 'call-screen' ? (
        <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
      ) : (
        <HomeScreen goToCallScreen={goToCallScreen} />
      )}
    </SafeAreaView>
    </StreamVideo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
*/
