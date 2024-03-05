import {View, Text, Button, Circle, Checkbox} from 'tamagui';
import React from 'react';
import styles from './styles';
import {User2, Dot, ChevronRight} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {Image} from 'react-native';
import {
  add_contact_full_Details,
  add_selected_number_to_call,
} from '../../Redux/ReduxSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useFormatNumber} from '../../Hooks/useFormatNumber';

interface ListItemProp {
  item: {
    givenName?: string;
    phoneNumbers?: [] | undefined;
    hasThumbnail: boolean;
    thumbnailPath: string;
  };
}

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;

const ContactItem: React.FC<ListItemProp> = ({item}) => {
  const itemNumber = (item.phoneNumbers as string[])?.[0]?.number || null;

  // useFormatNumber is a function which will give this number to this function and
  //this funtion will format the number in standard format.
  const phoneNumber = useFormatNumber(itemNumber);

  const details = {
    name: item.givenName,
    phone: phoneNumber,
    img: item.thumbnailPath,
    hasThumbnail: item.hasThumbnail,
  };
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  // dispatching data to redux store to show full details
  const handleShowFullDetails = () => {
    dispatch(add_contact_full_Details(details));
    navigation.navigate('contactDetailsScreen');
  };

  // dispatching data to redux store to call on selected number
  const handleSelectedNumberToCall = () => {
    dispatch(add_selected_number_to_call({phone: phoneNumber}));
    navigation.navigate('customeDialerScreen');
  };

  return (
    <>
      {phoneNumber ? (
        <View style={styles.contactListContainer}>
          <View style={styles.contactProfileContainer}>
            {item.hasThumbnail ? (
              <Circle size={'$6'} backgroundColor={'$white4'}>
                <Image
                  source={{uri: item.thumbnailPath}}
                  width={50}
                  height={50}
                  borderRadius={25}
                  resizeMode="contain"
                />
              </Circle>
            ) : (
              <Circle size={'$6'} backgroundColor={'$white4'}>
                <User2 size={'$3'} color={'$purple9'} />
              </Circle>
            )}
          </View>
          <View
            onPress={handleSelectedNumberToCall}
            style={styles.contactDetailsContainer}>
            <Text style={styles.contactNameTxt}>{item.givenName}</Text>
            <Text fontSize={'$4'} color={'$gray10'}>
              {phoneNumber}
            </Text>
          </View>
          <View style={styles.selectContactContainer}>
            {/* <Checkbox
              size={'$2.5'}
              circular
              backgroundColor={'white'}
              borderColor={'$purple9'}>
              <Checkbox.Indicator>
                <Dot size={'$6'} color={'$purple9'} />
              </Checkbox.Indicator>
            </Checkbox> */}
            <ChevronRight
              size={'$1'}
              color={'$purple9'}
              onPress={handleShowFullDetails}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ContactItem;
