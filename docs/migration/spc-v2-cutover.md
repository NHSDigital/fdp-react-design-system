# SPC V2 Cutover – Migration Guide

This guide explains the final cutover to the V2 SPC engine and UI shapes. It focuses on import locations, removed aliases, and minimal code updates to keep consumers green.

## Summary

- Enums/constants are centralized in a single source of truth and are no longer re-exported from `spc.ts`.
- UI enums for SPCChart live alongside the chart and are re-exported via the SPC barrel.
- Legacy alias `VariationIcon.None` is removed; use `VariationIcon.Suppressed`.
- Directional special-cause flags use the `*Up`/`*Down` aliases (legacy Above/Below/High/Low names are deprecated).
- Trend side gating is always enforced in the engine; the UI toggle is purely visual.

## What changed

1. Engine enums/constants import location

- Before: `import { ChartType, ImprovementDirection, VariationIcon } from './spc'`
- After:  `import { ChartType, ImprovementDirection, VariationIcon } from './spcConstants'`

Engine enums/constants include (non-exhaustive):

- ChartType, ImprovementDirection, VariationIcon, AssuranceIcon
- PrimeDirection, PrecedenceStrategy, Side
- SpcRuleId, SpcRawRuleTag, RAW_TAG_TO_RULE_ID
- RULE_METADATA, RULES_IN_RANK_ORDER, RULE_RANK_BY_ID, RULE_PRECEDENCE

Functions, types, and warnings still come from `spc.ts`:

- `buildSpc`, `normaliseSpcSettings`, `getDirectionalSignalSummary`, `SpcWarningSeverity`, etc.

1. UI enums location

- `SpcGradientCategory`, `SpcEmbeddedIconVariant` live in `SPCChart.constants.ts` and are re-exported via the SPC barrel (`charts/SPC`).

1. Removed alias

- `VariationIcon.None` was removed. Use `VariationIcon.Suppressed` for neutral/no-judgement.
- The string value `'none'` may still be accepted temporarily for backward compatibility, but `'suppressed'` is canonical in code and tests.

1. Directional alias flags

- Prefer `specialCause*Up` / `specialCause*Down` flags over legacy Above/Below/High/Low names.
- See also: `docs/migration/spc-settings-v2-migration.md` for settings rename guidance and normaliser behaviour.

## Quick migration steps

- Replace imports of engine enums/constants from `spc.ts` to `spcConstants`.
- Replace any string literals for chart type (e.g. `'XmR'`, `'G'`, `'T'`) with `ChartType.XmR`, `ChartType.G`, `ChartType.T`.
- Replace `VariationIcon.None` with `VariationIcon.Suppressed`.
- Update legacy directional property access to the `*Up`/`*Down` names.
- If you showed a UI toggle for trend side gating, mark it as visual-only; the engine behaviour is always side-qualified.

## Examples

From:

```ts
// functions + enums (old)
import { buildSpc, ChartType, ImprovementDirection } from './spc'
```

To:

```ts
// functions
import { buildSpc } from './spc'
// enums/constants
import { ChartType, ImprovementDirection } from './spcConstants'
```

From:

```ts
const chartType = 'XmR'
```

To:

```ts
const chartType = ChartType.XmR
```

From:

```ts
if (row.variationIcon === VariationIcon.None) {
	// ...
}
```

To:

```ts
if (row.variationIcon === VariationIcon.Suppressed) {
	// ...
}
```

## Validation checklist

- Build: `npm run build:parity`
- Tests: `npm run test:components` (expect all SPC suites to pass)
- SSR: `npm run test:ssr-components`
- Lint/types: `npm run lint` and `npm run typecheck`
- Storybook: `npm run storybook` for manual UI checks

## Notes

- The engine now backfills shift/trend flags across the full qualifying run; if you relied on terminal-only flags, adjust your logic to detect the contiguous run extents.
- Trend contributions to variation icons are always side-qualified (favourable side only). Early improvement/concern before mean crossing will no longer occur.
