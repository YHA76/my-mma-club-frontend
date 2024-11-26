import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Désactive les erreurs pour les apostrophes non échappées dans JSX
      "react/no-unescaped-entities": "off",
    },
  },
  pluginJs.configs.recommended, // Configuration recommandée pour JavaScript
  ...tseslint.configs.recommended, // Configuration recommandée pour TypeScript
  {
    ...pluginReact.configs.flat.recommended, // Configuration recommandée pour React
    rules: {
      // Fusion des règles existantes avec la règle à désactiver
      ...pluginReact.configs.flat.recommended.rules,
      "react/no-unescaped-entities": "off", // Désactive cette règle ici aussi
    },
  },
];
