module.exports = {
  env: {
    commonjs: false,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-underscore-dangle": "off",
    "no-console": "off",
    camelcase: "off",
    "class-methods-use-this": "off",
    radix: "off",
    "prefer-destructuring": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
