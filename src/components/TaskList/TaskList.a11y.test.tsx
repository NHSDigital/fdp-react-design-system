import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { TaskList } from './TaskList';
import { expectAccessible } from '../../test-utils/accessibility';

describe('TaskList (a11y)', () => {
  const items = [
    { title: { text: 'Check eligibility' }, href: '#', status: { text: 'Completed' } },
    { title: { text: 'Enter details' }, hint: { text: 'Your personal info' }, href: '#', status: { text: 'In progress' } },
    { title: { text: 'Submit' }, status: { text: 'Cannot start yet' } },
  ];

  it('no axe violations (basic list)', async () => {
    const { container } = render(<TaskList items={items} />);
    await expectAccessible(container);
  });
});
