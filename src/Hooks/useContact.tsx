import {View, Text, Alert, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

interface ContactsData {
  message: string;
  contactsArray: string[];
}
interface Contact {
  givenName: string;
  phoneNumbers: {id: string; label: string; number: string}[];
  // Define other properties of a contact if needed
}

const useContact = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // Initialize as an empty array of Contact type

  useEffect(() => {
    const getContactFromDevice = async () => {
      await request(PERMISSIONS.ANDROID.READ_CONTACTS).then(result => {
        //   console.log(result);
        if (result === 'granted') {
          Contacts.getAll().then((record) => {
            if (record.length > 0) {
              setContacts(record);
            } else {
              setContacts([]);
            }
          });
        } else if (result === 'blocked') {
          Alert.alert(
            'Permission Required',
            'Please Allow Access to Contacts',
            [
              {
                text: 'Cancel',
                onPress: () => {},
              },
              {
                text: 'Open Setting',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
          setContacts([]);
        }
      });
    };
    getContactFromDevice()
  }, []);
  return contacts;
};

export default useContact;
