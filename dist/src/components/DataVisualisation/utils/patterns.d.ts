export type PatternKind = 'diagonal' | 'diagonal-dense' | 'rev-diagonal' | 'rev-diagonal-dense' | 'cross' | 'cross-dense' | 'grid' | 'grid-dense' | 'horizontal' | 'horizontal-dense' | 'vertical' | 'vertical-dense' | 'dot' | 'dot-dense' | 'checker' | 'zigzag' | 'weave' | 'ring';
export interface PatternDefinition {
    id: string;
    svg: string;
}
export declare function generatePattern(kind: PatternKind, options?: {
    id?: string;
    stroke?: string;
    color?: string;
    background?: string;
    size?: number;
}): PatternDefinition;
export declare function injectPatterns(patterns: PatternDefinition[], root?: HTMLElement | null): void;
export declare function patternDataUrl(p: PatternDefinition): string;
