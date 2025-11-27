// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { ActionLink } from './ActionLink';

const meta: Meta<typeof ActionLink> = {
  title: 'NHS/Components/ActionLink',
  component: ActionLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS ActionLink component follows NHS design guidelines with design token integration.

## Features

- **Call-to-action styling**: Bold typography with arrow icon
- **Accessibility**: Keyboard navigation and focus management
- **External links**: Support for opening in new windows
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts icon size and spacing for different screens

## Usage

\`\`\`tsx
import { ActionLink } from '@nhs-fdp/design-system';

// Basic action link
<ActionLink 
  text="Find a GP practice" 
  href="/find-gp" 
/>

// External link
<ActionLink 
  text="Book an appointment online" 
  href="https://appointments.nhs.uk"
  openInNewWindow={true}
/>
\`\`\`

## Accessibility

- Proper focus indicators with NHS focus styling
- Keyboard navigation support
- Screen reader accessible with semantic HTML
- ARIA-hidden arrow icon (decorative only)
- Secure external links with rel="noopener noreferrer"
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content for the action link',
    },
    href: {
      control: 'text',
      description: 'URL for the action link',
    },
    openInNewWindow: {
      control: 'boolean',
      description: 'Whether to open the link in a new window',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionLink>;

export const Default: Story = {
  args: {
    text: 'Find a GP practice',
    href: '/find-gp',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default action link for finding a GP practice.',
      },
    },
  },
};
