// NHS FDP Design System
// Main entry point for all components and utilities

// Font loading - Import fonts first
import './styles/fonts.css';

// Import utilities CSS for global utility classes
import './styles/utilities.scss';

// Re-export all components and types from components index
export * from './components';

// Design tokens (re-export)
export * from '../packages/nhs-fdp/dist/react/index';

// Typography utilities
export * from '../packages/nhs-fdp/dist/react/components/NHSTypography';

// Hooks
export * from '../packages/nhs-fdp/dist/react/hooks/useTokens';

// Font loading utilities
export * from './styles/font-config';
