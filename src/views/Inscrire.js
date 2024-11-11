import React from 'react';
import Navbar from '../components/NavBar';
import "../styles/Styles.css";
import "../styles/Inscription.css";
import Footer from '../components/Footer.js';


function Inscription() {
  // Tableau d'images et de descriptions
  const pages = [
    { src: require('../assets/images/Licence-2025-MMA-1.jpg'), description: "Première page du formulaire d'inscription" },
    { src: require('../assets/images/Licence-2025-MMA-2.jpg'), description: "Deuxième page du formulaire d'inscription" },
    { src: require('../assets/images/Licence-2025-MMA-3.jpg'), description: "Troisième page du formulaire d'inscription" }
  ];

  return (
    <div>
      <Navbar />
      <div className="inscription-page" style={{ paddingTop: '90px' }}>
        <h1 className="inscription-title">Formulaire d'Inscription</h1>
        
        {/* Affichage des images sous forme de galerie */}
        <div className="pdf-gallery">
          {pages.map((page, index) => (
            <div key={index} className="pdf-gallery-item">
              <img src={page.src} alt={`Page ${index + 1} du formulaire d'inscription`} className="pdf-image" />
              <p className="pdf-description">{page.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inscription;
