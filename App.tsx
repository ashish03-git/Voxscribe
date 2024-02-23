import {View, Text} from 'tamagui';
import React from 'react';
import {TamaguiProvider} from 'tamagui';
import appConfig from './tamagui.config';
import Navigation from './src/Navigation/Navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <TamaguiProvider config={appConfig}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={'#8E4EC6'} barStyle={'light-content'} />
        <Navigation />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export default App;
