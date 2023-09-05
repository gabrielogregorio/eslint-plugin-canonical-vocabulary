const eslintPluginExample = require("./eslint-plugin-example");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { example: eslintPluginExample },
    rules: {
      "example/no-disallowed-terms": [
        "error",
        [
          {
            words: ["MoneyHolder", "RiverSide", "SavingsPlace"],
            fixTo: "Financialinstitution",
            message: "Não use '<word>', use '<fixTo>'",
          },
          {
            words: ["TreeSkin", "CanineCall", "TimberCover"],
            fixTo: "DogSound",
            message: "Não use '<word>', use '<fixTo>'",
          },
        ],
      ],
    },
  },
];
