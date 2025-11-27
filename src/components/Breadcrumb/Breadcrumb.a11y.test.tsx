import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Breadcrumb } from './Breadcrumb';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Breadcrumb (a11y)', () => {
  it('no axe violations (items prop)', async () => {
    const { container } = render(
      <Breadcrumb
        items={[
          { text: 'Home', href: '/' },
          { text: 'Section', href: '/section' },
          { text: 'Current', active: true }
        ]}
      />
    );
    await expectAccessible(container);
  });

  it('no axe violations (compound items)', async () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Current</Breadcrumb.Item>
      </Breadcrumb>
    );
    await expectAccessible(container);
  });
});
