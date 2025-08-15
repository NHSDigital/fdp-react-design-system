// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
