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

export const SingleFieldError: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Enter your full name',
        href: '#full-name'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Error summary linking to a single text input field.',
      },
    },
  },
};

export const MultipleFieldError: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Date of birth must include a year',
        href: '#dob-day'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Error summary linking to the first field in a multi-field input (like date input).',
      },
    },
  },
};

export const RadioCheckboxError: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Select how you like to be contacted',
        href: '#contact-email'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Error summary linking to the first option in a radio or checkbox group.',
      },
    },
  },
};

export const PatientDetailsForm: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Enter your full name',
        href: '#full-name'
      },
      {
        text: 'NHS number must be 10 digits',
        href: '#nhs-number'
      },
      {
        text: 'Date of birth must be in the past',
        href: '#dob-day'
      },
      {
        text: 'Enter your postcode',
        href: '#postcode'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Patient registration form with multiple validation errors.',
      },
    },
  },
};

export const WithTextInputValidation: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Enter your full name',
        href: '#full-name'
      },
      {
        text: 'NHS number must be 10 digits',
        href: '#nhs-number'
      }
    ]
  },
  render: (args) => (
    <div>
      <ErrorSummary {...args} />
      
      <div style={{ marginTop: '32px' }}>
        <h1>Your details</h1>
        
        <div style={{ marginBottom: '24px' }}>
          <Label htmlFor="full-name">Full name</Label>
          <ErrorMessage id="full-name-error">Enter your full name</ErrorMessage>
          <Input 
            id="full-name" 
            name="full-name" 
            hasError={true}
            describedBy="full-name-error"
          />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <Label htmlFor="nhs-number">NHS number</Label>
          <ErrorMessage id="nhs-number-error">NHS number must be 10 digits</ErrorMessage>
          <Input 
            id="nhs-number" 
            name="nhs-number" 
            value="123456"
            hasError={true}
            describedBy="nhs-number-error"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error summary with actual text input validation errors and form fields.',
      },
    },
  },
};

export const WithDateInputValidation: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Date of birth must include a year',
        href: '#dob-day'
      },
      {
        text: 'Appointment date must be in the future',
        href: '#appointment-day'
      }
    ]
  },
  render: (args) => (
    <div>
      <ErrorSummary {...args} />
      
      <div style={{ marginTop: '32px' }}>
        <h1>Appointment booking</h1>
        
        <div style={{ marginBottom: '24px' }}>
          <Fieldset 
            legend={{ text: "What is your date of birth?" }}
            describedBy="dob-hint dob-error"
          >
            <Hint id="dob-hint">For example, 15 3 1984</Hint>
            <ErrorMessage id="dob-error">Date of birth must include a year</ErrorMessage>
            <DateInput
              id="dob"
              namePrefix="dob"
              items={[
                { name: 'day', value: '15' },
                { name: 'month', value: '3' },
                { name: 'year', value: '' }
              ]}
            />
          </Fieldset>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <Fieldset 
            legend={{ text: "When would you like your appointment?" }}
            describedBy="appointment-hint appointment-error"
          >
            <Hint id="appointment-hint">For example, 27 3 2024</Hint>
            <ErrorMessage id="appointment-error">Appointment date must be in the future</ErrorMessage>
            <DateInput
              id="appointment"
              namePrefix="appointment"
              items={[
                { name: 'day', value: '15' },
                { name: 'month', value: '1' },
                { name: 'year', value: '2020' }
              ]}
            />
          </Fieldset>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error summary with actual date input validation errors and form fields.',
      },
    },
  },
};

export const CompleteFormValidation: Story = {
  args: {
    titleText: 'There is a problem',
    errorList: [
      {
        text: 'Enter your full name',
        href: '#patient-name'
      },
      {
        text: 'NHS number must be 10 digits',
        href: '#patient-nhs-number'
      },
      {
        text: 'Date of birth must be in the past',
        href: '#patient-dob-day'
      }
    ]
  },
  render: (args) => (
    <div>
      <ErrorSummary {...args} />
      
      <div style={{ marginTop: '32px' }}>
        <h1>Patient registration</h1>
        
        <div style={{ marginBottom: '24px' }}>
          <Label htmlFor="patient-name">Full name</Label>
          <ErrorMessage id="patient-name-error">Enter your full name</ErrorMessage>
          <Input 
            id="patient-name" 
            name="patient-name" 
            hasError={true}
            describedBy="patient-name-error"
          />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <Label htmlFor="patient-nhs-number">NHS number</Label>
          <ErrorMessage id="patient-nhs-number-error">NHS number must be 10 digits</ErrorMessage>
          <Input 
            id="patient-nhs-number" 
            name="patient-nhs-number" 
            value="123456789"
            hasError={true}
            describedBy="patient-nhs-number-error"
          />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <Fieldset 
            legend={{ text: "What is your date of birth?" }}
            describedBy="patient-dob-hint patient-dob-error"
          >
            <Hint id="patient-dob-hint">For example, 15 3 1984</Hint>
            <ErrorMessage id="patient-dob-error">Date of birth must be in the past</ErrorMessage>
            <DateInput
              id="patient-dob"
              namePrefix="patient-dob"
              items={[
                { name: 'day', value: '15' },
                { name: 'month', value: '12' },
                { name: 'year', value: '2030' }
              ]}
            />
          </Fieldset>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete patient registration form with multiple validation errors.',
      },
    },
  },
};
