import type { Meta, StoryObj } from '@storybook/react';
import { WarningCallout } from './WarningCallout';

const meta: Meta<typeof WarningCallout> = {
  title: 'NHS/Components/WarningCallout',
  component: WarningCallout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The warning callout component is used to warn users about something important, like legal consequences of not doing something.

## When to use this component

Use this component when you need to warn users about something important, such as:
- Legal consequences of an action or lack of action
- Important information about deadlines
- Critical steps in a process that users must not miss
- Information that could affect their health or safety

## When not to use this component

Do not use this component:
- For general advice or information (use an inset text component instead)
- For content that's not a warning (use a different component)
- To highlight good news or positive information (use a panel or card instead)
- For error messages in forms (use error message components instead)

## Key features

- **Clear visual hierarchy**: Yellow background and border to grab attention
- **Screen reader support**: Automatic "Important:" prefix for accessibility
- **Flexible content**: Supports text, HTML, or React children
- **Semantic HTML**: Proper heading levels for document structure
- **NHS compliant**: Follows NHS design system guidelines
        `,
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'The heading text for the warning callout',
    },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'The heading level for the warning callout title',
    },
    text: {
      control: 'text',
      description: 'Text content to display in the warning callout',
    },
    html: {
      control: 'text',
      description: 'HTML content to display in the warning callout',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WarningCallout>;

export const Default: Story = {
  args: {
    heading: 'Check your details are correct',
    text: 'If your details are wrong, you may not get the help you need. This could affect your application.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic warning callout with heading and text content.',
      },
    },
  },
};

export const WithHTMLContent: Story = {
  args: {
    heading: 'Legal consequences',
    html: `
      <p>If you do not comply with this requirement, you may face:</p>
      <ul>
        <li>A fine of up to £1,000</li>
        <li>Legal action</li>
        <li>Removal from the register</li>
      </ul>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning callout with HTML content for more complex layouts.',
      },
    },
  },
};

export const WithReactChildren: Story = {
  args: {
    heading: 'Verify your identity',
    children: (
      <>
        <p>You must provide one of the following documents:</p>
        <ul>
          <li>Passport</li>
          <li>Driving licence</li>
          <li>National insurance card</li>
        </ul>
        <p>
          <a href="/upload-documents">Upload your documents</a> before continuing.
        </p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning callout with React children for maximum flexibility.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    heading: 'Data protection notice',
    text: 'Your personal information will be processed in accordance with data protection laws. By continuing, you consent to this processing.',
    className: 'custom-warning-style',
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning callout with custom CSS class for additional styling.',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
};

