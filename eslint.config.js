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
    // NOTE (2025-09-14): Previously we restricted importing SPC engine enums/constants
    // directly from implementation files to enforce layering (prefer spcConstants).
    // The team now wants these enums available anywhere, so this restriction is disabled.
    'no-restricted-imports': 'off'
  }
  },
  // Discourage deep SPC logic_v2 imports outside SPCChart implementation — prefer charts/SPC/engine
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '**/DataVisualisation/charts/SPC/SPCChart/logic_v2/**'
              ],
              message:
                'Import SPC v2 helpers from charts/SPC/engine (public surface) instead of deep logic_v2 internals.'
            }
          ]
        }
      ]
    }
  },
  // Discourage deep SPC internals (icons, descriptors, types, legacy logic) outside SPC implementation — prefer charts/SPC/engine, SPC barrel, or Icons namespace
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/components/DataVisualisation/charts/SPC/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '**/DataVisualisation/charts/SPC/SPCIcons/**',
                '**/DataVisualisation/charts/SPC/SPCChart/descriptors',
                '**/DataVisualisation/charts/SPC/SPCChart/types',
                '**/DataVisualisation/charts/SPC/SPCChart/logic/**',
              ],
              message:
                'Import from charts/SPC (barrel), charts/SPC/engine (engine API), or charts/SPC/Icons (namespace) instead of deep SPC internals.'
            }
          ]
        }
      ]
    }
  },
  // Enforce SSR barrel purity: do not allow client modules or React hooks in SSR entry or its server files
  {
    files: ['src/components/ssr.ts', 'src/components/**/*.{server.ts,server.tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                // Block accidental imports from client entrypoints
                './**/index',
                '../**/index',
                // Block react-aria/client behaviour packages directly in server files
                '**/react-aria/**',
                '**/behaviours/**',
              ],
              message:
                'SSR barrel/server files must not import client barrels, react-aria, or behaviours. Import direct server files only.'
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
  // Legacy SPC v1 story duplicates kept for reference but excluded from Storybook indexing
  // These files intentionally have no story exports (includeStories: []), so silence the rule
  {
    files: ['src/components/DataVisualisation/charts/SPC/SPCChart/logic/storybook/**/*.stories.@(ts|tsx)'],
    rules: {
      'storybook/story-exports': 'off'
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
  ,
  // Allow deep imports inside the SPC barrel to curate the public surface
  {
    files: ['src/components/DataVisualisation/charts/SPC/index.ts'],
    rules: {
      'no-restricted-imports': 'off'
    }
  }
];
