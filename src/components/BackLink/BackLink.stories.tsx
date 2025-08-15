// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { BackLink } from './BackLink';

const meta: Meta<typeof BackLink> = {
  title: 'NHS/Components/BackLink',
  component: BackLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS BackLink component follows NHS design guidelines with design token integration.

## Features

- **Accessibility**: Keyboard navigation and focus management
- **Flexible elements**: Can render as anchor link or button
- **Visual consistency**: Chevron icon and NHS link styling
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts spacing for different screen sizes

## Usage

\`\`\`tsx
import { BackLink } from '@nhs-fdp/design-system';

// Basic back link
<BackLink href="/previous-page" />

// Custom text
<BackLink 
  href="/dashboard" 
  text="Back to dashboard" 
/>

// As button with click handler
<BackLink 
  element="button"
  onClick={() => window.history.back()}
  text="Go back"
/>
\`\`\`

## Accessibility

- Proper focus indicators with NHS focus styling
- Can be used with keyboard navigation
- Screen reader accessible with semantic HTML
- ARIA-hidden chevron icon (decorative only)
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content for the back link',
    },
    html: {
      control: 'text',
      description: 'HTML content (takes precedence over text)',
    },
    href: {
      control: 'text',
      description: 'URL for the back link',
    },
    element: {
      control: { type: 'select' },
      options: ['a', 'button'],
      description: 'Element type to render',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default back link with standard "Back" text and hash href.',
      },
    },
  },
};
