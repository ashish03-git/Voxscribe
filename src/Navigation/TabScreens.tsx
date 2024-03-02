import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';
import Font5 from 'react-native-vector-icons';
import HomeScreen from '../Main Screens/Home/HomeScreen';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Extra/Colors';
import DiscoverScreen from '../Main Screens/Discover/DiscoverScreen';
import ChatScreen from '../Main Screens/Chat/ChatScreen';
import ProfileScreen from '../Main Screens/Profile/ProfileScreen';

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: responsiveHeight(8),
          padding: responsiveWidth(3),
        },
      }}
      initialRouteName="homeScreen">
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.8),
            fontWeight: '700',
          },
          tabBarActiveTintColor: Colors.purple,
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="appstore1"
              type="antdesign"
              size={responsiveWidth(7)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="discoverScreen"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Discover',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.8),
            fontWeight: '700',
          },
          tabBarActiveTintColor: Colors.purple,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="account-search"
              type="material-community"
              size={responsiveWidth(9)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="chatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Chats',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.8),
            fontWeight: '700',
          },
          tabBarActiveTintColor: Colors.purple,
          tabBarIcon: ({size, color}) => (
            <Icon
              name="chat"
              type="entypo"
              color={color}
              size={responsiveWidth(7)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.8),
            fontWeight: '700',
          },
          tabBarActiveTintColor: Colors.purple,
          tabBarIcon: ({size, color}) => (
            <Icon
              name="user-alt"
              type="font-awesome-5"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreens;
