import {Chat, MessageType, defaultTheme} from '@flyerhq/react-native-chat-ui';
import {
  ChevronLeft,
  ChevronRightCircle,
  MoreVertical,
  SendHorizontal,
  User,
} from '@tamagui/lucide-icons';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Circle, Text, View} from 'tamagui';
import styles from './styles';
import {StatusBar} from 'react-native';
import Colors from '../../Extra/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  fetchMyConversation,
  useGetUserDetails,
} from '../../Hooks/Get Hooks/firebaseGetHooks';
import {firebase} from '@react-native-firebase/firestore';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {CustomBubble, CustomSend} from './CustomisedChatUi';
interface MessageObject {
  text: string;
  createdAt: string;
  senderId: string;
  receiverId: string;
}

const ChatUiScreen = () => {
  const [messages, setMessages] = useState([]);
  const currentUserId = useSelector(state => state.redux_store.firebaseUserId);
  const RecipientUser = useSelector(
    state => state.redux_store.selected_chat_user,
  );
  const recipientUserId = RecipientUser.id;

  // useEffect(() => {
  //   // if (!currentUserId || !recipientUserId) {
  //   //   console.error('currentUserId or recipientUserId is undefined');
  //   //   return;
  //   // }

  //   // const chatId1 = currentUserId + recipientUserId;

  //   // const unsubscribe = firebase
  //   //   .firestore()
  //   //   .collection('chats')
  //   //   .doc(chatId1)
  //   //   .collection('messages')
  //   //   .orderBy('createdAt', 'desc')
  //   //   .onSnapshot(querySnapshot => {
  //   //     const messages = querySnapshot.docs.map(doc => {
  //   //       const firebaseData = doc.data();
  //   //       const message = {
  //   //         _id: doc.id,
  //   //         text: firebaseData.text,
  //   //         createdAt: new Date(firebaseData.createdAt),
  //   //         user: {
  //   //           _id: firebaseData.senderId === currentUserId ? 1 : 2, // Assign unique id for sender and recipient
  //   //           name:
  //   //             firebaseData.senderId === currentUserId
  //   //               ? 'You'
  //   //               : RecipientUser.name, // Set the name accordingly
  //   //         },
  //   //       };
  //   //       return message;
  //   //     });
  //   //     setMessages(messages);
  //   //   });

  //   // return () => unsubscribe();

  //   fetchMyConversationsData();
  // }, [currentUserId, recipientUserId]);

  // const fetchMyConversationsData = async () => {
  //   let data = await fetchMyConversation(currentUserId, recipientUserId);
  //   console.log('no data is found',data());
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Call fetchMyConversation to get the unsubscribe function
  //       const unsubscribe = await fetchMyConversation(currentUserId, recipientUserId);

  //       // Check if unsubscribe is a function before returning
  //       if (typeof unsubscribe === 'function') {
  //         // Return the unsubscribe function to be used for cleanup
  //         return unsubscribe;
  //       } else {
  //         // Handle the case where fetchMyConversation doesn't return a function
  //         console.error('Unsubscribe function not returned');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching conversation:', error);
  //     }
  //   };

  //   // Call fetchData to start fetching conversations
  //   const unsubscribe = fetchData();

  //   // Return a cleanup function to unsubscribe when the component unmounts or when the dependencies change
  //   return () => {
  //     if (unsubscribe && typeof unsubscribe === 'function') {
  //       unsubscribe(); // Unsubscribe from Firestore listener
  //     }
  //   };
  // }, [currentUserId, recipientUserId]);

  // const unsubscribe = fetchMyConversation(currentUserId, recipientUserId);

  // Assuming you have a state variable to store messages, initialize it
  // const [messages, setMessages] = useState([]);

  // Inside a useEffect hook (or any other appropriate lifecycle method), subscribe to changes

  useEffect(() => {
    // Subscribe to changes in conversation and update messages when changes occur
    const fetchData = async () => {
      try {
        const unsubscribe = await fetchMyConversation(
          currentUserId,
          recipientUserId,
          setMessages,
        );
        // Clean up the subscription when component unmounts
        return () => {
          unsubscribe();
        };
      } catch (error) {
        console.error('Error fetching conversation:', error);
      }
    };

    fetchData();
  }, [currentUserId, recipientUserId]);

  const onSend = async (newMessages = []) => {
    const sentMessage = newMessages[0];
    const chatId1 = currentUserId + recipientUserId;
    const chatId2 = recipientUserId + currentUserId;

    const messageObject: MessageObject = {
      text: sentMessage.text,
      createdAt: sentMessage.createdAt.getTime(),
      senderId: currentUserId,
      receiverId: recipientUserId,
    };

    await firebase
      .firestore()
      .collection('chats')
      .doc(chatId1)
      .collection('messages')
      .add(messageObject);

    await firebase
      .firestore()
      .collection('chats')
      .doc(chatId2)
      .collection('messages')
      .add(messageObject);
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
              {RecipientUser.name}
            </Text>
            <Text color={'$white1'} style={styles.chatui_number}>
              {RecipientUser.phone}
            </Text>
          </View>
        </View>
        <View flex={1} justifyContent="center" alignItems="center">
          <MoreVertical size={'$2'} color={'$white1'} />
        </View>
      </View>

      {/* chat ui container */}
      <View flex={10} backgroundColor={'$white4'}>
        <GiftedChat
          alwaysShowSend={true}
          renderBubble={props => <CustomBubble {...props} />}
          renderSend={props => <CustomSend {...props} />}
          isLoadingEarlier={false}
          messages={messages}
          onSend={newMessages => onSend(newMessages)}
          user={{
            _id: 1,
          }}
          textInputProps={{
            style: {
              width: responsiveScreenWidth(80),
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: responsiveScreenWidth(3),
              fontSize: responsiveScreenFontSize(2),
            },
            placeholderTextColor: 'gray',
          }}
          renderAvatar={null} // Hide avatars if not required
          renderUsernameOnMessage={true} // Show username on messages
          // Style for the GiftedChat container
          containerStyle={{
            // height:responsiveScreenHeight(8),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            paddingVertical: responsiveScreenWidth(2),
            // marginBottom:responsiveScreenHeight(5)
          }}
          // containerStyle={{
          //   // backgroundColor: Colors.purple, // Set background color of the container
          //   height:responsiveScreenHeight(8),
          //   // paddingVertical: 10, // Adjust padding as needed
          //   paddingHorizontal: 10, // Adjust
          //   // paddingBottom:responsiveScreenWidth(3)
          // }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default ChatUiScreen;
