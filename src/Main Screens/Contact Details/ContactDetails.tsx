import {View, Text, Circle, Button} from 'tamagui';
import React from 'react';
import styles from './style';
import {
  ChevronLeftCircle,
  MailPlus,
  MessageCircle,
  MessageCircleMore,
  MoreVertical,
  Phone,
  PhoneIncoming,
  PhoneMissed,
  PhoneOutgoing,
  User2,
  Video,
  Videotape,
} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import CallHistoryList from './CallHistoryList';

const ContactDetails: React.FC = () => {
  const navigation = useNavigation();
  const incomingRecords = new Array(5);
  return (
    <View style={styles.container}>
      {/* top container */}
      <View backgroundColor={'$white1'} style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <ChevronLeftCircle
            size={'$3'}
            color={'$gray10'}
            onPress={() => navigation.goBack()}
          />
          <MoreVertical
            size={'$2'}
            color={'$gray10'}
            onPress={() => console.log('more contact details >>>>>>')}
          />
        </View>
        <View style={styles.photoContainer}>
          <Circle size={'$12'} backgroundColor={'$white3'}>
            <User2 size={'$6'} color={'$purple9'} />
          </Circle>
          <Text style={styles.nameText}>Ashish Yadav</Text>
          <Text style={styles.numberText}>+91 9739592488</Text>
        </View>
      </View>
      {/* mid container of all services */}
      <View style={styles.midContainer}>
        <Button
          circular
          size={'$6'}
          backgroundColor={'$purple9'}
          onPress={() => console.log('call this user')}>
          <Phone size={'$2.5'} color={'$white1'} />
        </Button>
        <Button
          circular
          size={'$6'}
          backgroundColor={'$purple9'}
          onPress={() => console.log('video call this user')}>
          <Video size={'$3'} color={'$white1'} />
        </Button>
        <Button
          circular
          size={'$6'}
          backgroundColor={'$purple9'}
          onPress={() => console.log('message this user')}>
          <MessageCircleMore size={'$3'} color={'$white1'} />
        </Button>
      </View>
      {/* bottom container */}
      <View style={styles.bottomContainer}>
        <View style={styles.callHistory}>
          <Text style={styles.callHistoryText}>Call History</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        {/* list of call records */}
        <View paddingBottom={'$9'} style={styles.historyListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={incomingRecords}
            renderItem={({item}) => <CallHistoryList />}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactDetails;
