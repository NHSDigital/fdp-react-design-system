import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { SummaryList } from './SummaryList';

const items = [
  { key: { text: 'Name' }, value: { text: 'John Smith' } },
  { key: { html: '<strong>DOB</strong>' }, value: { text: '1 Jan 1990' } },
];

describe('SummaryList (SSR)', () => {
  it('renders dl rows and text/html variants', () => {
    const { html } = renderSSR(<SummaryList items={items} />);
    expect(html).toContain('nhsuk-summary-list');
    expect(html).toContain('<dt class="nhsuk-summary-list__key">Name');
    expect(html).toContain('<strong>DOB</strong>');
  });

  it('applies no-border modifier', () => {
    const { html } = renderSSR(<SummaryList items={items} noBorder />);
    expect(html).toContain('nhsuk-summary-list--no-border');
  });
});
