import auth from '@react-native-firebase/auth';

// import {useEffect} from 'react';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// export const loginWithGoogle = () => {
//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         '494688737824-f5k9i6mfcid7l67vjd1spe9rbptrfkue.apps.googleusercontent.com',
//     });
//   }, []);
//   const handleSignUpWithGoogle = async () => {
//     // console.log('huiii');

//     try {
//       await GoogleSignin.hasPlayServices();
//       // getting token once registered successfully
//       let {idToken} = await GoogleSignin.signIn();
//       console.log('idToken>>>>>>', idToken);

//       // getting google credential
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       console.log('google credential>>>>>>', googleCredential);

//       return auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       console.log('google login error >>>>', error);
//     }
//   };
//   return handleSignUpWithGoogle;
// };

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

// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import {useState} from 'react';
// GoogleSignin.configure({
//   webClientId: 'AIzaSyA55Sh2UJABrW6besyP7EWhAeUonOxaiYg', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });



// Somewhere in your code
// export const customGoogleSignIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     console.log('userinfo>>>>>', userInfo);

//     // setState({ userInfo });
//   } catch (error: any) {
//     console.log('google sign in failed>>>>>', error);

//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };

