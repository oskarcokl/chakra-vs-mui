import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

const ConfirmationModal = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const onConfirm = () => {
        setSnackbarOpen(true);
        setOpenDialog(false);
    }

    return (
        <>
            <Box display="flex" justifyContent="center" mt={20}>
                <Button variant="contained" onClick={() => setOpenDialog(true)}>
                    Open Dialog
                </Button>
            </Box>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>Are you sure you want to delete this item?</DialogContent>
                <DialogActions>
                    <Button onClick={onConfirm}>Confirm</Button>
                    <Button color="error" onClick={() => setOpenDialog(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">Confirmation successful</Alert>
            </Snackbar>
        </>
    );
};

export default ConfirmationModal;
