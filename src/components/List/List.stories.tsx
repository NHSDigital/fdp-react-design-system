// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: `
The List component provides accessible, NHS-styled lists for organizing content.

## Features

- **Multiple Types**: Bullet points, numbered lists, or plain lists
- **Size Variants**: Small, medium (default), and large sizing options
- **Border Option**: Add borders between list items
- **Accessibility**: Proper semantic markup and keyboard navigation
- **Compound Component**: Use \`List.Item\` for individual list items

## Usage

\`\`\`tsx
import { List } from '@fergusbisset/nhs-fdp-design-system';

// Basic bullet list
<List type="bullet">
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
</List>

// Numbered list with borders
<List type="number" border>
  <List.Item>Step one</List.Item>
  <List.Item>Step two</List.Item>
</List>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['bullet', 'number', 'none'],
      description: 'The type of list marker to display',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the list text',
    },
    border: {
      control: 'boolean',
      description: 'Whether to add borders between list items',
    },
    as: {
      control: 'select',
      options: ['ul', 'ol'],
      description: 'Override the HTML element used',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BulletList: Story = {
  args: {
    type: 'bullet',
  },
  render: (args) => (
    <List {...args}>
      <List.Item>First item in the bullet list</List.Item>
      <List.Item>Second item with more detailed content that spans multiple lines to show how the text wraps</List.Item>
      <List.Item>Third item</List.Item>
      <List.Item>Fourth item with a <a href="#">link inside</a></List.Item>
    </List>
  ),
};
