import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';
import {Grid, Row, Column } from '../../../Grid';

const meta: Meta<typeof MetricCard> = {
  title: 'Data Visualisation/Utilities/MetricCard',
  component: MetricCard,
  parameters: {
    docs: {
      description: {
        component: 'Headline KPI value with optional delta (change) and status accent. Designed for quick scanning and accessible announcements.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof MetricCard>;

export const Basic: Story = {
  args: { label: 'Total admissions', value: 1284 }
};

export const WithUnit: Story = {
  args: { label: 'Bed occupancy', value: 0.78, unit: '%', valueFormatter: n => (n*100).toFixed(1) }
};

export const WithDeltaPositive: Story = {
  args: { label: 'Discharges', value: 542, delta: { value: 34, isPercent: true }, status: 'positive' }
};

export const WithDeltaNegative: Story = {
  args: { label: 'Wait time (mins)', value: 42, delta: { value: -5 }, status: 'negative' }
};

export const WithInvertedDelta: Story = {
  args: { label: 'Infection rate', value: 1.2, unit: '%', delta: { value: -0.2, isPercent: true, invert: true }, status: 'positive' }
};

export const Loading: Story = {
  args: { label: 'Referrals', value: 0, loading: true }
};

export const Error: Story = {
  args: { label: 'Referrals', value: 0, error: 'Failed to load' }
};

export const GridLayout: Story = {
  render: () => (
	<Grid>
	  <Row>
		<Column width='one-quarter'>
		  <MetricCard label="Admissions" value={1284} />
		</Column>
		<Column width='one-quarter'>
		  <MetricCard label="Bed occupancy" value={0.83} unit="%" valueFormatter={n => (n*100).toFixed(1)} />
		</Column>
		<Column width='one-quarter'>
		  <MetricCard label="Discharges" value={542} delta={{ value: 34, isPercent: true }} status="positive" />
		</Column>
		<Column width='one-quarter'>
		  <MetricCard label="Wait time (mins)" value={42} delta={{ value: 5 }} status="negative" />
		</Column>
		</Row>
		<Row style={{ marginTop: '2rem' }}>
		<Column width='one-quarter'>
			<MetricCard label="Infection rate" value={1.2} unit="%" delta={{ value: -0.2, isPercent: true, invert: true }} status="positive" />
		</Column>
		</Row>
	</Grid>
  )
};
