import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
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
  const { container } = render(<ResponsiveDataGrid forceLayout="cards" ariaLabel="Patients grid" tabPanels={tabPanels} />);
  await expectAccessible(container);
  });
});
