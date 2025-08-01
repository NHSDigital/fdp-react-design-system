import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../src/components/Panel';

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Panel component is used to display confirmation or success messages with a distinctive green background and white text.
It's typically used on confirmation pages to indicate successful transaction completion.

### When to use this component
- On confirmation pages after a successful form submission
- To highlight important success messages
- When you need to clearly communicate completion of a task

### When not to use this component
- For error messages (use Error Summary instead)
- For general information (use Inset Text instead)
- For warning messages (use Warning Callout instead)

### Accessibility
- Uses semantic heading levels for proper page structure
- Maintains proper color contrast with white text on green background
- Supports screen readers with meaningful heading hierarchy
        `,
      },
    },
  },
  argTypes: {
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'The semantic heading level (h1-h6) for the panel title',
    },
    headingText: {
      control: 'text',
      description: 'Plain text for the panel heading',
    },
    headingHtml: {
      control: 'text',
      description: 'HTML content for the panel heading (alternative to headingText)',
    },
    bodyText: {
      control: 'text',
      description: 'Plain text for the panel body',
    },
    bodyHtml: {
      control: 'text',
      description: 'HTML content for the panel body (alternative to bodyText)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the panel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

/**
 * Default panel with a heading and body text - typical confirmation message
 */
export const Default: Story = {
  args: {
    headingText: 'Application complete',
    bodyText: 'Your reference number is HDJ2123F',
    headingLevel: 1,
  },
};

/**
 * Panel with HTML content for more complex formatting
 */
export const WithHTMLContent: Story = {
  args: {
    headingHtml: 'Registration <strong>successful</strong>',
    bodyHtml: 'Your reference number is <strong>HDJ2123F</strong><br><br>We have sent you a confirmation email.',
    headingLevel: 1,
  },
};

/**
 * Panel with React children for maximum flexibility
 */
export const WithChildren: Story = {
  render: () => (
    <Panel headingText="Payment confirmed" headingLevel={1}>
      <p>Your payment reference is <strong>CXM001</strong></p>
      <p>
        You will receive a confirmation email at <br />
        <strong>email@example.com</strong>
      </p>
      <p>
        <a href="#" style={{ color: 'white' }}>
          Download your receipt (PDF, 1.2MB)
        </a>
      </p>
    </Panel>
  ),
};

/**
 * Minimal panel with just a heading - simple confirmation
 */
export const HeadingOnly: Story = {
  args: {
    headingText: 'Thank you',
    headingLevel: 1,
  },
};

/**
 * Panel demonstrating different heading levels
 */
export const DifferentHeadingLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Panel headingText="H1: Application complete" headingLevel={1} bodyText="Using h1 heading level" />
      <Panel headingText="H2: Application complete" headingLevel={2} bodyText="Using h2 heading level" />
      <Panel headingText="H3: Application complete" headingLevel={3} bodyText="Using h3 heading level" />
    </div>
  ),
};

/**
 * Panel with longer content to test text wrapping and layout
 */
export const LongContent: Story = {
  args: {
    headingText: 'Application successfully submitted',
    bodyText: 'We have received your application for Universal Credit. Your reference number is UC-HDJ2123F-2024. We will contact you within 5 working days to let you know what happens next. You can use your reference number to track your application online.',
    headingLevel: 1,
  },
};

/**
 * Multiple panels showing different use cases
 */
export const MultiplePanels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Panel 
        headingText="Appointment booked" 
        headingLevel={2}
        bodyText="Your appointment is confirmed for Monday 15 January 2024 at 2:30pm"
      />
      <Panel 
        headingText="Survey completed" 
        headingLevel={2}
        bodyText="Thank you for your feedback. Your responses have been recorded."
      />
      <Panel 
        headingText="Account created" 
        headingLevel={2}
        bodyText="You can now access your NHS account using your email and password."
      />
    </div>
  ),
};
