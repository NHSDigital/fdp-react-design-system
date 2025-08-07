import React from 'react';
import './SkipLink.scss';
import { SkipLinkProps } from './SkipLink.types';
/**
 * SSR-compatible SkipLink component for bypassing navigation to main content
 *
 * IMPORTANT: This component should only be used at the page level,
 * typically as the first focusable element on a page. It should NOT
 * be included in individual UI components.
 *
 * Best practices:
 * - Place at the very top of your page layout
 * - Target the main content area (e.g., <main id="maincontent">)
 * - Only use one skip link per page in most cases
 * - Visually hidden by default, visible on focus
 *
 * SSR Compatibility:
 * - Works on server-side rendering (basic link functionality)
 * - Enhanced with focus management on client-side
 * - Progressive enhancement approach
 */
export declare const SkipLink: React.FC<SkipLinkProps>;
