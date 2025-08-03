export type TabItemId = string;

export interface TabItem {
  /** Unique identifier for the tab */
  id: TabItemId;
  /** Tab label text */
  label: string;
  /** Tab panel content */
  content: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Additional attributes for the tab button */
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface TabsProps {
  /** Array of tab items */
  items: TabItem[];
  /** ID of the initially active tab */
  defaultActiveTab?: TabItemId;
  /** Controlled active tab ID */
  activeTab?: TabItemId;
  /** Callback when tab changes */
  onTabChange?: (tabId: TabItemId) => void;
  /** Callback when a tab gains focus */
  onTabFocus?: (tabId: TabItemId) => void;
  /** Callback when the tablist loses focus */
  onTabListBlur?: () => void;
  /** Callback when escape is pressed */
  onEscape?: () => void;
  /** Additional CSS classes for the tabs container */
  className?: string;
  /** HTML id attribute for the tabs */
  id?: string;
  /** Test identifier */
  'data-testid'?: string;
  /** Whether the tabs should auto-activate on focus */
  autoActivate?: boolean;
  /** Additional HTML attributes */
  [key: string]: any;
}

export interface TabsHandle {
  /** Focus a specific tab */
  focusTab: (tabId: TabItemId) => void;
  /** Get the currently active tab */
  getActiveTab: () => TabItemId;
  /** Get the tab list element */
  getTabListElement: () => HTMLDivElement | null;
}
