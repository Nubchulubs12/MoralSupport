import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import from react-router-dom
import './App.css';
import Home from '/pages/Home';

function App() {
  return (
    <BrowserRouter>  {/* Correct usage of BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;