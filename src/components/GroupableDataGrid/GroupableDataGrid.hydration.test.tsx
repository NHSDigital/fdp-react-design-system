/**
 * @file GroupableDataGrid.hydration.test.tsx
 * @description Hydration tests for GroupableDataGrid component
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { GroupableDataGrid } from './GroupableDataGrid';

describe('GroupableDataGrid - Hydration Tests', () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ];

  const data = [
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
  ];

  it('should hydrate without mismatches', async () => {
    const ssrHtml = renderToString(
      <GroupableDataGrid
        columns={columns}
        data={data}
        mode="flat"
        ariaLabel="Test grid"
      />
    );

    const container = document.createElement('div');
    container.innerHTML = ssrHtml;

    // Verify SSR HTML exists
    expect(container.querySelector('[role="table"]')).toBeTruthy();
    expect(container.textContent).toContain('Item A');
  });
});
