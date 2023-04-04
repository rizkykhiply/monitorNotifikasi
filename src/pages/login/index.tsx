// Import Modules
import { useCallback, useState } from 'react';
import { Field, Formik, FormikValues } from 'formik';
import { GetServerSideProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Import Material Modules
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// Import Material Icons
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';

// Import Interfaces
import { LoginInitialValues } from '@interfaces/pages';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { loginSchema } from '@lib/validation';
import { Api } from '@lib/api';

// Import Assets
import Logo from '../../../public/logo.png';
import Accounting from '../../../public/illustration_accounting.png';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Input'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });

// Import Styles
import {
    LoginBoxLogo,
    LoginBoxWrapper,
    LoginFormBoxForgot,
    LoginFormBoxHeader,
    LoginFormBoxWrapper,
    LoginFormButton,
    LoginFormContainer,
    LoginFormControl,
    LoginFormForgot,
    LoginFormSubText,
    LoginFormText,
    LoginImageContainer,
    LoginImageText,
    LoginImageTitle,
    LoginLogoText,
    LoginSection,
} from '@styles/pages/login';

// Define Initial Form Values
const initialValues: LoginInitialValues = {
    username: '',
    password: '',
};

// Define Login Page
const LoginPage = () => {
    // Define Open Password State
    const [openPassword, setOpenPassword] = useState<boolean>(false);

    // Define Open Snackbar State
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    // Define Router
    const router = useRouter();

    // Define Handle Submit
    const handleSubmit = useCallback(async (values: FormikValues) => {
        try {
            let response = await Api.post('/api/auth/login', { ...values });
            if (response.status === 200) {
                router.push('login/redirect');
            }
        } catch (error) {
            setOpenSnackbar((open) => !open);
        }
    }, []);

    // Define Handle Click Show Password
    const handleClickShowPassword = () => {
        setOpenPassword(!openPassword);
    };

    // Define Handle Click Forgot
    const handleClickForgot = () => {
        router.push('/forgot');
    };

    // Define Handle Click Show Snackbar
    const handleClickCloseSnackbar = () => {
        setOpenSnackbar(!openSnackbar);
    };

    return (
        <>
            <Head>
                <title>Login - Dashboard Accounting</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <LoginSection>
                        <LoginBoxWrapper>
                            <LoginFormBoxWrapper>
                                <LoginFormContainer autoComplete="off">
                                    <LoginBoxLogo>
                                        <Image alt="Logo Image" src={Logo} width={45} height={40} />
                                        <LoginLogoText>Digital Sales and Consumer Promotions</LoginLogoText>
                                    </LoginBoxLogo>
                                    <LoginFormBoxHeader>
                                        <LoginFormText>Log in</LoginFormText>
                                        <LoginFormSubText>
                                            Selamat Datang di Dashboard Accounting. Silahkan masuk menggunakan akun anda.
                                        </LoginFormSubText>
                                    </LoginFormBoxHeader>
                                    <LoginFormControl fullWidth variant="standard">
                                        <Field
                                            component={InputComponent}
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonOutlined />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </LoginFormControl>
                                    <LoginFormControl fullWidth variant="standard">
                                        <Field
                                            component={InputComponent}
                                            type={openPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Password"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockOutlined />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleClickShowPassword}>
                                                            {openPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </LoginFormControl>
                                    <LoginFormBoxForgot>
                                        <LoginFormForgot onClick={handleClickForgot}>Lupa Password?</LoginFormForgot>
                                    </LoginFormBoxForgot>
                                    <LoginFormButton
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting || !isValid || !dirty}
                                        fullWidth
                                    >
                                        Log in
                                    </LoginFormButton>
                                </LoginFormContainer>
                            </LoginFormBoxWrapper>
                            <LoginImageContainer>
                                <Image alt="Image" src={Accounting} width={600} height={400} />
                                <LoginImageTitle>Accounting</LoginImageTitle>
                                <LoginImageText>
                                    Process of recording financial transactions to a business includes summarizing, analyzing, and
                                    reporting.
                                </LoginImageText>
                            </LoginImageContainer>
                        </LoginBoxWrapper>
                    </LoginSection>
                )}
            </Formik>
            <SnackbarComponent
                message="Username atau password salah, silahkan coba kembali"
                position={{ vertical: 'top', horizontal: 'center' }}
                type="error"
                openSnackbar={openSnackbar}
                handleClose={handleClickCloseSnackbar}
            />
        </>
    );
};

// Define Login Server Side
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
