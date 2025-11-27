import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Button } from './Button';

describe('Button (hydration)', () => {
  it('hydrates primary button', () => {
    hydrateWithoutMismatch({ ssr: <Button>Primary</Button>, client: <Button>Primary</Button> });
  });
  it('hydrates variant + size combo', () => {
    hydrateWithoutMismatch({ ssr: <Button variant="secondary" size="small">Sec</Button>, client: <Button variant="secondary" size="small">Sec</Button> });
  });
});
