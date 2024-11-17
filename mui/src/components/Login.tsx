import { TextField, Button, Card, CardContent, CardHeader, Stack } from '@mui/material';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required")
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const loginHandler = async (data: LoginFormData) => {
        setIsSubmitting(true);
        try {
            console.log(data);

            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: '300px', margin: 'auto', mt: 10 }}>
            <CardHeader title="Login" />
            <CardContent>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <Stack spacing={2}>
                        <TextField
                            label="Username"
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
                        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                        </Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;