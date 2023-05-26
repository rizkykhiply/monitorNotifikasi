// Import Modules
import { useCallback, useState } from 'react';
import { Field, Formik, FormikHelpers, FormikValues } from 'formik';
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
import { SnackbarState } from '@interfaces/components';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { loginSchema } from '@lib/validation';

// Import Assets
import Logo from '../../../public/example-logo.png';
import Illustratrion from '../../../public/illustration.png';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Input'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });

// Import Styles
import {
    LoginBoxLogo,
    LoginBoxWrapper,
    LoginFormBoxForgot,
    LoginFormBoxHeader,
    LoginFormBoxRegister,
    LoginFormBoxWrapper,
    LoginFormContainer,
    LoginFormControl,
    LoginFormForgot,
    LoginFormRegister,
    LoginFormRegisterText,
    LoginFormSubText,
    LoginFormText,
    LoginImageContainer,
    LoginImageText,
    LoginImageTitle,
    LoginLogoText,
    LoginSection,
} from '@styles/pages/login';
import { ButtonComponent } from '@styles/components';

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
    const [openSnackbar, setOpenSnackbar] = useState<SnackbarState>({
        open: false,
        type: 'error',
        message: '',
    });

    // Define Router
    const router = useRouter();

    // Define Handle Submit
    const handleSubmit = useCallback(
        async (values: FormikValues, helpers: FormikHelpers<LoginInitialValues>) => {
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
                setOpenSnackbar((prev) => ({ ...prev, open: !prev.open, message: getMessage }));
            }
        },
        [router],
    );

    // Define Handle Click Show Password
    const handleClickShowPassword = () => {
        setOpenPassword((open) => !open);
    };

    // Define Handle Click Close Snackbar
    const handleClickCloseSnackbar = () => {
        setOpenSnackbar((prev) => ({ ...prev, open: !prev.open }));
    };

    // Define Handle Click Forgot
    const handleClickForgot = () => {
        router.push('/forgot');
    };

    // Define Handle Click Register
    const handleClickRegister = () => {
        router.push('/register');
    };

    return (
        <>
            <Head>
                <title>Masuk - Dashboard Template</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <LoginSection>
                        <LoginBoxWrapper>
                            <LoginFormBoxWrapper>
                                <LoginFormContainer autoComplete="off">
                                    <LoginBoxLogo>
                                        <Image alt="Logo Image" src={Logo} width={60} height={60} />
                                        <LoginLogoText>Dashboard Admin Template</LoginLogoText>
                                    </LoginBoxLogo>
                                    <LoginFormBoxHeader>
                                        <LoginFormText>Masuk</LoginFormText>
                                        <LoginFormSubText>
                                            Selamat Datang di Dashboard Template. Silahkan masuk menggunakan akun anda.
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
                                    <ButtonComponent
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting || !isValid || !dirty}
                                        fullWidth
                                    >
                                        Masuk
                                    </ButtonComponent>
                                    <LoginFormBoxRegister>
                                        <LoginFormRegisterText>
                                            Belum punya akun? <LoginFormRegister onClick={handleClickRegister}>Daftar</LoginFormRegister>
                                        </LoginFormRegisterText>
                                    </LoginFormBoxRegister>
                                </LoginFormContainer>
                            </LoginFormBoxWrapper>
                            <LoginImageContainer>
                                <Image alt="Image" src={Illustratrion} width={400} height={400} />
                                <LoginImageTitle>Lorem Ipsum</LoginImageTitle>
                                <LoginImageText>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores dolor officia laudantium sunt sit,
                                    modi labore? Labore, iusto nesciunt.
                                </LoginImageText>
                            </LoginImageContainer>
                        </LoginBoxWrapper>
                    </LoginSection>
                )}
            </Formik>
            <SnackbarComponent
                message={openSnackbar.message}
                position={{ vertical: 'top', horizontal: 'center' }}
                type={openSnackbar.type}
                open={openSnackbar.open}
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
