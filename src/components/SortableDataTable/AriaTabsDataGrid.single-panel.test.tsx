import { render, screen } from '@testing-library/react';
import React from 'react';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';

const rows = [
  { id: '1', name: 'Item A', value: 1 },
  { id: '2', name: 'Item B', value: 2 }
];

const tabPanels = [
  {
    id: 'only',
    label: 'Only',
    ariaLabel: 'Only panel grid',
    data: rows,
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'value', label: 'Value' }
    ]
  }
];

describe('AriaTabsDataGrid hideTabsIfSingle', () => {
  it('hides tablist when hideTabsIfSingle is true and only one panel is provided', () => {
    render(<AriaTabsDataGrid ariaLabel="Test grid" tabPanels={tabPanels} hideTabsIfSingle />);
    expect(screen.queryByRole('tablist')).toBeNull();
    // Table should still be present
    const grid = screen.getByRole('grid', { name: /only panel grid/i });
    expect(grid).toBeTruthy();
  });

  it('shows tablist when hideTabsIfSingle is false (default)', () => {
    render(<AriaTabsDataGrid ariaLabel="Test grid" tabPanels={tabPanels} />);
    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeTruthy();
  });
});
