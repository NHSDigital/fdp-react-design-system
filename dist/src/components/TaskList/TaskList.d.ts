import { TagProps } from '../Tag';
import './TaskList.scss';
export interface TaskListHint {
    /** Plain text content for the hint */
    text?: string;
    /** HTML content for the hint (takes precedence over text) */
    html?: string;
}
export interface TaskListTitle {
    /** Plain text content for the title */
    text?: string;
    /** HTML content for the title (takes precedence over text) */
    html?: string;
    /** Additional CSS classes for the title */
    classes?: string;
}
export interface TaskListStatusTag extends Omit<TagProps, 'children'> {
    /** Text content for the tag */
    text: string;
}
export interface TaskListStatus {
    /** Tag component props for rendering a status tag */
    tag?: TaskListStatusTag;
    /** Plain text status (used when tag is not provided) */
    text?: string;
    /** HTML status content (used when tag is not provided, takes precedence over text) */
    html?: string;
    /** Additional CSS classes for the status container */
    classes?: string;
}
export interface TaskListItem {
    /** Title configuration for the task */
    title: TaskListTitle;
    /** Optional hint text to provide additional context */
    hint?: TaskListHint;
    /** Status configuration (can be tag, text, or HTML) */
    status: TaskListStatus;
    /** URL for the task link (makes the title clickable) */
    href?: string;
    /** Additional CSS classes for the task item */
    classes?: string;
}
export interface TaskListProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {
    /** Array of task items to display */
    items: TaskListItem[];
    /** Prefix for generating unique IDs (defaults to 'task-list') */
    idPrefix?: string;
    /** Additional CSS classes for the task list container */
    className?: string;
}
/**
 * TaskList component for displaying a list of tasks with statuses
 *
 * Use the task list to give users more control over how they complete long,
 * complex services. The task list component displays all the tasks a user
 * needs to do, and allows users to easily identify which ones are done and
 * which they still need to do.
 *
 * @example
 * ```tsx
 * <TaskList
 *   items={[
 *     {
 *       title: { text: 'Check eligibility' },
 *       href: '#',
 *       status: {
 *         text: 'Completed',
 *         classes: 'nhsuk-task-list__status--completed'
 *       }
 *     },
 *     {
 *       title: { text: 'Personal details' },
 *       hint: { text: 'Your name, address and contact details' },
 *       href: '#',
 *       status: {
 *         tag: {
 *           text: 'Incomplete',
 *           color: 'blue'
 *         }
 *       }
 *     },
 *     {
 *       title: { text: 'Submit application' },
 *       status: {
 *         text: 'Cannot start yet',
 *         classes: 'nhsuk-task-list__status--cannot-start-yet'
 *       }
 *     }
 *   ]}
 * />
 * ```
 */
export declare const TaskList: import("react").ForwardRefExoticComponent<TaskListProps & import("react").RefAttributes<HTMLUListElement>>;
