// Attempt to source colours from design tokens (data-viz categorical 1..12).
// We now use static ESM JSON imports (TS resolveJsonModule) so build will surface errors
// instead of silently swallowing them with dynamic require.

import dataVizTokens from '../../../../packages/nhs-fdp/tokens/data-viz.json';
import colorTokens from '../../../../packages/nhs-fdp/tokens/colors.json';

// Legacy fallback (previous implementation) – retained to avoid breaking consumers
const legacyCategorical = [
  '#005eb8', '#0072ce', '#41b6e6', '#00a499',
  '#7c2855', '#330072', '#d5281b', '#ffb81c',
  '#fae100', '#4c6272', '#768692', '#aeb7bd'
];

let categoricalPalette: string[] | null = null;
let optimizedCategoricalPalette: string[] | null = null; // reordered for maximal early distinctness
let extendedPaletteCache: string[] | null = null; // cache including generated variants beyond base length

type CategoricalStrategy = 'optimized' | 'raw';
let categoricalStrategy: CategoricalStrategy = 'optimized';

export function setCategoricalColorStrategy(strategy: CategoricalStrategy) {
  categoricalStrategy = strategy;
}
export function getCategoricalColorStrategy(): CategoricalStrategy { return categoricalStrategy; }

function buildPalette(): string[] {
  const root: any = { color: { ...(colorTokens as any).color, ...(dataVizTokens as any).color } };

    const resolve = (path: string, seen: Set<string> = new Set()): string | undefined => {
      if (seen.has(path)) return undefined; // circular guard
      seen.add(path);
      const node = path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), root);
      if (!node) return undefined;
      const value = node.$value || node.value; // support raw & built forms
      if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
        return resolve(value.slice(1, -1), seen);
      }
      if (typeof value === 'string') return value;
      return undefined;
    };

    const palette: string[] = [];
    try {
      for (let i = 1; i <= 12; i++) {
        const tokenPath = `color.data-viz.categorical.${i}`;
        const hex = resolve(tokenPath);
        if (!hex) throw new Error(`Missing token ${tokenPath}`);
        palette.push(hex);
      }
      return palette;
    } catch (e) {
      return legacyCategorical; // hard fallback if tokens unexpectedly incomplete
    }
}

function getPalette(): string[] {
  if (!categoricalPalette) categoricalPalette = buildPalette();
  return categoricalPalette;
}

// --- Perceptual distinctness optimisation (CIE Lab farthest-point sampling) ---
// We keep this lightweight (no external deps) with approximate conversions; sufficient for ordering.
interface Lab { L: number; a: number; b: number }

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

// sRGB -> linear
function srgbToLinear(x: number): number { x /= 255; return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }

function rgbToXyz(r: number, g: number, b: number): { x: number; y: number; z: number } {
  const R = srgbToLinear(r); const G = srgbToLinear(g); const B = srgbToLinear(b);
  // Observer = 2°, Illuminant = D65
  const x = R * 0.4124 + G * 0.3576 + B * 0.1805;
  const y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  return { x: x * 100, y: y * 100, z: z * 100 };
}

function xyzToLab(x: number, y: number, z: number): Lab {
  // D65 reference white
  const refX = 95.047, refY = 100.0, refZ = 108.883;
  let X = x / refX, Y = y / refY, Z = z / refZ;
  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : (7.787 * t) + 16 / 116);
  X = f(X); Y = f(Y); Z = f(Z);
  return { L: (116 * Y) - 16, a: 500 * (X - Y), b: 200 * (Y - Z) };
}

function hexToLab(hex: string): Lab | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const xyz = rgbToXyz(rgb.r, rgb.g, rgb.b);
  return xyzToLab(xyz.x, xyz.y, xyz.z);
}

function deltaE76(c1: Lab, c2: Lab): number {
  const dL = c1.L - c2.L; const da = c1.a - c2.a; const db = c1.b - c2.b;
  return Math.sqrt(dL * dL + da * da + db * db);
}

function buildOptimizedCategoricalPalette(): string[] {
  const base = getPalette();
  if (base.length <= 2) return base.slice();
  const labs = base.map(c => hexToLab(c));
  // Farthest-point sampling: start with colour having max average distance (more central choice) to others.
  let bestStartIdx = 0; let bestAvg = -1;
  for (let i = 0; i < base.length; i++) {
    const li = labs[i]; if (!li) continue;
    let total = 0; let count = 0;
    for (let j = 0; j < base.length; j++) if (i !== j && labs[j]) { total += deltaE76(li, labs[j]!); count++; }
    const avg = total / Math.max(1, count);
    if (avg > bestAvg) { bestAvg = avg; bestStartIdx = i; }
  }
  const remaining = new Set<number>(base.map((_, i) => i));
  const order: number[] = [];
  order.push(bestStartIdx); remaining.delete(bestStartIdx);
  while (remaining.size) {
    let nextIdx = Array.from(remaining)[0];
    let bestMin = -1;
    for (const idx of remaining) {
      const l = labs[idx]; if (!l) continue;
      // Distance to closest already-picked colour
      let minD = Infinity;
      for (const o of order) {
        const lo = labs[o]; if (lo) { const d = deltaE76(l, lo); if (d < minD) minD = d; }
      }
      if (minD > bestMin) { bestMin = minD; nextIdx = idx; }
    }
    order.push(nextIdx); remaining.delete(nextIdx);
  }
  return order.map(i => base[i]);
}

function getOptimizedPalette(): string[] {
  if (!optimizedCategoricalPalette) optimizedCategoricalPalette = buildOptimizedCategoricalPalette();
  return optimizedCategoricalPalette;
}

function getRawPalette(): string[] { return getPalette(); }

// --- Extended palette generation for > base length ---
// Creates lightened/darkened variants per base colour cycle while attempting to keep DeltaE separation.
interface RGB { r:number; g:number; b:number }
function labToXyz(L:number,a:number,b:number){
  const y = (L + 16) / 116; const x = a / 500 + y; const z = y - b / 200;
  const f = (t:number)=>{ const t3 = t*t*t; return t3 > 0.008856 ? t3 : (t - 16/116)/7.787; };
  const X = f(x) * 95.047; const Y = f(y) * 100; const Z = f(z) * 108.883; return {X,Y,Z};
}
function xyzToRgb(x:number,y:number,z:number): RGB {
  x/=100; y/=100; z/=100;
  let R = x*3.2406 + y*-1.5372 + z*-0.4986;
  let G = x*-0.9689 + y*1.8758 + z*0.0415;
  let B = x*0.0557 + y*-0.2040 + z*1.0570;
  const linToSrgb = (c:number)=> c <= 0.0031308 ? 12.92*c : 1.055*Math.pow(c,1/2.4)-0.055;
  R = Math.min(1, Math.max(0, linToSrgb(R)));
  G = Math.min(1, Math.max(0, linToSrgb(G)));
  B = Math.min(1, Math.max(0, linToSrgb(B)));
  return { r: Math.round(R*255), g: Math.round(G*255), b: Math.round(B*255) };
}
function rgbToHex(r:number,g:number,b:number){ return `#${[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('')}`; }
function adjustLightness(hex:string, deltaL:number): string {
  const lab = hexToLab(hex); if(!lab) return hex;
  const L = Math.min(100, Math.max(0, lab.L + deltaL));
  const {X,Y,Z} = labToXyz(L, lab.a, lab.b);
  const rgb = xyzToRgb(X,Y,Z);
  return rgbToHex(rgb.r,rgb.g,rgb.b);
}

function buildExtendedPalette(): string[] {
  const base = categoricalStrategy === 'raw' ? getRawPalette() : getOptimizedPalette();
  // Precompute a couple of variant rounds (lighten, darken, lighten+, darken+)
  const deltas = [12, -12, 24, -24];
  const variants: string[][] = deltas.map(d => base.map(c => adjustLightness(c, d)));
  // Interleave: base first, then for each variant level append its colours in optimized order.
  const extended: string[] = [...base];
  variants.forEach(v => extended.push(...v));
  return extended;
}

function getExtendedPalette(): string[] {
  if (!extendedPaletteCache || extendedPaletteCacheStrategyMismatch()) {
    extendedPaletteCache = buildExtendedPalette();
    lastExtendedStrategy = categoricalStrategy;
  }
  return extendedPaletteCache;
}
let lastExtendedStrategy: CategoricalStrategy | null = null;
function extendedPaletteCacheStrategyMismatch() { return lastExtendedStrategy !== categoricalStrategy; }

export function pickSeriesColor(i: number) {
  const ext = getExtendedPalette();
  return ext[i % ext.length];
}

// Export for potential external inspection/testing
export function getCategoricalPalette(): string[] { return [...getPalette()]; }
export function getOptimizedCategoricalPalette(): string[] { return [...getOptimizedPalette()]; }
export function getRawCategoricalPalette(): string[] { return [...getRawPalette()]; }
export function getExtendedCategoricalPalette(): string[] { return [...getExtendedPalette()]; }

// Stroke (contrast outline) tokens
let categoricalStrokeMap: string[] | null = null;
let regionStrokeMap: Record<string,string> | null = null;
let severityStrokeMap: Record<string,string> | null = null;
let orgLevelStrokeMap: Record<string,string> | null = null;

function buildStrokeMaps() {
  const stroke = (dataVizTokens as any)?.color?.['data-viz']?.stroke;
  if (stroke) {
    const cat = stroke.categorical || {};
    categoricalStrokeMap = [];
    for (let i=1;i<=12;i++) {
      const v = cat[String(i)]?.$value || cat[String(i)]?.value;
      categoricalStrokeMap.push(typeof v === 'string' ? v : '#212b32');
    }
    const reg = stroke.region || {};
    regionStrokeMap = {};
    Object.keys(reg).forEach(k => {
      const v = reg[k]?.$value || reg[k]?.value;
      if (typeof v === 'string') regionStrokeMap![k] = v;
    });
    const sev = stroke.severity || {};
    const org = stroke['org-level'] || {};
    orgLevelStrokeMap = {};
    Object.keys(org).forEach(k => {
      const v = org[k]?.$value || org[k]?.value;
      if (typeof v === 'string') orgLevelStrokeMap![k] = v;
    });
    severityStrokeMap = {};
    Object.keys(sev).forEach(k => {
      const v = sev[k]?.$value || sev[k]?.value;
      if (typeof v === 'string') severityStrokeMap![k] = v;
    });
  }
}

function ensureStrokeMaps() {
  if (!categoricalStrokeMap || !regionStrokeMap || !severityStrokeMap || !orgLevelStrokeMap) buildStrokeMaps();
}

export function pickSeriesStroke(i: number) {
  ensureStrokeMaps();
  if (!categoricalStrokeMap) return '#212b32';
  return categoricalStrokeMap[i % categoricalStrokeMap.length];
}

export function getRegionStroke(id: string): string | undefined {
  ensureStrokeMaps();
  return regionStrokeMap ? regionStrokeMap[id] : undefined;
}

export function pickRegionStroke(id: string, fallbackIndex: number): string {
  return getRegionStroke(id) || pickSeriesStroke(fallbackIndex);
}

// Severity colours – semantic alert levels
export const SEVERITY_IDS = [ 'low', 'moderate', 'high', 'critical' ] as const;
export type SeverityId = typeof SEVERITY_IDS[number];
let severityMap: Record<string,string> | null = null;

function buildSeverityMap(): Record<string,string> {
  const root: any = { color: { ...(colorTokens as any).color, ...(dataVizTokens as any).color } };
  const resolve = (path: string, seen: Set<string> = new Set()): string | undefined => {
    if (seen.has(path)) return undefined;
    seen.add(path);
    const node = path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), root);
    if (!node) return undefined;
    const value = node.$value || node.value;
    if (typeof value === 'string' && /^\{.+\}$/.test(value)) return resolve(value.slice(1,-1), seen);
    return typeof value === 'string' ? value : undefined;
  };
  const map: Record<string,string> = {};
  SEVERITY_IDS.forEach(id => {
    const hex = resolve(`color.data-viz.severity.${id}`);
    if (hex) map[id] = hex;
  });
  return map;
}

function getSeverityMap(): Record<string,string> { if (!severityMap) severityMap = buildSeverityMap(); return severityMap; }
export function getSeverityColor(id: string): string | undefined { return getSeverityMap()[id.toLowerCase()]; }
export function pickSeverityColor(id: string, fallbackIndex: number): string {
  return getSeverityColor(id) || getSeverityMap()[SEVERITY_IDS[fallbackIndex % SEVERITY_IDS.length]] || pickSeriesColor(fallbackIndex);
}
export function getSeverityStroke(id: string): string | undefined { ensureStrokeMaps(); return severityStrokeMap ? severityStrokeMap[id] : undefined; }
export function pickSeverityStroke(id: string, fallbackIndex: number): string {
  return getSeverityStroke(id) || pickSeriesStroke(fallbackIndex);
}

// Org-level colours (trust, ambulance, icb, region)
export const ORG_LEVEL_IDS = [ 'trust', 'ambulance', 'icb', 'region' ] as const;
export type OrgLevelId = typeof ORG_LEVEL_IDS[number];
let orgLevelMap: Record<string,string> | null = null;

function buildOrgLevelMap(): Record<string,string> {
  const root: any = { color: { ...(colorTokens as any).color, ...(dataVizTokens as any).color } };
  const resolve = (path: string, seen: Set<string> = new Set()): string | undefined => {
    if (seen.has(path)) return undefined;
    seen.add(path);
    const node = path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), root);
    if (!node) return undefined;
    const value = node.$value || node.value;
    if (typeof value === 'string' && /^\{.+\}$/.test(value)) return resolve(value.slice(1,-1), seen);
    return typeof value === 'string' ? value : undefined;
  };
  const map: Record<string,string> = {};
  ORG_LEVEL_IDS.forEach(id => {
    const hex = resolve(`color.data-viz.org-level.${id}`);
    if (hex) map[id] = hex;
  });
  return map;
}

function getOrgLevelMap(): Record<string,string> { if (!orgLevelMap) orgLevelMap = buildOrgLevelMap(); return orgLevelMap; }
export function getOrgLevelColor(id: string): string | undefined { return getOrgLevelMap()[id.toLowerCase()]; }
export function pickOrgLevelColor(id: string, fallbackIndex: number): string {
  return getOrgLevelColor(id) || getOrgLevelMap()[ORG_LEVEL_IDS[fallbackIndex % ORG_LEVEL_IDS.length]] || pickSeriesColor(fallbackIndex);
}
export function getOrgLevelStroke(id: string): string | undefined { ensureStrokeMaps(); return orgLevelStrokeMap ? orgLevelStrokeMap[id] : undefined; }
export function pickOrgLevelStroke(id: string, fallbackIndex: number): string {
  return getOrgLevelStroke(id) || pickSeriesStroke(fallbackIndex);
}

// Region colours – resolved from tokens; key by region token id (kebab-case)
let regionMap: Record<string,string> | null = null;

// Canonical list of region token ids we currently support (order stable)
export const REGION_IDS = [
  'north-east',
  'north-west',
  'east-of-england',
  'midlands',
  'london',
  'south-west',
  'south-east'
] as const;
export type RegionId = typeof REGION_IDS[number];

// Normalise user supplied id variants (e.g. "North East", "north_east", "NORTH-EAST") to kebab-case token id.
export function normalizeRegionId(id: string): string {
  return id
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-') // collapse any separator chars/spaces/underscores
    .replace(/^-+|-+$/g, '');
}

function buildRegionMap(): Record<string,string> {
  const root: any = { color: { ...(colorTokens as any).color, ...(dataVizTokens as any).color } };
  const resolve = (path: string, seen: Set<string> = new Set()): string | undefined => {
    if (seen.has(path)) return undefined;
    seen.add(path);
    const node = path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), root);
    if (!node) return undefined;
    const value = node.$value || node.value;
    if (typeof value === 'string' && /^\{.+\}$/.test(value)) return resolve(value.slice(1,-1), seen);
    return typeof value === 'string' ? value : undefined;
  };
  const map: Record<string,string> = {};
  const missing: string[] = [];
  REGION_IDS.forEach(id => {
    const hex = resolve(`color.data-viz.region.${id}`);
    if (hex) map[id] = hex; else missing.push(id);
  });
  if (process.env.NODE_ENV !== 'production') {
    if (Object.keys(map).length === 0) {
      console.warn('[DataViz] Region colour tokens unresolved  falling back to categorical colours.');
    } else if (missing.length) {
      console.warn(`[DataViz] Missing region colour tokens: ${missing.join(', ')}.`);
    }
  }
  return map;
}

function getRegionMap(): Record<string,string> {
  if (!regionMap) regionMap = buildRegionMap();
  return regionMap;
}

export function getRegionColor(id: string): string | undefined {
  return getRegionMap()[normalizeRegionId(id)];
}

// Convenience: if consumer passes a region-like id we can attempt to auto-map (normalising first).
export function pickRegionColor(id: string, fallbackIndex: number): string {
  return getRegionColor(id) || pickSeriesColor(fallbackIndex);
}

// Access / maintenance helpers
export function getAvailableRegionIds(): string[] { return [...REGION_IDS]; }

// Allow consumers (e.g. during HMR in Storybook) to clear caches if token file changes at runtime.
export function invalidateColorCaches(options: { regions?: boolean; categorical?: boolean; strokes?: boolean } = {}) {
  const { regions = true, categorical = false, strokes = false } = options;
  if (regions) regionMap = null;
  if (categorical) {
    categoricalPalette = null;
    optimizedCategoricalPalette = null;
    extendedPaletteCache = null;
  }
  if (strokes) {
    categoricalStrokeMap = null;
    regionStrokeMap = null;
  severityStrokeMap = null;
  orgLevelStrokeMap = null;
  }
}

export interface AssignColorOptions {
  palette?: 'categorical' | 'region' | 'severity' | 'org-level';
  random?: boolean; // if true, shuffle palette order before assignment (stable per call)
}

// Assign colours to a mutable copy of the provided series objects; existing explicit s.color is preserved.
export function assignSeriesColors<T extends { id: string; color?: string }>(
  series: T[],
  { palette = 'categorical', random = false }: AssignColorOptions = {}
): T[] {
  const copy = series.map(s => ({ ...s }));
  const paletteValues = palette === 'region'
    ? copy.map((s, i) => pickRegionColor(s.id, i))
    : palette === 'severity'
      ? copy.map((s,i)=> pickSeverityColor(s.id, i))
      : palette === 'org-level'
        ? copy.map((s,i)=> pickOrgLevelColor(s.id, i))
    : (series.length > getOptimizedCategoricalPalette().length
        ? getExtendedCategoricalPalette()
        : (categoricalStrategy === 'optimized'
            ? getOptimizedCategoricalPalette()
            : getRawCategoricalPalette()));

  let order: number[] = palette === 'region'
    ? copy.map((_, i) => i) // region colours already derived per id position
    : palette === 'severity'
      ? copy.map((_, i) => i)
      : palette === 'org-level'
        ? copy.map((_, i) => i)
    : [...Array(paletteValues.length).keys()];
  if (random) {
    // Fisher–Yates
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }
  let cursor = 0;
  copy.forEach((s, si) => {
    if (!s.color) {
      if (palette === 'region') {
        s.color = paletteValues[si];
      } else {
        const idx = order[cursor % order.length];
        s.color = paletteValues[idx];
        cursor++;
      }
    }
  });
  return copy;
}

// ---------------------------------------------------------------------------
// Sequential & Diverging Colour Scale Utilities (token‑agnostic helpers)
// ---------------------------------------------------------------------------

// We intentionally keep these lightweight (no d3 dependency) by reusing the
// CIE Lab helpers above for perceptual interpolation between arbitrary hexes.

function labToHex(L: number, a: number, b: number): string {
  const {X,Y,Z} = labToXyz(L,a,b);
  const { r, g, b: bb } = xyzToRgb(X,Y,Z);
  return rgbToHex(r,g,bb);
}

function interpolateLab(hexA: string, hexB: string, t: number): string {
  const la = hexToLab(hexA); const lb = hexToLab(hexB);
  if (!la || !lb) return t < 0.5 ? hexA : hexB;
  const L = la.L + (lb.L - la.L) * t;
  const a = la.a + (lb.a - la.a) * t;
  const b = la.b + (lb.b - la.b) * t;
  return labToHex(L, a, b);
}

// Piecewise interpolate across an ordered colour array. t in [0,1].
function interpolateMulti(colors: string[], t: number): string {
  if (colors.length === 0) return '#000000';
  if (colors.length === 1) return colors[0];
  const n = colors.length - 1;
  const scaled = t * n;
  const i = Math.min(n - 1, Math.max(0, Math.floor(scaled)));
  const localT = scaled - i;
  return interpolateLab(colors[i], colors[i + 1], localT);
}

export interface SequentialScaleOptions {
  domain: [number, number];
  colors?: string[]; // ordered light -> dark (or vice versa; interpolation is linear across array)
  steps?: number; // if provided with base colours length === 1 generate light/dark variants
  clamp?: boolean;
  baseColor?: string; // fallback single colour (default brand blue)
  lightnessSpan?: number; // total L* delta to distribute either side when auto‑generating
}

/** Create a sequential colour scale (continuous). */
export function createSequentialColorScale({
  domain,
  colors,
  steps = 7,
  clamp = true,
  baseColor = '#005eb8',
  lightnessSpan = 60
}: SequentialScaleOptions) {
  let [d0, d1] = domain;
  if (d0 === d1) { d1 = d0 + 1; } // guard zero range
  if (d1 < d0) { const tmp = d0; d0 = d1; d1 = tmp; }

  let palette: string[] = [];
  if (colors && colors.length > 1) palette = colors.slice();
  else if (colors && colors.length === 1) { baseColor = colors[0]; }
  if (!palette.length) {
    // Auto‑generate by sampling lightness around the base colour.
    const lab = hexToLab(baseColor) || { L: 50, a: 0, b: 0 };
    const half = lightnessSpan / 2;
    // Distribute steps from light (higher L) to dark (lower L)
    const minL = Math.max(2, lab.L - half);
    const maxL = Math.min(98, lab.L + half);
    palette = Array.from({ length: steps }).map((_, i) => {
      const t = i / Math.max(1, steps - 1); // 0..1
      const L = maxL - (maxL - minL) * t; // descending light->dark
      return labToHex(L, lab.a, lab.b);
    });
  }

  const range = d1 - d0;
  return (value: number) => {
    let t = (value - d0) / range; // may be <0 or >1
    if (clamp) t = Math.min(1, Math.max(0, t));
    return interpolateMulti(palette, t);
  };
}

export interface DivergingScaleOptions {
  domain: [number, number, number]; // [min, mid, max]; mid acts as neutral pivot
  colors?: string[]; // >=3 colours; if exactly 3 => [negative, neutral, positive]
  negativeColor?: string; // used if no explicit colours
  positiveColor?: string;
  neutralColor?: string;
  stepsPerSide?: number; // used when auto‑generating from neg/pos + neutral
  clamp?: boolean;
}

/** Create a diverging colour scale. */
export function createDivergingColorScale({
  domain,
  colors,
  negativeColor = '#d5281b', // NHS error/red
  positiveColor = '#007f3b', // NHS green
  neutralColor = '#f2f2f2',
  stepsPerSide = 3,
  clamp = true
}: DivergingScaleOptions) {
  let [d0, dm, d1] = domain;
  // Ensure ordering
  if (!(d0 <= dm && dm <= d1)) {
    const sorted = [d0, dm, d1].sort((a,b)=>a-b);
    [d0, dm, d1] = sorted as [number, number, number];
  }
  if (d0 === d1) { d1 = d0 + 1; dm = d0 + 0.5; }
  if (dm === d0) dm = d0 + (d1 - d0) / 2;
  if (dm === d1) dm = d0 + (d1 - d0) / 2;

  let palette: string[] = [];
  if (colors && colors.length >= 3) palette = colors.slice();
  if (!palette.length) {
    // Auto‑generate side ramps from neg/pos towards neutral (lightening each side)
    const negLab = hexToLab(negativeColor) || { L: 40, a: 60, b: 40 } as any;
    const posLab = hexToLab(positiveColor) || { L: 40, a: -60, b: 40 } as any;
    const neuLab = hexToLab(neutralColor) || { L: 96, a: 0, b: 0 } as any;
    const negRamp = Array.from({ length: stepsPerSide }).map((_, i) => {
      const t = i / Math.max(1, stepsPerSide - 1); // 0..1 towards neutral
      return labToHex(
        negLab.L + (neuLab.L - negLab.L) * t,
        negLab.a + (neuLab.a - negLab.a) * t,
        negLab.b + (neuLab.b - negLab.b) * t
      );
    });
    const posRamp = Array.from({ length: stepsPerSide }).map((_, i) => {
      const t = i / Math.max(1, stepsPerSide - 1);
      return labToHex(
        neuLab.L + (posLab.L - neuLab.L) * t,
        neuLab.a + (posLab.a - neuLab.a) * t,
        neuLab.b + (posLab.b - neuLab.b) * t
      );
    });
    // Combine, ensuring single neutral duplicate removal
    palette = [...negRamp.slice(0, -1), ...posRamp];
  }

  // Build two segments: [d0..dm] and [dm..d1]. We normalise t separately for each half.
  const left = palette.slice(0, Math.ceil(palette.length / 2));
  const right = palette.slice(Math.floor(palette.length / 2));
  return (value: number) => {
    if (clamp) value = Math.min(d1, Math.max(d0, value));
    if (value <= dm) {
      const t = (value - d0) / (dm - d0 || 1);
      return interpolateMulti(left, t);
    }
    const t = (value - dm) / (d1 - dm || 1);
    return interpolateMulti(right, t);
  };
}

// Convenience categorical wrapper that selects between scale factories based on config.
export type ColorScale = (value: number) => string;
export type ColorScaleConfig =
  | ({ type: 'sequential' } & SequentialScaleOptions)
  | ({ type: 'diverging' } & DivergingScaleOptions);

export function createColorScale(config: ColorScaleConfig): ColorScale {
  if (config.type === 'sequential') return createSequentialColorScale(config);
  return createDivergingColorScale(config);
}

