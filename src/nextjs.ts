/**
 * NHS FDP Design System - Next.js Entry Point
 * 
 * @deprecated This entry point is deprecated and will be removed in a future version.
 * 
 * Migration guide:
 * 
 * 1. For URL sync hooks, use the framework-agnostic version:
 *    ```ts
 *    import { useNavigationSplitUrlSync } from '@nhsdigital/fdp-design-system';
 *    ```
 *    Or create your own Next.js-specific wrapper (see useNavigationSplitNextUrlSync.ts for example).
 * 
 * 2. For behaviour initialization, create your own client component:
 *    ```tsx
 *    // app/components/BehavioursInit.tsx
 *    "use client";
 *    import { useEffect } from "react";
 *    
 *    export function BehavioursInit() {
 *      useEffect(() => {
 *        import("@nhsdigital/fdp-design-system/behaviours").then(({ initAll }) => {
 *          if (typeof initAll === "function") initAll(document);
 *        });
 *      }, []);
 *      return null;
 *    }
 *    ```
 * 
 * 3. For core components and styles, import from the main entry:
 *    ```ts
 *    import { Button, Card } from '@nhsdigital/fdp-design-system';
 *    import '@nhsdigital/fdp-design-system/css';
 *    ```
 */

// Core styles (load in layout.tsx)
// Align path with core.ts which imports from styles folder
import './styles/core.scss';

// Re-export core components for convenience
export * from './core';

// Next.js-specific hooks (deprecated - use useNavigationSplitUrlSync from main entry)
/** @deprecated Use useNavigationSplitUrlSync from main entry instead */
export { useNavigationSplitNextUrlSync } from './nextjs/useNavigationSplitNextUrlSync';

// Next.js-specific behaviour initialization (deprecated - create your own)
/** @deprecated Create your own BehavioursInit component in your app */
export { InitBehaviours, InitBehavioursInline } from './nextjs/InitBehaviours';
/** @deprecated Create your own BehavioursInit component in your app */
export { NHSBehavioursInit } from './nextjs/NHSBehavioursInit';
