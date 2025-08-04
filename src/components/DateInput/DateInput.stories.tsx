import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'NHS/Components/DateInput',
  component: DateInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The DateInput component allows users to enter dates using separate day, month, and year fields. 
This follows NHS design patterns for collecting date information in a clear and accessible way.

**Key features:**
- Separate fields for day, month, and year
- Proper labeling and accessibility support
- Numeric input modes for mobile devices
- Validation support with error messaging
- Hint text for user guidance
- Fieldset grouping with legend support

**When to use:**
- Collecting birth dates
- Appointment dates
- Event dates
- Any date that users need to type rather than select

**Accessibility:**
- Uses fieldset and legend for screen readers
- Proper labeling for each input field
- ARIA described-by for error and hint associations
- Numeric input modes for mobile accessibility
        `
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the date input group'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    fieldset: {
      control: 'object',
      description: 'Fieldset configuration with legend'
    },
    hint: {
      control: 'object',
      description: 'Hint text configuration'
    },
    errorMessage: {
      control: 'object',
      description: 'Error message configuration'
    }
  }
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    id: 'date-input-default',
    fieldset: {
      legend: 'What is your date of birth?'
    }
  }
};

export const WithHint: Story = {
  args: {
    id: 'date-input-hint',
    fieldset: {
      legend: 'When did your symptoms start?'
    },
    hint: {
      text: 'For example, 27 3 2021'
    }
  }
};

export const WithValues: Story = {
  args: {
    id: 'date-input-values',
    fieldset: {
      legend: 'Appointment date'
    },
    values: {
      day: '15',
      month: '06',
      year: '2024'
    },
    hint: {
      text: 'Enter the date of your appointment'
    }
  }
};

export const WithError: Story = {
  args: {
    id: 'date-input-error',
    fieldset: {
      legend: 'What is your date of birth?'
    },
    hint: {
      text: 'For example, 31 3 1980'
    },
    errorMessage: {
      text: 'Error: Enter your date of birth'
    },
    values: {
      day: '',
      month: '',
      year: ''
    }
  }
};

export const WithPartialError: Story = {
  args: {
    id: 'date-input-partial-error',
    fieldset: {
      legend: 'When did you first notice symptoms?'
    },
    hint: {
      text: 'For example, 15 4 2024'
    },
    errorMessage: {
      text: 'Date must include a month and year'
    },
    values: {
      day: '15',
      month: '',
      year: ''
    }
  }
};

export const ValidationExample: Story = {
  args: {
    id: 'date-validation',
    fieldset: {
      legend: 'When did you first experience symptoms?'
    },
    hint: {
      text: 'This helps us understand your condition better. For example, 12 6 2024'
    },
    errorMessage: {
      html: 'The date you entered is not valid. Please check you have entered the <strong>day</strong>, <strong>month</strong> and <strong>year</strong> correctly.'
    },
    values: {
      day: '32',
      month: '13',
      year: '2024'
    }
  }
};

export const ValidationDemo: Story = {
  args: {
    id: 'date-validation-demo',
    fieldset: {
      legend: 'Try entering invalid values to see validation'
    },
    hint: {
      text: 'Try entering: day > 31, month > 12, year < 1900 or year > 2035, or non-numeric values'
    }
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the real-time validation features:

- **Day validation**: Must be 1-31 and numeric
- **Month validation**: Must be 1-12 and numeric  
- **Year validation**: Must be 1900-2035 and numeric
- **Date validation**: Checks if the combination forms a valid date
- **Visual feedback**: Invalid fields show red border and error styling
- **Error messages**: Specific messages for each type of validation error
- **Accessibility**: Screen reader support with proper ARIA attributes

Try entering invalid values to see the validation in action!
        `
      }
    }
  }
};