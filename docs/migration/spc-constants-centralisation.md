# SPC constants centralisation

Status: Active (Phase 4)

## Summary

All SPC engine enums, registries, and constant tables have been centralised into a single module:

- Preferred import: `src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcConstants.ts`
- Backward compatibility: `spc.ts` re-exports these symbols for now to avoid breaking existing imports.

This reduces duplication and makes ownership clearer across the engine and UI.

## What changed

- Enums: `ChartType`, `ImprovementDirection`, `VariationIcon`, `AssuranceIcon`, `SpcRuleId`, `Side`, etc.
- Rule metadata and registries: `RULE_PRECEDENCE`, `RULE_METADATA`, `RULES_IN_RANK_ORDER`, `RAW_TAG_TO_RULE_ID`, etc.

These now live in `spcConstants.ts`. The engine module `spc.ts` imports from, and re-exports, the same symbols to preserve public API stability.

## Recommended imports (new)

```ts
// Preferred (new)
import { ChartType, ImprovementDirection, VariationIcon } from "./logic/spcConstants";

// Still works (compat), but migrate over time
import { ChartType, ImprovementDirection, VariationIcon } from "./logic/spc";
```

## Timeline

- Phase 4: `spc.ts` continues to re-export constants. Prefer the new path for all internal imports. Downstream consumers can migrate opportunistically.
- Future phase: Direct constant definitions in `spc.ts` will be removed. Re-exports may remain until the next major.

## Migration effort

Low risk. Update import paths where convenient. No behavioural changes were introduced by this refactor.

## Related migrations

- Variation icon canonicalisation — migrate `VariationIcon.None` to `VariationIcon.Suppressed`.
