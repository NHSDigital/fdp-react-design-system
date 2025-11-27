export interface LabelProps {
  /** The HTML for attribute linking to an input */
  htmlFor?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether this is a page heading label */
  isPageHeading?: boolean;
  /** Size variant for the label */
  size?: 'xl' | 'l' | 'm' | 's';
  /** Children elements */
  children: React.ReactNode;
}
