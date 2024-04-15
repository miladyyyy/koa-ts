module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
}
