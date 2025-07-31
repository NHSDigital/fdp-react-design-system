export interface SkipLinkProps {
  /**
   * The text to display in the skip link
   * @default "Skip to main content"
   */
  text?: string;
  
  /**
   * The href target for the skip link
   * @default "#maincontent"
   */
  href?: string;
  
  /**
   * Additional CSS class names
   */
  classes?: string;
  
  /**
   * Additional HTML attributes
   */
  attributes?: Record<string, string>;
}
