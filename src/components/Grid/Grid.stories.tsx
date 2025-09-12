// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Column, Grid } from './Grid';
import { ColumnAlign, GridWidth } from './Grid.types';
export const AlignmentDemo: Story = {
  render: () => (
    <Container>
      <Row>
  <Column width={GridWidth.OneThird} align={ColumnAlign.Left}>
          <SampleContent>Left aligned</SampleContent>
        </Column>
  <Column width={GridWidth.OneThird} align={ColumnAlign.Center}>
          <SampleContent>Center aligned</SampleContent>
        </Column>
  <Column width={GridWidth.OneThird} align={ColumnAlign.Right}>
          <SampleContent>Right aligned</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};

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
  <Column width={GridWidth.OneHalf}>
          <SampleContent>One Half</SampleContent>
        </Column>
  <Column width={GridWidth.OneHalf}>
          <SampleContent>One Half</SampleContent>
        </Column>
      </Row>
    </Container>
  ),
};
