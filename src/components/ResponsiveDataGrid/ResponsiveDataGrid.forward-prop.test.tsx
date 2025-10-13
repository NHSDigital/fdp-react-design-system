import { render, screen } from '@testing-library/react';
import React from 'react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';

const rows = [
  { id: '1', name: 'A' },
  { id: '2', name: 'B' }
];

const tabPanels = [
  {
    id: 'single',
    label: 'Single',
    ariaLabel: 'Single panel grid',
    data: rows,
    columns: [
      { key: 'name', label: 'Name' }
    ]
  }
];

describe('ResponsiveDataGrid forwards hideTabsIfSingle', () => {
  it('hides tablist when hideTabsIfSingle is true and only one panel is provided in table layout', () => {
    render(
      <ResponsiveDataGrid
        ariaLabel="RDG"
        forceLayout="table"
        tabPanels={tabPanels}
        hideTabsIfSingle
      />
    );
    expect(screen.queryByRole('tablist')).toBeNull();
    const grid = screen.getByRole('grid', { name: /single panel grid/i });
    expect(grid).toBeTruthy();
  });
});
