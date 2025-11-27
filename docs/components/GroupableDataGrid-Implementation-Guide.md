# GroupableDataGrid Implementation Guide

A comprehensive developer guide for implementing the GroupableDataGrid component, covering all display modes, data structures, configuration options, and best practices.

## Table of Contents

1. [Overview](#overview)
2. [Installation & Import](#installation--import)
3. [Core Concepts](#core-concepts)
4. [Data Structures](#data-structures)
5. [Display Modes](#display-modes)
6. [Column Definitions](#column-definitions)
7. [Aggregation System](#aggregation-system)
8. [Calculated Fields](#calculated-fields)
9. [Expansion State Management](#expansion-state-management)
10. [Sorting Configuration](#sorting-configuration)
11. [Row Selection & Interaction](#row-selection--interaction)
12. [Accessibility & Keyboard Navigation](#accessibility--keyboard-navigation)
13. [Styling & Responsive Behaviour](#styling--responsive-behaviour)
14. [Complete Examples](#complete-examples)
15. [TypeScript Reference](#typescript-reference)

---

## Overview

GroupableDataGrid is a unified, accessible table component supporting multiple display modes:

| Mode | Description | Use Case |
|------|-------------|----------|
| `flat` | Standard data table | Simple tabular data display |
| `grouped` | Multi-level row grouping with aggregations | Categorised patient lists, ward groupings |
| `tree` | Hierarchical parent-child relationships | Organisation structures, taxonomies |
| `pivot` | Cross-tabulation (future) | Multi-dimensional analysis |

### Key Features

- **Multiple Modes**: Switch between flat, grouped, tree displays
- **Aggregations**: Built-in sum, avg, count, min, max, plus custom functions
- **Calculated Fields**: Dynamic field computation with dependencies
- **ARIA Treegrid**: Full keyboard navigation following W3C patterns
- **NHS Design Tokens**: Consistent styling with design system
- **Responsive**: Mobile-friendly with card and scroll options
- **Persistence**: Optional localStorage for expansion state

---

## Installation & Import

```tsx
import { GroupableDataGrid } from '@nhs-fdp/nhs-fdp-design-system';

// Or import specific types
import { 
  GroupableDataGrid,
  GroupableDataGridProps,
  GroupConfig,
  TreeConfig,
  ColumnDefinition,
  AggregationConfig,
  CalculatedField,
  SortConfig
} from '@nhs-fdp/nhs-fdp-design-system';
```

---

## Core Concepts

### Component Architecture

GroupableDataGrid uses D3-hierarchy internally for consistent data visualisation patterns. This provides:

- Efficient tree traversal algorithms
- Native aggregation support
- Consistent API with other data visualisation components
- Optimised performance for large datasets

### Controlled vs Uncontrolled

The component supports both patterns:

```tsx
// Uncontrolled - component manages expansion state internally
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  initialExpanded="first"
/>

// Controlled - parent manages expansion state
const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  expandedIds={expandedIds}
  onExpansionChange={setExpandedIds}
/>
```

---

## Data Structures

### Basic Data Array

All modes accept a flat array of data objects:

```tsx
interface PatientRecord {
  id: string;
  name: string;
  nhs_number: string;
  ward: string;
  room: string;
  bed: string;
  age: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  ews_score: number;
  diagnosis: string;
  admissionDate: string;
}

const patientData: PatientRecord[] = [
  {
    id: 'P001',
    name: 'Sarah Johnson',
    nhs_number: '123 456 7890',
    ward: 'Cardiology',
    room: 'C-101',
    bed: '1',
    age: 67,
    priority: 'High',
    ews_score: 8,
    diagnosis: 'Heart Failure',
    admissionDate: '2025-11-01',
  },
  // ... more records
];
```

### Tree Data Structure

For tree mode, data should include parent-child relationship identifiers:

```tsx
interface OrgUnit {
  id: string;
  parentId: string | null;  // null for root nodes
  name: string;
  type: 'Trust' | 'Department' | 'Team';
  staffCount: number;
  budget: number;
}

const orgData: OrgUnit[] = [
  {
    id: 'trust-1',
    parentId: null,  // Root node
    name: 'NHS Foundation Trust',
    type: 'Trust',
    staffCount: 5000,
    budget: 50000000,
  },
  {
    id: 'dept-1',
    parentId: 'trust-1',  // Child of trust-1
    name: 'Cardiology Department',
    type: 'Department',
    staffCount: 120,
    budget: 2000000,
  },
  {
    id: 'team-1',
    parentId: 'dept-1',  // Child of dept-1
    name: 'Cardiology - Inpatient Team',
    type: 'Team',
    staffCount: 30,
    budget: 500000,
  },
  // ... more records
];
```

---

## Display Modes

### Flat Mode

Standard table display without any grouping or hierarchy:

```tsx
<GroupableDataGrid
  mode="flat"
  data={patientData}
  columns={patientColumns}
  ariaLabel="Patient list"
  showControls={false}  // No expand/collapse needed
/>
```

### Grouped Mode (Single Level)

Group data by a single field:

```tsx
<GroupableDataGrid
  mode="grouped"
  data={patientData}
  columns={patientColumns}
  groupConfig={{
    levels: [
      {
        groupBy: 'ward',  // Field name to group by
        label: 'Ward',
        expandedByDefault: true,
        aggregations: [
          { column: 'age', type: 'avg', label: 'Avg Age', showInHeader: true },
          { column: 'ews_score', type: 'avg', label: 'Avg EWS', showInHeader: true },
        ],
      },
    ],
    initialExpanded: 'first',  // Expand first group only
  }}
  ariaLabel="Patients grouped by ward"
  showControls={true}
/>
```

### Grouped Mode (Multi-Level)

Nested grouping with multiple levels:

```tsx
<GroupableDataGrid
  mode="grouped"
  data={patientData}
  columns={patientColumns}
  groupConfig={{
    levels: [
      {
        groupBy: 'ward',
        label: 'Ward',
        aggregations: [
          { column: 'age', type: 'count', label: 'Patient Count', showInHeader: true },
          { column: 'ews_score', type: 'max', label: 'Max EWS', showInHeader: true },
        ],
        expandedByDefault: false,
      },
      {
        groupBy: 'priority',
        label: 'Priority Level',
        aggregations: [
          { column: 'ews_score', type: 'avg', label: 'Avg EWS', showInHeader: true },
        ],
        expandedByDefault: true,
      },
    ],
    initialExpanded: 'first',
    showSummaryFooter: true,
    maxAutoExpandDepth: 2,  // Auto-expand first 2 levels
  }}
  ariaLabel="Patients grouped by ward and priority"
/>
```

### Grouped Mode (Three Levels)

Deep nesting for complex categorisation:

```tsx
<GroupableDataGrid
  mode="grouped"
  data={patientData}
  columns={patientColumns}
  groupConfig={{
    levels: [
      { groupBy: 'ward', label: 'Ward', expandedByDefault: true },
      { groupBy: 'room', label: 'Room', expandedByDefault: true },
      { groupBy: 'bed', label: 'Bed', expandedByDefault: false },
    ],
    initialExpanded: 'all',
    maxAutoExpandDepth: 2,
  }}
  ariaLabel="Patients grouped by ward, room, and bed"
/>
```

### Tree Mode

Hierarchical parent-child relationships:

```tsx
<GroupableDataGrid
  mode="tree"
  data={orgData}
  columns={orgColumns}
  treeConfig={{
    getId: (item) => item.id,
    getParentId: (item) => item.parentId,
    showConnectors: true,
    connectorStyle: 'solid',  // 'solid' | 'dashed' | 'dotted'
    expandedByDefault: true,
    maxAutoExpandDepth: 1,
    aggregations: [
      { column: 'staffCount', type: 'sum', label: 'Total Staff' },
      { column: 'budget', type: 'sum', label: 'Total Budget' },
    ],
    showChildAggregations: true,  // Show aggregated child values at parent
    indentSize: 1.5,  // rem per level
  }}
  ariaLabel="Organisation hierarchy"
  showControls={true}
/>
```

---

## Column Definitions

### Basic Column Definition

```tsx
interface ColumnDefinition {
  key: string;           // Field key in data object
  label: string;         // Display header text
  sortable?: boolean;    // Enable column sorting
  width?: string;        // CSS width (e.g., '200px', '20%')
}

const columns: ColumnDefinition[] = [
  { key: 'name', label: 'Patient Name' },
  { key: 'nhs_number', label: 'NHS Number' },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'priority', label: 'Priority' },
  { key: 'ews_score', label: 'EWS Score', sortable: true },
  { key: 'diagnosis', label: 'Diagnosis' },
];
```

### Custom Cell Rendering

```tsx
const columns: ColumnDefinition[] = [
  { key: 'name', label: 'Patient Name' },
  {
    key: 'budget',
    label: 'Budget',
    render: (item) => `£${(item.budget / 1000000).toFixed(1)}M`,
  },
  {
    key: 'priority',
    label: 'Priority',
    customRenderer: (value, item) => (
      <span className={`priority-badge priority-badge--${value.toLowerCase()}`}>
        {value}
      </span>
    ),
  },
  {
    key: 'ews_score',
    label: 'EWS Score',
    customRenderer: (value) => (
      <span style={{ 
        color: value > 7 ? '#d5281b' : value > 4 ? '#ffb81c' : '#007f3b' 
      }}>
        {value}
      </span>
    ),
  },
];
```

---

## Aggregation System

### Built-in Aggregation Types

| Type | Description | Example Output |
|------|-------------|----------------|
| `sum` | Sum of numeric values | `1250` |
| `avg` | Average of numeric values | `45.5` |
| `count` | Count of items | `8` |
| `min` | Minimum value | `18` |
| `max` | Maximum value | `92` |
| `first` | First value in group | `"Critical"` |
| `last` | Last value in group | `"Low"` |
| `concat` | Concatenate string values | `"A, B, C"` |
| `countUnique` | Count unique values | `4` |
| `custom` | Custom aggregation function | Any |

### Aggregation Configuration

```tsx
interface AggregationConfig {
  column: string;              // Column key to aggregate
  type: AggregationType;       // Aggregation type
  customFn?: (values: any[], items: any[]) => any;  // For 'custom' type
  label?: string;              // Display label
  format?: (value: any) => React.ReactNode;  // Custom formatting
  showInHeader?: boolean;      // Show in group headers
  showInFooter?: boolean;      // Show in summary footer
}
```

### Aggregation Examples

```tsx
const aggregations: AggregationConfig[] = [
  // Basic aggregations
  { column: 'age', type: 'avg', label: 'Average Age', showInHeader: true },
  { column: 'ews_score', type: 'max', label: 'Max EWS', showInHeader: true },
  { column: 'id', type: 'count', label: 'Total Patients', showInHeader: true },
  
  // With custom formatting
  {
    column: 'budget',
    type: 'sum',
    label: 'Total Budget',
    format: (value) => `£${(value / 1000000).toFixed(2)}M`,
    showInHeader: true,
  },
  
  // Custom aggregation function
  {
    column: 'priority',
    type: 'custom',
    label: 'Priority Distribution',
    customFn: (values, items) => {
      const counts = values.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      return Object.entries(counts)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ');
    },
    showInHeader: true,
  },
  
  // Percentage calculation
  {
    column: 'ews_score',
    type: 'custom',
    label: 'High EWS %',
    customFn: (values) => {
      const highCount = values.filter(v => v > 6).length;
      return `${((highCount / values.length) * 100).toFixed(1)}%`;
    },
    showInHeader: true,
  },
];
```

### Nested Field Aggregation

Supports dot notation for nested object paths:

```tsx
const aggregations: AggregationConfig[] = [
  { column: 'patient.ward.name', type: 'countUnique', label: 'Unique Wards' },
  { column: 'vitals.heartRate', type: 'avg', label: 'Avg Heart Rate' },
];
```

---

## Calculated Fields

Calculated fields allow dynamic computation of values based on other fields:

```tsx
interface CalculatedField {
  key: string;                                    // Unique identifier
  label: string;                                  // Display label
  calculate: (row: any, allData: any[]) => any;  // Calculation function
  dependencies?: string[];                        // Fields this depends on
  format?: (value: any) => React.ReactNode;      // Display formatting
  groupable?: boolean;                            // Can be used for grouping
  aggregatable?: boolean;                         // Can be aggregated
}
```

### Examples

```tsx
const calculatedFields: CalculatedField[] = [
  // Risk score based on multiple factors
  {
    key: 'riskScore',
    label: 'Risk Score',
    calculate: (row) => {
      const ageScore = row.age > 65 ? 2 : row.age > 50 ? 1 : 0;
      const ewsScore = row.ews_score > 7 ? 3 : row.ews_score > 4 ? 2 : 1;
      return ageScore + ewsScore;
    },
    dependencies: ['age', 'ews_score'],
    aggregatable: true,
  },
  
  // Length of stay calculation
  {
    key: 'lengthOfStay',
    label: 'Length of Stay (days)',
    calculate: (row) => {
      const admission = new Date(row.admissionDate);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - admission.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    dependencies: ['admissionDate'],
  },
  
  // Percentage of total
  {
    key: 'budgetPercentage',
    label: 'Budget %',
    calculate: (row, allData) => {
      const total = allData.reduce((sum, r) => sum + r.budget, 0);
      return ((row.budget / total) * 100).toFixed(1) + '%';
    },
    dependencies: ['budget'],
  },
  
  // Status derivation
  {
    key: 'alertStatus',
    label: 'Alert Status',
    calculate: (row) => {
      if (row.ews_score >= 9) return 'Critical';
      if (row.ews_score >= 7) return 'Urgent';
      if (row.ews_score >= 4) return 'Warning';
      return 'Normal';
    },
    dependencies: ['ews_score'],
    groupable: true,  // Can group by this calculated field
  },
];

// Usage with GroupableDataGrid
<GroupableDataGrid
  mode="grouped"
  data={patientData}
  columns={[
    ...patientColumns,
    { key: 'riskScore', label: 'Risk Score' },
    { key: 'lengthOfStay', label: 'LOS (days)' },
  ]}
  calculatedFields={calculatedFields}
  groupConfig={{
    levels: [
      {
        groupBy: 'ward',
        aggregations: [
          { column: 'riskScore', type: 'avg', label: 'Avg Risk', showInHeader: true },
          { column: 'lengthOfStay', type: 'avg', label: 'Avg LOS', showInHeader: true },
        ],
      },
    ],
  }}
/>
```

---

## Expansion State Management

### Initial Expansion Options

```tsx
// All nodes collapsed
initialExpanded="none"

// All nodes expanded
initialExpanded="all"

// Only first-level nodes expanded
initialExpanded="first"

// Specific nodes by ID
initialExpanded={new Set(['group-1', 'group-2', 'group-3'])}

// Array of IDs (converted to Set internally)
initialExpanded={['group-1', 'group-2', 'group-3']}
```

### Controlled Expansion

```tsx
const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

const handleExpansionChange = (newExpandedIds: Set<string>) => {
  setExpandedIds(newExpandedIds);
  // Optionally persist to localStorage, analytics, etc.
  console.log('Expanded nodes:', Array.from(newExpandedIds));
};

<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  expandedIds={expandedIds}
  onExpansionChange={handleExpansionChange}
/>
```

### Expand/Collapse Controls

```tsx
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={{
    levels: [...],
    allowCollapseAll: true,  // Show expand/collapse all buttons
  }}
  showControls={true}  // Show control buttons
/>
```

### Custom Controls Renderer

```tsx
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  showControls={true}
  controlsRenderer={(context) => (
    <div className="custom-controls">
      <button onClick={() => context.expansion.expandAll()}>
        Expand All ({context.totalItems} items)
      </button>
      <button onClick={() => context.expansion.collapseAll()}>
        Collapse All
      </button>
      <button onClick={() => context.expansion.expandToDepth(1)}>
        Expand First Level
      </button>
      <span>Showing {context.visibleItems} of {context.totalItems}</span>
    </div>
  )}
/>
```

### Persistence with localStorage

The useGroupExpansion hook supports automatic persistence:

```tsx
// In custom implementations, use the hook directly
import { useGroupExpansion } from './hooks/useGroupExpansion';

const expansion = useGroupExpansion({
  initialExpanded: 'first',
  persistKey: 'patient-ward-expansion',  // localStorage key
  hierarchyManager: manager,
  onExpansionChange: (ids) => console.log('State changed:', ids),
});
```

---

## Sorting Configuration

### Basic Sorting

```tsx
const [sortConfig, setSortConfig] = useState<SortConfig[]>([
  { key: 'name', direction: 'asc' }
]);

<GroupableDataGrid
  mode="flat"
  data={data}
  columns={columns}
  sortConfig={sortConfig}
  onSortChange={setSortConfig}
/>
```

### Multi-Column Sorting

```tsx
<GroupableDataGrid
  mode="flat"
  data={data}
  columns={columns}
  sortConfig={[
    { key: 'ward', direction: 'asc' },
    { key: 'ews_score', direction: 'desc' },
  ]}
  onSortChange={setSortConfig}
  enableMultiSort={true}  // Enable shift+click for multi-sort
/>
```

### Group-Level Sorting

```tsx
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={{
    levels: [
      {
        groupBy: 'ward',
        sortDirection: 'asc',  // Sort groups alphabetically
        sortFn: (a, b) => {
          // Custom sort: Emergency first, then alphabetical
          if (a.key === 'Emergency') return -1;
          if (b.key === 'Emergency') return 1;
          return String(a.key).localeCompare(String(b.key));
        },
      },
    ],
  }}
/>
```

---

## Row Selection & Interaction

### Row Selection

```tsx
const [selectedRow, setSelectedRow] = useState<PatientRecord | null>(null);

<GroupableDataGrid
  mode="flat"
  data={patientData}
  columns={columns}
  selectedRow={selectedRow}
  onGlobalRowSelectionChange={setSelectedRow}
/>
```

### Row Click Handler

```tsx
<GroupableDataGrid
  mode="flat"
  data={patientData}
  columns={columns}
  onRowClick={(row, event) => {
    console.log('Clicked row:', row);
    // Navigate, open modal, etc.
    if (event.ctrlKey || event.metaKey) {
      // Handle ctrl/cmd+click
      openInNewTab(row.id);
    } else {
      navigateToDetail(row.id);
    }
  }}
/>
```

---

## Accessibility & Keyboard Navigation

GroupableDataGrid implements the W3C ARIA treegrid pattern for full accessibility:

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `↑` / `↓` | Navigate between rows |
| `→` | Expand current group/tree node |
| `←` | Collapse current group/tree node, or move to parent |
| `Space` | Toggle expansion of current node |
| `Enter` | Activate/select current row |
| `Home` | Move to first row |
| `End` | Move to last row |
| `Ctrl+Home` | Move to first row (same as Home) |
| `Ctrl+End` | Move to last row (same as End) |

### ARIA Attributes

```tsx
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  ariaLabel="Patient list grouped by ward"
  ariaDescription="Use arrow keys to navigate. Right arrow expands groups, left arrow collapses."
/>
```

### Screen Reader Announcements

The component automatically announces:

- Current position in list
- Expansion state changes
- Group summaries with aggregations
- Tree node relationships

---

## Styling & Responsive Behaviour

### Mobile Display Strategies

```tsx
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  mobileDisplay="auto"        // 'scroll' | 'cards' | 'auto'
  mobileBreakpoint={768}      // Breakpoint in pixels
/>
```

| Strategy | Description |
|----------|-------------|
| `scroll` | Horizontal scroll for table overflow |
| `cards` | Card-based layout for each row |
| `auto` | Cards below breakpoint, scroll above |

### Custom Styling

The component uses BEM naming conventions and NHS design tokens:

```scss
// Override default styles
.groupable-datagrid {
  // Container styles
  
  &__header {
    // Header row styles
  }
  
  &__group-row {
    // Group header row
    
    &--level-0 { /* First level */ }
    &--level-1 { /* Second level */ }
    &--level-2 { /* Third level */ }
  }
  
  &__data-row {
    // Data row styles
    
    &--focused { /* Keyboard focus */ }
    &--selected { /* Selected state */ }
  }
  
  &__data-cell {
    // Cell styles
  }
  
  &__tree-node {
    // Tree node styles
    
    &__connector {
      // Tree connector lines
    }
  }
}
```

### Custom Class Names

```tsx
<GroupableDataGrid
  mode="grouped"
  data={data}
  columns={columns}
  groupConfig={groupConfig}
  className="custom-patient-grid"
  data-testid="patient-grid"
/>
```

---

## Complete Examples

### Healthcare Patient Dashboard

```tsx
import { GroupableDataGrid } from '@nhs-fdp/nhs-fdp-design-system';

interface Patient {
  id: string;
  name: string;
  nhs_number: string;
  ward: string;
  room: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  ews_score: number;
  diagnosis: string;
  admissionDate: string;
}

const PatientDashboard: React.FC<{ patients: Patient[] }> = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const columns = [
    { key: 'name', label: 'Patient Name' },
    { key: 'nhs_number', label: 'NHS Number' },
    { 
      key: 'priority', 
      label: 'Priority',
      customRenderer: (value: string) => (
        <span className={`priority-${value.toLowerCase()}`}>{value}</span>
      ),
    },
    { 
      key: 'ews_score', 
      label: 'EWS',
      customRenderer: (value: number) => (
        <span className={value > 6 ? 'ews-high' : ''}>{value}</span>
      ),
    },
    { key: 'diagnosis', label: 'Diagnosis' },
  ];

  const calculatedFields = [
    {
      key: 'los',
      label: 'LOS',
      calculate: (row: Patient) => {
        const days = Math.floor(
          (Date.now() - new Date(row.admissionDate).getTime()) / 86400000
        );
        return days;
      },
      dependencies: ['admissionDate'],
    },
  ];

  return (
    <GroupableDataGrid
      mode="grouped"
      data={patients}
      columns={[...columns, { key: 'los', label: 'LOS (days)' }]}
      calculatedFields={calculatedFields}
      groupConfig={{
        levels: [
          {
            groupBy: 'ward',
            label: 'Ward',
            aggregations: [
              { column: 'id', type: 'count', label: 'Patients', showInHeader: true },
              { column: 'ews_score', type: 'max', label: 'Max EWS', showInHeader: true },
              { column: 'ews_score', type: 'avg', label: 'Avg EWS', showInHeader: true },
            ],
            expandedByDefault: false,
            sortDirection: 'asc',
          },
          {
            groupBy: 'priority',
            label: 'Priority',
            aggregations: [
              { column: 'id', type: 'count', label: 'Count', showInHeader: true },
            ],
            sortFn: (a, b) => {
              const order = { Critical: 0, High: 1, Medium: 2, Low: 3 };
              return order[a.key as keyof typeof order] - order[b.key as keyof typeof order];
            },
          },
        ],
        initialExpanded: 'first',
        showSummaryFooter: true,
      }}
      selectedRow={selectedPatient}
      onGlobalRowSelectionChange={setSelectedPatient}
      expandedIds={expandedIds}
      onExpansionChange={setExpandedIds}
      onRowClick={(patient) => {
        console.log('Navigate to patient:', patient.id);
      }}
      showControls={true}
      ariaLabel="Patient list grouped by ward and priority"
      mobileDisplay="auto"
    />
  );
};
```

### Organisation Hierarchy Tree

```tsx
import { GroupableDataGrid } from '@nhs-fdp/nhs-fdp-design-system';

interface OrgUnit {
  id: string;
  parentId: string | null;
  name: string;
  type: string;
  staffCount: number;
  budget: number;
}

const OrgChart: React.FC<{ units: OrgUnit[] }> = ({ units }) => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'type', label: 'Type' },
    { key: 'staffCount', label: 'Staff' },
    {
      key: 'budget',
      label: 'Budget',
      render: (item: OrgUnit) => `£${(item.budget / 1000000).toFixed(1)}M`,
    },
  ];

  return (
    <GroupableDataGrid
      mode="tree"
      data={units}
      columns={columns}
      treeConfig={{
        getId: (item) => item.id,
        getParentId: (item) => item.parentId,
        showConnectors: true,
        connectorStyle: 'solid',
        expandedByDefault: true,
        maxAutoExpandDepth: 2,
        aggregations: [
          { column: 'staffCount', type: 'sum', label: 'Total Staff' },
          { 
            column: 'budget', 
            type: 'sum', 
            label: 'Total Budget',
            format: (v) => `£${(v / 1000000).toFixed(1)}M`,
          },
        ],
        showChildAggregations: true,
        indentSize: 1.5,
      }}
      ariaLabel="Organisation structure"
      showControls={true}
    />
  );
};
```

---

## TypeScript Reference

### Main Component Props

```tsx
interface GroupableDataGridProps<T = any> {
  // Core props
  mode: 'flat' | 'grouped' | 'tree' | 'pivot';
  data: T[];
  columns: ColumnDefinition[];
  
  // Mode-specific configuration
  groupConfig?: GroupConfig<T>;
  treeConfig?: TreeConfig<T>;
  pivotConfig?: PivotConfig<T>;  // Future
  
  // Data enhancement
  calculatedFields?: CalculatedField[];
  
  // Expansion state
  initialExpanded?: Set<string> | 'all' | 'none' | 'first' | string[];
  expandedIds?: Set<string>;
  onExpansionChange?: (expandedIds: Set<string>) => void;
  
  // Selection
  selectedRow?: T | null;
  onGlobalRowSelectionChange?: (row: T | null) => void;
  onRowClick?: (row: T, event: React.MouseEvent) => void;
  
  // Sorting
  sortConfig?: SortConfig[];
  onSortChange?: (sortConfig: SortConfig[]) => void;
  enableMultiSort?: boolean;
  
  // Controls
  showControls?: boolean;
  controlsRenderer?: (context: ControlsContext<T>) => React.ReactNode;
  
  // States
  isLoading?: boolean;
  error?: string | null;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescription?: string;
  
  // Styling
  className?: string;
  'data-testid'?: string;
  mobileDisplay?: 'scroll' | 'cards' | 'auto';
  mobileBreakpoint?: number;
}
```

### GroupConfig Interface

```tsx
interface GroupConfig<T = any> {
  levels: GroupLevel<T>[];
  globalAggregations?: AggregationConfig[];
  showSummaryFooter?: boolean;
  allowCollapseAll?: boolean;
  initialExpanded?: 'all' | 'none' | 'first' | string[];
  maxAutoExpandDepth?: number;
  allowRegroup?: boolean;  // Future
  onRegroupLevels?: (newLevels: GroupLevel<T>[]) => void;  // Future
}

interface GroupLevel<T = any> {
  groupBy: keyof T | ((item: T) => string | number);
  label?: string;
  aggregations?: AggregationConfig[];
  expandedByDefault?: boolean;
  headerRenderer?: (group: GroupHeaderContext<T>) => React.ReactNode;
  sortDirection?: 'asc' | 'desc';
  sortFn?: (a: GroupNode<T>, b: GroupNode<T>) => number;
}
```

### TreeConfig Interface

```tsx
interface TreeConfig<T = any> {
  getId: (item: T) => string;
  getParentId?: (item: T) => string | null;
  rootIds?: string[];
  aggregations?: AggregationConfig[];
  showConnectors?: boolean;
  connectorStyle?: 'solid' | 'dashed' | 'dotted';
  expandedByDefault?: boolean;
  maxAutoExpandDepth?: number;
  nodeRenderer?: (context: TreeNodeContext<T>) => React.ReactNode;
  showChildAggregations?: boolean;
  indentSize?: number;
}
```

### AggregationConfig Interface

```tsx
interface AggregationConfig {
  column: string;
  type: 'sum' | 'avg' | 'count' | 'min' | 'max' | 'first' | 'last' | 'concat' | 'countUnique' | 'custom';
  customFn?: (values: any[], items: any[]) => any;
  label?: string;
  format?: (value: any) => React.ReactNode;
  showInHeader?: boolean;
  showInFooter?: boolean;
}
```

### CalculatedField Interface

```tsx
interface CalculatedField {
  key: string;
  label: string;
  calculate: (row: any, allData: any[]) => any;
  dependencies?: string[];
  format?: (value: any) => React.ReactNode;
  groupable?: boolean;
  aggregatable?: boolean;
}
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Groups not appearing | Ensure `mode="grouped"` and `groupConfig` is provided |
| Tree not rendering | Verify `getId` and `getParentId` return correct values |
| Aggregations showing NaN | Check column names match data keys exactly |
| Expansion state not persisting | Use controlled mode with localStorage persistence |
| Keyboard navigation not working | Ensure component has focus; check ARIA roles |

### Performance Tips

1. **Large datasets**: Consider implementing virtualization (future feature)
2. **Complex aggregations**: Memoize custom aggregation functions
3. **Frequent re-renders**: Use controlled expansion with `useCallback`
4. **Many calculated fields**: Limit dependencies to reduce recalculations

---

## Version History

- **Current**: Core flat, grouped, and tree modes fully implemented
- **Planned**: Pivot mode, virtualization, inline editing, drag-to-regroup

---

## Related Components

- `SortableDataTable` - Simple sortable table without grouping
- `ResponsiveDataGrid` - Responsive grid with tab support
- `AriaTabsDataGrid` - Tabbed data grid interface
