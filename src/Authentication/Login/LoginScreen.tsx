import React, {useEffect, useState} from 'react';
import {View, Text, Button, InputFrame} from 'tamagui';
import {Facebook, Github, Phone, Twitter} from '@tamagui/lucide-icons';
import {ActivityIndicator, SafeAreaView, TextInput} from 'react-native';
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
import {useDispatch} from 'react-redux';
import {add_firebaseUserId} from '../../Redux/ReduxSlice';
import TouchId from 'react-native-touch-id';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';


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
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const updateParentState = (newValue: boolean) => {
    setLoginFailed(newValue);
  };

  const handleLogin = async (
    values: MyFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setLoader(true);
    // console.log('entered values>>>>', values);
    // navigation.navigate('tabScreens');
    // calling login function
    let userId: string = await userAccountLogin(values);
    if (userId) {
      setLoader(false);
      dispatch(add_firebaseUserId(userId));
      navigation.navigate('tabScreens');
    } else {
      setLoader(false);
      setLoginFailed(true);
    }
    setSubmitting(false);
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '494688737824-f5k9i6mfcid7l67vjd1spe9rbptrfkue.apps.googleusercontent.com',
  //   });
  // }, []);

  //  const _signInWithGoogle = async () => {
  //     try {
  //       GoogleSignin.configure({
  //         offlineAccess: false,
  //         webClientId: '494688737824-hp8913gg0llf965fit64ojrj7fo5j33b.apps.googleusercontent.com',
  //         scopes: ['profile', 'email'],
  //       });
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();

  //       const {idToken} = await GoogleSignin.signIn();
  //       const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
  //       auth().signInWithCredential(googleCredentials);
  //       return userInfo;
  //     } catch (error) {
  //       console.log('=> Google Sign In', error);
  //       return null;
  //     }
  //   };

  // usePostContact()

  const webClientId =
    '494688737824-qvqh8m0uga7hbc9ku8t3shuvnpo0keep.apps.googleusercontent.com';

    useEffect(()=>{
      GoogleSignin.configure({
        webClientId: webClientId,
      });
    },[])
  // Somewhere in your code
  const googleLogin = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userinfo", userInfo);

    } catch (error:any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(error)
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log(error)
        } else {
        }
    }
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
                    onPress={() => handleSubmit()}
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
                onPress={() =>
                  googleLogin()
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
                }
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
