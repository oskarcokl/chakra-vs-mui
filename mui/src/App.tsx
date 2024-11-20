import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentsList from './views/ComponentsList';
import Login from './components/Login';
import { Box } from '@mui/material';
import BackButton from './components/BackButton';
import Register from './components/Register';
import ExpenseInputForm from './components/ExpenseInputForm';
import ConfirmationModal from './components/ConfirmationModal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expense-input-form" element={<ExpenseInputForm />} />
        <Route path="/confirmation-modal" element={<ConfirmationModal />} />
      </Routes>
      <Box mt={4} display="flex" justifyContent="center">
        <BackButton />
      </Box>
    </Router>
  );
}

export default App;
