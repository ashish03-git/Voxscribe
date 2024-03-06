import firestore from '@react-native-firebase/firestore';
// import { firebase } from '@react-native-firebase/firestore';

export const useGetUserDetails = async (uid: string) => {
  const userRef = firestore().collection('users').doc(uid);
  let data = await userRef.get();
  if (data.id) {
    return data.data();
  } else {
    return {};
  }
};

interface UserType {
  email: string;
  name: string;
  phone: string;
  password: string;
}

export const useFetchAllUsers = async () => {
  const storeRef = firestore().collection('users');
  const users: UserType[] = [];
  const data = await storeRef.get().then(querySnapshot => {
    // console.log(querySnapshot.size);
    querySnapshot.forEach(documentSnapShot => {
      const usersData: UserType = documentSnapShot.data();
      if (usersData) {
        users.push(usersData);
      }
    });
  });

  // console.log("available users:>>>>>",users);
  return users;
};
