// Core header props
export interface HeaderProps {
  /** Additional CSS classes */
  className?: string;
  /** Logo configuration */
  logo?: {
    href?: string;
    src?: string;
    ariaLabel?: string;
  };
  /** Service configuration */
  service?: {
    text?: string;
    href?: string;
  };
  /** Organisation configuration (for organisation header variant) */
  organisation?: {
    name?: string;
    split?: string;
    descriptor?: string;
  };
  /** Search configuration */
  search?: {
    action?: string;
    name?: string;
    placeholder?: string;
    visuallyHiddenButton?: string;
    visuallyHiddenLabel?: string;
  };
  /** Account configuration */
  account?: {
    ariaLabel?: string;
    items?: Array<AccountItem>;
    className?: string;
  };
  /** Navigation configuration */
  navigation?: {
    ariaLabel?: string;
    items?: Array<NavigationItem>;
    className?: string;
    justified?: boolean;
    white?: boolean;
  };
  /** Container classes */
  containerClasses?: string;
  /** Header variant */
  variant?: 'default' | 'white' | 'organisation';
  /** Maximum visible navigation items before showing "More" (for HeaderStatic) */
  maxVisibleItems?: number;
  /** Additional HTML attributes */
  attributes?: Record<string, any>;
}

export interface AccountItem {
  /** Link URL */
  href?: string;
  /** Form action URL */
  action?: string;
  /** Form method */
  method?: 'get' | 'post';
  /** Display text */
  text?: string;
  /** HTML content (overrides text) */
  html?: string;
  /** Show user icon */
  icon?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export interface NavigationItem {
  /** Link URL */
  href: string;
  /** Display text */
  text?: string;
  /** HTML content (overrides text) */
  html?: string;
  /** Whether this item is active/current */
  active?: boolean;
  /** Whether this item represents the current page */
  current?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  attributes?: Record<string, any>;
}
