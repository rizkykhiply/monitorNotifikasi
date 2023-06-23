// Import Modules
import { useContext } from 'react';
import { Field, Formik } from 'formik';
import { GetServerSideProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

// Import Material Modules
import InputAdornment from '@mui/material/InputAdornment';

// Import Material Icons
import MailOutline from '@mui/icons-material/MailOutline';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { forgotSchema } from '@lib/validation';

// Import Assets
import Logo from '../../../public/logo.png';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Formik/Input'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });

// Import Styles
import { ButtonPrimary, CustomFormBox, CustomFormControl, CustomFormInput, FormikFormContainer } from '@styles/components';
import {
    ForgotBoxContainer,
    ForgotHeaderContainer,
    ForgotHeaderText,
    ForgotLoginContainer,
    ForgotLoginRedirect,
    ForgotSection,
} from '@styles/pages/forgot';

// Define Forgot Initial Values
interface ForgotInitialValues {
    email: string;
}

// Define Initial Form Values
const initialValues: ForgotInitialValues = {
    email: '',
};

// Define Forgot Page
const ForgotPage = () => {
    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Router
    const router = useRouter();

    // Define Handle Submit
    const handleSubmit = async (values: ForgotInitialValues) => {
        return;
    };

    // Define Handle Login
    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <>
            <Head>
                <title>Forgot Password - Harmoni Web Accounting</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={forgotSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <ForgotSection>
                        <ForgotBoxContainer>
                            <FormikFormContainer autoComplete="off" width="100%">
                                <ForgotHeaderContainer>
                                    <Image alt="Logo Image" src={Logo} width={160} height={125} />
                                    <ForgotHeaderText mt={4}>
                                        Please enter the registered email. We will send you a verification code to reset your password.
                                    </ForgotHeaderText>
                                </ForgotHeaderContainer>
                                <CustomFormBox display="block">
                                    <CustomFormInput mb={4}>
                                        <CustomFormControl fullWidth variant="standard">
                                            <Field
                                                component={InputComponent}
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <MailOutline />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </CustomFormControl>
                                    </CustomFormInput>
                                </CustomFormBox>
                                <ButtonPrimary fullWidth variant="contained" type="submit" disabled={isSubmitting || !isValid || !dirty}>
                                    Submit
                                </ButtonPrimary>
                                <ForgotLoginContainer>
                                    <ForgotLoginRedirect onClick={handleLogin}>
                                        <ChevronLeft />
                                        Back to login
                                    </ForgotLoginRedirect>
                                </ForgotLoginContainer>
                            </FormikFormContainer>
                        </ForgotBoxContainer>
                    </ForgotSection>
                )}
            </Formik>
            <SnackbarComponent />
        </>
    );
};

// Define SSR Forgot Page
export const getServerSideProps: GetServerSideProps = async (context) => {
    const getRequest = context.req as NextApiRequest;
    const getSession = await getLoginSession(getRequest);

    if (!getSession) {
        return {
            props: {},
        };
    }

    return {
        redirect: {
            destination: '/dashboard',
            permanent: false,
        },
    };
};

// Export Forgot Page
export default ForgotPage;
