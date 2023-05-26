// Import Modules
import { Form } from 'formik';

// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const ForgotSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    background: theme.palette.background.paper,
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
    marginBottom: '30px',
}));

export const ForgotFormBack = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    color: 'inherit',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: theme.typography.fontWeightLight,
    marginTop: '20px',
    cursor: 'pointer',
}));
