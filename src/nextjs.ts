// NHS FDP Design System - Next.js Style Loader
// Optimised CSS loading for Next.js applications

// Core styles (load in layout.tsx)
// Align path with core.ts which imports from styles folder
import './styles/core.scss';

// Re-export core components for convenience
export * from './core';

// Next.js-specific hooks (sourced from dedicated nextjs folder)
export { useNavigationSplitNextUrlSync } from './nextjs/useNavigationSplitNextUrlSync';

// Next.js-specific behaviour initialization (no "use client" required)
export { InitBehaviours, InitBehavioursInline } from './nextjs/InitBehaviours';
