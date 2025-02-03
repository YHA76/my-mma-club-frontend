import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{ color: "#e11019", textDecoration: "none", fontWeight: "bold" }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
