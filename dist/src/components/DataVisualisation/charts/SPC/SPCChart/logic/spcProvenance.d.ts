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
    id: string;
    label: string;
    kind: 'rule' | 'heuristic';
    taxonomy: ProvenanceTaxonomy;
    description: string;
    pattern?: RegExp;
}
interface ResolvedMeta extends ProvenanceMeta {
    dynamic?: boolean;
    dynamicLabel?: string;
}
/** Resolve metadata for a raw provenance tag. */
export declare function getProvenanceMeta(tag: string): ResolvedMeta | undefined;
/** Return human friendly label for a provenance tag (falls back to raw). */
export declare function prettyPrintProvenanceTag(tag: string): string;
/** Determine taxonomy classification for styling. */
export declare function provenanceTaxonomy(tag: string): ProvenanceTaxonomy | 'unknown';
/** Kind (rule vs heuristic). */
export declare function provenanceKind(tag: string): 'rule' | 'heuristic' | 'unknown';
/** Export full registry (useful for docs / tables). */
export declare const ALL_PROVENANCE_META: ProvenanceMeta[];
export {};
