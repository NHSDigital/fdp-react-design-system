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

export const Fluid: Story = {
  args: {
    fluid: true,
    children: <SampleContent title="Fluid Width Container" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Fluid containers span the full width of the viewport with responsive gutters.',
      },
    },
  },
};

export const CustomMaxWidth: Story = {
  args: {
    maxWidth: '1200px',
    children: <SampleContent title="Custom Max Width (1200px)" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can override the default NHS width with a custom maximum width.',
      },
    },
  },
};

export const MultipleContainers: Story = {
  render: () => (
    <div>
      <WidthContainer>
        <SampleContent title="Standard NHS Width" />
      </WidthContainer>
      
      <WidthContainer fluid>
        <SampleContent title="Fluid Width Section" />
      </WidthContainer>
      
      <WidthContainer maxWidth="800px">
        <SampleContent title="Narrow Content (800px)" />
      </WidthContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different container types can be used together to create varied page layouts.',
      },
    },
  },
};

export const WithinPageStructure: Story = {
  render: () => (
    <div>
      {/* Simulated header */}
      <div style={{ 
        background: '#005eb8', 
        color: 'white', 
        padding: '16px 0',
        marginBottom: '0'
      }}>
        <WidthContainer>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              background: 'white', 
              color: '#005eb8', 
              padding: '8px 16px',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}>
              NHS
            </div>
            <span>Example Service</span>
          </div>
        </WidthContainer>
      </div>
      
      {/* Main content */}
      <WidthContainer>
        <div style={{ padding: '32px 0' }}>
          <h1 style={{ color: '#005eb8', marginTop: 0 }}>Using WidthContainer in Page Structure</h1>
          <p>This example shows how WidthContainer can be used to create consistent layout structure across different sections of a page.</p>
          <p>Both the header and main content use WidthContainer to maintain the same width constraints and alignment.</p>
        </div>
      </WidthContainer>
      
      {/* Full-width section */}
      <div style={{ 
        background: '#f0f4f7', 
        padding: '32px 0',
        border: '1px solid #d4e7ed',
        borderLeft: 'none',
        borderRight: 'none'
      }}>
        <WidthContainer>
          <h2 style={{ color: '#005eb8', marginTop: 0 }}>Highlighted Section</h2>
          <p>This section has a full-width background but the content is still constrained by WidthContainer.</p>
        </WidthContainer>
      </div>
      
      {/* Simulated footer */}
      <div style={{ 
        background: '#f8f8f8', 
        padding: '32px 0',
        marginTop: '32px',
        borderTop: '1px solid #d4e7ed'
      }}>
        <WidthContainer>
          <p style={{ margin: 0, textAlign: 'center', color: '#666' }}>
            © Crown copyright
          </p>
        </WidthContainer>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'WidthContainer can be used within different page sections to maintain consistent content width while allowing varied background styling.',
      },
    },
  },
};
