export interface HeadingProps {
  /**
   * The heading level (1-6) which determines the HTML tag (h1, h2, etc.)
   * If not provided, level will be automatically determined from the size prop:
   * - xxl/xl → h1
   * - l → h2 
   * - m → h3
   * - s → h4
   * - xs → h5
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
   * Custom margin-bottom value. If provided, overrides the default margin.
   * Can be a CSS value like '24px', '1.5rem', or a design token variable
   */
  marginBottom?: string;
  
  /**
   * Additional props to pass to the heading element
   */
  [key: string]: any;
}
