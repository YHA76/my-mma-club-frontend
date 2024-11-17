import React from 'react';
import Navbar from '../components/NavBar';
import "../styles/About.css";
import Footer from '../components/Footer.js';

function About() {
  return (
    <div>
      <Navbar />
      <div className="full-page">
      <div className="about-page" style={{ paddingTop: '90px' }}>
        <section className="about-section">
          <h1 className="about-title">Qui sommes nous</h1>
          <p className="about-text">
            Le MMA Casbah Fight est une association sportive et sociale créée par des jeunes des hauts de Rouen en novembre 2020, et en activité depuis juin 2023.
          </p>
          <p className="about-text">
            L‘association et le club sont implantés sur les hauts de Rouen de même que le siège social.
          </p>
          <p className="about-text">
            La salle du club se trouve dans l’ancienne mythique salle de musculation du quartier, au -2 de la maison du plateau.
          </p>
          <p className="about-text">
            En effet, plus de 10 ans après la fermeture de cette salle, nous avons eu pour projet d’ouvrir une salle de MMA dans ce même lieu qui a toujours été un des principaux lieux sportifs du quartier des Hauts de Rouen. Et c’est avec la détermination des jeunes/habitants du quartier et le soutien de la ville que nous avons pu ouvrir cette salle de MMA en novembre 2023.
          </p>
        </section>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default About;
