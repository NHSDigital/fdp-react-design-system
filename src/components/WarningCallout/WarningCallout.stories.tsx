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

export const WithImportantInHeading: Story = {
  args: {
    heading: 'Important deadline approaching',
    text: 'Your application must be submitted by 31 March 2024. Late submissions will not be accepted.',
  },
  parameters: {
    docs: {
      description: {
        story: 'When the heading already contains "Important", no prefix is added and a colon is appended.',
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

export const DifferentHeadingLevels: Story = {
  args: {
    heading: 'Complete all required fields',
    headingLevel: 2,
    text: 'Some fields marked with an asterisk (*) are required. Your application cannot be processed without them.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning callout with a custom heading level for proper document structure.',
      },
    },
  },
};

export const LegalConsequences: Story = {
  args: {
    heading: 'Penalty for late submission',
    text: 'If you submit your tax return after the deadline, you may have to pay a penalty. The penalty is usually £100, but it can be more if your return is very late.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a warning callout informing users about legal or financial consequences.',
      },
    },
  },
};

export const HealthAndSafety: Story = {
  args: {
    heading: 'Take precautions when handling chemicals',
    html: `
      <p>Always wear appropriate protective equipment:</p>
      <ul>
        <li>Safety goggles</li>
        <li>Gloves</li>
        <li>Lab coat</li>
      </ul>
      <p><strong>Failure to follow safety procedures may result in injury.</strong></p>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: 'Health and safety warning with emphasized consequences.',
      },
    },
  },
};

export const ProcessDeadline: Story = {
  args: {
    heading: 'Appeal deadline',
    children: (
      <>
        <p>You have <strong>28 days</strong> from the date of this letter to appeal this decision.</p>
        <p>If you do not appeal within this time, the decision will become final and you will not be able to challenge it later.</p>
        <p>
          <a href="/appeal-form" className="nhsuk-link">
            Submit your appeal online
          </a>
        </p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Time-sensitive process warning with action link.',
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

// Multiple warning callouts to show heading hierarchy
export const MultipleWarnings: Story = {
  render: () => (
    <div>
      <h1>Application Form</h1>
      
      <WarningCallout 
        heading="Check eligibility requirements"
        headingLevel={2}
        text="Before starting your application, make sure you meet all eligibility criteria. Ineligible applications will be rejected."
      />
      
      <h2>Personal Details</h2>
      <p>Enter your personal information below.</p>
      
      <WarningCallout 
        heading="Important: Provide accurate information"
        headingLevel={3}
        text="All information must be accurate and up to date. Providing false information is a criminal offense."
      />
      
      <h2>Supporting Documents</h2>
      <p>Upload the required documents to support your application.</p>
      
      <WarningCallout 
        heading="Document requirements"
        headingLevel={3}
        html="<p>Documents must be:</p><ul><li>Clear and legible</li><li>In English or with certified translation</li><li>Less than 6 months old</li></ul>"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple warning callouts showing proper heading hierarchy and different content types.',
      },
    },
  },
};
