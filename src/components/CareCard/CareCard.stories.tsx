import type { Meta, StoryObj } from '@storybook/react';
import { CareCard } from './CareCard';

const meta: Meta<typeof CareCard> = {
  title: 'NHS/Components/CareCard',
  component: CareCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The CareCard component helps users identify and understand the care they need, who to contact and how quickly. 
Care cards are specifically designed for medical guidance scenarios where users need to decide when and where to get care.

## Features
- Three urgency levels: non-urgent (blue), urgent (red), emergency (red with black content)
- Accessibility compliant with proper headings and screen reader support  
- Hidden text for screen readers to indicate urgency level
- Responsive design with design tokens
- Clear visual hierarchy with colored headers and arrow indicators

## When to use
- Tell users to take action to get medical advice or help
- Help users understand the level of urgency for their symptoms
- Provide clear guidance on who to contact and how quickly

## When not to use
- For information that's not about helping users understand the care they need now
- In question pages in a transactional journey
- To warn users about something (use warning callout instead)
- To signpost users to start a digital service (use action link instead)
- For brief summaries of content or tasks (use regular card instead)

## Content guidance
- Use clearly worded headings that tell users what they need to do
- Give the card a short heading using "if:" format (e.g., "Call 111 if:")
- Make the card self-contained with specific information
- Keep signposting simple (ideally 1 service, maximum 2)
        `
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['non-urgent', 'urgent', 'emergency'],
      description: 'The urgency level of the care card'
    },
    heading: {
      control: 'text',
      description: 'Card heading text (required)'
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Semantic heading level for accessibility'
    },
    description: {
      control: 'text',
      description: 'Card description text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CareCard>;

/**
 * Default CareCard showing the most basic usage - a non-urgent care card with simple text.
 * This is the most commonly used variant for general medical advice.
 */
export const Default: Story = {
  args: {
    type: 'non-urgent',
    heading: 'Speak to a GP if:',
    description: 'You think you have symptoms of a condition and you\'re not sure what to do',
    headingLevel: 2,
  },
};

// Non-urgent care card stories
export const NonUrgent: Story = {
  args: {
    type: 'non-urgent',
    heading: 'Speak to a GP if:',
    description: 'You think you have symptoms of a condition and you\'re not sure what to do'
  }
};

export const NonUrgentWithList: Story = {
  name: 'Non-urgent with List',
  args: {
    type: 'non-urgent',
    heading: 'Speak to a GP if:',
  },
  render: (args) => (
    <CareCard {...args}>
      <ul>
        <li>your symptoms are not getting better</li>
        <li>you're worried about your condition</li>
        <li>you need medical advice about your treatment</li>
      </ul>
    </CareCard>
  )
};

export const NonUrgentPharmacist: Story = {
  name: 'Non-urgent - Pharmacist',
  args: {
    type: 'non-urgent',
    heading: 'Ask a pharmacist for advice if:',
    description: 'You need help with managing your medicines or want advice about over-the-counter treatments'
  }
};

// Urgent care card stories
export const Urgent: Story = {
  args: {
    type: 'urgent',
    heading: 'Ask for an urgent GP appointment if:',
    description: 'You have severe symptoms that need immediate medical attention'
  }
};

export const UrgentWithSymptoms: Story = {
  name: 'Urgent with Symptoms',
  args: {
    type: 'urgent',
    heading: 'Ask for an urgent GP appointment if:',
  },
  render: (args) => (
    <CareCard {...args}>
      <ul>
        <li>you have severe pain that's getting worse</li>
        <li>you have a high temperature that won't come down</li>
        <li>you're finding it difficult to breathe</li>
        <li>you're vomiting and can't keep fluids down</li>
      </ul>
    </CareCard>
  )
};

export const Urgent111: Story = {
  name: 'Urgent - Call 111',
  args: {
    type: 'urgent',
    heading: 'Call 111 if:',
    description: 'You need medical help fast but it\'s not a 999 emergency'
  }
};

// Emergency care card stories
export const Emergency: Story = {
  args: {
    type: 'emergency',
    heading: 'Call 999 if:',
    description: 'You think someone is seriously ill or injured and their life is at risk'
  }
};

export const EmergencyWithSymptoms: Story = {
  name: 'Emergency with Symptoms',
  args: {
    type: 'emergency',
    heading: 'Call 999 if:',
  },
  render: (args) => (
    <CareCard {...args}>
      <ul>
        <li>someone is unconscious</li>
        <li>someone is having difficulty breathing</li>
        <li>someone is having chest pain</li>
        <li>someone is having a severe allergic reaction</li>
      </ul>
    </CareCard>
  )
};

export const EmergencyMentalHealth: Story = {
  name: 'Emergency - Mental Health',
  args: {
    type: 'emergency',
    heading: 'Call 999 or go to A&E if:',
  },
  render: (args) => (
    <CareCard {...args}>
      <ul>
        <li>you think you might seriously hurt yourself or someone else</li>
        <li>you're having thoughts of suicide and you've made a plan to kill yourself</li>
      </ul>
      <p>Stay with the person until help arrives. Remove anything they could use to harm themselves.</p>
    </CareCard>
  )
};

// Multiple care cards example
export const MultipleCareCards: Story = {
  name: 'Multiple Care Cards',
  render: () => (
    <div>
      <h2>When to get help for chest pain</h2>
      
      <CareCard
        type="emergency"
        heading="Call 999 if:"
      >
        <ul>
          <li>you have sudden, severe chest pain</li>
          <li>you have chest pain that does not go away</li>
          <li>you're having trouble breathing</li>
        </ul>
      </CareCard>
      
      <CareCard
        type="urgent"
        heading="Call 111 if:"
      >
        <ul>
          <li>you have chest pain that comes and goes</li>
          <li>you have chest pain when you exercise</li>
          <li>you're worried about your chest pain</li>
        </ul>
      </CareCard>
      
      <CareCard
        type="non-urgent"
        heading="Speak to a GP if:"
      >
        <ul>
          <li>you have mild chest pain that's been going on for a while</li>
          <li>you want to discuss your symptoms</li>
        </ul>
      </CareCard>
    </div>
  )
};

// Accessibility example
export const AccessibilityFeatures: Story = {
  name: 'Accessibility Features',
  render: () => (
    <div>
      <h2>Care card accessibility</h2>
      <p>Each care card includes hidden text for screen readers to indicate the level of urgency.</p>
      
      <CareCard
        type="urgent"
        heading="Ask for an urgent GP appointment if:"
        headingLevel={3}
        description="This example shows how screen readers announce 'Urgent advice: Ask for an urgent GP appointment if:'"
        aria-label="Example care card showing accessibility features"
      />
    </div>
  )
};

// Content examples
export const ContentGuidanceExamples: Story = {
  name: 'Content Guidance Examples',
  render: () => (
    <div>
      <h2>Good content examples</h2>
      
      <h3>Clear, action-oriented headings</h3>
      <CareCard
        type="urgent"
        heading="Ask for an urgent GP appointment if:"
        description="Clear heading tells users exactly what to do"
      />
      
      <h3>Specific symptoms</h3>
      <CareCard
        type="non-urgent"
        heading="Speak to a GP if:"
      >
        <ul>
          <li>you have a persistent cough for more than 3 weeks</li>
          <li>you're coughing up blood</li>
          <li>you're losing weight without trying</li>
        </ul>
      </CareCard>
      
      <h3>Two colons format</h3>
      <CareCard
        type="emergency"
        heading="Call 999 if you have:"
      >
        <ul>
          <li>chest pain that feels heavy, tight or crushing</li>
          <li>pain that spreads to your arms, back, neck or jaw</li>
        </ul>
        <p>Call even if you're not sure it's a heart attack.</p>
      </CareCard>
    </div>
  )
};
