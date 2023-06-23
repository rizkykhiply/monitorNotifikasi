// Import Modules
import { ReactElement, useContext } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { journalSchema } from '@lib/validation';
import { validateCurrency, validateRandomChar, validateTime } from '@lib/utils/helper';
import { models } from '@lib/databases/models';

// Import Styles
import { PageTitleText, PageTitleSubText, PageSection, FormikFormContainer, PageHeaderContainer, PageHeaderLeft } from '@styles/components';

// Import Components
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });
import JournalHeaderComponent from '@pagesComponents/Journal/JournalHeader';
import JournalDetailComponent from '@pagesComponents/Journal/JournalDetail';
import LayoutComponent from '@components/Layout/Layout';

// Define Journal List Master Data
interface JournalListMasterData {
    value: string | number;
    name: string;
    currencyFormat?: string;
}

// Define Journal Master Data
export interface JournalMasterData {
    masterCurrency: JournalListMasterData[];
    masterAccount: JournalListMasterData[];
    masterType: JournalListMasterData[];
}

// Define Journal Transaction Detail
export interface JournalTransactionDetail {
    accountIdDet: string;
    trxTypeDet: string;
    descriptionDet: string;
    kursDet: string;
    amountDet: string;
}

// Define Journal Initial Values
export interface JournalInitialValues {
    date: string | Date | dayjs.Dayjs;
    transactionNo: string;
    currencyId: string;
    accountIdHead: string;
    trxTypeHead: string;
    descriptionHead: string;
    kursHead: string;
    amountHead: string;
    transactionsDet: JournalTransactionDetail[];
    notes: string;
}

// Define Props Create Journal
interface PropsCreateJournal {
    master: JournalMasterData;
}

// Define Initial Form Values
const initialValues: JournalInitialValues = {
    date: dayjs(new Date()),
    transactionNo: `TRX-${validateRandomChar(8, 'alphanumeric')}`,
    currencyId: '1',
    accountIdHead: '',
    trxTypeHead: '',
    descriptionHead: '',
    kursHead: '1',
    amountHead: '',
    transactionsDet: [
        {
            accountIdDet: '',
            trxTypeDet: '',
            descriptionDet: '',
            kursDet: '1',
            amountDet: '',
        },
    ],
    notes: '',
};

// Define Create Journal Page
const CreateJournalPage = (props: PropsCreateJournal) => {
    // Destructuring Props
    const { master } = props;

    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Handle Submit
    const handleSubmit = async (values: JournalInitialValues, helpers: FormikHelpers<JournalInitialValues>) => {
        const getAmountHead = +values.kursHead * +values.amountHead;
        const getAmountDet = values.transactionsDet.reduce((acc, data) => (acc + +data.amountDet) * +data.kursDet, 0) || 0;

        if (getAmountHead !== getAmountDet) {
            actions.UPDATE_NOTIFICATION({
                ...states.notification,
                show: true,
                type: 'error',
                position: {
                    horizontal: 'right',
                    vertical: 'bottom',
                },
                message: 'Debit and credit must be same',
            });

            return;
        }

        const getDate = validateTime(values.date, 'date');
        const getTransactionsDet = values.transactionsDet.map((data) => {
            return {
                ...data,
                trxTypeDet: data.trxTypeDet === 'Debit' ? 1 : 2,
            };
        });

        const response = await fetch('/api/journal/create', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ ...values, date: getDate, transactionsDet: getTransactionsDet, totalAmount: getAmountDet }),
        });
        const getResponse = await response.json();
        const getMessage = getResponse.detail;

        if (response.status === 201) {
            helpers.resetForm();
            actions.UPDATE_NOTIFICATION({
                ...states.notification,
                show: true,
                type: 'success',
                position: {
                    horizontal: 'right',
                    vertical: 'bottom',
                },
                message: getMessage,
            });
        }
        if (response.status === 500) {
            actions.UPDATE_NOTIFICATION({
                ...states.notification,
                show: true,
                type: 'error',
                message: getMessage,
            });
        }
    };

    // Define Handle No Trx
    const handleNoTrx = (field: string, setFieldValue: FormikHelpers<JournalInitialValues>['setFieldValue']) => {
        const getTrxNo = `TRX-${validateRandomChar(8, 'alphanumeric')}`;

        setFieldValue(field, getTrxNo);
    };

    // Define Handle Trx
    const handleTrx = (trxType: number) => {
        return +trxType === 1 ? 'Credit' : +trxType === 2 ? 'Debit' : '';
    };

    // Define Handle Total Header
    const handleTotalHeader = (amount: number, kurs: number) => {
        const getSum = amount * kurs || 0;

        return validateCurrency(getSum);
    };

    // Define Handle Total Detail
    const handleTotalDetail = (transactionsDet: JournalTransactionDetail[]) => {
        const getSum = transactionsDet.reduce((acc, data) => acc + +data.amountDet * +data.kursDet, 0) || 0;

        return validateCurrency(getSum);
    };

    return (
        <>
            <Head>
                <title>Create Journal - Harmoni Web Accounting</title>
            </Head>
            <Formik
                initialValues={initialValues}
                validationSchema={journalSchema}
                enableReinitialize
                validateOnChange={false}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, values, setFieldValue, resetForm }) => (
                    <PageSection>
                        <PageHeaderContainer>
                            <PageHeaderLeft>
                                <PageTitleText>Transaction</PageTitleText>
                                <PageTitleSubText>Create a new journal</PageTitleSubText>
                            </PageHeaderLeft>
                        </PageHeaderContainer>
                        <FormikFormContainer autoComplete="off" width="100%">
                            <JournalHeaderComponent
                                master={master}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleNoTrx={handleNoTrx}
                                handleTrx={handleTrx}
                            />
                            <JournalDetailComponent
                                master={master}
                                values={values}
                                setFieldValue={setFieldValue}
                                handleNoTrx={handleNoTrx}
                                handleTrx={handleTrx}
                                handleTotalHeader={handleTotalHeader}
                                handleTotalDetail={handleTotalDetail}
                                resetForm={resetForm}
                                isSubmitting={isSubmitting}
                            />
                        </FormikFormContainer>
                    </PageSection>
                )}
            </Formik>
            <SnackbarComponent />
        </>
    );
};

// Define SSR Journal Page
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

    const getListMasterAccount = (await models.masterAccount.findAllMasterAccount())?.map((data) => {
        return {
            value: data.id,
            name: data.account,
        };
    });

    const getListMasterCurrency = (await models.masterCurrency.findAllMasterCurrency())?.map((data) => {
        return {
            value: data.id,
            name: data.name,
            currencyFormat: data.currency_format,
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
                masterCurrency: getListMasterCurrency,
                masterAccount: getListMasterAccount,
                masterType: getListMasterType,
            },
        },
    };
};

// Define Create Journal Layout
CreateJournalPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Journal Page
export default CreateJournalPage;
