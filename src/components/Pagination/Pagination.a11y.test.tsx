import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Pagination } from './Pagination';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Pagination (a11y)', () => {
  it('no axe violations (previous + next)', async () => {
    const { container } = render(
      <Pagination previousUrl="#p" previousPage="1" nextUrl="#n" nextPage="3" />
    );
    await expectAccessible(container);
  });

  it('no axe violations (previous only)', async () => {
    const { container } = render(
      <Pagination previousUrl="#p" previousPage="1" />
    );
    await expectAccessible(container);
  });
});
