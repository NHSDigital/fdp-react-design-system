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
   * Whether this is the active/current page (no link will be rendered)
   */
  active?: boolean;
  
  /**
   * Additional HTML attributes for the item
   */
  attributes?: Record<string, string>;
}

export interface BreadcrumbItemProps {
  /**
   * The text label for the breadcrumb item
   */
  children: React.ReactNode;
  
  /**
   * The URL for the breadcrumb item
   */
  href?: string;
  
  /**
   * Whether this is the active/current page (no link will be rendered)
   */
  active?: boolean;
  
  /**
   * Additional HTML attributes for the item
   */
  attributes?: Record<string, string>;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items (alternative to children)
   */
  items?: BreadcrumbItem[];
  
  /**
   * React children for compound component usage
   */
  children?: React.ReactNode;
  
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
   * Direct href for simple breadcrumbs (alternative to items/children)
   */
  href?: string;
  
  /**
   * Direct text for simple breadcrumbs (alternative to items/children)
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
