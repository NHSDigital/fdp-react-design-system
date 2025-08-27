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
    type?: 'development' | 'design' | 'testing' | 'review' | 'deployment';
    color?: string;
    progress?: number;
}
export interface TaskBarProps {
    task: Task;
    scale: (date: Date) => number;
    onTaskClick?: (task: Task) => void;
    onTaskDoubleClick?: (task: Task) => void;
    isSelected?: boolean;
    taskIndex?: number;
    tabIndex?: number;
    onFocus?: () => void;
    'aria-label'?: string;
}
export declare function TaskBar({ task, scale, onTaskClick, onTaskDoubleClick, isSelected, taskIndex, tabIndex, onFocus, 'aria-label': ariaLabel }: TaskBarProps): import("react/jsx-runtime").JSX.Element;
