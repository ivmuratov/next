/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-clean-order",
  ],

  // Игнорируемые файлы
  ignoreFiles: ["**/node_modules/**", ".next/**", "public/**", "**/*.js", "**/*.tsx"],
};

export default stylelintConfig;
