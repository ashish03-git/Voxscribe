import {View, Text, Button, Circle, Checkbox} from 'tamagui';
import React from 'react';
import styles from './styles';
import {User2, Dot, ChevronRight} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {number} from 'yup';

interface ListItemProp {
  item: {
    givenName?: string;
    phoneNumbers?: [] | undefined;
  };
}

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;

const ContactItem: React.FC<ListItemProp> = ({item}) => {
  const phoneNumber = (item.phoneNumbers as string[])?.[0]?.number || null;
  const details = {name:item.givenName,phone:phoneNumber}

  // console.log(phoneNumber);

  const navigation = useNavigation<NavigationProps>();

  return (
    <>
      {phoneNumber ? (
        <View style={styles.contactListContainer}>
          <View style={styles.contactProfileContainer}>
            <Circle size={'$6'} backgroundColor={'$white4'}>
              <User2 size={'$3'} color={'$purple9'} />
            </Circle>
          </View>
          <View style={styles.contactDetailsContainer}>
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
              color={'$gray10'}
              onPress={() => navigation.navigate('contactDetailsScreen')}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ContactItem;
