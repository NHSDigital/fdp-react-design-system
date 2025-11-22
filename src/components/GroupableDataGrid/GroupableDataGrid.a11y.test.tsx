/**
 * @file GroupableDataGrid.a11y.test.tsx
 * @description Accessibility tests for GroupableDataGrid component
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { GroupableDataGrid } from './GroupableDataGrid';

expect.extend(toHaveNoViolations);

describe('GroupableDataGrid - Accessibility Tests', () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ];

  const data = [
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
  ];

  it('should have no axe violations in flat mode', async () => {
    const { container } = render(
      <GroupableDataGrid
        columns={columns}
        data={data}
        mode="flat"
        ariaLabel="Test grid"
      />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations in grouped mode', async () => {
    const { container } = render(
      <GroupableDataGrid
        columns={columns}
        data={data}
        mode="grouped"
        groupConfig={{
          levels: [{ groupBy: 'name' as any }],
        }}
        ariaLabel="Grouped grid"
      />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
