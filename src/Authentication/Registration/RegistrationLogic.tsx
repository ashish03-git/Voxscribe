import {MyFormRegistration} from './RegistrationScreen';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';


const db = firebase.firestore();

export const registerUser = async (values: MyFormRegistration) => {
  try {
    const signUpStatus = await auth().createUserWithEmailAndPassword(
      values.email,
      values.password,
    );
    if (signUpStatus) {
      await createUserInFirestore(signUpStatus.user.uid, values);
      return true;
    }
  } catch (error: any) {
    const seprateError: string = error;

    // Define a regular expression pattern to extract the message
    const pattern = /\[(.*?)\]\s(.*?)$/;

    // Use RegExp.prototype.exec() to find the pattern in the error message
    const match = pattern.exec(seprateError);

    if (match) {
      // Extract the error code and message
      const errorCode = match[1];
      const message = match[2];

      console.log('Error code:', errorCode);
      console.log('Message:', message);
      Alert.alert('Registratin Failed', message, [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
      return false;
    } else {
      console.log('No match found.');
      return false;
    }
  }
};

const createUserInFirestore = async (
  uid: string,
  values: MyFormRegistration,
) => {
  await db
    .collection('users')
    .doc(uid)
    .set(values)
    .then(() => console.log('user created successfully'))
    .catch(error =>
      console.log('failed to create user in firestore>>>', error),
    );
};
