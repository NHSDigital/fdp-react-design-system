import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';

// Basic a11y coverage for table mode tabs data grid

function buildPanels() {
  return [
    {
      id: 'patients',
      label: 'Patients',
      ariaLabel: 'Patients data',
      data: [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 45 }
      ],
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' }
      ]
    },
    {
      id: 'empty',
      label: 'Empty',
      ariaLabel: 'Empty data',
      data: [],
      columns: [ { key: 'name', label: 'Name' } ]
    }
  ];
}

describe('AriaTabsDataGrid (a11y)', () => {
  it('no axe violations (basic)', async () => {
    const { container } = render(
      <AriaTabsDataGrid ariaLabel="Demo data grid" tabPanels={buildPanels()} />
    );
    await expectAccessible(container);
  });
});
