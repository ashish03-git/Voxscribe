import {View, Text} from 'tamagui';
import {Circle} from 'tamagui';
import {User2, ChevronRight} from '@tamagui/lucide-icons';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {UseDispatch, useDispatch} from 'react-redux';
import {
  add_contact_full_Details,
  add_selected_number_to_call,
} from '../../Redux/ReduxSlice';

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;

const CallHistoryItem = () => {
  const navigation = useNavigation<NavigationProps>();
  const details = {
    name: 'Ashish Yadav',
    phone: '+91 9730592488',
    img: '',
    hasThumbnail: false,
  };
  const dispatch = useDispatch();

  // dispatching data to redux store to show full details of contact
  const handleShowFullDetails = () => {
    dispatch(add_contact_full_Details(details));
    navigation.navigate('contactDetailsScreen');
  };

  // sending phone number to redux which we want to call
  const handleSelectedNumberToCall = () => {
    dispatch(add_selected_number_to_call({phone: '+919730592488'}));
  };
  return (
    <View style={styles.contactListContainer}>
      <View style={styles.contactProfileContainer}>
        <Circle size={'$5'} backgroundColor={'$white4'}>
          <User2 size={'$2'} color={'$purple9'} />
        </Circle>
      </View>
      <View
        onPress={handleSelectedNumberToCall}
        style={styles.contactDetailsContainer}>
        <Text style={styles.contactNameTxt}>Ashish Yadav</Text>
        <Text fontSize={'$4'} color={'$gray10'}>
          +919730502488
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
          onPress={handleShowFullDetails}
        />
      </View>
    </View>
  );
};

export default CallHistoryItem;
