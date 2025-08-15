// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
