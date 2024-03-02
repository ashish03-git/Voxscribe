import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Circle, Button, Checkbox,Input} from 'tamagui';
import {
  ChevronLeftCircle,
  ClipboardEdit,
  Edit3,
  PencilLine,
  SquarePen,
  User2,
  UserCircle2,
  Search
} from '@tamagui/lucide-icons';
import styles from './styles';
import Colors from '../../Extra/Colors';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import ChatItem from './ChatItem';
import { Icon } from '@rneui/base';

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

const ChatScreen: React.FC = () => {
  const navigation = useNavigation();
  const chatList = new Array(10);
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
        <Circle size={'$4.5'} backgroundColor={'$white5'}>
          <Search size={'$1'} color={'$purple9'} />
        </Circle>
      </View>

      {/* body container  */}
      <View style={styles.bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={chatList}
          renderItem={({item}) => <ChatItem />}
        />
      </View>
    </View>
  );
};

export default ChatScreen;
