import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { PageTemplate } from './PageTemplate';

// Basic a11y coverage for PageTemplate (with and without header props)

describe('PageTemplate (a11y)', () => {
  it('no axe violations (minimal)', async () => {
    const { container } = render(
      <PageTemplate pageTitle="Example page">
        <p>Content</p>
      </PageTemplate>
    );
    await expectAccessible(container);
  });

  it('no axe violations (with header + footer)', async () => {
    const { container } = render(
      <PageTemplate
        pageTitle="Service overview"
        service={{ text: 'NHS App', href: '/' }}
        navigation={{
          ariaLabel: 'Main navigation',
            items: [
              { text: 'Home', href: '/', current: true },
              { text: 'Appointments', href: '/appointments' }
            ]
        }}
        footerProps={{ copyright: '© NHS' }}
      >
        <div role="region" aria-label="Body content region">
          <p>Body content</p>
        </div>
      </PageTemplate>
    );
    await expectAccessible(container);
  });
});
