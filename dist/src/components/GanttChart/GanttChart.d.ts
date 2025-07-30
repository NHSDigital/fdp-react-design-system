import { Resource, Task } from './TaskBar';
export interface GanttChartProps {
    resources: Resource[];
    tasks?: Task[];
    viewStart: Date;
    viewEnd: Date;
    onTaskClick?: (task: Task) => void;
    onTaskDoubleClick?: (task: Task) => void;
}
export declare function GanttChart({ resources, tasks, viewStart, viewEnd, onTaskClick, onTaskDoubleClick }: GanttChartProps): import("react/jsx-runtime").JSX.Element;
