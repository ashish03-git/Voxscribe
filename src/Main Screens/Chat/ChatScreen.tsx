import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Circle, Button, Checkbox, Input} from 'tamagui';
import {
  ChevronLeftCircle,
  SquarePen,
  UserPlus2,
  Users,
} from '@tamagui/lucide-icons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {FlatList, RefreshControl} from 'react-native';
import ChatItem from './ChatItem';
import {useFetchAllUsers} from '../../Hooks/Get Hooks/firebaseGetHooks';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {Icon} from '@rneui/base';
import Colors from '../../Extra/Colors';
import {useSelector} from 'react-redux';
import {Sheet} from 'tamagui';

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
  id: string;
}

const ChatScreen: React.FC = () => {
  const navigation = useNavigation();
  const [availableUsers, setAvailableUsers] = useState<UserType[]>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);
  const currentUserId = useSelector(state => state.redux_store.firebaseUserId);
  const [select, setSelect] = useState<boolean>(false);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let data: UserType[] = await useFetchAllUsers();
    let otherUsers: UserType[] = data.filter(user => {
      // console.log(user.id);
      if (user.id !== currentUserId) {
        return user;
      }
    });
    // console.log(otherUsers);

    setAvailableUsers(otherUsers);
    setRefreshing(false);
  };

  const onRefresh = () => {
    getAllUsers();
    setRefreshing(true);
  };

  const handleShowAllUserList = () => {
    setBottomSheet(!bottomSheet);
  };

  const selectChat = () => {
    // console.log("hiii");
    setSelect(!select);
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
        <SquarePen onPress={selectChat} size={'$2'} color={'$gray10'} />
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
          style={{marginBottom: responsiveHeight(15)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={availableUsers}
          renderItem={({item}) => (
            <ChatItem item={item as UserType} select={select} />
          )}
        />

        <Circle
          onPress={handleShowAllUserList}
          size={'$7'}
          backgroundColor={'$purple9'}
          position="absolute"
          top={'70%'}
          right={'5%'}>
          <Icon
            name="users"
            type="font-awesome-5"
            size={30}
            color={Colors.white}
          />
        </Circle>
      </View>

      {/* bottom sheet */}
      <Sheet open={bottomSheet}>
        <Sheet.Overlay />
        <Sheet.Handle marginHorizontal={'$19'} />
        <Sheet.Frame>
          <View flex={1}>
            <View flex={1} justifyContent="center">
              <Text fontSize={'$8'} fontWeight={'bold'} marginLeft={'$3'}>
                Available Users
              </Text>
              <Input
                fontSize="$6"
                placeholder="search here ..."
                style={styles.searchInput}
                borderRadius="$10"
              />
            </View>
            <View flex={5} alignItems="center">
              <FlatList
                style={{marginBottom: responsiveHeight(15)}}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                showsVerticalScrollIndicator={false}
                data={availableUsers}
                renderItem={({item}) => <ChatItem item={item as UserType} />}
              />
            </View>
          </View>
        </Sheet.Frame>
      </Sheet>

    </View>
  );
};

export default ChatScreen;
