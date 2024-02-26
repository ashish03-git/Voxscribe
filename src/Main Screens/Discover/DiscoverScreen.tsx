import {View, Text, Button, Circle, Checkbox} from 'tamagui';
import React from 'react';
import styles from './styles';
import {ChevronLeftCircle, PlusCircle} from '@tamagui/lucide-icons';
import {FlatList} from 'react-native';
import ContactItem from './ContactItem';
import {useNavigation} from '@react-navigation/native';

const DiscoverScreen: React.FC = () => {
  const Data = new Array(10);
  const navigation = useNavigation();
  return (
    <View animation={'lazy'} style={styles.constainer}>
      {/* header container */}
      <View style={styles.headerContainer}>
        <ChevronLeftCircle
          size={'$3.5'}
          color={'$gray9'}
          onPress={() => navigation.goBack()}
        />
        <PlusCircle size={'$5'} color={'$purple9'} />
      </View>
      {/* selecte item heading text */}
      <View style={styles.selectedContainer}>
        <Text fontWeight={'bold'} fontSize={'$8'}>
          Select With Whom You Want{' '}
        </Text>
        <Text fontWeight={'bold'} fontSize={'$8'}>
          To Start Conversation
        </Text>
      </View>
      {/* list of contacts  */}
      <View style={styles.availableContactsContainer}>
        <FlatList
          data={Data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ContactItem />}
        />
      </View>
      {/* button container */}
      <View style={styles.continueBtnContainer}>
        <Button style={styles.continueBtn}>
          <Text style={styles.continueBtnTxt}>Continue</Text>
        </Button>
      </View>
    </View>
  );
};

export default DiscoverScreen;
