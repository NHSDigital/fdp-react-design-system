import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { ErrorSummary } from './ErrorSummary';
import { expectAccessible } from '../../test-utils/accessibility';

describe('ErrorSummary (a11y)', () => {
  it('no axe violations (basic list)', async () => {
    const { container } = render(
      <ErrorSummary errorList={[{ text: 'Name is required', href: '#name' }, { text: 'Email invalid', href: '#email' }]} />
    );
    await expectAccessible(container);
  });

  it('no axe violations (custom body + html items)', async () => {
    const { container } = render(
      <ErrorSummary
        titleText="Please fix the following"
        errorList={[
          { html: '<span>Name missing</span>', href: '#name' },
          { text: 'Address missing' },
        ]}
      >
        <p>There are problems with your answers.</p>
      </ErrorSummary>
    );
    await expectAccessible(container);
  });
});
