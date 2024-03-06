import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Circle, Button, Checkbox, Input} from 'tamagui';
import {ChevronLeftCircle, SquarePen} from '@tamagui/lucide-icons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {FlatList, RefreshControl} from 'react-native';
import ChatItem from './ChatItem';
import {useFetchAllUsers} from '../../Hooks/Get Hooks/firebaseGetHooks';


interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  avatar: string;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

interface UserType {
  email: string;
  name: string;
  phone: string;
  password: string;
}

const ChatScreen: React.FC = () => {
  const navigation = useNavigation();
  const [availableUsers, setAvailableUsers] = useState<UserType[]>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let data: UserType[] = await useFetchAllUsers();
    setAvailableUsers(data);
    setRefreshing(false);
  };

  const onRefresh = () => {
    getAllUsers();
    setRefreshing(true);
  };

  return (
    <View style={styles.container}>
      {/* header container */}
      <View backgroundColor={'$white1'} style={styles.headerContainer}>
        <ChevronLeftCircle
          size={'$3'}
          color={'$gray10'}
          onPress={() => navigation.goBack()}
        />
        <SquarePen size={'$2'} color={'$gray10'} />
      </View>

      {/* search input field */}
      <View style={styles.selectedContainer}>
        <Input
          fontSize="$6"
          placeholder="search here ..."
          style={styles.searchInput}
          borderRadius="$10"
        />
        {/* <Circle size={'$4.5'} backgroundColor={'$white5'}>
          <Search size={'$1'} color={'$purple9'} />
        </Circle> */}
      </View>

      {/* body container  */}
      <View style={styles.bodyContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={availableUsers}
          renderItem={({item}) => <ChatItem item={item as UserType} />}
        />
      </View>
    </View>
  );
};

export default ChatScreen;
