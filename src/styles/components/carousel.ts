// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const ItemWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const ItemImageWrapper = styled(Box)(({ theme }) => ({
    width: '80%',
    height: '80%',
}));

export const ItemContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '20px 0',
    padding: '0 100px',
}));

export const ItemContentTitle = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    textAlign: 'center',
    marginBottom: '10px',
}));

export const ItemContentText = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    textAlign: 'center',
}));
