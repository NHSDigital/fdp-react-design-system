## SPC Precedence & Directional Strategy

### Background

Legacy variation classification picked the icon per row using a simple side-based rule aggregation:

```text
anyHigh = (single 3σ above) OR (2 of 3 above 2σ) OR (4 of 5 above 1σ) OR (shift high) OR (trend increasing)
anyLow  = (mirrored low-side rules)

metricImprovement = Down:
  Improvement if anyLow else Concern if anyHigh else Neither
metricImprovement = Up swaps sides.
```

This produced unintuitive colouring in transitional phases – e.g. a *progressive decline* (favourable for metrics where lower is better) still coloured several points as Concern because high-side location-based rules (shift/cluster) remained active before a formal monotonic trend rule triggered.

### Guidance Considered

New behaviour aligns with internal guidance:

1. Prioritise directionally consistent sustained rules (shift, long run) over single-point outliers.
2. Collapse redundant signals (e.g. both 2-of-3 and 4-of-5 on same side) into the strongest narrative.
3. Surface conflicting direction signals only if overlapping windows are partial and recency differs; emphasise the most recent sustained direction.

### New Settings (Opt‑In)

Added to `SpcSettings` (defaults preserve legacy behaviour):

| Setting | Type | Default | Purpose |
|---------|------|---------|---------|
| `precedenceStrategy` | `'legacy' \| 'directional_first'` | `legacy` | Enables new precedence algorithm |
| `emergingDirectionGrace` | `boolean` | `false` | Allows near-complete (N-1) favourable run to neutralise unfavourable classification early |
| `transitionBufferPoints` | `number` | `2` | Grace buffer before flipping when opposing sustained signals compete |
| `collapseClusterRules` | `boolean` | `true` | Removes weaker cluster rule (2-of-3) when 4-of-5 also fires on same side |

### Directional First Algorithm (Simplified)

For each row (after standard rule detection):

1. Derive boolean `favourable` / `unfavourable` sets (side depends on metric polarity).
2. Compute `emergingFavourable` if last (trendN - 1) points are *almost* monotonically moving in favourable direction (allow ≤1 counter step).
3. Apply precedence:
   - Favourable only -> Improvement.
   - Unfavourable only -> Concern (unless `emergingDirectionGrace` & `emergingFavourable` -> downgrade to Neither).
   - Both -> Improvement if emerging or confirmed trend present and grace active, else Neither.
   - Neither -> Neither.
4. (Cluster collapse) If both 2-of-3 and 4-of-5 present same side keep only 4-of-5 flag.

### Outcomes

| Scenario | Legacy | Directional First (grace) |
|----------|--------|---------------------------|
| Progressive decline above mean (lower better) | Early points = Concern | Early points downgraded to Neither until trend confirmed then Improvement |
| Strong high-side shift with no directional change | Concern | Concern (unchanged) |
| Emerging improvement with minor noise | Often Concern until full trend | Earlier neutral / faster Improvement |

### Rationale

The directional-first approach reduces “false negative” perception where users see improving movement but chart signals deterioration. It maintains statistical discipline (full rule still required for definitive Improvement) while communicating transition more faithfully.

### Migration Guidance

1. Enable per chart via `settings={{ precedenceStrategy: 'directional_first', emergingDirectionGrace: true }}`.
2. Validate narrative & colour alignment on representative metrics (improvement vs deterioration examples).
3. Optionally display a legend / footnote indicating precedence mode if mixed strategies are deployed across dashboards.

### Future Enhancements (Not Yet Implemented)

- Recency weighting to resolve simultaneous opposing sustained runs explicitly using start indices & `transitionBufferPoints`.
- Exposure of consolidated primary rule id for narration (currently implicit via icon).
- Configurable emerging run tolerance (allow flat vs strictly directional steps).

### Testing Additions

New tests (see `spc.precedence.logic.test.ts`) assert:

1. Declining favourable sequence classification difference legacy vs directional.
2. Cluster collapse (2-of-3 removed when 4-of-5 present) with toggle.

### Opt-Out

Remain on `precedenceStrategy: 'legacy'` for unchanged historical behaviour while evaluating impact.
