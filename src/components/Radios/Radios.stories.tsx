import type { Meta, StoryObj } from '@storybook/react';
import { Radios } from './Radios';

const meta: Meta<typeof Radios> = {
  title: 'NHS/Components/Radios',
  component: Radios,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Radios component provides radio button groups following NHS design guidelines with design token integration.

## Features

- **Single selection**: Only one option can be selected at a time
- **Conditional content**: Show/hide additional content based on selection
- **Size variants**: Regular, small, and inline layouts
- **Error state handling**: Visual error indicators with proper styling
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Keyboard navigation**: Full keyboard support for selection

## Usage

\`\`\`tsx
import { Radios } from '@nhs-fdp/design-system';

// Basic usage
<Radios 
  name="contact-method" 
  options={[
    { value: 'email', text: 'Email' },
    { value: 'phone', text: 'Phone' },
    { value: 'post', text: 'Post' },
  ]}
/>

// With conditional content
<Radios 
  name="appointment-type" 
  options={[
    { 
      value: 'face-to-face', 
      text: 'Face to face appointment',
      conditional: 'Please arrive 10 minutes early'
    },
    { 
      value: 'phone', 
      text: 'Phone appointment',
      conditional: 'We will call you at your preferred time'
    },
  ]}
/>

// Inline layout
<Radios 
  name="yes-no" 
  variant="inline"
  options={[
    { value: 'yes', text: 'Yes' },
    { value: 'no', text: 'No' },
  ]}
/>
\`\`\`

## Accessibility

- Proper ARIA attributes for screen readers
- Fieldset and legend for grouping
- Error state indication with visual and semantic markup
- Keyboard navigation support (arrow keys, space)
- Focus indicators meeting WCAG contrast requirements
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['normal', 'small'],
      description: 'Size variant of the radio buttons',
    },
    inline: {
      control: 'boolean',
      description: 'Whether to display radios inline (horizontally)',
    },
    hasError: {
      control: 'boolean',
      description: 'Whether the radio group is in an error state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radios>;

const basicOptions = [
  { value: 'email', text: 'Email' },
  { value: 'phone', text: 'Phone' },
  { value: 'post', text: 'Post' },
];

const yesNoOptions = [
  { value: 'yes', text: 'Yes' },
  { value: 'no', text: 'No' },
];

const appointmentOptions = [
  { 
    value: 'face-to-face', 
    text: 'Face to face appointment',
    conditional: 'Please arrive 10 minutes early for your appointment.'
  },
  { 
    value: 'phone', 
    text: 'Phone appointment',
    conditional: 'We will call you at your preferred time. Please ensure you are available.'
  },
  { 
    value: 'video', 
    text: 'Video call appointment',
    conditional: 'You will receive a link to join the video call 15 minutes before your appointment.'
  },
];

const urgencyOptions = [
  { value: 'urgent', text: 'Urgent - within 24 hours' },
  { value: 'soon', text: 'Soon - within a week' },
  { value: 'routine', text: 'Routine - within a month' },
];

export const Default: Story = {
  args: {
    name: 'contact-method',
    options: basicOptions,
  },
};

export const WithValue: Story = {
  args: {
    name: 'contact-method-value',
    options: basicOptions,
    value: 'email',
  },
};

export const YesNo: Story = {
  args: {
    name: 'consent',
    options: yesNoOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple yes/no radio button group.',
      },
    },
  },
};

export const WithConditionalContent: Story = {
  args: {
    name: 'appointment-type',
    options: appointmentOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with conditional content that appears when an option is selected.',
      },
    },
  },
};

export const UrgencySelection: Story = {
  args: {
    name: 'urgency',
    options: urgencyOptions,
    value: 'routine',
  },
  parameters: {
    docs: {
      description: {
        story: 'Medical appointment urgency selection with pre-selected option.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    name: 'contact-method-error',
    options: basicOptions,
    hasError: true,
    describedBy: 'contact-method-error-message',
  },
};

export const Disabled: Story = {
  args: {
    name: 'contact-method-disabled',
    options: basicOptions.map(option => ({ ...option, disabled: true })),
    value: 'email',
  },
};

export const Required: Story = {
  args: {
    name: 'contact-method-required',
    options: basicOptions,
  },
};

// Variant examples
export const SmallVariant: Story = {
  args: {
    name: 'contact-method-small',
    size: 'small',
    options: basicOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Smaller radio buttons for compact layouts.',
      },
    },
  },
};

export const InlineVariant: Story = {
  args: {
    name: 'yes-no-inline',
    inline: true,
    options: yesNoOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons displayed inline (horizontally) instead of stacked.',
      },
    },
  },
};

export const InlineWithMore: Story = {
  args: {
    name: 'urgency-inline',
    inline: true,
    options: urgencyOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple radio buttons in inline layout.',
      },
    },
  },
};
