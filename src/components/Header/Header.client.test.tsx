import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header (client)', () => {
  it('renders separate logo and service links when hrefs differ', () => {
    render(<Header logo={{ href: '/' }} service={{ text: 'NHS App', href: '/app' }} />);
    const logoLink = document.querySelector('.nhsuk-header__service-logo') as HTMLAnchorElement | null;
    const serviceLink = screen.getByRole('link', { name: 'NHS App' });
    expect(logoLink?.getAttribute('href')).toBe('/');
    expect(serviceLink).toHaveAttribute('href', '/app');
  });

  it('combines logo & service into one link when hrefs match', () => {
    render(<Header logo={{ href: '/same' }} service={{ text: 'Unified', href: '/same' }} />);
    const unified = screen.getAllByRole('link').filter(a => a.getAttribute('href') === '/same');
    expect(unified.length).toBe(1);
  });

  it('marks current navigation item', () => {
    render(<Header navigation={{ items: [ { text: 'Home', href: '/', current: true }, { text: 'About', href: '/about' } ] }} />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
  });
});
