import { Box, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

const ToastExample = () => {
    const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [warningSnackbarOpen, setWarningSnackbarOpen] = useState(false);
    const [infoSnackbarOpen, setInfoSnackbarOpen] = useState(false);

    return (
        <>
            <Box display="flex" justifyContent="center" mt={20} gap={2}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => setSuccessSnackbarOpen(true)}>
                    Success
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => setErrorSnackbarOpen(true)}>
                    Error
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => setWarningSnackbarOpen(true)}>
                    Warning
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => setInfoSnackbarOpen(true)}>
                    Info
                </Button>
            </Box>
            <Snackbar
                open={successSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSuccessSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">Success</Alert>
            </Snackbar>
            <Snackbar
                open={errorSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setErrorSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="error">Error</Alert>
            </Snackbar>
            <Snackbar
                open={warningSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setWarningSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="warning">Warning</Alert>
            </Snackbar>
            <Snackbar
                open={infoSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setInfoSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="info">Info</Alert>
            </Snackbar>
        </>
    );
}

export default ToastExample;