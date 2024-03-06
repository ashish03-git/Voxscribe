import {Chat, MessageType, defaultTheme} from '@flyerhq/react-native-chat-ui';
import {
  ChevronLeft,
  ChevronRightCircle,
  MoreVertical,
  User,
} from '@tamagui/lucide-icons';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Circle, Text, View} from 'tamagui';
import styles from './styles';
import {StatusBar} from 'react-native';
import Colors from '../../Extra/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

const ChatUiScreen = () => {
  const [allMessages, setAllMessages] = useState<MessageType.Any[]>([]);
  const [usersMessages, setUsersMessages] = useState<MessageType.Any[]>([]);
  const [reciversMessages, setReciversMessage] = useState<MessageType.Any[]>(
    [],
  );

  const user = useSelector(state => state.redux_store.selected_chat_user);
  const currentUser = {id: '06c33e8b-e835-4736-80f4-63f44b66666c'};
  const recipientUser = {id: 'recipient-user-id'};

  const handleSendPress = (message: MessageType.PartialText) => {
    const sentMessage: MessageType.Text = {
      author: currentUser,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
  
    const receivedMessage: MessageType.Text = {
      author: recipientUser,
      createdAt: Date.now(),
      id: uuidv4(),
      text:"This is the machine generated message.",
      type: 'text',
    };

    setAllMessages([receivedMessage, sentMessage, ...allMessages]);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.purple} barStyle={'light-content'} />

      {/* chat header container */}
      <View style={styles.chatui_headerContainer}>
        <View style={styles.chatui_headerUserDetails}>
          <View style={styles.chatui_backBtn}>
            <ChevronLeft
              size={'$2'}
              color={'white'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Circle
              size={'$5'}
              backgroundColor={'$white2'}
              marginHorizontal={'$4'}>
              <User size={'$2.5'} color={'$purple9'} />
            </Circle>
          </View>
          <View style={styles.chatui_userDetails}>
            <Text color={'$white1'} style={styles.chatui_name}>
              {user.name}
            </Text>
            <Text color={'$white1'} style={styles.chatui_number}>
              {user.phone}
            </Text>
          </View>
        </View>
        <View flex={1} justifyContent="center" alignItems="center">
          <MoreVertical size={'$2'} color={'$white1'} />
        </View>
      </View>

      {/* chat ui container */}
      <View flex={10} backgroundColor={'$white1'}>
        <Chat
          l10nOverride={{inputPlaceholder: 'type message'}}
          sendButtonVisibilityMode="always"
          theme={{
            ...defaultTheme,
            colors: {...defaultTheme.colors, inputBackground: Colors.purple},
            borders: {...defaultTheme.borders, inputBorderRadius: 10},
          }}
          messages={allMessages}
          onSendPress={handleSendPress}
          user={currentUser}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default ChatUiScreen;
