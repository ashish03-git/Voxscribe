import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import useContact from '../useContact';

export const usePostContact = async () => {
  const data = await useContact();
  const availableContacts = {
    myContacts: data,
  };

  if (data.length > 0) {
    await firestore()
      .collection('users')
      .doc('IdQWbZ7yvEcUZYiEBSVuNGMkLtq2')
      .set(availableContacts)
      .then(() =>
        console.log('contact details successfully saved in firestore'),
      )
      .catch(() => console.log('failed to save contact details in firestore'));
  }
};


export const useUpdatePassword = async () => {
  
}