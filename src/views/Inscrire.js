import React from 'react';
import Navbar from '../components/NavBar'; // Barre de navigation
import "../styles/styles.css"; // Importation des styles globaux
import "../styles/inscription.css"; // Importation des styles spécifiques

// Importation des images des pages du PDF
import page1 from '../assets/images/Licence 2025 MMA-1.jpg';
import page2 from '../assets/images/Licence 2025 MMA-2.jpg';
import page3 from '../assets/images/Licence 2025 MMA-3.jpg';

function Inscription() {
  // Tableau d'images et de descriptions
  const pages = [
    { src: page1, description: "Première page du formulaire d'inscription" },
    { src: page2, description: "Deuxième page du formulaire d'inscription" },
    { src: page3, description: "Troisième page du formulaire d'inscription" }
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
    </div>
  );
}

export default Inscription;
