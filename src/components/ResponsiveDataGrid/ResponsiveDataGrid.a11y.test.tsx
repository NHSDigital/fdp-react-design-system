import { describe, it, vi } from 'vitest';
import { render, act } from '@testing-library/react';
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
  vi.useFakeTimers();
  await act(async () => {
    ({ container } = render(<ResponsiveDataGrid forceLayout="cards" ariaLabel="Patients grid" tabPanels={tabPanels} />));
    // Flush immediate timeouts (0ms) and debounced layout timers (<= 250ms used in component)
    vi.advanceTimersByTime(300);
  });
  if (!container) throw new Error('Container not set');
  await act(async () => {
    await expectAccessible(container!);
  });
  vi.useRealTimers();
  });
});
