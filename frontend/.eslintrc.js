module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022, // Use ECMAScript 2022 features (latest syntax)
    sourceType: 'module', // Allow `import` and `export` syntax
  },
  extends: [
    'eslint:recommended', // Basic linting rules
    'plugin:react/recommended', // React-specific linting rules
  ],
  plugins: ['react'], // React plugin for JSX parsing
  rules: {
    indent: ['error', 2], // Enforce 2-space indentation
    semi: ['error', 'always'], // Enforce semicolons
    quotes: ['error', 'single'], // Enforce single quotes
    'react/prop-types': 'off',  // Disables prop-types validation
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use the appropriate linting rules
    },
  },
};
