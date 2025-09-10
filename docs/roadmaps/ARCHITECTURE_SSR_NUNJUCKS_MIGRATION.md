# SSR and Nunjucks and Behaviour Layer Migration Plan

This document outlines the staged migration of the NHS FDP Design System from a React-only component model to a **multi-renderer architecture** supporting:

1. React (existing) – rich interactive components
2. Nunjucks (server-rendered templates & macros) – parity with GOV.UK & NHSUK ecosystems
3. Pure static HTML (copy-paste examples / email / low‑JS contexts)
4. Behaviour layer (small progressive-enhancement modules reusable across renderers)

---
## Core Principles

- **Single Source of Truth for Semantics**: Each component defines a canonical props schema / shape. Renderers (React, Nunjucks, HTML generator) consume that schema.
- **Behaviour Extraction**: Interactive logic (event handling, state toggles, ARIA management) moves to `src/behaviours/*` small, framework-agnostic modules.
- **Deterministic Parity Verification**: Scripts enforce that every React component has a macro and (eventually) an HTML snapshot.
- **Incremental & Backwards Compatible**: No breaking changes until all Tier‑1 components have parallel Nunjucks and behaviour coverage.
- **Progressive Enhancement First**: Server renders accessible baseline; JS enhances features (e.g. double click prevention) when present.

---
## Target Directory Layout (End State)

```text
src/
  components/              # React implementations (thin wrappers calling shared mapping utilities)
  schemas/                 # (NEW) Zod or TS schema definitions per component
  mapping/                 # (NEW) Functions: props -> normalised internal model
  behaviours/              # Framework agnostic enhancement modules (already started)
  macros/                  # Nunjucks macros (.njk)
  html/                    # (OPTIONAL) Precompiled static HTML examples (build artifact)
  adapters/                # (FUTURE) Runtime environment hooks (Next.js, etc.)
```

---
\n## Phased Migration

### Phase 0 (Bootstrapped in this commit)

- Add behaviour layer folder and sample (`buttonBehaviour.ts`).
- Add initial Nunjucks macro (`button.njk`).
- Add build and verify scripts: `build:behaviours`, `generate:nunjucks`, `verify:macro-parity`.
- Add architecture doc (this file).

### Phase 1 – Formalise Component Metadata

- Introduce `src/schemas/componentMeta.ts` exporting an interface: `{ name, props, required, defaults, a11yNotes }`.
- Per component `<Component>.schema.ts` exports a JSON serialisable descriptor.
- Script: `scripts/extract-schemas.ts` collates into `dist/meta/components.json`.

### Phase 2 – Schema Driven Macro Generation

- For simple components (Button, Tag, Hint, Label, Heading, Link) auto-generate `.njk` from schema and a template DSL.
- Keep manually curated macros for complex layouts (Tables, DataVisualisation) initially.
- Extend `generate-nunjucks-macros.ts` to: read schema -> produce macro with docs comment including prop table.

### Phase 3 – React Refactor to Use Mapping Layer

- Extract class / attribute assembly logic from React component into `mapping/<component>.ts` (pure function: `map<Button>Props(uiProps) -> normalizedModel`).
- React component becomes minimal: calls mapping, returns JSX.
- Macro uses same mapping (transpiled to JS) by `require` or code generation so both outputs share semantics.

### Phase 4 – Behaviour Distribution

- Bundle behaviours as separate entry (`dist/behaviours/*.js`) and add export path in `package.json` (e.g. "./behaviours": { import/require }).
- Provide an aggregated `initAll()` that initialises all known behaviours for static HTML use.
- Add smoke tests verifying behaviours attach without React. (initAll smoke test added)
- Usage prototype:

  ```js
  import { initAll } from '@fergusbisset/nhs-fdp-design-system/behaviours';
  initAll();
  ```

### Phase 5 – Parity & Regression Tooling

- Enhance `verify-macro-parity.ts` to:
  - Compare rendered Nunjucks HTML (by executing macro with sample fixtures) vs SSR React output (string render) ignoring insignificant whitespace.
  - Report diffs into `ssr-analysis-report/macro-parity/*`.
- Add Vitest snapshot tests executing both renderers for a curated set of fixtures per component.

### Phase 6 – Documentation & Consumption

- Storybook integration: show Tabs: React | Nunjucks | HTML source (auto generated).
- Publish guidance: how to use macros in Express / Next (Edge) / static build pipelines.

### Phase 7 – Rollout & Deprecation

- Declare multi-renderer stable once 80% of Tier‑1 components covered.
- Introduce deprecation notices for legacy patterns (if any) and document migration.

---
\n## Scripts (Current)

- `npm run build:behaviours` – builds behaviour ESM modules.
- `npm run generate:nunjucks` – copies (later generates) macros to `dist`.
- `npm run verify:macro-parity` – basic existence check (will evolve to structural parity).

Add these into the main build once stable (e.g. extend `build:parity`).

---
\n## Proposed Component Tiering

- Tier‑1 (High usage and simple): Button, Tag, Hint, Label, Heading, Link, Input, Textarea, Select, Radios, Checkbox, ErrorMessage
- Tier‑2 (Composed, moderate complexity): Breadcrumb, Pagination, SummaryList, Panel, Tabs
- Tier‑3 (Complex / data-heavy): DataVisualisation, SortableDataTable, ResponsiveDataGrid

Migration order: Tier‑1 -> Tier‑2 -> Tier‑3.

---
\n## Testing Strategy Additions

1. `macroParity.test.ts`: For each fixture, render React (SSR) and Nunjucks -> normalise -> expect equality.
2. Behaviour tests mounting static HTML, running `initAll()`, simulating user events.
3. Visual parity: integrate Chromatic diff of React vs static HTML screenshot (optional advanced step).

---
\n## Open Questions / Decisions

- Use Zod vs handcrafted TS types for schemas? (Leaning Zod for runtime validation & docs generation.)
- Macro auto-generation formatting – Prettier pass? (Yes, run Prettier if available.)
- Whether to distribute macros separately (`@pkg/macros`) – keep in single package initially.

---
\n## Immediate Next Actions (After This Commit)

1. Add export path for behaviours & macros in `package.json` once stable.
2. Implement schema for Button and update macro generation script to optionally regenerate button macro.
3. Add macro parity test harness.
4. Integrate behaviour build & macro generation into `build:parity` pipeline (behind feature flag env var `DS_MULTI_RENDER=1`).
5. Add behaviour smoke tests (initAll) & extend for interactive cases. (Partially done)

---
\n## Success Metrics

- 0 additional SSR test failures after refactors.
- Macro parity script passing for 80% Tier‑1 within 2 iterations.
- Behaviour bundle size < 5kb gzip for Tier‑1 (excluding D3 heavy components).

---
\n## Rollback Plan
If parity tooling uncovers significant divergence or build performance issues:

- Disable new build steps via env flag.
- Retain existing React build output unaffected.
- Re-scope migration per component.

---
\n## Glossary

- Mapping Layer: Deterministic pure functions converting external API props to internal render model.
- Behaviour Layer: Progressive enhancement modules binding DOM events post-render.
- Renderer: Implementation that takes the internal model (React JSX, Nunjucks template, or HTML generator) and outputs markup.

---
\n## Contributors
Please add notes / decisions here as the migration evolves.
