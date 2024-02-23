interface Data {
  phone: string;
  password: string;
}
// Login logic
export const loginAccount = (data: Data): boolean => {
  if (data.phone === '1234567890' && data.password === '123456') {
    return true;
  } else {
    return false;
  }
};
