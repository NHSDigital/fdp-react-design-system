import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

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
