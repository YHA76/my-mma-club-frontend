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
import NotFound from "./views/NotFound";
import MentionsLegales from "./views/legal/MentionsLegales.js";
import PolitiqueConfidentialite from "./views/legal/PolitiqueConfidentialite";
import CookieBanner from "./views/legal/CookieBanner";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <CookieBanner />
        {/* Le Router encapsule toutes les routes et le Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/seances" element={<Seances />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/installations" element={<Installations />} />
          <Route path="*" element={<NotFound />} /> {/*error 404*/}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
