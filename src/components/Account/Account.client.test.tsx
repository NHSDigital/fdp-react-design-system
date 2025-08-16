import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Account } from './Account';

describe('Account (client)', () => {
  it('renders ariaLabel override', () => {
    render(<Account ariaLabel="User Account" items={[{ text: 'Profile', href: '/p' }]} />);
    expect(screen.getByRole('navigation', { name: 'User Account' })).toBeInTheDocument();
  });
  it('renders icon item', () => {
    render(<Account items={[{ text: 'Profile', href: '/p', icon: true }]} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('nhsuk-icon__user');
  });
});
