import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import React from 'react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';

// Minimal SSR structural test – no client effects executed
describe('ResponsiveDataGrid (ssr)', () => {
  it('renders tablist and single empty panel markup without crashing', () => {
    const tabPanels = [
      { id: 'empty', label: 'Empty', data: [], columns: [], ariaLabel: 'Empty data' }
    ];
    const { html } = renderSSR(<ResponsiveDataGrid ariaLabel="Test grid" tabPanels={tabPanels} dataConfig={undefined as any} />);
    expect(html).toContain('role="tablist"');
    // Cards layout is default initial SSR state – grid role should appear
    expect(html).toContain('role="grid"');
  });
});
