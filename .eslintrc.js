module.exports = {
  parser: "babel-eslint",
  extends: ["prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error"
  }
}
