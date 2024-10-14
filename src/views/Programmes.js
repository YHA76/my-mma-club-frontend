import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu


function Programmes() {
  return (
    <div>
            <Navbar />
            <div style={{ paddingTop: '90px' }}>
      <h1>Programmes</h1>
      <p>Découvrez nos programmes d'entraînement ici.</p>
    </div>
    </div>
  );
}

export default Programmes;
