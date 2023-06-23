// Import Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const TablePagination = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '30px',
}));

export const PaginationText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.secondary,
}));
