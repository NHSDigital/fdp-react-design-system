import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { CharacterCount } from './CharacterCount';

// Basic accessibility coverage for CharacterCount (within labelled context)

describe('CharacterCount (a11y)', () => {
  it('no axe violations (under limit)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="cc1">Additional information</label>
        <CharacterCount id="cc1" name="info" maxLength={100} value="Hello" />
      </div>
    );
    await expectAccessible(container);
  });

  it('no axe violations (over limit shows error message)', async () => {
    const overText = 'a'.repeat(105);
    const { container } = render(
      <div>
        <label htmlFor="cc2">Clinical notes</label>
        <CharacterCount id="cc2" name="notes" maxLength={100} value={overText} />
      </div>
    );
    await expectAccessible(container);
  });
});
