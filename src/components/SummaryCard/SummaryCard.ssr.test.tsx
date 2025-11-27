import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard (SSR)', () => {
  it('renders title and value', () => {
    const { html } = renderSSR(<SummaryCard title="Total" value="123" />);
    expect(html).toContain('Total');
    expect(html).toContain('123');
    expect(html).toContain('nhs-fdp-summary-card');
  });

  it('renders subtitle when provided', () => {
    const { html } = renderSSR(<SummaryCard title="T" value="1" subtitle="Sub" />);
    expect(html).toContain('Sub');
  });
});
