// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'NHS/Content/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
  component: `
Tables present structured data for comparison and scanning.

## When to use
Use when users need to compare values across categorical columns, scan a matrix of results, or export/tabulate data.

## Accessibility
- Always provide a caption (may be visually hidden with \`visuallyHiddenCaption\`)
- Mark row headers with \`scope="row"\` (or use \`<Table.Cell rowHeader />\`)
- Use semantic \`<th>\` for column headers; we generate them when you use the declarative columns API
- Prefer shorter cell contents on small screens; enable \`responsive\` when appropriate

## Two authoring styles
1. Manual: supply \`head\` + \`rows\` arrays (existing behaviour)
2. Declarative columns API: supply \`columns\` + \`data\` for auto head/row generation

Manual still works and takes precedence if provided. If \`head\`/\`rows\` are omitted we derive them from \`columns\` + \`data\`.

### Sub-components
| Sub-component | Purpose | Notes |
| ------------- | ------- | ----- |
| \`Table.Caption\` | Semantic caption element | Size prop (s/m/l/xl) mirrors NHS styles; can be visually hidden via main prop \`visuallyHiddenCaption\` |
| \`Table.BodyRow\` | Row wrapper | Back-compat alias \`Table.Row\` (deprecated) |
| \`Table.HeaderCell\` | Column header cell | Back-compat alias \`Table.TH\` (deprecated) |
| \`Table.Cell\` | Data or row-header cell | Set \`rowHeader\` to output a \`<th scope="row">\` |

### Declarative columns API

~~~tsx
<Table
  caption="Monthly metrics"
  visuallyHiddenCaption
  columns={[
    { key: 'metric', title: 'Metric' },
    { key: 'value', title: 'Value', format: 'numeric' },
  { key: 'delta', title: 'Δ vs prev', render: (v) => \`\${v > 0 ? '+' : ''}\${v}\` }
  ]}
  data={[
    { metric: 'Admissions', value: 120, delta: 5 },
    { metric: 'Discharges', value: 95, delta: -2 }
  ]}
  firstCellIsHeader
  responsive
/>
~~~

### Using Table.Cell directly
Useful when you want to mix manual structure with richer cells:
~~~tsx
<Table caption="Custom cells">
  <thead>
    <Table.BodyRow>
      <Table.HeaderCell text="Item" />
      <Table.HeaderCell text="Value" />
    </Table.BodyRow>
  </thead>
  <tbody>
    <Table.BodyRow>
      <Table.Cell rowHeader text="Admissions" />
  <Table.Cell format=\"numeric\" text=\"120\" />
    </Table.BodyRow>
  </tbody>
</Table>
~~~

Legacy aliases: Table.Row → BodyRow, Table.TH → HeaderCell (deprecated). In development, a console warning is logged when these aliases are accessed.
        `,
      },
    },
  },
  argTypes: {
    rows: {
      description: 'Array of table rows, where each row is an array of cell data',
      control: { type: 'object' },
    },
    head: {
      description: 'Array of table header cells',
      control: { type: 'object' },
    },
    caption: {
      description: 'Optional table caption text',
      control: { type: 'text' },
    },
    captionSize: {
      description: 'Size variant for the table caption',
      control: { type: 'select' },
      options: ['s', 'm', 'l', 'xl'],
    },
    responsive: {
      description: 'Enable responsive table behavior for mobile devices',
      control: { type: 'boolean' },
    },
    firstCellIsHeader: {
      description: 'Treat the first cell in each row as a header cell',
      control: { type: 'boolean' },
    },
    panel: {
      description: 'Wrap table in a panel container',
      control: { type: 'boolean' },
    },
    heading: {
      description: 'Panel heading text (only when panel=true)',
      control: { type: 'text' },
    },
    headingLevel: {
      description: 'Heading level for panel heading (1-6)',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    columns: {
      description: 'Declarative column definitions (auto-generates head & rows when data provided)',
      control: { type: 'object' },
    },
    data: {
      description: 'Raw data items consumed by declarative columns API',
      control: { type: 'object' },
    },
    visuallyHiddenCaption: {
      description: 'Render caption for assistive tech only (keeps semantics)',
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const basicData = [
  [
    { text: 'First name' },
    { text: 'Last name' },
    { text: 'Age' }
  ],
  [
    { text: 'Sarah' },
    { text: 'Phillips' },
    { text: '28', format: 'numeric' as const }
  ],
  [
    { text: 'Kerry' },
    { text: 'Francis' },
    { text: '32', format: 'numeric' as const }
  ]
];


export const Default: Story = {
  args: {
    rows: basicData.slice(1),
    head: basicData[0].map(cell => ({ ...cell })),
    caption: 'Basic table example',
  },
};

// Declarative columns + data
export const ColumnsApi: Story = {
  name: 'Declarative / Columns API',
  args: {
    caption: 'Monthly metrics',
    visuallyHiddenCaption: true,
    firstCellIsHeader: false,
    responsive: true,
    columns: [
      { key: 'metric', title: 'Metric' },
      { key: 'value', title: 'Value', format: 'numeric' as const },
      { key: 'delta', title: 'Δ vs prev', render: (v: number) => `${v > 0 ? '+' : ''}${v}` },
    ],
    data: [
      { metric: 'Admissions', value: 120, delta: 5 },
      { metric: 'Discharges', value: 95, delta: -2 },
      { metric: 'Transfers', value: 30, delta: 0 },
    ],
  },
};
