// Import Modules
import { memo } from 'react';

// Import Material Modules
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Import Interfaces
import { PropsSnackbar } from '@interfaces/components';

// Define Base Snackbar Component
const SnackbarComponent = (props: PropsSnackbar) => {
    return (
        <Snackbar anchorOrigin={props.position} open={props.openSnackbar} onClose={props.handleClose}>
            <Alert onClose={props.handleClose} variant="filled" severity={props.type} sx={{ background: '#C62128' }}>
                {props.message}
            </Alert>
        </Snackbar>
    );
};

// Export Base Snackbar Component
export default memo(SnackbarComponent);
