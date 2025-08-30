import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../../../test-utils/renderSSR';
import { ChartNoScript } from './ChartNoScript';

describe('ChartNoScript (SSR)', () => {
  it('renders figure, title, fallback table and noscript wrapper', () => {
    const table = {
      caption: 'Data',
      head: [{ text: 'Label' }, { text: 'Value', format: 'numeric' }],
      rows: [[{ text: 'A' }, { text: '1', format: 'numeric' }]],
      firstCellIsHeader: true
    };
    const { html, getByRole, getByText } = renderSSR(
  <ChartNoScript title="Static Chart" table={table} description="Desc" source="Src" />
    );
    expect(getByRole('figure')).toBeDefined();
    expect(getByText('Static Chart')).toBeDefined();
    // Fallback table should be present (data-fallback-table)
    expect(html).toContain('data-fallback-table');
    // noscript tag should also be present for disabled JS scenario
    expect(html).toContain('<noscript>');
  });
});
