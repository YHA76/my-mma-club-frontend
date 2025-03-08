import React from "react";
import Navbar from "../components/NavBar.js";
import "../styles/Styles.css";
import "../styles/Inscription.css";
import Footer from "../components/Footer.js";
import InscriptionForm from "../components/InscriptionForm";

function Inscription() {
  // Tableau d'images et de descriptions
  const pages = [
    {
      src: require("../assets/images/Licence-2025-MMA-1.webp"),
      description: "Première page du formulaire d'inscription",
    },
    {
      src: require("../assets/images/Licence-2025-MMA-2.webp"),
      description: "Deuxième page du formulaire d'inscription",
    },
    {
      src: require("../assets/images/Licence-2025-MMA-3.webp"),
      description: "Troisième page du formulaire d'inscription",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="inscription-page" style={{ paddingTop: "90px" }}>
        <h1 className="inscription-title">Formulaire d'Inscription</h1>
        {/* Affichage des images sous forme de galerie */}
        <div className="pdf-gallery">
          {pages.map((page, index) => (
            <div key={index} className="pdf-gallery-item">
              <img
                src={page.src}
                alt={`Page ${index + 1} du formulaire d'inscription`}
                className="pdf-image"
                width="600"
                height="800"
              />
              <p className="pdf-description">{page.description}</p>
            </div>
          ))}
        </div>
        <a
          href={`${process.env.PUBLIC_URL}/assets/pdf/Licence_2025_MMA.pdf`}
          download="Licence_2025_MMA.pdf"
          className="download-button"
        >
          Télécharger le formulaire
        </a>
      </div>
      {/* Formulaire d'inscription */}
      <InscriptionForm />

      <Footer />
    </div>
  );
}

export default Inscription;
