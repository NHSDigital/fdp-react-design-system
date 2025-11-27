import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { ErrorMessage } from './ErrorMessage';
import { Input } from '../Input/Input';
import { expectAccessible } from '../../test-utils/accessibility';

describe('ErrorMessage (a11y)', () => {
  it('no axe violations (standalone)', async () => {
    const { container } = render(<ErrorMessage id="err">An error occurred</ErrorMessage>);
    await expectAccessible(container);
  });

  it('no axe violations (with input association)', async () => {
    const { container } = render(
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" name="email" aria-describedby="email-error" />
        <ErrorMessage id="email-error">Enter a valid email</ErrorMessage>
      </div>
    );
    await expectAccessible(container);
  });
});
