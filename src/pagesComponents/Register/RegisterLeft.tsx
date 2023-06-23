// Import Modules
import { Field } from 'formik';
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

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Formik/Input'), { ssr: false });

// Import Styles
import { ButtonPrimary, CustomFormBox, CustomFormControl, CustomFormInput, FormikFormContainer } from '@styles/components';
import {
    RegisterHeaderContainer,
    RegisterHeaderText,
    RegisterHeaderTitle,
    RegisterLeftContainer,
    RegisterLoginContainer,
    RegisterLoginRedirect,
    RegisterLoginText,
} from '@styles/pages';

// Define Props Register Left
interface PropsRegisterLeft {
    openPassword: boolean;
    handleShowPass: () => void;
    handleLogin: () => void;
    isSubmitting: boolean;
    isValid: boolean;
    dirty: boolean;
}

// Define Register Left
const RegisterLeft = (props: PropsRegisterLeft) => {
    // Destructuring Props
    const { openPassword, handleShowPass, handleLogin, isSubmitting, isValid, dirty } = props;

    return (
        <RegisterLeftContainer>
            <FormikFormContainer autoComplete="off" width="450px">
                <RegisterHeaderContainer>
                    <RegisterHeaderTitle>Create Account</RegisterHeaderTitle>
                    <RegisterHeaderText>Welcome to Harmoni Web Accounting. Please register your personal data to enter.</RegisterHeaderText>
                </RegisterHeaderContainer>
                <CustomFormBox display="block">
                    <CustomFormInput mb={4}>
                        <CustomFormControl fullWidth variant="standard">
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
                        </CustomFormControl>
                    </CustomFormInput>
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
                                            <PeopleAltOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
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
                                            <EmailOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                    <CustomFormInput mb={4}>
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
                <ButtonPrimary fullWidth variant="contained" type="submit" disabled={isSubmitting || !isValid || !dirty}>
                    Create Account
                </ButtonPrimary>
                <RegisterLoginContainer>
                    <RegisterLoginText>
                        Already have an account? <RegisterLoginRedirect onClick={handleLogin}>Login</RegisterLoginRedirect>
                    </RegisterLoginText>
                </RegisterLoginContainer>
            </FormikFormContainer>
        </RegisterLeftContainer>
    );
};

// Export Register Page
export default RegisterLeft;
