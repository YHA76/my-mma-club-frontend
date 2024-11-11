import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Schedule from '../components/Schedule.tsx';
import "../styles/Styles.css";
import "../styles/Seances.css";
import Footer from '../components/Footer.js';


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
            Découvrez nos séances selon les jours de la semaine et les catégories d'âge
          </p>
        </div>

        {/* Boutons de filtrage */}
        <div className="seances-filter-buttons">
          <button onClick={() => handleFilterChange("all")}>Tous</button>
          <button onClick={() => handleFilterChange("adults")}>Adultes</button>
          <button onClick={() => handleFilterChange("teens")}>Ados</button>
          <button onClick={() => handleFilterChange("children")}>Enfants</button>
        </div>

        {/* Contenu du planning filtré */}
        <div className="seances-schedule-container">
          <div className="seances-schedule-grid">
            <div className="seances-time-header"></div>
            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
              <div key={day} className="seances-day-header">{day}</div>
            ))}

            {/* Filtrage en fonction de l'âge */}
            {filter === "adults" || filter === "all" ? (
              <>
                <div className="seances-age-group">Adultes (18+)</div>
                <Schedule time="20h00 - 22h00" activity="Muay Thai" type="muay-thai" />
                <Schedule />
                <Schedule time="20h00 - 22h15" activity="Grappling" type="grappling" />
                <Schedule />
                <Schedule time="20h00 - 22h15" activity="MMA" type="mma" />
                <Schedule time="15h00 - 16h30" activity="Boxe Anglaise" type="boxing" />
                <Schedule />
              </>
            ) : null}

            {filter === "teens" || filter === "all" ? (
              <>
                <div className="seances-age-group">Ados (13-17 ans)</div>
                <Schedule time="18h00 - 19h30" activity="Kickboxing" type="kickboxing" />
                <Schedule />
                <Schedule time="18h00 - 19h30" activity="Boxe Anglaise" type="boxing" />
                <Schedule />
                <Schedule time="18h00 - 19h30" activity="Lutte" type="wrestling" />
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
      </div>
      <Footer />
    </div>
  );
}

export default Seances;
