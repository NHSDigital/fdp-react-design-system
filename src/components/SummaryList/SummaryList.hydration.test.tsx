import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { SummaryList } from './SummaryList';

describe('SummaryList (hydration)', () => {
  it('hydrates basic list with action', () => {
    const jsx = (
      <SummaryList items={[{ key: { text: 'Email' }, value: { text: 'user@example.com' }, actions: { items: [{ href: '/edit-email', text: 'Change', visuallyHiddenText: 'email' }] } }]} />
    );
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelectorAll('.nhsuk-summary-list__row').length).toBe(1);
    }});
  });
});
