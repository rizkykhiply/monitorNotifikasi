// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ================================ Create ================================ //

export const JournalContent = styled(Box)(({ theme }) => ({
    background: '#FFF',
    borderRadius: '10px',
    boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
    padding: '30px',
}));

export const JournalTitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
}));

export const JournalContainer = styled(Box)(({ theme }) => ({
    width: '100%',
}));

export const JournalCurrencyInput = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.secondary,
}));

export const JournalSummaryContainer = styled(Box)(({ theme }) => ({
    background: 'rgb(244, 246, 248)',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '30px',
}));

export const JournalSummaryBox = styled(Box)(({ theme }) => ({
    display: 'flex',

    width: '300px',
}));

export const JournalSummaryTitle = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.secondary,
}));

export const JournalSummaryText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.secondary,
    marginLeft: 'auto',
}));

export const JournalSubmitContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    maxWidth: '300px',
}));

// ================================ ENTRIES ================================ //

export const JournalEntriesContent = styled(Box)(({ theme }) => ({
    background: '#FFF',
    borderRadius: '10px',
    boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
}));

export const JournalEntriesHeaderContainer = styled(Box)(({ theme }) => ({
    padding: '30px',
}));

export const JournalEntriesHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const JournalEntriesHeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
}));
