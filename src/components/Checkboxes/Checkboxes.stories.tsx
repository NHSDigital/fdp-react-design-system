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

// With hints
export const WithHints: Story = {
  args: {
    name: 'contact-preferences',
    legend: 'How would you like to be contacted?',
    items: [
      { 
        value: 'email', 
        text: 'Email',
        hint: 'We\'ll only use this for appointment reminders'
      },
      { 
        value: 'phone', 
        text: 'Phone',
        hint: 'We may call between 9am and 5pm, Monday to Friday'
      },
      { 
        value: 'post', 
        text: 'Post',
        hint: 'Letters will be sent to your registered address'
      },
    ],
  },
};

// With conditional content
export const WithConditional: Story = {
  args: {
    name: 'contact',
    legend: 'How would you like to be contacted?',
    items: [
      { 
        value: 'email', 
        text: 'Email',
        conditional: (
          <div>
            <label htmlFor="contact-email" style={{ display: 'block', marginBottom: '8px' }}>
              Email address
            </label>
            <input 
              type="email" 
              id="contact-email" 
              name="contact-email"
              style={{ 
                padding: '8px', 
                border: '2px solid #425563', 
                borderRadius: '4px',
                width: '100%',
                maxWidth: '300px'
              }}
            />
          </div>
        )
      },
      { 
        value: 'phone', 
        text: 'Phone',
        conditional: (
          <div>
            <label htmlFor="contact-phone" style={{ display: 'block', marginBottom: '8px' }}>
              Phone number
            </label>
            <input 
              type="tel" 
              id="contact-phone" 
              name="contact-phone"
              style={{ 
                padding: '8px', 
                border: '2px solid #425563', 
                borderRadius: '4px',
                width: '100%',
                maxWidth: '300px'
              }}
            />
          </div>
        )
      },
      { value: 'post', text: 'Post' },
    ],
  },
};

// With error
export const WithError: Story = {
  args: {
    name: 'waste',
    legend: 'Which types of waste do you transport?',
    hint: 'Select all that apply.',
    errorMessage: 'Select which types of waste you transport',
    items: [
      { value: 'animal', text: 'Waste from animal carcasses' },
      { value: 'mines', text: 'Waste from mines or quarries' },
      { value: 'farm', text: 'Farm or agricultural waste' },
    ],
  },
};

// With conditional Input component
export const WithConditionalInput: Story = {
  args: {
    name: 'contact-details',
    legend: 'How would you like to be contacted?',
    hint: 'Select all preferred contact methods and provide details.',
    items: [
      { 
        value: 'email', 
        text: 'Email',
        conditional: {
          id: 'contact-email',
          name: 'contact-email',
          label: 'Email address',
          type: 'email',
          placeholder: 'Enter your email address',
          width: 'full'
        }
      },
      { 
        value: 'phone', 
        text: 'Phone',
        conditional: {
          id: 'contact-phone',
          name: 'contact-phone',
          label: 'Phone number',
          type: 'tel',
          placeholder: 'Enter your phone number',
          width: 'full'
        }
      },
      { 
        value: 'post', 
        text: 'Post',
        conditional: {
          id: 'contact-address',
          name: 'contact-address',
          label: 'Postal address',
          type: 'text',
          placeholder: 'Enter your postal address',
          width: 'full'
        }
      },
    ],
  },
};

// Mixed conditional content (ReactNode and Input component)
export const WithMixedConditional: Story = {
  args: {
    name: 'contact-mixed',
    legend: 'How would you like us to contact you?',
    items: [
      { 
        value: 'email', 
        text: 'Email',
        conditional: {
          id: 'contact-email-mixed',
          name: 'contact-email-mixed',
          label: 'Email address',
          type: 'email',
          placeholder: 'your@email.com',
          width: 'full'
        }
      },
      { 
        value: 'phone', 
        text: 'Phone',
        conditional: (
          <div>
            <p style={{ marginBottom: '16px', color: '#212b32' }}>
              We'll call you during business hours (9am to 5pm, Monday to Friday).
            </p>
            <label htmlFor="custom-phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Phone number
            </label>
            <input 
              type="tel" 
              id="custom-phone" 
              name="custom-phone"
              placeholder="Enter phone number"
              style={{ 
                padding: '8px 12px', 
                border: '2px solid #d8dde0', 
                borderRadius: '4px',
                width: '100%',
                fontSize: '19px',
                fontFamily: 'inherit'
              }}
            />
          </div>
        )
      },
      { value: 'post', text: 'Post' },
    ],
  },
};

