/**
 * Provenance metadata for SPC rule and heuristic tags.
 *
 * Taxonomy levels:
 *  - orthodox: Core Shewhart / Western Electric style rules (objective statistical basis)
 *  - interpretive: Heuristics that reinterpret or extend base rules without deleting primary evidence
 *  - aggressive: Heuristics that suppress, invert or retroactively neutralise evidence (highest caution)
 */

export type ProvenanceTaxonomy = 'orthodox' | 'interpretive' | 'aggressive';

export interface ProvenanceMeta {
  id: string;              // raw tag id
  label: string;           // human friendly label
  kind: 'rule' | 'heuristic';
  taxonomy: ProvenanceTaxonomy;
  description: string;
  pattern?: RegExp;        // optional pattern for dynamic tags
}

// Base rule tags (captured pre-heuristic)
const ruleMetas: ProvenanceMeta[] = [
  { id: 'shift_high', label: 'Shift (high run)', kind: 'rule', taxonomy: 'orthodox', description: 'Run of consecutive points above the mean exceeding shift length threshold.' },
  { id: 'shift_low', label: 'Shift (low run)', kind: 'rule', taxonomy: 'orthodox', description: 'Run of consecutive points below the mean exceeding shift length threshold.' },
  { id: 'trend_inc', label: 'Trend (increasing)', kind: 'rule', taxonomy: 'orthodox', description: 'Consecutive increasing values meeting trend length threshold.' },
  { id: 'trend_dec', label: 'Trend (decreasing)', kind: 'rule', taxonomy: 'orthodox', description: 'Consecutive decreasing values meeting trend length threshold.' },
  { id: 'single_above', label: 'Single >3σ (above)', kind: 'rule', taxonomy: 'orthodox', description: 'Single point beyond upper 3-sigma limit.' },
  { id: 'single_below', label: 'Single >3σ (below)', kind: 'rule', taxonomy: 'orthodox', description: 'Single point beyond lower 3-sigma limit.' },
  { id: 'two_of_three_high', label: '2 of 3 >2σ (high)', kind: 'rule', taxonomy: 'orthodox', description: 'Two of three consecutive points above +2σ.' },
  { id: 'two_of_three_low', label: '2 of 3 >2σ (low)', kind: 'rule', taxonomy: 'orthodox', description: 'Two of three consecutive points below -2σ.' },
  { id: 'four_of_five_high', label: '4 of 5 >1σ (high)', kind: 'rule', taxonomy: 'orthodox', description: 'Four of five consecutive points above +1σ.' },
  { id: 'four_of_five_low', label: '4 of 5 >1σ (low)', kind: 'rule', taxonomy: 'orthodox', description: 'Four of five consecutive points below -1σ.' },
];

// Heuristic tags (post-rule mutations / augmentations)
const heuristicMetas: ProvenanceMeta[] = [
  { id: 'comparative_retrospective_early_as_concern', label: 'Retrospective early concern', kind: 'heuristic', taxonomy: 'interpretive', description: 'Back-labels pre-shift opposite-side stability as concern for comparative phase framing.' },
  { id: 'comparative_force_tail_favourable', label: 'Force tail favourable', kind: 'heuristic', taxonomy: 'interpretive', description: 'Extends favourable shift classification across tail section for consistent narrative.' },
  { id: 'comparative_propagate_favourable', label: 'Propagate favourable run', kind: 'heuristic', taxonomy: 'interpretive', description: 'Annotates rows within sustained favourable run (already flagged) for provenance.' },
  { id: 'comparative_invert', label: 'Invert favourable shift', kind: 'heuristic', taxonomy: 'interpretive', description: 'Treats favourable shift window as concern/common per emulation mode.' },
  { id: 'comparative_invert_as_common', label: 'Invert as common', kind: 'heuristic', taxonomy: 'aggressive', description: 'Neutralises all special-cause flags in the shift window to force common-cause classification.' },
  { id: 'comparative_invert_clear_pre_shift', label: 'Clear pre-shift flags', kind: 'heuristic', taxonomy: 'aggressive', description: 'Removes existing flags before shift start when in invert-as-common mode.' },
  { id: 'retro_neutralised_opposite_low_cluster', label: 'Neutralise early low cluster', kind: 'heuristic', taxonomy: 'aggressive', description: 'Retroactively neutralises earlier opposite-side low cluster after sustained favourable shift established.' },
  { id: 'retro_neutralised_opposite_high_cluster', label: 'Neutralise early high cluster', kind: 'heuristic', taxonomy: 'aggressive', description: 'Retroactively neutralises earlier opposite-side high cluster after sustained favourable shift established.' },
  { id: 'emerging_direction_grace_neutralised', label: 'Emerging direction grace (neutral)', kind: 'heuristic', taxonomy: 'interpretive', description: 'Downgrades weak unfavourable signals to neutral when emerging favourable direction detected.' },
  { id: 'emerging_direction_grace_conflict_favourable', label: 'Emerging direction resolves conflict', kind: 'heuristic', taxonomy: 'interpretive', description: 'Resolves conflicting signals in favour of emerging direction / trend.' },
  { id: 'suppress_isolated_favourable_single_3sigma', label: 'Suppress isolated favourable 3σ', kind: 'heuristic', taxonomy: 'aggressive', description: 'Suppresses isolated single favourable 3σ point without corroboration.' },
  // Dynamic pattern: comparative_invert_tail_concern_{N}
  { id: 'comparative_invert_tail_concern_N', pattern: /^comparative_invert_tail_concern_(\d+)$/i, label: 'Invert tail concern (last N)', kind: 'heuristic', taxonomy: 'interpretive', description: 'Tags final N points as concern following inversion for bespoke comparative tail emphasis.' },
];

const META_BY_ID = new Map<string, ProvenanceMeta>();
for (const m of [...ruleMetas, ...heuristicMetas]) META_BY_ID.set(m.id, m);

interface ResolvedMeta extends ProvenanceMeta { dynamic?: boolean; dynamicLabel?: string; }

/** Resolve metadata for a raw provenance tag. */
export function getProvenanceMeta(tag: string): ResolvedMeta | undefined {
  if (META_BY_ID.has(tag)) return META_BY_ID.get(tag) as ResolvedMeta;
  // Dynamic patterns
  for (const m of heuristicMetas) {
    if (m.pattern && m.pattern.test(tag)) {
      const match = tag.match(m.pattern)!;
      const n = match[1];
      return { ...m, dynamic: true, dynamicLabel: m.label.replace('N', n) };
    }
  }
  return undefined;
}

/** Return human friendly label for a provenance tag (falls back to raw). */
export function prettyPrintProvenanceTag(tag: string): string {
  const m = getProvenanceMeta(tag);
  if (!m) return tag.replace(/_/g, ' ');
  return m.dynamic ? (m.dynamicLabel || m.label) : m.label;
}

/** Determine taxonomy classification for styling. */
export function provenanceTaxonomy(tag: string): ProvenanceTaxonomy | 'unknown' {
  const m = getProvenanceMeta(tag);
  return m ? m.taxonomy : 'unknown';
}

/** Kind (rule vs heuristic). */
export function provenanceKind(tag: string): 'rule' | 'heuristic' | 'unknown' {
  const m = getProvenanceMeta(tag);
  return m ? m.kind : 'unknown';
}

/** Export full registry (useful for docs / tables). */
export const ALL_PROVENANCE_META: ProvenanceMeta[] = [...ruleMetas, ...heuristicMetas];
