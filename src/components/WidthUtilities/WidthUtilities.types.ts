export interface WidthUtilitiesProps {
  /**
   * Enable debug mode to visualize width utilities
   */
  debug?: boolean;
  /**
   * Custom class name for the wrapper
   */
  className?: string;
  /**
   * Children to render inside the width utilities container
   */
  children?: React.ReactNode;
}

export type WidthFraction = 'full' | 'three-quarters' | 'two-thirds' | 'one-half' | 'one-third' | 'one-quarter';

export interface WidthUtilityClassNames {
  // Static width utilities
  width: Record<WidthFraction, string>;
  
  // Responsive width utilities (tablet and above)
  widthTablet: Record<WidthFraction, string>;
}
