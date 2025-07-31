export interface BreadcrumbItem {
  /**
   * The text label for the breadcrumb item
   */
  text: string;
  
  /**
   * The URL for the breadcrumb item
   */
  href?: string;
  
  /**
   * Additional HTML attributes for the item
   */
  attributes?: Record<string, string>;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items?: BreadcrumbItem[];
  
  /**
   * Additional CSS class names
   */
  classes?: string;
  
  /**
   * Aria label for the navigation
   * @default "Breadcrumb"
   */
  labelText?: string;
  
  /**
   * Direct href for simple breadcrumbs (alternative to items)
   */
  href?: string;
  
  /**
   * Direct text for simple breadcrumbs (alternative to items)
   */
  text?: string;
  
  /**
   * Whether to use reverse color scheme (for dark backgrounds)
   * @default false
   */
  reverse?: boolean;
  
  /**
   * Additional HTML attributes
   */
  attributes?: Record<string, string>;
}
