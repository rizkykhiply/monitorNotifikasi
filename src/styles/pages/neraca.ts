// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const NeracaContent = styled(Box)(({ theme }) => ({}));

export const NeracaHeaderContainer = styled(Box)(({ theme }) => ({
    background: '#FFF',
    borderRadius: '10px',
    boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
    padding: '30px',
    marginBottom: '30px',
}));

export const NeracaHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const NeracaHeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
}));

export const NeracaReportContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const NeracaTitleContainer = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: '30px',
}));

export const NeracaTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
}));

export const NeracaTitleSub = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
}));

export const NeracaListContainer = styled(Box)(({ theme }) => ({
    height: '600px',
    width: '100%',
    border: '1px solid #000',
}));
