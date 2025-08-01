import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "typescript": {
    "check": false,
    "reactDocgen": "react-docgen-typescript",
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "propFilter": (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  "viteFinal": async (config) => {
    // Enable JSX for TypeScript files
    config.esbuild = {
      ...config.esbuild,
      jsx: 'automatic',
      jsxDev: false
    };
    
    // Ensure TypeScript files can handle JSX
    if (config.resolve) {
      config.resolve.extensions = [
        '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json',
        ...(config.resolve.extensions || [])
      ];
    }
    
    // Configure server for font CORS if running locally
    config.server = config.server || {};
    config.server.cors = true;
    
    return config;
  },
};
export default config;