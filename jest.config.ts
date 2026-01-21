import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Use the ts-jest preset for TypeScript transformation
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
};

export default config;