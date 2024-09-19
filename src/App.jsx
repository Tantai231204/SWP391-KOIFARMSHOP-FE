
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Home from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;
