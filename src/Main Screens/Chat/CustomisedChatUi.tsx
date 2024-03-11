import {View} from 'tamagui';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {
  ChevronLeft,
  MoreVertical,
  SendHorizontal,
  User,
} from '@tamagui/lucide-icons';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';

export const CustomSend = props => {
  return (
    <Send {...props}>
      <View
        backgroundColor={'$purple9'}
        style={{
          width: responsiveScreenWidth(12),
          height: responsiveScreenWidth(12),
          borderRadius: responsiveScreenWidth(7),
          marginLeft: responsiveScreenWidth(3),
          marginBottom: responsiveScreenWidth(2),
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: "",
        }}>
        <SendHorizontal size={'$2'} color={'$white1'} />
        {/* <Icon name="send" size={28} color={Colors.purple} /> */}
      </View>

      {/* Customize icon as per your requirement */}
    </Send>
  );
};


export const CustomBubble = props => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          borderRadius: responsiveScreenWidth(2),
          borderBottomLeftRadius: responsiveScreenWidth(2),
          borderBottomRightRadius: responsiveScreenWidth(0),
          paddingHorizontal: responsiveScreenWidth(1),
          marginTop: responsiveScreenWidth(1),
          backgroundColor: 'white', // Customize bubble background color for received messages
        },
        right: {
          borderRadius: responsiveScreenWidth(2),
          borderBottomLeftRadius: responsiveScreenWidth(0),
          borderTopRightRadius: responsiveScreenWidth(2),
          borderBottomRightRadius: responsiveScreenWidth(2),
          paddingHorizontal: responsiveScreenWidth(1),
          paddingTop: responsiveScreenWidth(1),
          marginTop: responsiveScreenWidth(1),
          backgroundColor: Colors.purple, // Customize bubble background color for sent messages
        },
      }}
    />
  );