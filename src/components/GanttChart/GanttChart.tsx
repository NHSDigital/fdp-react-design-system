import { scaleTime } from 'd3-scale';
import { useMemo, useRef, useState, useEffect } from 'react';
import { TaskBar, Resource, Task } from './TaskBar';
import './GanttChart.css';

export interface GanttChartProps {
	resources: Resource[];
	tasks?: Task[];
	viewStart: Date;
	viewEnd: Date;
	onTaskClick?: (task: Task) => void;
	onTaskDoubleClick?: (task: Task) => void;
}

interface GanttHeaderProps {
	viewStart: Date;
	viewEnd: Date;
}

function GanttHeader({ viewStart, viewEnd }: GanttHeaderProps) {
	const dates: Date[] = [];
	const MS_PER_DAY = 86_400_000; // 24 hours
	
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
	resource: Resource;
	tasks: Task[];
	scale: ReturnType<typeof scaleTime<number>>;
	onTaskClick?: (task: Task) => void;
	onTaskDoubleClick?: (task: Task) => void;
}

function GanttRow({ resource, tasks, scale, onTaskClick, onTaskDoubleClick }: GanttRowProps) {
	return (
		<div className="gantt-row">
			{/* Resource label */}
			<div className="resource-label">
				{resource.label}
			</div>
			
			{/* Timeline area */}
			<div className="timeline-container">
				{tasks.map((task) => (
					<TaskBar 
						key={task.id} 
						task={task} 
						scale={scale}
						onTaskClick={onTaskClick}
						onTaskDoubleClick={onTaskDoubleClick}
					/>
				))}
			</div>
		</div>
	);
}

export function GanttChart({
	resources,
	tasks = [],
	viewStart,
	viewEnd,
	onTaskClick,
	onTaskDoubleClick
}: GanttChartProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [timelineWidth, setTimelineWidth] = useState(800);

	// Update timeline width when container resizes
	useEffect(() => {
		if (!containerRef.current) return;

		const resizeObserver = new ResizeObserver((entries) => {
			const container = entries[0];
			if (container) {
				// Account for resource label width (200px) and some padding
				setTimelineWidth(Math.max(container.contentRect.width - 220, 400));
			}
		});

		resizeObserver.observe(containerRef.current);
		return () => resizeObserver.disconnect();
	}, []);

	const timeScale = useMemo(() =>
		scaleTime()
		.domain([viewStart, viewEnd])
		.range([0, timelineWidth]),
		[viewStart, viewEnd, timelineWidth]
	);

	// Group tasks by resource
	const tasksByResource = useMemo(() => {
		const grouped = new Map<string, Task[]>();
		tasks.forEach(task => {
			const resourceTasks = grouped.get(task.resourceId) || [];
			resourceTasks.push(task);
			grouped.set(task.resourceId, resourceTasks);
		});
		return grouped;
	}, [tasks]);

	return (
		<div className="gantt-chart">
			{/* Header with date columns */}
			<GanttHeader viewStart={viewStart} viewEnd={viewEnd} />
			
			{/* Main grid area */}
			<div ref={containerRef} className="gantt-grid">
				{resources.map((resource) => (
					<GanttRow 
						key={resource.id} 
						resource={resource}
						tasks={tasksByResource.get(resource.id) || []}
						scale={timeScale}
						onTaskClick={onTaskClick}
						onTaskDoubleClick={onTaskDoubleClick}
					/>
				))}
			</div>
		</div>
	);
}
