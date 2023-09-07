# eslint-plugin-canonical-vocabulary

## Getting Started

This ESLint plugin helps developers maintain a consistent vocabulary in their code. By defining canonical terms, developers can ensure that their codebase remains coherent and understandable.

## Requirements

The only requirement is that you have ESLint version 5 or higher in your project.

## How to Use

1. First, you need to install eslint-plugin-canonical-vocabulary as a dev-dependency. You can do this using your preferred package manager:

```bash
npm install eslint-plugin-canonical-vocabulary  --save-dev
```

2. Next, integrate the plugin into your .eslintrc.js configuration (or the respective ESLint configuration file you're using).

```js
{
  "plugins": ["canonical-vocabulary"],
  "rules": {
    // ... other rules

    "canonical-vocabulary/canonical-vocabulary": [
      "error",
      [
        {
          "words": ["TaxValue", "TaxAmt", "TaxationAmount"],
          "fixTo": "TaxAmount",
          "message": "To maintain consistency when referring to tax-related amounts in our code, always use <fixTo> instead of terms like <word>."
        },
        {
          "words": ["EduFee", "ScholarCost", "StudyExpense"],
          "fixTo": "TuitionFee",
          "message": "To ensure clarity when referring to the tuition fee, it is preferable to use <fixTo>. Avoid less standard or ambiguous terms like <word>."
        }
      ]
    ]

  },
}
```

3. About the rule parameters

- **words** (required) A list of words and terms you want to avoid
- **fixTo** (required) The word or term you recommend should be used
- **message** (required) A message with the motivations regarding the decision, you can use the syntax of <word>

4. You can configure the severity of the rule as "error", "warn", or "off" based on your project's requirements.

5. If you want, you can leave your canonical words in a separate file, example

```js
// canonicalWords.js
const canonicalWords = [
  {
    words: ["BankCode", "TransactNum", "BankingRef"],
    fixTo: "TransactionCode",
    message:
      "When referring to bank transaction codes, always use <fixTo> to avoid ambiguity. Avoid using non-standard terms like <word>.",
  },
];

// eslintrc.js
const canonicalWords = require("./canonicalWords.js");
module.exports = {
  plugins: ["canonical-vocabulary"],
  rules: {
    "canonical-vocabulary/canonical-vocabulary": ["error", canonicalWords],
  },
};
```

6. If you have a large code base and want to enable the rule only for new files, you can disable or modify the rule for certain folders and files, just use overrides as in the example below

> The 'overrides' feature allows you to define different rules for specific files and folders. This is useful if, for example, a rule impacts the code a lot or you have legacy code that you don't want to modify

```js
{
  plugins: ["canonical-vocabulary"],
  rules: {
    // other rules, includes canonical-vocabulary
  },

  "overrides": [
    {
      "files": ["*external_context\\/*", "*\\.spec.ts"],
      "rules": {
        "canonical-vocabulary/canonical-vocabulary": "off",
      }
    }
  ]
};
```

## Contributing to the project

Would you like to contribute to the project? Excellent! In our [contributing.md](CONTRIBUTING.md) guide, you'll find information on how to create a Pull Request, code standards we follow, and how to report bugs. Your contribution is valuable and will help improve the tool for everyone.

I hope these explanations and examples are clear and useful!

# Known issues

To report issues, if possible, please provide a snippet or link to the code on GitHub where the issue can be replicated. You can report [issues here](https://github.com/gabrielogregorio/eslint-plugin-canonical-vocabulary/issues/new).

You can make [suggestions here](https://github.com/gabrielogregorio/eslint-plugin-canonical-vocabulary/discussions)

## Next steps

The purpose of this plugin is to prevent the code base from having different terms for the same thing, this plugin is not intended to be a spell checker, if you are interested consider using [eslint-plugin-spellcheck](https://www.npmjs.com/package/eslint-plugin-spellcheck).

Align the recommended terms with your team and manually build your list.

- [ESLint documentation](https://eslint.org/docs/latest/use/getting-started)
- [eslint-plugin-spellcheck](https://www.npmjs.com/package/eslint-plugin-spellcheck)
