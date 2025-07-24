import { useRef, useState } from 'react';

export interface Resource {
	id: string;
	label: string;
}

export interface Task {
	id: string;
	title: string;
	resourceId: string;
	start: Date;
	end: Date;
	priority?: 'high' | 'medium' | 'low';
	color?: string;
	progress?: number; // 0-100
}

export interface TaskBarProps {
	task: Task;
	scale: (date: Date) => number;
	onTaskClick?: (task: Task) => void;
	onTaskDoubleClick?: (task: Task) => void;
}

export function TaskBar({ task, scale, onTaskClick, onTaskDoubleClick }: TaskBarProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isPressed, setIsPressed] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

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

	const handleClick = () => {
		onTaskClick?.(task);
	};

	const handleDoubleClick = () => {
		onTaskDoubleClick?.(task);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleClick();
		}
	};

	const handleMouseDown = () => {
		setIsPressed(true);
	};

	const handleMouseUp = () => {
		setIsPressed(false);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div
			role="button"
			tabIndex={0}
			ref={ref}
			className={`gantt-task-bar ${isPressed ? 'gantt-task-bar--pressed' : ''} ${isFocused ? 'gantt-task-bar--focused' : ''} ${task.priority ? `gantt-task-bar--priority-${task.priority}` : ''}`}
			style={{
				left: `${leftPosition}px`,
				width: `${width}px`,
				top: '14px', // Center in 48px row height
				backgroundColor: getTaskColor(),
			}}
			onClick={handleClick}
			onDoubleClick={handleDoubleClick}
			onKeyDown={handleKeyDown}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onFocus={handleFocus}
			onBlur={handleBlur}
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
