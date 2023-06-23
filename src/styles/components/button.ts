// Import Material Modules
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonPrimary = styled(Button)(({ theme }) => ({
    color: '#FFF',
    textTransform: 'capitalize',
    ':disabled': {
        pointerEvents: 'unset',
        cursor: 'not-allowed',
    },
}));

export const ButtonSecondary = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    ':hover': {
        background: 'inherit',
    },
    ':disabled': {
        pointerEvents: 'unset',
        cursor: 'not-allowed',
    },
}));
