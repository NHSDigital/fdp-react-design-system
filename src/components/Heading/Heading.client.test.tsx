import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Heading } from './Heading';

describe('Heading (client)', () => {
  it('maps size to level', () => {
    render(<Heading size="s" text="Small" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Small');
  });
  it('applies custom class', () => {
    render(<Heading size="m" text="Styled" className="extra" />);
    expect(screen.getByText('Styled').className).toContain('extra');
  });
});
