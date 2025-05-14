/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'consistent-return': 'warn',
    camelcase: 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    // Constant Case for File and Component Names
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: false,
          PascalCase: false,
          kebabCase: false,
          constantCase: true,
        },
      },
    ],
  },
};
