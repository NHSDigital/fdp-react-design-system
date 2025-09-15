// Optional preprocessing helpers to derive interval series for T and G charts.
// These helpers are intentionally simple and make no statistical guarantees; they are
// provided to shape raw event streams into interval/count sequences suitable for XmR-like
// processing or for future T/G chart implementations.

export interface EventLike { x: string | number | Date }

// Convert a sorted series of event times into time-between-events intervals.
// If there are fewer than 2 events, returns an empty array.
export function toTimeBetweenEvents<T extends EventLike>(
  events: T[],
  opts?: { toMillis?: (x: T["x"]) => number }
) {
  const toMs = opts?.toMillis ?? ((x: T["x"]) => new Date(x as any).getTime());
  const res: Array<{ x: T["x"]; value: number } > = [];
  if (events.length < 2) return res;
  for (let i = 1; i < events.length; i++) {
    const prev = toMs(events[i - 1].x);
    const cur = toMs(events[i].x);
    res.push({ x: events[i].x, value: Math.max(0, cur - prev) });
  }
  return res;
}

// Convert a stream of daily (or period) event markers into counts between events over a sliding window.
// Simplest form: given booleans or numbers per day, emit the distance since the previous non-zero occurrence.
export function toCountBetweenEvents<T extends { x: string | number | Date; occurred?: boolean | number }>(
  rows: T[]
) {
  const res: Array<{ x: T["x"]; value: number } > = [];
  let since = 0;
  for (const r of rows) {
    since += 1;
    const hit = typeof r.occurred === 'number' ? r.occurred > 0 : !!r.occurred;
    if (hit) {
      res.push({ x: r.x, value: since });
      since = 0;
    }
  }
  return res;
}
