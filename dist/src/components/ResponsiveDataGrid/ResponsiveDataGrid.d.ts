/**
 * ResponsiveDataGrid Component with Hierarchical Keyboard Navigation
 *
 * ENHANCED ACCESSIBILITY FEATURES:
 *
 * Hierarchical Navigation Structure:
 * 1. TAB LEVEL: Navigate between tab buttons using arrow keys
 * 2. CARD LEVEL: Navigate between cards using arrow keys
 * 3. CARD-INTERNAL LEVEL: Navigate within card elements using arrow keys
 *
 * Navigation Controls:
 * - Arrow keys: Navigate within current focus area
 * - Enter: When on card, select card and enter card-internal navigation mode
 * - Space: Toggle card selection (traditional behavior)
 * - Escape: Exit card-internal navigation or clear selection
 * - Ctrl+Home/End: Jump between navigation levels
 *
 * Card-Internal Navigation:
 * - Automatically scans for focusable elements (buttons, links, inputs, etc.)
 * - Arrow keys move between internal elements
 * - Enter/Space activates the focused element
 * - Visual indicators show navigation mode and element hints
 * - Screen reader announcements for navigation state changes
 *
 * Visual Feedback:
 * - Selected cards: NHS blue border and shadow
 * - Focused cards: NHS yellow focus outline
 * - Card navigation mode: Dashed border with "Navigation Mode" badge
 * - Internal elements: Dotted borders with focus highlighting
 *
 * ARIA Compliance:
 * - Maintains full ARIA grid pattern with enhanced navigation
 * - aria-expanded indicates card navigation state
 * - Live regions announce navigation changes
 * - Comprehensive keyboard support following NHS design system
 */
import React from 'react';
import { ResponsiveDataGridProps } from './ResponsiveDataGridTypes';
import './ResponsiveDataGrid.scss';
/**
 * Responsive Data Grid with mobile-first card layout
 */
export declare const ResponsiveDataGrid: React.FC<ResponsiveDataGridProps>;
export default ResponsiveDataGrid;
