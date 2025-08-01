export interface HeadingProps {
  /**
   * The heading level (1-6) which determines the HTML tag (h1, h2, etc.)
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * The text content of the heading
   */
  text?: string;
  
  /**
   * HTML content for the heading (alternative to text)
   */
  html?: string;
  
  /**
   * Children elements (alternative to text/html)
   */
  children?: React.ReactNode;
  
  /**
   * Size variant for visual styling (independent of semantic level)
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  
  /**
   * Additional props to pass to the heading element
   */
  [key: string]: any;
}
