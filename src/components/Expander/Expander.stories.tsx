import type { Meta, StoryObj } from '@storybook/react';
import { Expander } from './Expander';
import React from 'react';

const meta: Meta<typeof Expander> = {
  title: 'NHS/Content/Expander',
  component: Expander,
  parameters: {
    docs: {
      description: {
        component: `
The **Expander** component provides a card-style progressive disclosure widget for showing and hiding content. It uses the native HTML \`<details>\` element for accessibility and includes plus/minus icons.

Unlike the standard Details component, the Expander has a card-like appearance and is typically used for showing expandable sections in forms or content areas.

## Usage

The Expander component accepts either text or HTML content, and allows you to set whether it's initially open or closed.

### Basic usage with text
\`\`\`jsx
<Expander 
  summaryText="More information" 
  text="This is the content that will be revealed when expanded." 
/>
\`\`\`

### With HTML content
\`\`\`jsx
<Expander 
  summaryText="Technical details" 
  html="<p>This is <strong>HTML content</strong> with formatting.</p>" 
/>
\`\`\`

### Initially open
\`\`\`jsx
<Expander 
  summaryText="Already expanded" 
  text="This expander starts in the open state."
  open 
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    summaryText: {
      control: 'text',
      description: 'Text for the clickable summary element',
    },
    summaryHtml: {
      control: 'text',
      description: 'HTML content for the summary (takes precedence over summaryText)',
    },
    text: {
      control: 'text',
      description: 'Plain text content to show when expanded',
    },
    html: {
      control: 'text',
      description: 'HTML content to show when expanded (takes precedence over text)',
    },
    open: {
      control: 'boolean',
      description: 'Whether the expander is initially open',
    },
    id: {
      control: 'text',
      description: 'ID attribute for the details element',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    summaryText: 'More information',
    text: 'This is additional information that can be shown or hidden using the expander.',
  },
};
