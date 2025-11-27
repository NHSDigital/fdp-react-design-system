import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Hint } from './Hint';

describe('Hint (client)', () => {
  it('renders text content', () => {
    render(<Hint>Client hint</Hint>);
    expect(screen.getByText('Client hint')).toBeInTheDocument();
  });
  it('applies custom className', () => {
    render(<Hint className="extra">Styled</Hint>);
    expect(screen.getByText('Styled').className).toContain('extra');
  });
});
