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
  tags: ['autodocs'],
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

// With actions
export const WithActions: Story = {
  args: {
    items: [
      {
        key: { text: 'Name' },
        value: { text: 'Sarah Phillips' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'name',
            },
          ],
        },
      },
      {
        key: { text: 'Date of birth' },
        value: { text: '5 January 1978' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'date of birth',
            },
          ],
        },
      },
      {
        key: { text: 'Contact information' },
        value: { text: '72 Guild Street, London, SE23 6FH' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact information',
            },
          ],
        },
      },
      {
        key: { text: 'Contact details' },
        value: { 
          html: '07700 900457<br />sarah.phillips@example.com' 
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact details',
            },
          ],
        },
      },
    ],
  },
};

// Multiple actions
export const WithMultipleActions: Story = {
  args: {
    items: [
      {
        key: { text: 'Name' },
        value: { text: 'Sarah Phillips' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'name',
            },
            {
              href: '#',
              text: 'Remove',
              visuallyHiddenText: 'name',
            },
          ],
        },
      },
      {
        key: { text: 'Previous application number' },
        value: { text: '502135326' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'previous application number',
            },
            {
              href: '#',
              text: 'Remove',
              visuallyHiddenText: 'previous application number',
            },
          ],
        },
      },
      {
        key: { text: 'Licence type' },
        value: { text: 'For personal use' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'licence type',
            },
            {
              href: '#',
              text: 'Remove',
              visuallyHiddenText: 'licence type',
            },
          ],
        },
      },
    ],
  },
};

// Without borders
export const WithoutBorders: Story = {
  args: {
    noBorder: true,
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

// With React children content
export const WithReactContent: Story = {
  args: {
    items: [
      {
        key: { 
          children: <strong>Patient name</strong>
        },
        value: { 
          children: (
            <div>
              <div>Sarah Phillips</div>
              <div style={{ fontSize: '14px', color: '#626a6e' }}>NHS Number: 485 777 3456</div>
            </div>
          )
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'patient name',
            },
          ],
        },
      },
      {
        key: { text: 'Appointment type' },
        value: { 
          children: (
            <div>
              <div>GP Consultation</div>
              <div style={{ fontSize: '14px', color: '#626a6e' }}>Duration: 15 minutes</div>
            </div>
          )
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'appointment type',
            },
          ],
        },
      },
      {
        key: { text: 'Preferred date and time' },
        value: { 
          children: (
            <div>
              <div>Wednesday 15 March 2023</div>
              <div style={{ fontSize: '14px', color: '#626a6e' }}>10:30am - 10:45am</div>
            </div>
          )
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'preferred date and time',
            },
          ],
        },
      },
    ],
  },
};

// Missing information example
export const WithMissingInformation: Story = {
  args: {
    items: [
      {
        key: { text: 'Name' },
        value: { text: 'Sarah Phillips' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'name',
            },
          ],
        },
      },
      {
        key: { text: 'Date of birth' },
        value: { text: '5 January 1978' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'date of birth',
            },
          ],
        },
      },
      {
        key: { text: 'Contact information' },
        value: { 
          children: (
            <span style={{ color: '#626a6e', fontStyle: 'italic' }}>
              Not provided
            </span>
          )
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Add',
              visuallyHiddenText: 'contact information',
            },
          ],
        },
      },
      {
        key: { text: 'Contact details' },
        value: { text: '07700 900457' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact details',
            },
          ],
        },
      },
    ],
  },
};

// Check your answers page example
export const CheckYourAnswers: Story = {
  args: {
    items: [
      {
        key: { text: 'Previous application number' },
        value: { text: '502135326' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'previous application number',
            },
          ],
        },
      },
      {
        key: { text: 'Licence type' },
        value: { text: 'Import licence' },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'licence type',
            },
          ],
        },
      },
      {
        key: { text: 'Home address' },
        value: { 
          html: '72 Guild Street<br />London<br />SE23 6FH' 
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'home address',
            },
          ],
        },
      },
      {
        key: { text: 'Contact details' },
        value: { 
          html: 'Email address: sarah.phillips@example.com<br />Telephone number: 07700 900457' 
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact details',
            },
          ],
        },
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a summary list used on a "Check your answers" page before form submission.',
      },
    },
  },
};
