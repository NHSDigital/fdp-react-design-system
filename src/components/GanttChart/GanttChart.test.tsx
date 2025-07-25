import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { GanttChart } from './GanttChart';
import { Resource, Task } from './TaskBar';

// Mock ResizeObserver for testing environment
Object.defineProperty(window, 'ResizeObserver', {
	writable: true,
	value: vi.fn().mockImplementation(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn(),
	})),
});

// Mock data for testing
const mockResources: Resource[] = [
	{ id: 'resource-1', label: 'Developer A' },
	{ id: 'resource-2', label: 'Developer B' },
	{ id: 'resource-3', label: 'Designer' },
];

const mockTasks: Task[] = [
	{
		id: 'task-1',
		resourceId: 'resource-1',
		title: 'Task 1',
		start: new Date('2025-01-01'),
		end: new Date('2025-01-03'),
	},
	{
		id: 'task-2',
		resourceId: 'resource-1',
		title: 'Task 2',
		start: new Date('2025-01-04'),
		end: new Date('2025-01-06'),
	},
	{
		id: 'task-3',
		resourceId: 'resource-2',
		title: 'Task 3',
		start: new Date('2025-01-02'),
		end: new Date('2025-01-05'),
	},
];

const defaultProps = {
	resources: mockResources,
	tasks: mockTasks,
	viewStart: new Date('2025-01-01'),
	viewEnd: new Date('2025-01-07'),
	onTaskClick: vi.fn(),
	onTaskDoubleClick: vi.fn(),
};

describe('GanttChart ARIA and Keyboard Navigation', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('ARIA Structure', () => {
		test('should have proper grid ARIA structure', () => {
			render(<GanttChart {...defaultProps} />);
			
			// Main grid
			const grid = screen.getByRole('grid');
			expect(grid).toHaveAttribute('aria-rowcount', '4'); // Header + 3 resources
			expect(grid).toHaveAttribute('aria-colcount', '8'); // Resource + 7 timeline cols
			expect(grid).toHaveAttribute('aria-label', 'Gantt Chart showing resource scheduling and task timelines');

			// Header row - use the actual accessible name pattern
			const headerRow = screen.getByRole('row', { name: /Resource column header Timeline/ });
			expect(headerRow).toHaveAttribute('aria-rowindex', '1');

			// Data rows
			const dataRows = screen.getAllByRole('row');
			expect(dataRows).toHaveLength(4); // Header + 3 resource rows
		});

		test('should have proper row and cell ARIA attributes', () => {
			render(<GanttChart {...defaultProps} />);
			
			// Resource cells
			const resourceCells = screen.getAllByRole('gridcell', { name: /Resource:/ });
			expect(resourceCells).toHaveLength(3);
			resourceCells.forEach((cell) => {
				expect(cell).toHaveAttribute('aria-colindex', '1');
			});

			// Timeline cells
			const timelineCells = screen.getAllByRole('gridcell', { name: /Timeline for/ });
			expect(timelineCells).toHaveLength(3);
			timelineCells.forEach((cell) => {
				expect(cell).toHaveAttribute('aria-colindex', '2');
				expect(cell).toHaveAttribute('aria-colspan', '7');
			});
		});

		test('should have proper tabIndex management', () => {
			render(<GanttChart {...defaultProps} />);
			
			// Main grid should be tabbable
			const grid = screen.getByRole('grid');
			expect(grid).toHaveAttribute('tabindex', '0');

			// Resource cells should be tabbable
			const resourceCells = screen.getAllByRole('gridcell', { name: /Resource:/ });
			resourceCells.forEach(cell => {
				expect(cell).toHaveAttribute('tabindex', '0');
			});

			// Timeline cells should be tabbable
			const timelineCells = screen.getAllByRole('gridcell', { name: /Timeline for/ });
			timelineCells.forEach(cell => {
				expect(cell).toHaveAttribute('tabindex', '0');
			});
		});
	});

	describe('Header Navigation', () => {
		test('should navigate between dates with arrow keys', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const headerTimeline = screen.getByRole('columnheader', { name: /Timeline from/ });
			await user.click(headerTimeline);

			// Home key should focus first date
			const firstDate = screen.getByRole('button', { name: /Wednesday, 1 January/ });
			await user.keyboard('{Home}'); // This should focus first date
			expect(firstDate).toHaveFocus();

			// Arrow right should move to next date
			await user.keyboard('{ArrowRight}');
			const secondDate = screen.getByRole('button', { name: /Thursday, 2 January/ });
			expect(secondDate).toHaveFocus();
		});

		test('should navigate to first/last date with Home/End keys', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const headerTimeline = screen.getByRole('columnheader', { name: /Timeline from/ });
			await user.click(headerTimeline);

			// End key should go to last date
			await user.keyboard('{End}');
			const lastDate = screen.getByRole('button', { name: /Tuesday, 7 January/ });
			expect(lastDate).toHaveFocus();

			// Home key should go to first date
			await user.keyboard('{Home}');
			const firstDate = screen.getByRole('button', { name: /Wednesday, 1 January/ });
			expect(firstDate).toHaveFocus();
		});

		test('should navigate from header to first row with arrow down', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const headerResource = screen.getByRole('columnheader', { name: /Resource column header/ });
			await user.click(headerResource);

			// Arrow down should move to first resource row
			await user.keyboard('{ArrowDown}');
			const firstResourceCell = screen.getByRole('gridcell', { name: /Resource: Developer A/ });
			expect(firstResourceCell).toHaveFocus();
		});

		test('should navigate from header timeline to first row timeline with arrow down', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const headerTimeline = screen.getByRole('columnheader', { name: /Timeline from/ });
			await user.click(headerTimeline);

			// Arrow down should move to first timeline row
			await user.keyboard('{ArrowDown}');
			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			expect(firstRowTimeline).toHaveFocus();
		});
	});

	describe('Grid Navigation', () => {
		test('should navigate between resource and timeline within a row', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstResourceCell = screen.getByRole('gridcell', { name: /Resource: Developer A/ });
			await user.click(firstResourceCell);

			// Arrow right should move to timeline
			await user.keyboard('{ArrowRight}');
			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			expect(firstRowTimeline).toHaveFocus();

			// Arrow left should move back to resource
			await user.keyboard('{ArrowLeft}');
			expect(firstResourceCell).toHaveFocus();
		});

		test('should navigate between rows with arrow up/down', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstResourceCell = screen.getByRole('gridcell', { name: /Resource: Developer A/ });
			await user.click(firstResourceCell);

			// Arrow down should move to next row
			await user.keyboard('{ArrowDown}');
			const secondResourceCell = screen.getByRole('gridcell', { name: /Resource: Developer B/ });
			expect(secondResourceCell).toHaveFocus();

			// Arrow up should move back to first row
			await user.keyboard('{ArrowUp}');
			expect(firstResourceCell).toHaveFocus();
		});

		test('should navigate from first row back to header', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstResourceCell = screen.getByRole('gridcell', { name: /Resource: Developer A/ });
			await user.click(firstResourceCell);

			// Arrow up should move to header
			await user.keyboard('{ArrowUp}');
			const headerResource = screen.getByRole('columnheader', { name: /Resource column header/ });
			expect(headerResource).toHaveFocus();
		});
	});

	describe('Task Navigation', () => {
		test('should activate task navigation mode with Enter', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);
			

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);

			// Enter should activate task navigation
			await user.keyboard('{Enter}');

			// Timeline should have active class
			expect(firstRowTimeline).toHaveClass('timeline-active');

			// First task should be focused and selected
			const firstTask = screen.getByLabelText(/Selected: Task 1/);
			expect(firstTask).toHaveFocus();
			expect(firstTask).toHaveAttribute('aria-label', expect.stringContaining('Selected:'));
		});

		test('should navigate between tasks with arrow keys in active mode', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);
			await user.keyboard('{Enter}'); // Activate task navigation

			// First task should be selected initially
			const firstTask = screen.getByLabelText(/Selected: Task 1/);
			expect(firstTask).toHaveFocus();

			// Arrow right should go to second task
			await user.keyboard('{ArrowRight}');
			const secondTask = screen.getByLabelText(/Selected: Task 2/);
			expect(secondTask).toHaveFocus();

			// Arrow left should go back to first task
			await user.keyboard('{ArrowLeft}');
			expect(firstTask).toHaveFocus();
		});

		test('should exit task navigation with Escape', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);
			await user.keyboard('{Enter}'); // Activate task navigation

			// Escape should exit task navigation
			await user.keyboard('{Escape}');

			// Timeline should lose active class
			expect(firstRowTimeline).not.toHaveClass('timeline-active');

			// Focus should return to timeline
			expect(firstRowTimeline).toHaveFocus();
		});

		test('should handle task interactions in active mode', async () => {
			const user = userEvent.setup();
			const onTaskClick = vi.fn();
			const onTaskDoubleClick = vi.fn();

			render(<GanttChart 
				{...defaultProps}
				onTaskClick={onTaskClick}
				onTaskDoubleClick={onTaskDoubleClick}
			/>);

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);
			await user.keyboard('{Enter}'); // Activate task navigation

			// Enter should trigger task click
			await user.keyboard('{Enter}');
			expect(onTaskClick).toHaveBeenCalledWith(mockTasks[0]);

			// Space should trigger task double click
			await user.keyboard(' ');
			expect(onTaskDoubleClick).toHaveBeenCalledWith(mockTasks[0]);
		});

		test('should not activate task navigation on empty timelines', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const emptyTimeline = screen.getByRole('gridcell', { name: /Timeline for Designer/ });
			await user.click(emptyTimeline);

			// Enter should not activate task navigation for empty timelines
			await user.keyboard('{Enter}');

			// Timeline should not have active class
			expect(emptyTimeline).not.toHaveClass('timeline-active');
		});
	});

	describe('Scrolling', () => {
		test('should scroll timeline horizontally with Shift+Arrow keys', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);

			// Mock scrollBy method
			const scrollSpy = vi.fn();
			firstRowTimeline.scrollBy = scrollSpy;

			// Shift+ArrowLeft should scroll left
			await user.keyboard('{Shift>}{ArrowLeft}{/Shift}');
			expect(scrollSpy).toHaveBeenCalledWith({ left: -30, behavior: 'smooth' });

			// Shift+ArrowRight should scroll right
			await user.keyboard('{Shift>}{ArrowRight}{/Shift}');
			expect(scrollSpy).toHaveBeenCalledWith({ left: 30, behavior: 'smooth' });
		});

		test('should scroll grid with Alt+Arrow keys', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const gridContainer = screen.getByRole('rowgroup');
			
			// Mock scrollBy method
			const scrollSpy = vi.fn();
			gridContainer.scrollBy = scrollSpy;

			await user.click(gridContainer);

			// Alt+ArrowLeft should scroll left
			await user.keyboard('{Alt>}{ArrowLeft}{/Alt}');
			expect(scrollSpy).toHaveBeenCalledWith({ left: -50, behavior: 'smooth' });

			// Alt+ArrowRight should scroll right
			await user.keyboard('{Alt>}{ArrowRight}{/Alt}');
			expect(scrollSpy).toHaveBeenCalledWith({ left: 50, behavior: 'smooth' });
		});
	});

	describe('Complex Navigation Scenarios', () => {
		test('should maintain state when switching between grid and task navigation', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);

			// Activate task navigation
			await user.keyboard('{Enter}');
			
			// Navigate to second task
			await user.keyboard('{ArrowRight}');
			const secondTask = screen.getByLabelText(/Selected: Task 2/);
			expect(secondTask).toHaveFocus();

			// Exit task navigation
			await user.keyboard('{Escape}');
			expect(firstRowTimeline).toHaveFocus();

			// Re-enter task navigation
			await user.keyboard('{Enter}');
			
			// Should start from first task again
			const firstTask = screen.getByLabelText(/Selected: Task 1/);
			expect(firstTask).toHaveFocus();
		});

		test('should handle edge cases in navigation', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const lastRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Designer/ });
			await user.click(lastRowTimeline);

			// Arrow down from last row should not move focus
			await user.keyboard('{ArrowDown}');
			expect(lastRowTimeline).toHaveFocus();

			// Navigate to first row
			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);
			await user.keyboard('{Enter}'); // Activate task navigation

			// Arrow left from first task should stay on first task
			await user.keyboard('{ArrowLeft}');
			const firstTask = screen.getByLabelText(/Selected: Task 1/);
			expect(firstTask).toHaveFocus();

			// Arrow right to second task, then arrow right again should stay on second task
			await user.keyboard('{ArrowRight}');
			await user.keyboard('{ArrowRight}');
			const secondTask = screen.getByLabelText(/Selected: Task 2/);
			expect(secondTask).toHaveFocus();
		});
	});

	describe('Accessibility Announcements', () => {
		test('should have descriptive aria-labels', () => {
			render(<GanttChart {...defaultProps} />);

			// Grid should have descriptive label
			const grid = screen.getByRole('grid');
			expect(grid).toHaveAttribute('aria-label', 'Gantt Chart showing resource scheduling and task timelines');

			// Timelines should have task count in labels
			const timeline1 = screen.getByRole('gridcell', { name: /Timeline for Developer A with 2 tasks/ });
			expect(timeline1).toBeInTheDocument();

			const timeline2 = screen.getByRole('gridcell', { name: /Timeline for Developer B with 1 task/ });
			expect(timeline2).toBeInTheDocument();

			const timeline3 = screen.getByRole('gridcell', { name: /Timeline for Designer with 0 tasks/ });
			expect(timeline3).toBeInTheDocument();
		});

		test('should update task labels when selected', async () => {
			const user = userEvent.setup();
			render(<GanttChart {...defaultProps} />);

			const firstRowTimeline = screen.getByRole('gridcell', { name: /Timeline for Developer A/ });
			await user.click(firstRowTimeline);
			await user.keyboard('{Enter}'); // Activate task navigation

			// First task should show as selected
			const firstTask = screen.getByLabelText(/Selected: Task 1/);
			expect(firstTask).toBeInTheDocument();

			// Navigate to second task
			await user.keyboard('{ArrowRight}');
			const secondTask = screen.getByLabelText(/Selected: Task 2/);
			expect(secondTask).toBeInTheDocument();
		});
	});
});
