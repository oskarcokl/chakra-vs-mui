import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const navigate = useNavigate();
    return <Button variant="contained" color="primary" onClick={() => navigate('/')}>Back</Button>;
}
