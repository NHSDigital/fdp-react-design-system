/**
 * @file GroupableDataGrid.ssr.test.tsx
 * @description Server-side rendering tests for GroupableDataGrid component
 */

import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { GroupableDataGrid } from './GroupableDataGrid';

describe('GroupableDataGrid - SSR Tests', () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ];

  const data = [
    { id: '1', name: 'Item A' },
    { id: '2', name: 'Item B' },
  ];

  it('should render HTML structure server-side', () => {
    const html = renderToString(
      <GroupableDataGrid
        columns={columns}
        data={data}
        mode="flat"
        ariaLabel="Test grid"
      />
    );

    expect(html).toContain('treegrid');
    expect(html).toContain('Item A');
  });

  it('should include ARIA attributes in SSR output', () => {
    const html = renderToString(
      <GroupableDataGrid
        columns={columns}
        data={data}
        mode="flat"
        ariaLabel="Test grid"
      />
    );

    expect(html).toContain('role="table"');
    expect(html).toContain('aria-label="Test grid"');
  });
});
