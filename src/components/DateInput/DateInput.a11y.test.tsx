import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { DateInput } from './DateInput';

// Accessibility coverage for DateInput with and without fieldset/hint/error

describe('DateInput (a11y)', () => {
  it('no axe violations (basic default)', async () => {
    const { container } = render(
      <DateInput id="dob" values={{ day: '5', month: '1', year: '1980' }} />
    );
    await expectAccessible(container);
  });

  it('no axe violations (with fieldset, hint, error state)', async () => {
    const { container } = render(
      <DateInput
        id="appt"
        fieldset={{ legend: 'Appointment date' }}
        hint={{ text: 'For example, 15 3 2025' }}
        errorMessage={{ text: 'Enter a valid date' }}
        values={{ day: '32', month: '2', year: '2025' }}
      />
    );
    await expectAccessible(container);
  });
});
