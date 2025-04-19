import React from "react";

const MentionsLegales = () => {
  return (
    <div
      className="mentions-legales"
      style={{ padding: "2rem", lineHeight: "1.6" }}
    >
      <h1>Mentions légales</h1>

      <h2>Informations éditeur</h2>
      <p>
        <strong>Nom de l'association :</strong> MMA Casbah Fight
      </p>
      <p>
        <strong>Statut :</strong> Association sportive loi 1901
      </p>
      <p>
        <strong>Adresse :</strong> 78 rue Jean Texcier, 76000 Rouen, France
      </p>
      <p>
        <strong>Responsable de la publication :</strong> Le Président de
        l'association
      </p>
      <p>
        <strong>Email de contact :</strong>{" "}
        <a href="mailto:MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR">
          MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR
        </a>
      </p>

      <h2>Hébergement</h2>
      <p>
        <strong>Hébergeur :</strong> OVH SAS
      </p>
      <p>
        <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France
      </p>
      <p>
        <strong>Téléphone :</strong> 1007
      </p>
      <p>
        <strong>Site Web :</strong>{" "}
        <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer">
          www.ovh.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu du site MMA Casbah Fight (textes, images,
        graphismes, logo, icônes, etc.) est la propriété exclusive de
        l'association MMA Casbah Fight, sauf mentions contraires. Toute
        reproduction, distribution, modification, adaptation, retransmission ou
        publication, même partielle, de ces éléments est interdite sans l'accord
        écrit préalable de l'association.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        Les informations présentées sur le site{" "}
        <a
          href="https://mmacasbahfight.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mmacasbahfight.com
        </a>
        sont fournies à titre indicatif. L'association ne saurait être tenue
        pour responsable d'une mauvaise utilisation des informations ou de tout
        dommage direct ou indirect en résultant.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Pour en savoir plus sur la collecte et le traitement de vos données
        personnelles, veuillez consulter notre page{" "}
        <a href="/politique-confidentialite">Politique de confidentialité</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question, vous pouvez nous écrire à l'adresse suivante :{" "}
        <br />
        <a href="mailto:MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR">
          MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR
        </a>
      </p>
    </div>
  );
};

export default MentionsLegales;
