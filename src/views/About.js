import React from "react";
import Navbar from "../components/NavBar";
import "../styles/About.css";
import Footer from "../components/Footer.js";
import coach1 from "../assets/images/coach_1.jpg";

function About() {
  const coachs = [
    {
      name: "Coach 1",
      description: "Spécialiste du Muay Thai.",
      picture: coach1,
    },
    {
      name: "Coach 2",
      description: "Expert en Jiu-Jitsu Brésilien.",
      picture: coach1,
    },
    {
      name: "Coach 3",
      description: "Champion régional de boxe.",
      picture: coach1,
    },
    {
      name: "Coach 4",
      description: "Entraîneur de lutte olympique.",
      picture: coach1,
    },
    {
      name: "Coach 5",
      description: "Spécialiste en MMA et conditioning.",
      picture: coach1,
    },
    {
      name: "Coach 6",
      description: "Formateur en kickboxing.",
      picture: coach1,
    },
    {
      name: "Coach 7",
      description: "Préparateur physique et nutritionniste.",
      picture: coach1,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="full-page">
        <div className="about-page" style={{ paddingTop: "90px" }}>
          <section className="about-section">
            <h1 className="about-title">Qui sommes nous</h1>
            <p className="about-text">
              Le MMA Casbah Fight est une association sportive et sociale créée
              par des jeunes des hauts de Rouen en novembre 2020, et en activité
              depuis juin 2023.
            </p>
            <p className="about-text">
              L‘association et le club sont implantés sur les hauts de Rouen de
              même que le siège social.
            </p>
            <p className="about-text">
              La salle du club se trouve dans l’ancienne mythique salle de
              musculation du quartier, au -2 de la maison du plateau.
            </p>
            <p className="about-text">
              En effet, plus de 10 ans après la fermeture de cette salle, nous
              avons eu pour projet d’ouvrir une salle de MMA dans ce même lieu
              qui a toujours été un des principaux lieux sportifs du quartier
              des Hauts de Rouen. Et c’est avec la détermination des
              jeunes/habitants du quartier et le soutien de la ville que nous
              avons pu ouvrir cette salle de MMA en novembre 2023.
            </p>
          </section>
          {/* Section Descriptif des Coachs */}
          <section className="coachs-section">
            <h2 className="coachs-title">Nos Coachs</h2>
            <div className="coachs-grid">
              {coachs.map((coach, index) => (
                <div className="coach-card" key={index}>
                  <img
                    src={coach.picture}
                    alt={coach.name}
                    className="coach-photo"
                  />
                  <h3 className="coach-name">{coach.name}</h3>
                  <p className="coach-description">{coach.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
