import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ComponentsList from './views/ComponentsList';
import Login from './components/Login';
import { Box } from '@mui/material';
import BackButton from './components/BackButton';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentsList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Box mt={4} display="flex" justifyContent="center">
        <BackButton />
      </Box>
    </Router>
  );
}

export default App;
