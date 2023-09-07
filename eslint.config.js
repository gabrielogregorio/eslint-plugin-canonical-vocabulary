const eslintPluginExample = require('./index');

module.exports = [
  {
    files: ['**/*.js'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
    },
    plugins: {
      example: eslintPluginExample,
      '@typescript-eslint': '@typescript-eslint',
    },
    rules: {
      'example/canonical-vocabulary': [
        'error',
        [
          {
            words: ['MoneyHolder', 'RiverSide', 'SavingsPlace'],
            fixTo: 'Financialinstitution',
            message: "Não use '<word>', use '<fixTo>'",
          },
          {
            words: ['TreeSkin', 'CanineCall', 'TimberCover'],
            fixTo: 'DogSound',
            message: "Não use '<word>', use '<fixTo>'",
          },
        ],
      ],
    },
  },
];
