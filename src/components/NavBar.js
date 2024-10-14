import React from 'react';
import { NavLink } from 'react-router-dom'; // Utilisation de NavLink
import '../styles/NavBar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <NavLink 
            to="/" 
            className="navLink"
            activeClassName="active"
            exact
          >
            Accueil
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink 
            to="/about" 
            className="navLink"
            activeClassName="active"
          >
            Qui nous sommes
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink 
            to="/seances" 
            className="navLink"
            activeClassName="active"
          >
            Séances
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink 
            to="/programmes" 
            className="navLink"
            activeClassName="active"
          >
            Programmes
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink 
            to="/inscrire" 
            className="navLink"
            activeClassName="active"
          >
            S'inscrire
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
