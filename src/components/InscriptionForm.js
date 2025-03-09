import React, { useState } from "react";
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

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Inscription envoyée avec succès !");
      } else {
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setMessage("Erreur de connexion au serveur.");
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
            <input
              className="form-input"
              type="text"
              name="moyenPaiement"
              placeholder="Moyen de paiement"
              value={formData.moyenPaiement}
              onChange={handleChange}
              required
            />
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

          <button className="submit-button" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                Envoi en cours
                <span className="loading"></span>
              </>
            ) : (
              "S'inscrire"
            )}
          </button>
        </form>

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
