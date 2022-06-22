import {
  object, string, number, boolean,
} from 'yup';
import 'yup-phone';

const schema = object().shape({
  phoneNumber: string().trim().phone('FR', false, 'Invalid phone number').required('Phone number is required'),
  appId: number().required('App ID is required'),
  appHash: string().trim().required('App hash is required'),
  exportAuthorization: boolean().required('Export authorization is required'),
  exportDcId: number().when(
    'exportAuthorization',
    {
      is: true,
      then: number().min(1).required('Export DC ID is required'),
      otherwise: number().notRequired(),
    },
  ),
});

export default schema;
