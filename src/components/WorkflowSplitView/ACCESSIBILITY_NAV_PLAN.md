# WorkflowSplitView – Keyboard & ARIA Accessibility Plan

This document outlines the target ARIA semantics, keyboard interaction model, and test coverage for making WorkflowSplitView fully keyboard-navigable with a desktop grid pattern and mobile sliding pattern. It follows WAI-ARIA best practices and mirrors patterns used by react-aria grid, without adding dependencies.

## Target semantics (desktop/tablet grid)

- Shell: role="grid", aria-rowcount=1, aria-colcount={paneCount}, aria-label="Workflow layout"
- Row: role="row"
- Each pane container: role="gridcell", tabIndex=0
  - Primary nav gridcell: aria-label="Primary navigation"
  - Content gridcell: aria-labelledby={headingId in content}
  - Secondary gridcell: aria-label="Secondary navigation" or labelledby

## Primary nav (inside nav gridcell)

- role="listbox" on UL; aria-activedescendant points to currently focused option id
- LI/option: role="option"; aria-selected for current step; aria-current="step" for current
- Roving focus via aria-activedescendant and per-item tabIndex=-1 (or button focus fallback)
- Typeahead: first-letter/multi-letter, cyclic, timeout ~600ms

## Focus model & key bindings

- Modes: "containers" | "nav" | "content" | "secondary"
- Roving container focus (when a gridcell itself is focused):
  - ArrowLeft/Right: move focus across gridcells
  - Home/End: jump to first/last gridcell
  - Enter/Space: "enter" the container (switch mode and focus first tabbable inside)
- Escape (hierarchy ascent):
  - Inside pane → focus its container and set mode="containers"
  - On container → normalize mode to "containers" (keep focus)
- Cross-container from inside panes:
  - From nav → ArrowRight to content
  - From content → ArrowLeft to nav; ArrowRight to secondary (if present)
- Editable fields guard: do not intercept Arrow/Home/End inside inputs, textareas, selects, contenteditable, role="textbox|searchbox|combobox"

## Initial focus policy

- Desktop:
  - With preselected step: start in nav; focus current option
  - Otherwise: start in containers; focus first gridcell
- Non-desktop: start in nav

## Mobile/tablet sliding pattern

- No grid roles; Back/Next, Tab order to controls
- ArrowLeft/Right may optionally slide; Tab reaches Back/Next
- Breadcrumbs: hidden on mobile, visible on tablet

## Edge cases

- No steps; secondary absent; dynamic steps; SSR; hydration; editable fields in content

## Tests to implement

- Desktop client tests: container roving, nav listbox, cross-container arrows, Escape ascent, editable guard, initial focus
- Mobile client tests: next/back click and keyboard, breadcrumb visibility
- SSR tests: render without errors; custom breadcrumbs SSR output
- Hydration tests: after hydration, keys function as expected

