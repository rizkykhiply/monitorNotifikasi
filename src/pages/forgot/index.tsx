// Import Modules
import { useState } from 'react';
import { Field, Formik, FormikValues } from 'formik';

// Import Next Modules
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';

// Import Material Modules
import InputAdornment from '@mui/material/InputAdornment';
import MailOutline from '@mui/icons-material/MailOutline';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

// Import Libs
import { forgotSchema } from '@/lib/validation';
import { Api } from '@/lib/api';

// Import Assets
import Logo from '../../../public/redbox-logo.png';

// Import Components
const InputComponent = dynamic(() => import('@/components/Form/Input'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@/components/Snackbar/Snackbar'), { ssr: false });

// Import Styles
import {
    ForgotBoxWrapper,
    ForgotFormBack,
    ForgotFormButton,
    ForgotFormBoxHeader,
    ForgotFormContainer,
    ForgotFormControl,
    ForgotFormText,
    ForgotFormTitle,
    ForgotSection,
} from '@/styles/pages/forgot';

// Define Forgot Page
const ForgotPage = () => {
    // Define Open Snackbar State
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Define Initial Form Values
    const initialValues = {
        email: '',
    };

    // Define Handle Submit
    const handleSubmit = async (values: FormikValues) => {
        try {
            throw new Error('error');
        } catch (error) {
            setOpenSnackbar(!openSnackbar);
        }
    };

    // Define Handle Click Back
    const handleClickBack = () => {
        Router.push('/login');
    };

    // Define Handle Click Show Snackbar
    const handleClickCloseSnackbar = () => {
        setOpenSnackbar(!openSnackbar);
    };

    return (
        <>
            <Head>
                <title>Lupa Password - Redbox</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={forgotSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <ForgotSection>
                        <ForgotBoxWrapper>
                            <ForgotFormContainer autoComplete="off">
                                <ForgotFormBoxHeader>
                                    <Image alt="Logo QurbanQu" src={Logo} width={150} height={150} />
                                    <ForgotFormTitle>Atur Ulang Kata Sandi</ForgotFormTitle>
                                    <ForgotFormText>
                                        Masukkan email yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
                                    </ForgotFormText>
                                </ForgotFormBoxHeader>
                                <ForgotFormControl fullWidth variant="standard">
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
                                </ForgotFormControl>
                                <ForgotFormButton variant="contained" type="submit" disabled={isSubmitting || !isValid || !dirty} fullWidth>
                                    Submit
                                </ForgotFormButton>
                                <ForgotFormBack onClick={handleClickBack}>
                                    <ChevronLeft />
                                    Kembali ke halaman login
                                </ForgotFormBack>
                            </ForgotFormContainer>
                        </ForgotBoxWrapper>
                    </ForgotSection>
                )}
            </Formik>
            <SnackbarComponent
                message="Verifikasi gagal, silahkan coba kembali"
                position={{ vertical: 'top', horizontal: 'center' }}
                type="error"
                openSnackbar={openSnackbar}
                handleClose={handleClickCloseSnackbar}
            />
        </>
    );
};

// Export Forgot Page
export default ForgotPage;
