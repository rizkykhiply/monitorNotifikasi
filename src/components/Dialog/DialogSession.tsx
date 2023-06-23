// Import Modules
import { memo, useContext } from 'react';
import Router from 'next/router';

// Import Material Modules
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Import Material Icons
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Styles
import { ButtonSecondary } from '@styles/components';

// Define Dialog Session Component
const DialogSessionComponent = () => {
    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Handle Logout
    const handleLogout = () => {
        Router.push('/login');
        actions.UPDATE_MODAL({
            ...states.modal,
            session: {
                show: false,
            },
        });
    };

    return (
        <Dialog
            disableScrollLock={true}
            open={states.modal.session.show}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle textAlign="center" id="alert-dialog-title">
                Unauthorized
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
                <ErrorOutlineOutlined color="error" sx={{ fontSize: '100px' }} />
                <DialogContentText id="alert-dialog-description">Session has been expired.</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ padding: '20px' }}>
                <ButtonSecondary fullWidth variant="outlined" color="error" onClick={handleLogout}>
                    Logout
                </ButtonSecondary>
            </DialogActions>
        </Dialog>
    );
};

// Export DialogSession Component
export default memo(DialogSessionComponent);
