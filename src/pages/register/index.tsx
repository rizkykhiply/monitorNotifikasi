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
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';

// Import Interfaces
import { RegisterInitialValues } from '@interfaces/pages';
import { SnackbarState } from '@interfaces/components';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { registerSchema } from '@lib/validation';

// Import Assets
import Preview from '../../../public/illustration_preview.png';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Input'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });

// Import Styles
import {
    RegisterBoxWrapper,
    RegisterFormBoxHeader,
    RegisterFormBox,
    RegisterFormBoxWrapper,
    RegisterFormContainer,
    RegisterFormControl,
    RegisterFormRegister,
    RegisterFormRegisterText,
    RegisterFormSubText,
    RegisterFormText,
    RegisterImageContainer,
    RegisterImageText,
    RegisterImageTitle,
    RegisterSection,
} from '@styles/pages/register';
import { ButtonComponent } from '@styles/components';

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
        async (values: FormikValues, helpers: FormikHelpers<RegisterInitialValues>) => {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values),
            });
            const getResponse = await response.json();
            const getMessage = getResponse.detail;

            if (response.status === 201) {
                helpers.resetForm();
                setOpenSnackbar((prev) => ({
                    open: !prev.open,
                    type: 'success',
                    message: getMessage,
                }));
            }
            if (response.status === 400) {
                const getParams = getResponse.params[0];
                helpers.setFieldError(getParams, getMessage);
                helpers.setFieldValue(getParams, '', false);
            }
            if (response.status === 500) {
                setOpenSnackbar((prev) => ({
                    open: !prev.open,
                    type: 'error',
                    message: getMessage,
                }));
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

    // Define Handle Click Login
    const handleClickLogin = () => {
        router.push('/login');
    };

    return (
        <>
            <Head>
                <title>Daftar - Dashboard Template</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <RegisterSection>
                        <RegisterBoxWrapper>
                            <RegisterFormBoxWrapper>
                                <RegisterFormContainer autoComplete="off">
                                    <RegisterFormBoxHeader>
                                        <RegisterFormText>Daftar Sekarang</RegisterFormText>
                                        <RegisterFormSubText>
                                            Selamat Datang di Dashboard Template. Silahkan mendaftarkan data diri untuk masuk.
                                        </RegisterFormSubText>
                                    </RegisterFormBoxHeader>
                                    <RegisterFormControl fullWidth variant="standard">
                                        <Field
                                            component={InputComponent}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonOutlined />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </RegisterFormControl>
                                    <RegisterFormControl fullWidth variant="standard">
                                        <Field
                                            component={InputComponent}
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PeopleAltOutlined />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </RegisterFormControl>
                                    <RegisterFormControl fullWidth variant="standard">
                                        <Field
                                            component={InputComponent}
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailOutlined />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </RegisterFormControl>
                                    <RegisterFormControl fullWidth variant="standard">
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
                                    </RegisterFormControl>
                                    <ButtonComponent
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting || !isValid || !dirty}
                                        fullWidth
                                    >
                                        Daftar
                                    </ButtonComponent>
                                    <RegisterFormBox>
                                        <RegisterFormRegisterText>
                                            Sudah punya akun? <RegisterFormRegister onClick={handleClickLogin}>Masuk</RegisterFormRegister>
                                        </RegisterFormRegisterText>
                                    </RegisterFormBox>
                                </RegisterFormContainer>
                            </RegisterFormBoxWrapper>
                            <RegisterImageContainer>
                                <Image alt="Image" src={Preview} width={600} height={400} />
                                <RegisterImageTitle>Lorem Ipsum</RegisterImageTitle>
                                <RegisterImageText>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores dolor officia laudantium sunt sit,
                                    modi labore? Labore, iusto nesciunt.
                                </RegisterImageText>
                            </RegisterImageContainer>
                        </RegisterBoxWrapper>
                    </RegisterSection>
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

// Define Register Server Side
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
