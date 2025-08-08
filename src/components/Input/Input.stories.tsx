import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'NHS/Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Input component provides text inputs, number inputs, and range sliders that follow NHS design guidelines.

## Range Input (Slider)

The range input type creates an NHS-styled slider with the following features:
- NHS blue theme with proper contrast
- Accessible focus states with NHS yellow outline  
- Optional value labels (min/max)
- Current value display
- Disabled and error states
- Smooth hover and active animations

## Usage

\`\`\`tsx
// Basic range input
<Input
  id="age-range"
  name="age"
  type="range"
  min="18"
  max="100"
  defaultValue="30"
/>

// Range with labels and current value
<Input
  id="satisfaction"
  name="satisfaction"
  type="range"
  min="1"
  max="10"
  defaultValue="7"
  showValueLabels
  showCurrentValue
  valueLabels={{
    min: "Very Dissatisfied",
    max: "Very Satisfied", 
    current: "Your rating:"
  }}
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number', 'range'],
    },
    width: {
      control: 'select',
      options: ['full', '20', '10', '5', '4', '3', '2'],
    },
    hasError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    showValueLabels: {
      control: 'boolean',
    },
    showCurrentValue: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'input-default',
    name: 'input-default',
    placeholder: 'Enter text here',
  },
};

export const WithValue: Story = {
  args: {
    id: 'input-value',
    name: 'input-value',
    value: 'Pre-filled value',
  },
};

export const Email: Story = {
  args: {
    id: 'input-email',
    name: 'input-email',
    type: 'email',
    placeholder: 'Enter your email',
    autoComplete: 'email',
  },
};

export const Password: Story = {
  args: {
    id: 'input-password',
    name: 'input-password',
    type: 'password',
    placeholder: 'Enter your password',
    autoComplete: 'current-password',
  },
};

export const Number: Story = {
  args: {
    id: 'input-number',
    name: 'input-number',
    type: 'number',
    placeholder: 'Enter a number',
    min: 0,
    max: 100,
  },
};

export const WithError: Story = {
  args: {
    id: 'input-error',
    name: 'input-error',
    hasError: true,
    value: 'Invalid input',
    describedBy: 'input-error-message',
  },
};

export const Disabled: Story = {
  args: {
    id: 'input-disabled',
    name: 'input-disabled',
    disabled: true,
    value: 'Disabled input',
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'input-readonly',
    name: 'input-readonly',
    readOnly: true,
    value: 'Read-only input',
  },
};

export const Required: Story = {
  args: {
    id: 'input-required',
    name: 'input-required',
    required: true,
    placeholder: 'This field is required',
  },
};

// Width variants
export const Width20: Story = {
  args: {
    id: 'input-width-20',
    name: 'input-width-20',
    width: '20',
    placeholder: 'Width 20 characters',
  },
};

export const Width10: Story = {
  args: {
    id: 'input-width-10',
    name: 'input-width-10',
    width: '10',
    placeholder: 'Width 10',
  },
};

export const Width5: Story = {
  args: {
    id: 'input-width-5',
    name: 'input-width-5',
    width: '5',
    placeholder: 'W5',
  },
};

export const Width2: Story = {
  args: {
    id: 'input-width-2',
    name: 'input-width-2',
    width: '2',
    placeholder: '12',
  },
};

// Range Input Stories
export const RangeBasic: Story = {
  args: {
    id: 'range-basic',
    name: 'basic-range',
    type: 'range',
    min: '0',
    max: '100',
    defaultValue: '50',
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic range slider with default NHS styling.',
      },
    },
  },
};

export const RangeWithLabels: Story = {
  args: {
    id: 'range-labels',
    name: 'range-with-labels',
    type: 'range',
    min: '1',
    max: '10',
    defaultValue: '5',
    showValueLabels: true,
    showCurrentValue: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with minimum/maximum labels and current value display.',
      },
    },
  },
};

export const RangeCustomLabels: Story = {
  args: {
    id: 'range-custom',
    name: 'satisfaction',
    type: 'range',
    min: '1',
    max: '10',
    defaultValue: '7',
    showValueLabels: true,
    showCurrentValue: true,
    valueLabels: {
      min: 'Very Dissatisfied',
      max: 'Very Satisfied',
      current: 'Your rating:'
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with custom labels for healthcare satisfaction surveys.',
      },
    },
  },
};

export const AgeSelector: Story = {
  args: {
    id: 'age-selector',
    name: 'age',
    type: 'range',
    min: '18',
    max: '100',
    defaultValue: '30',
    showValueLabels: true,
    showCurrentValue: true,
    valueLabels: {
      min: '18 years',
      max: '100+ years',
      current: 'Age:'
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example: Age selector for healthcare forms.',
      },
    },
  },
};

export const PainScale: Story = {
  args: {
    id: 'pain-scale',
    name: 'pain-level',
    type: 'range',
    min: '0',
    max: '10',
    defaultValue: '0',
    step: '1',
    showValueLabels: true,
    showCurrentValue: true,
    valueLabels: {
      min: 'No Pain (0)',
      max: 'Worst Pain (10)',
      current: 'Pain Level:'
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example: Pain scale assessment for medical forms.',
      },
    },
  },
};

export const RangeDisabled: Story = {
  args: {
    id: 'range-disabled',
    name: 'disabled-range',
    type: 'range',
    min: '0',
    max: '100',
    defaultValue: '75',
    disabled: true,
    showValueLabels: true,
    showCurrentValue: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled range slider showing the disabled state styling.',
      },
    },
  },
};

export const RangeError: Story = {
  args: {
    id: 'range-error',
    name: 'error-range',
    type: 'range',
    min: '0',
    max: '100',
    defaultValue: '25',
    hasError: true,
    showValueLabels: true,
    showCurrentValue: true,
    describedBy: 'range-error-message',
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider in error state with red styling.',
      },
    },
  },
};
