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
  rules: {
    // Guardrail: engine enums/constants must come from spcConstants, not spc.ts
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/spc', '**/spc.ts', '**/spc.js'],
            importNames: [
              'ChartType',
              'ImprovementDirection',
              'VariationIcon',
              'AssuranceIcon',
              'SpcRuleId',
              'SpcRawRuleTag',
              'RAW_TAG_TO_RULE_ID',
              'RULE_METADATA',
              'RULES_IN_RANK_ORDER',
              'RULE_RANK_BY_ID',
              'RULE_PRECEDENCE',
              'PrimeDirection',
              'PrecedenceStrategy',
              'ConflictPrecedenceMode',
              'Side',
              'PruningMode',
              'SpcRowAliasField',
              'BaselineSuggestionReason'
            ],
            message:
              'Import engine enums/constants from spcConstants instead of spc.ts (functions/types only from spc.ts).'
          }
        ]
      }
    ]
  }
  },
  {
    files: ['src/**/*.stories.@(ts|tsx)'],
    rules: {
      // Allow direct renderer import for now until migration to framework-specific package
      'storybook/no-renderer-packages': 'off'
    }
  },
    // Enforce SSR-safe imports in the Next.js example SSR route
    {
      files: ['examples/nextjs/app/ssr/**/*.{ts,tsx,js,jsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@fergusbisset/nhs-fdp-design-system',
                message: 'SSR pages must import from @fergusbisset/nhs-fdp-design-system/ssr only.'
              },
              {
                name: '@fergusbisset/nhs-fdp-design-system/nextjs',
                message: 'Import global CSS in app/layout.tsx, not in SSR page routes.'
              }
            ],
            patterns: [
              {
                group: [
                  '@fergusbisset/nhs-fdp-design-system/components/**',
                  '@fergusbisset/nhs-fdp-design-system/core',
                  '@fergusbisset/nhs-fdp-design-system/pure',
                  '@fergusbisset/nhs-fdp-design-system/behaviours',
                  '@fergusbisset/nhs-fdp-design-system/css',
                  '@fergusbisset/nhs-fdp-design-system/*/css'
                ],
                message: 'SSR pages must import only from @fergusbisset/nhs-fdp-design-system/ssr; move CSS to layout.'
              }
            ]
          }
        ]
      }
    },
  // Allow the SPC barrel re-export in the DataVisualisation index without triggering restricted-imports
  {
    files: ['src/components/DataVisualisation/index.ts'],
    rules: {
      'no-restricted-imports': 'off'
    }
  }
];
