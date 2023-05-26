// Import Modules
import * as yup from 'yup';

// Define Register Schema
const registerSchema = yup.object().shape({
    name: yup.string().required('Nama harus diisi'),
    username: yup.string().required('Username harus diisi'),
    email: yup.string().email('Email tidak valid').required('Email harus diisi'),
    password: yup.string().required('Password harus diisi'),
});

// Export Register Schema
export { registerSchema };
