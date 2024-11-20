import { Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BackButton() {
    const { pathname } = useLocation();

    const navigate = useNavigate();
    return pathname !== '/' ? <Button variant="contained" color="primary" onClick={() => navigate('/')}>Back</Button> : null;
}
