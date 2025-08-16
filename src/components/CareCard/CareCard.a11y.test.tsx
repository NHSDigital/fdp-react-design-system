import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { CareCard } from './CareCard';

// Basic accessibility coverage for CareCard variants

describe('CareCard (a11y)', () => {
  it('no axe violations (non-urgent)', async () => {
    const { container } = render(
      <CareCard type="non-urgent" heading="Speak to a GP if:" description="You have questions about ongoing symptoms." />
    );
    await expectAccessible(container);
  });

  it('no axe violations (urgent)', async () => {
    const { container } = render(
      <CareCard type="urgent" heading="Ask for an urgent GP appointment if:" description="Symptoms are worsening rapidly." />
    );
    await expectAccessible(container);
  });

  it('no axe violations (emergency custom content)', async () => {
    const { container } = render(
      <CareCard type="emergency" heading="Call 999 if:" >
        <p>Someone is unconscious or having chest pain.</p>
      </CareCard>
    );
    await expectAccessible(container);
  });
});
