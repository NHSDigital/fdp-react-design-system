import PriestleyTimeline, { type Interval } from './PriestleyTimeline';
import ChartContainer from '../../charts/ChartContainer';

export default {
  title: 'Data Visualisation/Timeline/Priestley timeline',
};

const base: Interval[] = [
  { id: 'a', label: 'Patient A', start: new Date('2025-01-03'), end: new Date('2025-03-12') },
  { id: 'b', label: 'Patient B', start: new Date('2025-02-01'), end: new Date('2025-02-20') },
  { id: 'c', label: 'Patient C', start: new Date('2025-03-01') }, // open interval
  { id: 'd', label: 'Patient D', start: new Date('2025-01-20'), end: new Date('2025-04-04') },
];

export const Basic = () => (
  <ChartContainer title="Example Priestley timeline" description="Intervals on a shared time axis with overlap packing">
    <PriestleyTimeline data={base} showInlineLabels />
  </ChartContainer>
);

export const DenseOverlaps = () => {
  const data: Interval[] = [];
  const start = new Date('2025-01-01').getTime();
  for (let i = 0; i < 12; i++) {
    const s = new Date(start + i * 1000 * 60 * 60 * 24 * 6);
    const e = new Date(start + i * 1000 * 60 * 60 * 24 * 6 + 1000 * 60 * 60 * 24 * (10 + (i % 4)));
    data.push({ id: `i${i}`, label: `Item ${i + 1}`, start: s, end: e });
  }
  return (
    <ChartContainer title="Dense overlaps" description="Greedy lane packing handles overlaps with stacked lanes">
      <PriestleyTimeline data={data} />
    </ChartContainer>
  );
};
