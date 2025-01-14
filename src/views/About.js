import React from "react";
import Navbar from "../components/NavBar";
import "../styles/About.css";
import Footer from "../components/Footer.js";
import coach1 from "../assets/images/coach_1.jpg";
import coach2 from "../assets/images/coach_2.jpg";
import coach3 from "../assets/images/coach_3.jpg";
import president from "../assets/images/president.png";
import after from "../assets/images/salle.webp";
import before from "../assets/images/Ancienne_salle.jpg";

function About() {
  const coachs = [
    {
      name: "Président du club",
      description: "",
      picture: president,
    },
    {
      name: "Coach Lutte et MMA",
      description: "7 fois champion de lutte en Thechenie",
      picture: coach1,
    },
    {
      name: "Coach Muay thai",
      description: "Vice champion du monde amateur",
      picture: coach2,
    },
    {
      name: "Coach Boxe anglaise",
      description: "Champion régional de boxe.",
      picture: coach3,
    },
    // {
    //   name: "Coach 5",
    //   description: "Spécialiste en MMA et conditioning.",
    //   picture: coach1,
    // },
    // {
    //   name: "Coach 6",
    //   description: "Formateur en kickboxing.",
    //   picture: coach1,
    // },
    // {
    //   name: "Coach 7",
    //   description: "Préparateur physique et nutritionniste.",
    //   picture: coach1,
    // },
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
            {/* Images avant/après */}
            <div className="before-after-container">
              <div className="image-wrapper">
                <img
                  src={before}
                  alt="Salle avant rénovation"
                  className="before-after-image"
                />
              </div>
              <div className="image-wrapper">
                <img
                  src={after}
                  alt="Salle après rénovation"
                  className="before-after-image"
                />
              </div>
            </div>
          </section>
          {/* Section Descriptif des Coachs */}
          <section className="coachs-section">
            <h2 className="coachs-title">Notre Staff et Coachs</h2>
            <div className="coachs-grid">
              {coachs.map((coach, index) => (
                <div className="coach-card" key={index}>
                  <img
                    src={coach.picture}
                    alt={coach.name}
                    className="coach-photo"
                    loading="lazy"
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
