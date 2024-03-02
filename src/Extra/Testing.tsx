// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { CallScreen } from '../CallScreen';

// const apiKey = 'REPLACE_WITH_API_KEY'; // the API key can be found in the "Credentials" section
// const token = 'REPLACE_WITH_TOKEN'; // the token can be found in the "Credentials" section
// const userId = 'REPLACE_WITH_snowy-term-7'; // the user id can be found in the "Credentials" section
// const callId = 'REPLACE_WITH_CALL_ID'; // the call id can be found in the "Credentials" section

// export default function Testing() {
//   const [activeScreen, setActiveScreen] = useState('home');
//   const goToCallScreen = () => setActiveScreen('call-screen');
//   const goToHomeScreen = () => setActiveScreen('home');

//   return (
//     <SafeAreaView style={styles.container}>
//       {activeScreen === 'call-screen' ? (
//         <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
//       ) : (
//         <HomeScreen goToCallScreen={goToCallScreen} />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
// });
import { View, Text } from 'react-native'
import React from 'react'

const Testing = () => {
  return (
    <View>
      <Text>Testing</Text>
    </View>
  )
}

export default Testing