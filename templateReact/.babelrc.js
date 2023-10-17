/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript
  Babel is a JavaScript transpiler that converts edge JavaScript into plain JavaScript
*/

const isTest = String(process.env.NODE_ENV).toLowerCase() === 'test'

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: isTest ? 'commonjs' : false }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ],
}
