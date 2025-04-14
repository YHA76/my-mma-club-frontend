import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // Import du reCAPTCHA
import "../styles/InscriptionForm.css";
import "../styles/Styles.css";

function InscriptionForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    photo: null, // Stocker la photo sous forme de fichier
    age: "",
    moyenPaiement: "",
    email: "",
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateAge = (age) => {
    const ageNum = parseInt(age);
    return ageNum >= 16 && ageNum <= 100;
  };

  // Fonction pour gérer le changement des inputs texte
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation en temps réel
    if (name === "email" && value && !validateEmail(value)) {
      setMessage("Veuillez entrer une adresse email valide.");
    } else if (name === "age" && value && !validateAge(value)) {
      setMessage("L'âge doit être compris entre 16 et 100 ans.");
    } else {
      setMessage("");
    }
  };

  // Fonction pour gérer le changement du fichier photo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoError("");
    setMessage("");

    // Validation de la taille (max 5MB)
    if (file && file.size > 5 * 1024 * 1024) {
      setPhotoError("La photo ne doit pas dépasser 5MB");
      return;
    }

    // Validation du type de fichier
    if (file && !file.type.startsWith("image/")) {
      setPhotoError("Le fichier doit être une image");
      return;
    }

    setFormData({ ...formData, photo: file });

    // Création de la prévisualisation
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  // Fonction pour gérer la validation du reCAPTCHA
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setMessage("");
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setUploadProgress(0);

    // Validation complète avant envoi
    if (!validateEmail(formData.email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      setIsLoading(false);
      return;
    }

    if (!validateAge(formData.age)) {
      setMessage("L'âge doit être compris entre 16 et 100 ans.");
      setIsLoading(false);
      return;
    }

    if (!captchaToken) {
      setMessage("Veuillez valider le CAPTCHA.");
      setIsLoading(false);
      return;
    }

    if (!formData.photo) {
      setMessage("Veuillez sélectionner une photo.");
      setIsLoading(false);
      return;
    }

    if (photoError) {
      setMessage(photoError);
      setIsLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append("captchaToken", captchaToken);

    try {
      const response = await fetch("http://localhost:5000/api/inscription", {
        method: "POST",
        body: formDataToSend,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur lors de l'inscription");
      }

      const data = await response.json();
      setMessage(data.message);
      // Réinitialiser le formulaire en cas de succès
      setFormData({
        nom: "",
        prenom: "",
        photo: null,
        age: "",
        moyenPaiement: "",
        email: "",
      });
      setPhotoPreview(null);
      setCaptchaToken("");
    } catch (error) {
      setMessage(error.message || "Erreur de connexion au serveur.");
    } finally {
      setIsLoading(false);
      setUploadProgress(0);
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
              type="number"
              name="age"
              placeholder="Âge"
              value={formData.age}
              onChange={handleChange}
              min="16"
              max="100"
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

          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              id="photo"
              className="form-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <small className="form-help">
              Formats acceptés : JPG, PNG, GIF. Taille maximale : 5MB
            </small>
          </div>

          {photoPreview && (
            <div className="photo-preview">
              <img
                src={photoPreview}
                alt="Aperçu"
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          )}

          {photoError && <div className="error-message">{photoError}</div>}

          <div className="form-group">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              size="normal"
              theme="light"
            />
          </div>

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="upload-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <span className="progress-text">{uploadProgress}%</span>
            </div>
          )}

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
