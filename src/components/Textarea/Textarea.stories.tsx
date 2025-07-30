import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Textarea component provides a multi-line text input following NHS design guidelines with design token integration.

## Features

- **Multi-line text input**: Supports extensive text entry
- **Resize control**: Configurable resize behavior (vertical, horizontal, both, none)
- **Error state handling**: Visual error indicators with proper styling
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts to different screen sizes

## Usage

\`\`\`tsx
import { Textarea } from '@nhs-fdp/design-system';

// Basic usage
<Textarea 
  id="message" 
  name="message" 
  placeholder="Enter your message"
/>

// With error state
<Textarea 
  id="description" 
  name="description" 
  hasError 
  describedBy="description-error"
/>

// With resize control
<Textarea 
  id="notes" 
  name="notes" 
  resize="vertical"
  rows={5}
/>
\`\`\`

## Accessibility

- Proper ARIA attributes for screen readers
- Error state indication with visual and semantic markup
- Keyboard navigation support
- Focus indicators meeting WCAG contrast requirements
        `,
      },
    },
  },
  argTypes: {
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Controls how the textarea can be resized',
    },
    hasError: {
      control: 'boolean',
      description: 'Whether the textarea is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    cols: {
      control: 'number',
      description: 'Number of visible character columns',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: 'textarea-default',
    name: 'textarea-default',
    placeholder: 'Enter your text here...',
  },
};

export const WithValue: Story = {
  args: {
    id: 'textarea-value',
    name: 'textarea-value',
    value: 'This is some pre-filled content in the textarea. It demonstrates how the component looks with existing content.',
  },
};

export const WithRows: Story = {
  args: {
    id: 'textarea-rows',
    name: 'textarea-rows',
    rows: 5,
    placeholder: 'This textarea has 5 rows...',
  },
};

export const WithError: Story = {
  args: {
    id: 'textarea-error',
    name: 'textarea-error',
    hasError: true,
    value: 'This content has an error',
    describedBy: 'textarea-error-message',
  },
};

export const Disabled: Story = {
  args: {
    id: 'textarea-disabled',
    name: 'textarea-disabled',
    disabled: true,
    value: 'This textarea is disabled',
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'textarea-readonly',
    name: 'textarea-readonly',
    readOnly: true,
    value: 'This textarea is read-only and cannot be modified',
  },
};

export const Required: Story = {
  args: {
    id: 'textarea-required',
    name: 'textarea-required',
    required: true,
    placeholder: 'This field is required',
  },
};

// Resize variants
export const ResizeVertical: Story = {
  args: {
    id: 'textarea-resize-vertical',
    name: 'textarea-resize-vertical',
    resize: 'vertical',
    placeholder: 'This textarea can be resized vertically only',
    rows: 3,
  },
};

export const ResizeHorizontal: Story = {
  args: {
    id: 'textarea-resize-horizontal',
    name: 'textarea-resize-horizontal',
    resize: 'horizontal',
    placeholder: 'This textarea can be resized horizontally only',
    rows: 3,
  },
};

export const ResizeBoth: Story = {
  args: {
    id: 'textarea-resize-both',
    name: 'textarea-resize-both',
    resize: 'both',
    placeholder: 'This textarea can be resized in both directions',
    rows: 3,
  },
};

export const ResizeNone: Story = {
  args: {
    id: 'textarea-resize-none',
    name: 'textarea-resize-none',
    resize: 'none',
    placeholder: 'This textarea cannot be resized',
    rows: 3,
  },
};
