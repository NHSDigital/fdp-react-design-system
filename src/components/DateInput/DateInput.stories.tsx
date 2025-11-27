// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
