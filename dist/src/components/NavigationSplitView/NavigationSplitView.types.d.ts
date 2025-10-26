import * as React from 'react';
/**
 * Navigation item type representing each selectable item in the split view.
 */
export interface NavigationSplitItem<ID = string> {
    /** Unique identifier for the item */
    id: ID;
    /** Primary label displayed in the list/cards */
    label: string;
    /** Optional description or secondary text */
    description?: string;
    /** Optional icon (React node so we can pass existing icon components) */
    icon?: React.ReactNode;
    /** Optional status / badge value (e.g. count, status) */
    badge?: React.ReactNode | number | string;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Optional arbitrary payload */
    data?: any;
}
/**
 * Layout modes across breakpoints
 * - mobile: list (default) or cards
 * - tablet: two-column (nav + content) or hybrid cards+detail
 * - desktop: two or three column
 */
export type NavigationSplitLayoutMode = 'list' | 'cards' | 'two-column' | 'three-column';
/**
 * Breakpoint driven layout configuration.
 * Provide explicit layout mode per breakpoint; if omitted will infer mobile-first then enhance.
 */
export interface NavigationSplitLayoutConfig {
    /** Layout at < medium breakpoint (mobile) */
    mobile?: 'list' | 'cards';
    /** Layout at >= medium and < xlarge (tablet) */
    tablet?: 'two-column' | 'list' | 'cards';
    /** Layout at >= xlarge (desktop) */
    desktop?: 'two-column' | 'three-column';
}
/**
 * Accessibility labels configuration.
 */
export interface NavigationSplitA11yLabels {
    rootLabel?: string;
    navigationLabel?: string;
    contentLabel?: string;
    secondaryContentLabel?: string;
    loadingLabel?: string;
    emptyStateLabel?: string;
}
export interface NavigationSplitViewProps<ID = string, T extends NavigationSplitItem<ID> = NavigationSplitItem<ID>> {
    /** List of navigation items */
    items: T[];
    /** Currently selected item id (controlled) */
    selectedId?: ID;
    /** Default selected id (uncontrolled) */
    defaultSelectedId?: ID;
    /** Callback when selection changes */
    onSelectionChange?: (id: ID, item: T) => void;
    /** Render function for list / card item body (besides label) */
    renderItemContent?: (item: T) => React.ReactNode;
    /** Render function for main content pane */
    renderContent: (item: T | undefined) => React.ReactNode;
    /** Optional secondary pane (third column) renderer - only used in three-column layout */
    renderSecondaryContent?: (item: T | undefined) => React.ReactNode;
    /** Layout configuration (mobile-first) */
    layout?: NavigationSplitLayoutConfig;
    /** Force a specific layout mode (overrides breakpoint logic) */
    forceLayout?: NavigationSplitLayoutMode;
    /** Enable animated slide transitions on mobile */
    animated?: boolean;
    /** Show back button label override (mobile detail view) */
    backLabel?: string;
    /** Label for forward/next action to reveal tertiary (secondary) pane when available */
    nextLabel?: string;
    /** Optional loading state */
    isLoading?: boolean;
    /** Show an empty state when no items */
    emptyState?: React.ReactNode;
    /** Accessibility labels */
    a11y?: NavigationSplitA11yLabels;
    /** Additional class name */
    className?: string;
    /** Custom get id function if item shape differs */
    getId?: (item: T) => ID;
    /** Custom key navigation (vertical by default) */
    orientation?: 'vertical' | 'horizontal';
    /** Disable focus ring when using pointer */
    disableFocusRing?: boolean;
    /** Optional aria-describedby id */
    ariaDescribedBy?: string;
    /** Optional max items before enabling virtual scroll (future) */
    virtualizeThreshold?: number;
    /** Auto-enable three-column layout at desktop breakpoint when secondary renderer provided */
    autoEnableThirdColumn?: boolean;
    /** Callback fired when drill (three-column) state changes */
    onDrillChange?: (drilledIn: boolean) => void;
    /** Provide instructions text for keyboard navigation (rendered visually hidden & referenced by aria-describedby on listbox) */
    navigationInstructions?: string;
    /** Control initial focus behaviour */
    initialFocus?: 'first' | 'none';
    /** Skip automatic focus shift to content pane on selection */
    skipFocusOnSelect?: boolean;
    /** Sync selection & drill state to URL query parameters */
    syncUrl?: boolean;
    /** Custom query param name for selection when syncUrl enabled */
    urlParamSelected?: string;
    /** Custom query param name for drill state when syncUrl enabled */
    urlParamDrill?: string;
    /** Suppress aria-live announcements (consumer will handle) */
    skipAnnouncements?: boolean;
    /** Callback when keyboard focus (roving) changes within navigation */
    onFocusChange?: (id: ID | undefined, item: T | undefined, index: number) => void;
    /** Debounce (ms) for syncing URL (0 = immediate) */
    urlSyncDebounceMs?: number;
    /** Lazily mount secondary pane only after first activation */
    lazySecondary?: boolean;
    /** Render node fixed to bottom of navigation pane */
    navFooter?: React.ReactNode;
    /** Enable collapsible navigation pane on >= medium layouts */
    collapsibleNav?: boolean;
    /** Initial collapsed state of nav (>= medium) */
    navInitiallyCollapsed?: boolean;
    /** Callback when nav collapsed state changes */
    onNavCollapseChange?: (collapsed: boolean) => void;
    /** Label for button when nav is collapsed (to show it) */
    collapseToggleLabelShow?: string;
    /** Label for button when nav is expanded (to hide it) */
    collapseToggleLabelHide?: string;
    /** Optional custom icon (React node) shown when nav is collapsed (represents action: expand/show) */
    collapseToggleIconShow?: React.ReactNode;
    /** Optional custom icon (React node) shown when nav is expanded (represents action: collapse/hide) */
    collapseToggleIconHide?: React.ReactNode;
    /** Persist navigation collapsed state. Choose storage medium(s). */
    persistNavCollapsed?: 'localStorage' | 'url' | 'both';
    /** Storage key used when persistNavCollapsed includes localStorage (default: 'nsvCollapsed'). */
    navCollapsedStorageKey?: string;
    /** URL query param used when persistNavCollapsed includes url (default: 'nsvCollapsed'). Value '1'/'0'. */
    navCollapsedUrlParam?: string;
    /**
     * Control automatic rendering of a header (selected item label) at the top of the content pane.
     *
     * Behaviour by default (when omitted): a header with a BackLink + selected item label is rendered ONLY in the mobile detail view (list/cards when an item is selected).
     * Set to `true` to render a heading for the selected item across all breakpoints (mobile, tablet and desktop). The BackLink only appears in the mobile detail state.
     * Provide an object for granular control: `{ mobile?: boolean; tablet?: boolean; desktop?: boolean }`.
     * - `mobile` (default: true) controls the mobile detail header (disabling removes the BackLink – ensure you provide an alternative way to navigate back).
     * - `tablet` (default: false) controls a title bar in two‑column layouts (>= medium & < xlarge).
     * - `desktop` (default: false) controls a title bar in three‑column desktop layouts (>= xlarge) or forced two‑column desktop layout.
     *
     * NOTE: Hiding the mobile header will also hide the BackLink which may reduce discoverability of the navigation affordance – prefer keeping it enabled.
     */
    autoContentHeader?: boolean | {
        mobile?: boolean;
        tablet?: boolean;
        desktop?: boolean;
    };
    /**
     * Heading level (1-6) used for the automatically injected content header title (default: 2).
     * Ignored if `renderContentHeader` provides a custom header. Always ensure heading hierarchy is logical within the surrounding page.
     */
    contentHeaderLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Optional subheader displayed beneath the automatic heading in the content pane header.
     * Can be a static ReactNode or a function receiving the selected item.
     * Ignored when a custom `renderContentHeader` is supplied (you are responsible for rendering it there).
     */
    contentSubheader?: React.ReactNode | ((item: T) => React.ReactNode);
    /**
     * Optional subheader for the tertiary (secondary) pane. When provided and the tertiary pane is visible (three‑column layout)
     * a slim header bar will be rendered at the top of the secondary pane containing this node.
     * In inline tertiary mode (mobile/tablet forward drill) this is NOT rendered separately – you can merge tertiary context
     * within the main `contentSubheader` if needed.
     */
    secondarySubheader?: React.ReactNode | ((item: T) => React.ReactNode);
    /**
     * Full render override for the content header bar. Only invoked when a header would normally render (i.e. selection present & enabled by `autoContentHeader`).
     * Receives contextual helpers so you can decide what to output.
     */
    renderContentHeader?: (args: {
        item: T;
        detailActive: boolean;
        context: 'mobile' | 'tablet' | 'desktop';
        backLink?: React.ReactNode;
        defaultHeading: React.ReactNode;
    }) => React.ReactNode;
}
