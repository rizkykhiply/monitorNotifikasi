// Import Modules
import * as yup from 'yup';

// Define Journal Schema
const journalSchema = yup.object().shape({
    date: yup.date().required('Date is Required'),
    transactionNo: yup.string().required('Transaction No is Required'),
    currencyId: yup.number().required('Currency is Required'),
    accountIdHead: yup.number().required('Account No is Required'),
    trxTypeHead: yup.string().required('Transaction is Required'),
    descriptionHead: yup.string().optional(),
    kursHead: yup.string().required('Kurs is Required'),
    amountHead: yup.string().required('Amount is Required'),
    transactionsDet: yup.array().of(
        yup.object().shape({
            accountIdDet: yup.number().required('Account No is Required'),
            trxTypeDet: yup.string().required('Transaction is Required'),
            descriptionDet: yup.string().optional(),
            kursDet: yup.string().required('Kurs is Required'),
            amountDet: yup.string().required('Amount is Required'),
        }),
    ),
    notes: yup.string().optional(),
});

// Export Journal Schema
export { journalSchema };
