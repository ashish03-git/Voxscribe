import {
  ChevronDown,
  ChevronDownCircle,
  ChevronDownSquare,
  Delete,
  Grid,
  PanelBottomClose,
  Phone,
  PhoneCall,
  UserCircle2,
} from '@tamagui/lucide-icons';
import React, {useState} from 'react';
import HapticFeedback from 'react-native-haptic-feedback';
import {FlatList} from 'react-native';
import {View, Text, Button, Circle, Square} from 'tamagui';
import {
  ChevronLeftCircle,
  Pencil,
  PencilLine,
  PenSquare,
  PlusCircle,
  UserCircle,
} from '@tamagui/lucide-icons';
import styles from './styles';
import CallHistoryItem from './CallHistoryItem';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Extra/Colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {update_selected_number_to_call} from '../../Redux/ReduxSlice';

type StackScreenNavigationList = StackNavigationProp<
  typeof RootStackNavigationList,
  'discoverScreen'
>;

const DialerScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const callHistory = new Array(10);
  const navigation = useNavigation<StackScreenNavigationList>();
  const [openDialer, setOpenDialer] = useState(true);
  const [userStartedEnteringNumber, setUserStartedEnteringNumber] =
    useState(false);

  // dispatch
  const dispatch = useDispatch();

  // getting selected phone number from redux store
  const selectedNumber = useSelector(
    state => state.redux_store.selected_number_to_call,
  );

  const handleDial = (phoneNumber: string) => {
    console.log('Dialing number:', phoneNumber);
    // Add logic here to handle dialing the number
  };

  const handleNumberPress = (num: string) => {
    if (phoneNumber.length > 0) {
      setUserStartedEnteringNumber(true);
    }
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + num);
    } else if (phoneNumber.length == 0) {
      setUserStartedEnteringNumber(false);
    }
  };

  const handleDelete = () => {
    if (selectedNumber.phone && selectedNumber.phone.length > 0) {
      const newPhone = selectedNumber.phone.slice(0, -1);
      console.log('new phone >>>>', newPhone);
      dispatch(update_selected_number_to_call({phone: newPhone}));
    } else {
      // If there's no phone number from Redux, update the local state
      const newPhoneNumber = phoneNumber.slice(0, -1);
      setPhoneNumber(newPhoneNumber);
    }
  };

  return (
    <View backgroundColor={'$white2'} style={styles.container}>
      {/* header */}
      <View backgroundColor={'$white1'} style={styles.headerContainer}>
        <ChevronLeftCircle
          size={'$3'}
          color={'$gray10'}
          onPress={() => navigation.goBack()}
        />
        <UserCircle2
          onPress={() => navigation.navigate('discoverScreen')}
          size={'$3'}
          color={'green'}
        />
      </View>

      {/* call History View */}
      <View
        style={
          openDialer ? styles.openDialerContainer : styles.closeDialerContainer
        }>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={callHistory}
          renderItem={({item}) => <CallHistoryItem />}
        />
        {openDialer ? null : (
          <Circle
            onPress={() => setOpenDialer(true)}
            size={'$6'}
            style={styles.speedDial}>
            <PenSquare size={'$2'} color={'$white2'} />
          </Circle>
        )}
      </View>

      {/* dialer view  */}
      {openDialer ? (
        <>
          <View style={styles.inputContainer}>
            <View flex={3} alignItems="center" justifyContent="center">
              <Text color={'green'} style={styles.dialedNumberTxt}>
                {selectedNumber.phone ? selectedNumber.phone : phoneNumber}
              </Text>
            </View>

            <ChevronDownCircle
              size={'$3'}
              color={'$gray9'}
              onPress={() => setOpenDialer(false)}
            />
          </View>
          <View style={styles.dialerContainer}>
            <View style={styles.row}>
              <DialerButton number="1" onPress={handleNumberPress} />
              <DialerButton number="2" onPress={handleNumberPress} />
              <DialerButton number="3" onPress={handleNumberPress} />
            </View>
            <View style={styles.row}>
              <DialerButton number="4" onPress={handleNumberPress} />
              <DialerButton number="5" onPress={handleNumberPress} />
              <DialerButton number="6" onPress={handleNumberPress} />
            </View>
            <View style={styles.row}>
              <DialerButton number="7" onPress={handleNumberPress} />
              <DialerButton number="8" onPress={handleNumberPress} />
              <DialerButton number="9" onPress={handleNumberPress} />
            </View>
            <View style={styles.row}>
              <Button
                style={styles.deleteButton}
                backgroundColor={'$red11Dark'}
                onPress={handleDelete}>
                <Delete size={'$2.5'} color="white" />
              </Button>
              <DialerButton number="0" onPress={handleNumberPress} />
              <Button
                style={styles.callButton}
                backgroundColor={'$green11Dark'}
                onPress={() => handleDial}>
                <PhoneCall size={'$2.5'} color="white" />
              </Button>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

const DialerButton = ({number, onPress}: {number: string; onPress: any}) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  HapticFeedback.trigger('keyboardPress', options);
  return (
    <Button
      style={styles.button}
      backgroundColor={'$white1'}
      onPress={() => onPress(number)}>
      <Text style={styles.buttonText}>{number}</Text>
    </Button>
  );
};

export default DialerScreen;
