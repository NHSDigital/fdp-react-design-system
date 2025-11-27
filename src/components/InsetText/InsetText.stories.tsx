// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
