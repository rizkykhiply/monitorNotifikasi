// Import Modules
import { memo, useContext } from 'react';

// Import Material Modules
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Import Context
import { StoreContext } from '@context/store/context';

// Define Snackbar Component
const SnackbarComponent = () => {
    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Handle Close
    const handleClose = () => {
        actions.UPDATE_NOTIFICATION({
            ...states.notification,
            show: false,
        });
    };

    return (
        <Snackbar autoHideDuration={5000} anchorOrigin={states.notification.position} open={states.notification.show} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity={states.notification.type}>
                {states.notification.message}
            </Alert>
        </Snackbar>
    );
};

// Export Base Snackbar Component
export default memo(SnackbarComponent);
