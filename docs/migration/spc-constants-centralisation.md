# SPC constants centralisation

Status: Active (Phase 4)

## Summary

All SPC engine enums, registries, and constant tables have been centralised into a single module:

- Preferred import: `src/components/DataVisualisation/charts/SPC/engine` (v2 barrel)
- Legacy note: v1 `spc.ts` is retired; constants live under v2 types/constants.

This reduces duplication and makes ownership clearer across the engine and UI.

## What changed

- Enums: `ChartType`, `ImprovementDirection`, `VariationIcon`, `AssuranceIcon`, `SpcRuleId`, `Side`, etc.
- Rule metadata and registries: `RULE_PRECEDENCE`, `RULE_METADATA`, `RULES_IN_RANK_ORDER`, `RAW_TAG_TO_RULE_ID`, etc.

These now live in `spcConstants.ts`. The engine module `spc.ts` imports from, and re-exports, the same symbols to preserve public API stability.

## Recommended imports (new)

```ts
// Preferred (new): v2 engine barrel
import { ChartType, ImprovementDirection, VariationIcon } from "../SPC/engine";
```

## Timeline

- Phase 4+: v1 `spc.ts` is retired from public surface. Use the v2 engine barrel for enums and constants.

## Migration effort

Low risk. Update import paths where convenient. No behavioural changes were introduced by this refactor.

## Related migrations

- Variation icon canonicalisation — migrate `VariationIcon.None` to `VariationIcon.Suppressed`.
