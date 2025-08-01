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

export const WithHtmlContent: Story = {
  args: {
    summaryText: 'Technical specifications',
    html: `
      <div>
        <p>This expander contains <strong>formatted HTML content</strong>.</p>
        <ul>
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
        <p>You can include any valid HTML content here.</p>
      </div>
    `,
  },
};

export const WithHtmlSummary: Story = {
  args: {
    summaryHtml: '<strong>Important:</strong> Additional details',
    text: 'This expander uses HTML in the summary text to emphasize important information.',
  },
};

export const InitiallyOpen: Story = {
  args: {
    summaryText: 'Already expanded',
    text: 'This expander starts in the open state, showing the content immediately.',
    open: true,
  },
};

export const LongContent: Story = {
  args: {
    summaryText: 'View full terms and conditions',
    html: `
      <div>
        <h3>Terms and Conditions</h3>
        <p>By using this service, you agree to the following terms and conditions:</p>
        <ol>
          <li>You must provide accurate information when registering</li>
          <li>You are responsible for maintaining the security of your account</li>
          <li>You must not use the service for any illegal activities</li>
          <li>We may update these terms at any time</li>
          <li>Your use of the service is at your own risk</li>
        </ol>
        <p>For more information, please contact our support team.</p>
        <p>Last updated: December 2024</p>
      </div>
    `,
  },
};

export const WithChildren: Story = {
  render: (args) => (
    <Expander summaryText="Custom content">
      <div style={{ padding: '10px' }}>
        <h4>This content is passed as children</h4>
        <p>When you use children, it takes precedence over the text and html props.</p>
        <button type="button">Interactive elements work too</button>
      </div>
    </Expander>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Expander
        summaryText="Section 1: Getting started"
        text="This is the first section with basic information about getting started."
      />
      <Expander
        summaryText="Section 2: Advanced features"
        html="<p>This section covers <strong>advanced features</strong> and complex scenarios.</p>"
      />
      <Expander
        summaryText="Section 3: Troubleshooting"
        text="Common issues and their solutions are covered in this section."
        open
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    summaryText: 'Click to expand',
    text: 'This is the content that will be revealed.',
    open: false,
  },
};
