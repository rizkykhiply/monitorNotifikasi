// Import Modules
import { ReactElement, useState } from 'react';
import { Field, Formik, FormikHelpers, FormikValues } from 'formik';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import Material Modules
import Divider from '@mui/material/Divider';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { journalSchema } from '@lib/validation';
import { models } from '@lib/databases/models';

// Import Interfaces
import { JournalInitialValues, PropsJournalPage } from '@interfaces/pages/journal';
import { SnackbarState } from '@interfaces/components';

// Import Styles
import {
    ButtonComponent,
    PageContentBox,
    PageContentContainerCenter,
    PageContentForm,
    PageContentFormBox,
    PageContentFormControl,
    PageContentFormInput,
    PageContentFormLabel,
    PageContentHeaderBox,
    PageContentHeaderText,
    PageHeaderContainer,
    PageHeaderText,
} from '@styles/components';

// Import Components
import LayoutComponent from '@components/Layout/Layout';
const InputComponent = dynamic(() => import('@components/Form/Input'), { ssr: false });
const DateComponent = dynamic(() => import('@components/Form/Date'), { ssr: false });
const SelectComponent = dynamic(() => import('@components/Form/Select'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });

// Define Initial Form Values
const initialValues: JournalInitialValues = {
    accountId: '',
    date: '',
    totalAmount: '',
    trxType: 0,
    amountDet: '',
    trxTypeDet: 0,
};

// Define Journal Page
const JournalPage = (props: PropsJournalPage) => {
    // Destructuring Props
    const { master } = props;

    // Define Open Snackbar State
    const [openSnackbar, setOpenSnackbar] = useState<SnackbarState>({
        open: false,
        type: 'error',
        message: '',
    });

    // Define Handle Submit
    const handleSubmit = async (values: FormikValues, helpers: FormikHelpers<JournalInitialValues>) => {
        console.log(values);
        // const response = await fetch('/api/journal/create', {
        //     method: 'POST',
        //     headers: { 'Content-type': 'application/json' },
        //     body: JSON.stringify(values),
        // });
        // const getResponse = await response.json();
        // const getMessage = getResponse.detail;

        // if (response.status === 201) {
        //     helpers.resetForm();
        //     setOpenSnackbar((prev) => ({
        //         open: !prev.open,
        //         type: 'success',
        //         message: getMessage,
        //     }));
        // }
        // if (response.status === 500) {
        //     setOpenSnackbar((prev) => ({
        //         open: !prev.open,
        //         type: 'error',
        //         message: getMessage,
        //     }));
        // }
    };

    // Define Handle Click Close Snackbar
    const handleClickCloseSnackbar = () => {
        setOpenSnackbar((prev) => ({ ...prev, open: !prev.open }));
    };

    return (
        <>
            <Head>
                <title>Journal - Dashboard Template</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={journalSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <PageContentContainerCenter>
                        <PageHeaderContainer>
                            <PageHeaderText>Create Transaction Journal</PageHeaderText>
                        </PageHeaderContainer>
                        <PageContentBox>
                            <PageContentForm autoComplete="off">
                                <PageContentHeaderBox>
                                    <PageContentHeaderText>Transaction Debit</PageContentHeaderText>
                                    <Divider />
                                </PageContentHeaderBox>
                                <PageContentFormBox display="flex">
                                    <PageContentFormInput inline={true}>
                                        <PageContentFormLabel htmlFor="accountId">Account No</PageContentFormLabel>
                                        <PageContentFormControl fullWidth variant="standard">
                                            <Field
                                                component={SelectComponent}
                                                id="accountId"
                                                type="text"
                                                name="accountId"
                                                placeholder="Select Account Number"
                                                menu={master.masterAccount}
                                            />
                                        </PageContentFormControl>
                                    </PageContentFormInput>
                                    <PageContentFormInput>
                                        <PageContentFormLabel htmlFor="date">Date</PageContentFormLabel>
                                        <Field component={DateComponent} id="date" name="date" />
                                    </PageContentFormInput>
                                </PageContentFormBox>
                                <PageContentFormBox display="block">
                                    <PageContentFormInput>
                                        <PageContentFormLabel htmlFor="trxType">Transaction Type</PageContentFormLabel>
                                        <PageContentFormControl fullWidth variant="standard">
                                            <Field
                                                component={SelectComponent}
                                                id="trxType"
                                                type="text"
                                                name="trxType"
                                                placeholder="Select Transaction Type"
                                                menu={master.masterType}
                                            />
                                        </PageContentFormControl>
                                    </PageContentFormInput>
                                </PageContentFormBox>
                                <PageContentFormBox display="block">
                                    <PageContentFormInput>
                                        <PageContentFormLabel htmlFor="totalAmount">Total Amount</PageContentFormLabel>
                                        <PageContentFormControl fullWidth variant="standard">
                                            <Field
                                                component={InputComponent}
                                                id="totalAmount"
                                                type="text"
                                                name="totalAmount"
                                                placeholder="Total Amount"
                                            />
                                        </PageContentFormControl>
                                    </PageContentFormInput>
                                </PageContentFormBox>
                                <PageContentHeaderBox>
                                    <PageContentHeaderText>Transaction Credit</PageContentHeaderText>
                                    <Divider />
                                </PageContentHeaderBox>
                                <PageContentFormBox display="flex">
                                    <PageContentFormInput inline={true}>
                                        <PageContentFormLabel htmlFor="trxTypeDet">Transaction Type</PageContentFormLabel>
                                        <PageContentFormControl fullWidth variant="standard">
                                            <Field
                                                component={SelectComponent}
                                                id="trxTypeDet"
                                                type="text"
                                                name="trxTypeDet"
                                                placeholder="Select Transaction Type"
                                                menu={master.masterType}
                                            />
                                        </PageContentFormControl>
                                    </PageContentFormInput>
                                    <PageContentFormInput>
                                        <PageContentFormLabel htmlFor="amountDet">Amount</PageContentFormLabel>
                                        <PageContentFormControl fullWidth variant="standard">
                                            <Field
                                                component={InputComponent}
                                                id="amountDet"
                                                type="text"
                                                name="amountDet"
                                                placeholder="Amount"
                                            />
                                        </PageContentFormControl>
                                    </PageContentFormInput>
                                </PageContentFormBox>
                                <ButtonComponent variant="contained" type="submit" disabled={isSubmitting || !isValid || !dirty} fullWidth>
                                    Save
                                </ButtonComponent>
                            </PageContentForm>
                        </PageContentBox>
                    </PageContentContainerCenter>
                )}
            </Formik>
            <SnackbarComponent
                message={openSnackbar.message}
                position={{ vertical: 'bottom', horizontal: 'right' }}
                type={openSnackbar.type}
                open={openSnackbar.open}
                handleClose={handleClickCloseSnackbar}
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const getRequest = context.req as NextApiRequest;
    const getSession = await getLoginSession(getRequest);

    if (!getSession) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const getListMasterAccount = (await models.masterAccount.findAllMasterAccount()).map((data) => {
        return {
            value: data.id,
            name: data.account,
        };
    });

    const getListMasterType = [
        {
            value: 1,
            name: 'Debit',
        },
        {
            value: 2,
            name: 'Credit',
        },
    ];

    return {
        props: {
            master: {
                masterAccount: getListMasterAccount,
                masterType: getListMasterType,
            },
        },
    };
};

// Define Journal Layout
JournalPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Journal Page
export default JournalPage;
