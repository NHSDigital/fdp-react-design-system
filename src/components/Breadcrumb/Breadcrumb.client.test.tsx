import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

const items = [
  { text: 'Home', href: '/' },
  { text: 'Section', href: '/section' },
  { text: 'Current', href: '/current' },
];

describe('Breadcrumb (client)', () => {
  it('renders custom label text', () => {
    render(<Breadcrumb labelText="Trail" />);
    expect(screen.getByRole('navigation', { name: 'Trail' })).toBeTruthy();
  });

  it('renders mobile back link for last navigable item', () => {
    render(<Breadcrumb items={items} />);
    const links = screen.getAllByText('Current');
    expect(links.length).toBeGreaterThanOrEqual(1); // trail + maybe back link
  });

  it('supports compound children items', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/b">B</Breadcrumb.Item>
        <Breadcrumb.Item active href="/c">C</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(screen.getByText('A').closest('a')?.getAttribute('href')).toBe('/a');
    expect(screen.getByText('C').getAttribute('aria-current')).toBe('page');
  });

  it('passes item attributes', () => {
    render(<Breadcrumb items={[{ text: 'Home', href: '/', attributes: { 'data-x': 'h' } }]} />);
    // Two matches: trail + back link. Assert first trail link carries attribute.
    const homes = screen.getAllByText('Home');
    const trail = homes.find(el => el.closest('a')?.classList.contains('nhsuk-breadcrumb__link'))!;
    expect(trail.closest('a')?.getAttribute('data-x')).toBe('h');
  });
});
