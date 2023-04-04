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
    openSnackbar: boolean;
    handleClose: () => void;
}
