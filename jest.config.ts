import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",

  preset: "ts-jest",

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",
};

module.exports = config;
