import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: `
The List component provides accessible, NHS-styled lists for organizing content.

## Features

- **Multiple Types**: Bullet points, numbered lists, or plain lists
- **Size Variants**: Small, medium (default), and large sizing options
- **Border Option**: Add borders between list items
- **Accessibility**: Proper semantic markup and keyboard navigation
- **Compound Component**: Use \`List.Item\` for individual list items

## Usage

\`\`\`tsx
import { List } from '@fergusbisset/nhs-fdp-design-system';

// Basic bullet list
<List type="bullet">
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
</List>

// Numbered list with borders
<List type="number" border>
  <List.Item>Step one</List.Item>
  <List.Item>Step two</List.Item>
</List>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['bullet', 'number', 'none'],
      description: 'The type of list marker to display',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the list text',
    },
    border: {
      control: 'boolean',
      description: 'Whether to add borders between list items',
    },
    as: {
      control: 'select',
      options: ['ul', 'ol'],
      description: 'Override the HTML element used',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BulletList: Story = {
  args: {
    type: 'bullet',
  },
  render: (args) => (
    <List {...args}>
      <List.Item>First item in the bullet list</List.Item>
      <List.Item>Second item with more detailed content that spans multiple lines to show how the text wraps</List.Item>
      <List.Item>Third item</List.Item>
      <List.Item>Fourth item with a <a href="#">link inside</a></List.Item>
    </List>
  ),
};

export const NumberedList: Story = {
  args: {
    type: 'number',
  },
  render: (args) => (
    <List {...args}>
      <List.Item>Complete the online form</List.Item>
      <List.Item>Submit your documentation</List.Item>
      <List.Item>Wait for confirmation email</List.Item>
      <List.Item>Book your appointment</List.Item>
    </List>
  ),
};

export const PlainList: Story = {
  args: {
    type: 'none',
  },
  render: (args) => (
    <List {...args}>
      <List.Item>Item without bullet points</List.Item>
      <List.Item>Another plain item</List.Item>
      <List.Item>Third plain item</List.Item>
    </List>
  ),
};

export const BorderedList: Story = {
  args: {
    type: 'none',
    border: true,
  },
  render: (args) => (
    <List {...args}>
      <List.Item>NHS England</List.Item>
      <List.Item>NHS Scotland</List.Item>
      <List.Item>NHS Wales</List.Item>
      <List.Item>Health and Social Care Northern Ireland</List.Item>
    </List>
  ),
};

export const SmallList: Story = {
  args: {
    type: 'bullet',
    size: 'small',
  },
  render: (args) => (
    <List {...args}>
      <List.Item>Small text list item</List.Item>
      <List.Item>Another small item</List.Item>
      <List.Item>Third small item</List.Item>
    </List>
  ),
};

export const LargeList: Story = {
  args: {
    type: 'bullet',
    size: 'large',
  },
  render: (args) => (
    <List {...args}>
      <List.Item>Large text list item</List.Item>
      <List.Item>Another large item</List.Item>
      <List.Item>Third large item</List.Item>
    </List>
  ),
};

export const NestedLists: Story = {
  render: () => (
    <List type="bullet">
      <List.Item>Main item one</List.Item>
      <List.Item>
        Main item two with nested list:
        <List type="number">
          <List.Item>Nested numbered item</List.Item>
          <List.Item>Another nested item</List.Item>
          <List.Item>
            Nested item with further nesting:
            <List type="bullet" size="small">
              <List.Item>Deep nested bullet</List.Item>
              <List.Item>Another deep bullet</List.Item>
            </List>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>Main item three</List.Item>
    </List>
  ),
};

export const ListWithLinks: Story = {
  render: () => (
    <List type="bullet">
      <List.Item>
        <a href="#">NHS England</a> - Information about healthcare in England
      </List.Item>
      <List.Item>
        <a href="#">NHS Scotland</a> - Healthcare services in Scotland
      </List.Item>
      <List.Item>
        <a href="#">NHS Wales</a> - Welsh healthcare information
      </List.Item>
      <List.Item>
        <a href="#">Health and Social Care Northern Ireland</a> - Healthcare in Northern Ireland
      </List.Item>
    </List>
  ),
};

export const BorderedNumberedList: Story = {
  args: {
    type: 'number',
    border: true,
  },
  render: (args) => (
    <List {...args}>
      <List.Item>Register for an NHS account online</List.Item>
      <List.Item>Verify your identity with photo ID</List.Item>
      <List.Item>Complete your medical history form</List.Item>
      <List.Item>Book your first appointment</List.Item>
      <List.Item>Receive confirmation by email or SMS</List.Item>
    </List>
  ),
};

export const AllSizeComparison: Story = {
  render: () => (
    <div>
      <h3>Small List</h3>
      <List type="bullet" size="small">
        <List.Item>Small text example</List.Item>
        <List.Item>Another small item</List.Item>
      </List>
      
      <h3>Medium List (Default)</h3>
      <List type="bullet" size="medium">
        <List.Item>Medium text example</List.Item>
        <List.Item>Another medium item</List.Item>
      </List>
      
      <h3>Large List</h3>
      <List type="bullet" size="large">
        <List.Item>Large text example</List.Item>
        <List.Item>Another large item</List.Item>
      </List>
    </div>
  ),
};

export const AccessibilityExample: Story = {
  render: () => (
    <div>
      <h2>Services Available</h2>
      <List type="bullet" role="list">
        <List.Item>
          <strong>General Practice</strong> - Primary healthcare services
        </List.Item>
        <List.Item>
          <strong>Emergency Services</strong> - 24/7 urgent care
        </List.Item>
        <List.Item>
          <strong>Specialist Care</strong> - Consultant-led services
        </List.Item>
      </List>
      
      <h3>How to Access Services</h3>
      <List type="number" role="list">
        <List.Item>Contact your GP for a referral</List.Item>
        <List.Item>Use the NHS App to book appointments</List.Item>
        <List.Item>Call 111 for urgent but non-emergency care</List.Item>
      </List>
    </div>
  ),
};
