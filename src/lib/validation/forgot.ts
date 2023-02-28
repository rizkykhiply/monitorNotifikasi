// Import Modules
import * as yup from 'yup';

// Define Forgot Schema
const forgotSchema = yup.object().shape({
    email: yup.string().email('Format email salah').required('Email harus diisi'),
});

// Export Forgot Schema
export { forgotSchema };
