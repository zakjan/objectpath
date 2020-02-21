module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ '<rootDir>/src/**/*.test.ts' ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
  ],
};