module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/atoms/**/*.ts(x)?',
    '!src/components/atoms/**/stories.ts(x)?',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    "^.+\\.svg$": "jest-svg-transformer",
  },
}
