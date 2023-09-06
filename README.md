# eslint-plugin-canonical-vocabulary

**Note**: This project is currently in its alpha stage. Please avoid using it in production environments.

## Getting Started

This ESLint plugin helps developers maintain a consistent vocabulary in their code. By defining canonical terms, developers can ensure that their codebase remains coherent and understandable.

## How to Use

1. First, you need to install eslint-plugin-canonical-vocabulary as a dev-dependency. You can do this using your preferred package manager:

```bash
npm install --save-dev eslint-plugin-canonical-vocabulary
yarn add --save-dev eslint-plugin-canonical-vocabulary
pnpm i --save-dev eslint-plugin-canonical-vocabulary
```

2. Next, integrate the plugin into your ESLint configuration:

```js
{
  "plugins": ["canonical-vocabulary"],

  // Define your canonical vocabulary rules. Provide motivations for the suggestions and specify alternatives.
  "rules": {
    "canonical-vocabulary/canonical-vocabulary": [
      "error",
      [
        {
          "words": ["MoneyHolder", "RiverSide", "SavingsPlace"],
          "fixTo": "FinancialInstitution",
          "message": "Avoid using '<word>'. Instead, opt by bla bla bla"
        },
        {
          "words": ["TreeSkin", "CanineCall", "TimberCover"],
          "fixTo": "DogSound",
          "message": "Do not use '<word>', use '<fixTo>' instead."
        }
      ]
    ]
  },

    // if need, apply different configurations for specific files or folders.
   "overrides": [
    {
      "files": ["*external_context\\/*", "*\\.spec.ts"],
      "rules": {
        "canonical-vocabulary/canonical-vocabulary": "off",
      }
    },
  ]
}
```

3. You can configure the severity of the rule as either "error", "warn", or "off" based on your project's requirements.
