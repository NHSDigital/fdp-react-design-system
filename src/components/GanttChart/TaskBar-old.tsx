import { useRef } from 'react';
import { usePress } from '@react-aria/interactions';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { scaleTime } from 'd3-scale';

export type Task = {
	id: string;
	resourceId: string;
	title: string;
	start: Date;
	end: Date;
	progress?: number;   // 0-100 for percentage
	priority?: 'low' | 'medium' | 'high';
	color?: string;
};

export type Resource = { 
	id: string; 
	label: string;
	type?: string;
	department?: string;
};

interface TaskBarProps {
	task: Task;
	scale: ReturnType<typeof scaleTime<number>>;
	onTaskClick?: (task: Task) => void;
	onTaskDoubleClick?: (task: Task) => void;
}

export function TaskBar({ task, scale, onTaskClick, onTaskDoubleClick }: TaskBarProps) {
	const ref = useRef<HTMLDivElement>(null);
	
	const { pressProps, isPressed } = usePress({
		onPress() {
			onTaskClick?.(task);
		}
	});
	
	const { isFocusVisible, focusProps } = useFocusRing();

	// Calculate position and width using the time scale
	const leftPosition = scale(task.start);
	const rightPosition = scale(task.end);
	const width = Math.max(rightPosition - leftPosition, 20); // Minimum width for visibility

	// Determine task color based on priority or custom color
	const getTaskColor = () => {
		if (task.color) return task.color;
		
		switch (task.priority) {
			case 'high': return '#d5281b'; // NHS Red
			case 'medium': return '#005eb8'; // NHS Blue  
			case 'low': return '#007f3b'; // NHS Green
			default: return '#005eb8';
		}
	};

	// Calculate progress bar width
	const progressWidth = task.progress ? (width * task.progress / 100) : 0;

	return (
		<div
			{...mergeProps(pressProps, focusProps)}
			role="button"
			tabIndex={0}
			ref={ref}
			className={`gantt-task-bar ${isPressed ? 'gantt-task-bar--pressed' : ''} ${isFocusVisible ? 'gantt-task-bar--focused' : ''} ${task.priority ? `gantt-task-bar--priority-${task.priority}` : ''}`}
			style={{
				left: `${leftPosition}px`,
				width: `${width}px`,
				top: '14px', // Center in 48px row height
				backgroundColor: getTaskColor(),
			}}
			onDoubleClick={() => onTaskDoubleClick?.(task)}
			title={`${task.title} (${task.start.toLocaleDateString()} - ${task.end.toLocaleDateString()})${task.progress ? ` - ${task.progress}% complete` : ''}`}
		>
			{/* Task title */}
			<span className="task-title">
				{task.title}
			</span>
			
			{/* Progress indicator */}
			{task.progress !== undefined && (
				<div
					className="task-progress"
					style={{
						width: `${progressWidth}px`,
					}}
				/>
			)}
			
			{/* Screen reader content */}
			<span className="sr-only">
				{`Task: ${task.title}, from ${task.start.toLocaleDateString()} to ${task.end.toLocaleDateString()}${task.progress ? `, ${task.progress}% complete` : ''}${task.priority ? `, priority: ${task.priority}` : ''}`}
			</span>
		</div>
	);
}