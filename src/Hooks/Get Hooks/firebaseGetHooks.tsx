import firestore, {firebase} from '@react-native-firebase/firestore';
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

// fetch all firestore user details from firestore
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

// fetch all conversstation between two users

export const fetchMyConversation = (
  currentUserId:string,
  receiverUserId:string,
  setMessages:Function
) => {
  if (!currentUserId || !receiverUserId) {
    return Promise.reject('User IDs of both sender and receiver are required');
  }

  const chatId = currentUserId + receiverUserId;
  const unsubscribe = firebase
    .firestore()
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .orderBy('createdAt', 'desc')
    .onSnapshot(querySnapshot => {
      const messages = querySnapshot.docs.map(doc => {
        const firebaseData = doc.data();
        let message = {
          _id: doc.id,
          text: firebaseData.text,
          createdAt: new Date(firebaseData.createdAt),
          user: {
            _id: firebaseData.senderId === currentUserId ? 1 : 2,
          },
        };
        return message;
      });

      setMessages(messages);
    });

  // Return unsubscribe function wrapped in a Promise
  return Promise.resolve(() => unsubscribe());
};


