import React, {useState} from 'react';
import {View, Text, Button} from 'tamagui';
import {Facebook, Github, Phone, Twitter} from '@tamagui/lucide-icons';
import {SafeAreaView} from 'react-native';
import {Input, Dialog} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {loginAccount} from './loginLogic';
import Alert from '../../Extra/Alert';

type LoginScreenProps = StackNavigationProp<typeof RootStackNavigationList>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState(true);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const updateParentState = (newValue: boolean) => {
    setLoginFailed(newValue);
  };

  const handleLogin = () => {
    const data = {
      phone,
      password,
    };
    let response = loginAccount(data);
    if (response) {
      navigation.navigate('homeScreen');
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loginFailed ? (
        <Alert updateParentState={updateParentState} />
      ) : (
        <View flex={1} backgroundColor={'$purple9'}>
          {/* Top Container */}
          <View style={styles.topContainer}>
            <Button
              elevate
              elevation={5}
              onPress={() => navigation.navigate('registerScreen')}
              style={styles.registerBtn}>
              <Text style={styles.registerBtnTxt}>Register Now</Text>
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
            <View flex={4} justifyContent="center" alignItems="center">
              <Input
                keyboardType="numeric"
                maxLength={10}
                placeholder="Enter Number"
                label="Enter Number"
                labelStyle={{
                  color: '#8E4EC6',
                  marginBottom: responsiveWidth(2),
                }}
                inputContainerStyle={styles.inputField}
                onChangeText={(text: string) => setPhone(text)}
              />
              <Input
                keyboardType="numeric"
                maxLength={6}
                placeholder="Enter Password"
                label="Enter Password"
                passwordRules={
                  'mix of Uppercase, lowercase,numbers and special characters'
                }
                labelStyle={{
                  color: '#8E4EC6',
                  marginBottom: responsiveWidth(2),
                }}
                inputContainerStyle={styles.inputField}
                onChangeText={(text: string) => setPassword(text)}
              />

              <Button onPress={handleLogin} style={styles.btnStyle}>
                <Text style={styles.btnTxt}>Login</Text>
              </Button>

              <Text fontSize="$6" margin="$2">
                click here to <Text color={'$purple9'}> forget password </Text>
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
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
