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

export const BookAppointment: Story = {
  args: {
    text: 'Book an appointment',
    href: '/book-appointment',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for booking NHS appointments.',
      },
    },
  },
};

export const ViewMedicalRecords: Story = {
  args: {
    text: 'View your medical records',
    href: '/medical-records',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for accessing patient medical records.',
      },
    },
  },
};

export const OrderPrescription: Story = {
  args: {
    text: 'Order repeat prescription',
    href: '/prescriptions/order',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for ordering repeat prescriptions online.',
      },
    },
  },
};

export const ExternalLink: Story = {
  args: {
    text: 'NHS App - Get health advice',
    href: 'https://www.nhs.uk/nhs-app/',
    openInNewWindow: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link that opens external NHS resources in a new window.',
      },
    },
  },
};

export const HealthAdvice: Story = {
  args: {
    text: 'Get health advice and support',
    href: '/health-advice',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for accessing NHS health advice and support.',
      },
    },
  },
};

export const VaccineBooking: Story = {
  args: {
    text: 'Book a vaccination',
    href: '/vaccinations/book',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for booking NHS vaccinations.',
      },
    },
  },
};

export const OnlineServices: Story = {
  args: {
    text: 'Access NHS online services',
    href: 'https://www.nhs.uk/using-the-nhs/nhs-services/online-services/',
    openInNewWindow: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link to NHS online services portal.',
      },
    },
  },
};

export const EmergencyAdvice: Story = {
  args: {
    text: 'Get urgent medical help',
    href: '/urgent-care',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for urgent medical care information.',
      },
    },
  },
};

export const MentalHealth: Story = {
  args: {
    text: 'Access mental health support',
    href: '/mental-health',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link for NHS mental health resources.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    text: 'Custom styled action link',
    href: '/custom',
    className: 'custom-action-link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link with custom CSS class for additional styling.',
      },
    },
  },
};

export const DigitalServices: Story = {
  args: {
    text: 'Explore NHS digital services',
    href: 'https://digital.nhs.uk/',
    openInNewWindow: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Action link to NHS digital services and innovations.',
      },
    },
  },
};
