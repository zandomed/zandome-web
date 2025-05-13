import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import ts from 'typescript-eslint';

const ignores = globalIgnores([
  '**/public',
  '**/dist',
  '**/dist/*',
  '**/tests/*',
  'coverage',
  '.astro/*',
  '.vercel/*',
  'node_modules/*',
]);

const files = ['**/*.{mjs,cjs,js,ts,astro,jsx,tsx}'];

export default ts.config(
  // Global
  ignores,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // Sorting/Unused Imports
  {
    files,
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off', // Disable the base rule, redundant with unused-imports plugin
      '@typescript-eslint/no-unused-vars': 'off', // Disable the base rule, redundant with unused-imports plugin
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'warn',
        {
          alphabetize: { caseInsensitive: true, order: 'asc' },
          groups: ['builtin', 'external', 'sibling', 'parent'],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          pathGroups: [
            {
              group: 'external',
              pattern: '@/**',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
  // Javascript
  js.configs.recommended,
  // Typescript
  // ...ts.configs.recommended,
  {
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Prettier
  prettier,
  // Astro
  astro.configs['recommended'],
  astro.configs['jsx-a11y-recommended'],
);
