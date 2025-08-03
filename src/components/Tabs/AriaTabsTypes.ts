import { AriaTabListProps, AriaTabPanelProps as ReactAriaTabPanelProps } from '@react-aria/tabs';
import { TabListState } from '@react-stately/tabs';
import { Node } from '@react-types/shared';

export interface AriaTabsProps extends AriaTabListProps<any> {
  className?: string;
  'data-testid'?: string;
  id?: string;
  onEscape?: () => void;
}

export interface AriaTabProps {
  item: Node<any>;
  state: TabListState<any>;
  className?: string;
}

export interface AriaTabPanelProps extends ReactAriaTabPanelProps {
  state: TabListState<any>;
  className?: string;
}

export interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  attributes?: Record<string, any>;
}

export interface AriaTabsHandle {
  focusTab: (tabId: string) => void;
  getActiveTab: () => string | null;
  getTabListElement: () => HTMLElement | null;
}
