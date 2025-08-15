// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'NHS/Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The breadcrumb component shows users where they are in the website hierarchy and helps them navigate back to parent pages.

## Features

- **Full ARIA Compliance**: Proper navigation landmarks, roles, and current page indication
- **Compound Components**: Use \`Breadcrumb.Item\` for flexible component composition
- **Multiple Usage Patterns**: Items array, children components, or direct href/text props
- **Responsive Design**: Mobile back link for smaller screens
- **Active State**: Indicates current page with proper ARIA attributes

## Usage Patterns

### Items Array (Traditional)
\`\`\`tsx
<Breadcrumb
  items={[
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Current Page', active: true }
  ]}
/>
\`\`\`

### Compound Components (Flexible)
\`\`\`tsx
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
  <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
</Breadcrumb>
\`\`\`

### Direct Props (Simple)
\`\`\`tsx
<Breadcrumb href="/back" text="Back to Section" />
\`\`\`

## ARIA Compliance

- Uses \`nav\` element with proper \`role="navigation"\`
- \`aria-label\` for navigation context
- \`role="list"\` and \`role="listitem"\` for structure
- \`aria-current="page"\` for active items
- Descriptive \`aria-label\` for back links
        `,
      },
    },
  },
  argTypes: {
    labelText: {
      control: 'text',
      description: 'Aria label for the navigation',
    },
    reverse: {
      control: 'boolean',
      description: 'Whether to use reverse color scheme (for dark backgrounds)',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Health A-Z', href: '#' },
      { text: 'Mental health', href: '#' },
    ],
  },
};
