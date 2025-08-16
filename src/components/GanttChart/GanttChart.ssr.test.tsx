import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { GanttChart } from './GanttChart';

const resources = [
  { id: 'r1', label: 'Res 1' },
  { id: 'r2', label: 'Res 2' },
];
const tasks = [
  { id: 't1', resourceId: 'r1', title: 'Task 1', start: new Date('2025-01-01'), end: new Date('2025-01-02') },
];

// SSR: only static markup / ARIA attributes

describe('GanttChart (SSR)', () => {
  it('renders grid root with aria counts', () => {
    const { container, html } = renderSSR(<GanttChart resources={resources} tasks={tasks} viewStart={new Date('2025-01-01')} viewEnd={new Date('2025-01-03')} />);
    const grid = container.querySelector('[role="grid"]');
    expect(grid).toBeTruthy();
    expect(grid?.getAttribute('aria-rowcount')).toBe(String(resources.length + 1));
    expect(html).toContain('Gantt Chart');
  });

  it('handles string dates without throwing', () => {
    const { container } = renderSSR(<GanttChart resources={resources} tasks={tasks} viewStart="2025-01-01" viewEnd="2025-01-03" />);
    expect(container.querySelector('[role="grid"]')).toBeTruthy();
  });
});
