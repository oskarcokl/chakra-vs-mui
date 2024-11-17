import { TextField, Button, Card, CardContent, CardHeader, Stack } from '@mui/material';

export default function Login() {
    return (
        <Card variant="outlined" sx={{ maxWidth: '300px', margin: 'auto', mt: 10 }}>
            <CardHeader title="Login" />
            <CardContent>
                <Stack spacing={2}>
                    <TextField label="Username" />
                    <TextField label="Password" />
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
