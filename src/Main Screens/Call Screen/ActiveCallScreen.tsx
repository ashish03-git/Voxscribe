import {View, Text, Circle, Button} from 'tamagui';
import React from 'react';
import styles from './styles';
import {
  AudioLines,
  Mic,
  MicOff,
  Phone,
  PhoneCall,
  PhoneOff,
  Speaker,
  User,
  UserPlus,
  UserPlus2,
  UserRoundPlus,
  Video,
} from '@tamagui/lucide-icons';
import {Icon} from '@rneui/base';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';
import {useNavigation} from '@react-navigation/native';

const ActiveCallScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Circle size={'$12'} backgroundColor={'$white3'}>
          <User size={'$8'} color={'$purple9'} />
        </Circle>

        <Text style={styles.nameText}>Ashish Yadav</Text>
        <Text style={styles.numberText}>+919730592488</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.callOptionContainer}>
          <Circle size={'$8'} backgroundColor={'$white3'}>
            <Icon
              type="ionicon"
              size={responsiveWidth(10)}
              name="volume-high"
              color={Colors.purple}
            />
          </Circle>

          <Circle size={'$8'} backgroundColor={'$white3'}>
            <Icon
              type="material-community"
              size={responsiveWidth(10)}
              name="record-circle"
              color={Colors.purple}
            />
          </Circle>

          <Circle size={'$8'} backgroundColor={'$white3'}>
            <Icon
              type="font-awesome-5"
              size={responsiveWidth(8)}
              name="pause"
              color={Colors.purple}
            />
          </Circle>
        </View>
        <View style={styles.callOptionContainer}>
          <Circle size={'$8'} backgroundColor={'$white3'}>
            <Icon
              type="font-awesome-5"
              size={responsiveWidth(10)}
              name="microphone"
              color={Colors.purple}
            />
          </Circle>

          <Circle size={'$8'} backgroundColor={'$white3'}>
            <Icon
              type="font-awesome-5"
              size={responsiveWidth(9)}
              name="video"
              color={Colors.purple}
            />
          </Circle>

          <Circle size={'$8'} backgroundColor={'$white3'}>
            <Icon
              type="font-awesome-5"
              size={responsiveWidth(8)}
              name="user-plus"
              color={Colors.purple}
            />
          </Circle>
        </View>
        <View style={styles.disconnectCallContainer}>
          <Circle
            onPress={() => navigation.goBack()}
            size={'$7'}
            backgroundColor={'red'}>
            <Phone size={'$3'} color={'white'} />
          </Circle>
          {/* <Button style={styles.hangupBtn}>
            <Phone size={'$2'} color={'white'} />
            <Text fontSize={"$7"} color={"white"}>End Call</Text>
          </Button> */}
        </View>
      </View>
    </View>
  );
};

export default ActiveCallScreen;
