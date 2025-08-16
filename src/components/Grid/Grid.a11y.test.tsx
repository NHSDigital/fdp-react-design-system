import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { Grid, Row, Column, Container } from './Grid';

describe('Grid (a11y)', () => {
  it('no axe violations (Container + Row + Columns)', async () => {
    const { container } = render(
      <Container>
        <Row>
          <Column width="one-half">A</Column>
          <Column width="one-half">B</Column>
        </Row>
      </Container>
    );
    await expectAccessible(container);
  });

  it('no axe violations (Grid wrapper auto-row)', async () => {
    const { container } = render(
      <Grid>
        <Column width="one-third">1</Column>
        <Column width="one-third">2</Column>
        <Column width="one-third">3</Column>
      </Grid>
    );
    await expectAccessible(container);
  });
});
