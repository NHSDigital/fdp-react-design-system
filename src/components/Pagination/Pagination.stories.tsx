// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'NHS/Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The pagination component allows users to navigate between pages of content.',
      },
    },
  },
  argTypes: {
    previousUrl: {
      control: 'text',
      description: 'URL for the previous page',
    },
    previousPage: {
      control: 'text',
      description: 'Text/title for the previous page',
    },
    nextUrl: {
      control: 'text',
      description: 'URL for the next page',
    },
    nextPage: {
      control: 'text',
      description: 'Text/title for the next page',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    previousUrl: '/conditions/depression/symptoms',
    previousPage: 'Symptoms',
    nextUrl: '/conditions/depression/treatment',
    nextPage: 'Treatment',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default pagination with both previous and next links.',
      },
    },
  },
};
