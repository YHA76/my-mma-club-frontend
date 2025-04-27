import React, { useState, useEffect } from "react";
import "../../styles/CookieBanner.css";
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("cookieBannerAccepted");

    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieBannerAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="cookie-banner">
      <p>
        🔒 Ce site utilise des cookies essentiels pour son bon fonctionnement,
        notamment le service Google reCAPTCHA qui protège notre formulaire
        d’inscription contre les abus. En continuant à naviguer, vous acceptez
        leur utilisation.&nbsp;
        <a href="/politique-confidentialite">En savoir plus</a>
      </p>
      <button onClick={handleAccept}>J'ai compris</button>
    </div>
  );
}
