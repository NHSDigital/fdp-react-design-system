import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SPCChart, ImprovementDirection, SequenceTransition, type SPCDatum } from './SPCChart';
import { ChartContainer } from '../../ChartContainer.tsx';
import { buildSpcSqlCompat } from './logic/spcSqlCompat';
import { ChartType } from './logic/spc';
import { seedPRNG } from '../../../stories/utils/deterministic';

const meta: Meta<typeof SPCChart> = {
  title: 'Data Visualisation/SPC/SQL Compatibility',
  component: SPCChart,
  parameters: {
    docs: {
      description: {
        component: 'Experimental SQL compatibility wrapper. Shows base engine vs SQL-style directional pruning (PrimeDirection) outcomes. For most orthodox datasets both modes align; deltas primarily appear when historic SQL logic would have pruned conflicting directional candidates.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof SPCChart>;

function synthData(): SPCDatum[] {
  const rand = seedPRNG(20250910);
  const pts: SPCDatum[] = [];
  for (let i=0;i<40;i++) {
    const base = i < 18 ? 120 : 128; // embedded shift
    const noise = (rand() - 0.5) * 4;
    pts.push({ x: i+1, y: Math.round(base + noise) });
  }
  // Insert an engineered downward local run while metric is Up for potential concern side candidates
  for (let j=22;j<28;j++) pts[j].y -= (j-21); // decreasing streak
  // Add a high outlier near the end
  pts[34].y += 15;
  return pts;
}

export const Comparison: Story = {
  name: 'Base vs SQL compatibility (experimental)',
  render: () => {
    const data = React.useMemo(() => synthData(), []);
    const [mode, setMode] = React.useState<'base' | 'sql'>('base');
  const sql = React.useMemo(() => mode === 'sql' ? buildSpcSqlCompat({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: data.map(d => ({ x: d.x, value: d.y })) }) : null, [mode, data]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="button" onClick={() => setMode('base')} disabled={mode === 'base'} style={{ padding: '0.4rem 0.75rem', cursor: mode === 'base' ? 'default' : 'pointer' }}>Base engine</button>
          <button type="button" onClick={() => setMode('sql')} disabled={mode === 'sql'} style={{ padding: '0.4rem 0.75rem', cursor: mode === 'sql' ? 'default' : 'pointer' }}>SQL compatibility</button>
        </div>
        <ChartContainer
          title={mode === 'base' ? 'Base engine' : 'SQL compatibility'}
          description={mode === 'base' ? 'Orthodox aggregation (no directional pruning).' : 'Post-processed directional pruning (PrimeDirection) emulating legacy SQL ranking.'}
        >
          <SPCChart
            data={data}
            chartType={ChartType.XmR}
            metricImprovement={ImprovementDirection.Up}
            gradientSequences
            sequenceTransition={SequenceTransition.Slope}
            unit='%'
            announceFocus
            useSqlCompatEngine={mode === 'sql'}
          />
          {mode === 'sql' && sql && (
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', lineHeight: 1.3 }}>
              <strong>PrimeDirection summary:</strong>{' '}
              {sql.rows.filter(r => r.primeDirection).length ? sql.rows.filter(r => r.primeDirection).map(r => `${r.rowId}:${r.primeDirection}`).join(', ') : 'none'}
              <div style={{ opacity: 0.8, marginTop: '0.25rem' }}>Also surfaced per-point inside tooltip when SQL mode is active.</div>
            </div>
          )}
        </ChartContainer>
      </div>
    );
  }
};
