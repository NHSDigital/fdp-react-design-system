import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Heading component provides a reusable abstraction for heading elements that separates semantic meaning from visual appearance.
This component eliminates the need for repetitive switch statements across components and promotes consistent heading usage.

### Key Benefits
- **Semantic Flexibility**: Use appropriate heading levels (h1-h6) for document structure
- **Visual Consistency**: Apply size variants independent of semantic level
- **Reduced Code Duplication**: Eliminates repetitive heading logic across components
- **Better Architecture**: Single source of truth for heading rendering

### When to use this component
- When you need headings with consistent styling across your application
- To maintain proper semantic heading hierarchy while controlling visual size
- In place of manual heading switch statements in other components
- When you want to separate content structure from visual presentation

### Design System Benefits
This component addresses the architectural concern about repetitive heading logic found in components like Panel.
Instead of switch statements in every component, use this abstraction for cleaner, more maintainable code.
        `,
      },
    },
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'The semantic heading level (h1-h6) for proper document structure',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
      description: 'Visual size variant independent of semantic level',
    },
    text: {
      control: 'text',
      description: 'Plain text content for the heading',
    },
    html: {
      control: 'text',
      description: 'HTML content for the heading (alternative to text)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

/**
 * Default heading with medium size
 */
export const Default: Story = {
  args: {
    level: 2,
    text: 'Default heading',
  },
};

/**
 * Demonstrates all available size variants
 */
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={2} size="xs" text="Extra Small (xs)" />
      <Heading level={2} size="s" text="Small (s)" />
      <Heading level={2} size="m" text="Medium (m)" />
      <Heading level={2} size="l" text="Large (l)" />
      <Heading level={2} size="xl" text="Extra Large (xl)" />
      <Heading level={2} size="xxl" text="Extra Extra Large (xxl)" />
    </div>
  ),
};

/**
 * Shows different semantic levels with the same visual size
 */
export const SemanticLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={1} size="l" text="H1 with large size" />
      <Heading level={2} size="l" text="H2 with large size" />
      <Heading level={3} size="l" text="H3 with large size" />
      <Heading level={4} size="l" text="H4 with large size" />
      <Heading level={5} size="l" text="H5 with large size" />
      <Heading level={6} size="l" text="H6 with large size" />
    </div>
  ),
};

/**
 * Heading with HTML content
 */
export const WithHTML: Story = {
  args: {
    level: 2,
    html: 'Heading with <strong>bold</strong> and <em>italic</em> text',
    size: 'l',
  },
};

/**
 * Heading with React children
 */
export const WithChildren: Story = {
  render: () => (
    <Heading level={2} size="xl">
      Heading with <span style={{ color: '#007f3b' }}>colored</span> children
    </Heading>
  ),
};

/**
 * Compare old vs new approach - demonstrates architectural improvement
 */
export const ArchitecturalComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>❌ Old Approach (repetitive switch statements)</h3>
        <pre style={{ background: '#f5f5f5', padding: '16px', fontSize: '12px' }}>
{`// Every component had this repetitive code:
switch (headingLevel) {
  case 1: return <h1>{text}</h1>;
  case 2: return <h2>{text}</h2>;
  case 3: return <h3>{text}</h3>;
  // ... etc
}`}
        </pre>
      </div>
      
      <div>
        <h3>✅ New Approach (clean abstraction)</h3>
        <pre style={{ background: '#f0f4f5', padding: '16px', fontSize: '12px' }}>
{`// Now just use the Heading component:
<Heading level={headingLevel} text={text} />

// Or with size control:
<Heading level={2} size="xl" text={text} />`}
        </pre>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <Heading level={3} size="m" text="This heading demonstrates the new approach in action!" />
      </div>
    </div>
  ),
};

/**
 * Responsive behavior demonstration
 */
export const ResponsiveBehavior: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p><strong>Resize your browser to see responsive font sizing:</strong></p>
      <Heading level={1} size="xxl" text="This heading adapts to screen size" />
      <p style={{ fontSize: '14px', color: '#666' }}>
        Font sizes automatically adjust between mobile and desktop breakpoints
      </p>
    </div>
  ),
};
