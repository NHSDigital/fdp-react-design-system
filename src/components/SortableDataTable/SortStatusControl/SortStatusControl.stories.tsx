import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SortStatusControl } from './SortStatusControl';
import { SortConfig } from '../AriaDataGridTypes';

const meta: Meta<typeof SortStatusControl> = {
  title: 'Components/SortStatusControl',
  component: SortStatusControl,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A component for displaying and managing sort configuration for data tables with interactive tags.'
      }
    }
  },
  tags: ['autodocs']
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

  const handleSortChange = (newSortConfig: SortConfig[]) => {
    setSortConfig(newSortConfig);
  };

  return (
    <SortStatusControl
      {...args}
      sortConfig={sortConfig}
      onSortChange={handleSortChange}
      columns={sampleColumns}
    />
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

export const Empty: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: []
  }
};

export const SingleSort: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'name', direction: 'asc' }
    ]
  }
};

export const WithCustomDescriptions: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'priority', direction: 'desc' },
      { key: 'urgency', direction: 'desc' }
    ],
    emptyDescription: 'No custom sorting has been applied to this data.',
    activeDescription: 'Data is currently sorted by multiple criteria for optimal viewing.'
  }
};

export const NoResetButton: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'code', direction: 'asc' },
      { key: 'ward', direction: 'asc' }
    ],
    showReset: false
  }
};

export const NoHelp: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'appointment', direction: 'asc' }
    ],
    showHelp: false
  }
};

export const Disabled: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'medication', direction: 'asc' },
      { key: 'dosage', direction: 'desc' }
    ],
    disabled: true
  }
};

export const ManyColumns: Story = {
  render: SortStatusControlWithState,
  args: {
    sortConfig: [
      { key: 'surname', direction: 'asc' },
      { key: 'forename', direction: 'asc' },
      { key: 'dob', direction: 'desc' },
      { key: 'postcode', direction: 'asc' },
      { key: 'gp', direction: 'asc' }
    ]
  }
};
