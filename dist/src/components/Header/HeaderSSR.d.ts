import React from 'react';
import './Header.scss';
import './Header.ssr.scss';
import { HeaderProps } from './Header.types';
/**
 * SSR-Compatible Header Component with Progressive Enhancement
 *
 * This component provides:
 * 1. Full SSR compatibility - no browser APIs called during render
 * 2. Progressive enhancement - basic functionality without JavaScript
 * 3. Enhanced responsive behavior when JavaScript is available
 * 4. Graceful fallback for all navigation items
 *
 * SSR Strategy:
 * - Server: Renders all navigation items in a simple layout
 * - Client: Enhances with responsive overflow handling and dropdowns
 * - No-JS: Fully functional navigation without JavaScript
 */
export declare const HeaderSSR: React.FC<HeaderProps>;
export default HeaderSSR;
