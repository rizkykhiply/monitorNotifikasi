// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const ForgotSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
}));

export const ForgotBoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '70%',
    width: '30%',
    border: 'none',
    background: '#FFF',
    borderRadius: '20px',
    boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
    padding: '50px',
}));

export const ForgotHeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginBottom: '30px',
}));

export const ForgotHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
}));

export const ForgotLoginContainer = styled(Box)(({ theme }) => ({
    marginTop: '20px',
}));

export const ForgotLoginRedirect = styled(Link)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: 'inherit',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: theme.typography.fontWeightLight,
    cursor: 'pointer',
}));
