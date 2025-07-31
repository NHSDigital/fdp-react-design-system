export interface PaginationProps {
  /**
   * URL for the previous page
   */
  previousUrl?: string;
  
  /**
   * Text/title for the previous page
   */
  previousPage?: string;
  
  /**
   * URL for the next page
   */
  nextUrl?: string;
  
  /**
   * Text/title for the next page
   */
  nextPage?: string;
  
  /**
   * Additional CSS class names
   */
  classes?: string;
  
  /**
   * Additional HTML attributes
   */
  attributes?: Record<string, string>;
}
