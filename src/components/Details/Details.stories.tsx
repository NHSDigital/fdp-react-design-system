import type { Meta, StoryObj } from '@storybook/react';
import { Details } from './Details';

const meta: Meta<typeof Details> = {
  title: 'NHS/Content/Details',
  component: Details,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Progressive disclosure widget that allows users to show and hide additional content. Includes support for both standard details and expander card variant.'
      }
    }
  },
  argTypes: {
    summaryText: {
      control: 'text',
      description: 'Text for the summary (visible part that can be clicked)'
    },
    summaryHtml: {
      control: 'text',
      description: 'HTML content for the summary (overrides summaryText if provided)'
    },
    text: {
      control: 'text',
      description: 'Text content for the details body'
    },
    html: {
      control: 'text',
      description: 'HTML content for the details body (overrides text if provided)'
    },
    open: {
      control: 'boolean',
      description: 'Whether the details should be open by default'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    id: {
      control: 'text',
      description: 'Unique identifier'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Default: Story = {
  args: {
    summaryText: 'Where can I find my NHS number?',
    text: 'Your NHS number is a 10 digit number, like 485 777 3456. You can find your NHS number on any document sent to you by the NHS. This may include: prescriptions, test results, hospital letters, appointment letters, or your NHS medical card.'
  }
};

export const WithHTMLContent: Story = {
  args: {
    summaryText: 'What services are covered by the NHS?',
    html: `
      <p>The NHS provides a comprehensive range of health services, the vast majority of which are free at the point of use for residents of the United Kingdom.</p>
      <ul>
        <li><strong>Primary care</strong> - GP services, dental care, opticians</li>
        <li><strong>Secondary care</strong> - Hospital services, specialist consultations</li>
        <li><strong>Emergency care</strong> - A&E, ambulance services</li>
        <li><strong>Mental health services</strong> - Counselling, therapy, specialist support</li>
      </ul>
      <p>Some services may have charges, such as prescriptions, dental treatment, and optical services.</p>
    `
  }
};

export const OpenByDefault: Story = {
  args: {
    summaryText: 'Important information about your appointment',
    text: 'Please arrive 15 minutes before your scheduled appointment time. Bring a form of photo ID and your appointment letter. If you need to cancel or reschedule, please give us at least 24 hours notice.',
    open: true
  }
};

export const WithHTMLSummary: Story = {
  args: {
    summaryHtml: 'What should I do if I have <strong>urgent</strong> symptoms?',
    html: `
      <p>If you have urgent symptoms that are not life-threatening, you have several options:</p>
      <ol>
        <li><strong>NHS 111</strong> - Call 111 for urgent medical help and advice</li>
        <li><strong>Walk-in centres</strong> - Visit your local walk-in centre or urgent care centre</li>
        <li><strong>Pharmacy</strong> - Speak to a pharmacist for minor ailments</li>
        <li><strong>GP out-of-hours</strong> - Contact your GP practice for urgent but non-emergency care</li>
      </ol>
      <p><strong>Call 999</strong> if you have a life-threatening emergency.</p>
    `
  }
};

export const MedicalFAQ: Story = {
  render: () => (
    <div>
      <h2>Frequently Asked Questions</h2>
      
      <Details
        summaryText="How do I register with a GP?"
        text="To register with a GP practice, you'll need to fill in a registration form. You can get this from the practice or download it from their website. You'll usually need to provide proof of identity and address. Registration is free and you have the right to register with any practice that accepts patients in your area."
      />
      
      <Details
        summaryText="What should I bring to my hospital appointment?"
        html={`
          <p>Please bring the following items to your hospital appointment:</p>
          <ul>
            <li>Your appointment letter</li>
            <li>A list of current medications</li>
            <li>Any recent test results or X-rays</li>
            <li>A form of photo identification</li>
            <li>Your NHS number (if known)</li>
          </ul>
          <p>Arrive 15 minutes early for check-in and registration.</p>
        `}
      />
      
      <Details
        summaryText="How can I access my medical records?"
        text="You have the right to access your medical records. Contact your GP practice or hospital to request access. You may need to fill in a form and provide ID. Most records are available within 30 days, though some older records may take longer to retrieve."
      />
    </div>
  )
};

export const ExpanderGroup: Story = {
  render: () => (
    <div className="nhsuk-expander-group">
      <h2>Mental Health Support Options</h2>
      
      <Details
        summaryText="Self-help resources"
        html={`
          <p>There are many self-help resources available to support your mental health:</p>
          <ul>
            <li><strong>NHS Apps</strong> - Downloadable apps for anxiety, depression, and stress management</li>
            <li><strong>Online courses</strong> - Free cognitive behavioural therapy (CBT) courses</li>
            <li><strong>Mindfulness</strong> - Meditation and breathing exercises</li>
            <li><strong>Exercise</strong> - Physical activity programs designed for mental wellbeing</li>
          </ul>
        `}
      />
      
      <Details
        summaryText="Talking therapies"
        html={`
          <p>Professional talking therapies available through the NHS include:</p>
          <ul>
            <li><strong>Counselling</strong> - One-to-one sessions with a trained counsellor</li>
            <li><strong>Cognitive Behavioural Therapy (CBT)</strong> - Helps change negative thought patterns</li>
            <li><strong>Group therapy</strong> - Sessions with others facing similar challenges</li>
            <li><strong>Family therapy</strong> - Involving family members in the therapeutic process</li>
          </ul>
          <p>You can refer yourself or ask your GP for a referral.</p>
        `}
      />
      
      <Details
        summaryText="Crisis support"
        html={`
          <p>If you're in crisis or having thoughts of self-harm:</p>
          <ul>
            <li><strong>Emergency services</strong> - Call 999 if you're in immediate danger</li>
            <li><strong>Samaritans</strong> - Call 116 123 for free, confidential support (24/7)</li>
            <li><strong>Crisis teams</strong> - Contact your local mental health crisis team</li>
            <li><strong>A&E</strong> - Go to your nearest hospital emergency department</li>
          </ul>
          <p>Remember: there is always help available, and you are not alone.</p>
        `}
      />
    </div>
  )
};

export const Playground: Story = {
  args: {
    summaryText: 'Click to reveal more information',
    text: 'This is the hidden content that appears when the details element is expanded.',
    open: false,
  }
};
