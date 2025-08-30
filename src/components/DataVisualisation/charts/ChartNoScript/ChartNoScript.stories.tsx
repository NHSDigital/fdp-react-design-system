import type { Meta, StoryObj } from '@storybook/react';
import { ChartNoScript } from './ChartNoScript';

const meta: Meta<typeof ChartNoScript> = {
  title: 'Data Visualisation/Utilities/ChartNoScript',
  component: ChartNoScript,
  parameters: {
    docs: {
      description: {
        component: 'Static SSR-friendly fallback providing a table and accessible structure when interactive charts are not yet hydrated or scripting is disabled.'
      }
    }
  }
};
export default meta;

const sampleTable: any = {
  caption: 'Sample Data',
  head: [
    { text: 'Month' },
    { text: 'Value', format: 'numeric' }
  ],
  rows: [
    [ { text: 'Jan' }, { text: '10', format: 'numeric' } ],
    [ { text: 'Feb' }, { text: '14', format: 'numeric' } ],
    [ { text: 'Mar' }, { text: '9',  format: 'numeric' } ]
  ],
  firstCellIsHeader: true
};

export const Basic: StoryObj<typeof ChartNoScript> = {
  args: {
    title: 'Example KPI Trend',
    description: 'Demonstrates fallback table for users without JavaScript',
    source: 'Internal KPI Dataset',
  table: sampleTable
  }
};

export const ForcedFallback: StoryObj<typeof ChartNoScript> = {
  args: {
  ...Basic.args,
    forceFallback: true,
    message: 'Waiting for enhancement…'
  }
};
