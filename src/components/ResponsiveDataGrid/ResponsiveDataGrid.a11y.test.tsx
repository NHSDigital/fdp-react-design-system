import { describe, it } from 'vitest';
import { render, act, waitFor } from '@testing-library/react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import { expectAccessible } from '../../test-utils/accessibility';

describe('ResponsiveDataGrid (a11y)', () => {
  it('no axe violations (cards layout)', async () => {
    const tabPanels = [
      {
        id: 'p',
        label: 'Patients',
        ariaLabel: 'Patients data',
        data: [ { id:1, name:'Alice' } ],
        columns: [ { key:'name', label:'Name', cardRenderer: (r:any)=>r.name } ]
      }
    ];
  let container: HTMLElement | undefined;
  await act(async () => {
    ({ container } = render(<ResponsiveDataGrid forceLayout="cards" ariaLabel="Patients grid" tabPanels={tabPanels} />));
  });
  // Allow internal setTimeout/resize handlers to settle
  await new Promise(r => setTimeout(r, 50));
  await waitFor(() => {
    // basic assertion to ensure grid rendered before axe
    if (!container?.querySelector('[role="grid"]')) throw new Error('grid not ready');
  });
  if (!container) throw new Error('Container not set');
  await expectAccessible(container!);
  });
});
