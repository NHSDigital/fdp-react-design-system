import type { Preview } from '@storybook/react';
import React from 'react';
import { NHSThemeProvider } from '../src/components/NHSThemeProvider';
import '../src/styles/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Configure backgrounds for testing reverse buttons
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#d8dde0', // Light Grey for dark mode
        },
        {
          name: 'nhs-blue',
          value: '#005eb8',
        },
        {
          name: 'grey',
          value: '#425563', // NHS Warm Grey
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <NHSThemeProvider>
        <Story />
      </NHSThemeProvider>
    ),
  ],
};

export default preview;
// TypeScript configuration test
