import { forwardRef } from 'react';
import { Tag, TagProps } from '../Tag';
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
export const TaskList = forwardRef<HTMLUListElement, TaskListProps>(
  ({ items, idPrefix = 'task-list', className, ...props }, ref) => {
    const classes = [
      'nhsuk-task-list',
      className
    ].filter(Boolean).join(' ');

    const renderTaskItem = (item: TaskListItem, index: number) => {
      const itemIndex = index + 1;
      const hintId = `${idPrefix}-${itemIndex}-hint`;
      const statusId = `${idPrefix}-${itemIndex}-status`;
      const hasLink = Boolean(item.href);

      // Build item classes
      const itemClasses = [
        'nhsuk-task-list__item',
        hasLink && 'nhsuk-task-list__item--with-link',
        item.classes
      ].filter(Boolean).join(' ');

      // Build aria-describedby for accessibility
      const ariaDescribedBy = [
        item.hint && hintId,
        statusId
      ].filter(Boolean).join(' ');

      return (
        <TaskListItem
          key={index}
          item={item}
          itemClasses={itemClasses}
          hasLink={hasLink}
          hintId={hintId}
          statusId={statusId}
          ariaDescribedBy={ariaDescribedBy}
        />
      );
    };

    return (
      <ul
        ref={ref}
        className={classes}
        {...props}
      >
        {items.map(renderTaskItem)}
      </ul>
    );
  }
);

/**
 * Individual TaskList item component for better organization
 */
interface TaskListItemProps {
  item: TaskListItem;
  itemClasses: string;
  hasLink: boolean;
  hintId: string;
  statusId: string;
  ariaDescribedBy: string;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
  item,
  itemClasses,
  hasLink,
  hintId,
  statusId,
  ariaDescribedBy
}) => {
  const renderTitle = () => {
    const titleContent = item.title.html ? (
      <span dangerouslySetInnerHTML={{ __html: item.title.html }} />
    ) : (
      item.title.text
    );

    const titleClasses = [
      hasLink ? 'nhsuk-task-list__link' : '',
      item.title.classes
    ].filter(Boolean).join(' ');

    if (hasLink) {
      return (
        <a
          className={titleClasses}
          href={item.href}
          aria-describedby={ariaDescribedBy}
        >
          {titleContent}
        </a>
      );
    }

    return (
      <div className={item.title.classes || ''}>
        {titleContent}
      </div>
    );
  };

  const renderHint = () => {
    if (!item.hint) return null;

    const hintContent = item.hint.html ? (
      <div
        id={hintId}
        className="nhsuk-task-list__hint"
        dangerouslySetInnerHTML={{ __html: item.hint.html }}
      />
    ) : (
      <div id={hintId} className="nhsuk-task-list__hint">
        {item.hint.text}
      </div>
    );

    return hintContent;
  };

  const renderStatus = () => {
    const statusClasses = [
      'nhsuk-task-list__status',
      item.status.classes
    ].filter(Boolean).join(' ');

    let statusContent;

    if (item.status.tag) {
      // Use the Tag component for tag status
      statusContent = (
        <Tag {...item.status.tag} />
      );
    } else if (item.status.html) {
      statusContent = (
        <span dangerouslySetInnerHTML={{ __html: item.status.html }} />
      );
    } else {
      statusContent = item.status.text;
    }

    return (
      <div className={statusClasses} id={statusId}>
        {statusContent}
      </div>
    );
  };

  return (
    <li className={itemClasses}>
      <div className="nhsuk-task-list__name-and-hint">
        {renderTitle()}
        {renderHint()}
      </div>
      {renderStatus()}
    </li>
  );
};

TaskList.displayName = 'TaskList';
