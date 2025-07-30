import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS ErrorMessage component displays validation errors for form fields following NHS design guidelines with design token integration.

## Features

- **Error indication**: Clear visual indication of form field errors
- **Screen reader support**: Proper ARIA attributes and semantic markup
- **Design token integration**: Uses NHS error colors and typography tokens
- **Accessibility**: Announced by screen readers when errors appear
- **Form association**: Links to form controls via \`id\` attribute

## Usage

\`\`\`tsx
import { ErrorMessage } from '@nhs-fdp/design-system';

// Basic usage
<ErrorMessage id="email-error">
  Enter a valid email address
</ErrorMessage>

// With form field
<div>
  <Label htmlFor="email">Email address</Label>
  <Input 
    id="email" 
    name="email" 
    hasError 
    describedBy="email-error"
  />
  <ErrorMessage id="email-error">
    Enter a valid email address
  </ErrorMessage>
</div>
\`\`\`

## Error Message Guidelines

- **Be specific**: Explain exactly what's wrong
- **Be helpful**: Suggest how to fix the error
- **Be concise**: Keep messages short and clear
- **Use plain English**: Avoid technical jargon

## Accessibility

- Uses semantic error markup
- Associated with form controls via \`aria-describedby\`
- Screen reader compatible with proper announcements
- High contrast error styling for visibility
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID for the error message (used with aria-describedby)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    id: 'default-error',
    children: 'This field has an error.',
  },
};

export const EmailError: Story = {
  args: {
    id: 'email-error',
    children: 'Enter a valid email address',
  },
  parameters: {
    docs: {
      description: {
        story: 'Email validation error message.',
      },
    },
  },
};

export const RequiredFieldError: Story = {
  args: {
    id: 'required-error',
    children: 'This field is required',
  },
  parameters: {
    docs: {
      description: {
        story: 'Generic required field error.',
      },
    },
  },
};

export const NHSNumberError: Story = {
  args: {
    id: 'nhs-number-error',
    children: 'Enter a valid NHS number, like 485 777 3456',
  },
  parameters: {
    docs: {
      description: {
        story: 'NHS number format validation error.',
      },
    },
  },
};

export const DateError: Story = {
  args: {
    id: 'date-error',
    children: 'Enter a valid date, for example 27 3 1987',
  },
  parameters: {
    docs: {
      description: {
        story: 'Date format validation error.',
      },
    },
  },
};

export const PhoneNumberError: Story = {
  args: {
    id: 'phone-error',
    children: 'Enter a valid UK phone number, like 01632 960 001',
  },
  parameters: {
    docs: {
      description: {
        story: 'Phone number validation error.',
      },
    },
  },
};

export const PasswordError: Story = {
  args: {
    id: 'password-error',
    children: 'Password must be at least 8 characters and include at least one number',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password strength validation error.',
      },
    },
  },
};

export const PostcodeError: Story = {
  args: {
    id: 'postcode-error',
    children: 'Enter a valid UK postcode, like SW1A 1AA',
  },
  parameters: {
    docs: {
      description: {
        story: 'Postcode format validation error.',
      },
    },
  },
};

export const FileUploadError: Story = {
  args: {
    id: 'upload-error',
    children: 'The file must be a JPG, PNG or PDF and smaller than 5MB',
  },
  parameters: {
    docs: {
      description: {
        story: 'File upload validation error.',
      },
    },
  },
};

export const SelectionError: Story = {
  args: {
    id: 'selection-error',
    children: 'Select an option from the list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Selection field validation error.',
      },
    },
  },
};

export const TextareaError: Story = {
  args: {
    id: 'textarea-error',
    children: 'Enter at least 10 characters to describe your symptoms',
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea minimum length validation error.',
      },
    },
  },
};

export const SpecificGuidanceError: Story = {
  args: {
    id: 'specific-error',
    children: 'Date of birth must be in the past and you must be at least 16 years old',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error with specific business rule guidance.',
      },
    },
  },
};

export const LongError: Story = {
  args: {
    id: 'long-error',
    children: 'The information you have entered does not match our records. Please check your NHS number and date of birth and try again, or contact us for help.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Longer error message with helpful guidance.',
      },
    },
  },
};
