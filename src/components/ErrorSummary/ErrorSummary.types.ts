import { ReactNode } from 'react';

export interface ErrorSummaryItem {
  /** Text content for the error item */
  text?: string;
  /** HTML content for the error item (takes precedence over text) */
  html?: string;
  /** Link href for the error item (makes it clickable to jump to the field) */
  href?: string;
  /** Additional HTML attributes for the error link */
  attributes?: Record<string, any>;
}

export interface ErrorSummaryProps {
  /** Title text for the error summary */
  titleText?: string;
  /** Title HTML for the error summary (takes precedence over titleText) */
  titleHtml?: string;
  /** Description text providing context about the errors */
  descriptionText?: string;
  /** Description HTML providing context about the errors */
  descriptionHtml?: string;
  /** Array of error items to display */
  errorList: ErrorSummaryItem[];
  /** Additional CSS classes */
  className?: string;
  /** Children elements for custom content between description and error list */
  children?: ReactNode;
  /** Additional HTML attributes */
  [key: string]: any;
}
