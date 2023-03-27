// Import Modules
import { Form } from 'formik';

// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const LoginSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    background: theme.palette.background.paper,
}));

export const LoginBoxWrapper = styled(Box)(({ theme }) => ({
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

export const LoginBoxLogo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    position: 'absolute',
    top: 30,
    left: 30,
}));

export const LoginLogoText = styled(Typography)(({ theme }) => ({
    width: '160px',
    fontSize: '14px',
    marginLeft: '10px',
}));

export const LoginFormBoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: '50%',
    height: '100%',
}));

export const LoginFormContainer = styled(Form)(({ theme }) => ({
    maxWidth: '450px',
}));

export const LoginFormBoxHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flext-start',

    marginBottom: '40px',
}));

export const LoginFormText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    marginBottom: '5px',
}));

export const LoginFormSubText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
}));

export const LoginFormControl = styled(FormControl)(({ theme }) => ({
    ':not(:nth-last-of-type(2))': {
        marginBottom: '30px',
    },
}));

export const LoginFormBoxForgot = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px 0',
}));

export const LoginFormForgot = styled(Link)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightLight,
    cursor: 'pointer',
}));

export const LoginFormButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    ':disabled': {
        pointerEvents: 'unset',
        cursor: 'not-allowed',
        opacity: 0.3,
    },
    ':hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));

export const LoginCarouselContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: '50%',
    height: '100%',
    background: theme.palette.background.default,
}));

export const LoginCarouselBoxWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
}));
