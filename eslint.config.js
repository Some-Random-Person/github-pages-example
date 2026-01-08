import js from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
    ...jest.configs["flat/recommended"],
  },
]);
