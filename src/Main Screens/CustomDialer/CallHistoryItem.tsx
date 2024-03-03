import {View, Text} from 'tamagui';
import {Circle} from 'tamagui';
import {User2, ChevronRight} from '@tamagui/lucide-icons';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;

const CallHistoryItem = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.contactListContainer}>
      <View style={styles.contactProfileContainer}>
        <Circle size={'$5'} backgroundColor={'$white4'}>
          <User2 size={'$2'} color={'$purple9'} />
        </Circle>
      </View>
      <View style={styles.contactDetailsContainer}>
        <Text style={styles.contactNameTxt}>Ashish Yadav</Text>
        <Text fontSize={'$4'} color={'$gray10'}>
          +91 9730502488
        </Text>
      </View>
      <View style={styles.callDetailsContainer}>
        <Text color={'$gray10'} style={styles.callTimingDetailsTxt}>
          27/2/24
        </Text>
        <Text color={'$gray10'} style={styles.callTimingDetailsTxt}>
          Outgoing 5m 48s
        </Text>
      </View>
      <View style={styles.selectContactContainer}>
        <ChevronRight
          color={'$gray10'}
          size={'$1'}
          onPress={() => navigation.navigate('contactDetailsScreen')}
        />
      </View>
    </View>
  );
};

export default CallHistoryItem;
