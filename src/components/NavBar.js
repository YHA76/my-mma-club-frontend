import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/NavBar.css'; // Importation du fichier CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.8, rotate: -15, borderRadius: "100%" }}
          >
            <Link to="/" className="navLink">Accueil</Link>
          </motion.div>
        </li>
        <li className="navItem">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.8, rotate: -15, borderRadius: "100%" }}
          >
            <Link to="/about" className="navLink">Qui nous sommes</Link>
          </motion.div>
        </li>
        <li className="navItem">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.8, rotate: -15, borderRadius: "100%" }}
          >
            <Link to="/seances" className="navLink">Séances</Link>
          </motion.div>
        </li>
        <li className="navItem">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.8, rotate: -15, borderRadius: "100%" }}
          >
            <Link to="/programmes" className="navLink">Programmes</Link>
          </motion.div>
        </li>
        <li className="navItem">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.8, rotate: -15, borderRadius: "100%" }}
          >
            <Link to="/inscrire" className="navLink">S'inscrire</Link>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
