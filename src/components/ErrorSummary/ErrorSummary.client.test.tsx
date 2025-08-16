import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorSummary } from './ErrorSummary';

describe('ErrorSummary (client)', () => {
  const errors = [
    { text: 'Enter your full name', href: '#name' },
    { text: 'Enter a valid email address', href: '#email' },
  ];

  it('renders role=alert and links', () => {
    render(<ErrorSummary errorList={errors} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Enter your full name' })).toHaveAttribute('href', '#name');
  });

  it('supports children description override', () => {
    render(<ErrorSummary errorList={errors}><div>Extra guidance</div></ErrorSummary>);
    expect(screen.getByText('Extra guidance')).toBeInTheDocument();
  });
});
