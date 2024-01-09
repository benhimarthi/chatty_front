
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<LoginRegister/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </Router>

  );
}

export default App;
