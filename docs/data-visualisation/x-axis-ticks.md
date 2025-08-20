# LineChart X‑Axis Tick Alignment

The `LineChart` supports three modes for generating x‑axis ticks. Choosing the right mode balances clarity, density, and how precisely labels map to data points.

## Precedence

1. `xTickValues` (explicit list – highest precedence)
2. `alignXTicksToData` (boolean)
3. Automatic "nice" ticks (default)

## 1. Automatic (default)

Treats the x domain (typically time) as continuous.

- Produces “nice” interval ticks (e.g. hours, days, weeks, months) sized to available width.
- Applies collision avoidance / thinning for legibility.
- Some ticks may not match exact data x values – that’s intentional, surfacing the underlying timeline and gaps.

Use when: data are regularly spaced OR you want a temporal frame and consistent cadence across charts.

## 2. Data‑aligned (`alignXTicksToData`)

Builds ticks from the unique x values across all series (sorted) and renders every one.

- No thinning to preserve a 1:1 label ↔ point correspondence.
- Guarantees each plotted point sits over its label.
- Risk of over‑crowding with dense or multi‑series datasets.

Use when: sparse or event-based data (e.g. releases, survey waves) where every observation must be explicitly labeled.

## 3. Explicit (`xTickValues`)

You provide an exact array of tick values.

- Skips internal thinning (assumes you curated density).
- Overrides `alignXTicksToData` if both are present.

Use when: a fixed reporting cadence (e.g. month starts, quarter ends) or when comparing multiple charts that must share identical ticks.

## Decision Guide

| Goal | Recommended Mode |
|------|------------------|
| General readability, adaptive density | Automatic |
| Exact label under every point, small N | alignXTicksToData |
| Fixed corporate cadence / cross-chart alignment | xTickValues |

## Accessibility & Performance Notes

- Large unions of x values (multi-series) can grow tick count quickly; prefer Automatic or a pruned `xTickValues` set.
- If labels wrap or rotate excessively with Data‑aligned mode, switch back or explicitly curate.
- Tooltips and keyboard navigation are independent of tick mode.

## API Example

```tsx
<LineChart
  series={series}
  xTickValues={[...explicitDates]}   // highest precedence
  alignXTicksToData                  // ignored if xTickValues provided
  // ...other props
/>
```

## Future Enhancements (Potential)

- Heuristic: auto‑switch to data‑aligned only when unique x count ≤ threshold.
- Sub‑sampling: render every Nth data x to balance alignment & density.

## FAQ

**Why not make `alignXTicksToData` the default?**  
Because continuous, interval‑based ticks scale better, expose temporal gaps, and remain legible across a wide range of widths without exploding label count.

**What if I need both alignment and thinning?**  
Provide `xTickValues` with a manually thinned subset of your data x values.

**How do I ensure consistent ticks across multiple charts?**  
Compute a shared `xTickValues` array and pass it to each `LineChart`.
