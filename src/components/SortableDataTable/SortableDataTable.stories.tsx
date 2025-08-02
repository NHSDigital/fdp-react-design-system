import type { Meta, StoryObj } from '@storybook/react';
import SortableDataTable from './SortableDataTable';

const meta: Meta<typeof SortableDataTable> = {
  title: 'NHS/Components/SortableDataTable',
  component: SortableDataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The NHS SortableDataTable component is an accessible, keyboard-navigable data table designed for patient care workflows. Built with NHS design tokens for consistent styling and theming.

## Features

- **Design token integration**: Uses NHS FDP design tokens for consistent colors, spacing, and typography
- **Multi-tab interface**: Organize data into different views (Overview, Discharge, Transport)  
- **Multi-column sorting**: Sort by multiple columns with visual priority indicators
- **Full keyboard navigation**: Navigate between tabs, headers, and table cells using arrow keys
- **Accessibility compliant**: WCAG 2.1 AA compliant with proper ARIA roles and focus management
- **Visual indicators**: EWS score color coding, status icons, and selection highlighting
- **Responsive design**: Sticky headers and optimized for various screen sizes
- **NHS theming**: Automatic support for NHS themes and color schemes

## Keyboard Navigation

- **Arrow Keys**: Navigate between tabs, column headers, and table cells
- **Enter/Space**: Activate current selection (select tab, sort column, select row)
- **Home/End**: Jump to start/end of current area
- **Ctrl+Home**: Go to first tab
- **Ctrl+End**: Go to last row, last column

## Usage

\`\`\`tsx
import SortableDataTable from '@nhs-fdp/design-system/SortableDataTable';

<SortableDataTable />
\`\`\`

## Data Structure

The component expects patient data with the following structure:
- Patient demographics (name, age)
- Clinical data (EWS score, ward information)
- Discharge planning (dates, assessments, notifications)
- Transport arrangements (booking, status, requirements)

## Accessibility

- Proper ARIA roles for grid navigation
- Screen reader announcements for sort state changes
- Focus indicators with NHS blue (#005eb8)
- Keyboard-only operation support
- Hidden descriptive text for visual icons
        `,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SortableDataTable>;

/**
 * The default SortableDataTable displays patient data across multiple tabs with full
 * sorting and navigation capabilities. Click on column headers to sort, use keyboard
 * navigation to move through the interface, and switch between different data views.
 */
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This is the standard implementation of the SortableDataTable component showing patient data
with the following tabs:

- **Overview**: Basic patient information, ward details, and EWS scores
- **Discharge**: Discharge planning data including assessments and target dates  
- **Transport**: Transport booking status and requirements

### Interaction Examples

1. **Sorting**: Click any column header to sort by that column. Click again to reverse sort order, click a third time to remove sorting.
2. **Multi-column sort**: Sort by multiple columns by clicking different headers. Priority numbers show sort order.
3. **Keyboard navigation**: Use Tab to enter the table, then arrow keys to navigate. Press Enter or Space to activate.
4. **Row selection**: Click any row or press Enter when focused to select/deselect it.

### EWS Score Color Coding

The Early Warning Score (EWS) column uses NHS-compliant color coding:
- **Green (0-3)**: Low risk
- **Amber (4-6)**: Medium risk  
- **Red (7+)**: High risk
        `,
      },
    },
  },
};

/**
 * Demonstrates the table in a constrained container to show responsive behavior
 * and scrolling capabilities.
 */
export const ConstrainedWidth: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '600px', border: '1px solid #ccc', overflow: 'auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `
This story shows how the SortableDataTable behaves in a constrained container.
The table maintains its functionality while providing horizontal and vertical scrolling
when the content exceeds the container dimensions.

Key responsive features:
- Sticky column headers remain visible during vertical scrolling
- Horizontal scrolling preserves table structure
- Focus indicators remain visible during scrolling
- Tab navigation continues to work within scrollable areas
        `,
      },
    },
  },
};

/**
 * Shows the table with focus indicators visible to demonstrate accessibility features.
 */
export const AccessibilityDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This story highlights the accessibility features of the SortableDataTable:

### Keyboard Navigation Demo
1. Use Tab to enter the component (focuses first tab)
2. Use Left/Right arrows to move between tabs
3. Use Down arrow to move from tabs to column headers
4. Use Left/Right arrows to move between column headers  
5. Use Down arrow to move from headers to table cells
6. Use arrow keys to navigate within the table
7. Press Enter or Space to activate focused elements

### Screen Reader Support
- All interactive elements have proper ARIA labels
- Sort state changes are announced
- Visual icons have hidden text alternatives
- Table structure is properly exposed with roles

### Focus Management
- Clear visual focus indicators using NHS blue
- Focus remains visible during scrolling
- Focus order follows logical tab sequence
- Focus is restored appropriately after interactions
        `,
      },
    },
  },
};
