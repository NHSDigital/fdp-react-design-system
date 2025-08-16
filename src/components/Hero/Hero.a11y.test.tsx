import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { Hero } from './Hero';

// Accessibility coverage for Hero basic and image variants

describe('Hero (a11y)', () => {
  it('no axe violations (basic text variant)', async () => {
    const { container } = render(
      <Hero heading="Welcome to the service" text="Helping you manage healthcare data." />
    );
    await expectAccessible(container);
  });

  it('no axe violations (image variant)', async () => {
    const { container } = render(
      <Hero heading="Data platform" text="Secure and scalable" imageURL="https://example.com/bg.jpg" />
    );
    await expectAccessible(container);
  });
});
