// Import Modules
import { memo } from 'react';

// Import Material Modules
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

// Import Styles
import { ButtonPrimary, ButtonSecondary } from '@styles/components';

// Define Dialog Session Component
const DialogDeleteComponent = (props: { open: boolean; handleDelete: () => void; handleClose: () => void }) => {
    // Destructuring Props
    const { open, handleDelete, handleClose } = props;

    return (
        <Dialog
            disableScrollLock={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent sx={{ textAlign: 'center' }}>
                <DialogContentText id="alert-dialog-description">Are you sure you want to delete this data?</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ padding: '20px' }}>
                <ButtonSecondary variant="outlined" color="error" onClick={handleClose}>
                    Cancel
                </ButtonSecondary>
                <ButtonPrimary onClick={handleDelete} variant="contained" color="error">
                    Delete
                </ButtonPrimary>
            </DialogActions>
        </Dialog>
    );
};

// Export DialogSession Component
export default memo(DialogDeleteComponent);
