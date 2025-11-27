import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GanttChart } from './GanttChart';

// Minimal representative subset of interaction tests (focus & navigation) from monolithic suite

const resources = [
  { id: 'resource-1', label: 'Developer A' },
  { id: 'resource-2', label: 'Developer B' },
  { id: 'resource-3', label: 'Designer' },
];
const tasks = [
  { id: 'task-1', resourceId: 'resource-1', title: 'Task 1', start: new Date('2025-01-01'), end: new Date('2025-01-03') },
  { id: 'task-2', resourceId: 'resource-1', title: 'Task 2', start: new Date('2025-01-04'), end: new Date('2025-01-06') },
  { id: 'task-3', resourceId: 'resource-2', title: 'Task 3', start: new Date('2025-01-02'), end: new Date('2025-01-05') },
];
const common = { resources, tasks, viewStart: new Date('2025-01-01'), viewEnd: new Date('2025-01-07') } as const;

beforeEach(() => {
  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({ observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() }))
  });
});

describe('GanttChart (client)', () => {
  it('sets up ARIA grid structure', () => {
    render(<GanttChart {...common} />);
    expect(screen.getByRole('grid')).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Resource column header/ })).toBeInTheDocument();
  });

  it('header arrow navigation between dates', async () => {
    const user = userEvent.setup();
    render(<GanttChart {...common} />);
    const headerTimeline = screen.getByRole('columnheader', { name: /Timeline from/ });
    await user.click(headerTimeline);
    const firstDate = screen.getByLabelText(/Wednesday, 1 January/);
    expect(firstDate).toHaveFocus();
    await user.keyboard('{ArrowRight}');
    const secondDate = screen.getByLabelText(/Thursday, 2 January/);
    expect(secondDate).toHaveFocus();
  });

  it('activates task navigation and moves between tasks', async () => {
    const user = userEvent.setup();
    render(<GanttChart {...common} />);
    const firstTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
    await user.click(firstTimeline);
    await user.keyboard('{Enter}');
    const firstTask = screen.getByLabelText(/Selected: Task 1/);
    expect(firstTask).toHaveFocus();
    await user.keyboard('{ArrowRight}');
    const secondTask = screen.getByLabelText(/Selected: Task 2/);
    expect(secondTask).toHaveFocus();
  });

  it('exits task navigation on Escape', async () => {
    const user = userEvent.setup();
    render(<GanttChart {...common} />);
    const firstTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
    await user.click(firstTimeline);
    await user.keyboard('{Enter}');
    await user.keyboard('{Escape}');
    expect(firstTimeline).toHaveFocus();
  });
});
