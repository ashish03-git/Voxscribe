import {View, Text, Button, Input, Circle} from 'tamagui';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ChevronLeftCircle, PlusCircle, Search} from '@tamagui/lucide-icons';
import {FlatList, TextInput} from 'react-native';
import ContactItem from './ContactItem';
import {useNavigation} from '@react-navigation/native';
import useContact from './useContact';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Contact {
  givenName: string;
  phoneNumbers: {id: string; label: string; number: string}[];
  // Define other properties of a contact if needed
}

const DiscoverScreen: React.FC = () => {
  const [loader, setLoader] = useState(true);

  const Data: Contact[] = useContact();
  let newData = Data.sort((a, b) => {
    if (a.givenName < b.givenName) return -1;
    if (a.givenName > b.givenName) return 1;
    return 0;
  });

  setTimeout(() => {
    setLoader(false);
  }, 500);

  // console.log("single contact>>>>>>>>",Data[0].phoneNumbers[3].number);
  const navigation = useNavigation();

  return (
    <View animation={'lazy'} style={styles.container}>
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
      {loader ? (
        <View flex={7} justifyContent="center" alignItems="center">
          <LottieView
            source={require('../../../asset/Animation - 1709276064811.json')}
            style={{width: responsiveWidth(30), height: responsiveHeight(10)}}
            loop
            autoPlay
          />
        </View>
      ) : (
        <View style={styles.availableContactsContainer}>
          <FlatList
            data={newData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ContactItem item={item} />}
          />
        </View>
      )}

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
