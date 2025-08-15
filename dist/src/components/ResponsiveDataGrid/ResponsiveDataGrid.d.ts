/**
 * ResponsiveDataGrid Component with Hierarchical Keyboard Navigation
 *
 * ENHANCED ACCESSIBILITY FEATURES:
 *
 * Hierarchical Navigation Structure:
 * 1. TAB LEVEL: Navigate between tab buttons using arrow keys
 * 2. SORT-CONTROLS LEVEL: Navigate between sort controls using arrow keys
 * 3. CARD LEVEL: Navigate between cards using arrow keys
 * 4. CARD-INTERNAL LEVEL: Navigate within card elements using arrow keys
 *
 * Navigation Controls:
 * - Arrow keys: Navigate within current focus area
 * - Enter: When on card, select card and enter card-internal navigation mode
 *           When on sort controls, enter sort controls navigation mode
 * - Space: Toggle card selection (traditional behavior)
 *          Enter sort controls navigation mode
 * - Escape: Exit card-internal navigation, sort controls navigation, or clear selection
 * - Ctrl+Home/End: Jump between navigation levels
 *
 * Sort Controls Navigation:
 * - Automatically manages sort dropdown and clear button navigation
 * - Arrow keys move between sort controls
 * - Enter/Space activates the focused control or enters navigation mode
 * - Up arrow returns to tabs, Down arrow goes to cards
 * - Screen reader announcements for sort control changes
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
 * - Sort controls navigation mode: Focus outline on sort controls section
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
import './HealthcareCardTemplates.scss';
import '../Select/Select.scss';
import '../Button/Button.scss';
/**
 * Responsive Data Grid with mobile-first card layout - Now Generic with Plugin Support
 */
export declare const ResponsiveDataGrid: React.FC<ResponsiveDataGridProps>;
export default ResponsiveDataGrid;
