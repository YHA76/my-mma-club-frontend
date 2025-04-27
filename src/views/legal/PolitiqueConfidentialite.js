import React from "react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="mentions-legales">
      <h1>Politique de confidentialité</h1>

      <p>
        Le site <strong>mmacasbahfight.com</strong> respecte votre vie privée et
        s'engage à protéger les données personnelles que vous nous communiquez.
      </p>

      <h2>Données collectées</h2>
      <p>
        Lors de l'inscription via notre formulaire, nous collectons les
        informations suivantes : nom, prénom, âge, adresse email, moyen de
        paiement, et photo.
      </p>
      <p>
        Les photos transmises via le formulaire sont uniquement envoyées par
        mail au responsable de l’association et ne sont pas conservées sur le
        serveur.
      </p>

      <h2>Utilisation des données</h2>
      <p>
        Les données collectées sont utilisées exclusivement pour gérer les
        inscriptions au club MMA Casbah Fight. Elles ne sont en aucun cas
        revendues ni utilisées à des fins commerciales.
      </p>

      <h2>Conservation des données</h2>
      <p>
        Les données ne sont pas stockées en base de données. Elles sont
        simplement transmises par email au responsable du club.
      </p>

      <h2>Droits des utilisateurs</h2>
      <p>
        Conformément au RGPD, vous avez le droit d'accéder, de rectifier ou de
        supprimer vos données. Pour exercer vos droits, contactez-nous à{" "}
        <a href="mailto:MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR">
          MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR
        </a>
        .
      </p>

      <h2>reCAPTCHA</h2>
      <p>
        Ce site est protégé par reCAPTCHA, et les règles de confidentialité et
        conditions d'utilisation de Google s'appliquent.
      </p>
    </div>
  );
};

export default PolitiqueConfidentialite;
