import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'NHS/Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Select component provides a dropdown selection interface following NHS design guidelines with design token integration.

## Features

- **Dropdown selection**: Single and multiple selection support
- **Custom arrow styling**: NHS-styled dropdown arrow using SVG
- **Error state handling**: Visual error indicators with proper styling
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts to different screen sizes

## Usage

\`\`\`tsx
import { Select } from '@nhs-fdp/design-system';

// Basic usage
<Select 
  id="country" 
  name="country" 
  options={[
    { value: 'uk', label: 'United Kingdom' },
    { value: 'us', label: 'United States' },
  ]}
/>

// With error state
<Select 
  id="region" 
  name="region" 
  hasError 
  describedBy="region-error"
  options={options}
/>

// Multiple selection
<Select 
  id="languages" 
  name="languages" 
  multiple 
  options={languageOptions}
/>
\`\`\`

## Accessibility

- Proper ARIA attributes for screen readers
- Error state indication with visual and semantic markup
- Keyboard navigation support (arrow keys, Enter, Escape)
- Focus indicators meeting WCAG contrast requirements
        `,
      },
    },
  },
  argTypes: {
    hasError: {
      control: 'boolean',
      description: 'Whether the select is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple options can be selected',
    },
    size: {
      control: 'number',
      description: 'Number of visible options (for multiple select)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const basicOptions = [
  { value: '', text: 'Please select an option' },
  { value: 'england', text: 'England' },
  { value: 'scotland', text: 'Scotland' },
  { value: 'wales', text: 'Wales' },
  { value: 'northern-ireland', text: 'Northern Ireland' },
];

const healthConditions = [
  { value: '', text: 'Select a condition' },
  { value: 'diabetes', text: 'Diabetes' },
  { value: 'hypertension', text: 'High Blood Pressure' },
  { value: 'asthma', text: 'Asthma' },
  { value: 'arthritis', text: 'Arthritis' },
  { value: 'depression', text: 'Depression' },
  { value: 'anxiety', text: 'Anxiety' },
];

const appointmentTimes = [
  { value: '', text: 'Select preferred time' },
  { value: '09:00', text: '9:00 AM' },
  { value: '10:00', text: '10:00 AM' },
  { value: '11:00', text: '11:00 AM' },
  { value: '14:00', text: '2:00 PM' },
  { value: '15:00', text: '3:00 PM' },
  { value: '16:00', text: '4:00 PM' },
];

export const Default: Story = {
  args: {
    id: 'select-default',
    name: 'select-default',
    options: basicOptions,
  },
};

export const WithValue: Story = {
  args: {
    id: 'select-value',
    name: 'select-value',
    options: basicOptions,
    value: 'england',
  },
};

export const HealthConditions: Story = {
  args: {
    id: 'health-conditions',
    name: 'health-conditions',
    options: healthConditions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a medical condition selection dropdown.',
      },
    },
  },
};

export const AppointmentTimes: Story = {
  args: {
    id: 'appointment-time',
    name: 'appointment-time',
    options: appointmentTimes,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of appointment time selection.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    id: 'select-error',
    name: 'select-error',
    hasError: true,
    options: basicOptions,
    value: '',
    describedBy: 'select-error-message',
  },
};

export const Disabled: Story = {
  args: {
    id: 'select-disabled',
    name: 'select-disabled',
    disabled: true,
    options: basicOptions,
    value: 'england',
  },
};

export const Required: Story = {
  args: {
    id: 'select-required',
    name: 'select-required',
    required: true,
    options: basicOptions,
  },
};

export const Multiple: Story = {
  args: {
    id: 'select-multiple',
    name: 'select-multiple',
    multiple: true,
    options: healthConditions.slice(1), // Remove empty option for multiple
    size: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection example allowing users to select multiple health conditions.',
      },
    },
  },
};

export const MultipleWithSelection: Story = {
  args: {
    id: 'select-multiple-value',
    name: 'select-multiple-value',
    multiple: true,
    options: healthConditions.slice(1),
    defaultValue: 'diabetes',
    size: 4,
  },
};

export const WithChildren: Story = {
  render: (args) => (
    <Select {...args}>
      <Select.Option value="">Choose an option</Select.Option>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
    </Select>
  ),
  args: {
    id: 'select-children',
    name: 'select-children',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select component using children pattern with Select.Option components instead of options prop.',
      },
    },
  },
};

export const WithChildrenAndDisabled: Story = {
  render: (args) => (
    <Select {...args}>
      <Select.Option value="">Select a health condition</Select.Option>
      <Select.Option value="asthma">Asthma</Select.Option>
      <Select.Option value="diabetes" disabled>Diabetes (unavailable)</Select.Option>
      <Select.Option value="heart-disease">Heart disease</Select.Option>
      <Select.Option value="high-blood-pressure">High blood pressure</Select.Option>
      <Select.Option value="other">Other</Select.Option>
    </Select>
  ),
  args: {
    id: 'select-children-disabled',
    name: 'select-children-disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select component using children pattern with some disabled options.',
      },
    },
  },
};

export const WithChildrenError: Story = {
  render: (args) => (
    <Select {...args}>
      <Select.Option value="">Choose a country</Select.Option>
      <Select.Option value="uk">United Kingdom</Select.Option>
      <Select.Option value="us">United States</Select.Option>
      <Select.Option value="ca">Canada</Select.Option>
      <Select.Option value="au">Australia</Select.Option>
    </Select>
  ),
  args: {
    id: 'select-children-error',
    name: 'select-children-error',
    hasError: true,
    describedBy: 'select-children-error-message',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select component using children pattern with error state.',
      },
    },
  },
};
