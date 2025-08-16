import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Header } from './Header';

describe('Header (SSR)', () => {
  it('renders basic header with classes', () => {
    const { html } = renderSSR(<Header service={{ text: 'NHS App', href: '/app' }} />);
    expect(html).toContain('nhsuk-header');
    expect(html).toContain('NHS App');
  });

  it('applies white variant classes', () => {
    const { html } = renderSSR(<Header variant="white" service={{ text: 'Service', href: '/svc' }} />);
    expect(html).toContain('nhsuk-header--white');
  });

  it('combines logo + service link when hrefs match', () => {
    const { container } = renderSSR(<Header logo={{ href: '/same' }} service={{ text: 'Portal', href: '/same' }} />);
    const links = container.querySelectorAll('a[href="/same"]');
    expect(links.length).toBe(1); // combined
  });
});
