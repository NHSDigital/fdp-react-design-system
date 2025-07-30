import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';
import { Input } from '../Input';
import { Label } from '../Label';
import { Radios } from '../Radios';

const meta: Meta<typeof Fieldset> = {
  title: 'NHS/Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Fieldset component groups related form controls with an optional legend that acts as a heading for the group.

## Features

- **Accessibility**: Proper semantic fieldset and legend markup
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Flexible legends**: Support for different sizes and page heading options
- **Screen reader support**: Proper ARIA attributes and semantic structure

## Usage

\`\`\`tsx
import { Fieldset } from '@nhs-fdp/design-system';

// Basic usage
<Fieldset legend={{ text: 'Contact details' }}>
  {/* Form controls */}
</Fieldset>

// As page heading
<Fieldset 
  legend={{ 
    text: 'What is your address?', 
    size: 'xl', 
    isPageHeading: true 
  }}
>
  {/* Form controls */}
</Fieldset>
\`\`\`

## Accessibility

- Uses semantic \`fieldset\` and \`legend\` elements
- Supports ARIA describedBy for additional context
- Legend can act as page heading when appropriate
- Screen reader compatible with proper markup
        `,
      },
    },
  },
  argTypes: {
    legend: {
      control: 'object',
      description: 'Legend configuration for the fieldset',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    describedBy: {
      control: 'text',
      description: 'ID(s) of elements that describe this fieldset',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    legend: {
      text: 'Contact details'
    },
    children: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
      </div>
    ),
  },
};

export const AsPageHeading: Story = {
  args: {
    legend: {
      text: 'What is your address?',
      size: 'xl',
      isPageHeading: true
    },
    children: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Label htmlFor="address1">Address line 1</Label>
          <Input id="address1" name="address1" />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Label htmlFor="address2">Address line 2 (optional)</Label>
          <Input id="address2" name="address2" />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Label htmlFor="city">Town or city</Label>
          <Input id="city" name="city" />
        </div>
        <div>
          <Label htmlFor="postcode">Postcode</Label>
          <Input id="postcode" name="postcode" />
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with legend acting as the main page heading (h1).',
      },
    },
  },
};

export const WithRadioButtons: Story = {
  args: {
    legend: {
      text: 'How would you prefer to be contacted?',
      size: 'l'
    },
    children: (
      <Radios
        name="contact-preference"
        options={[
          {
            value: 'email',
            text: 'Email',
            conditional: (
              <div>
                <Label htmlFor="contact-email">Email address</Label>
                <Input id="contact-email" name="contact-email" type="email" />
              </div>
            )
          },
          {
            value: 'phone',
            text: 'Phone',
            conditional: (
              <div>
                <Label htmlFor="contact-phone">Phone number</Label>
                <Input id="contact-phone" name="contact-phone" type="tel" />
              </div>
            )
          },
          {
            value: 'text',
            text: 'Text message',
            conditional: (
              <div>
                <Label htmlFor="contact-mobile">Mobile phone number</Label>
                <Input id="contact-mobile" name="contact-mobile" type="tel" />
              </div>
            )
          }
        ]}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with radio buttons and conditional content inside a fieldset.',
      },
    },
  },
};

export const LegendSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Fieldset legend={{ text: 'Extra Large Legend', size: 'xl' }}>
        <p>Content with xl legend</p>
      </Fieldset>
      
      <Fieldset legend={{ text: 'Large Legend', size: 'l' }}>
        <p>Content with large legend</p>
      </Fieldset>
      
      <Fieldset legend={{ text: 'Medium Legend', size: 'm' }}>
        <p>Content with medium legend</p>
      </Fieldset>
      
      <Fieldset legend={{ text: 'Small Legend', size: 's' }}>
        <p>Content with small legend</p>
      </Fieldset>
      
      <Fieldset legend={{ text: 'Default Legend' }}>
        <p>Content with default legend</p>
      </Fieldset>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all available legend sizes.',
      },
    },
  },
};

export const WithHTMLLegend: Story = {
  args: {
    legend: {
      html: 'Your <strong>personal</strong> information',
      size: 'm'
    },
    children: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" name="firstname" />
        </div>
        <div>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" name="lastname" />
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with HTML content in the legend for emphasis.',
      },
    },
  },
};
