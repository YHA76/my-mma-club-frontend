import React from 'react';
import Navbar from '../components/NavBar';
import "../styles/Styles.css";
import "../styles/Installations.css"
import Footer from '../components/Footer.js';
import salleImage from '../assets/images/salle.jpg';

function Installations() {
  return (
    <div>
      <Navbar />
      <div className="installations-page" style={{ paddingTop: '90px' }}>
        <h1 className="installations-title">Nos Installations et Équipements</h1>
        <p className="installations-description">
          Découvrez nos installations de qualité et nos équipements qui permettent une pratique sécurisée et optimale du MMA.
        </p>

        {/* Section 1: La Salle de Combat */}
        <section className="installation-section">
          <h2 className="installation-subtitle">La Salle de Combat</h2>
          <p className='text'>
            Notre salle de combat est équipée de tatamis épais et lisses, spécialement conçus pour le MMA et les exercices au sol. La zone d'entraînement est entourée de protections murales pour permettre le travail contre la "cage" en toute sécurité.
          </p>
          <img src={salleImage} alt="Salle de combat" className="installation-image" />
        </section>

        {/* Section 2: Équipements de Frappe et de Grappling */}
        <section className="installation-section">
          <h2 className="installation-subtitle">Équipements de Frappe et de Grappling</h2>
          <p className='text'>
            Nous mettons à disposition plusieurs sacs de frappe et de grappling pour travailler les compétences en frappes pieds-poings, ainsi que les transitions au sol.
          </p>
          <img src="/path/to/equipment.jpg" alt="Équipements de frappe et de grappling" className="installation-image" />
        </section>

        {/* Section 3: Entraînement Extérieur */}
        <section className="installation-section">
          <h2 className="installation-subtitle">Entraînement Extérieur</h2>
          <p className='text'>
            À proximité de la salle, un parcours en forêt, une grande côte et un large escalier sont disponibles pour travailler la condition physique en groupe, apportant un environnement naturel et varié pour les séances de renforcement physique.
          </p>
          <img src="/path/to/outdoor-training.jpg" alt="Entraînement extérieur" className="installation-image" />
        </section>

        {/* Section 4: Équipements Requis pour les Pratiquants */}
        <section className="installation-section">
          <h2 className="installation-subtitle">Équipements Requis</h2>
          <ul className="equipment-list">
            <li>Une paire de gants de boxe (16 OZ minimum)</li>
            <li>Une paire de protège-tibias</li>
            <li>Une paire de coudières coquées</li>
            <li>Une paire de bandes</li>
            <li>Une coquille</li>
            <li>Un protège-dents</li>
            <li>Une paire de gants de MMA rembourrés (mitaine interdite)</li>
            <li>Une bouteille d’eau</li>
          </ul>
          <p className='text'>
            Ces équipements sont essentiels pour garantir une pratique sécurisée et efficace du MMA. Pensez à vous équiper correctement pour éviter les blessures et maximiser vos performances.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Installations;
