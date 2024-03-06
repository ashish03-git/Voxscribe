import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import LoginScreen from '../Authentication/Login/LoginScreen';
import RegistrationScreen from '../Authentication/Registration/RegistrationScreen';
import HomeScreen from '../Main Screens/Home/HomeScreen';
import TabScreens from './TabScreens';
import ChatScreen from '../Main Screens/Chat/ChatScreen';
import DialerScreen from '../Main Screens/CustomDialer/DialerScreen';
import Testing from '../Extra/Testing';
import ContactDetails from '../Main Screens/Contact Details/ContactDetails';
import ChatUiScreen from '../Main Screens/Chat/ChatUiScreen';
import ActiveCallScreen from '../Main Screens/Call Screen/ActiveCallScreen';
// import { CallScreen } from '../CallScreen';

const Stack = createStackNavigator();

export const RootStackNavigationList = {
  loginScreen: undefined,
  registerScreen: undefined,
  homeScreen: undefined,
  customeDialerScreen: undefined,
  discoverScreen: undefined,
  profileScreen: undefined,
  tabScreens: undefined,
  contactDetailsScreen: undefined,
  videoCallScreen: undefined,
  chatUiScreen: undefined,
  activeCallScreen: undefined,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginScreen"
        screenOptions={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 300,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 300,
              },
            },
          },

          cardStyleInterpolator: ({current, layouts}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}>
        <Stack.Screen
          name="loginScreen"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="registerScreen"
          options={{headerShown: false}}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name="homeScreen"
          options={{headerShown: false}}
          component={HomeScreen}
        />

        <Stack.Screen
          name="chatScreen"
          options={{headerShown: false}}
          component={ChatScreen}
        />

        <Stack.Screen
          name="customeDialerScreen"
          options={{headerShown: false}}
          component={DialerScreen}
        />
        <Stack.Screen
          name="activeCallScreen"
          options={{headerShown: false}}
          component={ActiveCallScreen}
        />

        <Stack.Screen
          name="contactDetailsScreen"
          options={{headerShown: false}}
          component={ContactDetails}
        />
        <Stack.Screen
          name="chatUiScreen"
          options={{headerShown: false}}
          component={ChatUiScreen}
        />
        {/* <Stack.Screen
          name="videoCallScreen"
          options={{headerShown: false}}
          component={CallScreen}
        /> */}

        <Stack.Screen
          name="tabScreens"
          component={TabScreens}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="testingScreen"
          component={Testing}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
