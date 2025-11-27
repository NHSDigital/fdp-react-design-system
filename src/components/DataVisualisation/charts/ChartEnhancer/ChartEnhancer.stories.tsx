import type { Meta, StoryObj } from '@storybook/react';
import ChartEnhancer from './ChartEnhancer';
import { ChartNoScript } from '../ChartNoScript/ChartNoScript';

const meta: Meta<typeof ChartEnhancer> = {
  title: 'Data Visualisation/Utilities/ChartEnhancer',
  component: ChartEnhancer,
  parameters: {
    docs: {
      description: {
        component: 'Automatically applies the .fdp-chart--enhanced class to hide fallback tables from ChartNoScript once hydrated.'
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

export const Basic: StoryObj<typeof ChartEnhancer> = {
  render: () => (
    <ChartEnhancer delay={800}>
      <ChartNoScript title="Example KPI Trend (enhanced after 0.8s)" table={sampleTable} message="Preparing interactive chart…" />
    </ChartEnhancer>
  )
};

export const Comparison: StoryObj<typeof ChartEnhancer> = {
  name: 'Comparison (No Enhancer vs Enhancer)',
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <h4>Without Enhancer (fallback remains)</h4>
        <ChartNoScript title="Static Fallback Only" table={sampleTable} forceFallback />
      </div>
      <div>
        <h4>With Enhancer (fallback hides after delay)</h4>
        <ChartEnhancer delay={800}>
          <ChartNoScript title="Enhanced After Delay" table={sampleTable} />
        </ChartEnhancer>
      </div>
    </div>
  )
};
