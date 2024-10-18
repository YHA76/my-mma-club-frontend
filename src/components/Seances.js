import React from 'react';
import "../styles/styles.css";
import '../styles/Seances.css';

function Seances() {
  return (
    <div className="seances-page">
      <h1 className="seances-title">Horaires des Séances</h1>
      <p className="seances-description">
        Consultez nos horaires selon les différentes catégories d'âge.
      </p>

      <table className="seances-table">
        <thead>
          <tr>
            <th>Âge</th>
            <th>Jours</th>
            <th>Heures</th>
            <th>Type de Séance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adultes (18+)</td>
            <td>Lundi, Mercredi, Vendredi</td>
            <td>19h00 - 21h00</td>
            <td>Entraînement avancé</td>
          </tr>
          <tr>
            <td>Adultes (18+)</td>
            <td>Samedi</td>
            <td>10h00 - 12h00</td>
            <td>Sparring</td>
          </tr>

          <tr>
            <td>Adolescents (13-17 ans)</td>
            <td>Mardi, Jeudi</td>
            <td>17h00 - 18h30</td>
            <td>Entraînement</td>
          </tr>


          <tr>
            <td>Enfants (-13 ans)</td>
            <td>Mercredi, Samedi</td>
            <td>14h00 - 15h30</td>
            <td>Initiation au MMA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Seances;
