// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'NHS/Components/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Hint component provides helpful text for form fields following NHS design guidelines with design token integration.

## Features

- **Help text**: Provides additional context for form fields
- **Semantic HTML**: Uses proper semantic markup for accessibility
- **Design token integration**: Uses NHS typography and color tokens
- **Screen reader support**: Properly announced by assistive technology
- **Form association**: Links to form controls via \`id\` attribute

## Usage

\`\`\`tsx
import { Hint } from '@nhs-fdp/design-system';

// Basic usage
<Hint id="email-hint">
  We'll only use this to send you appointment reminders
</Hint>

// With form field
<div>
  <Label htmlFor="nhs-number">NHS number</Label>
  <Hint id="nhs-number-hint">
    This is a 10 digit number, like 485 777 3456
  </Hint>
  <Input 
    id="nhs-number" 
    name="nhs-number" 
    describedBy="nhs-number-hint"
  />
</div>
\`\`\`

## When to Use

- **Format guidance**: Explain expected formats (dates, phone numbers, etc.)
- **Privacy information**: Explain how data will be used
- **Examples**: Provide examples of valid input
- **Additional context**: Help users understand what information is needed

## Accessibility

- Uses appropriate semantic markup
- Associated with form controls via \`aria-describedby\`
- Screen reader compatible
- Follows NHS color contrast guidelines
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID for the hint (used with aria-describedby)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {
    id: 'default-hint',
    children: 'This is a helpful hint to guide the user.',
  },
};
