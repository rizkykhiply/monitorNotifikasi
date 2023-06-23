// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const RegisterSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
}));

export const RegisterBoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '80%',
    width: '80%',
    border: 'none',
    background: '#FFF',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
    position: 'relative',
}));

export const RegisterLeftContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: '50%',
    height: '100%',
}));

export const RegisterHeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flext-start',

    marginBottom: '40px',
}));

export const RegisterHeaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    marginBottom: '5px',
}));

export const RegisterHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
}));

export const RegisterLoginContainer = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '20px',
}));

export const RegisterLoginText = styled(Typography)(({ theme }) => ({
    color: 'inherit',
    fontSize: '13px',
    fontWeight: theme.typography.fontWeightLight,
}));

export const RegisterLoginRedirect = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
}));

export const RegisterRightContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: '50%',
    height: '100%',
    background: theme.palette.background.default,
}));

export const RegisterHightlightTitle = styled(Typography)(({ theme }) => ({
    color: '#FFF',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    textAlign: 'center',
    marginBottom: '10px',
}));

export const RegisterHightlightText = styled(Typography)(({ theme }) => ({
    maxWidth: '500px',
    color: '#FFF',
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    textAlign: 'center',
}));
