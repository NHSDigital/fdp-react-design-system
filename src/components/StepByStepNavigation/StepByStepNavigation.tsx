import React, { useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import { StepByStepNavigationProps, StepItem } from './StepByStepNavigation.types';
import './StepByStepNavigation.scss';

const HeadingTag: React.FC<{ level: 2 | 3 | 4; children: React.ReactNode; className?: string }> = ({ level, children, className }) => {
  const Tag = (`h${level}` as unknown) as React.ElementType;
  return React.createElement(Tag, { className }, children);
};

const DefaultLink = ({ href, children, className, ...rest }: { href: string; children: React.ReactNode; className?: string } & Record<string, unknown>) => (
  <a href={href} className={className} {...rest}>{children}</a>
);

function renderTitleContent(item: StepItem, isCurrent: boolean) {
  return (
    <span className={clsx('nhs-step-nav__title', { 'nhs-step-nav__title--current': isCurrent })}>
      {item.title}
    </span>
  );
}

export const StepByStepNavigation: React.FC<StepByStepNavigationProps> = ({
  id,
  className,
  ariaLabel = 'Step by step',
  heading,
  summary,
  headingLevel = 3,
  variant = 'full-width',
  items,
  numbered = true,
  currentStepId,
  renderLink,
  collapsible = true,
  singleOpen = false,
  defaultExpandedIds,
  expandedIds,
  onToggle,
  showAllControls = false,
  autoFocusExpanded = false,
}) => {
  const Link = renderLink ?? DefaultLink;

  const containerProps = variant === 'sidebar'
    ? { as: 'aside' as const, className: 'nhs-step-nav nhs-step-nav--sidebar' }
    : { as: 'nav' as const, className: 'nhs-step-nav nhs-step-nav--full' };

  const ContainerTag = (containerProps.as === 'aside' ? 'aside' : 'nav') as React.ElementType;

  const uncontrolled = expandedIds === undefined;
  const [internalExpanded, setInternalExpanded] = useState<Set<string>>(
    () => new Set(defaultExpandedIds ?? [])
  );

  const expandedSet = useMemo(() => (uncontrolled ? internalExpanded : new Set(expandedIds)), [uncontrolled, internalExpanded, expandedIds]);

  const hasAnyContent = useMemo(
    () => items.some((it) => (it.description || (it.items && it.items.length > 0))),
    [items]
  );

  const isExpanded = useCallback((stepId: string) => expandedSet.has(stepId), [expandedSet]);

  const setExpanded = useCallback((stepId: string, next: boolean) => {
    if (uncontrolled) {
      setInternalExpanded((prev) => {
        if (singleOpen) {
          // In singleOpen mode, open only this id (or none if collapsing)
          return next ? new Set([stepId]) : new Set();
        }
        const nextSet = new Set(prev);
        if (next) nextSet.add(stepId); else nextSet.delete(stepId);
        return nextSet;
      });
    }
    onToggle?.(stepId, next);
  }, [uncontrolled, onToggle, singleOpen]);

  const toggleAll = useCallback((expand: boolean) => {
    const ids = items.filter((it) => it.description || (it.items && it.items.length > 0)).map((it) => it.id);
    if (uncontrolled) {
      setInternalExpanded(() => (expand ? (singleOpen ? new Set(ids.slice(0, 1)) : new Set(ids)) : new Set()));
    }
    ids.forEach((sid) => onToggle?.(sid, expand));
  }, [items, uncontrolled, onToggle, singleOpen]);

  const onItemToggle = useCallback((item: StepItem, buttonEl?: HTMLButtonElement | null) => {
    const next = !isExpanded(item.id);
    setExpanded(item.id, next);
    if (next && autoFocusExpanded) {
      // move focus to first focusable in content region, if any
      const panel = document.getElementById(`sbs-${item.id}-panel`);
      if (panel) {
        const focusable = panel.querySelector<HTMLElement>(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable?.focus();
      }
    } else {
      // keep focus on the toggle button
      buttonEl?.focus();
    }
  }, [autoFocusExpanded, isExpanded, setExpanded]);

  return React.createElement(
    ContainerTag,
    { id, 'aria-label': ariaLabel, className: clsx(containerProps.className, className) },
    <>
      {variant === 'full-width' && (heading || summary) && (
        <div className="nhs-step-nav__intro">
          {heading && (
            <HeadingTag level={headingLevel} className="nhs-step-nav__heading">{heading}</HeadingTag>
          )}
          {summary && (
            <p className="nhs-step-nav__summary">{summary}</p>
          )}
          {collapsible && !singleOpen && showAllControls && hasAnyContent && (
            <div className="nhs-step-nav__controls">
              <button type="button" className="nhs-step-nav__control" onClick={() => toggleAll(true)}>Show all</button>
              <button type="button" className="nhs-step-nav__control" onClick={() => toggleAll(false)}>Hide all</button>
            </div>
          )}
        </div>
      )}
      <ol className={clsx('nhs-step-nav__list', { 'nhs-step-nav__list--numbered': numbered })}>
        {items.map((item, idx) => {
          const isCurrent = currentStepId === item.id;
          const itemClasses = clsx(
            'nhs-step-nav__item',
            isCurrent && 'nhs-step-nav__item--current',
            item.status && `nhs-step-nav__item--${item.status}`
          );

          const title = item.href ? (
            <Link href={item.href} className="nhs-step-nav__link" aria-current={isCurrent ? 'step' : undefined}>
              {renderTitleContent(item, isCurrent)}
            </Link>
          ) : (
            renderTitleContent(item, isCurrent)
          );

          const hasContent = !!(item.description || (item.items && item.items.length > 0));
          const expanded = collapsible && hasContent ? isExpanded(item.id) : true;
          const headerId = `sbs-${item.id}-header`;
          const panelId = `sbs-${item.id}-panel`;

          return (
            <li key={item.id || idx} className={itemClasses}>
              <div className="nhs-step-nav__header">
                {title}
                {(item.optional || item.duration || item.meta) && (
                  <div className="nhs-step-nav__meta">
                    {item.optional && <span className="nhs-step-nav__optional" aria-label="Optional">Optional</span>}
                    {item.duration && <span className="nhs-step-nav__duration">{item.duration}</span>}
                    {item.meta}
                  </div>
                )}
                {collapsible && hasContent && (
                  <button
                    id={headerId}
                    type="button"
                    className="nhs-step-nav__toggle"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={(e) => onItemToggle(item, e.currentTarget)}
                    aria-label={(expanded ? 'Hide' : 'Show') + ` details for ${typeof item.title === 'string' ? item.title : 'this step'}`}
                  >
                    <span className="nhs-step-nav__toggle-icon" aria-hidden="true" />
                  </button>
                )}
              </div>

              {hasContent && (!collapsible || expanded) && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={collapsible ? headerId : undefined}
                  className={clsx('nhs-step-nav__content')}
                >
                  {item.description && <p className="nhs-step-nav__description">{item.description}</p>}
                  {item.items && item.items.length > 0 && (
                    <ol className="nhs-step-nav__sublist">
                      {item.items.map((sub) => {
                        const subCurrent = currentStepId === sub.id;
                        const subTitle = sub.href ? (
                          <Link href={sub.href} className="nhs-step-nav__sublink" aria-current={subCurrent ? 'step' : undefined}>
                            {renderTitleContent(sub, subCurrent)}
                          </Link>
                        ) : (
                          renderTitleContent(sub, subCurrent)
                        );
                        return (
                          <li key={sub.id} className={clsx('nhs-step-nav__subitem', sub.status && `nhs-step-nav__subitem--${sub.status}`)}>
                            {subTitle}
                          </li>
                        );
                      })}
                    </ol>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default StepByStepNavigation;
