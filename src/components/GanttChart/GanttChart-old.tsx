import { scaleTime } from 'd3-scale';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useGrid } from '@react-aria/grid';
import { useGridState } from '@react-stately/grid';
import { useGridRow } from '@react-aria/grid';
import { GridCollection } from '@react-stately/grid';
import { TaskBar, Resource, Task } from './TaskBar';
import './GanttChart.css';

/**
 * Build a GridCollection that represents the Gantt view.
 * Each resource becomes a grid row. Columns are daily buckets
 * between `view_start` and `view_end` (inclusive).
 *
 * ⚠️  NOTE: This is a simple reference implementation meant to get you compiling. Feel free to optimise or switch to hourly/weekly buckets depending on your needs.
 */
function build_gantt_collection(
	tasks: Task[],
	resources: Resource[],
	view_start: Date,
	view_end: Date
) {
  const MS_PER_DAY = 86_400_000; // 24 h

  /** Build an array of day‑start dates that act as columns */
	const dates: Date[] = [];
	for ( let t = view_start.getTime(); t <= view_end.getTime(); t += MS_PER_DAY
	) {
		dates.push(new Date(t));
	}

	/** Helper to see if a task overlaps a day bucket */
	function does_task_overlap_day(task: Task, day_start: Date) {
		const day_end = new Date(day_start.getTime() + MS_PER_DAY);
		return task.start < day_end && task.end > day_start;
	}

	/** Build rows → cells */
	const row_nodes = resources.map((resource, rowIndex) => {
		const cell_nodes = dates.map((day_start, col_idx) => {
		const overlapping_task = tasks.find( (task) => task.resourceId === resource.id && does_task_overlap_day(task, day_start));

		return {
			type: 'cell',
			key: `${resource.id}-c${col_idx}`,
			index: col_idx,
			isTask: Boolean(overlapping_task),
			task: overlapping_task,
			childNodes: [],
			value: overlapping_task || null,
			level: 1,
			hasChildNodes: false,
			rendered: null,
			textValue: ''
		};
	});

	return {
		type: 'row',
		key: resource.id,
		index: rowIndex,
		resource,
		childNodes: cell_nodes,
		value: resource,
		level: 0,
		hasChildNodes: cell_nodes.length > 0,
		rendered: resource.label ? resource.label : resource.id,
		textValue: resource.label ? resource.label : resource.id,
	};
  });

  /** Assemble columns metadata */
  const column_nodes = dates.map((day_start, idx) => ({
	type: 'column',
	key: `col-${idx}`,
	date: day_start,
  }));

  return new GridCollection<Resource>({
	columnCount: column_nodes.length,
	items: row_nodes,
  });
}

interface GanttState {
	tasks: Task[];
	resources: Resource[];
	viewStart: Date;
	viewEnd: Date;
	onTaskClick?: (task: Task) => void;
	onTaskDoubleClick?: (task: Task) => void;
}

// GanttChart.tsx
export function GanttChart({ tasks, resources, viewStart, viewEnd, onTaskClick, onTaskDoubleClick }: GanttState) {

	const containerRef = useRef<HTMLDivElement>(null);

	// 1. Build collection: every resource row contains synthetic “time slice” cells.
	const collection = build_gantt_collection(tasks, resources, viewStart, viewEnd);

	// 2. Feed to react-stately
	const state = useGridState({ collection });
	const { gridProps } = useGrid({ 'aria-label': 'Gantt chart' }, state, containerRef);

	// Measure the visible width of the scroll container
	const [timelineWidth, setTimelineWidth] = useState<number>(0);

	useEffect(() => {
		if (!containerRef.current) return;

		const resizeObserver = new ResizeObserver(entries => {
			for (const entry of entries) {
				setTimelineWidth(entry.contentRect.width);
			}
		});

		// Observe the container div
		resizeObserver.observe(containerRef.current);

		// Initial measurement
		setTimelineWidth(containerRef.current.offsetWidth);

		return () => resizeObserver.disconnect();
		
	}, []);

	const timeScale = useMemo( () =>
		scaleTime<number>()
		.domain([viewStart, viewEnd])
		.range([0, timelineWidth]),
		[viewStart, viewEnd, timelineWidth]
	);

	return (
		<div className="gantt-chart">
			{/* Header with date columns */}
			<GanttHeader viewStart={viewStart} viewEnd={viewEnd} timeScale={timeScale} />
			
			{/* Main grid area */}
			<div {...gridProps} ref={containerRef} className="gantt-grid">
				{[...state.collection].map((row) => (
					<GanttRow 
						key={row.key} 
						row={row} 
						state={state} 
						scale={timeScale}
						onTaskClick={onTaskClick}
						onTaskDoubleClick={onTaskDoubleClick}
					/>
				))}
			</div>
		</div>
	);
}

interface GanttHeaderProps {
	viewStart: Date;
	viewEnd: Date;
	timeScale: ReturnType<typeof scaleTime<number>>;
}

function GanttHeader({ viewStart, viewEnd }: GanttHeaderProps) {
	const MS_PER_DAY = 86_400_000;
	const dates: Date[] = [];
	
	// Generate the same dates as in the collection
	for (let t = viewStart.getTime(); t <= viewEnd.getTime(); t += MS_PER_DAY) {
		dates.push(new Date(t));
	}
	
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	return (
		<div className="gantt-header">
			<div className="header-resource">
				Resources
			</div>
			<div className="header-timeline">
				{dates.map((date, idx) => {
					const isToday = date.getTime() === today.getTime();
					return (
						<div 
							key={idx} 
							className={`date-column ${isToday ? 'today' : ''}`}
						>
							{date.toLocaleDateString('en-GB', { 
								day: 'numeric', 
								month: 'short' 
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

interface GanttRowProps {
	row: any; // You may want to create a more specific type for the row node
	state: ReturnType<typeof useGridState>;
	scale: ReturnType<typeof scaleTime<number>>;
	onTaskClick?: (task: Task) => void;
	onTaskDoubleClick?: (task: Task) => void;
}

function GanttRow({ row, state, scale, onTaskClick, onTaskDoubleClick }: GanttRowProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { rowProps } = useGridRow({ node: row }, state, ref);

	return (
		<div {...rowProps} ref={ref} className="gantt-row">
			{/* Resource label */}
			<div className="resource-label">
				{row.value.label || row.value.id}
			</div>
			
			{/* Timeline area */}
			<div className="timeline-container">
				{row.childNodes.map((cell: any) =>
					cell.isTask ? (
						<TaskBar 
							key={cell.key} 
							task={cell.task} 
							scale={scale}
							onTaskClick={onTaskClick}
							onTaskDoubleClick={onTaskDoubleClick}
						/>
					) : null
				)}
			</div>
		</div>
	);
}