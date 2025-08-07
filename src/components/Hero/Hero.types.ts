import { ReactNode } from 'react';

/**
 * Props for the Hero component
 */
export interface HeroProps {
  /** The main heading text to display */
  heading?: string;
  
  /** The heading level (1-6), defaults to 1 */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Additional CSS classes for the heading element */
  headingClasses?: string;
  
  /** Plain text content to display below the heading */
  text?: string;
  
  /** HTML content to display below the heading (use with caution) */
  html?: string;
  
  /** Background image URL for hero with image variant */
  imageURL?: string;
  
  /** Additional CSS classes for the container element */
  containerClasses?: string;
  
  /** Additional CSS classes for the hero section element */
  classes?: string;
  
  /** React children to render as content (takes precedence over text/html) */
  children?: ReactNode;
  
  /** Additional HTML attributes to apply to the hero section */
  [key: string]: any;
}
