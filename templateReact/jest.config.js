/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  The jest. config. js file is used for configuring Jest, 
  The JavaScript testing library used for writing unit and integration tests.
  Jest attempts to scan your dependency tree once (up-front) and cache it in order to ease some
*/

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Setting the test environment to node. i.e., window/DOM object is not accessible
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/mockModule.js'), // If you are importing the React component which in turn imports css files internally, jest throws Syntax error. For that, we need resolve to mock module.
    'assets/(.*)': require.resolve('./test/mockModule.js'), // Mock for assets
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Imports the supplied files in all the test suites
  collectCoverageFrom: ['**/src/**/*.js'], // To cover all the files inside the src folder while generating the test report
  coverageThreshold: {},
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
}
