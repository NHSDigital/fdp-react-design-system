// NHS FDP Design System - Core Only Entry Point
// This entry point only includes essential layout and utility components
// Individual component styles are imported by the components themselves

// Import core layout and utility styles only
import './styles/core.scss';

// Re-export ONLY core layout components (don't import all components)
export { Container, Row, Column, Grid } from './components/Grid';
export type { 
  ContainerProps, 
  RowProps, 
  ColumnProps, 
  GridProps
} from './components/Grid';
export { GridWidth, Breakpoint, Float } from './components/Grid';

export { MainWrapper } from './components/MainWrapper';
export type { MainWrapperProps } from './components/MainWrapper';

export { SpacingUtilities, getSpacingClass } from './components/SpacingUtilities';
export type { SpacingUtilitiesProps, SpacingUtilityClassNames } from './components/SpacingUtilities';

export { WidthUtilities, getWidthClass, WIDTH_FRACTIONS } from './components/WidthUtilities';
export type { WidthUtilitiesProps, WidthUtilityClassNames, WidthFraction } from './components/WidthUtilities';

export { SkipLink } from './components/SkipLink';
export type { SkipLinkProps } from './components/SkipLink';

// Note: Other components should be imported individually:
// import { Button } from '@fergusbisset/nhs-fdp-design-system/components/Button'
// This ensures their styles are only loaded when the component is actually used
