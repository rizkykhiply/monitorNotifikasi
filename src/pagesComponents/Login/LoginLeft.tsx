// Import Modules
import { Field } from 'formik';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import Material Modules
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// Import Material Icons
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Formik/Input'), { ssr: false });

// Import Assets
import Logo from '../../../public/logo.png';

// Import Styles
import { ButtonPrimary, CustomFormBox, CustomFormControl, CustomFormInput, FormikFormContainer } from '@styles/components';
import {
    LoginForgotContainer,
    LoginForgotRedirect,
    LoginHeaderContainer,
    LoginHeaderText,
    LoginHeaderTitle,
    LoginLeftContainer,
    LoginLogoContainer,
    LoginRegisContainer,
    LoginRegisRedirect,
    LoginRegisText,
} from '@styles/pages';

// Define Props Login Left
interface PropsLoginLeft {
    openPassword: boolean;
    handleShowPass: () => void;
    handleForgot: () => void;
    handleRegister: () => void;
    isSubmitting: boolean;
    isValid: boolean;
    dirty: boolean;
}

// Define Login Left
const LoginLeft = (props: PropsLoginLeft) => {
    // Destructuring Props
    const { openPassword, handleShowPass, handleForgot, handleRegister, isSubmitting, isValid, dirty } = props;

    return (
        <LoginLeftContainer>
            <LoginLogoContainer>
                <Image alt="Logo Image" src={Logo} width={100} height={65} />
            </LoginLogoContainer>
            <FormikFormContainer autoComplete="off" width="450px">
                <LoginHeaderContainer>
                    <LoginHeaderTitle>Login</LoginHeaderTitle>
                    <LoginHeaderText>Welcome to Harmoni Web Accounting. Please log in using your account.</LoginHeaderText>
                </LoginHeaderContainer>
                <CustomFormBox display="block">
                    <CustomFormInput mb={4}>
                        <CustomFormControl fullWidth variant="standard">
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
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput>
                        <CustomFormControl fullWidth variant="standard">
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
                                            <IconButton onClick={handleShowPass}>
                                                {openPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                </CustomFormBox>
                <LoginForgotContainer>
                    <LoginForgotRedirect onClick={handleForgot}>Forgot Password?</LoginForgotRedirect>
                </LoginForgotContainer>
                <ButtonPrimary fullWidth variant="contained" type="submit" disabled={isSubmitting || !isValid || !dirty}>
                    Login
                </ButtonPrimary>
                <LoginRegisContainer>
                    <LoginRegisText>
                        Not registered? <LoginRegisRedirect onClick={handleRegister}>Create Account</LoginRegisRedirect>
                    </LoginRegisText>
                </LoginRegisContainer>
            </FormikFormContainer>
        </LoginLeftContainer>
    );
};

// Export Login Left
export default LoginLeft;
