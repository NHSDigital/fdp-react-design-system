// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { DashboardSummaryGrid } from './DashboardSummaryGrid';

const meta: Meta<typeof DashboardSummaryGrid> = {
  title: 'Data Visualization/DashboardSummaryGrid',
  component: DashboardSummaryGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The DashboardSummaryGrid component provides a pre-configured responsive grid layout that displays exactly four summary cards. It's designed to be the perfect starting point for dashboard interfaces.

## Features

- **Responsive Grid**: Uses NHS Grid components for consistent responsive behavior
- **2x2 Layout**: Displays four cards in a 2x2 grid on desktop, stacked on mobile
- **Consistent Spacing**: Proper spacing between cards and sections
- **Flexible Content**: Each card can have different content and interactive states
- **Dashboard Ready**: Perfect for KPI displays and data overviews

## Layout Behavior

- **Desktop**: 2x2 grid with cards side by side
- **Tablet**: 2x2 grid with adjusted spacing
- **Mobile**: Single column stack

## When to Use

Use DashboardSummaryGrid when you need to:

- Display exactly four key metrics
- Create a dashboard header with primary KPIs
- Show overview statistics for a service or application
- Provide quick access to different data sections

## Grid Integration

This component uses the NHS Grid system (\`Grid\`, \`Row\`, \`Column\`) and sets each card to \`one-half\` width, creating the 2x2 responsive layout automatically.
        `,
      },
    },
  },
  argTypes: {
    cards: {
      control: false,
      description: 'Array of exactly 4 summary card configurations',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DashboardSummaryGrid
      cards={[
        { title: 'Patient Records', value: '1,247' },
        { title: 'Appointments Today', value: '89' },
        { title: 'Active Prescriptions', value: '342' },
        { title: 'Staff On Duty', value: '156' },
      ]}
    />
  ),
};
