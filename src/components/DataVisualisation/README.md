# Data Visualisation Primitives & Composition

This module provides both higher‑level chart components (e.g. `LineChart`, `SPCChart`) and a **fully composable primitive layer** so consumers can assemble bespoke charts without forking internals.

> Canonical SPC import path: `import { SPCChart } from '@nhsdigital/fdp-design-system/components/DataVisualisation'` (which resolves to `charts/SPC/SPCChart/...`). A previous flat path `charts/SPCChart/SPCChart` has been removed to eliminate duplicate Storybook/docgen scanning. If you previously referenced the flat path, update imports to the canonical path.

## At a Glance

- High‑level: `LineChart`, `ChartContainer`, `SPCChart`, `ChartWithTableTabs`, `FilterableLineChart`
- Core layout: `ChartRoot`, `useChartContext`
- Scale contexts: `LineScalesProvider`, `BandScalesProvider`, `useScaleContext`
- Series primitives: `LineSeriesPrimitive`, `AreaSeriesPrimitive`, `BarSeriesPrimitive`
- Structural primitives: `Axis`, `GridLines`, `Legend`, `TooltipOverlay`, `VisuallyHiddenLiveRegion`
- Behaviour / state: `VisibilityProvider`, `useVisibility`, `TooltipProvider`, `useTooltipContext`

All are exported from the DataVisualisation barrel so you can import them together:

```ts
import {
	ChartRoot,
	useChartContext,
	LineScalesProvider,
	BandScalesProvider,
	Axis,
	GridLines,
	Legend,
	TooltipProvider,
	TooltipOverlay,
	LineSeriesPrimitive,
	AreaSeriesPrimitive,
	BarSeriesPrimitive,
	VisibilityProvider,
	useVisibility,
	SPCChart,
	SPC, // namespace (engine, descriptors, icons)
	ChartNoScript,
	ChartEnhancer,
	MetricCard,
} from "@nhsdigital/fdp-design-system";
```

> Tree‑shaking: Only the primitives you import are pulled into your bundle when using a modern bundler (ESM build).

---

## Quick Start (High‑Level)

```tsx
<ChartContainer
	title="Daily admissions"
	description="14 day rolling"
	source="Example data"
>
	<LineChart series={[{ id: "admissions", data }]} yLabel="Count" />
</ChartContainer>
```

---

## Composing Your Own Chart

Below is a minimal **custom line chart** using primitives (no `LineChart` wrapper):

```tsx
const series = [
	{ id: "a", data: dataA },
	{ id: "b", data: dataB },
];

<VisibilityProvider>
	<ChartRoot
		height={320}
		margin={{ left: 56, bottom: 48, right: 16, top: 12 }}
		ariaLabel="Admissions over time"
	>
		<LineScalesProvider series={series}>
			<svg width="100%" height="100%">
				<g transform={`translate(56,12)`}>
					<Axis
						type="x"
						autoMinLabelSpacing
						tickFormatPreset="dayShortMonth"
						labelAngle={-35}
					/>
					<Axis type="y" label="Admissions" />
					<GridLines axis="y" />
					{series.map((s, i) => (
						<LineSeriesPrimitive
							key={s.id}
							series={s}
							seriesIndex={i}
							palette="categorical"
							showPoints
							focusablePoints
							parseX={(d) => (d.x instanceof Date ? d.x : new Date(d.x))}
						/>
					))}
				</g>
			</svg>
		</LineScalesProvider>
	</ChartRoot>
	<Legend items={series.map((s) => ({ id: s.id, label: s.id }))} />
</VisibilityProvider>;
```

### Stacked Bars (Absolute)

```tsx
const categories = ['Alpha','Bravo','Charlie'];
const raw = [0,1,2].map(i => ({
  id: `s${i+1}`,
  data: categories.map(c => ({ x: c, y: Math.round(5 and Math.random()*30) }))
}));
const stacked = stackSeries(raw as any); // helper provided in utils/stack

<ChartRoot width={640} height={300} margin={{ left:56, bottom:48, right:16, top:12 }} ariaLabel="Stacked bar chart">
  <BandScalesProvider
    series={stacked.map(s => ({ data: s.stacked.map(d => ({ x: d.x, y: d.y1 })) })) as any}
  >
    <TooltipProvider>
      <svg width="100%" height="100%">
        <g transform={`translate(56,12)`}>
          <GridLines axis="y" />
          {stacked.map((s,i) => (
            <BarSeriesPrimitive
              key={s.id}
              series={{ id: s.id, data: s.stacked.map(d => ({ x: d.x, y: d.y1 - d.y0 })) }}
              stacked={s.stacked.map(d => ({ y0: d.y0, y1: d.y1 }))}
              seriesIndex={i}
              seriesCount={1}
              palette="categorical"
              parseX={d => d.x}
            />
          ))}
          <Axis type="y" />
          <Axis type="x" />
        </g>
      </svg>
      <Legend items={stacked.map(s => ({ id: s.id, label: s.id }))} />
      <VisuallyHiddenLiveRegion />
    </TooltipProvider>
  </BandScalesProvider>
</ChartRoot>
```

### Scrollable Continuous Bars

See `BarChart.stories.tsx` (export `ContinuousManyBarsScrollable`) for a wide time‑series bar configuration using `LineScalesProvider` and `computeContinuousBarChartTotalWidth`.

---

## Hook & Context Reference

| Hook                | Purpose                                                                 |
| ------------------- | ----------------------------------------------------------------------- |
| `useChartContext`   | Layout dimensions (inner width/height, margins) prepared by `ChartRoot` |
| `useScaleContext`   | Access x/y scales & ticks from scales providers                         |
| `useVisibility`     | Read / toggle hidden series state                                       |
| `useTooltipContext` | Access current tooltip datum (when using `TooltipProvider`)             |

---

## Visibility Model

Provided by `VisibilityProvider` and automatically consumed by primitives & `Legend`.

Hidden IDs are stored internally (uncontrolled) unless you supply `hiddenIds` and `onChange` for a controlled pattern.

Legend behaviour:

1. `interactive` prop forces interactive mode.
2. If a provider is present and no explicit visibility props are passed, it becomes interactive automatically.
3. Otherwise it renders static labels.

Hidden series are currently removed from the DOM. (Future enhancement: optional faded rendering.)

---

## Axis Overlap Strategies

Combine these props as needed:

- `autoMinLabelSpacing`
- `labelAngle`
- `allowLabelWrap`
- `maxTickLabelLength`
- `tickFormatPreset`

---

## Accessibility

- Always set an informative `ariaLabel` on `ChartRoot`.
- `VisuallyHiddenLiveRegion` announces dynamic changes (legend toggles, future tooltip updates).
- Focusable points (`focusablePoints` on `LineSeriesPrimitive`) enable keyboard data exploration.
- `ChartNoScript` can be co‑located to provide a static fallback representation.

---

## Components vs Data Shape

- Components: the “what” you’re visualising — e.g., people (patients, staff), events (attendances, harms), organisations (trust/site/PCN), services/pathways, geographies, time periods, or categorical reasons. This is the unit of analysis.
- Data shape: the “form/structure” — `time_series` (over time), `categories` (groups), `hierarchy` (nested categories), `matrix` (multiple variables per item), `spatial` (areas/points).
- Measure type: the “how measured” — counts, rates/proportions/percentages, continuous values (e.g., LOS), categorical outcomes.

The wizard captures components → shape → measure → cardinality early to steer recommendations (e.g., funnel plots when comparing unit rates with varying denominators; run/SPC for time series; Pareto for contributor prioritisation).

---

## API Snapshot (Selected Props)

| Component             | Key Props                                                                                                                   | Notes                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ChartRoot`           | `height`, `margin`, `width`, `ariaLabel`                                                                                    | Provides layout and context                                         |
| `LineScalesProvider`  | `series`, `parseX?`, `yDomain?`                                                                                             | Time/continuous / numeric domains                                   |
| `BandScalesProvider`  | `series`, `bandPadding?`                                                                                                    | Categorical / grouped bars                                          |
| `LineSeriesPrimitive` | `series`, `palette`, `showPoints`, `focusablePoints`, `parseX`, `colors?`                                                   | Low‑level line rendering (custom palette via `colors`)              |
| `BarSeriesPrimitive`  | `series`, `seriesIndex`, `seriesCount`, `stacked?`, `groupGap?`, `opacity?`, `fadedOpacity?`, `flatFillOpacity?`, `colors?` | Grouped / stacked bars with configurable opacity & palette override |
| `AreaSeriesPrimitive` | Same as line plus `baseline?`, `colors?`                                                                                    | Area under line (custom palette)                                    |
| `Axis`                | `type`, `formatTick?`, `tickValues?`, `autoMinLabelSpacing?`                                                                | Shared x/y axis component                                           |
| `GridLines`           | `axis`                                                                                                                      | Horizontal or vertical grid lines                                   |
| `Legend`              | `items`, visibility props                                                                                                   | Integrates with `VisibilityProvider`                                |
| `VisibilityProvider`  | `hiddenIds?`, `onChange?`, `initialHiddenIds?`                                                                              | Series visibility state                                             |
| `TooltipProvider`     | children                                                                                                                    | Context for future pointer/focus tooltips                           |
| `TooltipOverlay`      | (no props)                                                                                                                  | Absolute overlay inside `ChartRoot`                                 |

---

## Migration Notes

If you rolled your own visibility toggling previously:

1. Wrap chart and legend with `VisibilityProvider`.
2. Remove manual filtering; pass full series list to scales provider.
3. (Optional) implement controlled mode via `hiddenIds` and `onChange`.

---

## Examples in Repo

| File                                 | Demonstrates                                |
| ------------------------------------ | ------------------------------------------- |
| `CompositionalLineChart.stories.tsx` | Multi‑series line composition               |
| `BarChart.stories.tsx`               | Stacked, percent, grouped & scrollable bars |
| `SPCChart` and `SPC` namespace       | Statistical process control primitives      |

---

## Roadmap (Next Iterations)

- Shared tooltip interactions (pointer and keyboard parity)
- Live announcements of focused datum
- Optional fade for hidden series instead of removal
- Export utilities (CSV / PNG)
- Pattern fills & high‑contrast accessibility themes

---

Have a composition requirement not covered here? Raise an issue or PR with the desired primitive behaviour.

---

## Custom Colour Palettes

All three series primitives (`LineSeriesPrimitive`, `AreaSeriesPrimitive`, `BarSeriesPrimitive`) now accept an optional `colors` prop (array of strings). The precedence model ensures backwards compatibility:

1. `series.color` (per‑series explicit override)
2. `colors[seriesIndex]` (for line / area / bar when `colorMode="series"`)
3. `colors[datumIndex]` (for bars when `colorMode="category"`)
4. Internal categorical / region palette fallbacks

Example applying an 8‑colour Viridis palette (user supplied constant):

```tsx
const VIRIDIS_8 = [
	"#440154",
	"#482677",
	"#3E4989",
	"#31688E",
	"#26828E",
	"#1F9E89",
	"#35B779",
	"#73D055",
];

<ChartRoot height={300} ariaLabel="Custom palette bars">
	<BandScalesProvider series={series}>
		{" "}
		{/* series: BarSeries[] */}
		<svg width="100%" height="100%">
			<g transform={`translate(56,12)`}>
				{series.map((s, i) => (
					<BarSeriesPrimitive
						key={s.id}
						series={s}
						seriesIndex={i}
						seriesCount={series.length}
						palette="categorical"
						parseX={(d) => d.x as string}
						colors={VIRIDIS_8}
					/>
				))}
				<Axis type="y" />
				<Axis type="x" />
			</g>
		</svg>
	</BandScalesProvider>
</ChartRoot>;
```

For a multi‑line chart:

```tsx
<LineScalesProvider series={lineSeries}>
	<svg width="100%" height="100%">
		<g transform={`translate(56,12)`}>
			{lineSeries.map((s, i) => (
				<LineSeriesPrimitive
					key={s.id}
					series={s}
					seriesIndex={i}
					palette="categorical"
					showPoints
					focusablePoints
					parseX={(d) => d.x as Date}
					colors={VIRIDIS_8}
				/>
			))}
		</g>
	</svg>
</LineScalesProvider>
```

Category mode bars (different colour per datum within a single series):

```tsx
<BarSeriesPrimitive
	series={singleSeries}
	seriesIndex={0}
	seriesCount={1}
	palette="categorical"
	parseX={(d) => d.x as string}
	colorMode="category"
	colors={VIRIDIS_8}
/>
```

If the palette array is shorter than the number of series / categories, remaining items fall back to internal palette values.

---

## Bar colours, opacity, and gradients

BarSeriesPrimitive exposes a small set of props to control fills, strokes, opacity, and gradients. Defaults are chosen to be clear and accessible out of the box.

- colors?: string[]
	- Optional explicit palette. Precedence: series.color > colors[...] > internal palette.
	- With colorMode="series" (default), colors[seriesIndex] is used.
	- With colorMode="category", colors[datumIndex] is used per bar.
- colorMode?: "series" | "category" (default: "series")
	- Switch to "category" for a different colour per bar within one series.
- opacity?: number (default: 1)
	- Overall group opacity for the series &lt;g&gt;, applied to visible bars. Hidden series with visibilityMode="fade" use fadedOpacity instead.
- fadedOpacity?: number (default: 0.25)
	- Opacity when a series is hidden and visibilityMode is "fade".
- flatFillOpacity?: number (default: 1)
	- Applied to rect when gradientFill=false (flat colour mode).
- gradientFill?: boolean (default: false)
	- When true, bars use a vertical gradient (stronger at top, softer toward baseline). When false, solid flat fill is used.
- gradientStrokeMatch?: boolean (default: true)
	- When gradientFill=true, match stroke to the bar’s base colour. If false, stroke falls back to a dark token via CSS.

Stroke for stacked segments: When gradientStrokeMatch is false (or gradientFill is false) stacked bars fall back to a CSS variable: --nhs-fdp-chart-stacked-stroke (default #212b32).

Examples

1) Flat colours (default):

<BarSeriesPrimitive
  series={s}
  seriesIndex={i}
  seriesCount={n}
  palette="categorical"
  parseX={parse}
  // gradientFill defaults to false
  // flatFillOpacity defaults to 1
  // opacity defaults to 1
/>

2) Enable gradients with matched stroke:

<BarSeriesPrimitive
	{...common}
	gradientFill
	gradientStrokeMatch
/>

3) Custom palette per series and semi‑transparent group:

<BarSeriesPrimitive
	{...common}
	colors={['#1b9e77','#d95f02','#7570b3']}
	opacity={0.85}
/>

4) Per‑category colours within one series, no gradient, 80% fill opacity:

<BarSeriesPrimitive
	series={oneSeries}
	seriesIndex={0}
	seriesCount={1}
	palette="categorical"
	parseX={parse}
	colorMode="category"
	colors={['#264653','#2a9d8f','#e9c46a','#f4a261','#e76f51']}
	gradientFill={false}
	flatFillOpacity={0.8}
/>

Quick recipes

- No gradient, fully opaque (default): omit both props; you can also set gradientFill={false} explicitly for clarity.
- Subtle gradient: gradientFill; keep gradientStrokeMatch (default) for colour‑matched stroke.
- High‑contrast stroke on gradients: gradientFill with gradientStrokeMatch={false}; customise stroke with CSS var if needed.
- Global transparency layer: set opacity to fade a whole series without changing fill.
