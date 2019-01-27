module.exports = {
  roots: [
    "<rootDir>/src/tests"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: [
    "**/*.test.ts"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ]
};
