module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021, // Utiliza la última versión de ECMAScript
    sourceType: "module", // Permite el uso de imports
  },
  rules: {
    // Aquí puedes configurar tus reglas de ESLint
    // Por ejemplo:
    "no-console": "off", // Permite el uso de console.log() en el código
  },
};
