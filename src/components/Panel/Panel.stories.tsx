// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
