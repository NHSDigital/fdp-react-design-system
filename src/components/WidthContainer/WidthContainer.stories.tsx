// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { WidthContainer } from './WidthContainer';

const meta: Meta<typeof WidthContainer> = {
  title: 'Layout/WidthContainer',
  component: WidthContainer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The WidthContainer component provides the NHS-standard page width container (nhsuk-width-container).

## Features

- **Standard NHS Width**: Applies the NHS UK Frontend width container styling
- **Responsive Margins**: Automatically handles responsive margins and centering
- **Fluid Option**: Optional fluid layout for full-width content
- **Lightweight**: Simple wrapper around the Grid Container component

## When to Use

Use WidthContainer when you need just the NHS-standard page width without the full PageTemplate structure:

- Custom page layouts
- Specific content sections
- When composing your own layout structure
- Sections that need NHS-standard width constraints

## Relationship to PageTemplate

WidthContainer is used internally by PageTemplate, but can also be used standalone for more flexible layouts.
        `,
      },
    },
  },
  argTypes: {
    fluid: {
      control: 'boolean',
      description: 'Whether to use fluid (full-width) layout',
    },
    maxWidth: {
      control: 'text',
      description: 'Custom maximum width (overrides default NHS width)',
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = ({ title = "Content inside WidthContainer" }: { title?: string }) => (
  <div style={{ 
    background: '#f0f4f7', 
    padding: '32px', 
    borderRadius: '4px',
    border: '1px solid #d4e7ed',
    margin: '20px 0'
  }}>
    <h2 style={{ margin: '0 0 16px 0', color: '#005eb8' }}>{title}</h2>
    <p>This content is constrained to the NHS-standard page width, with responsive margins that center the content on larger screens.</p>
    <p>The WidthContainer component ensures consistent layout across all NHS digital services.</p>
  </div>
);

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};
