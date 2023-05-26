// Import Modules
import { useState } from 'react';
import { Field, Formik, FormikValues } from 'formik';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

// Import Material Modules
import InputAdornment from '@mui/material/InputAdornment';

// Import Material Icons
import MailOutline from '@mui/icons-material/MailOutline';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

// Import Interfaces
import { ForgotInitialValues } from '@interfaces/pages';

// Import Libs
import { forgotSchema } from '@lib/validation';

// Import Assets
import Logo from '../../../public/example-logo.png';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Input'), { ssr: false });
const SnackbarComponent = dynamic(() => import('@components/Snackbar/Snackbar'), { ssr: false });

// Import Styles
import {
    ForgotBoxWrapper,
    ForgotFormBack,
    ForgotFormBoxHeader,
    ForgotFormContainer,
    ForgotFormControl,
    ForgotFormText,
    ForgotFormTitle,
    ForgotSection,
} from '@styles/pages/forgot';
import { ButtonComponent } from '@styles/components';

// Define Initial Form Values
const initialValues: ForgotInitialValues = {
    email: '',
};

// Define Forgot Page
const ForgotPage = () => {
    // Define Open Snackbar State
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    // Define Router
    const router = useRouter();

    // Define Handle Submit
    const handleSubmit = async (values: FormikValues) => {
        try {
            throw new Error('error');
        } catch (error) {
            setOpenSnackbar((open) => !open);
        }
    };

    // Define Handle Click Login
    const handleClickLogin = () => {
        router.push('/login');
    };

    // Define Handle Click Show Snackbar
    const handleClickCloseSnackbar = () => {
        setOpenSnackbar((close) => !close);
    };

    return (
        <>
            <Head>
                <title>Lupa Password - Dashboard Template</title>
            </Head>
            <Formik initialValues={initialValues} validationSchema={forgotSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, isValid, dirty }) => (
                    <ForgotSection>
                        <ForgotBoxWrapper>
                            <ForgotFormContainer autoComplete="off">
                                <ForgotFormBoxHeader>
                                    <Image alt="Logo Image" src={Logo} width={160} height={150} />
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
                                <ButtonComponent variant="contained" type="submit" disabled={isSubmitting || !isValid || !dirty} fullWidth>
                                    Submit
                                </ButtonComponent>
                                <ForgotFormBack onClick={handleClickLogin}>
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
                open={openSnackbar}
                handleClose={handleClickCloseSnackbar}
            />
        </>
    );
};

// Export Forgot Page
export default ForgotPage;
