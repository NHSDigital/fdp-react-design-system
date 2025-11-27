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

export interface AccountProps {
  /** ARIA label for the account navigation */
  ariaLabel?: string;
  /** Array of account items */
  items?: Array<AccountItem>;
  /** Additional CSS classes */
  className?: string;
  /** Account variant for styling context */
  variant?: 'default' | 'white';
}
