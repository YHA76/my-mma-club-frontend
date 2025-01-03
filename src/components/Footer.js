import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Ghost,
  Instagram,
} from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contactez-nous</h3>
          <div className="contact-item">
            <Mail className="contact-icon" size={18} />
            <a
              href="mailto:MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR"
              className="contact-link"
            >
              MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR
            </a>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={18} />
            <a href="tel:+33618025823" className="contact-link">
              06 18 02 58 23
            </a>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" size={18} />
            <a
              href="https://www.google.com/maps/search/?api=1&query=102+Av.+de+la+Grand%27mare%2C+76000+Rouen"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maison du plateau Pl. du châtelet, 76000 Rouen
            </a>
          </div>
        </div>

        <div className="footer-section main-links">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">
                <ChevronRight size={16} />
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about">
                <ChevronRight size={16} />
                Qui nous sommes
              </Link>
            </li>
            <li>
              <Link to="/seances">
                <ChevronRight size={16} />
                Séances
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <ChevronRight size={16} />
                Galerie
              </Link>
            </li>
            <li>
              <Link to="/inscription">
                <ChevronRight size={16} />
                Inscription
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section logo-section">
          <h3>MMA Casbah Fight</h3>
          <p>
            Rejoignez-nous pour découvrir l'art du combat dans une ambiance
            conviviale et professionnelle.
          </p>
          <div className="social-links">
            <a
              href="https://www.snapchat.com/add/mmacasbahfight?invite_id=rCJkCARU&locale=fr_FR&share_id=RydhjjbpRVi0UUa33pOCGQ&sid=559b3f2fd9bc4ea0a21470a07e8e47f5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Ghost size={24} />
            </a>
            <a
              href="https://www.instagram.com/mmacasbahfight"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MMA Casbah Fight. Tous droits réservés.</p>
        <p className="credits">Design et Développement par Benali Yahya</p>
      </div>
    </footer>
  );
}

export default Footer;
