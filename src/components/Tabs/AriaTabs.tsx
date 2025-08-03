import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useTabList, useTab, useTabPanel } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import { Item } from '@react-stately/collections';
import classNames from 'classnames';
import { AriaTabsProps, AriaTabProps, AriaTabPanelProps, TabData, AriaTabsHandle } from './AriaTabsTypes';
import './Tabs.scss';

/**
 * Individual Tab Component using react-aria
 */
const AriaTab: React.FC<AriaTabProps> = ({ item, state, className }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { tabProps, isSelected, isDisabled } = useTab({ key: item.key }, state, ref);
  
  const tabClasses = classNames('nhsuk-tabs__tab', className, {
    'nhsuk-tabs__tab--selected': isSelected,
    'nhsuk-tabs__tab--disabled': isDisabled,
  });

  return (
    <li className={classNames('nhsuk-tabs__list-item', {
      'nhsuk-tabs__list-item--selected': isSelected,
      'nhsuk-tabs__list-item--disabled': isDisabled,
    })}>
      <button
        {...tabProps}
        ref={ref}
        className={tabClasses}
        disabled={isDisabled}
      >
        {item.rendered}
      </button>
    </li>
  );
};

/**
 * Tab Panel Component using react-aria
 */
const AriaTabPanel: React.FC<AriaTabPanelProps> = ({ state, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  const panelClasses = classNames('nhsuk-tabs__panel', className);

  return (
    <div
      {...tabPanelProps}
      ref={ref}
      className={panelClasses}
    >
      {state.selectedItem?.props.children}
    </div>
  );
};

/**
 * Main AriaTabS Component using react-aria
 */
export const AriaTabs = forwardRef<AriaTabsHandle, AriaTabsProps & { items: TabData[] }>(({
  items,
  className,
  onEscape,
  'data-testid': testId,
  id,
  ...props
}, ref) => {
  const tabListRef = useRef<HTMLDivElement>(null);
  
  // Convert items to the format expected by react-stately
  const tabItems = items.map(item => ({
    key: item.id,
    rendered: item.label,
    props: {
      children: item.content,
      title: item.label,
      isDisabled: item.disabled,
      ...item.attributes
    }
  }));

  const state = useTabListState({
    ...props,
    children: tabItems.map(item => (
      <Item key={item.key} title={item.rendered} textValue={item.rendered as string}>
        {item.props.children}
      </Item>
    ))
  });

  const { tabListProps } = useTabList(props, state, tabListRef);

  // Handle escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && onEscape) {
      event.preventDefault();
      onEscape();
    }
  };

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focusTab: (tabId: string) => {
      const tabElement = tabListRef.current?.querySelector(`[data-key="${tabId}"]`) as HTMLElement;
      if (tabElement) {
        tabElement.focus();
      }
    },
    getActiveTab: () => state.selectedKey as string || null,
    getTabListElement: () => tabListRef.current,
  }), [state.selectedKey]);

  const tabsClasses = classNames('nhsuk-tabs', className);

  return (
    <div 
      className={tabsClasses}
      id={id}
      data-testid={testId}
      onKeyDown={handleKeyDown}
    >
      <h2 className="nhsuk-tabs__title">Contents</h2>
      
      <div 
        className="nhsuk-tabs__list-container"
        ref={tabListRef}
      >
        <ul 
          {...tabListProps}
          className="nhsuk-tabs__list"
        >
          {[...state.collection].map((item) => (
            <AriaTab
              key={item.key}
              item={item}
              state={state}
            />
          ))}
        </ul>
      </div>
      
      <AriaTabPanel
        key={state.selectedItem?.key}
        state={state}
      />
    </div>
  );
});

AriaTabs.displayName = 'AriaTabs';

export type { AriaTabsHandle, TabData };
export default AriaTabs;
