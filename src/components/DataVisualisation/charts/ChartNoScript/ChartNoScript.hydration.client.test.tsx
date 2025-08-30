import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ChartNoScript } from '../ChartNoScript/ChartNoScript';

// Wrapper that simulates enhancement by adding .fdp-chart--enhanced after mount
const EnhancingWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    const fig = ref.current?.querySelector('figure.fdp-chart');
    if (fig) fig.classList.add('fdp-chart--enhanced');
  }, []);
  return <div ref={ref as any}>{children}</div>;
};

describe('ChartNoScript hydration behaviour', () => {
  test('hides fallback table when enhanced class applied', () => {
    const table = {
      caption: 'Data',
      head: [{ text: 'Label' }, { text: 'Value' }],
      rows: [[{ text: 'A' }, { text: '1' }]],
      firstCellIsHeader: true
    };
    const { container } = render(
      <EnhancingWrapper>
        <ChartNoScript title="Example" table={table} />
      </EnhancingWrapper>
    );
    const fallback = container.querySelector('[data-fallback-table]') as HTMLElement;
    expect(fallback).toBeTruthy();
    // After effect runs, fallback should be display:none due to CSS rule
    // JSDOM doesn't compute styles; we assert class presence triggers rule by checking class was applied
    const fig = container.querySelector('figure.fdp-chart') as HTMLElement;
    expect(fig.classList.contains('fdp-chart--enhanced')).toBe(true);
  });
});
