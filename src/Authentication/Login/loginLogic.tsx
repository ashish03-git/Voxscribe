import {useNavigation} from '@react-navigation/native';
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
      return response.user.uid;
    } else {
      return "";
    }
  } catch (error) {
    console.log('login failed >>>>>', error);
    return "";
  }
};

export const handleFacebookLogin = async () => {
  let data = await loginWithFacebool();
  // console.log(data);
};
