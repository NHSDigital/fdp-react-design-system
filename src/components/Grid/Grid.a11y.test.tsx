import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { Grid, Row, Column, Container } from './Grid';
import { GridWidth } from './Grid.types';

describe('Grid (a11y)', () => {
  it('no axe violations (Container + Row + Columns)', async () => {
    const { container } = render(
      <Container>
        <Row>
          <Column width={GridWidth.OneHalf}>A</Column>
          <Column width={GridWidth.OneHalf}>B</Column>
        </Row>
      </Container>
    );
    await expectAccessible(container);
  });

  it('no axe violations (Grid wrapper auto-row)', async () => {
    const { container } = render(
      <Grid>
  <Column width={GridWidth.OneThird}>1</Column>
  <Column width={GridWidth.OneThird}>2</Column>
  <Column width={GridWidth.OneThird}>3</Column>
      </Grid>
    );
    await expectAccessible(container);
  });
});
