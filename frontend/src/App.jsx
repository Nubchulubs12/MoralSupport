import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import from react-router-dom
import './App.css';
import Home from '/pages/Home';
import GameDev from '/pages/GameDev';
import Projects from '/pages/Projects';
import AboutUs from '/pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/GameDev" element={<GameDev />} />
         <Route path="/Projects" element={<Projects />} />
         <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;