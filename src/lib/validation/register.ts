// Import Modules
import * as yup from 'yup';

// Define Register Schema
const registerSchema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    username: yup.string().required('Username is Required'),
    email: yup.string().email('Email Invalid').required('Email is Required'),
    password: yup.string().required('Password is Required'),
});

// Export Register Schema
export { registerSchema };
