// App.tsx file

import {View, Text} from 'tamagui';
import React, {useEffect} from 'react';
import {TamaguiProvider} from 'tamagui';
import appConfig from './tamagui.config';
import Navigation from './src/Navigation/Navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/Redux/ReduxStore';
// import {
//   StreamVideo,
//   StreamVideoClient,
//   User,
//   Logger,
// } from '@stream-io/video-react-native-sdk';

// const apiKey = 'np8ymdw2x6ym'; // the API key can be found in the "Credentials" section
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNoaXNoX3ZveF8wMSJ9.XhC4_HdLBWLjqWdra9XV917k77wYptFTB_ZTlC56sfU'; // the token can be found in the "Credentials" section
// const user: User = {
//   id: 'ashish_vox_01',
//   name: 'Ashish',
//   image:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriyfh0bCJ1Ntxe6soZ_rFVS5rr31zxIoNiftvkZOnfg&s',
//   // type: 'guest',
// }; // the user id can be found in the "Credentials" section
// const callId = 'NTBGsj5vBVuW'; // the call id can be found in the "Credentials" section

const App = () => {
  // const client = new StreamVideoClient({
  //   apiKey,
  //   token,
  //   user,
  // });
  return (
    <TamaguiProvider config={appConfig}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Provider store={store}>
          <Navigation />
        </Provider>
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

// agora call set up
//App.tsx
/*
import React, { useRef, useState, useEffect } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { PermissionsAndroid, Platform } from 'react-native';
import {
	ClientRoleType,
	createAgoraRtcEngine,
	IRtcEngine,
	ChannelProfileType,
} from 'react-native-agora';
import AgoraUIKit  from "agora-rn-uikit"
const appId = 'ca36e4abab944e1bbc2010ed553d727a';
const channelName = 'ashishcalling03';
const token = '007eJxSYPjrsbra6bKswZTfvYz/8/utmYoMbrMsOu2T8H75h92JvNsUGJITjc1STRKTEpMsTUxSDZOSko0MDA1SU0xNjVPMjcwTuyc9TV3Qw8Bg4x3GwsjAyMDCwMgA4jOBSWYwyQIm+RkSizMyizOSE3NyMvPSDYyZGQwNDAEBAAD//z92KTE=';
const uid = 101;

const App = () => {
	const agoraEngineRef = useRef < IRtcEngine > (); // Agora engine instance
	const [isJoined, setIsJoined] = useState(false);
	const [remoteUid, setRemoteUid] = useState(0);
	const [message, setMessage] = useState('');

	useEffect(() => {
		// Initialize Agora engine when the app starts
		setupVoiceSDKEngine();
	}, []);

	const join = async () => {
		if (isJoined) {
			return;
		}
		try {
			agoraEngineRef.current?.setChannelProfile(
				ChannelProfileType.ChannelProfileCommunication,
			);
			agoraEngineRef.current?.joinChannel(token, channelName, uid, {
				clientRoleType: ClientRoleType.ClientRoleBroadcaster,
			});
		} catch (e) {
			console.log(e);
		}
	};

	const setupVoiceSDKEngine = async () => {
		try {
			if (Platform.OS === 'android') {
				await getPermission();
			}
			agoraEngineRef.current = createAgoraRtcEngine();
			const agoraEngine = agoraEngineRef.current;
			agoraEngine.registerEventHandler({
				onJoinChannelSuccess: () => {
					showMessage('Successfully joined the channel'+ channelName);
					setIsJoined(true);
				},
				onUserJoined: (_connection, Uid) => {
					showMessage('Remote user joined with uid ' + Uid);
					setRemoteUid(Uid);
				},
				onUserOffline: (_connection, Uid) => {
					showMessage('Remote user left the channel. uid: ' + Uid);
					setRemoteUid(0);
				},
			});
			agoraEngine.initialize({
				appId: appId,
			});
		} catch (e) {
			console.log(e);
		}
	};

	const leave = () => {
		try {
			agoraEngineRef.current?.leaveChannel();
			setRemoteUid(0);
			setIsJoined(false);
			showMessage('You left the channel');
		} catch (e) {
			console.log(e);
		}
	};

	function showMessage(msg: string) {
		setMessage(msg);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>Calling App</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={join} style={styles.joinButton}>
					<Text style={styles.buttonText}>Join</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={leave} style={styles.leaveButton}>
					<Text style={styles.buttonText}>Leave</Text>
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.scroll} 
						contentContainerStyle={styles.scrollContainer}>
				{isJoined ? (
					<Text style={styles.infoText}>Local user uid: {uid}</Text>
				) : (
					<Text style={styles.infoText}>Join a channel</Text>
				)}
				{isJoined && remoteUid !== 0 ? (
					<Text style={styles.infoText}>
						Remote user uid: {remoteUid}
					</Text>
				) : (
					<Text style={styles.infoText}>
						Waiting for a remote user to join
					</Text>
				)}
				<Text style={styles.messageText}>{message}</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 20,
	},
	joinButton: {
		paddingHorizontal: 25,
		paddingVertical: 10,
		borderRadius: 8,
		backgroundColor: '#4CAF50',
		margin: 5,
	},
	leaveButton: {
		paddingHorizontal: 25,
		paddingVertical: 10,
		borderRadius: 8,
		backgroundColor: '#E57373',
		margin: 5,
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 16,
	},
	scroll: {
		flex: 1,
		backgroundColor: '#ffffff',
		width: '90%',
		padding: 10,
		borderRadius: 8,
	},
	scrollContainer: {
		alignItems: 'center',
	},
	infoText: {
		fontSize: 18,
		marginVertical: 10,
	},
	messageText: {
		fontSize: 16,
		fontStyle: 'italic',
		color: '#555555',
	},
});

const getPermission = async () => {
	if (Platform.OS === 'android') {
		await PermissionsAndroid.requestMultiple([
			PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
		]);
	}
};

export default App;
*/
