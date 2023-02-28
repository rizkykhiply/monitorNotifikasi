// Import Modules
import { useState } from 'react';
import { Field, Formik, FormikValues } from 'formik';

// Import Next Modules
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';

// Import Material Modules
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// Import Interfaces
import { LoginInitialValues } from '@/interfaces/pages';

// Import Libs
import { loginSchema } from '@/lib/validation';
import { Api } from '@/lib/api';

// Import Assets
import Logo from '../../../public/qurbanqu.png';

// Import Components
import InputComponent from '@/components/Form/Input';
import SnackbarComponent from '@/components/Snackbar/Snackbar';

// Import Styles
import {
    LoginBoxWrapper,
    LoginCarouselBoxWrapper,
    LoginCarouselContainer,
    LoginFormBoxForgot,
    LoginFormBoxHeader,
    LoginFormBoxWrapper,
    LoginFormButton,
    LoginFormContainer,
    LoginFormControl,
    LoginFormForgot,
    LoginFormText,
    LoginSection,
} from '@/styles/pages/login';

// Define Login Page
const LoginPage = () => {
    // Define Open Password State
    const [openPassword, setOpenPassword] = useState(false);

    // Define Open Snackbar State
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Define Initial Form Values
    const initialValues: LoginInitialValues = {
        username: '',
        password: '',
    };

    // Define Handle Submit
    const handleSubmit = async (values: FormikValues) => {
        try {
            let response = await Api.post('/api/auth/login', { ...values });
            if (response.status === 200) {
                Router.push('/');
            }
        } catch (error) {
            setOpenSnackbar(!openSnackbar);
        }
    };

    // Define Handle Click Show Password
    const handleClickShowPassword = () => {
        setOpenPassword(!openPassword);
    };

    // Define Handle Click Forgot
    const handleClickForgot = () => {
        Router.push('/forgot');
    };

    // Define Handle Click Show Snackbar
    const handleClickCloseSnackbar = () => {
        setOpenSnackbar(!openSnackbar);
    };

    // Define Login Page Components
    return (
        <>
            <Head>
                <title>Login - QurbanQu</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <LoginSection>
                        <LoginBoxWrapper>
                            <LoginFormBoxWrapper>
                                <LoginFormContainer autoComplete="off">
                                    <LoginFormBoxHeader>
                                        <Image alt="Logo QurbanQu" src={Logo} width={400} height={150} />
                                        <LoginFormText>Selamat Datang di Dashboard QurbanQu</LoginFormText>
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
                            <LoginCarouselContainer>
                                <LoginCarouselBoxWrapper>{/* <CustomCarousel /> */}</LoginCarouselBoxWrapper>
                            </LoginCarouselContainer>
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

// Export Login Page
export default LoginPage;
