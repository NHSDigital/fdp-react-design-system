export interface SummaryCardProps {
  /** The title/label for the summary card */
  title: string;
  /** The main value/number to display */
  value: string | number;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional variant for different visual styles */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Optional href to make the card clickable */
  href?: string;
  /** Optional custom className */
  className?: string;
  /** Optional aria-label for accessibility */
  ariaLabel?: string;
}
