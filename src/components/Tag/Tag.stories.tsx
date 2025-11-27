// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'NHS/Components/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Tag component is used to show the status of something, such as a service, task or user.

## When to use this component

Use tags to show users the status of something.

## When not to use this component

Do not use tags to:
- label content by type or subject
- add decoration to a page
- highlight new content

## How it works

Write the tag text in sentence case, and keep it short. Users should be able to read it at a glance.

## Accessibility

The tag component uses semantic HTML to help users of assistive technologies:
- Uses appropriate color contrast ratios
- Color is not the only way information is conveyed
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'white', 'grey', 'green', 'aqua-green', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow'],
      description: 'The color variant of the tag',
    },
    text: {
      control: 'text',
      description: 'The text content to display inside the tag',
    },
    noBorder: {
      control: 'boolean',
      description: 'Whether to remove the border',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

// Default story
export const Default: Story = {
  args: {
    text: 'Active',
  },
};
