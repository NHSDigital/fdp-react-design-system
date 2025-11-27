import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Breadcrumb } from './Breadcrumb';

const items = [
  { text: 'Home', href: '/' },
  { text: 'Section', href: '/section' },
  { text: 'Current', href: '/current' },
];

describe('Breadcrumb (hydration)', () => {
  it('hydrates simple list', () => {
    const jsx = <Breadcrumb items={items} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
  it('hydrates direct props', () => {
    const ssr = <Breadcrumb href="/only" text="Only" />;
    const client = <Breadcrumb href="/only" text="Only" />;
    hydrateWithoutMismatch({ ssr, client });
  });
});
