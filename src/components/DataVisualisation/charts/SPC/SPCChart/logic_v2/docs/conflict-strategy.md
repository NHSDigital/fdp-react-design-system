# Special-cause conflict: v2 logic

This module documents how the v2 engine resolves conflicts when both improvement- and concern-side special-cause candidates exist for the same point (e.g., trend crossing the mean).

Terminology mirrors SQL v2.6a and existing docs:

## Strategies

1) SqlPrimeThenRule (default)

2) PreferImprovement

3) RuleHierarchy

## Settings

```ts
conflictStrategy?: 'SqlPrimeThenRule' | 'PreferImprovement' | 'RuleHierarchy'
metricConflictRule?: 'Improvement' | 'Concern'             # used on ties
ruleHierarchy?: SpcRuleId[]                                # only for RuleHierarchy
```

Backwards compatibility: If `conflictStrategy` isn’t set but `preferImprovementWhenConflict=true`, the engine behaves as PreferImprovement for conflicts.

## Recommended policy for healthcare quality
- For a formal hierarchy (e.g., “Trend takes precedence over Shift”): RuleHierarchy with explicit order.

These options keep classification deterministic and auditable while giving product teams latitude to match local policy. Tests in `__tests__/specialCauseConflict.datasetAlignment.test.ts` exercise the parity and Excel-like paths.