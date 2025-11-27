import { renderHook } from '@testing-library/react';
import * as React from 'react';
import { LineScalesProvider, useScaleContext } from './ScaleContext';

const series = [
  { data: [ { x: new Date('2024-01-01'), y: 5 }, { x: new Date('2024-01-10'), y: 15 } ] },
  { data: [ { x: new Date('2024-01-03'), y: 2 }, { x: new Date('2024-01-08'), y: 20 } ] }
];

describe('ScaleContext', () => {
  it('provides x/y scales and tick helpers', () => {
    const wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
      <LineScalesProvider series={series as any} innerWidth={400} innerHeight={200}>{children}</LineScalesProvider>
    );
    const { result } = renderHook(() => useScaleContext(), { wrapper });
    expect(result.current).toBeTruthy();
    const ticks = result.current!.getXTicks();
    expect(Array.isArray(ticks)).toBe(true);
    const yTicks = result.current!.getYTicks();
    expect(yTicks.length).toBeGreaterThan(0);
  });
});
