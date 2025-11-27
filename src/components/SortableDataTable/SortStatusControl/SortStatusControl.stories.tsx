// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SortStatusControl } from './SortStatusControl';
import { SortConfig } from '../AriaDataGridTypes';
import { useFrutigerFonts } from '../../../hooks/useFrutigerFonts';

const meta: Meta<typeof SortStatusControl> = {
  title: 'NHS/Data/SortableDataTable/SortStatusControl',
  component: SortStatusControl,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A component for displaying and managing sort configuration for data tables with interactive tags.'
      }
    }
  },
  tags: [], // Removed 'autodocs' tag; dedicated docs page exists
};

export default meta;
type Story = StoryObj<typeof SortStatusControl>;

// Sample columns for the stories
const sampleColumns = [
  { key: 'name', label: 'Patient Name' },
  { key: 'date', label: 'Date Created' },
  { key: 'status', label: 'Status' },
  { key: 'priority', label: 'Priority Level' },
  { key: 'urgency', label: 'Urgency Score' },
  { key: 'code', label: 'NHS Number' },
  { key: 'ward', label: 'Ward Assignment' },
  { key: 'appointment', label: 'Appointment Time' },
  { key: 'medication', label: 'Medication Name' },
  { key: 'dosage', label: 'Dosage Amount' },
  { key: 'surname', label: 'Patient Surname' },
  { key: 'forename', label: 'Patient Forename' },
  { key: 'dob', label: 'Date of Birth' },
  { key: 'postcode', label: 'Postcode' },
  { key: 'gp', label: 'GP Practice' }
];

// Interactive story with state management
const SortStatusControlWithState = (args: any) => {
  const [sortConfig, setSortConfig] = useState<SortConfig[]>(args.sortConfig || []);
  const { fontFamily } = useFrutigerFonts();

  const handleSortChange = (newSortConfig: SortConfig[]) => {
    setSortConfig(newSortConfig);
  };

  return (
    <div style={{ fontFamily }}>
      <SortStatusControl
        {...args}
        sortConfig={sortConfig}
        onSortChange={handleSortChange}
        columns={sampleColumns}
      />
    </div>
  );
};

export const Default: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'name', direction: 'asc' },
      { key: 'date', direction: 'desc' },
      { key: 'status', direction: 'asc' }
    ]
  }
};
