import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Pagination } from './Pagination';

describe('Pagination (SSR)', () => {
  it('renders nav wrapper always', () => {
    const { html } = renderSSR(<Pagination />);
    expect(html).toContain('role="navigation"');
    expect(html).toContain('nhsuk-pagination');
  });

  it('renders previous and next links when provided', () => {
    const { html } = renderSSR(<Pagination previousUrl="/p1" previousPage="P1" nextUrl="/p3" nextPage="P3" />);
    expect(html).toContain('href="/p1"');
    expect(html).toContain('href="/p3"');
    expect(html).toContain('P1');
    expect(html).toContain('P3');
  });
});
