import React from "react";
const MentionsLegales = () => {
  return (
    <div className="mentions-legales-container">
      <h1>Mentions légales</h1>

      <section>
        <h2>Informations générales</h2>
        <p>
          <strong>Nom de l’association :</strong> MMA Casbah Fight
        </p>
        <p>
          <strong>Statut :</strong> Association sportive loi 1901
        </p>
        <p>
          <strong>Adresse :</strong> 78 rue Jean Texcier, 76000 Rouen, France
        </p>
        <p>
          <strong>Responsable de la publication :</strong> Le Président de
          l’association
        </p>
        <p>
          <strong>Email :</strong> MMACASBAHFIGHT.PRESIDENT@OUTLOOK.FR
        </p>
      </section>

      <section>
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
          <strong>Site web :</strong>{" "}
          <a
            href="https://www.ovh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ovh.com
          </a>
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu du site MMA Casbah Fight (textes, images,
          graphismes, logo, icônes, etc.) est la propriété exclusive de
          l’association MMA Casbah Fight, sauf mentions contraires. Toute
          reproduction ou utilisation sans autorisation est strictement
          interdite.
        </p>
      </section>

      <section>
        <h2>Limitation de responsabilité</h2>
        <p>
          Les informations fournies sur ce site le sont à titre indicatif. MMA
          Casbah Fight ne saurait être tenue responsable de l'utilisation des
          informations fournies.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les données saisies via notre formulaire ne sont utilisées que dans le
          cadre de votre inscription. Elles ne sont ni revendues ni conservées
          au-delà de leur traitement. Les photos transmises via le formulaire
          sont uniquement envoyées par mail au responsable de l’association et
          ne sont pas conservées sur le serveur.
        </p>
        <p>
          Pour plus d'informations, consultez notre page&nbsp;
          <a href="/politique-confidentialite">Politique de confidentialité</a>.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;
