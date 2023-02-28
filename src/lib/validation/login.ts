// Import Modules
import * as yup from 'yup';

// Define Login Schema
const loginSchema = yup.object().shape({
    username: yup.string().required('Username harus diisi'),
    password: yup.string().required('Password harus diisi'),
});

// Export Login Schema
export { loginSchema };
