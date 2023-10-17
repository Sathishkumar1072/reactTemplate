/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  eslintrc. js is a configuration file for a tool named ESLINT.
  ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
*/

const path = require('path')

module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Specifying the version of ECMAScript syntax we are going to use
    sourceType: 'module', // Specifying type of source type which we are using either 'script(default)' or 'module'
    ecmaFeatures: {
      // Specifying additional language features we are using
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // The version of React. "detect" - automatically picks the version which is currently installed.
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
  plugins: ['prettier'],
  extends: [
    'airbnb', // Set of recommended rules from Airbnb for JavaScript/React
    'airbnb/hooks', // Set of recommended rules from Airbnb for React hooks
    'prettier', // Turns off all rules that are unnecessary or might conflict with Prettier
    'prettier/react', // airbnb enables eslint-plugin-react rules internally, so "prettier/react" is needed
  ],
  ignorePatterns: ['../src/test/**/*.test.js'],
  // Instead of specifying eslint rules individually, we can also use pre built configurations. eslint-config-prettier : Turns off all rules that are unnecessary or might conflict with Prettier.
  rules: {
    strict: ['error', 'never'], // Check for explicit use of 'use strict'
    'no-console': 'error', // Disallows usage of console in the code
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Temporarily added to support JSX in .js file
    eqeqeq: ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    camelcase: ['error', { properties: 'never' }],
    'func-name-matching': ['error', 'always'],
    'valid-typeof': 'error', // Check for invalid typeof check
    'no-unsafe-negation': 'error', // Checks for unexpected negation before the left operand. Eg: if(!one === two)
    'no-unused-vars': 'error', // Checks for unused variables
    'no-unexpected-multiline': 'error', // Checks for confusing multiline expressions
    'no-undef': 'error', // Checks for usage of undeclared variables
    semi: 'off', // Disables mandatory for semi-colons at the end of the statement
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'no-debugger': 'error',
    'use-isnan': ['error', { enforceForSwitchCase: true }],
    'getter-return': ['error', { allowImplicit: true }],
  },
  env: {
    browser: true, // Set the environment as browser or not
    node: true,
    commonjs: true,
    jest: true,
    es6: true,
    es2020: true,
  },
}
