import React from 'react';
import {View, Text, Button} from 'tamagui';
import {Facebook, Github, Phone, Twitter} from '@tamagui/lucide-icons';
import {SafeAreaView} from 'react-native';
import {Input,Icon} from '@rneui/themed';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

type RegisterScreenProps = StackNavigationProp<
  typeof RootStackNavigationList,
  'loginScreen'
>;

const RegistrationScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps>();
  return (
    <SafeAreaView style={styles.container}>
      <View flex={1} backgroundColor={'$purple9'}>
        {/* Top Container */}
        <View style={styles.topContainer}>
          <Button
            onPress={() => navigation.navigate('loginScreen')}
            style={styles.registerBtn}>
            <Text style={styles.registerBtnTxt}>Click To Login</Text>
          </Button>
        </View>

        {/* Bottom Container */}
        <View backgroundColor={'white'} style={styles.bottomContainer}>
          <View style={styles.logoContainer}>
            <Text color={'$purple9'} style={styles.logoTxt}>
              VOCXCIBE
            </Text>
          </View>

          {/* Input field and Button Container */}
          <View flex={5} justifyContent="center" alignItems="center">
            <Input
              placeholder="Enter Name"
              label="Name"
              labelStyle={{color: '#8E4EC6', marginBottom: responsiveWidth(2)}}
              inputContainerStyle={styles.inputField}
            />
            <Input
              placeholder="Enter Email"
              label="Email"
              passwordRules={
                'mix of Uppercase, lowercase,numbers and special characters'
              }
              labelStyle={{color: '#8E4EC6', marginBottom: responsiveWidth(2)}}
              inputContainerStyle={styles.inputField}
            />
            <Input
              placeholder="Enter Number"
              label="Number"
              passwordRules={
                'mix of Uppercase, lowercase,numbers and special characters'
              }
              labelStyle={{color: '#8E4EC6', marginBottom: responsiveWidth(2)}}
              inputContainerStyle={styles.inputField}
            />
            <Input
              placeholder="Enter Password"
              label="Password"
              passwordRules={
                'mix of Uppercase, lowercase,numbers and special characters'
              }
              labelStyle={{color: '#8E4EC6', marginBottom: responsiveWidth(2)}}
              inputContainerStyle={styles.inputField}
            />

            <Button style={styles.btnStyle}>
              <Text style={styles.btnTxt}>Register</Text>
            </Button>

            <Text fontSize="$6" margin="$3">
              or continue with
            </Text>
          </View>

          {/* Social Icon Container */}
          <View style={styles.socialIconContainer}>
          <Button style={styles.icon}>
              <Icon
                size={responsiveWidth(10)}
                name="google"
                type="font-awesome"
                color="#8E4EC6"
              />
            </Button>
            <Button style={styles.icon}>
              <Facebook size={'$3.5'} color={'$purple9'} />
            </Button>
            <Button style={styles.icon}>
              <Twitter size={'$3.5'} color={'$purple9'} />
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
