# SlotMatrix Stories & Specification

This document elaborates the SlotMatrix component story coverage, data mocks, accessibility considerations, and supporting sub‑components required to deliver a robust appointment slot discovery UI for clinical scheduling.

---

## 1. Problem Summary

Users (booking clerks, validators, service managers) need to rapidly locate and allocate viable appointment slots across sessions (clinics) while balancing capacity, constraints (room/equipment), priorities, and overbooking limits. The SlotMatrix is a high‑density, interactive, time‑oriented grid representation optimised for scanning and keyboard selection.

---

## 2. Primary Use Cases

1. Single specialty, single day slot selection.
2. Multi‑day horizontal scroll (week view) to find earliest capacity.
3. Filtering by site / consultant / modality / room type.
4. Identifying and selecting multiple linked slots (e.g. pre‑op + imaging same day).
5. Handling partial / overbooked sessions & highlighting low remaining capacity.
6. Real‑time capacity updates (slots held or booked by others).
7. Rebooking after cancellation with suggested alternatives.
8. Managing and surfacing slot constraints (equipment, room attributes).
9. Accessibility alternative (list view) when dense matrix is not optimal for assistive tech.

---

## 3. Data Model (Working Draft)

```ts
export interface Slot {
  id: string;
  sessionId: string;
  start: string;      // ISO 8601
  end: string;        // ISO 8601
  capacity: number;   // planned capacity for slot (e.g. 1)
  booked: number;     // current bookings count
  held?: number;      // temporary holds
  overbook?: number;  // number over nominal capacity
  status: 'available' | 'full' | 'overbook' | 'held' | 'blocked';
  priorityTags?: string[]; // e.g. ['urgent']
  equipmentTags?: string[]; // e.g. ['ultrasound']
  roomId?: string;
  flags?: string[]; // arbitrary domain flags
}

export interface Session {
  id: string;
  specialty: string;
  consultant?: string;
  site?: string;
  roomId?: string;
  start: string; // date-time
  end: string;   // date-time
  maxOverbook?: number;
  attributes?: string[]; // e.g. ['paeds']
}
```

Derived metrics displayed per slot: remaining = capacity - booked - (held||0).

---

## 4. Component Composition

| Layer | Purpose | Example Sub-Components |
| ----- | ------- | ---------------------- |
| Container | Data orchestration & virtualization windowing | SlotMatrix (root), VirtualGridFrame |
| Header | Context controls | DateNavigator, FilterBar, DensityToggle, LegendBar |
| Grid Structure | Layout columns (sessions) & rows (timebands) | TimebandHeaderRow, SessionHeaderCell, SessionDivider |
| Cell | Visual & interactive unit | SlotCell, SlotCellContent, CapacityBar, OverbookBadge, ConflictBadge |
| Interaction | Selection & feedback | SelectionOutline, MultiSelectionMarquee, SlotTooltip, LiveUpdateIndicator |
| Status & Meta | Non-interactive info layers | LoadingOverlay, EmptyStatePanel, ErrorBanner |
| Alternative View | Accessible simplified mode | SlotListView (ARIA list) |
| Utility | Shared logic | useSlotSelection, useKeyboardGridNav, useLiveAnnouncements |

---

## 5. Proposed Props (Draft)

```ts
interface SlotMatrixProps {
  slots: Slot[];
  sessions: Session[];
  dateRange: { start: Date; end: Date };
  timebandIntervalMinutes?: number; // default 30
  selectionMode?: 'single' | 'multi' | 'contiguous';
  value?: string[];            // selected slot ids (controlled)
  defaultValue?: string[];     // uncontrolled initial
  onChange?: (slotIds: string[], meta: { lastAction: string }) => void;
  filters?: Record<string, string | string[]>; // site, specialty, consultant
  onFiltersChange?: (next: Record<string, any>) => void;
  loading?: boolean;
  density?: 'comfortable' | 'compact';
  showOverbook?: boolean;
  highlightThresholds?: { lowRemaining?: number };
  getSlotAriaLabel?: (slot: Slot) => string;
  renderSlotTooltip?: (slot: Slot) => React.ReactNode;
  onNavigateDateRange?: (next: { start: Date; end: Date }) => void;
  liveUpdates?: { enabled: boolean; lastUpdated?: Date };
  a11yMode?: 'grid' | 'list';
}
```

---

## 6. Story Coverage Matrix

| Story ID | Variant Name | Purpose / Scenario | Key Props / State | Notes |
| -------- | ------------ | ------------------ | ----------------- | ----- |
| SM-01 | SingleDayBasic | Basic day view single specialty | default props | Baseline regression |
| SM-02 | WeekScrollable | Horizontal multi-day scroll | extended dateRange | Show sticky time column |
| SM-03 | WithFilters | Interactive filter bar | filters, onFiltersChange | Controls in toolbar |
| SM-04 | LowCapacityHighlight | Threshold highlight (<=1 remaining) | highlightThresholds | Red / warning token + aria label |
| SM-05 | OverbookingEnabled | Display overbooked slots | showOverbook | OverbookBadge + tooltip rationale |
| SM-06 | MultiSelectLinked | Selecting multiple linked slots | selectionMode='multi' | Selection summary bar |
| SM-07 | ContiguousSelection | Drag to select contiguous band | selectionMode='contiguous' | Marquee |
| SM-08 | LiveUpdating | Simulated live capacity updates | liveUpdates.enabled | Announce changes |
| SM-09 | HighDensityVirtualised | 1000+ slots performance | density='compact' | VirtualGridFrame instrumentation |
| SM-10 | A11yListMode | Alternate list representation | a11yMode='list' | SR friendly ordering |
| SM-11 | ErrorState | Show data retrieval error | error injection | ErrorBanner |
| SM-12 | LoadingSkeleton | Loading placeholder | loading | Skeleton shimmer cells |
| SM-13 | EmptyState | No slots after filter | filters applied | EmptyStatePanel messaging |
| SM-14 | WithCustomTooltip | Rich slot tooltip | renderSlotTooltip | Include consultant + equipment |

---

## 7. Data Mock Strategy

Utility generator ensures reproducibility for stories.

```ts
interface GenerateSlotsOptions {
  date: Date; days?: number; sessionsPerDay?: number; slotIntervalMins?: number; slotsPerSession?: number;
  overbookProbability?: number; holdProbability?: number;
}

function generateMockSessions(opts: GenerateSlotsOptions): Session[] { /* deterministic seed + specialty rotation */ }
function generateMockSlots(sessions: Session[], opts: GenerateSlotsOptions): Slot[] { /* derive slots per session, random fill */ }
```

Deterministic seeding (e.g. mulberry32) avoids visual churn in Chromatic.

---

## 8. Accessibility Notes

| Concern | Approach | Implementation Detail |
| ------- | -------- | --------------------- |
| Screen Reader Structure | ARIA grid with rows=timebands, columns=sessions | role="grid", row/col indexing consistent; cells focusable |
| Alternative for Dense Grid | Provide list mode | a11yMode prop toggles semantic list structure grouped by date/time |
| Focus Management | Arrow key navigation | useKeyboardGridNav hook handles wrapping & page jump |
| Live Updates | Polite announcements of changed slots | useLiveAnnouncements: aria-live region summarising changes (e.g. "Slot 09:30 Dr Smith now full") |
| Color Independence | Non-color cues for capacity | Text badges (Full, 1 left), patterns or icons for overbook |
| Hit Target Size | Minimum 44x44 CSS pixels | Compact mode still respects minimum interactive area |
| Overbooking & Warnings | Clear semantics + explanation | aria-describedby linking to tooltip content id |
| Time Formats | Localised, 24h preference toggle | Provide accessible formatting with date-fns/Intl |
| Selection Feedback | SR announcement of count | Live region: "3 slots selected" on change |
| Keyboard Multi-Select | Space toggles slot, Shift+Arrow extends selection | Documented in Storybook notes |

## 9. Performance & Virtualisation

- Windowing: Only render visible timebands × sessions subset.
- Memoisation: group slots by (sessionId + timebandKey).
- Off-thread precomputation (Web Worker optional) for large datasets.
- Avoid layout thrash: precompute cell heights; CSS grid or virtualised absolute positioning.
- Batched live updates: aggregate changes per animation frame.

## 10. Theming & Tokens

| Semantic Need | Token Category Suggestion |
| ------------- | ------------------------ |
| Available capacity background | slot.available.bg |
| Low capacity warning | slot.low.bg / slot.low.text |
| Full capacity state | slot.full.bg / slot.full.text |
| Overbook indicator | slot.overbook.badge.bg |
| Held slot | slot.held.border |
| Selection outline | slot.selected.outline |
| Focus ring | focus.ring.slot |
| Grid divider lines | grid.divider.muted |

## 11. Telemetry Events (Initial)

| Event | Properties |
| ----- | ---------- |
| slot_matrix.render | slotCount, sessionCount, ms |
| slot_matrix.filter_applied | filtersHash, resultCount |
| slot_matrix.slot_selected | slotId, multi (bool) |
| slot_matrix.selection_cleared | count |
| slot_matrix.live_update_applied | changedSlots |
| slot_matrix.overbook_slot_viewed | slotId |

## 12. Open Questions

1. Should contiguous selection auto-hold slots (temporary reservation)? (Likely separate service step.)
2. Does overbooking require explicit confirmation dialog always or context-based? (Risk-based rule engine.)
3. Provide integrated conflict resolution inline vs launching external wizard? (Lean inline first.)
4. Maximum practical sessions per horizontal viewport before switching to list mode? (Empirical testing.)

## 13. Initial Storybook Implementation Checklist

- [ ] Create SlotMatrix root component + types.
- [ ] Implement deterministic mock generator.
- [ ] Story SM-01 through SM-05 (foundational set).
- [ ] Add a11y notes (docs page) referencing keyboard map & live updates.
- [ ] Add Chromatic parameters: disable snapshot for live update story (flaky risk) and use dynamic controls for filters.
- [ ] Performance test (render time) instrumentation console log behind feature flag.

---
*Document version 0.1 (draft).*
