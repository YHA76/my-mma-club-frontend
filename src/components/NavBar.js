import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'; // Importation du fichier CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareSnapchat, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'; // Importation de l'icône Snapchat

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <NavLink to="/" className="navLink" exact>
            Accueil
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/about" className="navLink">
            Qui nous sommes
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/seances" className="navLink">
            Séances
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/programmes" className="navLink">
            Programmes
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/inscrire" className="navLink">
            S'inscrire
          </NavLink>
        </li>
      </ul>
      <div className="socialIcons">
        <FontAwesomeIcon 
          icon={faSquareSnapchat} 
          beat 
          style={{color: "#fffc00",}} />
        <FontAwesomeIcon
          icon={faSquareInstagram}
          beat
          style={{color: "#ff0285",}} />
        </div>

    </nav>
  );
}

export default Navbar;
