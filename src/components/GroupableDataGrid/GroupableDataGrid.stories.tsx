/**
 * GroupableDataGrid Stories
 * 
 * Comprehensive demos of all modes: flat, grouped, tree
 */

import type { Meta, StoryObj } from '@storybook/react';
import { GroupableDataGrid } from './GroupableDataGrid';

const meta: Meta<typeof GroupableDataGrid> = {
  title: 'NHS/Data/GroupableDataGrid',
  component: GroupableDataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# GroupableDataGrid

A unified, accessible table component supporting multiple display modes:

- **Flat Mode**: Standard data table
- **Grouped Mode**: Multi-level row grouping with aggregations
- **Tree Mode**: Hierarchical parent-child relationships  
- **Pivot Mode**: Cross-tabulation (future)

Built on D3 hierarchy for consistency with DataVisualisation components.

## Features

- 🎯 **Multiple Modes**: Switch between flat, grouped, tree, and pivot displays
- 📊 **Aggregations**: Built-in sum, avg, count, min, max, plus custom functions
- 🧮 **Calculated Fields**: Dynamic field computation with dependencies
- ♿ **ARIA Treegrid**: Full keyboard navigation following W3C patterns
- 🎨 **NHS Design Tokens**: Consistent styling with design system
- 📱 **Responsive**: Mobile-friendly with proper indentation
- 💾 **Persistence**: Optional localStorage for expansion state
- 🔍 **Type-Safe**: Complete TypeScript support

## Keyboard Navigation

- **↑↓**: Navigate rows
- **→**: Expand group/tree node
- **←**: Collapse group/tree node or move to parent
- **Space**: Toggle expansion
- **Enter**: Activate row
- **Home/End**: First/last row
- **Ctrl+Home/End**: Jump to boundaries

## Use Cases

- Patient lists grouped by ward/priority
- Organization hierarchies (trust → department → team)
- Medical taxonomies with nested categories
- Temporal grouping (year → quarter → month)
- Resource allocation across multiple dimensions
        `,
      },
    },
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['flat', 'grouped', 'tree', 'pivot'],
      description: 'Display mode for the data grid',
    },
    showControls: {
      control: 'boolean',
      description: 'Show expand/collapse controls',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GroupableDataGrid>;

// Sample healthcare data
const patientData = [
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
  {
    id: 'P002',
    name: 'James Smith',
    nhs_number: '234 567 8901',
    ward: 'Cardiology',
    room: 'C-101',
    bed: '2',
    age: 54,
    priority: 'Medium',
    ews_score: 4,
    diagnosis: 'Angina',
    admissionDate: '2025-11-05',
  },
  {
    id: 'P003',
    name: 'Emily Brown',
    nhs_number: '345 678 9012',
    ward: 'Cardiology',
    room: 'C-102',
    bed: '1',
    age: 71,
    priority: 'High',
    ews_score: 7,
    diagnosis: 'Arrhythmia',
    admissionDate: '2025-11-03',
  },
  {
    id: 'P004',
    name: 'Michael Davis',
    nhs_number: '456 789 0123',
    ward: 'Orthopedics',
    room: 'O-201',
    bed: '1',
    age: 45,
    priority: 'Low',
    ews_score: 2,
    diagnosis: 'Fracture - Tibia',
    admissionDate: '2025-11-08',
  },
  {
    id: 'P005',
    name: 'Lisa Wilson',
    nhs_number: '567 890 1234',
    ward: 'Orthopedics',
    room: 'O-201',
    bed: '2',
    age: 38,
    priority: 'Medium',
    ews_score: 3,
    diagnosis: 'ACL Repair',
    admissionDate: '2025-11-09',
  },
  {
    id: 'P006',
    name: 'David Taylor',
    nhs_number: '678 901 2345',
    ward: 'Orthopedics',
    room: 'O-202',
    bed: '1',
    age: 52,
    priority: 'Medium',
    ews_score: 4,
    diagnosis: 'Hip Replacement',
    admissionDate: '2025-11-06',
  },
  {
    id: 'P007',
    name: 'Jennifer Moore',
    nhs_number: '789 012 3456',
    ward: 'Emergency',
    room: 'E-001',
    bed: '1',
    age: 29,
    priority: 'Critical',
    ews_score: 11,
    diagnosis: 'Trauma - MVA',
    admissionDate: '2025-11-11',
  },
  {
    id: 'P008',
    name: 'Robert Anderson',
    nhs_number: '890 123 4567',
    ward: 'Emergency',
    room: 'E-002',
    bed: '1',
    age: 62,
    priority: 'High',
    ews_score: 9,
    diagnosis: 'Stroke',
    admissionDate: '2025-11-10',
  },
];

// Column definitions
const patientColumns = [
  { key: 'name', label: 'Patient Name' },
  { key: 'nhs_number', label: 'NHS Number' },
  { key: 'age', label: 'Age' },
  { key: 'priority', label: 'Priority' },
  { key: 'ews_score', label: 'EWS Score' },
  { key: 'diagnosis', label: 'Diagnosis' },
];

/**
 * Flat Mode: Standard table display
 */
export const FlatMode: Story = {
  args: {
    mode: 'flat',
    data: patientData,
    columns: patientColumns,
    ariaLabel: 'Patient list',
    showControls: false,
  },
};

/**
 * Single-Level Grouping: Group patients by ward
 */
export const SingleLevelGrouping: Story = {
  args: {
    mode: 'grouped',
    data: patientData,
    columns: patientColumns,
    groupConfig: {
      levels: [
        {
          groupBy: 'ward' as any,
          label: 'Ward',
          aggregations: [
            { column: 'age', type: 'avg', label: 'Avg Age', showInHeader: true },
            { column: 'ews_score', type: 'avg', label: 'Avg EWS', showInHeader: true },
          ],
          expandedByDefault: true,
        },
      ],
      initialExpanded: 'first',
    },
    ariaLabel: 'Patients grouped by ward',
    showControls: true,
  },
};

/**
 * Multi-Level Grouping: Ward → Priority
 */
export const MultiLevelGrouping: Story = {
  args: {
    mode: 'grouped',
    data: patientData,
    columns: patientColumns,
    groupConfig: {
      levels: [
        {
          groupBy: 'ward' as any,
          label: 'Ward',
          aggregations: [
            { column: 'age', type: 'count', label: 'Patient Count', showInHeader: true },
            { column: 'ews_score', type: 'max', label: 'Max EWS', showInHeader: true },
          ],
          expandedByDefault: false,
        },
        {
          groupBy: 'priority' as any,
          label: 'Priority Level',
          aggregations: [
            { column: 'ews_score', type: 'avg', label: 'Avg EWS', showInHeader: true },
          ],
          expandedByDefault: true,
        },
      ],
      initialExpanded: 'first',
      showSummaryFooter: true,
    },
    ariaLabel: 'Patients grouped by ward and priority',
    showControls: true,
  },
};

/**
 * Three-Level Grouping: Ward → Room → Bed
 */
export const ThreeLevelGrouping: Story = {
  args: {
    mode: 'grouped',
    data: patientData,
    columns: patientColumns,
    groupConfig: {
      levels: [
        {
          groupBy: 'ward' as any,
          label: 'Ward',
          expandedByDefault: true,
        },
        {
          groupBy: 'room' as any,
          label: 'Room',
          expandedByDefault: true,
        },
        {
          groupBy: 'bed' as any,
          label: 'Bed',
          expandedByDefault: false,
        },
      ],
      initialExpanded: 'all',
      maxAutoExpandDepth: 2,
    },
    ariaLabel: 'Patients grouped by ward, room, and bed',
    showControls: true,
  },
};

// Organization hierarchy data
const orgData = [
  {
    id: 'trust-1',
    parentId: null,
    name: 'NHS Foundation Trust',
    type: 'Trust',
    staffCount: 5000,
    budget: 50000000,
  },
  {
    id: 'dept-1',
    parentId: 'trust-1',
    name: 'Cardiology Department',
    type: 'Department',
    staffCount: 120,
    budget: 2000000,
  },
  {
    id: 'team-1',
    parentId: 'dept-1',
    name: 'Cardiology - Inpatient Team',
    type: 'Team',
    staffCount: 30,
    budget: 500000,
  },
  {
    id: 'team-2',
    parentId: 'dept-1',
    name: 'Cardiology - Outpatient Team',
    type: 'Team',
    staffCount: 25,
    budget: 400000,
  },
  {
    id: 'dept-2',
    parentId: 'trust-1',
    name: 'Emergency Department',
    type: 'Department',
    staffCount: 200,
    budget: 4000000,
  },
  {
    id: 'team-3',
    parentId: 'dept-2',
    name: 'Emergency - Triage Team',
    type: 'Team',
    staffCount: 50,
    budget: 1000000,
  },
  {
    id: 'team-4',
    parentId: 'dept-2',
    name: 'Emergency - Resuscitation Team',
    type: 'Team',
    staffCount: 40,
    budget: 900000,
  },
  {
    id: 'dept-3',
    parentId: 'trust-1',
    name: 'Orthopedics Department',
    type: 'Department',
    staffCount: 90,
    budget: 1500000,
  },
  {
    id: 'team-5',
    parentId: 'dept-3',
    name: 'Orthopedics - Surgery Team',
    type: 'Team',
    staffCount: 45,
    budget: 800000,
  },
];

const orgColumns = [
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
  { key: 'staffCount', label: 'Staff Count' },
  {
    key: 'budget',
    label: 'Budget',
    render: (item: any) => `£${(item.budget / 1000000).toFixed(1)}M`,
  },
];

/**
 * Tree Mode: Organization hierarchy
 */
export const TreeMode: Story = {
  args: {
    mode: 'tree',
    data: orgData,
    columns: orgColumns,
    treeConfig: {
      getId: (item: any) => item.id,
      getParentId: (item: any) => item.parentId,
      showConnectors: true,
      connectorStyle: 'solid',
      expandedByDefault: true,
      maxAutoExpandDepth: 1,
      aggregations: [
        { column: 'staffCount', type: 'sum', label: 'Total Staff' },
        { column: 'budget', type: 'sum', label: 'Total Budget' },
      ],
      showChildAggregations: true,
    },
    ariaLabel: 'Organization hierarchy',
    showControls: true,
  },
};

/**
 * Tree Mode: Fully Expanded
 */
export const TreeModeFullyExpanded: Story = {
  args: {
    mode: 'tree',
    data: orgData,
    columns: orgColumns,
    treeConfig: {
      getId: (item: any) => item.id,
      getParentId: (item: any) => item.parentId,
      showConnectors: true,
      expandedByDefault: true,
    },
    initialExpanded: 'all',
    ariaLabel: 'Organization hierarchy (fully expanded)',
    showControls: true,
  },
};

/**
 * With Calculated Fields
 */
export const WithCalculatedFields: Story = {
  args: {
    mode: 'grouped',
    data: patientData,
    columns: [
      ...patientColumns,
      { key: 'riskScore', label: 'Risk Score' },
      { key: 'lengthOfStay', label: 'Length of Stay (days)' },
    ],
    calculatedFields: [
      {
        key: 'riskScore',
        label: 'Risk Score',
        calculate: (row) => {
          const ageScore = row.age > 65 ? 2 : row.age > 50 ? 1 : 0;
          const ewsScore = row.ews_score > 7 ? 3 : row.ews_score > 4 ? 2 : 1;
          return ageScore + ewsScore;
        },
        dependencies: ['age', 'ews_score'],
      },
      {
        key: 'lengthOfStay',
        label: 'Length of Stay',
        calculate: (row) => {
          const admission = new Date(row.admissionDate);
          const today = new Date('2025-11-12');
          const diffTime = Math.abs(today.getTime() - admission.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays;
        },
        dependencies: ['admissionDate'],
      },
    ],
    groupConfig: {
      levels: [
        {
          groupBy: 'ward' as any,
          aggregations: [
            { column: 'riskScore', type: 'avg', label: 'Avg Risk', showInHeader: true },
            { column: 'lengthOfStay', type: 'avg', label: 'Avg LOS', showInHeader: true },
          ],
        },
      ],
    },
    ariaLabel: 'Patients with calculated risk scores',
    showControls: true,
  },
};

/**
 * Empty State
 */
export const EmptyState: Story = {
  args: {
    mode: 'flat',
    data: [],
    columns: patientColumns,
    ariaLabel: 'Empty patient list',
  },
};

/**
 * Loading State
 */
export const LoadingState: Story = {
  args: {
    mode: 'flat',
    data: patientData,
    columns: patientColumns,
    isLoading: true,
    ariaLabel: 'Loading patients',
  },
};

/**
 * Error State
 */
export const ErrorState: Story = {
  args: {
    mode: 'flat',
    data: patientData,
    columns: patientColumns,
    error: 'Failed to load patient data. Please try again.',
    ariaLabel: 'Patient list error',
  },
};
