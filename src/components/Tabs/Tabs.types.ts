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
  /** Additional CSS classes for the tabs container */
  className?: string;
  /** HTML id attribute for the tabs */
  id?: string;
  /** Test identifier */
  'data-testid'?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}
