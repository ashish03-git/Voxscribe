import {View, Text, Circle} from 'tamagui';
import React, {useEffect, useState, useCallback} from 'react';
import {SendHorizontal} from '@tamagui/lucide-icons';
import {GiftedChat, Send, Bubble} from 'react-native-gifted-chat';
import {ScrollView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styles from './styles';
import Colors from '../../Extra/Colors';

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
  const [message, setMessage] = useState<Message[]>();
  useEffect(() => {
    setMessage([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        avatar:
          'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
        },
      },
    ]);
  }, []);
  // console.log(message)

  const onSend = useCallback((messages = []) => {
    setMessage(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = ({props}: any) => {
    return (
      <Send {...props}>
        <Circle
          size={'$4.5'}
          style={styles.sendButtonContainer}
          backgroundColor={'$gray4'}>
          <SendHorizontal size={'$1.5'} color={'$white1'} />
        </Circle>
      </Send>
    );
  };

  const renderBubble = ({props}: any) => {
    const user = {};
    return (
      <Bubble
        {...props}
        user={user}
        wrapperStyle={{
          right: {
            borderRadius: responsiveWidth(2),
            paddingHorizontal: responsiveWidth(3),
            backgroundColor: Colors.purple,
          },
          left: {
            borderRadius: responsiveWidth(2),
            paddingHorizontal: responsiveWidth(3),
            backgroundColor: '#FFFFFF',
          },
        }}
        textStyle={{
          right: {
            color: Colors.white,
          },
          left: {
            color: '#000000',
          },
        }}
      />
    );
  };

  const renderTime = ({props}: any) => {
    const {currentMessage} = props;
    return (
      <View style={{alignItems: 'flex-end', marginRight: 10}}>
        <Text style={{color: '#aaa', fontSize: 12}}>
          {currentMessage.createdAt.toLocaleTimeString()}
        </Text>
      </View>
    );
  };

  return (
    <View backgroundColor={'$white2'} flex={1}>
      <GiftedChat
        // scrollToBottom={true}
        showUserAvatar={true}
        // renderTime={renderTime}
        renderBubble={renderBubble}
        // renderSend={renderSend}
        messages={message}
        showAvatarForEveryMessage={true}
        // isKeyboardInternallyHandled={false}
        // showUserAvatar={true}fgsdgfsfdg
        alwaysShowSend={true}
        infiniteScroll={true}
        // showAvatarForEveryMessage={true}
        renderUsernameOnMessage={true}

        renderAvatarOnTop={true}
        isCustomViewBottom={true}
        isTyping={true}
        bottomOffset={70}
        textInputProps={{
          style: {
            flex: 1,
            justifyContent: 'center',
            height: responsiveHeight(6.5),
            padding: responsiveWidth(3),
            fontSize: responsiveFontSize(2.2),
            // marignTop:responsiveWidth(5),
            margin: responsiveWidth(3),
            borderRadius: responsiveWidth(3),
            backgroundColor: '#ECEEF0',
          },
        }}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
          name: 'Ashish',
          avatar:
            'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
        }}
      />
    </View>
  );
};

export default ChatScreen;
