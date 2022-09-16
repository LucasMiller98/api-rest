module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 'off',
    'no-console': 'off',
    'import/first': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
  },
};
