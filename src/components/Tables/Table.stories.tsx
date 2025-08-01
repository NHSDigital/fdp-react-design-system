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
Tables are used to display structured data in rows and columns, making it easy for users to scan, compare, and analyze information.

## When to use this component

Use tables when you need to:
- Display structured data with multiple columns
- Help users compare data across different categories
- Present data that users might need to sort or filter
- Show relationships between different pieces of information

## Accessibility considerations

- Use table headers (\`<th>\`) to identify row and column headers
- Use the \`scope\` attribute to associate headers with their data cells
- Provide a table caption when the table needs additional context
- Ensure tables are readable when linearized (screen readers read row by row)
- Consider responsive alternatives for complex tables on mobile devices

## Technical implementation

The Table component supports:
- Responsive design with mobile-friendly stacked layout
- Accessible table structure with proper headers and ARIA labels
- Support for complex cell types (headers, numeric alignment, colspan/rowspan)
- Optional panel wrapper with heading
- Customizable caption and styling variants
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

const patientData = [
  [
    { text: 'Name' },
    { text: 'Date of birth' },
    { text: 'Phone' },
    { text: 'Last appointment' }
  ],
  [
    { text: 'Sarah Phillips' },
    { text: '14 May 1965' },
    { text: '07700 900362' },
    { text: '22 Oct 2021' }
  ],
  [
    { text: 'Kerry Francis' },
    { text: '18 September 1954' },
    { text: '07700 900364' },
    { text: '10 Jan 2022' }
  ],
  [
    { text: 'Ashley Sanderson' },
    { text: '20 June 1976' },
    { text: '07700 900365' },
    { text: '15 Dec 2021' }
  ]
];

export const Default: Story = {
  args: {
    rows: basicData.slice(1),
    head: basicData[0].map(cell => ({ ...cell })),
    caption: 'Basic table example',
  },
};

export const PatientList: Story = {
  args: {
    rows: patientData.slice(1),
    head: patientData[0].map(cell => ({ ...cell })),
    caption: 'Patient appointments',
    captionSize: 'l',
  },
};

export const ResponsiveTable: Story = {
  args: {
    rows: patientData.slice(1).map(row => 
      row.map((cell, index) => ({
        ...cell,
        header: patientData[0][index].text
      }))
    ),
    head: patientData[0].map(cell => ({ ...cell })),
    caption: 'Responsive patient list',
    responsive: true,
  },
};

export const WithPanel: Story = {
  args: {
    rows: basicData.slice(1),
    head: basicData[0].map(cell => ({ ...cell })),
    caption: 'Current prescriptions',
    panel: true,
    heading: 'Medication Overview',
    headingLevel: 2,
  },
};