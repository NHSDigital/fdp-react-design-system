import { default as React } from '../../../node_modules/react';
import { SkipLinkProps } from './SkipLink.types';
/**
 * SkipLink component for bypassing navigation to main content
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
 */
export declare const SkipLink: React.FC<SkipLinkProps>;
