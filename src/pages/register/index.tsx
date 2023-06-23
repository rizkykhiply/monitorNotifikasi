// Import Modules
import { useCallback, useContext, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { GetServerSideProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { registerSchema } from '@lib/validation';

// Import Components
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });
import RegisterLeftComponent from '@pagesComponents/Register/RegisterLeft';
import RegisterRightComponent from '@pagesComponents/Register/RegisterRight';

// Import Styles
import { RegisterBoxContainer, RegisterSection } from '@styles/pages/register';

// Define Register Initial Values
interface RegisterInitialValues {
    name: string;
    username: string;
    email: string;
    password: string;
}

// Define Initial Form Values
const initialValues: RegisterInitialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
};

// Define Register Page
const RegisterPage = () => {
    // Define Open Password State
    const [openPassword, setOpenPassword] = useState<boolean>(false);

    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Router
    const router = useRouter();

    // Define Handle Submit
    const handleSubmit = useCallback(
        async (values: RegisterInitialValues, helpers: FormikHelpers<RegisterInitialValues>) => {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values),
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
                        horizontal: 'center',
                        vertical: 'top',
                    },
                    message: getMessage,
                });
            }
            if (response.status === 400) {
                const getParams = getResponse.params[0];
                helpers.setFieldError(getParams, getMessage);
                helpers.setFieldValue(getParams, '', false);
            }
            if (response.status === 500) {
                actions.UPDATE_NOTIFICATION({
                    ...states.notification,
                    show: true,
                    type: 'error',
                    position: {
                        horizontal: 'center',
                        vertical: 'top',
                    },
                    message: getMessage,
                });
            }
        },
        [router],
    );

    // Define Handle Show Password
    const handleShowPass = () => {
        setOpenPassword((open) => !open);
    };

    // Define Handle Login
    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <>
            <Head>
                <title>Create Account - Harmoni Web Accounting</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <RegisterSection>
                        <RegisterBoxContainer>
                            <RegisterLeftComponent
                                openPassword={openPassword}
                                handleShowPass={handleShowPass}
                                handleLogin={handleLogin}
                                isSubmitting={isSubmitting}
                                isValid={isValid}
                                dirty={dirty}
                            />
                            <RegisterRightComponent />
                        </RegisterBoxContainer>
                    </RegisterSection>
                )}
            </Formik>
            <SnackbarComponent />
        </>
    );
};

// Define SSR Register Page
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

// Export Register Page
export default RegisterPage;
