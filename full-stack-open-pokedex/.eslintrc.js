module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  'plugins': [
    'react', 'jest' , 'cypress'
  ],
  'rules': {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-async-before': 'error',
    'cypress/no-pause': 'error',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 'error',
    'react/prop-types': 0
  }
}
