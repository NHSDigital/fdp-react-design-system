# GroupableDataGrid Component

**Status**: 🚧 In Development - Core Infrastructure Complete

A unified, accessible table component supporting flat, grouped, tree, and pivot display modes with comprehensive D3-hierarchy integration.

## 🎯 Vision & Use Cases

### Healthcare Scenarios
- **Patient Hierarchies**: Group by ward → room → bed → patient
- **Organizational Structures**: Trust → department → team → staff member
- **Medical Taxonomies**: Condition category → condition → sub-condition
- **Temporal Grouping**: Year → quarter → month → week → day
- **Data Metrics Collections**: Category → metric → sub-metric with aggregations

### Cross-Tabulation & Pivot
- Clinical outcomes by department and time period
- Resource utilization across wards and shifts
- Performance metrics across multiple dimensions

## ✅ Completed Infrastructure (Phase 1)

### 1. Comprehensive Type System (`GroupableDataGrid.types.ts`)

Complete TypeScript definitions for all features:
- **4 Display Modes**: `flat | grouped | tree | pivot`
- **10 Aggregation Types**: sum, avg, count, min, max, first, last, concat, countUnique, custom
- **Calculated Fields**: Dynamic field computation with dependencies
- **Multi-Level Grouping**: Unlimited nesting depth with per-level configuration
- **Future-Proof**: Infrastructure for drag-to-regroup, inline editing, virtualization

```typescript
interface GroupableDataGridProps<T> {
  mode: 'flat' | 'grouped' | 'tree' | 'pivot';
  data: T[];
  columns: ColumnDefinition[];
  groupConfig?: GroupConfig<T>;
  treeConfig?: TreeConfig<T>;
  pivotConfig?: PivotConfig<T>;
  calculatedFields?: CalculatedField[];
  // ... extensive configuration options
}
```

### 2. Aggregation Engine (`utils/aggregations.ts`)

Production-ready aggregation system:
- Built-in aggregations with proper null handling
- Custom aggregation function support
- Calculated field enhancement
- Nested path support (`patient.ward.name`)
- Type inference for automatic aggregation selection
- Percentage calculations and formatting

```typescript
// Example usage
const aggregations = applyAggregations([
  { column: 'ews_score', type: 'avg' },
  { column: 'patient_count', type: 'count' },
  { column: 'priority', type: 'custom', customFn: (values) => /* ... */ }
], patientData);
```

### 3. D3 Hierarchy Manager (`utils/HierarchyDataManager.ts`)

Powerful data structure management:
- **Grouped Mode**: Dynamic multi-level grouping from flat data
- **Tree Mode**: Parent-child relationship handling with cycle detection
- **Smart Traversal**: Find nodes, ancestors, descendants, siblings
- **Aggregation Integration**: Automatic aggregation computation at each level
- **Flattening**: Convert hierarchy to renderable flat structure based on expansion state

```typescript
const manager = new HierarchyDataManager(
  patientData,
  'grouped',
  {
    levels: [
      { groupBy: 'ward_name', aggregations: [/*...*/] },
      { groupBy: 'priority_level', aggregations: [/*...*/] }
    ]
  }
);

const flattenedNodes = manager.getFlattenedNodes(expandedIds);
```

### 4. Expansion State Hook (`hooks/useGroupExpansion.ts`)

Complete expansion control:
- **Controlled & Uncontrolled Modes**: Like form inputs
- **LocalStorage Persistence**: Preserve expansion across sessions
- **Smart Initialization**: 'all' | 'none' | 'first' | specific IDs
- **Batch Operations**: expandAll(), collapseAll(), expandToDepth()
- **SSR Compatible**: No localStorage access on server

```typescript
const expansion = useGroupExpansion({
  initialExpanded: 'first',
  persistKey: 'patient-ward-expansion',
  onExpansionChange: (ids) => console.log('Expanded:', ids)
});
```

### 5. Tree Navigation Hook (`hooks/useTreeNavigation.ts`)

ARIA treegrid keyboard navigation:
- **Full Keyboard Support**: ↑↓←→ arrows, Home, End, Ctrl+Home/End
- **Smart Arrow Behavior**: → expands, ← collapses or moves to parent
- **Column Navigation**: Optional cell-by-cell navigation
- **Space/Enter**: Toggle expansion / activate row
- **Escape**: Exit navigation mode
- **Type-ahead Ready**: Infrastructure for future type-to-search

```typescript
const navigation = useTreeNavigation({
  flattenedNodes,
  expansionState,
  hierarchyManager,
  columnCount: columns.length,
  onRowActivate: (nodeId) => console.log('Activated:', nodeId)
});

<div onKeyDown={navigation.handleKeyDown}>
  {/* tree grid content */}
</div>
```

## 🏗️ Architecture Decisions

### Why D3 Hierarchy?

1. **Consistency**: Matches DataVisualisation components (SPCChart, LineChart, etc.)
2. **Powerful Traversal**: Built-in `.find()`, `.each()`, `.descendants()`, `.ancestors()`
3. **Aggregation Support**: Native `.sum()`, `.count()` methods
4. **Battle-Tested**: Mature, widely-used library with TypeScript support
5. **Performance**: Efficient tree algorithms

### Why Unified Component?

Rather than separate `GroupedTable`, `TreeTable`, `PivotTable`:
- **Shared Infrastructure**: Hooks, utilities, styles reused across modes
- **Consistent API**: Same props pattern, just change `mode`
- **Easier Maintenance**: Single test suite, single documentation
- **Flexible**: Easy to add new modes (e.g., `mode: 'kanban'` in future)

### Design Patterns Used

- **React Hooks**: Modern state management
- **Controlled/Uncontrolled**: Flexibility like native inputs
- **Compound Components**: Extensible architecture (future: `<GroupableDataGrid.Header>`)
- **Render Props**: Custom renderers for groups, nodes, cells
- **Builder Pattern**: Configuration objects for complex setups

## 🚀 Next Steps

### Immediate (Before First Release)

1. **Main Component** (`GroupableDataGrid.tsx`)
   - Mode switching logic
   - Render flattened nodes
   - Integrate expansion + navigation hooks
   - Handle flat mode (pass-through to existing grid)

2. **Sub-Components**
   - `GroupHeader.tsx`: Expandable group row with aggregations
   - `TreeConnectors.tsx`: Visual tree lines
   - `TreeNode.tsx`: Individual tree node rendering

3. **Styles** (`GroupableDataGrid.scss`)
   - NHS design tokens integration
   - Group indentation (2rem per level)
   - Tree connectors (NHS grey-3: #aeb7bd)
   - Hover/focus states
   - Responsive behavior

4. **Basic Stories**
   - Flat mode (baseline)
   - Single-level grouping
   - Multi-level grouping
   - Tree hierarchy
   - All modes comparison

5. **Core Tests**
   - Client: Expand/collapse, keyboard nav, aggregations
   - SSR: Render structure, ARIA attributes
   - Hydration: State preservation

### Medium-Term Enhancements

- **Virtualization**: Integrate `@tanstack/react-virtual` for large datasets
- **Pivot Mode**: Basic cross-tabulation implementation
- **Export**: CSV/JSON/Excel with hierarchy preservation
- **Drag-to-Regroup**: Reorder grouping levels
- **Column Resizing**: User-adjustable widths
- **Advanced Sorting**: Multi-level sort within groups

### Long-Term Vision

- **Inline Editing**: Edit cells directly in the grid
- **Filtering**: Per-column filters that work with grouping
- **Search**: Type-ahead search across hierarchy
- **Templates**: Pre-built configurations for common healthcare scenarios
- **AI Layout Suggestions**: Like ResponsiveDataGrid's intelligent layout

## 📋 API Preview

### Grouped Mode Example

```typescript
<GroupableDataGrid
  mode="grouped"
  data={patientData}
  columns={patientColumns}
  groupConfig={{
    levels: [
      {
        groupBy: 'ward_name',
        label: 'Ward',
        aggregations: [
          { column: 'patient_count', type: 'count', showInHeader: true },
          { column: 'ews_score', type: 'avg', showInHeader: true }
        ],
        expandedByDefault: true
      },
      {
        groupBy: 'priority_level',
        label: 'Priority',
        aggregations: [
          { column: 'wait_time', type: 'avg' }
        ]
      }
    ],
    globalAggregations: [
      { column: 'total_patients', type: 'count', showInFooter: true }
    ],
    initialExpanded: 'first',
    allowCollapseAll: true
  }}
  ariaLabel="Patients grouped by ward and priority"
/>
```

### Tree Mode Example

```typescript
<GroupableDataGrid
  mode="tree"
  data={organizationData}
  columns={orgColumns}
  treeConfig={{
    getId: (item) => item.id,
    getParentId: (item) => item.parentId,
    showConnectors: true,
    connectorStyle: 'solid',
    expandedByDefault: false,
    maxAutoExpandDepth: 2,
    aggregations: [
      { column: 'staff_count', type: 'sum' },
      { column: 'budget', type: 'sum' }
    ],
    showChildAggregations: true
  }}
  ariaLabel="Organization hierarchy"
/>
```

### Calculated Fields Example

```typescript
<GroupableDataGrid
  mode="grouped"
  data={metricsData}
  columns={metricsColumns}
  calculatedFields={[
    {
      key: 'compliance_percentage',
      label: 'Compliance %',
      calculate: (row) => (row.compliant / row.total) * 100,
      format: (value) => `${value.toFixed(1)}%`,
      groupable: true,
      aggregatable: true
    },
    {
      key: 'risk_score',
      label: 'Risk Score',
      calculate: (row) => calculateRiskScore(row.ews, row.age, row.comorbidities),
      dependencies: ['ews', 'age', 'comorbidities'],
      aggregatable: false
    }
  ]}
  groupConfig={{
    levels: [{
      groupBy: 'department',
      aggregations: [
        { column: 'compliance_percentage', type: 'avg' }
      ]
    }]
  }}
/>
```

## 🧪 Testing Strategy

Following the established 3-tier pattern:

### Client Tests (~25 tests)
- Expand/collapse groups
- Multi-level expansion
- Keyboard navigation (all keys)
- Aggregation calculations
- Calculated field computation
- Mode switching
- Custom renderers

### SSR Tests (~15 tests)
- Grouped structure renders
- Collapsed groups hide children
- Tree structure renders
- Aggregations in HTML
- ARIA attributes correct
- No client-only code in render

### Hydration Tests (~8 tests)
- Expansion state preserved
- Interactive after hydration
- No hydration mismatches
- Event handlers attached

### Accessibility Tests (~12 tests)
- ARIA treegrid pattern
- Keyboard navigation complete
- Screen reader announcements
- Focus management
- Expansion state announced
- High contrast compatibility

**Total: ~60 comprehensive tests**

## 🎨 Design Tokens

New tokens to be added:

```scss
// Group/Tree spacing
$groupable-grid-indent: 2rem;
$groupable-grid-indent-mobile: 1rem;

// Tree connectors
$tree-connector-color: #aeb7bd; // NHS grey-3
$tree-connector-width: 1px;
$tree-connector-style: solid;

// Group headers
$group-header-bg: #f0f4f5;           // NHS grey-5
$group-header-bg-hover: #d8dde0;     // NHS grey-4
$group-header-bg-expanded: #ffffff;
$group-header-border: 2px solid #005eb8; // NHS blue
$group-header-font-weight: 600;

// Group level colors (for multi-level visual distinction)
$group-level-colors: (
  1: #005eb8,  // NHS blue
  2: #41b6e6,  // NHS light blue
  3: #00a499,  // NHS aqua
  4: #006747,  // NHS dark green
  5: #8a1538,  // NHS dark red
);

// Aggregation display
$aggregation-text-color: #4c6272;   // NHS grey-1
$aggregation-font-size: 0.875rem;
$aggregation-badge-bg: #f0f4f5;

// Tree node states
$tree-node-hover-bg: #f0f4f5;
$tree-node-selected-bg: #e8edee;
$tree-node-focus-outline: 3px solid #ffeb3b; // NHS focus yellow
```

## 📚 Related Components

- **AriaTabsDataGrid**: Base grid with tabs and sorting
- **ResponsiveDataGrid**: Mobile-adaptive cards/table switching
- **AriaDataGrid**: Core sortable data grid
- **Table**: Simple NHS-styled table

## 🔗 References

- [W3C ARIA Treegrid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/)
- [D3 Hierarchy Documentation](https://d3js.org/d3-hierarchy)
- [NHS Design System - Tables](https://service-manual.nhs.uk/design-system/components/table)
- [Sencha ReactGrid](https://www.sencha.com/reactgrid/) - Inspiration source

---

**Built with**:
- ⚛️ React 19
- 📊 D3 Hierarchy
- ♿ ARIA Treegrid Pattern
- 🎨 NHS Design Tokens
- 🧪 Vitest + React Testing Library
- 📖 TypeScript 5+

**Maintainer**: NHS FDP Design System Team  
**License**: MIT  
**Status**: Phase 1 Complete - Ready for Component Implementation
