import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // Import du reCAPTCHA
import "../styles/InscriptionForm.css";
import "../styles/Styles.css";

function InscriptionForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    photo: "",
    age: "",
    moyenPaiement: "",
    email: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour gérer le changement des inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour gérer la validation du reCAPTCHA
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!captchaToken) {
      setMessage("Veuillez valider le CAPTCHA.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Inscription envoyée avec succès !");
      } else {
        setMessage(`❌ Erreur : ${data.error || "Une erreur est survenue."}`);
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion au serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="inscription-form-section">
      <div className="inscription-form-container">
        <h2 className="inscription-form-title">Formulaire d'Inscription</h2>

        <form className="inscription-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="photo"
              placeholder="Photo (URL ou fichier)"
              value={formData.photo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="number"
              name="age"
              placeholder="Âge"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              id="moyenPaiement"
              name="moyenPaiement"
              className="form-input"
              value={formData.moyenPaiement}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Sélectionnez un moyen de paiement
              </option>
              <option value="Carte bancaire">Carte bancaire</option>
              <option value="Espèce">Espèce</option>
            </select>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* reCAPTCHA */}
          <div className="form-group">
            <ReCAPTCHA
              sitekey="6LcspvEqAAAAALb8HefCv0BzbtrqZ_e3obSRAY82"
              onChange={handleCaptchaChange}
              size="normal"
              theme="light"
            />
          </div>

          {/* Bouton d'envoi avec loader */}
          <button className="submit-button" type="submit" disabled={isLoading}>
            {isLoading ? "⏳ Envoi en cours..." : "📩 S'inscrire"}
          </button>
        </form>

        {/* Affichage du message de succès ou d'erreur */}
        {message && (
          <div
            className={`form-message ${
              message.includes("succès") ? "message-success" : "message-error"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default InscriptionForm;
