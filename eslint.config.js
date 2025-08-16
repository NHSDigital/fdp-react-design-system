import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...compat.extends('plugin:storybook/recommended'),
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' }
    },
    plugins: { '@typescript-eslint': tsPlugin, storybook },
    rules: {}
  },
  {
    files: ['src/**/*.stories.@(ts|tsx)'],
    rules: {
      // Allow direct renderer import for now until migration to framework-specific package
      'storybook/no-renderer-packages': 'off'
    }
  }
];
