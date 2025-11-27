# SimpleBarChart

A minimal, ergonomic bar chart for categorical data. Accepts flat data and applies NHS FDP data‑viz defaults so you don’t need to wire primitives by hand.

- Input data: object, array of {label,value}, or array of [label, value]
- Default style: flat fills (no gradient), full opacity, categorical palette (distinct colour per bar)
- Accessibility: requires an ariaLabel describing the chart

## When to use

- Quick, small categorical bar charts
- Prototyping without composing providers/series primitives

For advanced layouts (stacked, grouped multi‑series, scrollable continuous) use the low‑level primitives documented in Data Visualisation README.

## API

SimpleBarChart props:

- data: Record<string, number> | Array<{ label: string; value: number }> | Array<[string, number]>
- ariaLabel: string
- width?: number (default 720)
- height?: number (default 320)
- margin?: { left: number; right: number; top: number; bottom: number } (default { left:56, bottom:48, right:16, top:12 })
- yLabel?: string
- palette?: "categorical" | "region" (default "categorical")
- colors?: string[] (explicit palette override)
- colorMode?: "series" | "category" (default "category" so each bar can be distinct)
- groupGap?: number
- minBarWidth?: number
- gradient?: boolean (default false; opt‑in for vertical gradient)
- opacity?: number (default 1)
- flatFillOpacity?: number (default 1)

## Examples

Object input (auto colour per category):

```tsx
import { SimpleBarChart } from "@nhsdigital/nhs-fdp-design-system/components/DataVisualisation";

<SimpleBarChart ariaLabel="Top categories" data={{ A: 5, B: 10, C: 7, D: 12 }} />
```

Array of objects:

```tsx
<SimpleBarChart
  ariaLabel="Scores by team"
  data={[{ label: "Alpha", value: 8 }, { label: "Bravo", value: 14 }, { label: "Charlie", value: 6 }]}
  yLabel="Score"
/>
```

Custom palette:

```tsx
<SimpleBarChart
  ariaLabel="Custom palette"
  data={{ One: 9, Two: 11, Three: 4, Four: 13 }}
  colors={["#1b9e77", "#d95f02", "#7570b3", "#e7298a"]}
/>
```

Opt‑in gradient style:

```tsx
<SimpleBarChart ariaLabel="Gradient bars" data={{ A: 4, B: 9, C: 12 }} gradient />
```

## Notes

- By default, bars are rendered without gradients and at full opacity for clarity.
- If you need grouped or stacked bars, switch to the compositional primitives: BandScalesProvider + BarSeriesPrimitive (see Data Visualisation README and BarChart stories).
