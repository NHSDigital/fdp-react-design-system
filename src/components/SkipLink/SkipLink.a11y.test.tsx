import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { SkipLink } from './SkipLink';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { expectAccessible } from '../../test-utils/accessibility';

describe('SkipLink (a11y)', () => {
  it('no axe violations (default)', async () => {
    const { container } = render(
      <div>
        <SkipLink />
        <MainWrapper id="maincontent">
          <h1>Heading</h1>
          <p>Content</p>
        </MainWrapper>
      </div>
    );
    await expectAccessible(container);
  });
});
