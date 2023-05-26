// Import Modules
import * as yup from 'yup';

// Define Journal Schema
const journalSchema = yup.object().shape({
    accountId: yup.string().required('No account harus diisi'),
    date: yup.string().required('Date harus diisi'),
    totalAmount: yup
        .string()
        .matches(/^[0-9]+$/, 'Format amount harus angka')
        .required('Total amount harus diisi'),
    trxType: yup.string().required('Transaction Type harus diisi'),
});

// Export Journal Schema
export { journalSchema };
