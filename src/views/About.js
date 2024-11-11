import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu
import "../styles/Styles.css";
function About() {
  return (
    <div>
        <Navbar />
        <div style={{ paddingTop: '90px' }}>
      <h1>Qui nous sommes</h1>
      <p>Voici la page qui décrit qui nous sommes.</p>
    </div>
    </div>
  );
}

export default About;
