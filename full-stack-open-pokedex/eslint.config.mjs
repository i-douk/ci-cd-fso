import globals from "globals"
import stylisticJs from '@stylistic/eslint-plugin-js'
import js from '@eslint/js'
import cypress from 'eslint-plugin-cypress'

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser, // Add browser globals if needed
      },
      ecmaVersion: "latest",
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      'cypress': cypress
    },
    extends: [
      'plugin:cypress/recommended'
    ],
    rules: {
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/semi': [
        'error',
        'never'
      ],
    },
    ignores: [
      "webpack.config.js",
      "node_modules/",
      "dist/"
    ],
  },
  {
    files: ["cypress/**/*.js", "cypress/**/*.jsx"], 
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.cypress, 
      },
    },
    plugins: {
      'cypress': cypress
    },
    extends: [
      'plugin:cypress/recommended'
    ],
  }
]
