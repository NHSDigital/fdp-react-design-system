import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Components/Hint',
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

export const EmailHint: Story = {
  args: {
    id: 'email-hint',
    children: "We'll only use this to send you appointment reminders and test results.",
  },
  parameters: {
    docs: {
      description: {
        story: 'Privacy information for email field.',
      },
    },
  },
};

export const NHSNumberHint: Story = {
  args: {
    id: 'nhs-number-hint',
    children: 'This is a 10 digit number, like 485 777 3456. You can find it on any letter the NHS has sent you.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Format guidance for NHS number input.',
      },
    },
  },
};

export const DateOfBirthHint: Story = {
  args: {
    id: 'date-of-birth-hint',
    children: 'For example, 27 3 1987',
  },
  parameters: {
    docs: {
      description: {
        story: 'Date format example for date of birth field.',
      },
    },
  },
};

export const PhoneNumberHint: Story = {
  args: {
    id: 'phone-hint',
    children: 'Include your country code if you live outside the UK, for example +33 1 23 45 67 89.',
  },
  parameters: {
    docs: {
      description: {
        story: 'International phone number guidance.',
      },
    },
  },
};

export const PasswordHint: Story = {
  args: {
    id: 'password-hint',
    children: 'Must be at least 8 characters and include at least one number.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password requirements hint.',
      },
    },
  },
};

export const PostcodeHint: Story = {
  args: {
    id: 'postcode-hint',
    children: 'For example SW1A 1AA',
  },
  parameters: {
    docs: {
      description: {
        story: 'UK postcode format example.',
      },
    },
  },
};

export const UploadHint: Story = {
  args: {
    id: 'upload-hint',
    children: 'Files must be in JPG, PNG or PDF format and no larger than 5MB.',
  },
  parameters: {
    docs: {
      description: {
        story: 'File upload requirements and constraints.',
      },
    },
  },
};

export const AppointmentHint: Story = {
  args: {
    id: 'appointment-hint',
    children: 'Choose your preferred appointment time. We will try to accommodate your preference but may need to offer an alternative.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Appointment booking expectation setting.',
      },
    },
  },
};

export const LongHint: Story = {
  args: {
    id: 'long-hint',
    children: 'Please provide as much detail as possible about your symptoms, including when they started, how severe they are, and anything that makes them better or worse. This will help us provide you with the best possible care.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Longer hint text for detailed form fields.',
      },
    },
  },
};
