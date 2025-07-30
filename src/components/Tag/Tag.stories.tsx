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

// Color variants
export const White: Story = {
  args: {
    color: 'white',
    text: 'Draft',
  },
  parameters: {
    docs: {
      description: {
        story: 'White tag for draft or neutral status.',
      },
    },
  },
};

export const Grey: Story = {
  args: {
    color: 'grey',
    text: 'Inactive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Grey tag for inactive or disabled status.',
      },
    },
  },
};

export const Green: Story = {
  args: {
    color: 'green',
    text: 'Active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Green tag for active, completed, or success status.',
      },
    },
  },
};

export const AquaGreen: Story = {
  args: {
    color: 'aqua-green',
    text: 'Started',
  },
  parameters: {
    docs: {
      description: {
        story: 'Aqua green tag for started or in-progress status.',
      },
    },
  },
};

export const Blue: Story = {
  args: {
    color: 'blue',
    text: 'Information',
  },
  parameters: {
    docs: {
      description: {
        story: 'Blue tag for informational status.',
      },
    },
  },
};

export const Purple: Story = {
  args: {
    color: 'purple',
    text: 'Received',
  },
  parameters: {
    docs: {
      description: {
        story: 'Purple tag for received or reviewed status.',
      },
    },
  },
};

export const Pink: Story = {
  args: {
    color: 'pink',
    text: 'Sent',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pink tag for sent or submitted status.',
      },
    },
  },
};

export const Red: Story = {
  args: {
    color: 'red',
    text: 'Rejected',
  },
  parameters: {
    docs: {
      description: {
        story: 'Red tag for rejected, error, or urgent status.',
      },
    },
  },
};

export const Orange: Story = {
  args: {
    color: 'orange',
    text: 'Delayed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Orange tag for delayed or warning status.',
      },
    },
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
    text: 'Waiting',
  },
  parameters: {
    docs: {
      description: {
        story: 'Yellow tag for waiting or pending status.',
      },
    },
  },
};

export const DefaultColor: Story = {
  args: {
    color: 'default',
    text: 'Default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default tag color for general status.',
      },
    },
  },
};

// Healthcare-specific examples
export const PatientStatus: Story = {
  name: 'Patient Status Example',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag color="green" text="Discharged" />
      <Tag color="blue" text="Admitted" />
      <Tag color="orange" text="Waiting" />
      <Tag color="red" text="Critical" />
      <Tag color="grey" text="Transferred" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how tags might be used to indicate patient status in a healthcare system.',
      },
    },
  },
};

export const AppointmentStatus: Story = {
  name: 'Appointment Status Example',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag color="green" text="Completed" />
      <Tag color="blue" text="Confirmed" />
      <Tag color="yellow" text="Pending" />
      <Tag color="orange" text="Delayed" />
      <Tag color="red" text="Cancelled" />
      <Tag color="grey" text="No show" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how tags might be used to indicate appointment status in a healthcare booking system.',
      },
    },
  },
};

export const ServiceStatus: Story = {
  name: 'Service Status Example',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag color="green" text="Available" />
      <Tag color="aqua-green" text="Limited" />
      <Tag color="orange" text="Busy" />
      <Tag color="red" text="Unavailable" />
      <Tag color="default" text="Closed" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how tags might be used to indicate service availability status.',
      },
    },
  },
};

// Responsive showcase
export const AllColors: Story = {
  name: 'All Color Variants',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px' }}>
      <Tag color="default" text="Default" />
      <Tag color="white" text="White" />
      <Tag color="grey" text="Grey" />
      <Tag color="green" text="Green" />
      <Tag color="aqua-green" text="Aqua Green" />
      <Tag color="blue" text="Blue" />
      <Tag color="purple" text="Purple" />
      <Tag color="pink" text="Pink" />
      <Tag color="red" text="Red" />
      <Tag color="orange" text="Orange" />
      <Tag color="yellow" text="Yellow" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available color variants for the Tag component.',
      },
    },
  },
};

// Border variant
export const NoBorder: Story = {
  name: 'No Border Variant',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag color="green" text="With border" />
      <Tag color="green" text="No border" noBorder />
      <Tag color="blue" text="With border" />
      <Tag color="blue" text="No border" noBorder />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing tags with and without borders.',
      },
    },
  },
};
