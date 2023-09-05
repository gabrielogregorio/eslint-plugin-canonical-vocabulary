const { RuleTester } = require("eslint");
const noDisallowedTermsRule = require("../no-disallowed-terms");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

const ruleOptions = [
  [
    {
      words: ["MoneyHolder", "RiverSide", "SavingsPlace"],
      fixTo: "Financialinstitution",
      message: "not use '<word>' use '<fixTo>'",
    },
  ],
];

ruleTester.run("no-disallowed-terms", noDisallowedTermsRule, {
  valid: [
    {
      code: "const Financialinstitution = '';",
      options: ruleOptions,
    },
  ],
  invalid: [
    {
      code: 'var MoneyHolder = "";',
      output: 'var Financialinstitution = "";',
      options: ruleOptions,
      errors: [
        {
          message: "not use 'MoneyHolder' use 'Financialinstitution'",
        },
      ],
    },
    {
      code: "const RiverSide = 1234;",
      output: "const Financialinstitution = 1234;",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'RiverSide' use 'Financialinstitution'",
        },
      ],
    },
    {
      code: "let AbcSavingsPlaceTest = false;",
      output: "let AbcFinancialinstitutionTest = false;",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'SavingsPlace' use 'Financialinstitution'",
        },
      ],
    },
  ],
});

console.log("All tests passed!");
