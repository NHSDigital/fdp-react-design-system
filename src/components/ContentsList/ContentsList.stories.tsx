// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { ContentsList } from './ContentsList';

const meta: Meta<typeof ContentsList> = {
  title: 'NHS/Components/ContentsList',
  component: ContentsList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The contents list component helps users navigate through multi-page guides by showing all sections and highlighting the current page.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the navigation',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Default: Story = {
  args: {
    items: [
      { text: 'What is depression?', href: '/depression/overview' },
      { text: 'Symptoms', href: '/depression/symptoms' },
      { text: 'Causes', href: '/depression/causes', current: true },
      { text: 'Diagnosis', href: '/depression/diagnosis' },
      { text: 'Treatment', href: '/depression/treatment' },
      { text: 'Living with depression', href: '/depression/living-with' },
    ],
  },
};
