import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { TransactionalPageTemplate } from './TransactionalPageTemplate';

// Basic a11y coverage for TransactionalPageTemplate

describe('TransactionalPageTemplate (a11y)', () => {
  it('no axe violations (minimal)', async () => {
    const { container } = render(
      <TransactionalPageTemplate pageTitle="Book an appointment" serviceName="NHS App">
        <form aria-label="Example form">
          <p>Form content</p>
        </form>
      </TransactionalPageTemplate>
    );
    await expectAccessible(container);
  });

  it('no axe violations (with back link + footer)', async () => {
    const { container } = render(
      <TransactionalPageTemplate
        pageTitle="Confirm details"
        serviceName="NHS Online"
        backLinkProps={{ text: 'Back', href: '/' }}
        footerProps={{ copyright: '© NHS' }}
      >
        <div role="region" aria-label="Content region">
          <p>Content</p>
        </div>
      </TransactionalPageTemplate>
    );
    await expectAccessible(container);
  });
});
