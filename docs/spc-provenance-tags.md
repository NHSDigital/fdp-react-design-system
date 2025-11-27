# SPC Provenance Tags

This reference enumerates rule-based and heuristic provenance tags emitted by the SPC engine. They surface in `row.ruleTags` (immutable snapshot of orthodox rules before any heuristic mutation) and `row.heuristicTags` (post-rule heuristic annotations / suppressions / inversions). The tooltip renders a consolidated Provenance section.

| Tag (raw) | Pretty Label | Kind | Taxonomy | Rationale / Effect | Caution |
|----------|--------------|------|----------|--------------------|---------|
| shift_high | Shift (high run) | rule | orthodox | ≥N consecutive points above mean | Low |
| shift_low | Shift (low run) | rule | orthodox | ≥N consecutive points below mean | Low |
| trend_inc | Trend (increasing) | rule | orthodox | Monotonic increase across threshold window | Low |
| trend_dec | Trend (decreasing) | rule | orthodox | Monotonic decrease across threshold window | Low |
| single_above | Single >3σ (above) | rule | orthodox | Point beyond upper 3σ limit | Low |
| single_below | Single >3σ (below) | rule | orthodox | Point beyond lower 3σ limit | Low |
| two_of_three_high | 2 of 3 >2σ (high) | rule | orthodox | 2/3 points above +2σ (all three above mean) | Low |
| two_of_three_low | 2 of 3 >2σ (low) | rule | orthodox | 2/3 points below -2σ (all three below mean) | Low |
| four_of_five_high | 4 of 5 >1σ (high) | rule | orthodox | 4/5 points above +1σ (all five above mean) | Low |
| four_of_five_low | 4 of 5 >1σ (low) | rule | orthodox | 4/5 points below -1σ (all five below mean) | Low |
| comparative_retrospective_early_as_concern | Retrospective early concern | heuristic | interpretive | Back-labels pre-shift stability as concern for phase framing | Medium |
| comparative_force_tail_favourable | Force tail favourable | heuristic | interpretive | Extends favourable shift classification across tail | Medium |
| comparative_propagate_favourable | Propagate favourable run | heuristic | interpretive | Annotates sustained favourable run members | Low |
| comparative_invert | Invert favourable shift | heuristic | interpretive | Treats favourable shift run as concern/common | Medium |
| comparative_invert_as_common | Invert as common | heuristic | aggressive | Neutralises all flags in shift window for common-cause narrative | High |
| comparative_invert_clear_pre_shift | Clear pre-shift flags | heuristic | aggressive | Removes earlier flags to keep early window neutral | High |
| comparative_invert_tail_concern_N | Invert tail concern (last N) | heuristic | interpretive | Flags last N points as concern after inversion for emphasis | Medium |
| retro_neutralised_opposite_low_cluster | Neutralise early low cluster | heuristic | aggressive | Removes earlier low-side sustained cluster post favourable shift | High |
| retro_neutralised_opposite_high_cluster | Neutralise early high cluster | heuristic | aggressive | Removes earlier high-side sustained cluster post favourable shift | High |
| emerging_direction_grace_neutralised | Emerging direction grace (neutral) | heuristic | interpretive | Downgrades weak unfavourable signal to neutral during emerging favourable movement | Medium |
| emerging_direction_grace_conflict_favourable | Emerging direction resolves conflict | heuristic | interpretive | Resolves conflicting signals in favour of emerging direction | Medium |
| suppress_isolated_favourable_single_3sigma | Suppress isolated favourable 3σ | heuristic | aggressive | Suppresses lone favourable 3σ outlier without corroboration | High |

## Taxonomy Guidance

- orthodox: Direct statistical rule; strong objective provenance.
- interpretive: Adds narrative emphasis or retrospective framing without deleting core evidence.
- aggressive: Alters or suppresses original evidence; treat conclusions with heightened caution.

## Styling Semantics

Tooltip provenance tags use layered classes:

- `fdp-spc-tag--rule` / `fdp-spc-tag--heuristic` (base colour family)
- `fdp-spc-tag--prov-orthodox` (subtle outline)
- `fdp-spc-tag--prov-interpretive` (light gradient overlay)
- `fdp-spc-tag--prov-aggressive` (inset red outline and ! marker)
- `fdp-spc-tag--prov-unknown` (neutral grey fallback)

A dynamic tail concern tag `comparative_invert_tail_concern_{N}` replaces `N` with the numeric tail length in its pretty label.

## Pretty Printing

Helper: `prettyPrintProvenanceTag(tag)` returns human label (with dynamic substitution) and is used in the SPC tooltip overlay.

