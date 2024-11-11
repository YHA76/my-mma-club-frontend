// Footer.js
import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contactez-nous</h3>
          <a href="mailto:MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR" className="contact-link">
          MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR</a>
          <p>Téléphone : 06 18 02 58 23</p>
          <p>Adresse : Maison du plateau Pl. du châtelet, 76000 Rouen</p>
        </div>
        
        <div className="footer-section main-links">
          <h3>Liens Principaux</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">Qui nous sommes</a></li>
            <li><a href="/seances">Séances</a></li>
            <li><a href="/gallery">Galerie</a></li>
            <li><a href="inscrire">S'inscrire</a></li>
          </ul>
        </div>

        <div className="footer-section logo">
          <h3>MMA Casbah Fight</h3>
          <img src={logo} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MMA Casbah Fight. Tous droits réservés.</p>
        <p>Crédits : Design et Développement par Benali Yahya</p>
      </div>
    </footer>
  );
}

export default Footer;
