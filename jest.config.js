module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/tests/e2e/'],
  testPathIgnorePatterns: ['<rootDir>/tests/e2e/'],
  coveragePathIgnorePatterns: ['/tests/e2e\\.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/components/**'],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
}
