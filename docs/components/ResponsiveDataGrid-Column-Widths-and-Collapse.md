# Column widths, overflow and collapse in ResponsiveDataGrid

This guide explains how to set minimum column widths, handle overflow, and opt into automatic column collapsing for dense tables. The same API is forwarded to `AriaTabsDataGrid` in table and hybrid layouts.

## Why this exists

- Prevents unreadable, squashed columns
- Preserves keyboard and screen reader order by omitting collapsed columns from the DOM
- Provides a clear user affordance when columns are hidden (indicator chip + popover)

## API overview

### Grid-level props

- `minColumnWidth?: number | string` – Global fallback minimum width for all columns (e.g., 160)
- `enableColumnCollapse?: boolean` – Enable collapse logic when the table doesn't fit
- `minVisibleColumns?: number` – Never collapse below this number of visible columns
- `showCollapsedColumnsIndicator?: boolean` – Show a chip with the count of hidden columns; clicking reveals a list

### Column-level props (ColumnDefinition)

- `minWidth?: number | string` – Overrides the global minimum width for this column
- `collapsePriority?: number` – Higher collapses earlier (use small integers like 1–3)
- `alwaysVisible?: boolean` – Never collapse this column
- `collapseGroup?: string` – Optional group name
- `collapseGroupPriority?: number` – Higher groups collapse earlier than lower ones

Notes:

- Per-column `minWidth` takes precedence over the grid's `minColumnWidth`.
- All props are optional; sensible defaults apply when omitted.

## How the collapse algorithm works

1. Compute the sum of minimum widths for columns in the current tab
2. If it exceeds the container width, start collapsing:
   - Collapse whole groups first in descending `collapseGroupPriority`
   - Then collapse individual columns by descending `collapsePriority`
3. Never collapse columns marked `alwaysVisible`
4. Break ties by preferring to collapse later/right-most columns
5. Stop collapsing when content fits, respecting `minVisibleColumns`

Collapsed columns are not rendered in the DOM. Sorting, focus, and tab order only consider visible columns.

## Usage examples

### Basic: Global min width

```tsx
<ResponsiveDataGrid
  ariaLabel="My data"
  minColumnWidth={160}
  tabPanels={[{ id: 'all', label: 'All', ariaLabel: 'All rows', data, columns }]}
/>
```

### Per-column overrides and collapse

```tsx
<ResponsiveDataGrid
  ariaLabel="Cases"
  minColumnWidth={160}
  enableColumnCollapse
  minVisibleColumns={3}
  showCollapsedColumnsIndicator
  tabPanels={[{
    id: 'open',
    label: 'Open',
    ariaLabel: 'Open cases',
    data,
    columns: [
      { key: 'title', label: 'Title', minWidth: 240, alwaysVisible: true },
      { key: 'ref', label: 'Ref', minWidth: 160, collapseGroup: 'ids', collapseGroupPriority: 2 },
      { key: 'owner', label: 'Owner', minWidth: 180, collapsePriority: 1 },
      { key: 'status', label: 'Status', minWidth: 140 }
    ]
  }]}
/>
```

## Accessibility and UX

- Collapsed columns are removed from the DOM → predictable keyboard navigation
- An aria-live region announces changes to the collapsed set
- The collapsed-columns chip is keyboard activatable and opens a simple popover listing hidden columns
- Horizontal scrolling supports Shift + Arrow keys in addition to native gestures
- Long cell content uses ellipsis truncation to limit row height growth

## Recommendations

- Start with `minColumnWidth` around 160–200px; override specific columns as needed
- Use small integer priorities (1–3) to keep intent clear
- Group related columns (e.g., identifiers) under a shared `collapseGroup`
- Mark critical columns as `alwaysVisible`

## SSR compatibility

- All logic runs without relying on `window`/`document` in render paths
- Server-side output only includes visible columns; hydration reconciles correctly

## Troubleshooting

- Indicator not visible: ensure `showCollapsedColumnsIndicator` is true and that collapse actually occurred
- Unexpected collapse: check `alwaysVisible`, priorities, and `minVisibleColumns`
- Scroll feels constrained: adjust `minColumnWidth` and per-column `minWidth`

## See also

- `src/components/SortableDataTable/AriaTabsDataGrid.mdx` – AriaTabsDataGrid docs
- Storybook stories demonstrating column widths and collapse
