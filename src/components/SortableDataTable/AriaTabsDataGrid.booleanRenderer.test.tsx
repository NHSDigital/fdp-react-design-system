import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';

interface Row { id: string; active: boolean; enabled: boolean; }

describe('AriaTabsDataGrid per-column customRenderer', () => {
  it('uses column.customRenderer over global booleanRenderer', () => {
    const data: Row[] = [
      { id: '1', active: true, enabled: false }
    ];

    const tabPanels = [
      {
        id: 'main',
        label: 'Main',
        data,
        columns: [
          { key: 'active', label: 'Active', customRenderer: (val: boolean) => val ? <span data-testid="active-col">ACTIVE</span> : <span data-testid="active-col">INACTIVE</span> },
          { key: 'enabled', label: 'Enabled' }
        ],
        ariaLabel: 'Boolean grid'
      }
    ];

    render(
      <AriaTabsDataGrid
        tabPanels={tabPanels}
        ariaLabel="Test grid"
        dataConfig={{ booleanRenderer: (v: boolean) => v ? <span data-testid="global-bool">YES</span> : <span data-testid="global-bool">NO</span> }}
      />
    );

    expect(screen.getByTestId('active-col').textContent).toBe('ACTIVE');
    expect(screen.getByTestId('global-bool').textContent).toBe('NO');
  });
});
