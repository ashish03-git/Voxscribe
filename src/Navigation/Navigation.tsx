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

const Stack = createStackNavigator();

export const RootStackNavigationList = {
  loginScreen: undefined,
  registerScreen: undefined,
  homeScreen: undefined,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="tabScreens"
        screenOptions={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: {
              animation: 'spring',
              config: {
                stiffness: 1000, // Adjust stiffness as needed
                damping: 500, // Adjust damping as needed
              },
            },
            close: {
              animation: 'spring',
              config: {
                stiffness: 1000, // Adjust stiffness as needed
                damping: 500, // Adjust damping as needed
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
          name="tabScreens"
          component={TabScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
