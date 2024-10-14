import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '90px' }}> {/* Pour éviter le chevauchement avec la navbar */}
        <h1>Bienvenue sur la page d'accueil du club de MMA !</h1>
        <p>C'est la première page de ton application React.</p>
      </div>
    </div>
  );
}

export default Home;
