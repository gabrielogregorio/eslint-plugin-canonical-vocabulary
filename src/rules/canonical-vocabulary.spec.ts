const { RuleTester } = require("eslint");
const noDisallowedTermsRule = require("./canonical-vocabulary");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

const ruleOptions = [
  [
    {
      words: ["MoneyHolder", "RiverSide", "SavingsPlace"],
      fixTo: "FinancialInstitution",
      message: "not use '<word>' use '<fixTo>'",
    },
    {
      words: ["INo"],
      fixTo: "IYes",
      message: "not use '<word>' use '<fixTo>'",
    },
  ],
];

ruleTester.run("canonical-vocabulary", noDisallowedTermsRule, {
  valid: [
    {
      code: "const FinancialInstitution = '';",
      options: ruleOptions,
    },
    {
      code: "let FinancialInstitution = '';",
      options: ruleOptions,
    },
    {
      code: "var FinancialInstitution = '';",
      options: ruleOptions,
    },
    {
      code: "class FinancialInstitution {}",
      options: ruleOptions,
    },
    {
      code: "function FinancialInstitution () {}",
      options: ruleOptions,
    },
  ],
  invalid: [
    {
      code: 'var MoneyHolder = "";',
      output: 'var FinancialInstitution = "";',
      options: ruleOptions,
      errors: [
        {
          message: "not use 'MoneyHolder' use 'FinancialInstitution'",
        },
      ],
    },
    {
      code: "const RiverSide = 1234;",
      output: "const FinancialInstitution = 1234;",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'RiverSide' use 'FinancialInstitution'",
        },
      ],
    },
    {
      code: "let AbcSavingsPlaceTest = false;",
      output: "let AbcFinancialInstitutionTest = false;",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'SavingsPlace' use 'FinancialInstitution'",
        },
      ],
    },
    {
      code: "let INo = false;",
      output: "let IYes = false;",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'INo' use 'IYes'",
        },
      ],
    },
    {
      code: "class INo {}",
      output: "class IYes {}",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'INo' use 'IYes'",
        },
      ],
    },
    {
      code: "function INo () {}",
      output: "function IYes () {}",
      options: ruleOptions,
      errors: [
        {
          message: "not use 'INo' use 'IYes'",
        },
      ],
    },
  ],
});
