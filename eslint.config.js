import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
<<<<<<< HEAD

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
=======
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  // Bring in the legacy shareable config via compat
  ...compat.extends('plugin:storybook/recommended'),
>>>>>>> 21456ba (Update eslint config)
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
<<<<<<< HEAD
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      storybook
    },
    extends: [
      'plugin:storybook/recommended'
    ],
    rules: {
    }
=======
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' }
    },
    plugins: { '@typescript-eslint': tsPlugin, storybook },
    rules: {}
>>>>>>> 21456ba (Update eslint config)
  }
];
