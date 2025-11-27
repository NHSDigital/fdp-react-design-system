import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MainWrapper } from './MainWrapper';
import { expectAccessible } from '../../test-utils/accessibility';

describe('MainWrapper (a11y)', () => {
  it('no axe violations (as main)', async () => {
    const { container } = render(
      <MainWrapper>
        <h1>Title</h1>
        <p>Some content</p>
      </MainWrapper>
    );
    await expectAccessible(container);
  });

  it('no axe violations (as section)', async () => {
    const { container } = render(
      <MainWrapper as="section" aria-labelledby="sec-heading">
        <h2 id="sec-heading">Section heading</h2>
        <p>Some content</p>
      </MainWrapper>
    );
    await expectAccessible(container);
  });
});
