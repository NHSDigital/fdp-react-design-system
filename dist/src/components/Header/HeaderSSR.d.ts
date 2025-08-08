import React from 'react';
import { HeaderProps } from './Header.types';
/**
 * True SSR-Compatible Header Component
 *
 * This component provides:
 * 1. Full SSR compatibility - no browser APIs called during render
 * 2. Zero React hooks - works in Next.js App Router and other SSR environments
 * 3. Progressive enhancement - basic functionality without JavaScript
 * 4. Enhanced responsive behavior when JavaScript is available via data attributes
 * 5. Graceful fallback for all navigation items
 *
 * SSR Strategy:
 * - Server: Renders all navigation items in a simple layout
 * - Client: Can be enhanced with external JavaScript for responsive behavior
 * - No-JS: Fully functional navigation without JavaScript
 *
 * IMPORTANT: This component uses NO React hooks and NO client-side APIs
 * to ensure full compatibility with Next.js App Router and other SSR environments.
 */
export declare const HeaderSSR: React.FC<HeaderProps>;
export default HeaderSSR;
