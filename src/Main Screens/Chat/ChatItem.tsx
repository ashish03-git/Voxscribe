import {View, Text, Circle} from 'tamagui';
import React from 'react';
import styles from './styles';
import {User2} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;

const ChatItem: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View
      onPress={() => navigation.navigate('chatUiScreen')}
      style={styles.contactListContainer}>
      <View style={styles.contactProfileContainer}>
        <Circle size={'$6'} backgroundColor={'$white4'}>
          <User2 size={'$2.5'} color={'$purple9'} />
        </Circle>
      </View>
      <View style={styles.contactDetailsContainer}>
        <Text style={styles.contactNameTxt}>Ashish Yadav</Text>
        <Text fontSize={'$4'} color={'$gray10'}>
          You : How are you ?
        </Text>
      </View>
      <View style={styles.selectContactContainer}>
        <Text>27/2/24</Text>
      </View>
    </View>
  );
};

export default ChatItem;
