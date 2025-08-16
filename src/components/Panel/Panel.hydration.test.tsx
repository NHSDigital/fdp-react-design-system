import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Panel } from './Panel';

describe('Panel (hydration)', () => {
  it('hydrates heading + body', () => {
    const jsx = <Panel headingText="Title" bodyText="Body" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('.nhsuk-panel__heading')?.textContent).toContain('Title');
    }});
  });
});
