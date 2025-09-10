# SlotMatrix Subcomponents (Planned)

This document outlines the planned internal / companion components that will evolve from the initial scaffold. They are not yet implemented.

| Component | Layer | Responsibility | Notes |
| --------- | ----- | -------------- | ----- |
| SlotMatrixToolbar | Container | Hosts filters, date navigation, density & a11y toggles | Reusable with external state injection |
| DateNavigator | Toolbar | Move date range (prev/next/jump) | Keyboard accessible buttons / menu |
| SlotFilterBar | Toolbar | Filter chips and advanced filter popover | Emits structured filter object |
| LegendBar | Toolbar | Visual explanation of statuses / thresholds | Token-driven color squares and text |
| VirtualGridFrame | Grid infra | Windowing and overscan management | Possibly built on react-virtualized like primitive (custom) |
| TimebandHeaderRow | Grid structure | Renders timeband labels & sticky behavior | Accepts interval and locale |
| SessionHeaderCell | Grid structure | Display session meta (specialty, consultant, site) | Tooltip for overflow |
| SlotCell | Cell | Base slot status, remaining capacity, selection state | Stateless; receives callbacks |
| CapacityBar | Cell decoration | Visual capacity remaining indicator | Horizontal bar or sparkline |
| OverbookBadge | Cell decoration | Indicates overbook & policy tooltip | aria-describedby linking to explanation |
| ConflictBadge | Cell decoration | Highlights conflicts (room/equipment overlap) | Click to open resolution panel |
| SlotTooltip | Interaction | Rich details on focus/hover | Portalled, accessible description |
| SelectionOutline | Interaction | Visual multi-selection box (contiguous mode) | Drawn via absolute overlay |
| MultiSelectionMarquee | Interaction | Drag to select contiguous slots | Supports keyboard extension too |
| LiveUpdateIndicator | Interaction | Pulsing marker for recently changed slot | Timeout fade-out |
| SlotListView | Alternative | Accessible list representation | Parallel semantics to grid |
| useSlotSelection | Hook | Centralised selection logic (single/multi/contiguous) | Returns API for toggling & range ops |
| useKeyboardGridNav | Hook | Arrow, page, home/end navigation | Focus roving with aria-activedescendant (future) |
| useLiveAnnouncements | Hook | SR announcements for changes | Aggregates updates politely |
| useVirtualGridMetrics | Hook | Calculates visible windows & cell measurements | IntersectionObserver fallback |
| SlotMatrixA11yDocs | Docs | Storybook MDX describing patterns | References WCAG and NHS guidelines |

Additional future composites:

- SlotMatrixWithFilters (composition example exporting toolbar and grid)
- SlotMatrixSkeleton (loading shimmer layout)
- SlotMatrixErrorBoundary (contextual error state)

Iteration Phases:

1. Baseline ARIA grid & selection (this scaffold)
2. Toolbar and filters and custom labels
3. Virtualisation and performance instrumentation
4. Multi / contiguous selection and marquee
5. Live updates and announcement buffer
6. Overbooking and conflict indicators
7. Alternative list view parity and a11y audit
8. Theming & token integration and density modes
9. Comprehensive tests (SSR, hydration, a11y)
