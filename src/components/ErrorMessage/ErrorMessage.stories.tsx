import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';
import errorMessageStaticHtml from '../../../docs/static-html/ErrorMessage.html?raw';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';

const meta: Meta<typeof ErrorMessage> = {
  title: 'NHS/Components/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS ErrorMessage component displays validation errors for form fields following NHS design guidelines with design token integration.

## Features

- **Error indication**: Clear visual indication of form field errors
- **Screen reader support**: Proper ARIA attributes and semantic markup
- **Design token integration**: Uses NHS error colors and typography tokens
- **Accessibility**: Announced by screen readers when errors appear
- **Form association**: Links to form controls via \`id\` attribute

## Usage

\`\`\`tsx
import { ErrorMessage } from '@nhs-fdp/design-system';

// Basic usage
<ErrorMessage id="email-error">
  Enter a valid email address
</ErrorMessage>

// With form field
<div>
  <Label htmlFor="email">Email address</Label>
  <Input 
    id="email" 
    name="email" 
    hasError 
    describedBy="email-error"
  />
  <ErrorMessage id="email-error">
    Enter a valid email address
  </ErrorMessage>
</div>
\`\`\`

## Error Message Guidelines

- **Be specific**: Explain exactly what's wrong
- **Be helpful**: Suggest how to fix the error
- **Be concise**: Keep messages short and clear
- **Use plain English**: Avoid technical jargon

## Accessibility

- Uses semantic error markup
- Associated with form controls via \`aria-describedby\`
- Screen reader compatible with proper announcements
- High contrast error styling for visibility
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID for the error message (used with aria-describedby)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    id: 'default-error',
    children: 'This field has an error.',
  },
};

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: { id: 'name-error', children: 'Enter your name' },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Side-by-side view: React live render, Nunjucks macro invocation (code), and the canonical Static HTML snippet (generated).',
      },
    },
  },
  render: (args) => {
    const props: Record<string, unknown> = {};
    if (args.id) props.id = args.id;
    if (args.className) props.className = args.className;
    if (args.visuallyHiddenText) props.visuallyHiddenText = args.visuallyHiddenText;
    props.text = typeof args.children === 'string' ? args.children : 'Error message';

    return (
      <ParityBlock
        macroCode={toNunjucksMacro('error-message', props)}
        staticHtml={errorMessageStaticHtml}
      >
        <ErrorMessage {...args} />
      </ParityBlock>
    );
  },
};

