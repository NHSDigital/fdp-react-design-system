import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { DoDontList } from './DoDontList';

describe('DoDontList (client)', () => {
  const items = [
    { item: 'wash your hands regularly' },
    { item: 'cover your mouth when coughing' },
  ];

  it('renders heading and items', () => {
    render(<DoDontList title="Do" type="tick" items={items} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Do');
    expect(screen.getByText('wash your hands regularly')).toBeInTheDocument();
  });

  it('adds prefix for cross list unless hidden', () => {
    render(<DoDontList title="Don\'t" type="cross" items={[{ item: 'touch your face' }]} />);
    expect(screen.getByText('do not touch your face')).toBeInTheDocument();
  });
});
