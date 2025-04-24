/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-clean-order",
  ],
  rules: {
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]+$",
      {
        message: "Expected class selector to be camelCase",
      },
    ],
  },

  // Игнорируемые файлы
  ignoreFiles: ["**/node_modules/**", ".next/**", "public/**", "**/*.js", "**/*.tsx"],
};

export default stylelintConfig;
