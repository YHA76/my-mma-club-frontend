import React from "react";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion"; // Importation de framer-motion pour l'animation
import "../styles/Styles.css";
import "../styles/Gallery.css";
import Footer from "../components/Footer.js";

function Gallery() {
  // Images et descriptions associées
  const images = [
    {
      src: require("../assets/images/picture_3.JPG"),
      description: (
        <>
          Stage avec Benoît Saint-Denis dans notre salle : <br /> 18/12/2023
        </>
      ),
    },
    {
      src: require("../assets/images/picture_2.jpg"),
      description: (
        <>
          Première séance avec notre coach de MMA et lutte ​Ibrahim et son ami
          Islam champion de Grappling : <br /> 10/11/2023
        </>
      ),
    },
    {
      src: require("../assets/images/picture_1.jpeg"),
      description: (
        <>
          remier entraînement depuis la reprise, avec Yazid notre coach de Muay
          thaï et Striking : <br /> 11/11/2023
        </>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="gallery-page" style={{ paddingTop: "90px" }}>
        <h1 className="gallery-title">Galerie Photos</h1>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <h3 className="gallery-description">{image.description}</h3>
              {/* Animation de grossissement au survol avec framer-motion */}
              <motion.img
                src={image.src}
                alt={`Description ${index + 1}`}
                whileTap={{ scale: 0.95 }} /* Rétrécissement au clic */
                transition={{ duration: 0.3 }} /* Durée de la transition */
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
