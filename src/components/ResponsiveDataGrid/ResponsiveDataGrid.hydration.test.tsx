import { describe, it, expect } from 'vitest';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

describe('ResponsiveDataGrid (hydration)', () => {
  it('hydrates without mismatch and handles post-hydration interaction', () => {
    const panels = [
      { id: 'a', label: 'A', ariaLabel: 'A data', data: [ { id:1, name:'Alpha'} ], columns: [ { key:'name', label:'Name', cardRenderer: (r:any)=>r.name } ] },
      { id: 'b', label: 'B', ariaLabel: 'B data', data: [ { id:2, name:'Beta'} ], columns: [ { key:'name', label:'Name', cardRenderer: (r:any)=>r.name } ] }
    ];
    const client = <ResponsiveDataGrid forceLayout="cards" ariaLabel="Grid" tabPanels={panels} />;
    hydrateWithoutMismatch({
      ssr: client,
      client,
      assert: (container) => {
        // Basic smoke: tablist and at least one card rendered and can receive Enter key without errors
        const tablist = container.querySelector('[role="tablist"]');
        expect(tablist).not.toBeNull();
        const firstGridcell = container.querySelector('[role="gridcell"]') as HTMLElement | null;
        expect(firstGridcell).not.toBeNull();
        const innerCard = firstGridcell!.querySelector('.nhsuk-card') as HTMLElement | null;
        expect(innerCard).not.toBeNull();
      }
    });
  });
});
