import CUSUMChart, { type CUSUMSeries } from './CUSUMChart';
import ChartContainer from '../../charts/ChartContainer';

export default {
  title: 'Data Visualisation/Change over time/CUSUM chart',
};

function makeSeries(): CUSUMSeries {
  const start = new Date('2025-01-01').getTime();
  const data = Array.from({ length: 48 }).map((_, i) => {
    const x = new Date(start + i * 86400000 * 3);
    const base = 100 + Math.sin(i / 3) * 2; // small undulations
    const shift = i > 24 ? 1.2 : 0; // small sustained shift in second half
    return { x, y: base + shift };
  });
  return { id: 'demo', data };
}

export const Basic = () => (
  <ChartContainer title="CUSUM demo" description="CUSUM detects small sustained shifts earlier than SPC/Run">
    <CUSUMChart series={makeSeries()} />
  </ChartContainer>
);
