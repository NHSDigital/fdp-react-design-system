# Step by Step Navigation

A guided, ordered list of steps to help users complete a multi-step process. Inspired by GOV.UK’s Step by step navigation pattern, adapted and branded for the NHS FDP Design System.

This document is the source of truth for the component’s goals, UX spec, API, accessibility, tokens, tests, and reference examples. We’ll iterate here and then implement in `src/components/StepByStepNavigation/`.

## Design goals

- Clear, ordered guidance: help users understand where they are, what’s next, and how to complete a task.
- Consistent NHS FDP look-and-feel using design tokens and existing primitives (Typography, Link, Tag, Icon, Focus, Spacing).
- Two layouts: a sidebar-friendly variant and a full-width variant for the start of a journey.
- Progressive disclosure: allow collapsing/expanding details of each step without losing context.
- Accessible by default: semantic structure, keyboard support, screen reader clarity, and robust SSR/hydration.
- Flexible content: short and long titles, optional descriptions, sub-steps, status (not started, in progress, completed, cannot start yet).
- Works with client routing (custom Link rendering) and supports analytics hooks.

## User needs and scenarios

- As a user starting a service journey, I can scan the full sequence and the time it might take, then jump to a step.
- As a user midway through, I can see my current step, completed steps, and what remains.
- As a returning user, I can resume at my last step and quickly collapse others for focus.
- As a screen reader user, I get a clear ordered structure, step counts, and unambiguous state announcements.

## Variants and layouts

### Sidebar variant

- Narrow column layout suitable for secondary rail/aside placement.
- Collapsible steps are stacked, compact spacing.
- Typically persistent across pages as users progress.

### Full-width variant

- Prominent at the start of a journey page.
- Optional hero-style heading/summary above the steps.
- Generous spacing/typography; optionally show All/Hide All controls.

Both variants share the same core API and styling tokens; differences are layout modifiers.

## Anatomy and content model

- Container: `nav` landmark (or `aside` for sidebar), labelled (e.g., “Step by step”).
- Ordered list: `<ol>` for the primary sequence; optional nested `<ol>` for sub-steps.
- Step header: a heading (level configurable), including a toggle button if collapsible and/or a link to the step page.
- Step meta: status tag, optional duration, optional “optional” flag.
- Step content region: collapsible panel with description, sub-steps, links.

Recommended content fields per step:

- id (string, required, unique)
- title (string or ReactNode, required)
- description (optional, short paragraph)
- href (optional if the step is navigable)
- status: not-started | in-progress | completed | cannot-start-yet (optional)
- optional (boolean)
- duration (optional, string – e.g., “10 minutes”)
- items (optional array of sub-steps with same shape, excluding further nesting by default)
- meta (optional ReactNode for custom chips, etc.)

## Interaction and behavior

- Collapsible: each step can expand/collapse its content region.
- Controlled or uncontrolled expansion:
  - Uncontrolled: `defaultExpandedIds` controls initial state.
  - Controlled: `expandedIds` + `onToggle` for external state.
- Current step:
  - Highlighted visually using tokens.
  - Use `aria-current="step"` on the current step’s link or header button.
- Optional global controls (full-width variant): “Show all / Hide all”.
- Single-open mode (optional): enable `singleOpen` to allow only one step to be expanded at a time (accordion behavior). When enabled, global Show/Hide all controls are suppressed.
- Link behavior:
  - By default, render standard anchor; support custom router links via `renderLink` prop.
- Focus management:
  - Toggle keeps focus on the button.
  - Optional `autoFocusExpanded` moves focus to first focusable in the content region.
- Animations respect `prefers-reduced-motion`.

## Accessibility

- Landmark: `nav` (aria-label configurable) or `aside` when used contextually in a sidebar.
- Structure: `<ol>` with `<li>` for steps; nested `<ol>` for sub-steps.
- Headings: configurable `headingLevel` (e.g., h2/h3) to fit page hierarchy.
- Toggle button:
  - `aria-expanded` and `aria-controls` referencing the content region id.
  - The content region uses `role="region"` and `aria-labelledby` for the header/button id.
- Current item: `aria-current="step"` on the active step’s link or header.
- Keyboard:
  - Tab/Shift+Tab to move through interactive elements.
  - Enter/Space to expand/collapse via the header button.
  - Arrow-key navigation is not required; stick to standard list and button semantics.
- Announcements:
  - Ensure toggle state change is perceivable (native `aria-expanded` suffices).
- Contrast and focus:
  - Use NHS FDP tokens for high-contrast text and standard focus rings.

## Responsive behavior

- Mobile: full-width layout stacks; steps expand inline.
- Tablet/desktop: sidebar variant respects constrained width; full-width uses grid container.
- Long titles wrap; optional truncation with `truncateTitles` prop.

## Theming and tokens

Use NHS FDP tokens (via the `nhs.` namespace) for all styles:

- Typography: titles and body (e.g., `nhs.typography.sizes`, weights)
- Spacing: vertical rhythm and gutters (e.g., `nhs.spacing.2`, `nhs.spacing.4`)
- Colors: text, borders, background, status accents (e.g., `nhs.color.neutral.*`, `nhs.color.brand.primary`)
- Borders and radius: panel outlines and chips (e.g., `nhs.border.width.1`, `nhs.radius.md`)
- Focus ring: `nhs.focus.ring.*`
- Iconography: use existing Icon component for chevrons where available

Never hardcode colors or spacing; prefer tokens and existing component variables.

## API contract (TypeScript)

Proposed module: `src/components/StepByStepNavigation/StepByStepNavigation.tsx`

```ts
export type StepStatus = 'not-started' | 'in-progress' | 'completed' | 'cannot-start-yet';

export type StepItem = {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  status?: StepStatus;
  optional?: boolean;
  duration?: string;
  items?: StepItem[]; // Sub-steps (one level deep)
  meta?: React.ReactNode;
};

export type Variant = 'sidebar' | 'full-width';

export type StepByStepNavigationProps = {
  id?: string;
  className?: string;
  ariaLabel?: string; // Defaults to "Step by step"
  heading?: React.ReactNode; // Full-width variant only (optional)
  summary?: React.ReactNode; // Full-width variant only (optional)
  headingLevel?: 2 | 3 | 4; // Default 3
  variant?: Variant; // Default 'full-width'
  items: StepItem[];
  numbered?: boolean; // Default true
  collapsible?: boolean; // Default true
  singleOpen?: boolean; // When true, only one step can be expanded at once
  currentStepId?: string; // Highlights current step
  defaultExpandedIds?: string[]; // Uncontrolled initial state
  expandedIds?: string[]; // Controlled expanded state
  onToggle?: (id: string, expanded: boolean) => void;
  onStepClick?: (id: string, event: React.MouseEvent) => void;
  renderLink?: (props: { href: string; children: React.ReactNode; className?: string; 'aria-current'?: 'page' | 'step' | true }) => React.ReactNode;
  density?: 'comfortable' | 'compact';
  truncateTitles?: number; // Max lines before truncation
  showAllControls?: boolean; // Full-width only; default false
  autoFocusExpanded?: boolean; // Default false
  analyticsId?: string; // Adds data-analytics attributes
};
```

## Example usage

```tsx
<StepByStepNavigation
  ariaLabel="Apply for access: step by step"
  variant="full-width"
  heading="Apply for data access"
  summary="Follow these steps to complete your application."
  currentStepId="upload"
  items={[
    { id: 'start', title: 'Check you can apply', status: 'completed', href: '/apply/check' },
    { id: 'create', title: 'Create an account', status: 'completed', href: '/apply/create' },
    { id: 'upload', title: 'Upload documents', status: 'in-progress', description: 'Proof of identity and sponsor letter.', items: [
        { id: 'id', title: 'Upload proof of identity', href: '/apply/upload/id' },
        { id: 'sponsor', title: 'Upload sponsor letter', href: '/apply/upload/sponsor' }
      ]
    },
    { id: 'submit', title: 'Submit your application', href: '/apply/submit' }
  ]}
  showAllControls
/>
```

## CSS API and class naming

Base block: `.nhs-step-nav`

- Variant modifiers: `.nhs-step-nav--sidebar`, `.nhs-step-nav--full`
- Density modifiers: `.nhs-step-nav--compact`
- Elements:
  - `__list`, `__item`, `__header`, `__toggle`, `__title`, `__meta`, `__status`, `__duration`, `__content`, `__sublist`
- State modifiers: `&--current`, `&--expanded`, `&--completed`, `&--in-progress`, `&--not-started`, `&--cannot-start-yet`

SCSS should import tokens via the aggregated entry and reference them with the `nhs.` namespace.

## Events and analytics

- Toggle events: fire `onToggle(id, expanded)`; include `data-analytics="<analyticsId>:toggle"` on buttons if provided.
- Link clicks: fire `onStepClick(id, event)`; include `data-analytics="<analyticsId>:click"` on links.

## States to support

- Current step highlighted, optionally with `aria-current`.
- Completed/in-progress/not-started/cannot-start-yet visual tags (reuse Tag component styles/tokens where possible).
- Disabled state is not recommended for steps (prefer “cannot start yet” messaging); avoid rendering disabled links unless necessary.
- Loading state is out of scope for the static nav; consumers can show skeletons.

## Edge cases

- Very long titles or descriptions: wrap, and optionally truncate to N lines.
- Many steps (10+): performance and scroll; ensure keyboard/indexing remains usable.
- No `href`: step acts as a purely informational group with expandable content.
- Sub-steps without parent description.
- Current step id not in items: ignore gracefully.

## Dependencies and reuse

- Prefer existing primitives: `Link`, `Tag`, `Icon` (chevron), `VisuallyHidden` (if available), and typography utilities.
- No direct DOM access during render; guard any client-only logic.

## File structure (to be created in implementation)

- `src/components/StepByStepNavigation/StepByStepNavigation.tsx`
- `src/components/StepByStepNavigation/StepByStepNavigation.types.ts`
- `src/components/StepByStepNavigation/StepByStepNavigation.scss`
- `src/components/StepByStepNavigation/StepByStepNavigation.stories.tsx`
- `src/components/StepByStepNavigation/StepByStepNavigation.client.test.tsx`
- `src/components/StepByStepNavigation/StepByStepNavigation.ssr.test.tsx`
- `src/components/StepByStepNavigation/StepByStepNavigation.hydration.test.tsx`

## Storybook coverage

- Full-width: default, with summary, with Show/Hide all.
- Sidebar: default, compact density.
- Current step examples and all status variants.
- With/without sub-steps.
- Custom `renderLink` using Next.js `Link`.
- Accessibility story: keyboard and screen reader notes.

## Testing plan and acceptance criteria

Follow the project’s 3-tier testing approach.

### Client tests

- Renders ordered steps with provided titles and statuses.
- Expands/collapses steps; updates `aria-expanded` and content visibility.
- “Show all / Hide all” toggles all expanded states when enabled.
- Calls `onToggle` and `onStepClick` at the right times.
- `aria-current` is applied to current step.

### SSR tests

- Renders static markup without accessing `window`/`document`.
- Current step markup present and consistent.

### Hydration tests

- Hydrates without mismatch. Collapsed content is not rendered in the DOM until expanded to avoid SSR/CSR markup differences.
- Post-hydration expand/collapse works.

### Accessibility checks

- Landmarks, list semantics, headings levels.
- Keyboard operable.
- Focus visible; contrast via tokens.

## Performance

- Avoid unnecessary re-renders (memoize item rendering where appropriate).
- Keep DOM simple: one button per step when collapsible.
- Defer heavy content until expanded only if needed by consumers (out of scope for core component).

## SSR considerations

- No direct DOM/Window access.
- Deterministic ids derived from `id` props; avoid random ids on server.

## Open questions for iteration

- Do we need a global progress indicator (e.g., “3 of 6 completed”)?
- Should we allow multiple expansion modes: single-open vs multi-open?
- Do we need per-step secondary actions (e.g., “Change”)?
- How strictly should we limit nesting (one level vs arbitrary)?

## Next steps

1. Confirm this spec and resolve open questions.
2. Scaffold component files and stories.
3. Implement minimal vertical slice (render static list, current step highlighting, no collapse).
4. Add collapse behavior with a11y attributes and tokens.
5. Wire “Show all / Hide all”.
6. Add tests (client/SSR/hydration) and docs.
7. Validate in Storybook and run full build/tests.
