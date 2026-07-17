// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const pluginQuery = require('@tanstack/eslint-plugin-query');
// Must stay last: disables stylistic rules that conflict with Prettier
// and turns unformatted code into a lint error (`prettier/prettier`).
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  ...pluginQuery.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
]);
