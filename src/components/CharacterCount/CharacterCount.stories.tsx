import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCount } from './CharacterCount';

const meta: Meta<typeof CharacterCount> = {
  title: 'NHS/Components/CharacterCount',
  component: CharacterCount,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS CharacterCount component follows NHS design guidelines with design token integration.

## Features

- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts to different screen sizes

## Usage

\`\`\`tsx
import { CharacterCount } from '@nhs-fdp/design-system';

// Basic usage
<CharacterCount>
  CharacterCount content
</CharacterCount>
\`\`\`

## Accessibility

- Proper semantic markup
- Screen reader compatible
- Focus indicators meeting WCAG contrast requirements
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

export const Default: Story = {
  args: {
    children: 'CharacterCount content',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'CharacterCount with custom styling',
    className: 'custom-charactercount',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom CSS class applied.',
      },
    },
  },
};