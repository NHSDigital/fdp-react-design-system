import type { Meta, StoryObj } from '@storybook/react';
import { InsetText } from './InsetText';

const meta: Meta<typeof InsetText> = {
  title: 'NHS/Content/InsetText',
  component: InsetText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
NHS Inset Text component for highlighting important content that stands out from the main body text.

Inset text draws attention to important content on the page through visual styling that differentiates it from surrounding text. It uses distinctive background and border styling to create emphasis.

## When to use
- To highlight important information that users need to be aware of
- For supplementary content that provides additional context
- To emphasize key points or warnings within content
- For quotes or testimonials that need visual prominence

## When not to use
- For error messages (use Error Message or Error Summary instead)
- For success confirmations (use Panel instead)
- For primary calls to action (use Button or Action Link instead)
- For large amounts of body text
        `,
      },
    },
  },
  argTypes: {
    text: {
      description: 'Plain text content for the inset text',
      control: 'text',
    },
    html: {
      description: 'HTML content for the inset text (takes precedence over text)',
      control: 'text',
    },
    children: {
      description: 'React children content (takes precedence over text and html)',
      control: false,
    },
    className: {
      description: 'Additional CSS classes to apply to the inset text',
      control: 'text',
    },
    id: {
      description: 'HTML id attribute for the inset text',
      control: 'text',
    },
  },
} satisfies Meta<typeof InsetText>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default inset text with simple text content.
 */
export const Default: Story = {
  args: {
    text: 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
  },
};

/**
 * Inset text with HTML content for rich formatting.
 */
export const WithHtmlContent: Story = {
  args: {
    html: '<p>You can <strong>cancel your registration</strong> up to 7 days before your appointment.</p><p>Call us on <a href="tel:01234567890">01234 567 890</a> to cancel.</p>',
  },
};

/**
 * Inset text with React children for complex content structure.
 */
export const WithChildren: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>You must tell DVLA if you develop a medical condition</strong> that affects your ability to drive safely.
        </p>
        <p>This includes:</p>
        <ul>
          <li>diabetes</li>
          <li>epilepsy</li>
          <li>strokes</li>
          <li>heart conditions</li>
        </ul>
        <p>
          You can <a href="#" onClick={(e) => e.preventDefault()}>check if you need to tell DVLA about your condition</a>.
        </p>
      </>
    ),
  },
};

/**
 * Inset text used for important procedural information.
 */
export const ProceduralInformation: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>Before your appointment:</strong>
        </p>
        <ul>
          <li>Take your medication as normal</li>
          <li>Eat and drink as normal</li>
          <li>Bring a list of your current medications</li>
          <li>Arrive 15 minutes early for check-in</li>
        </ul>
        <p>If you need to reschedule, give us at least 24 hours notice.</p>
      </>
    ),
  },
};

/**
 * Inset text for service availability or timing information.
 */
export const ServiceInformation: Story = {
  args: {
    text: 'This service is available Monday to Friday, 8am to 6pm (except bank holidays). Emergency appointments may be available outside these hours.',
  },
};

/**
 * Inset text with a quote or testimonial.
 */
export const Quote: Story = {
  args: {
    children: (
      <>
        <p>
          "The online booking system made it so much easier to manage my appointments. I can see all my upcoming visits and change them if needed."
        </p>
        <p>
          <strong>Sarah, patient from Manchester</strong>
        </p>
      </>
    ),
  },
};

/**
 * Inset text for cost or pricing information.
 */
export const CostInformation: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>Prescription charges</strong>
        </p>
        <p>Each prescription item costs £9.65. You may be entitled to free prescriptions if you:</p>
        <ul>
          <li>are 60 or over</li>
          <li>are under 16</li>
          <li>have certain medical conditions</li>
          <li>receive certain benefits</li>
        </ul>
        <p>
          <a href="#" onClick={(e) => e.preventDefault()}>Check if you can get free prescriptions</a>
        </p>
      </>
    ),
  },
};

/**
 * Inset text for legal or compliance information.
 */
export const LegalInformation: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>Data protection notice:</strong> Your personal information will be stored securely and used only for the purposes of your healthcare. 
          We will not share your information with third parties without your consent, except where required by law.
        </p>
        <p>
          Read our <a href="#" onClick={(e) => e.preventDefault()}>privacy policy</a> for more details.
        </p>
      </>
    ),
  },
};

/**
 * Inset text with contact information.
 */
export const ContactInformation: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>Need help?</strong>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:01234567890">01234 567 890</a><br />
          <strong>Email:</strong> <a href="mailto:help@example.nhs.uk">help@example.nhs.uk</a><br />
          <strong>Hours:</strong> Monday to Friday, 9am to 5pm
        </p>
        <p>For urgent queries outside these hours, call NHS 111.</p>
      </>
    ),
  },
};

/**
 * Inset text with custom styling and attributes.
 */
export const WithCustomAttributes: Story = {
  args: {
    text: 'This inset text demonstrates custom className and HTML attributes.',
    className: 'custom-inset-class',
    id: 'custom-inset-id',
    role: 'note',
    'aria-label': 'Important note about the service',
  } as any,
  parameters: {
    docs: {
      description: {
        story: 'Inset text with custom CSS class, id, and additional HTML attributes for testing or styling purposes.',
      },
    },
  },
};

/**
 * Multiple inset text blocks showing different use cases.
 */
export const MultipleInsetTexts: Story = {
  render: () => (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-full">
        <h2>Multiple inset text examples</h2>
        
        <InsetText 
          text="Standard inset text for highlighting important information within content."
          style={{ marginBottom: '32px' }}
        />
        
        <InsetText style={{ marginBottom: '32px' }}>
          <p><strong>Inset text with structured content:</strong></p>
          <ul>
            <li>First important point</li>
            <li>Second important point</li>
            <li>Third important point</li>
          </ul>
        </InsetText>
        
        <InsetText>
          <p>
            Final inset text with a <a href="#" onClick={(e) => e.preventDefault()}>link to more information</a> and 
            some <strong>emphasized text</strong> for additional context.
          </p>
        </InsetText>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple inset text blocks used together to highlight different types of information.',
      },
    },
  },
};

/**
 * Minimal inset text for testing edge cases.
 */
export const Minimal: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Minimal inset text with no content to test edge cases and empty state handling.',
      },
    },
  },
};
