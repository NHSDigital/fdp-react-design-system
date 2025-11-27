import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { SummaryList } from './SummaryList';

// Basic accessibility coverage for SummaryList

describe('SummaryList (a11y)', () => {
  const baseItems = [
    {
      key: { text: 'Name' },
      value: { text: 'John Smith' },
      actions: {
        items: [
          { href: '#', text: 'Change', visuallyHiddenText: ' name' }
        ]
      }
    },
    {
      key: { text: 'Date of birth' },
      value: { text: '5 January 1980' }
    }
  ];

  it('no axe violations (default with actions)', async () => {
    const { container } = render(<SummaryList items={baseItems} />);
    await expectAccessible(container);
  });

  it('no axe violations (no border variant)', async () => {
    const { container } = render(<SummaryList items={baseItems} noBorder />);
    await expectAccessible(container);
  });
});
