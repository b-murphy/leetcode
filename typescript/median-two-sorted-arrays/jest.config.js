/** @type {import('jest').Config} */
export default {
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  testMatch: ["**/*.test.ts"],
};
