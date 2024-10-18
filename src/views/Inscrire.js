import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu
import "../styles/styles.css";

function Inscrire() {
  return (
    <div>
            <Navbar />
            <div style={{ paddingTop: '90px' }}>
      <h1>S'inscrire</h1>
      <p>Inscrivez-vous à notre club de MMA.</p>
    </div>
    </div>
  );
}

export default Inscrire;
