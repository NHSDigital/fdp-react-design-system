import type { Meta, StoryObj } from '@storybook/react';
import { AriaTabsDataGrid } from '../SortableDataTable/AriaTabsDataGrid';
import type { AriaTabsDataGridProps } from '../SortableDataTable/AriaTabsDataGridTypes';

// Sample test data for keyboard navigation debugging
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

const meta: Meta<AriaTabsDataGridProps> = {
  title: 'NHS/Data/AriaTabsDataGrid/KeyboardDebug',
  component: AriaTabsDataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AriaTabsDataGrid Keyboard Navigation Debug

This story tests the base AriaTabsDataGrid component directly to verify keyboard navigation works.

## How to Test

1. **Tab Focus**: Use Tab to focus on the component
2. **Tab Navigation**: Use Arrow Left/Right to move between tabs
3. **Header Navigation**: Use Arrow Down to move from tabs to headers
4. **Cell Navigation**: Use Arrow Down from headers to move to cells
5. **Grid Navigation**: Use Arrow keys to navigate throughout the grid

## Expected Behavior

- **Arrow Down from tabs**: Should go to first header
- **Arrow Down from headers**: Should go to first cell in that column
- **Arrow keys in cells**: Should navigate throughout the grid
- **Arrow Up from first row**: Should go back to headers
- **Arrow Up from headers**: Should go back to tabs

This will help determine if the issue is in AriaTabsDataGrid or ResponsiveDataGrid.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AriaTabsDataGridProps>;

export const DirectKeyboardTest: Story = {
  args: {
    tabPanels: testTabPanels,
    ariaLabel: 'Direct AriaTabsDataGrid keyboard test',
    ariaDescription: 'Testing keyboard navigation directly on AriaTabsDataGrid',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Direct AriaTabsDataGrid Test

This tests the AriaTabsDataGrid component directly without ResponsiveDataGrid wrapper.

**Test Steps:**
1. Click on a tab to focus it
2. Use Arrow Left/Right to navigate between tabs
3. Use Arrow Down to navigate from tabs to headers
4. Use Arrow Down from headers to navigate to cells
5. Use Arrow keys to navigate in the grid

If this works but ResponsiveDataGrid doesn't, the issue is in the ResponsiveDataGrid wrapper.
        `,
      },
    },
  },
};
