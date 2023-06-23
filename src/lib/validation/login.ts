// Import Modules
import * as yup from 'yup';

// Define Login Schema
const loginSchema = yup.object().shape({
    username: yup.string().required('Username is Required'),
    password: yup.string().required('Password is Required'),
});

// Export Login Schema
export { loginSchema };
