# SortStatusControl Component

A React component for displaying and managing sort configuration for data tables. It provides an interactive tag-based interface that allows users to view current sorts, toggle sort directions, reorder sort priority, and remove sorts.

## Features

- **Interactive Tags**: Each active sort is displayed as a tag with the column name and priority
- **Direction Toggle**: Click the direction arrow (↑/↓) to toggle between ascending and descending
- **Priority Management**: Use up/down arrows (▲/▼) to change sort priority order
- **Remove Sorts**: Click the × button on any tag to remove that sort
- **Reset Functionality**: Clear all sorts with a single button click
- **Accessibility**: Full ARIA support with screen reader descriptions and keyboard navigation
- **Responsive**: Adapts to different screen sizes with mobile-friendly layout

## Usage

```tsx
import { SortStatusControl } from './SortStatusControl';
import { SortConfig } from '../AriaDataGridTypes';

const MyComponent = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig[]>([
    { key: 'name', direction: 'asc' },
    { key: 'date', direction: 'desc' }
  ]);

  const columns = [
    { key: 'name', label: 'Patient Name' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' }
  ];

  const handleSortChange = (newSortConfig: SortConfig[]) => {
    setSortConfig(newSortConfig);
    // Apply sorting to your data here
  };

  return (
    <SortStatusControl
      sortConfig={sortConfig}
      columns={columns}
      onSortChange={handleSortChange}
    />
  );
};
```

## Props

### SortStatusControlProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sortConfig` | `SortConfig[]` | Required | Current sort configuration array |
| `columns` | `SortColumn[]` | Required | Available columns for labeling sorts |
| `onSortChange` | `(newSortConfig: SortConfig[]) => void` | Required | Callback when sort configuration changes |
| `className` | `string` | `''` | Optional CSS class name for styling |
| `emptyDescription` | `ReactNode` | `'No sorting applied'` | Description text when no sorts are active |
| `activeDescription` | `ReactNode` | Auto-generated | Description text when sorts are active |
| `showReset` | `boolean` | `true` | Show/hide the reset button |
| `showHelp` | `boolean` | `true` | Show/hide the help text |
| `disabled` | `boolean` | `false` | Disable all interactions |
| `ariaLabel` | `string` | `'Sort configuration'` | ARIA label for the sort status region |
| `ariaDescribedBy` | `string` | `undefined` | Additional ARIA describedby IDs |

### SortConfig (from AriaDataGridTypes)

| Property | Type | Description |
|----------|------|-------------|
| `key` | `string` | Unique identifier for the sort column |
| `direction` | `'asc' \| 'desc'` | Sort direction - ascending or descending |

### SortColumn

| Property | Type | Description |
|----------|------|-------------|
| `key` | `string` | Unique identifier for the column |
| `label` | `string` | Display label for the column |

## Priority Management

The component manages sort priority based on the array order:

- **Index 0**: Highest priority (primary sort)
- **Index 1**: Second priority
- **Index N**: Lowest priority

Priority is displayed as numbered badges (1, 2, 3, etc.) on each tag.

## Styling

The component uses SCSS for styling with NHS Design System colors and spacing. Key CSS classes:

- `.sort-status-control` - Main container
- `.sort-status-control--empty` - Empty state styling
- `.sort-status-control__tags` - Tags container
- `.sort-status-control__tag` - Individual tag styling
- `.sort-status-control__tag-direction` - Direction toggle button
- `.sort-status-control__move-button` - Priority move buttons
- `.sort-status-control__reset-button` - Reset button styling

## Accessibility

- Full ARIA support with live regions for screen readers
- Keyboard navigation support
- High contrast mode support
- Reduced motion support for accessibility preferences
- Descriptive button labels and tooltips
- Proper focus management

## Integration with AriaTabsDataGrid

This component is designed to integrate seamlessly with `AriaTabsDataGrid.tsx`. To integrate:

1. The component is already integrated in the AriaTabsDataGrid
2. It automatically extracts column labels from all tab panels
3. It works directly with the existing `SortConfig` type

```tsx
<SortStatusControl
  sortConfig={state.sortConfig || []}
  columns={tabPanels.flatMap(panel => 
    panel.columns.map(col => ({ key: col.key, label: col.label }))
  ).filter((col, index, arr) => 
    arr.findIndex(c => c.key === col.key) === index // Remove duplicates
  )}
  onSortChange={(newSortConfig) => {
    dispatch({ type: 'SET_SORT', payload: newSortConfig });
  }}
  ariaLabel="Data grid sort configuration"
/>
```

## Examples

### Basic Usage

```tsx
<SortStatusControl
  sortConfig={[
    { id: 'name', label: 'Name', direction: 'asc', priority: 0 }
  ]}
  onSortChange={handleSortChange}
/>
```

### Custom Descriptions

```tsx
<SortStatusControl
  sortConfig={sortConfig}
  onSortChange={handleSortChange}
  emptyDescription="No custom sorting applied"
  activeDescription="Custom sorting is active"
/>
```

### Minimal Interface

```tsx
<SortStatusControl
  sortConfig={sortConfig}
  onSortChange={handleSortChange}
  showReset={false}
  showHelp={false}
/>
```

## Future Enhancements

- **Drag and Drop**: React Aria drag and drop support for reordering sorts
- **Save/Load Presets**: Ability to save and load sort configurations
- **Column Picker**: Integration with column visibility controls
- **Sort Templates**: Predefined sort configurations for common use cases
