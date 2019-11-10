module.exports = {
  roots: [
    "<rootDir>/tests"
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
