import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount (hydration)', () => {
  it('hydrates character counting variant', () => {
    const jsx = <CharacterCount id="cc7" name="f" maxLength={20} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
  it('hydrates word counting variant', () => {
    const ssr = <CharacterCount id="cc8" name="w" maxWords={5} />;
    hydrateWithoutMismatch({ ssr, client: ssr });
  });
});
