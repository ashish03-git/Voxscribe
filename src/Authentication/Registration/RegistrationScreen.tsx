import React, {useEffect, useState} from 'react';
import {View, Text, Button, Input} from 'tamagui';
import {Facebook, Github, Phone, Twitter} from '@tamagui/lucide-icons';
import {ActivityIndicator, SafeAreaView, TextInput} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationList} from '../../Navigation/Navigation';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {loginWithGoogle} from '../Social Login/loginWithGoogle';
import {MyFormValues} from '../Login/LoginScreen';
import {Formik, Form, FormikHelpers} from 'formik';
import {RegistrationValidationSchema} from '../ValidationSchema';
import {registerUser} from './RegistrationLogic';

type RegisterScreenProps = StackNavigationProp<
  typeof RootStackNavigationList,
  'loginScreen'
>;

export interface MyFormRegistration extends MyFormValues {
  name: string;
  phone: string;
  id: string;
}

const RegistrationScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps>();
  const [loader, setLoader] = useState<boolean>(false);
  const [registrationStatus, setRegistrationStatus] = useState<boolean>();
  const initialValues: MyFormRegistration = {
    name: '',
    email: '',
    password: '',
    phone: '',
    id: '',
  };
  let handleRegistrationWithGoogle = loginWithGoogle();

  const handleRegistration = (
    values: MyFormRegistration,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setLoader(true);
    setTimeout(async () => {
      // console.log('entered values>>>>', values);
      // calling register function to register user into firebase
      let response = await registerUser(values);
      if (response) {
        setLoader(false);
        setRegistrationStatus(true);
      } else {
        setLoader(false);
        setRegistrationStatus(false);
      }
      setSubmitting(false);
    }, 500);
  };

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

        {/* form heading */}
        <View style={styles.logoContainer}>
          <Text color={'$purple9'} style={styles.logoTxt}>
            Account Register
          </Text>
        </View>

        {/* Bottom Container */}
        <View backgroundColor={'white'} style={styles.bottomContainer}>
          {/* Input field and Button Container */}
          <Formik
            validationSchema={RegistrationValidationSchema}
            initialValues={initialValues}
            onSubmit={(
              values: MyFormRegistration,
              {setSubmitting}: FormikHelpers<MyFormRegistration>,
            ) => handleRegistration(values, setSubmitting)}>
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <View
                style={{flex: 5}}
                justifyContent="space-evenly"
                alignItems="center">
                <TextInput
                  placeholder="Enter Name"
                  style={styles.inputField}
                  onChangeText={text => handleChange('name')(text)}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  keyboardType="email-address"
                />
                {errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
                <TextInput
                  placeholder="Enter Email"
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
                  placeholder="Enter Number"
                  style={styles.inputField}
                  onChangeText={text => handleChange('phone')(text)}
                  onBlur={handleBlur('number')}
                  value={values.phone}
                  keyboardType="numeric"
                />
                {errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
                <TextInput
                  placeholder="Enter Password"
                  style={styles.inputField}
                  onChangeText={text => handleChange('password')(text)}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                {registrationStatus ? (
                  <Text style={styles.success}>
                    user registered successfully
                  </Text>
                ) : registrationStatus == false ? (
                  <Text style={styles.failure}>
                    user registration is failed
                  </Text>
                ) : null}
                <Button
                  disabled={!isValid}
                  onPress={() => handleSubmit()}
                  style={isValid ? styles.btnStyle : styles.disableButton}>
                  {loader ? (
                    <ActivityIndicator size={'large'} color={'white'} />
                  ) : (
                    <Text style={styles.btnTxt}>Register</Text>
                  )}
                </Button>

                <Text fontSize="$5" margin="$3">
                  or continue with
                </Text>
              </View>
            )}
          </Formik>
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
    </SafeAreaView>
  );
};

export default RegistrationScreen;
