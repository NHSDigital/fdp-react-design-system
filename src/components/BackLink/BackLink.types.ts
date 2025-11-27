export interface BackLinkProps {
  /** Text content for the back link */
  text?: string;
  /** HTML content for the back link (takes precedence over text) */
  html?: string;
  /** URL for the back link */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to render as a button instead of an anchor */
  element?: 'a' | 'button';
  /** Click handler for button elements */
  onClick?: () => void;
  /** Additional HTML attributes */
  [key: string]: any;
}
