import React, { useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { TabsProps, TabItemId } from './Tabs.types';
import './Tabs.scss';

/**
 * NHS Tabs Component
 * 
 * A tabs component for organizing related content into separate views.
 * Follows NHS design guidelines and accessibility standards.
 * 
 * @param props - Tabs component props
 * @returns JSX element
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onTabChange,
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  // Determine if component is controlled or uncontrolled
  const isControlled = controlledActiveTab !== undefined;
  
  // Internal state for uncontrolled mode
  const [internalActiveTab, setInternalActiveTab] = useState<TabItemId>(() => {
    return defaultActiveTab || items[0]?.id || '';
  });
  
  // Current active tab (controlled or uncontrolled)
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  
  // Refs for keyboard navigation
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<TabItemId, HTMLButtonElement>>(new Map());
  
  // Handle tab selection
  const handleTabClick = useCallback((tabId: TabItemId) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  }, [isControlled, onTabChange]);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, tabId: TabItemId) => {
    const tabIds = items.filter(item => !item.disabled).map(item => item.id);
    const currentIndex = tabIds.indexOf(tabId);
    
    let newIndex: number | null = null;
    
    switch (event.key) {
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabIds.length - 1;
        break;
      case 'ArrowRight':
        newIndex = currentIndex < tabIds.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabIds.length - 1;
        break;
      default:
        return;
    }
    
    if (newIndex !== null) {
      event.preventDefault();
      const newTabId = tabIds[newIndex];
      const newTabRef = tabRefs.current.get(newTabId);
      if (newTabRef) {
        newTabRef.focus();
        handleTabClick(newTabId);
      }
    }
  }, [items, handleTabClick]);
  
  // Set tab ref
  const setTabRef = useCallback((tabId: TabItemId, element: HTMLButtonElement | null) => {
    if (element) {
      tabRefs.current.set(tabId, element);
    } else {
      tabRefs.current.delete(tabId);
    }
  }, []);
  
  // Build CSS classes
  const tabsClasses = classNames('nhsuk-tabs', className);
  
  return (
    <div 
      className={tabsClasses}
      id={id}
      data-testid={testId}
      {...props}
    >
      <h2 className="nhsuk-tabs__title">Contents</h2>
      
      <div 
        className="nhsuk-tabs__list-container"
        role="tablist"
        ref={tabListRef}
      >
        <ul className="nhsuk-tabs__list">
          {items.map((item) => {
            const isActive = item.id === activeTab;
            const isDisabled = item.disabled;
            
            const tabClasses = classNames('nhsuk-tabs__list-item', {
              'nhsuk-tabs__list-item--selected': isActive,
              'nhsuk-tabs__list-item--disabled': isDisabled,
            });
            
            return (
              <li key={item.id} className={tabClasses}>
                <button
                  ref={(element) => setTabRef(item.id, element)}
                  className="nhsuk-tabs__tab"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${item.id}-panel`}
                  id={`${item.id}-tab`}
                  tabIndex={isActive ? 0 : -1}
                  disabled={isDisabled}
                  onClick={() => !isDisabled && handleTabClick(item.id)}
                  onKeyDown={(event) => !isDisabled && handleKeyDown(event, item.id)}
                  {...item.attributes}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      
      {items.map((item) => {
        const isActive = item.id === activeTab;
        
        return (
          <div
            key={item.id}
            className="nhsuk-tabs__panel"
            role="tabpanel"
            aria-labelledby={`${item.id}-tab`}
            id={`${item.id}-panel`}
            hidden={!isActive}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
};
