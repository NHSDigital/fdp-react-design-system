import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Footer } from './Footer';

// SSR tests: static markup

describe('Footer (SSR)', () => {
  it('renders default footer content', () => {
    const { container, html } = renderSSR(<Footer />);
    expect(html).toContain('© NHS England');
    expect(container.querySelector('h2')?.textContent).toBe('Support links');
  });

  it('renders single column links', () => {
    const links = [
      { URL: '/privacy', label: 'Privacy policy' },
      { URL: '/cookies', label: 'Cookies' },
    ];
    const { container } = renderSSR(<Footer links={links} />);
    const items = Array.from(container.querySelectorAll('li')).map(li => li.textContent);
    expect(items).toContain('Privacy policy');
    expect(items).toContain('Cookies');
  });

  it('renders multi-column layout when additional columns provided', () => {
    const col2 = [{ URL: '/terms', label: 'Terms' }];
    const { container } = renderSSR(<Footer links={[{ URL: '/a', label: 'A' }]} linksColumn2={col2} />);
    const lists = container.querySelectorAll('ul');
    expect(lists.length).toBeGreaterThan(1);
  });
});
