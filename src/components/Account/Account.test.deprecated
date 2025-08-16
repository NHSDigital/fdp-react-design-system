import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Account } from './Account';

describe('Account Component', () => {
  it('renders account items correctly', () => {
    const items = [
      { text: 'Profile', href: '/profile', icon: true },
      { text: 'Settings', href: '/settings' },
      { text: 'Logout', action: '/logout', method: 'post' as const },
    ];

    render(<Account items={items} />);

    expect(screen.getByRole('navigation', { name: 'Account' })).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('does not render when no items provided', () => {
    const { container } = render(<Account items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('applies white variant styling', () => {
    const items = [{ text: 'Profile', href: '/profile' }];
    render(<Account items={items} variant="white" />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nhsuk-account--white');
  });

  it('renders with custom aria label', () => {
    const items = [{ text: 'Profile', href: '/profile' }];
    render(<Account items={items} ariaLabel="User Account" />);
    
    expect(screen.getByRole('navigation', { name: 'User Account' })).toBeInTheDocument();
  });

  it('renders icon when specified', () => {
    const items = [{ text: 'Profile', href: '/profile', icon: true }];
    render(<Account items={items} />);
    
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('nhsuk-icon__user');
  });

  it('renders form for logout action', () => {
    const items = [{ text: 'Logout', action: '/logout', method: 'post' as const }];
    render(<Account items={items} />);
    
    const form = screen.getByRole('button', { name: 'Logout' }).closest('form');
    expect(form).toHaveAttribute('action', '/logout');
    expect(form).toHaveAttribute('method', 'post');
  });
});
