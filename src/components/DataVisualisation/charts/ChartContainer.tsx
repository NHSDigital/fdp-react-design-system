import * as React from 'react';
import clsx from 'clsx';
import '../DataVisualisation.scss';

export interface ChartContainerProps {
  title: string;
  description?: string;
  source?: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number;
  className?: string;
  id?: string;
  tabularData?: React.ReactNode;
  showTableToggle?: boolean;
  onToggleTable?: () => void;
  initiallyShowTable?: boolean;
}

/**
 * Accessible chart wrapper providing figure/figcaption semantics and optional
 * table toggle pattern for data transparency.
 */
export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  description,
  source,
  children,
  width = '100%',
  height = 320,
  className,
  id,
  tabularData,
  showTableToggle,
  onToggleTable,
  initiallyShowTable = false
}) => {
  const figureId = React.useId();
  const resolvedId = id || figureId;
  const descId = description ? `${resolvedId}-desc` : undefined;
  const sourceId = source ? `${resolvedId}-src` : undefined;
  const [showTable, setShowTable] = React.useState(initiallyShowTable);

  const handleToggle = React.useCallback(() => {
    setShowTable(s => !s);
    onToggleTable?.();
  }, [onToggleTable]);

  return (
    <figure
      id={resolvedId}
      className={clsx('fdp-chart', className)}
      style={{ width }}
      aria-labelledby={`${resolvedId}-title`}
      aria-describedby={clsx(descId, sourceId)}
    >
      <header className="fdp-chart__header">
        <h3 id={`${resolvedId}-title`} className="fdp-chart__title">{title}</h3>
        {showTableToggle && (
          <button
            type="button"
            className="fdp-chart__toggle"
            aria-expanded={showTable}
            onClick={handleToggle}
          >
            {showTable ? 'Hide table' : 'Show table'}
          </button>
        )}
      </header>
      {description && (
        <p id={descId} className="fdp-chart__description">
          {description}
        </p>
      )}
      <div
        className="fdp-chart__viz"
        style={{ height }}
        role="group"
        aria-label={title}
      >
        {children}
      </div>
      {(source || tabularData) && (
        <figcaption className="fdp-chart__caption">
          {source && (
            <small id={sourceId} className="fdp-chart__source">
              Source: {source}
            </small>
          )}
          {showTable && tabularData}
        </figcaption>
      )}
    </figure>
  );
};

export default ChartContainer;
