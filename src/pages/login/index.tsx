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
import { loginSchema } from '@lib/validation';

// Import Components
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });
import LoginLeftComponent from '@pagesComponents/Login/LoginLeft';
import LoginRightComponent from '@pagesComponents/Login/LoginRight';

// Import Styles
import { LoginBoxContainer, LoginSection } from '@styles/pages';

// Define Login Initial Values
export interface LoginInitialValues {
    username: string;
    password: string;
}

// Define Initial Form Values
const initialValues: LoginInitialValues = {
    username: '',
    password: '',
};

// Define Login Page
const LoginPage = () => {
    // Define Open Password State
    const [openPassword, setOpenPassword] = useState<boolean>(false);

    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Router
    const router = useRouter();

    // Define Handle Submit
    const handleSubmit = useCallback(
        async (values: LoginInitialValues, helpers: FormikHelpers<LoginInitialValues>) => {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values),
            });
            const getDetailResponse = await response.json();
            const getMessage = getDetailResponse.detail;

            if (response.status === 201) {
                router.push('/login/redirect');
            }
            if (response.status >= 400) {
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

    // Define Handle Forgot
    const handleForgot = () => {
        router.push('/forgot');
    };

    // Define Handle Register
    const handleRegister = () => {
        router.push('/register');
    };

    return (
        <>
            <Head>
                <title>Login - Harmoni Web Accounting</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <LoginSection>
                        <LoginBoxContainer>
                            <LoginLeftComponent
                                openPassword={openPassword}
                                handleShowPass={handleShowPass}
                                handleForgot={handleForgot}
                                handleRegister={handleRegister}
                                isSubmitting={isSubmitting}
                                isValid={isValid}
                                dirty={dirty}
                            />
                            <LoginRightComponent />
                        </LoginBoxContainer>
                    </LoginSection>
                )}
            </Formik>
            <SnackbarComponent />
        </>
    );
};

// Define SSR Login Page
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

// Export Login Page
export default LoginPage;
