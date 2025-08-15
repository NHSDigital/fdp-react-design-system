// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { SummaryList } from './SummaryList';

const meta: Meta<typeof SummaryList> = {
  title: 'NHS/Content/SummaryList',
  component: SummaryList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
NHS Summary List component for displaying key information as name-value pairs with optional actions.

Summary lists present information as a series of rows with terms (keys) and descriptions (values). They can include action links to allow users to change or edit the information.

## When to use
- To summarize information a user has provided
- To display structured data in a scannable format
- For check and confirmation pages
- To show form data before submission
- For account or profile information displays

## When not to use
- For large amounts of unstructured text (use regular paragraphs instead)
- For data that would be better presented in a table format
- For content that doesn't follow a clear key-value pattern

## Accessibility
- Uses semantic \`<dl>\`, \`<dt>\`, and \`<dd>\` elements for proper structure
- Screen readers can navigate between terms and definitions
- Action links include visually hidden text for context
- Focus states are clearly indicated
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of summary list items to display',
      control: { type: 'object' },
    },
    noBorder: {
      description: 'Whether to display the summary list without borders',
      control: { type: 'boolean' },
    },
    className: {
      description: 'Additional CSS classes to apply to the summary list',
      control: { type: 'text' },
    },
  },
  // Removed 'autodocs' tag; dedicated docs page exists
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example
export const Default: Story = {
  args: {
    items: [
      {
        key: { text: 'Name' },
        value: { text: 'Sarah Phillips' },
      },
      {
        key: { text: 'Date of birth' },
        value: { text: '5 January 1978' },
      },
      {
        key: { text: 'Contact information' },
        value: { text: '72 Guild Street, London, SE23 6FH' },
      },
      {
        key: { text: 'Contact details' },
        value: { 
          html: '07700 900457<br />sarah.phillips@example.com' 
        },
      },
    ],
  },
};
