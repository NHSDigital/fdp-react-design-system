import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { Textarea } from './Textarea';

// Basic accessibility coverage for Textarea (with label association)

describe('Textarea (a11y)', () => {
  it('no axe violations (basic)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="comments">Comments</label>
        <Textarea id="comments" name="comments" defaultValue="Initial" />
      </div>
    );
    await expectAccessible(container);
  });

  it('no axe violations (error & disabled states)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="notes">Clinical notes</label>
        <Textarea id="notes" name="notes" hasError disabled defaultValue="Cannot edit" />
      </div>
    );
    await expectAccessible(container);
  });
});
