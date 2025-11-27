// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
