import {useState} from 'react';

export const useDialerLogic = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDial = (phoneNumber: string) => {
    console.log('Dialing number:', phoneNumber);
    // Add logic here to handle dialing the number
  };

  const handleNumberPress = (phoneNumber: string, num: string) => {
    console.log('Got number:', phoneNumber);
    console.log(num);
    
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + num);
    }
  };

  const handleDelete = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  return {phoneNumber, handleDial, handleNumberPress, handleDelete};
};
