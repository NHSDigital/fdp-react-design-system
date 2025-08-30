import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ChartEnhancer from '../ChartEnhancer/ChartEnhancer';
import { ChartNoScript } from '../ChartNoScript/ChartNoScript';

describe('ChartEnhancer', () => {
  it('adds enhancement class to nested chart figure(s)', async () => {
    const table = {
      caption: 'Data',
      head: [{ text: 'Label' }, { text: 'Value' }],
      rows: [[{ text: 'A' }, { text: '1' }]],
      firstCellIsHeader: true
    };
    const { container } = render(
      <ChartEnhancer>
        <ChartNoScript title="Test" table={table} />
      </ChartEnhancer>
    );
    const fig = container.querySelector('figure.fdp-chart');
    expect(fig).toBeTruthy();
    await waitFor(() => {
      expect(fig?.classList.contains('fdp-chart--enhanced')).toBe(true);
    });
  });
});
