import {View, Text, Button, Circle, Checkbox} from 'tamagui';
import React from 'react';
import styles from './styles';
import {User2, Dot} from '@tamagui/lucide-icons';

interface ListItemProp {
  item: {
    givenName?: string;
    number?: [{}];
  };
}

const ContactItem: React.FC<ListItemProp> = ({item}) => {
  // console.log((item));
  let singleContactNumber = item.number?.[0]


  return (
    <View style={styles.contactListContainer}>
      <View style={styles.contactProfileContainer}>
        <Circle size={'$6'} backgroundColor={'$white4'}>
          <User2 size={'$3'} color={'$purple9'} />
        </Circle>
      </View>
      <View style={styles.contactDetailsContainer}>
        <Text style={styles.contactNameTxt}>{item.givenName}</Text>
        <Text fontSize={'$4'} color={'$gray10'}>
          +91 {singleContactNumber}
        </Text>
      </View>
      <View style={styles.selectContactContainer}>
        <Checkbox
          size={'$2.5'}
          circular
          backgroundColor={'white'}
          borderColor={'$purple9'}>
          <Checkbox.Indicator>
            <Dot size={'$6'} color={'$purple9'} />
          </Checkbox.Indicator>
        </Checkbox>
      </View>
    </View>
  );
};

export default ContactItem;
