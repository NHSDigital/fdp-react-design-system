import React from 'react';
import './Header.scss';
import './HeaderStatic.scss';
import { HeaderProps } from './Header.types';
/**
 * True SSR-Compatible Header Component
 *
 * This component provides:
 * 1. Zero React hooks - true SSR compatibility
 * 2. CSS-only responsive behavior
 * 3. Works without JavaScript
 * 4. No client-side state management
 * 5. Pure HTML/CSS navigation fallbacks
 *
 * SSR Strategy:
 * - Server: Renders complete functional header
 * - Client: No hydration needed, works immediately
 * - No-JS: Fully functional with CSS-only responsive behavior
 * - Performance: Zero JavaScript overhead
 */
export declare const HeaderStatic: React.FC<HeaderProps>;
export default HeaderStatic;
