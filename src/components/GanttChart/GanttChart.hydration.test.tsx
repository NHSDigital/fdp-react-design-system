import { describe, it, expect } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { GanttChart } from './GanttChart';

const resources = [ { id: 'r1', label: 'Res 1' } ];
const tasks = [ { id: 't1', resourceId: 'r1', title: 'Task 1', start: new Date('2025-01-01'), end: new Date('2025-01-02') } ];

// Hydration: ensure no mismatch for grid with tasks

describe('GanttChart (hydration)', () => {
  it('hydrates basic chart without mismatch', () => {
    const jsx = <GanttChart resources={resources} tasks={tasks} viewStart={new Date('2025-01-01')} viewEnd={new Date('2025-01-03')} />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx, assert: (c) => {
      expect(c.querySelector('[role="grid"]')).toBeTruthy();
    }});
  });
});
