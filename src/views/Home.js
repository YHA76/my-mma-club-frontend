import React from 'react';
import Navbar from '../components/NavBar';
import "../styles/Styles.css";
import Footer from '../components/Footer.js';
import logo from '../assets/images/logo.jpg'; 
import partner1 from '../assets/images/FMMAF.webp'; 
import partner2 from '../assets/images/rouen.webp';
import { Trophy, Users, MapPin } from 'lucide-react';

function Home() {
  const disciplines = [
    'MMA', 'BOXE', 'LUTTE', 'GRAPPLING', 
    'JJB', 'SAMBO', 'MUAY-THAI', 'KICKBOXING'
  ];

  const features = [
    {
      icon: <Trophy className="feature-icon" />,
      title: "Excellence",
      description: "Formation de qualité par des experts"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Communauté",
      description: "Rejoignez une famille de passionnés"
    },
    {
      icon: <MapPin className="feature-icon" />,
      title: "Accessibilité",
      description: "Arrêt de bus et parking à proximité du club"
    }
  ];

  return (
    <div className="main-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ paddingTop: '90px' }}>
        <div className="hero-content">
          <div className="logo-container">
            <img src={logo} alt="Logo du club" className="club-logo" />
          </div>
          <h1 className="main-title">Découvrez ici l'art du combat</h1>
          <div className="disciplines-grid">
            {disciplines.map((discipline) => (
              <div key={discipline} className="discipline-tag">
                {discipline}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="section-title">Nos Partenaires</h2>
        <div className="partners-grid">
          <div className="partner-card">
            <img src={partner1} alt="FMMAF" className="partner-logo" />
          </div>
          <div className="partner-card">
            <img src={partner2} alt="Ville de Rouen" className="partner-logo" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <h2 className="section-title">Notre Club</h2>
        <div className="map-container">
          <iframe
            title="adresse"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.2569905290766!2d1.1311526770546483!3d49.460758658127155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0dd092840b0c3%3A0xdab3e25266bf3d2d!2sMMA%20CASBAH%20FIGHT!5e0!3m2!1sfr!2sfr!4v1731347287884!5m2!1sfr!2sfr"
            className="google-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;