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
          <NavLink to="/gallery" className="navLink">
            Galeries
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/inscrire" className="navLink">
            S'inscrire
          </NavLink>
        </li>
      </ul>
      <div className="socialIcons">
        <a href='https://www.snapchat.com/add/mmacasbahfight?invite_id=rCJkCARU&locale=fr_FR&share_id=RydhjjbpRVi0UUa33pOCGQ&sid=559b3f2fd9bc4ea0a21470a07e8e47f5'>
        <FontAwesomeIcon 
          icon={faSquareSnapchat} 
          beat 
          style={{color: "#fffc00",}}/>
          </a>
          <a href='https://www.instagram.com/mmacasbahfight/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
        <FontAwesomeIcon
          icon={faSquareInstagram}
          beat
          style={{color: "#ff0285",}} />
          </a>
        </div>

    </nav>
  );
}

export default Navbar;
