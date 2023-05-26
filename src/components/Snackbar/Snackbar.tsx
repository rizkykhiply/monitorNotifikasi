// Import Modules
import { memo } from 'react';

// Import Material Modules
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Import Interfaces
import { PropsSnackbar } from '@interfaces/components';

// Define Snackbar Component
const SnackbarComponent = (props: PropsSnackbar) => {
    // Destructuring Props
    const { position, open, handleClose, type, message } = props;

    return (
        <Snackbar autoHideDuration={5000} anchorOrigin={position} open={open} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity={type}>
                {message}
            </Alert>
        </Snackbar>
    );
};

// Export Base Snackbar Component
export default memo(SnackbarComponent);
