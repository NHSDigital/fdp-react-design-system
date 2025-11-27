import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { SummaryCard } from './SummaryCard';

// Basic accessibility coverage for SummaryCard (static & clickable)

describe('SummaryCard (a11y)', () => {
  it('no axe violations (static default)', async () => {
    const { container } = render(<SummaryCard title="Patients" value="1,234" subtitle="Total registered" />);
    await expectAccessible(container);
  });

  it('no axe violations (clickable variant with auto aria-label)', async () => {
    const { container } = render(<SummaryCard title="Appointments" value="89" href="#" />);
    await expectAccessible(container);
  });
});
