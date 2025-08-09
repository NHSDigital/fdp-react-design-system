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

export const WithActiveItem: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Services', href: '/services' },
      { text: 'Book Appointment', active: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with an active (current page) item. The active item is not clickable and has different styling to indicate it\'s the current page.',
      },
    },
  },
};

export const CompoundComponent: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/health-a-z">Health A-Z</Breadcrumb.Item>
      <Breadcrumb.Item href="/mental-health">Mental health</Breadcrumb.Item>
      <Breadcrumb.Item active>Depression and anxiety</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the compound component pattern with `Breadcrumb.Item` for more flexible and readable component composition. This provides better control over individual items and their properties.',
      },
    },
  },
};

export const CompoundWithAttributes: Story = {
  render: () => (
    <Breadcrumb labelText="Page navigation">
      <Breadcrumb.Item 
        href="/" 
        attributes={{ 'data-tracking': 'breadcrumb-home' }}
      >
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item 
        href="/services" 
        attributes={{ 'data-tracking': 'breadcrumb-services' }}
      >
        Services
      </Breadcrumb.Item>
      <Breadcrumb.Item 
        href="/services/appointments" 
        attributes={{ 'data-tracking': 'breadcrumb-appointments' }}
      >
        Appointments
      </Breadcrumb.Item>
      <Breadcrumb.Item 
        active
        attributes={{ 'data-tracking': 'breadcrumb-current' }}
      >
        Book Appointment
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compound component with custom attributes for tracking and analytics. Each item can have its own attributes while maintaining proper ARIA compliance.',
      },
    },
  },
};

export const DeepNavigationWithActive: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Health A-Z', href: '/conditions' },
      { text: 'Mental health', href: '/mental-health' },
      { text: 'Depression', href: '/mental-health/depression' },
      { text: 'Treatment options', active: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Deep navigation breadcrumb with an active item showing the current page in a multi-level hierarchy.',
      },
    },
  },
};

export const DeepNavigation: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Health A-Z', href: '/conditions' },
      { text: 'Mental health', href: '/mental-health' },
      { text: 'Depression', href: '/mental-health/depression' },
      { text: 'Treatment options', href: '/mental-health/depression/treatment' },
    ],
  },
};

export const WithDirectHref: Story = {
  args: {
    href: '/back-to-section',
    text: 'Section Home',
  },
};

export const Reverse: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Health A-Z', href: '/conditions' },
      { text: 'Mental health', href: '/mental-health' },
    ],
    reverse: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const CustomLabel: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Services', href: '/services' },
      { text: 'Find a service', href: '/services/find' },
    ],
    labelText: 'Page navigation',
  },
};

export const WithItemAttributes: Story = {
  args: {
    items: [
      { text: 'Home', href: '/', attributes: { 'data-tracking': 'breadcrumb-home' } },
      { text: 'Health A-Z', href: '/conditions', attributes: { 'data-tracking': 'breadcrumb-health' } },
      { text: 'Mental health', href: '/mental-health', attributes: { 'data-tracking': 'breadcrumb-mental-health' } },
    ],
  },
};

export const AccessibilityShowcase: Story = {
  render: () => (
    <div>
      <h3>ARIA-Compliant Breadcrumb Navigation</h3>
      <p>This example showcases the full ARIA compliance features:</p>
      <ul style={{ marginBottom: '24px', fontSize: '14px' }}>
        <li><strong>nav</strong> element with <code>role="navigation"</code></li>
        <li><strong>aria-label</strong> providing navigation context</li>
        <li><strong>ol</strong> with <code>role="list"</code> for proper structure</li>
        <li><strong>li</strong> elements with <code>role="listitem"</code></li>
        <li><strong>aria-current="page"</strong> for the current page</li>
        <li><strong>aria-label</strong> on back link for screen readers</li>
      </ul>
      
      <Breadcrumb labelText="Healthcare service navigation">
        <Breadcrumb.Item href="/">NHS Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/find-services">Find Services</Breadcrumb.Item>
        <Breadcrumb.Item href="/find-services/gp">GP Services</Breadcrumb.Item>
        <Breadcrumb.Item href="/find-services/gp/register">Register with GP</Breadcrumb.Item>
        <Breadcrumb.Item active>Complete Registration</Breadcrumb.Item>
      </Breadcrumb>
      
      <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f0f4f8', fontSize: '14px' }}>
        <strong>Screen Reader Experience:</strong>
        <ul style={{ marginTop: '8px' }}>
          <li>Announces "Healthcare service navigation" landmark</li>
          <li>Reads each breadcrumb item as a list item</li>
          <li>Identifies "Complete Registration" as current page</li>
          <li>Mobile back link includes descriptive label</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive demonstration of ARIA compliance features including proper navigation landmarks, list structure, current page indication, and screen reader optimizations.',
      },
    },
  },
};
