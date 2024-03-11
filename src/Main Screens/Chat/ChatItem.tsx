import {View, Text, Circle, RadioGroup, Checkbox} from 'tamagui';
import React, {useState} from 'react';
import styles from './styles';
import {Cross, User2, X} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {useDispatch} from 'react-redux';
import {add_selected_chat_user} from '../../Redux/ReduxSlice';
import {Dialog} from 'tamagui';

type NavigationProps = StackNavigationProp<typeof RootStackNavigationList>;
interface UserTypeProps {
  item: {
    email: string;
    name: string;
    phone: string;
    password: string;
    id: string;
  };
  select: boolean;
}

const ChatItem: React.FC<UserTypeProps> = ({item, select}) => {
  const navigation = useNavigation<NavigationProps>();
  const [showImage, setShowImage] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChatItemClick = () => {
    // console.log(typeof item);

    dispatch(add_selected_chat_user(item));
    navigation.navigate('chatUiScreen');
  };

  const handleProfileImgClick = () => {
    setShowImage(!showImage);
  }; // console.log(item);

  return (
    <View key={item.id} style={styles.contactListContainer}>
      <View style={styles.contactProfileContainer}>
        <Circle
          onPress={handleProfileImgClick}
          size={'$6'}
          backgroundColor={'$white4'}>
          <User2 size={'$2.5'} color={'$purple9'} />
        </Circle>
      </View>
      <View
        onPress={handleChatItemClick}
        style={styles.contactDetailsContainer}>
        <Text style={styles.contactNameTxt}>{item.name}</Text>
        <Text fontSize={'$4'} color={'$gray10'}>
          You : How are you ?
        </Text>
      </View>
      <View style={styles.selectContactContainer}>
        {select ? (
          <Checkbox size={"$2"} circular />
        ) : (
          <Text>27/2/24</Text>
        )}
      </View>

      {/* dialog code  */}
      <Dialog key={item.id} open={showImage}>
        <Dialog.Trigger />
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content style={styles.dialogContentContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.dialogNameText} color={'$gray10'}>
                {item.name}'s Profile
              </Text>
              <Circle
                onPress={() => setShowImage(false)}
                backgroundColor={'$white4'}
                style={styles.dialogCloseBtn}>
                <X size={'$1'} color={'black'} />
              </Circle>
              <View style={styles.dialogProfileImageContainer}>
                <Circle size={'$14'} backgroundColor={'$white3'}>
                  <User2 size={'$8'} color={'$purple9'} />
                </Circle>
              </View>
            </View>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
};

export default ChatItem;
