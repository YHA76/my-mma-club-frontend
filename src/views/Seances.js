import React from 'react';
import Navbar from '../components/NavBar'; // Importation de la barre de menu
import "../styles/styles.css"; // Importation des styles globaux
import "../styles/seances.css"; // Importation des styles globaux


function Seances() {
  return (
    <div>
      <Navbar />
      <div className="seances-page" style={{ paddingTop: '90px' }}>
        <h1 className="seances-title">Horaires des Séances</h1>
        <p className="seances-description">Découvrez nos séances selon les jours de la semaine et les catégories d'âge.</p>

        {/* Tableau des horaires */}
        <table className="seances-table">
          <thead>
            <tr>
              <th></th> {/* Cellule vide pour l'angle du tableau */}
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
              <th>Samedi</th>
              <th>Dimanche</th>
            </tr>
          </thead>
          <tbody>
            {/* Adultes */}
            <tr>
              <td>Adultes (18+)</td>
              <td>20h00 - 22h00 <br /> Muay Thai</td>
              <td>❌</td>
              <td>20h00 - 22h15 <br /> Grappling</td>
              <td>❌</td> {/* Pas de cours le jeudi */}
              <td>20h00 - 22h15 <br /> MMA</td>
              <td>15h00 - 16h30 <br /> Boxe</td>
              <td>❌</td> {/* Pas de cours le dimanche */}
            </tr>
            
            {/* Adolescents (13-17) */}
            <tr>
              <td>Adolescents (13-17 ans)</td>
              <td>18h00 - 19h30 <br /> Kickboxing</td>
              <td>❌</td>
              <td>18h00 - 19h30 <br /> Boxe</td>
              <td>❌</td>
              <td>18h00 - 19h30 <br /> Lutte</td>
              <td>❌</td> {/* Pas de cours le samedi */}
              <td>❌</td> {/* Pas de cours le dimanche */}
            </tr>

            {/* Enfants (-13 ans) */}
            <tr>
              <td>Enfants (-13 ans)</td>
              <td>❌</td> {/* Pas de cours le lundi */}
              <td>❌</td> {/* Pas de cours le mardi */}
              <td>❌</td> {/* Pas de cours le mercredi */}
              <td>❌</td> {/* Pas de cours le jeudi */}
              <td>❌</td> {/* Pas de cours le vendredi */}
              <td>❌</td> {/* Pas de cours le samedi */}
              <td>11h00 - 12h15 <br /> MMA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Seances;
