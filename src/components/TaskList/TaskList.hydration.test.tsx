import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { TaskList } from './TaskList';

describe('TaskList (hydration)', () => {
  it('hydrates list with tag + link', () => {
    const jsx = <TaskList items={[{ title: { text: 'Link' }, href: '#', status: { tag: { text: 'New', color: 'blue' } } }]} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('ul')).toBeTruthy();
    }});
  });
});
