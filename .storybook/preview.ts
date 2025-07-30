import type { Preview } from '@storybook/react';
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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
