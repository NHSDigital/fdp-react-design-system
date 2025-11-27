import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Card } from './Card';

// Basic a11y coverage for Card including clickable variant

describe('Card (a11y)', () => {
  it('no axe violations (default)', async () => {
    const { container } = render(<Card heading="Basic" description="Example" />);
    await expectAccessible(container);
  });

  it('no axe violations (clickable with link heading)', async () => {
    const { container } = render(<Card variant="clickable" heading="Go" href="/go" description="Link example" />);
    await expectAccessible(container);
  });

  it('no axe violations (feature variant)', async () => {
    const { container } = render(<Card variant="feature" heading="Feature" description="Special" />);
    await expectAccessible(container);
  });
});
