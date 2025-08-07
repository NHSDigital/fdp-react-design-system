import React, { useState, useEffect } from 'react';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';
import { AriaTabsDataGridAdaptiveProps, LayoutMode, ViewportConfig } from './AriaTabsDataGridAdaptiveTypes';
import './AriaTabsDataGridAdaptive.scss';

/**
 * Hook for responsive layout detection
 */
function useResponsiveLayout(breakpoints: ViewportConfig, forceLayout?: LayoutMode): LayoutMode {
  const [layout, setLayout] = useState<LayoutMode>('cards');

  useEffect(() => {
    if (forceLayout) {
      setLayout(forceLayout);
      return;
    }

    const updateLayout = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints.mobile) {
        setLayout('cards');
      } else if (width < breakpoints.desktop) {
        setLayout('hybrid');
      } else {
        setLayout('table');
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [breakpoints, forceLayout]);

  return layout;
}

/**
 * Adaptive AriaTabsDataGrid with mobile-first card layout
 */
export const AriaTabsDataGridAdaptive: React.FC<AriaTabsDataGridAdaptiveProps> = ({
  breakpoints = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout,
  cardConfig = {},
  experimental = {},
  ...props
}) => {
  const layout = useResponsiveLayout(breakpoints, forceLayout);
  
  const {
    primaryField = props.tabPanels[0]?.columns[0]?.key,
    secondaryFields = props.tabPanels[0]?.columns.slice(1, 3).map(col => col.key) || [],
    badgeFields = [],
    hiddenFields = [],
    cardTemplate
  } = cardConfig;

  // Mobile-first card implementation
  if (layout === 'cards') {
    return (
      <div className={`aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${props.className || ''}`}>
        {/* Tab navigation remains the same */}
        <div role="tablist" className="aria-tabs-datagrid-adaptive__tabs">
          {props.tabPanels.map((panel, index) => (
            <button
              key={panel.id}
              role="tab"
              className={`aria-tabs-datagrid-adaptive__tab ${index === 0 ? 'aria-tabs-datagrid-adaptive__tab--selected' : ''}`}
            >
              {panel.label}
            </button>
          ))}
        </div>

        {/* Card-based data presentation */}
        <div className="aria-tabs-datagrid-adaptive__cards" role="grid">
          {props.tabPanels[0]?.data.map((row, index) => (
            <div
              key={index}
              className="aria-tabs-datagrid-adaptive__card"
              role="gridcell"
              tabIndex={0}
            >
              {cardTemplate ? (
                cardTemplate(row, props.tabPanels[0].columns)
              ) : (
                <DefaultCardTemplate
                  row={row}
                  columns={props.tabPanels[0].columns}
                  primaryField={primaryField}
                  secondaryFields={secondaryFields}
                  badgeFields={badgeFields}
                  hiddenFields={hiddenFields}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Hybrid mode for tablets
  if (layout === 'hybrid') {
    return (
      <div className={`aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${props.className || ''}`}>
        {/* Enhanced table with card-like spacing */}
        <AriaTabsDataGrid {...props} className="aria-tabs-datagrid-adaptive__table--hybrid" />
      </div>
    );
  }

  // Desktop table mode
  return <AriaTabsDataGrid {...props} />;
};

/**
 * Default card template following NHS design patterns
 */
interface DefaultCardTemplateProps {
  row: any;
  columns: any[];
  primaryField?: string;
  secondaryFields: string[];
  badgeFields: string[];
  hiddenFields: string[];
}

const DefaultCardTemplate: React.FC<DefaultCardTemplateProps> = ({
  row,
  columns,
  primaryField,
  secondaryFields,
  badgeFields,
  hiddenFields
}) => {
  const primaryColumn = columns.find(col => col.key === primaryField);
  const primaryValue = primaryColumn?.render ? primaryColumn.render(row) : row[primaryField || ''];

  return (
    <>
      {/* Card Header */}
      <div className="aria-tabs-datagrid-adaptive__card-header">
        <h3 className="aria-tabs-datagrid-adaptive__card-title">
          {primaryValue}
        </h3>
        
        {/* Badge fields */}
        {badgeFields.length > 0 && (
          <div className="aria-tabs-datagrid-adaptive__card-badges">
            {badgeFields.map(fieldKey => {
              const column = columns.find(col => col.key === fieldKey);
              const value = column?.render ? column.render(row) : row[fieldKey];
              return (
                <span key={fieldKey} className="nhsuk-tag aria-tabs-datagrid-adaptive__card-badge">
                  {value}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="aria-tabs-datagrid-adaptive__card-body">
        {secondaryFields.map(fieldKey => {
          const column = columns.find(col => col.key === fieldKey);
          if (!column || hiddenFields.includes(fieldKey)) return null;
          
          const value = column.render ? column.render(row) : row[fieldKey];
          
          return (
            <div key={fieldKey} className="aria-tabs-datagrid-adaptive__card-field">
              <dt className="aria-tabs-datagrid-adaptive__card-field-label">
                {column.label}
              </dt>
              <dd className="aria-tabs-datagrid-adaptive__card-field-value">
                {typeof value === 'boolean' ? (value ? '✓' : '✗') : String(value ?? '')}
              </dd>
            </div>
          );
        })}
      </div>

      {/* Card Actions */}
      <div className="aria-tabs-datagrid-adaptive__card-actions">
        <button className="nhsuk-button nhsuk-button--secondary" type="button">
          View Details
        </button>
      </div>
    </>
  );
};

export default AriaTabsDataGridAdaptive;
