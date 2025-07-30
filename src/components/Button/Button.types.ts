/**
 * Button variant options following NHS design guidelines
 */
export type ButtonVariant = 
  | 'primary'      // Green button for main actions
  | 'secondary'    // Blue outlined button for secondary actions
  | 'reverse'      // White button for use on colored backgrounds
  | 'warning'      // Orange/red button for warning actions
  | 'login';       // Blue button for authentication

/**
 * Button size options
 */
export type ButtonSize = 
  | 'small'        // Compact button for tight spaces
  | 'default'      // Standard button size
  | 'large';       // Larger button for emphasis
