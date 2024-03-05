import {View, Text, Button, Input, Circle, TextArea} from 'tamagui';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  ChevronLeftCircle,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PlusCircle,
  Search,
} from '@tamagui/lucide-icons';
import {FlatList, RefreshControl, TextInput} from 'react-native';
import ContactItem from './ContactItem';
import {useNavigation} from '@react-navigation/native';
import useContact from '../../Hooks/useContact';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSearch} from '../../Hooks/useSearch';

interface Contact {
  givenName: string;
  phoneNumbers?: [];
  // Define other properties of a contact if needed
}

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;

const DiscoverScreen: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');
  const [searching, setSearcing] = useState<boolean>(false);
  const [searchResultData, setSearchResultData] = useState([]);

  const Data: Contact[] = useContact();
  let newData = Data.sort((a, b) => {
    if (a.givenName < b.givenName) return -1;
    if (a.givenName > b.givenName) return 1;
    return 0;
  });

  setTimeout(() => {
    setLoader(false);
  }, 2000);

  // console.log("single contact>>>>>>>>",Data[0].phoneNumbers[3].number);
  const navigation = useNavigation<NavigationProps>();

  const onRefresh = () => {
    setRefreshing(true);
    // useContact();
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    setSearcing(true); 
    let searchResult = useSearch(newData, text); 
    setSearchResultData(searchResult);
  };

  return (
    <View animation={'lazy'} style={styles.container}>
      {/* header container */}
      <View style={styles.headerContainer}>
        <ChevronLeftCircle
          size={'$3'}
          color={'$gray10'}
          onPress={() => navigation.goBack()}
        />
        <Circle
          onPress={() => navigation.navigate('customeDialerScreen')}
          size={'$4'}
          backgroundColor={'$white5'}>
          <Phone size={'$1'} color={'$purple9'} />
        </Circle>
      </View>

      {/* search input field */}
      <View style={styles.selectedContainer}>
        <Input
          fontSize="$6"
          placeholder="search here ..."
          onChangeText={(text: string) => handleSearch(text)}
          value={searchText}
          style={styles.searchInput}
          borderRadius="$10"
        />
        {/* <Circle
          // onPress={()=>handleSearch}
          size={'$4.5'}
          backgroundColor={'$white5'}>
          <Search size={'$1'} color={'$purple9'} />
        </Circle> */}
      </View>

      {/* list of contacts  */}
      {loader ? (
        <View flex={9} justifyContent="center" alignItems="center">
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
            data={searching ? searchResultData : newData}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({item}) => <ContactItem item={item} />}
          />
        </View>
      )}

      {/* button container */}
      {/* <View style={styles.continueBtnContainer}>
        <Button style={styles.continueBtn}>
          <Text style={styles.continueBtnTxt}>Continue</Text>
        </Button>
      </View> */}
    </View>
  );
};

export default DiscoverScreen;
