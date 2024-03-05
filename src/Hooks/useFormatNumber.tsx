export const useFormatNumber = (phoneNumber:string) =>{
    // Check if the phoneNumber is null or undefined
    if (!phoneNumber) {
      return false;
    }

    // Remove all non-digit characters from the phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the phone number starts with a country code
    let formattedNumber;
    if (cleanedNumber.length === 10) {
      formattedNumber = '+91' + cleanedNumber; // Assuming India's country code is used
    } else if (cleanedNumber.length === 12 && cleanedNumber.startsWith('91')) {
      formattedNumber = '+' + cleanedNumber;
    } else if (cleanedNumber.length > 12) {
      formattedNumber = '+' + cleanedNumber;
    } else {
      return phoneNumber;
    }

    return formattedNumber;
  }