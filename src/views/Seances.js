import React from 'react';
import Navbar from '../components/NavBar';
import Schedule from '../components/Schedule.tsx';
import "../styles/styles.css";
import "../styles/seances.css"; 

function Seances() {
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

        <div className="seances-schedule-container">
          <div className="seances-schedule-grid">
            <div className="seances-time-header"></div>
            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
              <div key={day} className="seances-day-header">{day}</div>
            ))}

            <div className="seances-age-group">Adultes (18+)</div>
            <Schedule time="20h00 - 22h00" activity="Muay Thai" type="muay-thai" />
            <Schedule />
            <Schedule time="20h00 - 22h15" activity="Grappling" type="grappling" />
            <Schedule />
            <Schedule time="20h00 - 22h15" activity="MMA" type="mma" />
            <Schedule time="15h00 - 16h30" activity="Boxe Anglaise" type="boxing" />
            <Schedule />

            <div className="seances-age-group">Ados (13-17 ans)</div>
            <Schedule time="18h00 - 19h30" activity="Kickboxing" type="kickboxing" />
            <Schedule />
            <Schedule time="18h00 - 19h30" activity="Boxe Anglaise" type="boxing" />
            <Schedule />
            <Schedule time="18h00 - 19h30" activity="Lutte" type="wrestling" />
            <Schedule />
            <Schedule />

            <div className="seances-age-group">Enfants (-13 ans)</div>
            <Schedule />
            <Schedule />
            <Schedule />
            <Schedule />
            <Schedule />
            <Schedule />
            <Schedule time="11h00 - 12h15" activity="MMA" type="mma" />
          </div>
        </div>

        <div className="seances-legend">
          <h3>Légende des cours</h3>
          <div className="seances-legend-items">
            <div className="seances-legend-item muay-thai">Muay Thaî</div>
            <div className="seances-legend-item grappling">Grappling</div>
            <div className="seances-legend-item mma">MMA</div>
            <div className="seances-legend-item boxing">Boxe Anglaise</div>
            <div className="seances-legend-item kickboxing">Kickboxing</div>
            <div className="seances-legend-item wrestling">Lutte</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seances;