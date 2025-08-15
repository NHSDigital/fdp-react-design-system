// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'NHS/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS single Checkbox component provides a boolean selection interface following NHS design guidelines.

## Features

- **Boolean values**: Returns true/false instead of string arrays
- **Controlled and uncontrolled modes**: Support for both React patterns
- **Error handling**: Visual error indicators with proper styling
- **Hint text**: Additional guidance text below the checkbox
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens

## Usage

\`\`\`tsx
import { Checkbox } from '@nhs-fdp/design-system';

// Controlled checkbox
const [agreed, setAgreed] = useState(false);
<Checkbox 
  id="agree-terms" 
  checked={agreed}
  onChange={(checked) => setAgreed(checked)}
>
  I agree to the terms and conditions
</Checkbox>

// Uncontrolled checkbox with hint
<Checkbox 
  id="newsletter" 
  defaultChecked={false}
  hint="We'll send you updates about your health records"
>
  Subscribe to email updates
</Checkbox>
\`\`\`

## When to Use

- **Single boolean choices**: Agreement checkboxes, preferences, toggles
- **Consent forms**: Terms acceptance, privacy agreements
- **Optional features**: Newsletter subscriptions, notifications
- **Settings**: Enable/disable functionality

Use the \`Checkboxes\` component instead when you need multiple selection from a group of options.
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked (controlled mode)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default (uncontrolled mode)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    hint: {
      control: 'text',
      description: 'Hint text to display below the checkbox',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    children: {
      control: 'text',
      description: 'The label text for the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    children: 'I agree to the terms and conditions',
  },
};
