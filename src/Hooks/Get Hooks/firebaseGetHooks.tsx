import firestore from '@react-native-firebase/firestore';

export const useGetUserDetails = async (uid: string) => {
  let data = await firestore().collection('users').doc(uid).get();
  if (data.id) {
    return data.data();
  } else {
    return {};
  }
};
