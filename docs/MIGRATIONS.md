# SPC imports: canonical surfaces

We’ve simplified SPC imports to a few stable surfaces and reduced accidental coupling to internals.

Recommended pattern (barrel-first):

- Component and basic types → `src/components/DataVisualisation/charts/SPC` (SPC barrel)
  - Example: `import { SPCChart } from '@fergusbisset/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC'`
  - Example: `import type { SPCChartProps, SPCDatum } from '.../charts/SPC'`
- Engine helpers and enums → `src/components/DataVisualisation/charts/SPC/engine`
  - Example: `import { buildSpcV26a, SpcVisualCategory } from '.../charts/SPC/engine'`
- Icons → Icons namespace from the SPC barrel
  - Example: `import * as Icons from '.../components/DataVisualisation/charts/SPC/icons'`
  - Or: `import { Icons } from '.../components/DataVisualisation/charts/SPC'`

Direct file import (still valid when you need props-only):

- `src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.props.ts`
  - Example: `import type { SPCChartProps, SPCDatum } from '.../charts/SPC/SPCChart/SPCChart.props'`

Deprecated or discouraged deep imports (use above instead):

- `.../SPC/SPCChart/logic_v2/**` or `.../SPC/SPCChart/logic/**` (use `.../SPC/engine`)
- `.../SPC/SPCIcons/**` (use Icons from `.../SPC` barrel)
- `.../SPC/SPCChart/descriptors` in app code (prefer consumer-facing helpers from the SPC barrel)
- `.../SPC/SPCChart/types` (prefer enums exposed via `engine` or `SPCChart.props`)

Transitional shims and deprecations:

- `AssuranceIcon`, `BaselineSuggestionReason`, `RULE_METADATA` are exported via a minimal shim: `.../SPC/SPCChart/public` and re-surfaced by the SPC barrel. These will be removed in a future major version. Prefer:
  - Rules/descriptors: `ruleGlossary`, `extractRuleIds` from `.../SPC/SPCChart/descriptors`
  - Engine visual categories: `SpcVisualCategory` from `.../SPC/engine`
  - Icons: `Icons` namespace from `.../SPC` or `.../SPC/icons`

Rationale:

- Keeps the SPC public surface lean and collision-free
- Avoids leaking internal logic structures to consumers
- Encourages clearer imports between chart UI, engine logic, and rendering icons
