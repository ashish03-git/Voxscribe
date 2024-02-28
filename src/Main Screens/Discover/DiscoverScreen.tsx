import {View, Text, Button, Input, Circle} from 'tamagui';
import React from 'react';
import styles from './styles';
import {ChevronLeftCircle, PlusCircle, Search} from '@tamagui/lucide-icons';
import {FlatList, TextInput} from 'react-native';
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
          size={'$3'}
          color={'$gray10'}
          onPress={() => navigation.goBack()}
        />
        {/* <PlusCircle size={'$5'} color={'$purple9'} /> */}
      </View>

      {/* search input field */}
      <View style={styles.selectedContainer}>
        <Input
          fontSize="$6"
          placeholder="search here ..."
          style={styles.searchInput}
          borderRadius="$10"
        />
        <Circle size={'$4.5'} backgroundColor={'$white5'}>
          <Search size={'$1'} color={'$purple9'} />
        </Circle>
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
