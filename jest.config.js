const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
