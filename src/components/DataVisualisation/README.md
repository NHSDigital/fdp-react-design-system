# DataVisualisation (MVP)

Initial MVP primitives & LineChart using D3 scales and path generation.

## Components

- `LineSeriesPrimitive` – low-level line renderer (used in compositional charts)
- `Axis` / `GridLines` – primitives for building custom chart layouts
- `VisibilityProvider` – context for managing hidden series state (consumed by `Legend` & primitives)
- `Legend` – color swatches + (optional) interactive show/hide toggling

## Roadmap
- Patterns & high-contrast fills

## Usage

```tsx
<ChartContainer title="Daily admissions" description="14 day rolling" source="Example data">
  <LineChart series={[{ id:'admissions', data: dataArray }]} yLabel="Count" />
</ChartContainer>

## Compositional Pattern

For advanced layouts you can compose primitives directly instead of using the higher-level `LineChart`.

```tsx
<VisibilityProvider>
  <ChartRoot height={320} margin={{ left: 56, bottom: 48, right: 16, top: 12 }} ariaLabel="Admissions over time">
    <LineScalesProvider series={series}> {/* provides x/y scales & ticks */}
      <svg width="100%" height="100%">
        <g transform={`translate(56,12)`}>
          <Axis type="x" autoMinLabelSpacing tickFormatPreset="dayShortMonth" labelAngle={-35} />
          <Axis type="y" label="Admissions" />
          <GridLines axis="y" />
          # DataVisualisation (MVP)

          Initial MVP primitives & LineChart using D3 scales and path generation.

          ## Components

          - `ChartContainer` – semantic wrapper with figure/figcaption & table toggle
          - `LineChart` – multi-series line with focusable points for keyboard nav
          - `LineSeriesPrimitive` – low-level line renderer (used in compositional charts)
          - `Axis` / `GridLines` – primitives for building custom chart layouts
          - `VisibilityProvider` – context for managing hidden series state (consumed by `Legend` & primitives)
          - `Legend` – color swatches + (optional) interactive show/hide toggling

          ## Roadmap

          - Tooltip (hover + focus)
          - Legend (series toggle + color swatches)
          - Area / Bar / Scatter / Choropleth
          - Accessibility announcements (live region)
          - Export (CSV / PNG)
          - Patterns & high-contrast fills

          ## Usage

          ```tsx
          <ChartContainer title="Daily admissions" description="14 day rolling" source="Example data">
            <LineChart series={[{ id: 'admissions', data: dataArray }]} yLabel="Count" />
          </ChartContainer>
          ```

          ## Compositional Pattern

          For advanced layouts you can compose primitives directly instead of using the higher-level `LineChart`.

          ```tsx
          <VisibilityProvider>
            <ChartRoot height={320} margin={{ left: 56, bottom: 48, right: 16, top: 12 }} ariaLabel="Admissions over time">
              <LineScalesProvider series={series}> {/* provides x/y scales & ticks */}
                <svg width="100%" height="100%">
                  <g transform={`translate(56,12)`}>
                    <Axis type="x" autoMinLabelSpacing tickFormatPreset="dayShortMonth" labelAngle={-35} />
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
                        focusIndex={-1}
                        parseX={d => d.x instanceof Date ? d.x : new Date(d.x)}
                      />
                    ))}
                  </g>
                </svg>
              </LineScalesProvider>
            </ChartRoot>
            <Legend items={series.map(s => ({ id: s.id, label: s.label || s.id }))} />
          </VisibilityProvider>
          ```

          ### Visibility Model

          The `VisibilityProvider` supplies a context consumed automatically by:

          - `LineSeriesPrimitive` (series skipped entirely when hidden)
          - `Legend` (becomes interactive without passing `interactive` when a provider is present and no explicit control props are supplied)

          Hidden state semantics:

          | Action | Result |
          |--------|--------|
          | User clicks legend swatch | `toggle(id)` invoked → series removed/returned |
          | `showAll()` | Clears hidden set |
          | `showOnly(id)` (future) | Will hide all other series (currently behaves like `showAll`) |

          #### Controlled vs Uncontrolled

          You can manage hidden ids externally:

          ```tsx
          const [hidden, setHidden] = useState<string[]>([]);
          <VisibilityProvider hiddenIds={hidden} onChange={setHidden}>
            {/* children */}
          </VisibilityProvider>
          ```

          Or rely on the internal set via `initialHiddenIds`.

          ### Legend Integration Rules

          Legend decides its interaction mode as follows:

          1. If `interactive` is true → it manages visibility internally (or controlled via `hiddenIds` / `onVisibilityChange`).
          2. Else, if a `VisibilityProvider` is present and no `hiddenIds` / `onVisibilityChange` props are provided → it delegates to visibility context (zero config).
          3. Otherwise, it renders a static legend.

          ### Styling Hidden Series

          Currently hidden series are fully removed from the DOM (simpler scales, no ghost strokes). If a faded style is preferred, update `LineSeriesPrimitive` to render with reduced opacity instead of returning `null` when hidden.

          ### Axis Overlap Strategies

          The `Axis` primitive offers several props to mitigate label collisions:

          - `autoMinLabelSpacing` – heuristic tick thinning based on pixel distance.
          - `labelAngle={-35}` – rotate labels for dense time series.
          - `maxTickLabelLength` – truncate with ellipsis (full text in `<title>` if added upstream).
          - `allowLabelWrap` – enable multi-line tick labels (splits on whitespace / hyphen heuristics).
          - `tickFormatPreset` – date formatting presets (e.g. `dayShortMonth`).

          Combine these as needed for clarity.

          ### Accessibility Notes

          - Legend provides an aria-live region announcing visibility changes when interactive.
          - Points rendered by `LineSeriesPrimitive` are focusable (`focusablePoints`) enabling keyboard exploration (future: shared tooltip / data summary on focus).
          - Provide `ariaLabel` on `ChartRoot` for assistive context.

          ### Planned (Roadmap Alignment)

          - TooltipContext (shared focused datum, pointer + keyboard parity)
          - Announced summary of the currently focused point / nearest datum
          - `showOnly(id)` full implementation once a registry of series ids is centralised
          - Optional fade instead of removal for hidden series

          ---

          ## API Reference (Key Props)

          | Component | Prop | Type | Description |
          |-----------|------|------|-------------|
          | `VisibilityProvider` | `initialHiddenIds` | `string[]` | Start hidden set (uncontrolled) |
          | `VisibilityProvider` | `hiddenIds` | `string[]` | Controlled hidden ids |
          | `VisibilityProvider` | `onChange` | `(hidden: string[]) => void` | Controlled change callback |
          | `Legend` | `items` | `LegendItem[]` | Swatch definitions (id + label + optional colour) |
          | `Legend` | `interactive` | `boolean` | Force internal interactive mode |
          | `Legend` | `hiddenIds/onVisibilityChange` | - | Controlled interactive legend |
          | `LineSeriesPrimitive` | `series` | `{ id; data; }` | Data points (x numeric/date/string convertible to Date, y number) |
          | `LineSeriesPrimitive` | `palette` | `'categorical' \| 'region'` | Colour strategy |
          | `Axis` | `type` | `'x' \| 'y'` | Axis orientation |
          | `Axis` | `autoMinLabelSpacing` | `boolean` | Heuristic tick thinning |
          | `Axis` | `labelAngle` | `number` | Rotate labels (deg) |
          | `Axis` | `tickFormatPreset` | preset key | Built-in date formatting |

          ---

          ## Migration Notes

          If you previously maintained series visibility state manually in a story/component:

          1. Wrap chart+legend in `<VisibilityProvider>`.
          2. Remove custom toggle handlers & hidden filtering logic.
          3. Pass the full series array to `LineScalesProvider` (hidden series are skipped before render; if domain exclusion is required, supply only visible series to the provider instead). Future enhancement may offer automatic domain recalculation excluding hidden series via an option.

          ## Examples

          See `CompositionalLineChart.stories.tsx` for a full composition using visibility context.
