import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu
import "../styles/Styles.css";
import Footer from '../components/Footer.js';


function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <h1>Découvrez ici l'art du combat</h1>
        <h2>MMA   -  BOXE  -  LUTTE  -  GRAPPLING -  JJB  -  SAMBO -  MUAY-THAI  -  KICKBOXING</h2>
        <iframe
          title="adresse"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.2569905290766!2d1.1311526770546483!3d49.460758658127155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0dd092840b0c3%3A0xdab3e25266bf3d2d!2sMMA%20CASBAH%20FIGHT!5e0!3m2!1sfr!2sfr!4v1731347287884!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }} // Conversion de la valeur style en objet
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
