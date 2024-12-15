import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareSnapchat,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import "../styles/NavBar.css";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "Qui nous sommes" },
    { path: "/seances", label: "Séances" },
    { path: "/installations", label: "Installations" },
    { path: "/gallery", label: "Galerie" },
    { path: "/inscription", label: "Inscription" },
  ];

  return (
    <nav className={`navbar ${isDark ? "dark" : "light"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo du Club" className="logo-image" />
          </NavLink>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Changer le thème"
        >
          <FontAwesomeIcon
            icon={isDark ? faSun : faMoon}
            className="theme-icon"
            color="white"
          />
        </button>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <ul className={`navList ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path} className="navItem">
              <NavLink
                to={item.path}
                className="navLink"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="socialIcons">
          <a
            href="https://www.snapchat.com/add/mmacasbahfight?invite_id=rCJkCARU&locale=fr_FR&share_id=RydhjjbpRVi0UUa33pOCGQ&sid=559b3f2fd9bc4ea0a21470a07e8e47f5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon
              icon={faSquareSnapchat}
              beat
              style={{ color: "#fffc00" }}
              className="icon-hover"
            />
          </a>
          <a
            href="https://www.instagram.com/mmacasbahfight/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon
              icon={faSquareInstagram}
              beat
              style={{ color: "#ff0285" }}
              className="icon-hover"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
