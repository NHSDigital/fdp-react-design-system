// NHS FDP Design System - Next.js Style Loader
// Optimized CSS loading for Next.js applications

// Core styles (load in layout.tsx)
// Align path with core.ts which imports from styles folder
import './styles/core.scss';

// Re-export core components for convenience
export * from './core';

// Next.js-specific hooks (safe to tree-shake for non-Next apps)
export { useNavigationSplitNextUrlSync } from './hooks/useNavigationSplitNextUrlSync';
