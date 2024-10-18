import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu
import "../styles/styles.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <h1>Découvrez ici l'art du combat</h1>
        <h2>MMA   -  BOXE  -  LUTTE  -  GRAPPLING -  JJB  -  SAMBO -  MUAY-THAI  -  KICKBOXING</h2>
      </div>
    </div>
  );
}

export default Home;
