import {View, Text} from 'react-native';
import React from 'react';
import {string} from 'yup';

type ContactList = [];

export const useSearch = (ListItem: ContactList, Search: string) => {
    let newstring = Search.trim().toLowerCase();
    // console.log(newstring);
    
    if (newstring.length === 0) {
        return ListItem; // Return the complete list if search is empty
    }

    let result = ListItem.filter(item => {
        if (typeof item.givenName === 'string') {
            let name = item.givenName.toLowerCase();
            if (newstring.length === 1) {
                return name.startsWith(newstring); // Show items starting with the entered character
            } else {
                return name.includes(newstring); // Show items containing the entered text anywhere in the name
            }
        } else {
            return false; // If givenName is not a string, it doesn't match the search
        }
    });

    return result;
};


export default useSearch;
