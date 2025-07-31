export interface FooterLinkItem {
  /**
   * The URL for the link
   */
  URL: string;
  
  /**
   * The text label for the link
   */
  label: string;
  
  /**
   * Whether the link opens in a new window
   */
  newWindow?: boolean;
}

export interface FooterProps {
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Links for the first column
   */
  links?: FooterLinkItem[];
  
  /**
   * Links for the second column (enables multi-column layout)
   */
  linksColumn2?: FooterLinkItem[];
  
  /**
   * Links for the third column
   */
  linksColumn3?: FooterLinkItem[];
  
  /**
   * Meta/policy links (displayed separately)
   */
  metaLinks?: FooterLinkItem[];
  
  /**
   * Copyright text
   * @default "© NHS England"
   */
  copyright?: string;
  
  /**
   * Additional CSS classes for the container
   */
  containerClasses?: string;
  
  /**
   * Additional HTML attributes
   */
  attributes?: Record<string, string>;
}
