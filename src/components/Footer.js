import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Nous Contacter</h3>
        <p>Vous avez des questions ? N'hésitez pas à nous contacter !</p>
        <a href="mailto:MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR" className="contact-link">
        MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR
        </a>
      </div>
    </footer>
  );
};

export default Footer;
