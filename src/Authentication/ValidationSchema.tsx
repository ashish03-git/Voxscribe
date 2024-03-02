import * as yup from 'yup';

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter valid email')
    .required('email field is required for login'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'password must be of length 8 and mix of uppercase letter,lowercase letter, number, and special character',
    )
    .min(8, 'password must have at least 8 characters')
    .required('password is required'),
});

export const RegistrationValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('name field is required')
    .min(3, 'name must be at least 3 characters'),
  email: yup
    .string()
    .email('please enter valid email')
    .required('email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'phone number must be of 10 digits')
    .max(10, 'phone number must be of 10 digits')
    .required('phone number is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'password must be of length 8 and mix of uppercase letter,lowercase letter, number, and special character',
    )
    .min(8, 'password must have at least 8 characters')
    .required('password is required'),
});
