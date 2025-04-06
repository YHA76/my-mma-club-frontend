# My MMA Club - Frontend

## 🛠️ Technologies utilisées

- React.js
- React Router pour la navigation
- CSS3 avec animations
- reCAPTCHA
- FormData pour l'upload de fichiers

## 📦 Installation

1. Clonez le repository :

```bash
git clone https://github.com/votre-username/my-mma-club-frontend.git
```

2. Installez les dépendances :

```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
REACT_APP_RECAPTCHA_SITE_KEY=votre_clé_recaptcha
REACT_APP_API_URL=http://localhost:5000
```

4. Lancez l'application en mode développement :

```bash
npm start
```

## 🔧 Configuration

### Variables d'environnement

- `REACT_APP_RECAPTCHA_SITE_KEY` : Clé publique reCAPTCHA

### Structure du projet

```
src/
├── components/    # Composants réutilisables
├── views/         # Pages principales
├── styles/        # Fichiers CSS
├── assets/        # Images, fonts, etc.
└── App.js         # Point d'entrée de l'application
```
