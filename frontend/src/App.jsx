import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import Confirmado from './pages/Confirmado';
import Desuscrito from './pages/Desuscrito';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/confirmado" element={<Confirmado />} />
        <Route path="/desuscrito" element={<Desuscrito />} />
      </Routes>
    </Router>
  );
}
