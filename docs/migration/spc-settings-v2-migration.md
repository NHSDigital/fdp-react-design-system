# SPC Settings V2 Migration Guide (grouped settings)

Status: additive and backward‑compatible (Phase 3)

This guide explains how to adopt the new grouped SPC settings shape (`SpcSettingsV2`) while staying compatible with existing configuration. A normaliser maps V2 → legacy flat fields internally, and legacy names still work with one‑time deprecation warnings.

## What changed

- New grouped shape (all fields optional):
  - `rules`: `shiftPoints`, `trendPoints`, `fourOfFiveEnabled`, `fifteenInnerThirdEnabled`, `collapseWeakerClusterRules`
  - `precedence`: `strategy`, `conflictMode`
  - `thresholds`: `minimumPoints`, `minimumPointsPartition`, `maximumPointsPartition`, `maximumPoints`, `transitionBufferPoints`
  - `warnings`: toggles for existing warnings
  - `rareEvent`: `excludeMovingRangeOutliers`
  - `capability`: `assuranceCapabilityMode`
  - `grace`: `emergingEnabled`
  - `baselineSuggest`: `enabled`, `minDeltaSigma`, `stabilityPoints`, `minGap`, `scoreThreshold`
  - `autoRecalc`: `enabled`, `shiftLength`, `deltaSigma`
- Canonical V2 aliases accepted at top‑level for convenience: `emergingGraceEnabled`, `collapseWeakerClusterRules`.
- Trend side‑gating is always ON in the engine; any prior `trendSideGatingEnabled`/`trendFavourableSideOnly` is a no‑op and can be removed.

## Legacy → V2 mapping

- `specialCauseShiftPoints` ← `rules.shiftPoints`
- `specialCauseTrendPoints` ← `rules.trendPoints`
- `enableFourOfFiveRule` ← `rules.fourOfFiveEnabled`
- `enableFifteenInInnerThirdRule` ← `rules.fifteenInnerThirdEnabled`
- `collapseWeakerClusterRules` ← `rules.collapseWeakerClusterRules` (was `collapseClusterRules`)
- `precedenceStrategy` ← `precedence.strategy`
- `conflictPrecedenceMode` ← `precedence.conflictMode`
- `minimumPoints` ← `thresholds.minimumPoints`
- `minimumPointsPartition` ← `thresholds.minimumPointsPartition`
- `maximumPointsPartition` ← `thresholds.maximumPointsPartition`
- `maximumPoints` ← `thresholds.maximumPoints`
- `transitionBufferPoints` ← `thresholds.transitionBufferPoints`
- All warning toggles map from `warnings.*`
- `excludeMovingRangeOutliers` ← `rareEvent.excludeMovingRangeOutliers`
- `assuranceCapabilityMode` ← `capability.assuranceCapabilityMode`
- `emergingDirectionGrace` ← `grace.emergingEnabled` (alias: `emergingGraceEnabled`)
- `baselineSuggest*` ← `baselineSuggest.*`
- `autoRecalculate*` ← `autoRecalc.*`

## Before/After example

```ts
// Before (legacy flat)
buildSpc({
  chartType: 'XmR',
  metricImprovement: ImprovementDirection.Up,
  data,
  settings: {
    specialCauseShiftPoints: 6,
    specialCauseTrendPoints: 6,
    enableFourOfFiveRule: true,
    emergingDirectionGrace: true, // deprecated name
    collapseClusterRules: true,   // deprecated name
  }
});

// After (V2 grouped)
buildSpc({
  chartType: 'XmR',
  metricImprovement: ImprovementDirection.Up,
  data,
  settings: {
    rules: {
      shiftPoints: 6,
      trendPoints: 6,
      fourOfFiveEnabled: true,
      collapseWeakerClusterRules: true,
    },
    grace: { emergingEnabled: true },
  } satisfies SpcSettingsV2
});
```

Both variants are accepted. The normaliser prunes `undefined` so engine defaults aren’t accidentally overridden.

## Deprecations to address

- `emergingDirectionGrace` → use `grace.emergingEnabled` (or `emergingGraceEnabled` top‑level alias)
- `collapseClusterRules` → use `rules.collapseWeakerClusterRules`
- `trendSideGatingEnabled` / `trendFavourableSideOnly` → remove; engine always side‑gates trend contributions

Expect a one‑time console.warn when legacy names are detected during tests/dev.

## Gotchas and edge cases

- Undefined is ignored: Passing `undefined` inside V2 objects will be dropped by the normaliser, preserving engine defaults. To explicitly disable a defaulted boolean, pass `false`, not `undefined`.
- Directional precedence: Side‑gated trend signals won’t classify points as Improvement/Concern until the point crosses to the favourable side of the mean; this is intentional and independent of visuals.
- Rare‑event charts (T/G): Targets are ignored by design; warnings reflect this and are controlled via `warnings.targetSuppressedWarning`.

## Adoption checklist

1. Replace deprecated names with V2 paths where you touch settings.
1. Remove any `trendSideGatingEnabled`/`trendFavourableSideOnly` usage.
1. Prefer `SpcSettingsV2` with grouped sections for new code.
1. (Optional) Run the codemod to automate safe dot-access renames, then scan reported manual sites (object literals / bracket-access) and update them. Commands:

```sh
npm run spc:codemod:scan
npm run spc:codemod:apply
```

1. Run validations:

```sh
npm run test:components
npm run test:ssr-components
npm run build:parity
```

1. Visual gating (docs pointer): Trend visuals are controlled via the `TrendVisualMode` prop on `SPCChart` (Ungated default; Gated optional). Classification remains side‑gated in the engine regardless of visuals. See the SPC Trend Gating story/docs for examples.

## Codemod reference and manual hints

- Commands
  - Scan: `npm run spc:codemod:scan`
  - Apply: `npm run spc:codemod:apply`

- Manual search/replace targets (reported by the codemod for object literal or bracket-access cases):
  - `emergingDirectionGrace` → replace with `grace.emergingEnabled`
  - `collapseClusterRules` → replace with `rules.collapseWeakerClusterRules`

Keep changes minimal; the normaliser preserves backward compatibility.
