// PRUNE: KEEP_ALL (Expanded to include conditional content example)
import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'NHS/Components/Checkboxes',
  component: Checkboxes,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Checkboxes component follows NHS design guidelines and uses design tokens for consistent styling.

## Usage

\`\`\`tsx
import { Checkboxes } from '@nhs-fdp/design-system';

<Checkboxes
  name="nationality"
  legend="What is your nationality?"
  items={[
    { value: 'british', text: 'British' },
    { value: 'irish', text: 'Irish' },
    { value: 'other', text: 'Other' }
  ]}
/>
\`\`\`

## Design Guidelines

- Use checkboxes when users can select multiple options
- Always provide clear labels
- Use hints to provide additional context
- Group related checkboxes with a legend
- Follow NHS accessibility standards

## Accessibility

- All checkbox options are keyboard accessible
- Screen readers can navigate the options easily
- Focus states are clearly visible
- Error states are announced to assistive technologies
- Conditional content is properly associated with checkboxes
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of checkbox items',
      control: 'object',
    },
    name: {
      description: 'Name attribute for the checkbox group',
      control: 'text',
    },
    legend: {
      description: 'Legend text for the checkbox group',
      control: 'text',
    },
    legendSize: {
      control: 'select',
      options: ['xl', 'l', 'm', 's'],
      description: 'Size of the legend text',
    },
    isPageHeading: {
      control: 'boolean',
      description: 'Whether the legend should be rendered as a page heading',
    },
    hint: {
      description: 'Hint text for the entire checkbox group',
      control: 'text',
    },
    errorMessage: {
      description: 'Error message for the checkbox group',
      control: 'text',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use the small checkbox variant',
    },
  },
  args: {
    name: 'example',
    legendSize: 'l',
    isPageHeading: false,
    small: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example
export const Default: Story = {
  args: {
    name: 'nationality',
    legend: 'What is your nationality?',
    hint: 'If you have more than one nationality, select all that apply.',
    items: [
      { value: 'british', text: 'British' },
      { value: 'irish', text: 'Irish' },
      { value: 'other', text: 'Other' },
    ],
  },
};

export const WithConditionalInformation: Story = {
  args: {
    name: 'contact-preferences',
    legend: 'How can we contact you?',
    hint: 'Select all that apply. Additional fields will appear for chosen methods.',
    items: [
      {
        value: 'email',
        text: 'Email',
        conditional: 'We will only use your email for appointment reminders.'
      },
      {
        value: 'sms',
        text: 'Text message',
        conditional: 'Texts may incur standard network charges.'
      },
      {
        value: 'phone',
        text: 'Phone call',
        conditional: 'We will only call between 9am and 5pm.'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Each option reveals lightweight informational text (no inputs) using the built-in conditional prop.'
      }
    }
  }
};
