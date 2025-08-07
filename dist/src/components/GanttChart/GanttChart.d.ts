import { Resource, Task } from './TaskBar';
import './GanttChart.scss';
export interface GanttChartProps {
    resources: Resource[];
    tasks?: Task[];
    viewStart: Date | string | number;
    viewEnd: Date | string | number;
    onTaskClick?: (task: Task) => void;
    onTaskDoubleClick?: (task: Task) => void;
}
export declare function GanttChart({ resources, tasks, viewStart, viewEnd, onTaskClick, onTaskDoubleClick }: GanttChartProps): import("react/jsx-runtime").JSX.Element;
