import React, {useState} from 'react';
import {View, Text, Button, InputFrame} from 'tamagui';
import {Facebook, Github, Phone, Twitter} from '@tamagui/lucide-icons';
import {ActivityIndicator, SafeAreaView, TextInput} from 'react-native';
import {Input, Dialog} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {handleFacebookLogin, userAccountLogin} from './loginLogic';
import Alert from '../../Extra/Alert';
import {loginWithFacebool} from '../Social Login/loginWithFacebook';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import {LoginValidationSchema} from '../ValidationSchema';

type LoginScreenProps = StackNavigationProp<typeof RootStackNavigationList>;
export interface MyFormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const [loader, setLoader] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(true);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const initialValues: MyFormValues = {email: '', password: ''};
  const updateParentState = (newValue: boolean) => {
    setLoginFailed(newValue);
  };

  const handleLogin = async (
    values: MyFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setLoader(true);
    // console.log('entered values>>>>', values);
    navigation.navigate('tabScreens');
    // calling login function
    let response = await userAccountLogin(values);
    if (response) {
      setLoader(false);
      navigation.navigate('tabScreens');
    } else {
      setLoader(false);
      setLoginFailed(true);
    }
    setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loginFailed ? (
        <Alert updateParentState={updateParentState} />
      ) : (
        <View flex={1} backgroundColor={'$white1'}>
          {/* Top Container */}
          <View style={styles.topContainer}>
            <Button
              backgroundColor={'$white3'}
              onPress={() => navigation.navigate('registerScreen')}
              style={styles.registerBtn}>
              <Text style={styles.registerBtnTxt}>Register Now</Text>
            </Button>
          </View>

          {/* form heading */}
          <View style={styles.logoContainer}>
            <Text color={'$purple9'} style={styles.logoTxt}>
              Account Login
            </Text>
          </View>

          {/* Bottom Container */}
          <View backgroundColor={'white'} style={styles.bottomContainer}>
            {/* Input field and Button Container */}
            <Formik
              validationSchema={LoginValidationSchema}
              initialValues={initialValues}
              onSubmit={(
                values: MyFormValues,
                {setSubmitting}: FormikHelpers<MyFormValues>,
              ) => handleLogin(values, setSubmitting)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <View style={styles.formikConatiner}>
                  <TextInput
                    placeholder="Email Address"
                    style={styles.inputField}
                    onChangeText={text => handleChange('email')(text)}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <TextInput
                    style={styles.inputField}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                    placeholder="Enter Password"
                    onChangeText={text => handleChange('password')(text)}
                  />
                  {errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <Button
                    disabled={!isValid}
                    // onPress={() => handleSubmit()}
                    onPress={() => navigation.navigate('tabScreens')}
                    style={isValid ? styles.btnStyle : styles.disableButton}>
                    {loader ? (
                      <ActivityIndicator size={'large'} color={'white'} />
                    ) : (
                      <Text style={styles.btnTxt}>Login</Text>
                    )}
                  </Button>

                  <Text fontSize="$5" margin="$2">
                    click here to{' '}
                    <Text color={'$purple9'}> forget password </Text>
                  </Text>
                </View>
              )}
              {/*  */}
            </Formik>

            {/* Social Icon Container */}
            <View style={styles.socialIconContainer}>
              <Button
                // onPress={loginWithGoogle}
                backgroundColor={'$white2'}
                style={styles.icon}>
                <Icon
                  size={responsiveWidth(10)}
                  name="google"
                  type="font-awesome"
                  color="#8E4EC6"
                />
              </Button>
              <Button
                onPress={handleFacebookLogin}
                backgroundColor={'$white2'}
                style={styles.icon}>
                <Facebook size={'$3.5'} color={'$purple9'} />
              </Button>
              <Button backgroundColor={'$white2'} style={styles.icon}>
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
