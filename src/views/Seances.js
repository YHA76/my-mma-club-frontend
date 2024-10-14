import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu


function Seances() {
  return (
    <div>
            <Navbar />
            <div style={{ paddingTop: '90px' }}> {/* Pour éviter le chevauchement avec la navbar */}
      <h1>Séances</h1>
      <p>Découvrez nos séances ici.</p>
    </div>
    </div>
  );
}

export default Seances;
