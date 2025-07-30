export interface ActionLinkProps {
  /** Text content for the action link */
  text: string;
  /** URL for the action link */
  href: string;
  /** Whether to open the link in a new window */
  openInNewWindow?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}
