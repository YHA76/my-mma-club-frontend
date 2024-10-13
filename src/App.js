// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Seances from './views/Seances';
import Programmes from './views/Programmes';
import Inscrire from './views/Inscrire';

function App() {
  return (
    <Router>  {/* Le Router encapsule toutes les routes et le Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/seances" element={<Seances />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/inscrire" element={<Inscrire />} />
      </Routes>
    </Router>
  );
}

export default App;
