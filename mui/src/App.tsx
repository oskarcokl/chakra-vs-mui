import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentsList from './views/ComponentsList';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentsList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
