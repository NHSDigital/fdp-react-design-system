import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Checkbox } from './Checkbox';

describe('Checkbox (hydration)', () => {
  it('hydrates unchecked', () => {
    hydrateWithoutMismatch({ ssr: <Checkbox id="h1">Label</Checkbox>, client: <Checkbox id="h1">Label</Checkbox> });
  });
  it('hydrates defaultChecked', () => {
    hydrateWithoutMismatch({ ssr: <Checkbox id="h2" defaultChecked>Label</Checkbox>, client: <Checkbox id="h2" defaultChecked>Label</Checkbox> });
  });
  it('hydrates with hint + error', () => {
    hydrateWithoutMismatch({ ssr: <Checkbox id="h3" hint="Hint" errorMessage="Err">Label</Checkbox>, client: <Checkbox id="h3" hint="Hint" errorMessage="Err">Label</Checkbox> });
  });
});
