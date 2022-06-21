import { object, string, number } from 'yup';
import 'yup-phone';

const schema = object().shape({
  phoneNumber: string().trim().phone('FR', false, 'Invalid phone number').required('Phone number is required'),
  appId: number().required('App ID is required'),
  appHash: string().required('App hash is required'),
});

export default schema;
