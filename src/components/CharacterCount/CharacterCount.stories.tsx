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

- **Character and word limits**: Supports both character and word counting
- **Dynamic feedback**: Shows remaining count with configurable threshold
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Error states**: Visual and accessible error handling when limits exceeded

## Usage

\`\`\`tsx
import { CharacterCount } from '@nhs-fdp/design-system';

// Character limit
<CharacterCount
  id="description"
  name="description"
  maxLength={200}
/>

// Word limit
<CharacterCount
  id="summary"
  name="summary"
  maxWords={150}
/>
\`\`\`

## Accessibility

- ARIA described-by linking count message to textarea
- Screen reader announcements for count updates
- Clear error indication when limits exceeded
- Focus indicators meeting WCAG contrast requirements
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the character count',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the textarea',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    maxWords: {
      control: 'number',
      description: 'Maximum number of words allowed',
    },
    threshold: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Threshold percentage to start showing count',
    },
    rows: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Number of textarea rows',
    },
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
    id: 'description',
    name: 'description',
    maxLength: 200,
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic character count with 200 character limit.',
      },
    },
  },
};

export const WithWordLimit: Story = {
  args: {
    id: 'summary',
    name: 'summary',
    maxWords: 50,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Character count using word limit instead of character limit.',
      },
    },
  },
};

export const CustomThreshold: Story = {
  args: {
    id: 'feedback',
    name: 'feedback',
    maxLength: 150,
    threshold: 90,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Character count with custom threshold (90%) - count appears later.',
      },
    },
  },
};

export const EarlyThreshold: Story = {
  args: {
    id: 'notes',
    name: 'notes',
    maxLength: 100,
    threshold: 50,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Character count with early threshold (50%) - count appears sooner.',
      },
    },
  },
};

export const LargeTextarea: Story = {
  args: {
    id: 'detailed-description',
    name: 'detailed-description',
    maxLength: 500,
    rows: 8,
    threshold: 80,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large textarea with higher character limit for detailed content.',
      },
    },
  },
};

export const WithInitialValue: Story = {
  args: {
    id: 'prefilled',
    name: 'prefilled',
    maxLength: 200,
    value: 'This textarea already has some content to demonstrate the character count with existing text.',
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Character count with pre-filled content showing initial count state.',
      },
    },
  },
};

export const SmallLimit: Story = {
  args: {
    id: 'tweet',
    name: 'tweet',
    maxLength: 50,
    threshold: 75,
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small character limit to demonstrate error state when exceeded.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    id: 'custom-styled',
    name: 'custom-styled',
    maxLength: 200,
    className: 'custom-character-count',
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Character count with custom CSS class applied.',
      },
    },
  },
};