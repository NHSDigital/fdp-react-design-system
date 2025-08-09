import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Column, Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Grid system provides layout components based on the NHS UK Frontend grid system.

## Components

- **Container**: Page-width container with responsive margins
- **Row**: Grid row with negative margins for column gutters  
- **Column**: Responsive grid columns with NHS UK standard widths
- **Grid**: Convenience wrapper combining Container and Row

## Grid Widths

- \`one-quarter\` (25%)
- \`one-third\` (33.33%)
- \`one-half\` (50%) 
- \`two-thirds\` (66.66%)
- \`three-quarters\` (75%)
- \`full\` (100%)

## Responsive Behavior

By default, columns are 100% width on mobile and switch to specified widths at desktop breakpoint (769px).
Use \`forceWidth\` prop to maintain column widths on all screen sizes.
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content component
const SampleContent = ({ children, height = '100px' }: { children: React.ReactNode; height?: string }) => (
  <div style={{ 
    background: '#f0f4f7', 
    border: '1px solid #d4e7ed',
    padding: '16px', 
    textAlign: 'center',
    minHeight: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    {children}
  </div>
);

export const BasicGrid: Story = {
  render: () => (
    <Container>
      <Row>
        <Column width="one-half">
          <SampleContent>One Half</SampleContent>
        </Column>
        <Column width="one-half">
          <SampleContent>One Half</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Container>
      <Row>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Container>
      <Row>
        <Column width="one-quarter">
          <SampleContent>Quarter</SampleContent>
        </Column>
        <Column width="one-quarter">
          <SampleContent>Quarter</SampleContent>
        </Column>
        <Column width="one-quarter">
          <SampleContent>Quarter</SampleContent>
        </Column>
        <Column width="one-quarter">
          <SampleContent>Quarter</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const MixedWidths: Story = {
  render: () => (
    <Container>
      <Row>
        <Column width="two-thirds">
          <SampleContent>Two Thirds</SampleContent>
        </Column>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
      </Row>
      <Row>
        <Column width="one-quarter">
          <SampleContent>Quarter</SampleContent>
        </Column>
        <Column width="three-quarters">
          <SampleContent>Three Quarters</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const ResponsiveLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Columns can have different widths at different breakpoints for optimal responsive design.',
      },
    },
  },
  render: () => (
    <Container>
      <Row>
        <Column 
          width="full" 
          tabletWidth="one-half" 
          desktopWidth="two-thirds"
        >
          <SampleContent>
            <strong>Responsive Column</strong><br />
            Full width on mobile<br />
            Half width on tablet<br />
            Two-thirds on desktop
          </SampleContent>
        </Column>
        <Column 
          width="full" 
          tabletWidth="one-half" 
          desktopWidth="one-third"
        >
          <SampleContent>
            <strong>Responsive Column</strong><br />
            Full width on mobile<br />
            Half width on tablet<br />
            One-third on desktop
          </SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const GridPositioning: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Columns can be positioned at specific grid positions using the `start` prop.',
      },
    },
  },
  render: () => (
    <Container>
      <Row>
        <Column width="one-third" start={2}>
          <SampleContent>Starts at column 2</SampleContent>
        </Column>
        <Column width="one-third" start={6}>
          <SampleContent>Starts at column 6</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const MixedBreakpoints: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Complex responsive layouts with different column arrangements at each breakpoint.',
      },
    },
  },
  render: () => (
    <Container>
      <Row>
        <Column 
          width="full"
          tabletWidth="full" 
          desktopWidth="one-quarter"
        >
          <SampleContent>Navigation</SampleContent>
        </Column>
        <Column 
          width="full"
          tabletWidth="two-thirds" 
          desktopWidth="one-half"
        >
          <SampleContent>Main Content</SampleContent>
        </Column>
        <Column 
          width="full"
          tabletWidth="one-third" 
          desktopWidth="one-quarter"
        >
          <SampleContent>Sidebar</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const FluidContainer: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fluid container spans the full width of the viewport with responsive gutters.',
      },
    },
  },
  render: () => (
    <Container fluid>
      <Row>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
        <Column width="one-third">
          <SampleContent>One Third</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const NestedGrid: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Grid columns can contain nested rows and columns for complex layouts.',
      },
    },
  },
  render: () => (
    <Container>
      <Row>
        <Column width="two-thirds">
          <SampleContent height="auto">
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 16px 0' }}>Main Content</h3>
              <Row>
                <Column width="one-half">
                  <SampleContent>Nested Half</SampleContent>
                </Column>
                <Column width="one-half">
                  <SampleContent>Nested Half</SampleContent>
                </Column>
              </Row>
            </div>
          </SampleContent>
        </Column>
        <Column width="one-third">
          <SampleContent height="200px">Sidebar</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

export const ConvenienceGridWrapper: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Using the Grid convenience component that combines Container and Row.',
      },
    },
  },
  render: () => (
    <Grid>
      <Column width="one-third">
        <SampleContent>Column 1</SampleContent>
      </Column>
      <Column width="one-third">
        <SampleContent>Column 2</SampleContent>
      </Column>
      <Column width="one-third">
        <SampleContent>Column 3</SampleContent>
      </Column>
    </Grid>
  ),
};

export const GridDebugMode: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Debug mode shows grid boundaries and column information. Useful for development.',
      },
    },
  },
  render: () => (
    <div className="nhsuk-grid-debug">
      <Container>
        <Row>
          <Column width="one-quarter">
            <SampleContent>Quarter</SampleContent>
          </Column>
          <Column width="one-half">
            <SampleContent>Half</SampleContent>
          </Column>
          <Column width="one-quarter">
            <SampleContent>Quarter</SampleContent>
          </Column>
        </Row>
        <Row>
          <Column width="one-third">
            <SampleContent>Third</SampleContent>
          </Column>
          <Column width="two-thirds">
            <SampleContent>Two Thirds</SampleContent>
          </Column>
        </Row>
      </Container>
    </div>
  ),
};

export const RealWorldExample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example of a realistic page layout using the grid system.',
      },
    },
  },
  render: () => (
    <>
      {/* Header */}
      <Container fluid>
        <Row>
          <Column width="full">
            <div style={{ 
              background: '#005eb8', 
              color: 'white', 
              padding: '24px',
              textAlign: 'center'
            }}>
              <h1 style={{ margin: 0 }}>NHS Service Header</h1>
            </div>
          </Column>
        </Row>
      </Container>

      {/* Main content */}
      <Container>
        <Row>
          <Column width="two-thirds">
            <div style={{ padding: '32px 0' }}>
              <h2>Main Content Area</h2>
              <p>This is the main content area that takes up two-thirds of the page width.</p>
              
              <Row>
                <Column width="one-half">
                  <SampleContent>Feature 1</SampleContent>
                </Column>
                <Column width="one-half">
                  <SampleContent>Feature 2</SampleContent>
                </Column>
              </Row>
            </div>
          </Column>
          
          <Column width="one-third">
            <div style={{ padding: '32px 0' }}>
              <h3>Sidebar</h3>
              <SampleContent height="150px">Related Links</SampleContent>
              <br />
              <SampleContent height="100px">Quick Actions</SampleContent>
            </div>
          </Column>
        </Row>
      </Container>

      {/* Footer */}
      <Container fluid>
        <Row>
          <Column width="full">
            <div style={{ 
              background: '#f0f4f7', 
              padding: '24px',
              textAlign: 'center',
              borderTop: '1px solid #d4e7ed'
            }}>
              Footer Content
            </div>
          </Column>
        </Row>
      </Container>
    </>
  ),
};
