import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule.tsx";
import "../styles/Styles.css";
import "../styles/Seances.css";
import Footer from "../components/Footer.js";
import gant1 from "../assets/images/bon_gant_1.webp";
import gant2 from "../assets/images/bon_gant_2.webp";
import gant3 from "../assets/images/bon_gant_3.webp";
import gant4 from "../assets/images/bad_gant_1.webp";
import gant5 from "../assets/images/bad_gant_2.webp";
import gant6 from "../assets/images/bad_gant_3.webp";

function Seances() {
  const [filter, setFilter] = useState("all"); // État pour le filtre d'âge

  const handleFilterChange = (ageGroup) => {
    setFilter(ageGroup); // Mettre à jour l'état en fonction du filtre sélectionné
  };

  return (
    <div>
      <Navbar />
      <div className="seances-page">
        <div className="seances-header">
          <h1 className="seances-title">Horaires des Séances</h1>
          <p className="seances-description">
            Découvrez nos séances selon les jours de la semaine et les
            catégories d'âge
          </p>
        </div>

        {/* Boutons de filtrage */}
        <div className="seances-filter-buttons">
          <button onClick={() => handleFilterChange("all")}>Tous</button>
          <button onClick={() => handleFilterChange("adults")}>Adultes</button>
          <button onClick={() => handleFilterChange("teens")}>Ados</button>
          <button onClick={() => handleFilterChange("children")}>
            Enfants
          </button>
        </div>

        {/* Contenu du planning filtré */}
        <div className="seances-schedule-container">
          <div className="seances-schedule-grid">
            <div className="seances-time-header"></div>
            {[
              "Lundi",
              "Mardi",
              "Mercredi",
              "Jeudi",
              "Vendredi",
              "Samedi",
              "Dimanche",
            ].map((day) => (
              <div key={day} className="seances-day-header">
                {day}
              </div>
            ))}

            {/* Filtrage en fonction de l'âge */}
            {filter === "adults" || filter === "all" ? (
              <>
                <div className="seances-age-group">Adultes (18+)</div>
                <Schedule
                  time="20h00 - 22h00"
                  activity="Muay Thai"
                  type="muay-thai"
                />
                <Schedule />
                <Schedule
                  time="20h00 - 22h15"
                  activity="Grappling"
                  type="grappling"
                />
                <Schedule />
                <Schedule time="20h00 - 22h15" activity="MMA" type="mma" />
                <Schedule
                  time="15h00 - 16h30"
                  activity="Boxe Anglaise"
                  type="boxing"
                />
                <Schedule />
              </>
            ) : null}

            {filter === "teens" || filter === "all" ? (
              <>
                <div className="seances-age-group">Ados (13-17 ans)</div>
                <Schedule
                  time="18h00 - 19h30"
                  activity="Kickboxing"
                  type="kickboxing"
                />
                <Schedule />
                <Schedule
                  time="18h00 - 19h30"
                  activity="Boxe Anglaise"
                  type="boxing"
                />
                <Schedule />
                <Schedule
                  time="18h00 - 19h30"
                  activity="Lutte"
                  type="wrestling"
                />
                <Schedule />
                <Schedule />
              </>
            ) : null}

            {filter === "children" || filter === "all" ? (
              <>
                <div className="seances-age-group">Enfants (-13 ans)</div>
                <Schedule />
                <Schedule />
                <Schedule />
                <Schedule />
                <Schedule />
                <Schedule />
                <Schedule time="11h00 - 12h15" activity="MMA" type="mma" />
              </>
            ) : null}
          </div>
        </div>
        {/* Section Équipements Requis */}
        <section className="installation-section">
          <h2 className="installation-subtitle">Équipements Requis</h2>
          <ul className="equipment-list">
            <li>Une paire de gants de boxe (16 OZ minimum)</li>
            <li>Une paire de protège-tibias</li>
            <li>Une paire de coudières coquées</li>
            <li>Une paire de bandes</li>
            <li>Une coquille</li>
            <li>Un protège-dents</li>
            <li>Une paire de gants de MMA rembourrés (mitaine interdite)</li>
            <li>Une bouteille d’eau</li>
          </ul>
          <p className="text">
            Ces équipements sont essentiels pour garantir une pratique sécurisée
            et efficace du MMA. Pensez à vous équiper correctement pour éviter
            les blessures et maximiser vos performances.
          </p>
          <section className="equipment-gallery">
            <div className="dual-gallery">
              {/* Section pour s’entraîner et progresser */}
              <div className="gallery-section">
                <h3 className="equipment-gallery-title">
                  Idéal pour s’entraîner et progresser
                </h3>
                <div className="image-row">
                  <img
                    src={gant1}
                    alt="Équipement 1"
                    className="equipment-image"
                  />
                  <img
                    src={gant2}
                    alt="Équipement 2"
                    className="equipment-image"
                  />
                  <img
                    src={gant3}
                    alt="Équipement 3"
                    className="equipment-image"
                  />
                </div>
              </div>

              {/* Section pour se blesser */}
              <div className="gallery-section">
                <h3 className="equipment-gallery-title">
                  Idéal pour se blesser
                </h3>
                <div className="image-row">
                  <img
                    src={gant4}
                    alt="Équipement 4"
                    className="equipment-image"
                  />
                  <img
                    src={gant5}
                    alt="Équipement 5"
                    className="equipment-image"
                  />
                  <img
                    src={gant6}
                    alt="Équipement 6"
                    className="equipment-image"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Seances;
