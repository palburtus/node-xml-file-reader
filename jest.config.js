module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ["<rootDir>/src/__tests__/.jest/env.js"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};