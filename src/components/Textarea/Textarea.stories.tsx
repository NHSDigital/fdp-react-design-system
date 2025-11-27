// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';
import textareaStaticHtml from '../../../docs/static-html/Textarea.html?raw';

const meta: Meta<typeof Textarea> = {
  title: 'NHS/Components/Textarea',
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

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: {
    id: 'notes',
    name: 'notes',
    placeholder: 'Enter notes…',
    rows: 4,
  },
  render: (args) => {
    const keys = ['id','name','placeholder','rows','cols','hasError','disabled','readOnly','required','describedBy'];
    const props: Record<string, unknown> = {};
    for (const k of keys) if ((args as any)[k] !== undefined) (props as any)[k] = (args as any)[k];
    return (
      <ParityBlock macroCode={toNunjucksMacro('textarea', props)} staticHtml={textareaStaticHtml}>
        <Textarea {...args} />
      </ParityBlock>
    );
  },
};

export const ErrorState: Story = {
  args: {
    id: 'description',
    name: 'description',
    hasError: true,
    describedBy: 'description-error',
    placeholder: 'Describe the issue…',
  },
};

export const DisabledRequired: Story = {
  args: {
    id: 'notes-disabled',
    name: 'notes-disabled',
    disabled: true,
    required: true,
    placeholder: 'Disabled and required (for illustration)',
  },
};

export const PresetValue: Story = {
  args: {
    id: 'preset',
    name: 'preset',
    defaultValue: 'Pre-filled example text…',
    rows: 6,
  },
};
