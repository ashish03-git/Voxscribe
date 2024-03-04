// import {useEffect} from 'react';
// import React from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';
// import {
//   useStreamVideoClient,
//   Call,
//   User,
//   CallContent,
//   StreamCall,
//   CallControlProps,
//   HangUpCallButton,
//   ToggleAudioPublishingButton as ToggleMic,
//   ToggleVideoPublishingButton as ToggleCamera,
//   useCall,
//   useCallStateHooks,
// } from '@stream-io/video-react-native-sdk';
// import {useNavigation} from '@react-navigation/native';
// import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
// import Colors from './Extra/Colors';

// const apiKey = 'np8ymdw2x6ym'; // the API key can be found in the "Credentials" section
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIn0.t8xKs1XiP3xLtbC0vqyGecX2DvCcAy-bvB8zGF_9EEg'; // the token can be found in the "Credentials" section
// const user: User = {
//   id: 'ashish_vox_01',
//   type: 'guest',
// }; // the user id can be found in the "Credentials" section
// const callId = 'NTBGsj5vBVuW'; // the call id can be found in the "Credentials" section

// export const CallScreen = () => {
//   const [call, setCall] = React.useState<Call | null>(null);
//   const client = useStreamVideoClient();

//   useEffect(() => {
//     if (client) {
//       const call = client.call('default', callId);
//       call.join({create: true}).then(() => setCall(call));
//     }
//   }, [client]);

//   if (!call) {
//     return <Text>Joining call...</Text>;
//   }

//   const CustomCallControls = (props: CallControlProps) => {
//     const call = useCall();
//     return (
//       <View style={styles.customCallControlsContainer}>
//         <ToggleMic onPressHandler={call?.microphone.toggle} />
//         <ToggleCamera onPressHandler={call?.camera.toggle} />
//         <HangUpCallButton onHangupCallHandler={props.onHangupCallHandler} />
//       </View>
//     );
//   };

//   const CustomTopView = () => {
//     const {useParticipants, useDominantSpeaker} = useCallStateHooks();
//     const participants = useParticipants();
//     const dominantSpeaker = useDominantSpeaker();
//     return (
//       <View style={styles.topContainer}>
//         <Text ellipsizeMode="tail" numberOfLines={1} style={styles.topText}>
//           Video Call between {participants.map(p => p.name).join(', ')}
//         </Text>
//         {dominantSpeaker?.name && (
//           <Text style={styles.topText}>
//             Dominant Speaker: {dominantSpeaker?.name}
//           </Text>
//         )}
//       </View>
//     );
//   };

//   const navigation = useNavigation();

//   return (
//     <StreamCall call={call}>
//       <View style={styles.container}>
//         <Text style={styles.text}>Here we will add Video Calling UI</Text>
//         <CallContent
//           onHangupCallHandler={() => navigation.goBack()}
//           CallControls={CustomCallControls}
//           CallTopView={CustomTopView}
//         />
//       </View>
//     </StreamCall>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   customCallControlsContainer: {
//     position: 'absolute',
//     bottom: 20,
//     paddingVertical: 10,
//     width: responsiveScreenWidth(98),
//     marginHorizontal: 20,
//     flexDirection: 'row',
//     alignSelf: 'center',
//     justifyContent: 'space-around',
//     backgroundColor: Colors.white,
//     borderRadius: responsiveScreenWidth(20),
//     // borderColor: 'black',
//     // borderWidth: 5,
//     zIndex: 5,
//   },
//   topContainer: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   topText: {
//     color: 'white',
//   },
// });
