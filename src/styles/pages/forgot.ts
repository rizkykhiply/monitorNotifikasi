// Import Modules
import { Form } from 'formik';

// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const ForgotSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    background: `linear-gradient(to bottom, ${theme.palette.background.paper} 50%, ${theme.palette.primary.main}  50%)`,
}));

export const ForgotBoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '70%',
    width: '30%',
    border: 'none',
    background: '#FFF',
    borderRadius: '20px',
    boxShadow: theme.shadows[6],
    padding: '50px',
}));

export const ForgotFormContainer = styled(Form)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
}));

export const ForgotFormBoxHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginBottom: '30px',
}));

export const ForgotFormTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    margin: '20px 0',
}));

export const ForgotFormText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
}));

export const ForgotFormControl = styled(FormControl)(({ theme }) => ({
    margin: '0',
}));

export const ForgotFormButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    ':disabled': {
        pointerEvents: 'unset',
        cursor: 'not-allowed',
        opacity: 0.3,
    },
    ':hover': {
        backgroundColor: theme.palette.primary.light,
    },
    margin: '30px 0',
}));

export const ForgotFormBack = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    color: 'inherit',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightLight,
    cursor: 'pointer',
}));
