# GOV.UK Design System Parity – Gap Analysis

Date: 2025-08-27  
Owner: Design System Team  
Source systems compared:

* GOV.UK Design System component list (`govuk-design-system/src/components/*`)
* NHS FDP Design System components (`nhs-fdp-design-system/src/components/*`)

## 1. Summary

Most GOV.UK baseline components already exist (often with enhanced variants). Eight areas lack a direct, named or fully-behavioural equivalent:

**Gaps (new work):** cookie-banner, notification-banner, phase-banner, file-upload, password-input, service-navigation, exit-this-page, accordion (group behaviour – if not already satisfied by `Expander`).

**Alias / minor mapping adjustments:** warning-text (→ `WarningCallout`), accordion (→ may wrap multiple `Expander` instances), text-input (→ `Input`).

## 2. Component Mapping

| GOV.UK Component | Status | Existing Equivalent / Notes |
|------------------|--------|------------------------------|
| accordion | Partial | Likely coverable by grouped `Expander`; add wrapper & open-all control if required |
| back-link | Done | `BackLink` |
| breadcrumbs | Done | `Breadcrumb` |
| button | Done | `Button` |
| character-count | Done | `CharacterCount` |
| checkboxes | Done | `Checkboxes` / `Checkbox` |
| cookie-banner | Missing | Implement `CookieBanner` (preferences, dismiss persistence) |
| date-input | Done | `DateInput` |
| details | Done | `Details` |
| error-message | Done | `ErrorMessage` |
| error-summary | Done | `ErrorSummary` |
| exit-this-page | Missing | Safety/rapid-exit control (keyboard shortcut + redirect) |
| fieldset | Done | `Fieldset` |
| file-upload | Missing | Styled file input with accessible focus, error, hint integration |
| footer | Done | `Footer` |
| header | Done | `Header` (+ `HeaderSearch`) |
| inset-text | Done | `InsetText` |
| notification-banner | Missing | Informational banner distinct from callouts; variants (success/info/warning) |
| pagination | Done | `Pagination` |
| panel | Done | `Panel` |
| password-input | Missing | Extend `Input` with show/hide toggle & a11y labelling |
| phase-banner | Missing | Simple banner with `Tag` (alpha/beta) + feedback link |
| radios | Done | `Radios` |
| select | Done | `Select` |
| service-navigation | Missing | Distinct service-level nav element; could extend header layout |
| skip-link | Done | `SkipLink` |
| summary-list | Done | `SummaryList` |
| table | Done | `Tables` + advanced: `SortableDataTable`, `ResponsiveDataGrid` |
| tabs | Done | `Tabs` |
| tag | Done | `Tag` |
| task-list | Done | `TaskList` |
| text-input | Done* | `Input` (document alias) |
| textarea | Done | `Textarea` |
| warning-text | Alias | `WarningCallout` (add alias or wrapper) |

## 3. Detailed Gap Descriptions & Acceptance Criteria

### 3.1 CookieBanner

**Purpose:** Consent / essential cookie messaging.  
**Acceptance:**

* ARIA role `region` or `dialog` (if focus trapping) with accessible label.
* Dismiss / accept actions persist (localStorage or supplied callback).
* Optional secondary link to cookie settings.
* Non-blocking layout variant.

### 3.2 NotificationBanner

**Purpose:** Inline status/information messages distinct from `Panel` & `WarningCallout`.  
**Variants:** info (default), success (role="status"), warning / important (role="alert").  
**Acceptance:** Distinct visual tokens, heading slot, dismissible optional, focus management when inserted.

### 3.3 PhaseBanner

**Purpose:** Display product phase (Alpha/Beta) + feedback link.  
**Acceptance:** Uses existing `Tag` tokens; accessible landmark or simple container with `aria-label` as necessary; responsive spacing.

### 3.4 FileUpload

**Purpose:** Accessible wrapper for `<input type="file">`.  
**Acceptance:**

* Supports multiple, single, accept filters.
* Drag & drop enhancement (progressive, not required for MVP).
* Error + hint integration (ties into `ErrorMessage` / `Hint` semantics via `aria-describedby`).
* Shows selected file list with remove buttons (keyboard operable).

### 3.5 PasswordInput

**Purpose:** Text field with show/hide toggle.  
**Acceptance:**

* Toggle is a `<button>` with `aria-pressed`.
* Preserves cursor & focus; no layout shift.
* Associates correctly with existing label & error messages.
* Option to expose strength meter (future / deferred).

### 3.6 ServiceNavigation

**Purpose:** Distinct navigation region for service-level links separate from global header.  
**Acceptance:** `<nav aria-label="Service navigation">` containing list of links; responsive collapse behaviour optional.

### 3.7 ExitThisPage

**Purpose:** Rapid conceal / redirect for user safety.  
**Acceptance (MVP):**

* Prominent button; configurable target URL (e.g. generic site) + optional blank tab.
* (Optional) Keyboard shortcut (e.g. Shift + Esc) – announce capability to screen readers.
* Minimal state storage; no tracking.
* Provide guidance note about ethical/legal implications.

### 3.8 Accordion (if required beyond Expander)

**Need:** Group management (Open all / Close all), correct heading semantics, single vs multi-expand policy.  
**Acceptance:**

* Wrapper orchestrates multiple `Expander` children.
* Optional open-all control with dynamic label update.
* Preserves individual item accessibility (button inside heading, `aria-expanded`).

## 4. Implementation Strategy & Sequencing

| Priority | Component | Rationale | Effort (est.) |
|----------|-----------|-----------|---------------|
| High | CookieBanner | Compliance & visibility | M |
| High | NotificationBanner | Common status pattern | S-M |
| High | PhaseBanner | Low effort, parity quick win | S |
| High | FileUpload | Core form functionality | M |
| Medium | PasswordInput | Security UX | S |
| Medium | Accordion | Might be wrapper only | S |
| Medium | ServiceNavigation | Structural nav clarity | M |
| Low | ExitThisPage | Policy review needed | M-L |

Alias quick wins (very low effort): `WarningText` re-export; `TextInput` alias for `Input` if desired.

## 5. Reuse & Architecture Notes

* **Banner variants** can share a base `<Banner>` with variant prop → tokens for colour & icon.
* **FileUpload** can leverage existing form control styling + error/hint pattern used by `Input`, `Textarea`.
* **PasswordInput** extends Input: internal state + toggle button appended (flex container pattern consistent with potential future adornments).
* **Accordion**: determine if a context provider + item composition around `Expander` is sufficient (avoid duplication).
* **ServiceNavigation**: evaluate existing `Header` slot APIs; may just need a documented pattern + wrapper.
* **ExitThisPage** demands content & security review; consider deferring until product/legal sign-off.

## 6. Token & Accessibility Considerations

* Introduce tokens for banner background / border / icon colours (info, success, warning) – align naming with any existing alert tokens.
* PhaseBanner likely reuses neutral background + subtle border; only Tag needs semantic variant (alpha/beta) already available or trivial to add.
* FileUpload requires focus ring + drag-over state tokens (e.g. `--file-upload-border-active`).
* Provide live region announcements for: NotificationBanner insertion (if role="alert"), PasswordInput visibility toggle (optional polite), ExitThisPage activation.

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Scope creep (advanced drag-drop for FileUpload) | Ship minimal accessible version first |
| ExitThisPage legal / policy ambiguity | Block behind feature flag until approved |
| Accordion duplication of Expander logic | Compose existing `Expander` via context |
| Banner variants inconsistent with existing styling | Define tokens before implementing components |

## 8. Definition of Done (per gap component)

1. Component directory with .tsx, .types.ts, .scss, stories, tests (client + SSR + hydration if applicable).  
2. A11y: keyboard + screen reader semantics verified (Storybook a11y + unit tests).  
3. Design tokens (if new) added & built.  
4. Added to `src/components/index.ts` & package exports if CSS required.  
5. Storybook docs include usage, a11y notes, GOV.UK parity reference.  
6. Added to parity checklist below.

## 9. Parity Checklist (Track Progress)

| Component | Status | PR / Notes |
|-----------|--------|------------|
| CookieBanner | TODO |  |
| NotificationBanner | TODO |  |
| PhaseBanner | TODO |  |
| FileUpload | TODO |  |
| PasswordInput | TODO |  |
| Accordion Wrapper | Evaluate | Confirm Expander sufficiency |
| ServiceNavigation | TODO |  |
| ExitThisPage | Deferred | Await policy review |
| WarningText alias | TODO | Re-export WarningCallout |
| TextInput alias | Optional | Decide if alias needed |

## 10. Next Actions

1. Confirm Expander capability for grouped accordion pattern (add open-all if missing).  
2. Draft CookieBanner + NotificationBanner + PhaseBanner (batch PR).  
3. Implement FileUpload + PasswordInput.  
4. Decide on alias exports (WarningText/TextInput) and add.  
5. Architectural decision: ServiceNavigation vs. enhancing existing Header.  
6. Draft ExitThisPage RFC (requirements, compliance).  

---
_This document should be updated as each component reaches Done to maintain clear visibility of GOV.UK parity progress._
