import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../../../test-utils/hydrationTest';
import RunChart, { type RunSeries, RunChartColor } from './RunChart';

function series(n = 10): RunSeries[] {
  const start = Date.UTC(2025,0,1);
  const data = Array.from({ length: n }, (_, i) => ({ x: new Date(start + i*86400000), y: 40 + ((i*7)%9 - 4) }));
  return [{ id: 'metric', data }];
}

describe('RunChart (hydration)', () => {
  it('hydrates without mismatch for a basic chart', () => {
    const ssr = <RunChart series={series()} yLabel="Value" lineColor={RunChartColor.NHSBlue} />;
    const client = <RunChart series={series()} yLabel="Value" lineColor={RunChartColor.NHSBlue} />;
    hydrateWithoutMismatch({ ssr, client });
  });
});
