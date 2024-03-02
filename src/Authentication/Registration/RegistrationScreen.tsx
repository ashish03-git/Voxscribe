import React, {useEffect} from 'react';
import {View, Text, Button, Input} from 'tamagui';
import {Facebook, Github, Phone, Twitter} from '@tamagui/lucide-icons';
import {SafeAreaView} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {loginWithGoogle} from '../Social Login/loginWithGoogle';

type RegisterScreenProps = StackNavigationProp<
  typeof RootStackNavigationList,
  'loginScreen'
>;

const RegistrationScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps>();
  let handleRegistrationWithGoogle = loginWithGoogle();

  return (
    <SafeAreaView style={styles.container}>
      <View flex={1} backgroundColor={'$white1'}>
        {/* Top Container */}
        <View style={styles.topContainer}>
          <Button
            backgroundColor={'$white2'}
            onPress={() => navigation.navigate('loginScreen')}
            style={styles.registerBtn}>
            <Text style={styles.registerBtnTxt}>Click To Login</Text>
          </Button>
        </View>

        {/* Bottom Container */}
        <View backgroundColor={'white'} style={styles.bottomContainer}>
          <View style={styles.logoContainer}>
            <Text color={'$purple9'} style={styles.logoTxt}>
              Account Register
            </Text>
          </View>

          {/* Input field and Button Container */}
          <View flex={6} justifyContent="center" alignItems="center">
            <Input placeholder="Enter Name" style={styles.inputField} />
            <Input placeholder="Enter Email" style={styles.inputField} />
            <Input placeholder="Enter Number" style={styles.inputField} />
            <Input placeholder="Enter Password" style={styles.inputField} />

            <Button style={styles.btnStyle}>
              <Text style={styles.btnTxt}>Register</Text>
            </Button>

            <Text fontSize="$5" margin="$3">
              or continue with
            </Text>
          </View>

          {/* Social Icon Container */}
          <View style={styles.socialIconContainer}>
            <Button
              onPress={handleRegistrationWithGoogle}
              backgroundColor={'$white2'}
              style={styles.icon}>
              <Icon
                size={responsiveWidth(10)}
                name="google"
                type="font-awesome"
                color="#8E4EC6"
              />
            </Button>
            <Button backgroundColor={'$white2'} style={styles.icon}>
              <Facebook size={'$3.5'} color={'$purple9'} />
            </Button>
            <Button backgroundColor={'$white2'} style={styles.icon}>
              <Twitter size={'$3.5'} color={'$purple9'} />
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
