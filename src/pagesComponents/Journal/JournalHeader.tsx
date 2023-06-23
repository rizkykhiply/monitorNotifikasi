// Import Modules
import { ChangeEvent } from 'react';
import { Field, FormikHelpers } from 'formik';
import dynamic from 'next/dynamic';

// Import Material Modules
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// Import Material Icons
import RestartAltOutlined from '@mui/icons-material/RestartAltOutlined';

// Import Interfaces
import { JournalInitialValues, JournalMasterData } from '@pages/transaction/journal/create';

// Import Styles
import { CustomFormBox, CustomFormInput, CustomFormLabel, CustomFormControl } from '@styles/components';
import { JournalContainer, JournalContent, JournalCurrencyInput, JournalTitle } from '@styles/pages';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Formik/Input'), { ssr: false });
const DateComponent = dynamic(() => import('@components/Form/Formik/Date'), { ssr: false });
const SelectComponent = dynamic(() => import('@components/Form/Formik/Select'), { ssr: false });

// Define Set Field Value
type SetFieldValue = FormikHelpers<JournalInitialValues>['setFieldValue'];

// Define Props Journal Header
export interface PropsJournalHeader {
    master: JournalMasterData;
    values: JournalInitialValues;
    setFieldValue: SetFieldValue;
    handleNoTrx: (field: string, setFieldValue: SetFieldValue) => void;
    handleTrx: (trxType: number) => void;
}

const JournalHeader = (props: PropsJournalHeader) => {
    // Destructuring Props
    const { master, values, setFieldValue, handleNoTrx, handleTrx } = props;

    // Define Handle Change Trx
    const handleChangeTrx = (e: ChangeEvent<HTMLSelectElement>) => {
        setFieldValue('trxTypeHead', e.target.value);
        values.transactionsDet.forEach((_, index) => {
            setFieldValue(`transactionsDet[${index}].trxTypeDet`, handleTrx(+e.target.value));
        });
    };

    return (
        <JournalContent mb={3}>
            <JournalTitle>Transaction Journal</JournalTitle>
            <Divider sx={{ margin: '5px 0 30px' }} />
            <JournalContainer>
                <CustomFormBox display="flex" mb={4}>
                    <CustomFormInput spacer maxWidth="200px">
                        <CustomFormLabel htmlFor="date">Date *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field component={DateComponent} id="date" name="date" />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput spacer maxWidth="200px">
                        <CustomFormLabel htmlFor="transactionNo">Transaction No *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field
                                component={InputComponent}
                                id="transactionNo"
                                name="transactionNo"
                                placeholder="Transaction No"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => handleNoTrx('transactionNo', setFieldValue)}>
                                            <RestartAltOutlined />
                                        </IconButton>
                                    ),
                                }}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput ml="auto" maxWidth="230px">
                        <CustomFormLabel htmlFor="currencyId">Currency *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field
                                component={SelectComponent}
                                id="currencyId"
                                name="currencyId"
                                placeholder="Select Currency"
                                menu={master.masterCurrency}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                </CustomFormBox>
                <CustomFormBox display="flex">
                    <CustomFormInput spacer maxWidth="200px">
                        <CustomFormLabel htmlFor="accountIdHead">Account No *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field
                                component={SelectComponent}
                                id="accountIdHead"
                                name="accountIdHead"
                                placeholder="Select Account No"
                                menu={master.masterAccount}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput spacer maxWidth="200px">
                        <CustomFormLabel htmlFor="trxTypeHead">Transaction *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field
                                component={SelectComponent}
                                id="trxTypeHead"
                                name="trxTypeHead"
                                placeholder="Select Transaction"
                                onChange={handleChangeTrx}
                                menu={master.masterType}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput spacer>
                        <CustomFormLabel htmlFor="descriptionHead">Description</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field component={InputComponent} id="descriptionHead" name="descriptionHead" placeholder="" />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput spacer maxWidth="150px">
                        <CustomFormLabel htmlFor="kursHead">Kurs *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field component={InputComponent} id="kursHead" name="kursHead" type="number" placeholder="1" />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput maxWidth="230px">
                        <CustomFormLabel htmlFor="amountHead">Amount *</CustomFormLabel>
                        <CustomFormControl fullWidth variant="standard">
                            <Field
                                component={InputComponent}
                                id="amountHead"
                                name="amountHead"
                                type="number"
                                placeholder="0"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <JournalCurrencyInput>
                                                {master.masterCurrency?.find((data) => +data.value === +values.currencyId)?.currencyFormat}
                                            </JournalCurrencyInput>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                </CustomFormBox>
            </JournalContainer>
        </JournalContent>
    );
};

export default JournalHeader;
