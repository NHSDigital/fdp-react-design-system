import { renderSSR } from '../../test-utils/renderSSR';
import { describe, it, expect } from 'vitest';
import { Container, Row, Column, Grid } from './Grid';
import { GridWidth } from './Grid.types';

describe('Grid (SSR)', () => {
  it('renders Container with default width class', () => {
    const { html } = renderSSR(<Container><div>SSR Content</div></Container>);
    expect(html).toContain('nhsuk-width-container');
    expect(html).toContain('SSR Content');
  });

  it('renders Grid wrapper auto-row', () => {
  const { html } = renderSSR(<Grid><Column width={GridWidth.OneHalf}><div>A</div></Column><Column width={GridWidth.OneHalf}><div>B</div></Column></Grid>);
    expect(html).toContain('nhsuk-width-container');
    expect(html).toContain('nhsuk-grid-row');
    expect(html).toContain('nhsuk-grid-column-one-half');
  });
});
