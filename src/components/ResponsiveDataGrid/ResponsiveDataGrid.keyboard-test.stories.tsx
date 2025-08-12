import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import type { ResponsiveDataGridProps } from './ResponsiveDataGridTypes';
import { tchDataConfig } from '../SortableDataTable/AriaTabsDataGridTCH';

// Sample test data for keyboard navigation
const testData = [
  { id: 1, name: 'Alice Johnson', status: 'Active', priority: 'High', value: 100 },
  { id: 2, name: 'Bob Smith', status: 'Pending', priority: 'Medium', value: 75 },
  { id: 3, name: 'Carol Davis', status: 'Inactive', priority: 'Low', value: 50 },
  { id: 4, name: 'David Wilson', status: 'Active', priority: 'High', value: 95 },
];

const testColumns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'priority', label: 'Priority' },
  { key: 'value', label: 'Value' },
];

const testTabPanels = [
  {
    id: 'tab-1',
    label: 'Active Records',
    data: testData.filter(item => item.status === 'Active'),
    columns: testColumns,
    ariaLabel: 'Active records data table',
  },
  {
    id: 'tab-2',
    label: 'All Records',
    data: testData,
    columns: testColumns,
    ariaLabel: 'All records data table',
  },
];

const meta: Meta<ResponsiveDataGridProps> = {
  title: 'NHS/Data/ResponsiveDataGrid/KeyboardNavigation',
  component: ResponsiveDataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Keyboard Navigation Test

This story is specifically designed to test keyboard navigation across different layouts.

## How to Test

1. **Tab Focus**: Use Tab to focus on the component
2. **Tab Navigation**: Use Arrow Left/Right to move between tabs
3. **Content Navigation**: Use Arrow Down to move from tabs to content
4. **Grid Navigation**: In table mode, use Arrow keys to navigate headers and cells
5. **Layout Testing**: Use the layout controls to test all modes

## Expected Behavior

- **Card Layout**: Arrow Down from tabs should go to first card
- **Table Layout**: Arrow Down from tabs should go to first header
- **Hybrid Layout**: Should behave like table layout
- **Consistent Navigation**: All layouts should have reliable keyboard navigation

## Keyboard Shortcuts

- **Arrow Keys**: Navigate between tabs, headers, cells, or cards
- **Enter/Space**: Activate buttons, select items
- **Home/End**: Jump to first/last items
- **Escape**: Exit card navigation mode (cards only)
        `,
      },
    },
  },
  argTypes: {
    forceLayout: {
      control: { type: 'select' },
      options: ['cards', 'hybrid', 'table'],
      description: 'Force a specific layout for testing',
    },
    breakpoints: {
      control: 'object',
      description: 'Breakpoint configuration',
    },
  },
};

export default meta;
type Story = StoryObj<ResponsiveDataGridProps>;

export const KeyboardNavigationTest: Story = {
  args: {
    tabPanels: testTabPanels,
    dataConfig: tchDataConfig,
    ariaLabel: 'Keyboard navigation test grid',
    ariaDescription: 'Test keyboard navigation across different layouts',
    breakpoints: { mobile: 768, tablet: 1024, desktop: 1200 },
  },
  parameters: {
    docs: {
      description: {
        story: `
### Keyboard Navigation Test

This story allows testing keyboard navigation behavior across all layout modes.

**Test Steps:**
1. Click on the component to focus it
2. Use keyboard to navigate (see shortcuts above)
3. Change the layout using controls to test different modes
4. Verify navigation works consistently across all layouts

**Focus Areas:**
- Tab to tab navigation (Left/Right arrows)
- Tab to content navigation (Down arrow)
- Content navigation (Arrow keys within grid/cards)
        `,
      },
    },
  },
};

// Test each layout specifically
export const CardLayoutNavigation: Story = {
  args: {
    ...KeyboardNavigationTest.args,
    forceLayout: 'cards',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test keyboard navigation specifically in card layout mode.',
      },
    },
  },
};

export const TableLayoutNavigation: Story = {
  args: {
    ...KeyboardNavigationTest.args,
    forceLayout: 'table',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test keyboard navigation specifically in table layout mode. Arrow Down from tabs should navigate to table headers.',
      },
    },
  },
};

export const HybridLayoutNavigation: Story = {
  args: {
    ...KeyboardNavigationTest.args,
    forceLayout: 'hybrid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test keyboard navigation specifically in hybrid layout mode. Should behave like table layout.',
      },
    },
  },
};
