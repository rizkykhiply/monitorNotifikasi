// Import Material Modules
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonComponent = styled(Button)(({ theme }) => ({
    color: '#FFF',
    ':disabled': {
        pointerEvents: 'unset',
        cursor: 'not-allowed',
    },
}));
