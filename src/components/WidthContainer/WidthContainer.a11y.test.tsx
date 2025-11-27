import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { WidthContainer } from './WidthContainer';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { expectAccessible } from '../../test-utils/accessibility';

describe('WidthContainer (a11y)', () => {
  it('no axe violations (default)', async () => {
    const { container } = render(
      <WidthContainer>
        <MainWrapper>
          <h1>Page title</h1>
          <p>Some content inside the width container.</p>
        </MainWrapper>
      </WidthContainer>
    );
    await expectAccessible(container);
  });

  it('no axe violations (fluid variant)', async () => {
    const { container } = render(
      <WidthContainer fluid>
        <MainWrapper>
          <h1>Fluid page title</h1>
          <p>Full width content.</p>
        </MainWrapper>
      </WidthContainer>
    );
    await expectAccessible(container);
  });
});
