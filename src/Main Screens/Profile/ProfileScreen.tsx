import {View, Text, Circle} from 'tamagui';
import {
  ChevronLeftCircle,
  ChevronRight,
  ChevronRightCircle,
  LogOut,
  Pen,
  PenSquare,
  Pencil,
  PencilLine,
  User,
  User2,
  UserCircle,
  UserCircle2,
  UserSearch,
  UserX2,
} from '@tamagui/lucide-icons';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';

type StackScreenNavigationList = StackNavigationProp<
  typeof RootStackNavigationList
>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<StackScreenNavigationList>();
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
        <Text style={styles.nameTxt}>Ashish Yadav</Text>
        <Text fontSize={'$7'} color={'gray'}>
          ashish@gmail.com
        </Text>
      </View>

      <View style={styles.allServicesContainer}>
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <UserSearch size={'$2'} color={'$gray10'} />
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
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <UserSearch size={'$2'} color={'$gray10'} />
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
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <UserSearch size={'$2'} color={'$gray10'} />
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
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <UserSearch size={'$2'} color={'$gray10'} />
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
        <View style={styles.profileItemsContainer}>
          <View style={styles.profileItemIcon}>
            <UserSearch size={'$2'} color={'$gray10'} />
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
        <Circle
          size={'$6'}
          backgroundColor={"red"}
          alignSelf='flex-end'
          margin={10}
          marginBottom={responsiveScreenWidth(6)}>
          <LogOut size={'$2.5'} color={"white"} />
        </Circle>
      </View>
    </View>
  );
};

export default ProfileScreen;
