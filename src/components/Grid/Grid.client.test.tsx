import { ColumnAlign } from './Grid.types';
  it('Column align left/center/right', () => {
    const { rerender } = render(<Column align={ColumnAlign.Left}><div>Left</div></Column>);
    let col = screen.getByText('Left').parentElement!;
  expect(col.classList.contains('nhsuk-grid-align-left')).toBe(true);
    rerender(<Column align={ColumnAlign.Center}><div>Center</div></Column>);
    col = screen.getByText('Center').parentElement!;
  expect(col.classList.contains('nhsuk-grid-align-center')).toBe(true);
    rerender(<Column align={ColumnAlign.Right}><div>Right</div></Column>);
    col = screen.getByText('Right').parentElement!;
  expect(col.classList.contains('nhsuk-grid-align-right')).toBe(true);
  });
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container, Column, Grid } from './Grid';
import { GridWidth } from './Grid.types';

describe('Grid (client)', () => {
  it('Container default / fluid toggle', () => {
    const { rerender } = render(<Container><div>Content</div></Container>);
    const base = screen.getByText('Content').parentElement!;
  expect(base.classList.contains('nhsuk-width-container')).toBe(true);
    rerender(<Container fluid><div>Content</div></Container>);
  expect(screen.getByText('Content').parentElement?.classList.contains('nhsuk-width-container-fluid')).toBe(true);
  });

  it('Column width and forceWidth', () => {
  const { rerender } = render(<Column width={GridWidth.OneThird}><div>X</div></Column>);
    const col = screen.getByText('X').parentElement!;
  expect(col.classList.contains('nhsuk-grid-column-one-third')).toBe(true);
  rerender(<Column width={GridWidth.OneThird} forceWidth><div>X</div></Column>);
  expect(screen.getByText('X').parentElement?.classList.contains('nhsuk-u-one-third')).toBe(true);
  });

  it('Grid auto wraps children in Row', () => {
  render(<Grid><Column width={GridWidth.OneHalf}><div>A</div></Column></Grid>);
    const a = screen.getByText('A').parentElement!;
  expect(a.parentElement?.classList.contains('nhsuk-grid-row')).toBe(true);
  expect(a.parentElement?.parentElement?.classList.contains('nhsuk-width-container')).toBe(true);
  });
});
