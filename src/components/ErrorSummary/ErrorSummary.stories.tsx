// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { ErrorSummary } from './ErrorSummary';
import { Input } from '../Input';
import { DateInput } from '../DateInput';
import { Label } from '../Label';
import { ErrorMessage } from '../ErrorMessage';
import { Fieldset } from '../Fieldset';
import { Hint } from '../Hint';

const meta: Meta<typeof ErrorSummary> = {
  title: 'NHS/Components/ErrorSummary',
  component: ErrorSummary,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS ErrorSummary component follows NHS design guidelines with design token integration.

## Features

- **Accessibility**: Auto-focuses for screen readers with role="alert"
- **Error navigation**: Links to specific form fields that have errors
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts to different screen sizes
- **Keyboard navigation**: Full keyboard accessibility support

## Usage

\`\`\`tsx
import { ErrorSummary } from '@nhs-fdp/design-system';

// Basic usage
<ErrorSummary
  titleText="There is a problem"
  errorList={[
    {
      text: 'Enter your full name',
      href: '#full-name'
    },
    {
      text: 'Enter a valid email address',
      href: '#email'
    }
  ]}
/>

// With description
<ErrorSummary
  titleText="There is a problem"
  descriptionText="Please fix the following errors:"
  errorList={errors}
/>
\`\`\`

## Accessibility

- Auto-focuses when rendered for immediate screen reader attention
- Uses role="alert" for live region announcements
- Links directly to form fields with errors
- Proper heading structure with h2 title
- WCAG compliant focus indicators
        `,
      },
    },
  },
  argTypes: {
    titleText: {
      control: 'text',
      description: 'Title text for the error summary',
    },
    titleHtml: {
      control: 'text',
      description: 'Title HTML (takes precedence over titleText)',
    },
    descriptionText: {
      control: 'text',
      description: 'Description text providing context',
    },
    descriptionHtml: {
      control: 'text',
      description: 'Description HTML (takes precedence over descriptionText)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

export const Default: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Date of birth must be in the past',
        href: '#dob'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic error summary following NHS Service Manual default example.',
      },
    },
  },
};
