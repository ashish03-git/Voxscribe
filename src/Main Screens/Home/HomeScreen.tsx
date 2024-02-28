import {View, Text, Circle, Card, Button} from 'tamagui';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {StatusBar} from 'react-native';
import {
  User2,
  PhoneCall,
  ArrowRight,
  MoveRight,
  ChevronRight,
  Group,
  Users,
  User,
  BadgeDollarSign,
  Trophy
} from '@tamagui/lucide-icons';
import Colors from '../../Extra/Colors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View backgroundColor={'$white3'} flex={1}>
        <View style={styles.personalDetailsContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.greetingTxt}>Hey!</Text>
            <Text style={styles.nameTxt}>Ashish</Text>
          </View>
          <View style={styles.profileContainer}>
            <View backgroundColor={'$white1'} style={styles.circleContainer}>
              <User2 size={'$5'} color={Colors.purple} />
            </View>
          </View>
        </View>
        {/* active call contianer */}
        <View style={styles.activateCallContainer}>
          <View style={styles.activateCall}>
            <View style={styles.phoneIconContainer}>
              <Circle size={'$6'} backgroundColor={'$white1'}>
                <PhoneCall size={'$2.5'} color={Colors.purple} />
              </Circle>
            </View>
            <View style={styles.activateCallTxtContainer}>
              <Text color={'$white1'} fontSize={'$8'} fontWeight={'$8'}>
                Start Voice Call
              </Text>
              <Text color={'$white1'} fontSize={'$5'} fontWeight={'$8'}>
                30+ Members
              </Text>
            </View>
            <View style={styles.rightArrowContainer}>
              <ChevronRight
                onPress={() => navigation.navigate("customeDialerScreen")}
                size={'$2'}
                color={'$white1'}
              />
            </View>
          </View>
        </View>
        {/* bottom container  */}
        <View style={styles.otherServicesContainer}>
          <View style={styles.otherContainerOne}>
            <View style={styles.commonContainer}>
              <Circle size={'$9'} backgroundColor={'$white2'} margin={'$4'}>
                <User size={'$4'} color={Colors.purple} />
              </Circle>
              <Text fontSize={'$7'} fontWeight={'bold'}>
                Solo
              </Text>
              <Text fontSize={'$7'} fontWeight={'bold'}>
                Translation
              </Text>
            </View>
            <View style={styles.commonContainer}>
              <Circle size={'$9'} backgroundColor={'$white2'} margin={'$4'}>
                <Users size={'$4'} color={Colors.purple} />
              </Circle>
              <Text fontSize={'$7'} fontWeight={'bold'}>
                Group / Event
              </Text>
              <Text fontSize={'$7'} fontWeight={'bold'}>
                Creation
              </Text>
            </View>
          </View>
          <View style={styles.otherContainerTwo}>
            <View style={styles.unlimilatedContainer}>
              <View style={{flex: 1}} alignItems="center">
                <Circle
                  size={'$8'}
                  backgroundColor={'$white3'}
                  margin="$3">
                    <BadgeDollarSign size={"$4"} color={"gold"} />
                  </Circle>
              </View>
              <View style={{flex: 2}} justifyContent="center">
                <Text fontSize={'$7'} fontWeight={'bold'}>
                  Get Unlimited Acces To Everything
                </Text>
                <Button
                  width={'$12'}
                  marginTop="$4"
                  borderRadius={'$10'}
                  backgroundColor={Colors.purple}>
                  <Text fontSize={'$6'} color={'$white1'}>
                    Go Pro
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
