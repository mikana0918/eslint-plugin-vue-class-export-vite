"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    // node: true,
    es6: true
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
  // parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
};
