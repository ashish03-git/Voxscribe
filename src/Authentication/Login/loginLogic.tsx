import {loginWithFacebool} from '../Social Login/loginWithFacebook';
import auth from '@react-native-firebase/auth';

interface Payload {
  email: string;
  password: string;
}
// Login logic
export const userAccountLogin = async (data: Payload) => {
  try {
    let response = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );

    if (response.user.uid) {
      console.log('navigate user to home screen>>>>>>>>');
    } else {
      return false;
    }
  } catch (error) {
    console.log('login failed >>>>>', error);
    return false;
  }
};

export const handleFacebookLogin = async () => {
  let data = await loginWithFacebool();
  // console.log(data);
};
