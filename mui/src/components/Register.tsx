import { TextField, Button, Card, CardContent, CardHeader, Stack, Snackbar, Alert } from '@mui/material';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const registerSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters long")
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
            path: ["confirmPassword"]
        });
    }
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });

    const registerHandler = async (data: RegisterFormData) => {
        setIsSubmitting(true);
        try {
            console.log(data);

            await new Promise(resolve => setTimeout(resolve, 1000));

            setSnackbarOpen(true);
            setSnackbarMessage("Register successful");
            setSnackbarSeverity('success');
        } catch (error) {
            console.error(error);
            setSnackbarOpen(true);
            setSnackbarMessage("Register failed");
            setSnackbarSeverity('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: '300px', margin: 'auto', mt: 10 }}>
            <CardHeader title="Register" />
            <CardContent>
                <form onSubmit={handleSubmit(registerHandler)}>
                    <Stack spacing={2}>
                        <TextField
                            label="First Name"
                            required
                            {...register('firstName')}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                        <TextField
                            label="Last Name"
                            required
                            {...register('lastName')}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            required
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            required
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <TextField
                            label="Confirm Password"
                            type="password"
                            required
                            {...register('confirmPassword')}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}>
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </Button>
                    </Stack>
                </form>

                <Snackbar
                    open={snackbarOpen}
                    onClose={() => setSnackbarOpen(false)}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
                </Snackbar>
            </CardContent>
        </Card>
    );
}

export default Register;
