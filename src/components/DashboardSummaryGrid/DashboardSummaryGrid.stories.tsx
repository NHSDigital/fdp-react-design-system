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

export const WithSubtitles: Story = {
  render: () => (
    <DashboardSummaryGrid
      cards={[
        { 
          title: 'Patient Records', 
          value: '1,247',
          subtitle: 'Total registered patients'
        },
        { 
          title: 'Appointments Today', 
          value: '89',
          subtitle: '15% increase from yesterday'
        },
        { 
          title: 'Active Prescriptions', 
          value: '342',
          subtitle: 'Awaiting collection'
        },
        { 
          title: 'Staff On Duty', 
          value: '156',
          subtitle: 'Across all departments'
        },
      ]}
    />
  ),
};

export const MixedVariants: Story = {
  render: () => (
    <DashboardSummaryGrid
      cards={[
        { 
          title: 'Patient Records', 
          value: '1,247',
          variant: 'default'
        },
        { 
          title: 'Completed Tasks', 
          value: '98%',
          variant: 'success',
          subtitle: 'On track for monthly target'
        },
        { 
          title: 'Pending Reviews', 
          value: '23',
          variant: 'warning',
          subtitle: 'Requires attention'
        },
        { 
          title: 'System Errors', 
          value: '2',
          variant: 'error',
          subtitle: 'Immediate action needed'
        },
      ]}
    />
  ),
};

export const ClickableCards: Story = {
  render: () => (
    <DashboardSummaryGrid
      cards={[
        { 
          title: 'Patient Records', 
          value: '1,247',
          href: '/patients',
          subtitle: 'Click to view all patients'
        },
        { 
          title: 'Appointments', 
          value: '89',
          href: '/appointments',
          subtitle: 'View appointment schedule'
        },
        { 
          title: 'Prescriptions', 
          value: '342',
          href: '/prescriptions',
          subtitle: 'Manage prescriptions'
        },
        { 
          title: 'Reports', 
          value: '15',
          href: '/reports',
          subtitle: 'View detailed reports'
        },
      ]}
    />
  ),
};

export const HealthcareMetrics: Story = {
  render: () => (
    <DashboardSummaryGrid
      cards={[
        { 
          title: 'Bed Occupancy', 
          value: '87%',
          variant: 'warning',
          subtitle: 'Near capacity'
        },
        { 
          title: 'A&E Wait Time', 
          value: '3.2h',
          variant: 'success',
          subtitle: 'Below 4-hour target'
        },
        { 
          title: 'Surgeries Today', 
          value: '24',
          subtitle: '3 emergency procedures'
        },
        { 
          title: 'Discharge Rate', 
          value: '92%',
          variant: 'success',
          subtitle: 'Above target'
        },
      ]}
    />
  ),
};

export const LargeNumbers: Story = {
  render: () => (
    <DashboardSummaryGrid
      cards={[
        { 
          title: 'Total Population', 
          value: '2.8M',
          subtitle: 'Registered patients'
        },
        { 
          title: 'Annual Budget', 
          value: '£425M',
          subtitle: 'FY 2024-25'
        },
        { 
          title: 'Staff Members', 
          value: '15,670',
          subtitle: 'Full-time equivalent'
        },
        { 
          title: 'Facilities', 
          value: '127',
          subtitle: 'Across the region'
        },
      ]}
    />
  ),
};
