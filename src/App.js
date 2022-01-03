import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Other from './Other';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  );
}

export default App;
