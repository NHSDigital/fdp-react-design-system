/**
 * @file GroupableDataGrid.client.test.tsx
 * @description Client-side interactive behavior tests for GroupableDataGrid component
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GroupableDataGrid } from './GroupableDataGrid';

describe('GroupableDataGrid - Client Tests', () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ];

  const data = [
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
  ];

  it('should render in flat mode', () => {
    render(
      <GroupableDataGrid
        columns={columns}
        data={data}
        mode="flat"
        ariaLabel="Test grid"
      />
    );

    expect(screen.getByRole('table', { name: 'Test grid' })).toBeInTheDocument();
    expect(screen.getByText('Item A')).toBeInTheDocument();
  });
});
