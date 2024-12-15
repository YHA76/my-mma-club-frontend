// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Seances from "./views/Seances";
import Gallery from "./views/Gallery";
import Inscription from "./views/Inscription";
import Installations from "./views/Installations.js";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        {/* Le Router encapsule toutes les routes et le Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/seances" element={<Seances />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/installations" element={<Installations />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
