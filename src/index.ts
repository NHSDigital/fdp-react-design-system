// NHS FDP Design System
// Main entry point for all components and utilities

// Font loading - Import fonts first
import './styles/fonts.css';

// Components
export { Button } from './components/Button';
export type { NHSButtonProps, ButtonVariant, ButtonSize } from './components/Button';

// Theme Provider and hooks - Use our enhanced theme provider
export { 
  NHSThemeProvider, 
  useNHSTheme 
} from './components/NHSThemeProvider';

export type { 
  NHSTheme, 
  NHSHeadingStyle, 
  NHSParagraphStyle,
  ResponsiveProperty 
} from '../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';

// Design tokens (re-export)
export * from '../packages/nhs-fdp/dist/react/index';

// Typography utilities
export * from '../packages/nhs-fdp/dist/react/components/NHSTypography';

// Hooks
export * from '../packages/nhs-fdp/dist/react/hooks/useTokens';

// Font loading utilities
export * from './styles/font-config';
