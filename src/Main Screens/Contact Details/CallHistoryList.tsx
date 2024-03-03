import {View, Text} from 'tamagui';
import React from 'react';
import styles from './style';
import {
  ChevronLeftCircle,
  MailPlus,
  MessageCircle,
  MessageCircleMore,
  Phone,
  PhoneIncoming,
  PhoneMissed,
  PhoneOutgoing,
  User2,
  Video,
  Videotape,
} from '@tamagui/lucide-icons';

const CallHistoryList = () => {
  return (
    <View >
      <View style={styles.historyItemContainer}>
        <View style={styles.callIndicator}>
          <PhoneIncoming size={'$2'} color={'green'} />
        </View>
        <View style={styles.callDetails}>
          <Text style={styles.incomingText}>Incoming call</Text>
          <Text style={styles.incomingNumberText}>+91 9730592488</Text>
        </View>
        <View style={styles.callTiming}>
          <Text style={styles.callTimingText}>30 min 10 sec</Text>
        </View>
      </View>
      <View style={styles.historyItemContainer}>
        <View style={styles.callIndicator}>
          <PhoneOutgoing size={'$2'} color={'green'} />
        </View>
        <View style={styles.callDetails}>
          <Text style={styles.incomingText}>Outgoing call</Text>
          <Text style={styles.incomingNumberText}>+91 9730592488</Text>
        </View>
        <View style={styles.callTiming}>
          <Text style={styles.callTimingText}>30 min 10 sec</Text>
        </View>
      </View>
      <View style={styles.historyItemContainer}>
        <View style={styles.callIndicator}>
          <PhoneMissed size={'$2'} color={'red'} />
        </View>
        <View style={styles.callDetails}>
          <Text style={styles.missedCallText}>Missed call</Text>
          <Text style={styles.incomingNumberText}>+91 9730592488</Text>
        </View>
        <View style={styles.callTiming}>
          <Text style={styles.callTimingText}>call missed</Text>
        </View>
      </View>
    </View>
  );
};

export default CallHistoryList;
