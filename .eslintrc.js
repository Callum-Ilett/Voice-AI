// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: "expo",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["/dist/*"],
  overrides: [
    {
      // Test files only
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
