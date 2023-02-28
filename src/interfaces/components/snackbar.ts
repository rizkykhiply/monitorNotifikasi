// Import Material Modules
import { AlertColor } from '@mui/material';

// Define Position Snackbar
interface PositionSnackbar {
    vertical: 'bottom' | 'top';
    horizontal: 'left' | 'center' | 'right';
}

// Define Props Snackbar
export interface PropsSnackbar {
    message: string;
    position: PositionSnackbar;
    type: AlertColor;
    openSnackbar: boolean;
    handleClose: () => void;
}
