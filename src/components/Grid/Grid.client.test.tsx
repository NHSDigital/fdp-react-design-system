import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container, Column, Grid } from './Grid';

describe('Grid (client)', () => {
  it('Container default / fluid toggle', () => {
    const { rerender } = render(<Container><div>Content</div></Container>);
    const base = screen.getByText('Content').parentElement!;
    expect(base).toHaveClass('nhsuk-width-container');
    rerender(<Container fluid><div>Content</div></Container>);
    expect(screen.getByText('Content').parentElement).toHaveClass('nhsuk-width-container-fluid');
  });

  it('Column width and forceWidth', () => {
    const { rerender } = render(<Column width="one-third"><div>X</div></Column>);
    const col = screen.getByText('X').parentElement!;
    expect(col).toHaveClass('nhsuk-grid-column-one-third');
    rerender(<Column width="one-third" forceWidth><div>X</div></Column>);
    expect(screen.getByText('X').parentElement).toHaveClass('nhsuk-u-one-third');
  });

  it('Grid auto wraps children in Row', () => {
    render(<Grid><Column width="one-half"><div>A</div></Column></Grid>);
    const a = screen.getByText('A').parentElement!;
    expect(a.parentElement).toHaveClass('nhsuk-grid-row');
    expect(a.parentElement?.parentElement).toHaveClass('nhsuk-width-container');
  });
});
