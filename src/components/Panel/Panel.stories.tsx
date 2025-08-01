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
 * Panel with different heading levels for proper document hierarchy.
 */
export const HeadingLevels: Story = {
  render: () => (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-full">
        <h1>Page Title (H1)</h1>
        <Panel 
          headingText="Main panel heading (H2)" 
          headingLevel={2}
          bodyText="This panel uses H2 which is appropriate after an H1 page title."
        />
        <h2>Section Title (H2)</h2>
        <Panel 
          headingText="Subsection panel (H3)" 
          headingLevel={3}
          bodyText="This panel uses H3 which follows the document hierarchy."
        />
        <Panel 
          headingText="Detail panel (H4)" 
          headingLevel={4}
          bodyText="This panel uses H4 for more specific information."
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing different heading levels maintaining proper document hierarchy.',
      },
    },
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

/**
 * Panel for success confirmation messages.
 */
export const SuccessConfirmation: Story = {
  args: {
    headingText: 'Prescription ordered',
    children: (
      <>
        <p>Your prescription has been sent to:</p>
        <p><strong>Boots Pharmacy<br />
        123 High Street<br />
        London SW1A 1AA</strong></p>
        <p>It will be ready for collection in <strong>2-3 working days</strong>.</p>
        <p>You will receive an SMS when it's ready.</p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel used for confirming successful completion of an action with detailed next steps.',
      },
    },
  },
};

/**
 * Panel for appointment or booking confirmations.
 */
export const AppointmentConfirmation: Story = {
  args: {
    headingText: 'Appointment booked',
    children: (
      <>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px', color: '#005eb8' }}>GP appointment</h3>
          <p style={{ marginBottom: '4px' }}><strong>Date:</strong> Monday 16 October 2023</p>
          <p style={{ marginBottom: '4px' }}><strong>Time:</strong> 2:30pm to 2:45pm</p>
          <p style={{ marginBottom: '4px' }}><strong>Location:</strong> Room 3, City Medical Centre</p>
          <p><strong>Doctor:</strong> Dr Sarah Johnson</p>
        </div>
        <p>Add this appointment to your calendar or save the details to your phone.</p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel showing appointment confirmation with all relevant details clearly formatted.',
      },
    },
  },
};

/**
 * Panel for information highlights or announcements.
 */
export const ImportantInformation: Story = {
  args: {
    headingText: 'Service update',
    children: (
      <>
        <p>From <strong>1 November 2023</strong>, you will need to use your NHS login to access this service.</p>
        <p>If you do not have an NHS login, you can create one in a few minutes. You will need:</p>
        <ul>
          <li>an email address</li>
          <li>a UK mobile phone number</li>
        </ul>
        <p><a href="#" onClick={(e) => e.preventDefault()}>Find out more about NHS login</a></p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel used to highlight important service changes or announcements that users need to be aware of.',
      },
    },
  },
};

/**
 * Multiple panels showing different use cases together.
 */
export const MultiplePanels: Story = {
  render: () => (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-full">
        <Panel 
          headingText="Your application is being processed" 
          bodyText="We will email you within 5 working days to let you know the outcome."
          style={{ marginBottom: '32px' }}
        />
        
        <Panel 
          headingText="What happens next"
          style={{ marginBottom: '32px' }}
        >
          <ol>
            <li>We will review your application</li>
            <li>We may contact you for more information</li>
            <li>You will receive a decision by email</li>
          </ol>
        </Panel>
        
        <Panel 
          bodyText="If you need help with your application, call us on 0300 123 1234 (Monday to Friday, 8am to 6pm)."
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple panels used together to organize related information into distinct sections.',
      },
    },
  },
};

/**
 * Minimal panel for testing edge cases.
 */
export const Minimal: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Minimal panel with no content to test edge cases and empty state handling.',
      },
    },
  },
};
