import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'NHS/Content/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
NHS Panel component for displaying important content in a visually distinct container.

Panels are used to highlight key information or create visual emphasis for specific content areas. They feature a distinctive background and optional headings for content organization.

## When to use
- To highlight important information that needs to stand out from surrounding content
- For confirmation messages or status updates
- To group related content in a visually distinct way
- For call-to-action sections that need emphasis

## When not to use
- For error messages (use Error Summary or Error Message instead)
- For warnings (use Warning Callout instead)
- For large amounts of body text
- As a general layout container
        `,
      },
    },
  },
  argTypes: {
    headingText: {
      description: 'Plain text content for the panel heading',
      control: 'text',
    },
    headingHtml: {
      description: 'HTML content for the panel heading (takes precedence over headingText)',
      control: 'text',
    },
    headingLevel: {
      description: 'HTML heading level (h1-h6) for the panel heading',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
      table: {
        defaultValue: { summary: '2' },
      },
    },
    bodyText: {
      description: 'Plain text content for the panel body',
      control: 'text',
    },
    bodyHtml: {
      description: 'HTML content for the panel body (takes precedence over bodyText)',
      control: 'text',
    },
    children: {
      description: 'React children content for the panel body (takes precedence over bodyText and bodyHtml)',
      control: false,
    },
    className: {
      description: 'Additional CSS classes to apply to the panel',
      control: 'text',
    },
    id: {
      description: 'HTML id attribute for the panel',
      control: 'text',
    },
  },
  args: {
    headingLevel: 2,
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default panel with heading and body text content.
 */
export const Default: Story = {
  args: {
    headingText: 'Application complete',
    bodyText: 'Your application has been successfully submitted. We will send you an email confirmation within 24 hours.',
  },
};

/**
 * Panel with only a heading, useful for simple status messages.
 */
export const HeadingOnly: Story = {
  args: {
    headingText: 'Registration confirmed',
  },
};

/**
 * Panel with only body content, useful for highlighted text without a formal heading.
 */
export const BodyOnly: Story = {
  args: {
    bodyText: 'This service will be unavailable for maintenance between 2am and 4am on Sunday 15 October.',
  },
};

/**
 * Panel using HTML content for rich text formatting in heading and body.
 */
export const WithHtmlContent: Story = {
  args: {
    headingHtml: 'Your <strong>GP registration</strong> is complete',
    bodyHtml: '<p>We have sent confirmation to:</p><ul><li><strong>Email:</strong> patient@example.com</li><li><strong>SMS:</strong> 07700 900 123</li></ul>',
  },
};

/**
 * Panel with React children for complex content structure.
 */
export const WithChildren: Story = {
  args: {
    headingText: 'Next steps',
    children: (
      <>
        <p>You will need to:</p>
        <ol>
          <li>Attend your appointment on <strong>Monday 16 October at 2:30pm</strong></li>
          <li>Bring your NHS number and a form of ID</li>
          <li>Complete the health questionnaire beforehand</li>
        </ol>
        <p>If you need to cancel or reschedule, call <a href="tel:01234567890">01234 567 890</a>.</p>
      </>
    ),
  },
};

/**
 * Panel with custom styling and attributes.
 */
export const WithCustomAttributes: Story = {
  args: {
    headingText: 'Custom panel',
    bodyText: 'This panel demonstrates custom className and HTML attributes.',
    className: 'custom-panel-class',
    id: 'custom-panel-id',
    'data-testid': 'custom-panel',
    'aria-label': 'Custom panel with additional attributes',
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel with custom CSS class, id, and additional HTML attributes for testing or styling purposes.',
      },
    },
  },
};

