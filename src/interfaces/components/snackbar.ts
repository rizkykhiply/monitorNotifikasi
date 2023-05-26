// Import Modules
import { AlertColor } from '@mui/material';

// Define Position Snackbar Interface
interface PositionSnackbar {
    vertical: 'bottom' | 'top';
    horizontal: 'left' | 'center' | 'right';
}

// Define Props Snackbar Interface
export interface PropsSnackbar {
    message: string;
    position: PositionSnackbar;
    type: AlertColor;
    open: boolean;
    handleClose: () => void;
}

// Define Snackbar State Interface
export interface SnackbarState {
    open: boolean;
    type: AlertColor;
    message: string;
}
