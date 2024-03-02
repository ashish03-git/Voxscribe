import auth from '@react-native-firebase/auth';

import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const loginWithGoogle = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '494688737824-f5k9i6mfcid7l67vjd1spe9rbptrfkue.apps.googleusercontent.com',
    });
  }, []);
  const handleSignUpWithGoogle = async () => {
    // console.log('huiii');

    try {
      await GoogleSignin.hasPlayServices();
      // getting token once registered successfully
      let {idToken} = await GoogleSignin.signIn();
      console.log('idToken>>>>>>', idToken);

      // getting google credential
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('google credential>>>>>>', googleCredential);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('google login error >>>>', error);
    }
  };
  return handleSignUpWithGoogle;
};

// How this is working -
// I first created and exported the loginWithGoogle function, inside this function i'm using useEffect with which initalizes the
// google sign-in functionality.
// now i'm creating one function handleSignUpWithGoogle which activates the google sign in function.
// and at last i'm returning the handleSignUpWithGoogle

// so it means where ever i want to sign in i will call the loginWithGoogle method which will then return me the handleSignUpWithGoogle
// and i have to store it in any variable and then finally i will get refrence of handleSignUpWithGoogle, and now call that function at onclick of button.

// step 1 -  import {loginWithGoogle} from '../Social Login/loginWithGoogle';

// steo 2 -  let handleRegistrationWithGoogle = loginWithGoogle();

// step 3 -

{
  /* <Button
  onPress={handleRegistrationWithGoogle} // or onPress = {loginWithGoogle()}
  backgroundColor={'$white2'}
  style={styles.icon}>
  <Icon
    size={responsiveWidth(10)}
    name="google"
    type="font-awesome"
    color="#8E4EC6"
  />
</Button>; */
}
