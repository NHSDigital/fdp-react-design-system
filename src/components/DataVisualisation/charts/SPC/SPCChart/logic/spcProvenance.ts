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
  // All heuristics removed – retaining empty array for forward compatibility
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
