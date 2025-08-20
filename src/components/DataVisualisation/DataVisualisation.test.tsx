import { render } from '@testing-library/react';
import * as React from 'react';
import { ChartContainer, LineChart } from './index';

describe('DataVisualisation', () => {
  it('renders a line chart inside ChartContainer', () => {
    const series = [{ id: 's', data: [{ x: new Date(), y: 5 }, { x: new Date(Date.now()+86400000), y: 10 }] }];
    const { getByRole, getAllByRole } = render(
      <ChartContainer title="Test" description="Desc">
        <LineChart series={series} />
      </ChartContainer>
    );
    expect(getByRole('figure')).toBeTruthy();
    expect(getAllByRole('img').length).toBeGreaterThan(0);
  });
});
