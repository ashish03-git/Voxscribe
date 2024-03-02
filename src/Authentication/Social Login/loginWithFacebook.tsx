import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {Platform, Linking, Alert} from 'react-native';

const isFacebookAppInstalled = () => {
  if (Platform.OS === 'android') {
    return Linking.canOpenURL('fb://');
  } else if (Platform.OS === 'ios') {
    return Linking.canOpenURL('fb://');
  }
  return false;
};

export const loginWithFacebool = async () => {
  if (await isFacebookAppInstalled()) {
    try {
      let result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled login process';
      }
      // getting current access token for login process
      const data = AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // facebook login process
      return auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.log('catch block - facebook login process', error);
    }
  } else {
    Alert.alert('Login Failed', 'facebook is not installed', [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }
  //   try {
  //     let result = await LoginManager.logInWithPermissions([
  //       'public_profile',
  //       'email',
  //     ]);
  //     if (result.isCancelled) {
  //       throw 'User cancelled login process';
  //     }
  //     // getting current access token for login process
  //     const data = AccessToken.getCurrentAccessToken();
  //     if (!data) {
  //       throw 'Something went wrong obtaining access token';
  //     }
  //     const facebookCredential = auth.FacebookAuthProvider.credential(
  //       data.accessToken,
  //     );

  //     // facebook login process
  //     return auth().signInWithCredential(facebookCredential);
  //   } catch (error) {
  //     console.log('catch block - facebook login process', error);
  //   }
};
