/** Stacking utilities for area & bar charts.
 * Pure helpers so they can be unit tested without React.
 */

export interface StackInputDatum { x: Date | string | number; y: number; }
export interface StackSeries<T extends StackInputDatum = StackInputDatum> { id: string; data: T[]; }

export type StackedDatum<T extends StackInputDatum = StackInputDatum> = T & {
  /** lower y (baseline) */ y0: number; /** upper y */ y1: number;
};

export interface StackedSeries<T extends StackInputDatum = StackInputDatum> extends StackSeries<T> {
  stacked: StackedDatum<T>[];
  totalAtX?: (index: number) => number;
}

export interface StackOptions {
  /** Treat negative and positive separately (diverging) */
  separateNegative?: boolean;
  /** Fill gaps (missing x across series) with y=0 entries */
  normaliseDomains?: boolean;
  /** Optional custom key extractor for x grouping (stringify fallback) */
  keyFn?: (x: StackInputDatum['x']) => string;
}

/**
 * stackSeries – naive vertical stacking (simple sum accumulation).
 * Assumes all series share the same ordered x domain; can optionally normalise.
 */
export function stackSeries<T extends StackInputDatum = StackInputDatum>(series: StackSeries<T>[], opts: StackOptions = {}): StackedSeries<T>[] {
  const { separateNegative = false, normaliseDomains = true, keyFn = (x => String(x)) } = opts;
  if (!series.length) return [];
  // Build master domain
  let domainKeys: string[] = [];
  let domainValues: (T['x'])[] = [];
  if (normaliseDomains) {
    const keySet = new Map<string, T['x']>();
    series.forEach(s => s.data.forEach(d => { const k = keyFn(d.x); if (!keySet.has(k)) keySet.set(k, d.x); }));
    domainKeys = Array.from(keySet.keys());
    domainValues = Array.from(keySet.values());
    // Preserve ordering: assume original insertion order approximates sorted order (caller can pre-sort)
  }
  return series.map(s => {
    const stacked: StackedDatum<T>[] = [];
    const byKey = new Map<string, T>();
    s.data.forEach(d => byKey.set(keyFn(d.x), d));
    const iterate = normaliseDomains ? domainKeys : s.data.map(d => keyFn(d.x));
    iterate.forEach((k, i) => {
  const original = byKey.get(k);
  const xVal = normaliseDomains ? domainValues[i] : (original ? original.x : (s.data[i]?.x as any));
  const yRaw = original ? original.y : 0;
      // For cumulative baseline we need totals from prior series at same index.
      // We'll compute after constructing all series (second pass) for clarity.
      stacked.push(Object.assign({} as any, original || { x: xVal, y: 0 }, { y0: 0, y1: yRaw }));
    });
    return { id: s.id, data: s.data, stacked } as StackedSeries<T>;
  }).map((s, si, arr) => {
    s.stacked.forEach((d, idx) => {
      const rawValue = d.y1 - d.y0; // original value before stacking (since initial y0=0)
      let base = 0;
      for (let pj = 0; pj < si; pj++) {
        const prev = arr[pj].stacked[idx];
        if (!prev) continue;
        const prevVal = prev.y1 - prev.y0;
        if (separateNegative) {
          const curIsNeg = rawValue < 0;
          const prevIsNeg = prevVal < 0;
          if (curIsNeg === prevIsNeg) base += prevVal;
        } else {
          base += prevVal;
        }
      }
      d.y0 = base;
      d.y1 = base + rawValue;
    });
    (s as StackedSeries<T>).totalAtX = (i: number) => arr.reduce((sum, sr) => sum + (sr.stacked[i] ? (sr.stacked[i].y1 - sr.stacked[i].y0) : 0), 0);
    return s;
  });
}

/** Simple 100% normalisation (each x total -> 1). */
export function normaliseStack<T extends StackInputDatum = StackInputDatum>(stacked: StackedSeries<T>[]): StackedSeries<T>[] {
  if (!stacked.length) return stacked;
  const count = stacked[0].stacked.length;
  for (let i=0;i<count;i++) {
    const total = stacked.reduce((sum,s) => sum + (s.stacked[i] ? (s.stacked[i].y1 - s.stacked[i].y0) : 0), 0) || 1;
    let running = 0;
    for (let si=0; si<stacked.length; si++) {
      const seg = stacked[si].stacked[i];
      if (!seg) continue;
      const val = seg.y1 - seg.y0;
      const ratio = val / total;
      seg.y0 = running;
      running += ratio;
      seg.y1 = running;
    }
  }
  return stacked;
}
