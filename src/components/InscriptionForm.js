import React, { useState } from "react";

function InscriptionForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    photo: "",
    age: "",
    moyenPaiement: "",
    email: "",
  });

  const [message, setMessage] = useState(""); // Message de confirmation ou d'erreur

  // Gérer les changements de champ
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoyer les données au serveur
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Envoi en cours...");

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
    }
  };

  return (
    <div>
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo (URL ou fichier)"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Âge"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="moyenPaiement"
          placeholder="Moyen de paiement"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default InscriptionForm;
