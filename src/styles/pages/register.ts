// Import Modules
import { Form } from 'formik';

// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const RegisterSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    background: theme.palette.background.paper,
}));

export const RegisterBoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '80%',
    width: '80%',
    border: 'none',
    background: '#FFF',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    boxShadow: theme.shadows[6],
    position: 'relative',
}));

export const RegisterFormBoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: '50%',
    height: '100%',
}));

export const RegisterFormContainer = styled(Form)(({ theme }) => ({
    maxWidth: '450px',
}));

export const RegisterFormBoxHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flext-start',

    marginBottom: '40px',
}));

export const RegisterFormText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    marginBottom: '5px',
}));

export const RegisterFormSubText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
}));

export const RegisterFormControl = styled(FormControl)(({ theme }) => ({
    marginBottom: '30px',
}));

export const RegisterFormBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '20px',
}));

export const RegisterFormRegisterText = styled(Typography)(({ theme }) => ({
    color: 'inherit',
    fontSize: '13px',
    fontWeight: theme.typography.fontWeightLight,
}));

export const RegisterFormRegister = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
}));

export const RegisterImageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: '50%',
    height: '100%',
    background: theme.palette.background.default,
}));

export const RegisterImageTitle = styled(Typography)(({ theme }) => ({
    color: '#FFF',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    textAlign: 'center',
    marginBottom: '10px',
}));

export const RegisterImageText = styled(Typography)(({ theme }) => ({
    maxWidth: '500px',
    color: '#FFF',
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    textAlign: 'center',
}));
