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

export const CustomText: Story = {
  args: {
    text: 'Back to previous page',
    href: '/previous-page',
  },
  parameters: {
    docs: {
      description: {
        story: 'Back link with custom text content.',
      },
    },
  },
};

export const AsButton: Story = {
  args: {
    element: 'button',
    text: 'Go back',
    onClick: () => alert('Back button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Back link rendered as a button element with click handler.',
      },
    },
  },
};

export const BrowserBack: Story = {
  args: {
    element: 'button',
    text: 'Back',
    onClick: () => window.history.back(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button that uses browser history to navigate back.',
      },
    },
  },
};

export const WithHTMLContent: Story = {
  args: {
    html: 'Back to <strong>search results</strong>',
    href: '/search',
  },
  parameters: {
    docs: {
      description: {
        story: 'Back link with HTML content for emphasis.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    text: 'Back to dashboard',
    href: '/dashboard',
    className: 'custom-back-link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Back link with custom CSS class for additional styling.',
      },
    },
  },
};
