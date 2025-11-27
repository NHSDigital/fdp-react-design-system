import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContentsList } from './ContentsList';

const items = [
  { text: 'Intro', href: '#intro' },
  { text: 'Current', current: true },
];

describe('ContentsList (client)', () => {
  it('renders links and current item', () => {
    render(<ContentsList items={items} />);
    expect(screen.getByRole('link', { name: 'Intro' }).getAttribute('href')).toBe('#intro');
    expect(screen.getByText('Current').className).toContain('current');
  });
  it('supports custom aria label', () => {
    render(<ContentsList ariaLabel="Sections" items={items} />);
    expect(screen.getByRole('navigation', { name: 'Sections' })).toBeTruthy();
  });
});
