import {View, Text, Circle, Button} from 'tamagui';
import {
  BellRing,
  ChevronLeftCircle,
  ChevronRight,
  Globe,
  HelpCircle,
  LogOut,
  PencilLine,
  Settings,
  User2,
  UserSearch,
} from '@tamagui/lucide-icons';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useGetUserDetails} from '../../Hooks/Get Hooks/firebaseGetHooks';
import {useSelector} from 'react-redux';

type StackScreenNavigationList = StackNavigationProp<
  typeof RootStackNavigationList
>;

interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<StackScreenNavigationList>();
  const [details, setDetails] = useState<User>();
  const uid: string = useSelector(state => state.redux_store.firebaseUserId);

  useEffect(() => {
    GetUserDetails();
  }, []);

  const GetUserDetails = async () => {
    const data = await useGetUserDetails(uid);
    if (data) {
      setDetails(data);
    }
  };

  return (
    <View backgroundColor={'$white1'} style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <ChevronLeftCircle
          size={'$3'}
          color={'$gray10'}
          top={-35}
          onPress={() => navigation.goBack()}
        />
        <Circle elevate size={'$11'} backgroundColor={'$white1'}>
          <User2
            onPress={() => navigation.navigate('discoverScreen')}
            size={'$7'}
            color={'$purple9'}
          />
          <Circle
            backgroundColor={'$orange8'}
            position="absolute"
            size={'$3.5'}
            right={10}
            bottom={10}>
            <PencilLine size={'$1.5'} color={'white'} />
          </Circle>
        </Circle>
      </View>

      <View style={styles.userNameContainer}>
        <Text style={styles.nameTxt}>{details?.name}</Text>
        <Text fontSize={'$7'} color={'gray'}>
          {details?.email}
        </Text>
      </View>

      <View style={styles.allServicesContainer}>
        {/* account setting */}
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <UserSearch size={'$1.5'} color={'$gray10'} />
          </View>
          <View style={styles.profileItemTitle}>
            <Text fontSize={'$5'} color={'$gray11'}>
              Account Details
            </Text>
          </View>
          <View style={styles.cheveronIconContainer}>
            <ChevronRight size={'$1'} color={'$purple9'} />
          </View>
        </View>
        {/* change password */}
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <Settings size={'$1.5'} color={'$gray10'} />
          </View>
          <View style={styles.profileItemTitle}>
            <Text fontSize={'$5'} color={'$gray11'}>
              Change Password
            </Text>
          </View>
          <View style={styles.cheveronIconContainer}>
            <ChevronRight size={'$1'} color={'$purple9'} />
          </View>
        </View>
        {/* notification */}
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <BellRing size={'$1.5'} color={'$gray10'} />
          </View>
          <View style={styles.profileItemTitle}>
            <Text fontSize={'$5'} color={'$gray11'}>
              Notifications
            </Text>
          </View>
          <View style={styles.cheveronIconContainer}>
            <ChevronRight size={'$1'} color={'$purple9'} />
          </View>
        </View>
        {/* language */}
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <Globe size={'$1.5'} color={'$gray10'} />
          </View>
          <View style={styles.profileItemTitle}>
            <Text fontSize={'$5'} color={'$gray11'}>
              Language
            </Text>
          </View>
          <View style={styles.cheveronIconContainer}>
            <ChevronRight size={'$1'} color={'$purple9'} />
          </View>
        </View>
        {/* help */}
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <HelpCircle size={'$1.5'} color={'$gray10'} />
          </View>
          <View style={styles.profileItemTitle}>
            <Text fontSize={'$5'} color={'$gray11'}>
              Help Center
            </Text>
          </View>
          <View style={styles.cheveronIconContainer}>
            <ChevronRight size={'$1'} color={'$purple9'} />
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('loginScreen')}
          backgroundColor={'$white5'}
          style={styles.logoutButton}>
          <Text fontSize={'$6'} color={'red'}>
            Log Out
          </Text>
          <LogOut size={'$1'} color={'red'} marginLeft="$2" />
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;
