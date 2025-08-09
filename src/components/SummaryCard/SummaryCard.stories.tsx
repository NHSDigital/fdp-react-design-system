import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCard } from './SummaryCard';

const meta: Meta<typeof SummaryCard> = {
  title: 'Data Visualization/SummaryCard',
  component: SummaryCard,
  parameters: {
    docs: {
      description: {
        component: `
The SummaryCard component is designed for displaying key metrics and data summaries, commonly used in dashboards and data visualization interfaces.

## Features

- **Clean Design**: Follows NHS design patterns with proper spacing and typography
- **Accessibility**: ARIA labels and semantic HTML structure
- **Responsive**: Adapts to different screen sizes
- **Interactive**: Optional clickable functionality with href
- **Variants**: Support for different visual states (default, success, warning, error)
- **Flexible Content**: Supports title, value, and optional subtitle

## When to Use

Use SummaryCard when you need to display:

- Key performance indicators (KPIs)
- Dashboard metrics
- Statistical summaries
- Quick data overviews
- Clickable data points that link to detailed views

## Design Tokens

The component uses NHS FDP design tokens for consistent styling:
- Colors: NHS blue for titles, appropriate semantic colors for variants
- Spacing: Consistent padding and margins
- Typography: NHS font weights and sizes
- Borders: Standard border widths and colors
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title/label for the summary card',
    },
    value: {
      control: 'text',
      description: 'The main value/number to display',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or description',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant for different states',
    },
    href: {
      control: 'text',
      description: 'Optional href to make the card clickable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Patient Records',
    value: '1,247',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Appointments Today',
    value: '89',
    subtitle: '15% increase from yesterday',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Active Prescriptions',
    value: '342',
    href: '/prescriptions',
    subtitle: 'Click to view details',
  },
};

export const SuccessVariant: Story = {
  args: {
    title: 'Completed Tasks',
    value: '98%',
    variant: 'success',
    subtitle: 'All critical tasks finished',
  },
};

export const WarningVariant: Story = {
  args: {
    title: 'Pending Reviews',
    value: '23',
    variant: 'warning',
    subtitle: 'Requires attention',
  },
};

export const ErrorVariant: Story = {
  args: {
    title: 'Failed Processes',
    value: '3',
    variant: 'error',
    subtitle: 'Immediate action required',
  },
};

export const LargeNumbers: Story = {
  args: {
    title: 'Total Population Served',
    value: '2,847,392',
    subtitle: 'Across all NHS trusts',
  },
};

export const PercentageValue: Story = {
  args: {
    title: 'System Availability',
    value: '99.9%',
    variant: 'success',
    subtitle: 'Last 30 days',
  },
};
