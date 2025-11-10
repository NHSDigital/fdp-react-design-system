import type { Meta, StoryObj } from '@storybook/react';
import SimpleSortableTable from './SimpleSortableTable';

const meta: Meta<typeof SimpleSortableTable> = {
  title: 'NHS/Content/Table/SimpleSortableTable/Examples',
  component: SimpleSortableTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
SimpleSortableTable applies MOJ Frontend SortableTable patterns to the NHS FDP Design System Table component.

## Progressive Enhancement

This component exemplifies progressive enhancement:
- **Base Layer**: Standard HTML table with all data visible
- **Enhancement**: JavaScript adds sorting buttons and ARIA attributes
- **Graceful Degradation**: Works without JavaScript (shows unsorted data)

## Features

- ✅ Accessible button-based column headers
- ✅ ARIA live region announces sort changes to screen readers
- ✅ Visual indicators (SVG arrows) show sort direction
- ✅ Keyboard navigable (tab to buttons, Enter/Space to sort)
- ✅ Automatic numeric vs string comparison
- ✅ Locale-aware string sorting
- ✅ Support for custom sort values

## Usage

\`\`\`tsx
<SimpleSortableTable
  caption="Monthly metrics"
  columns={[
    { key: 'metric', title: 'Metric', sortable: true },
    { key: 'value', title: 'Value', sortable: true, format: 'numeric' },
    { key: 'change', title: 'Change', sortable: false }
  ]}
  data={[
    { metric: 'Admissions', value: 120, change: '+5%' },
    { metric: 'Discharges', value: 95, change: '-2%' }
  ]}
  initialSort={{ key: 'value', direction: 'descending' }}
/>
\`\`\`

## Accessibility

- **ARIA attributes**: \`aria-sort\` on column headers indicates current sort state
- **Live regions**: Screen readers announce "Sort by [Column] [Direction]" on change
- **Button semantics**: Sortable headers use \`<button>\` elements
- **Keyboard support**: Full keyboard navigation with Tab and Enter/Space
- **Visual indicators**: SVG arrows show sort direction (not color-dependent)
- **Focus management**: Clear focus indicators on interactive elements

## Comparison to MOJ SortableTable

This implementation follows MOJ Frontend patterns:
- Same lifecycle: check elements → create buttons → attach listeners → sort on click
- Same ARIA approach: live regions for announcements, aria-sort on headers
- Same visual pattern: SVG icons synchronized with state
- Adapted for React: Uses hooks instead of vanilla DOM manipulation
- Built on NHS components: Uses NHS FDP Table as foundation
        `,
      },
    },
  },
  argTypes: {
    columns: {
      description: 'Array of column definitions with sortability',
      control: { type: 'object' },
    },
    data: {
      description: 'Array of data objects to display and sort',
      control: { type: 'object' },
    },
    caption: {
      description: 'Table caption (automatically enhanced with sortable hint)',
      control: { type: 'text' },
    },
    initialSort: {
      description: 'Initial sort state { key, direction }',
      control: { type: 'object' },
    },
    responsive: {
      description: 'Enable responsive table behavior',
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample datasets
const patientData = [
  { name: 'Sarah Phillips', age: 28, admissionDate: '2024-03-15', diagnosis: 'Pneumonia' },
  { name: 'John Smith', age: 45, admissionDate: '2024-03-12', diagnosis: 'Appendicitis' },
  { name: 'Emma Wilson', age: 62, admissionDate: '2024-03-18', diagnosis: 'Hip Replacement' },
  { name: 'Michael Brown', age: 34, admissionDate: '2024-03-10', diagnosis: 'Fracture' },
  { name: 'Lisa Anderson', age: 51, admissionDate: '2024-03-20', diagnosis: 'Diabetes Management' },
];

const metricsData = [
  { metric: 'Total Admissions', january: 1250, february: 1180, march: 1340 },
  { metric: 'Average Wait Time (mins)', january: 45, february: 52, march: 38 },
  { metric: 'Patient Satisfaction', january: 87, february: 89, march: 92 },
  { metric: 'Bed Occupancy %', january: 94, february: 91, march: 96 },
  { metric: 'Staff-to-Patient Ratio', january: 1.2, february: 1.3, march: 1.25 },
];

const medicationData = [
  { medication: 'Paracetamol', dosage: '500mg', frequency: 'Every 4-6 hours', stockLevel: 2500 },
  { medication: 'Ibuprofen', dosage: '200mg', frequency: 'Every 4-6 hours', stockLevel: 1800 },
  { medication: 'Amoxicillin', dosage: '250mg', frequency: 'Three times daily', stockLevel: 450 },
  { medication: 'Metformin', dosage: '500mg', frequency: 'Twice daily', stockLevel: 890 },
  { medication: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily', stockLevel: 1200 },
];

/**
 * Basic sortable table with patient data
 */
export const PatientList: Story = {
  args: {
    caption: 'Current Patients',
    columns: [
      { key: 'name', title: 'Patient Name', sortable: true },
      { key: 'age', title: 'Age', sortable: true, format: 'numeric' },
      { key: 'admissionDate', title: 'Admission Date', sortable: true },
      { key: 'diagnosis', title: 'Diagnosis', sortable: true },
    ],
    data: patientData,
    responsive: true,
  },
};

/**
 * Numeric data with initial sort applied
 */
export const MonthlyMetrics: Story = {
  args: {
    caption: 'Hospital Metrics - Q1 2024',
    columns: [
      { key: 'metric', title: 'Metric', sortable: true },
      { key: 'january', title: 'January', sortable: true, format: 'numeric' },
      { key: 'february', title: 'February', sortable: true, format: 'numeric' },
      { key: 'march', title: 'March', sortable: true, format: 'numeric' },
    ],
    data: metricsData,
    initialSort: { key: 'march', direction: 'descending' },
    responsive: true,
  },
};

/**
 * Mixed sortable and non-sortable columns
 */
export const MedicationInventory: Story = {
  args: {
    caption: 'Medication Stock Levels',
    columns: [
      { key: 'medication', title: 'Medication', sortable: true },
      { key: 'dosage', title: 'Dosage', sortable: false }, // Not sortable
      { key: 'frequency', title: 'Frequency', sortable: false }, // Not sortable
      { key: 'stockLevel', title: 'Stock Level', sortable: true, format: 'numeric' },
    ],
    data: medicationData,
    responsive: true,
  },
};

/**
 * Custom sort values example
 * 
 * Shows how to provide custom sort logic for formatted values
 */
export const CustomSortValues: Story = {
  args: {
    caption: 'Department Performance',
    columns: [
      { key: 'department', title: 'Department', sortable: true },
      { 
        key: 'rating', 
        title: 'Rating', 
        sortable: true,
        // Custom sort extracts numeric value from star rating
        sortValue: (row) => {
          const match = row.rating.match(/(\d+)/);
          return match ? parseInt(match[1]) : 0;
        }
      },
      { 
        key: 'budget', 
        title: 'Budget', 
        sortable: true,
        // Custom sort removes currency formatting
        sortValue: (row) => {
          const numStr = row.budget.replace(/[£,]/g, '');
          return parseFloat(numStr);
        }
      },
    ],
    data: [
      { department: 'Emergency', rating: '⭐⭐⭐⭐⭐ (5/5)', budget: '£2,500,000' },
      { department: 'Surgery', rating: '⭐⭐⭐⭐ (4/5)', budget: '£3,200,000' },
      { department: 'Pediatrics', rating: '⭐⭐⭐⭐⭐ (5/5)', budget: '£1,800,000' },
      { department: 'Radiology', rating: '⭐⭐⭐ (3/5)', budget: '£950,000' },
      { department: 'Cardiology', rating: '⭐⭐⭐⭐ (4/5)', budget: '£2,100,000' },
    ],
    responsive: true,
  },
};

/**
 * Large dataset to test performance
 */
export const LargeDataset: Story = {
  args: {
    caption: 'Patient Records (100 entries)',
    columns: [
      { key: 'id', title: 'Patient ID', sortable: true, format: 'numeric' },
      { key: 'name', title: 'Name', sortable: true },
      { key: 'age', title: 'Age', sortable: true, format: 'numeric' },
      { key: 'status', title: 'Status', sortable: true },
    ],
    data: Array.from({ length: 100 }, (_, i) => ({
      id: 1000 + i,
      name: `Patient ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
      age: Math.floor(Math.random() * 60) + 20,
      status: ['Active', 'Discharged', 'Awaiting Treatment'][Math.floor(Math.random() * 3)],
    })),
    responsive: true,
  },
};

/**
 * Minimal example - simplest possible usage
 */
export const Minimal: Story = {
  args: {
    caption: 'Simple Sortable Table',
    columns: [
      { key: 'name', title: 'Name' },
      { key: 'value', title: 'Value', format: 'numeric' },
    ],
    data: [
      { name: 'Item A', value: 10 },
      { name: 'Item B', value: 25 },
      { name: 'Item C', value: 15 },
    ],
  },
};

/**
 * With sort change callback
 * 
 * Demonstrates onSortChange callback for analytics or state management
 */
export const WithCallback: Story = {
  args: {
    caption: 'Department Statistics',
    columns: [
      { key: 'department', title: 'Department', sortable: true },
      { key: 'staff', title: 'Staff Count', sortable: true, format: 'numeric' },
      { key: 'patients', title: 'Patients', sortable: true, format: 'numeric' },
    ],
    data: [
      { department: 'Emergency', staff: 45, patients: 320 },
      { department: 'Surgery', staff: 62, patients: 180 },
      { department: 'Pediatrics', staff: 38, patients: 245 },
    ],
    onSortChange: (key, direction) => {
      console.log(`Table sorted by ${key} in ${direction} order`);
    },
    responsive: true,
  },
};
