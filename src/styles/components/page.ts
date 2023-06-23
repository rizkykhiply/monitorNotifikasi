// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const PageSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    width: '100%',
}));

export const PageHeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
}));

export const PageHeaderLeft = styled(Box)(({ theme }) => ({
    marginLeft: '10px',
}));

export const PageHeaderRight = styled(Box)(({ theme }) => ({
    alignSelf: 'flex-end',
}));

export const PageTitleText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
}));

export const PageTitleSubText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
}));
