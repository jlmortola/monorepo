module.exports = {
  roots: ["<rootDir>"],
  preset: 'ts-jest',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  modulePaths: ['<rootDir>'],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleNameMapper: {
    '@monorepo/test': '<rootDir>/test/src'
  }
}
