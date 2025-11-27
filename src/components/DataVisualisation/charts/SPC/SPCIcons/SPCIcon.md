# SPC Icons – NHS FDP Design System

`SPCVariationIcon` (and companion `SPCAssuranceIcon`) provide accessible SPC variation and assurance glyphs. They support multiple semantic payload shapes, three visual variants, unified direction inference, and an optional lighter gradient wash.

## Import Routes

The design system publishes multiple entry points (barrels) so you can balance bundle size, ergonomics, SSR needs, and tree‑shaking. Below are the recommended import patterns for SPC icons.

### 1. Root (all components)

```ts
import { SPCVariationIcon, SPCAssuranceIcon } from '@nhsdigital/nhs-fdp-design-system';
```

Pros: simplest.  Cons: pulls the full top‑level bundle; rely on ESM tree‑shaking.

### 2. Data Visualisation aggregate

```ts
import { SPC } from '@nhsdigital/nhs-fdp-design-system/components/DataVisualisation';

<SPC.SPCVariationIcon data={...} />
```

Pros: Namespaced (`SPC.*`) keeps imports tidy when mixing chart primitives.  Cons: Still loads wider data‑viz barrel.

### 3. SPC sub‑barrel (preferred for SPC pages)

```ts
import { SPCVariationIcon, SPCAssuranceIcon, VariationJudgement, MetricPolarity } from '@nhsdigital/nhs-fdp-design-system/components/DataVisualisation/charts/SPC';
```

Pros: Only SPC related code; concise; stable surface (icons and engine and descriptors).

### 4. Deep path (maximal tree‑shaking / micro import)

```ts
import { SPCVariationIcon } from '@nhsdigital/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCIcons/SPCIcon';
```

Use when a build tool is configured to allow deep ESM paths (e.g. internal apps). Avoid for public packages (path may change in minors).

### 5. SSR specific entry

If you render on the server and want only SSR‑safe exports (no client behaviours):

```ts
import { SPCVariationIcon } from '@nhsdigital/nhs-fdp-design-system/ssr';
```

Check the `ssr` entry for availability; falls back to core components with SSR guarantees.

### 6. Pure (no side‑effects) entry

```ts
import { SPCVariationIcon } from '@nhsdigital/nhs-fdp-design-system/pure';
```

Provides the root build minus CSS side‑effects (you must include CSS separately) – useful in micro‑frontend bundling.

### 7. CSS / Styling

Include the base CSS once (usually at app root):

```ts
import '@nhsdigital/nhs-fdp-design-system/css';
// or just Data Visualisation layer:
import '@nhsdigital/nhs-fdp-design-system/components/DataVisualisation/css';
```

Triangle variants share the same base styles (pure SVG) so no extra CSS import is required beyond the design system base.

### 8. Assorted Tokens / Engine Enums

When you need enums without the icon component code:

```ts
import { VariationJudgement, MetricPolarity, Direction } from '@nhsdigital/nhs-fdp-design-system/components/DataVisualisation/charts/SPC';
```

### Choosing an Import Route

| Scenario | Recommended Route |
|----------|------------------|
| Full app already using many DS components | Root import |
| SPC dashboard / analytics view | SPC sub‑barrel |
| Performance‑sensitive micro import | Deep path (internal only) |
| SSR constrained environment | `ssr` entry |
| Micro‑frontend controlling CSS separately | `pure` and explicit CSS import |

> Tip: keep a single consistent pattern per app to avoid duplicate bundles in some bundlers.

## Variation States

* Special Cause Improving – sustained run or signal indicating improvement.
* Special Cause Deteriorating – sustained run or signal indicating deterioration.
* Common Cause – random (in-control) variation only.
* Special Cause No Judgement – a special cause shift without assigning better/worse.

## Colour System

* Palette defined in `VARIATION_COLOURS` (sourced from SPC engine tokens).
* Each state provides hex, label, description, and computed accessible text colour.

## Icon Payloads (Unified)

All payload shapes are normalised internally by `resolveStateAndLayout` to `{ state, direction, polarity }`:

1. **Direct State (V1 / legacy)**: `{ state, trend?, polarity? }`
2. **Engine Icon (V1.5)**: `{ variationIcon, trend?, polarity? }` where `variationIcon` is the SPC engine `VariationIcon` enum (Improvement | Concern | Neither | None).
3. **Derived (V2)**: `{ judgement, polarity, trend? }` – preferred for most UI code; expresses *what the statistical test concluded* not *how to draw the glyph*.
4. **Parsimonious (Strict V2)**: Narrow union enforcing explicit `trend` only when it cannot be reliably inferred (neutral/none judgements or context‑dependent polarity). This improves compile‑time safety.

> All four inputs are still accepted – no breaking change – but new code should favour the **Derived** or **Engine Icon** form.

## Direction / Trend Inference

* `direction` selects geometry (higher vs lower point layout, triangle orientation, arrow rotation, and H/L when `letterMode="direction"`).
* When omitted, direction is inferred for improving / deteriorating judgements from polarity (see table below). Neutral judgements (`no_judgement`, `none`) default to `higher` **unless** an explicit `trend` is supplied – you should supply one for accuracy.

## Accessibility

* `aria-label` auto‑generated (override with `ariaLabel`).
* `aria-description` produced by `deriveVariationAriaDescription` (includes polarity & narrative context when supplied).
* Decorative SVG elements are marked / implicit as non-accessible.

## Usage

```tsx
import { SPCVariationIcon } from "./SPCIcon";
import { VariationJudgement, MetricPolarity, Direction } from "./SPCConstants";

// Derived payload (preferred)
<SPCVariationIcon data={{ judgement: VariationJudgement.Improving, polarity: MetricPolarity.HigherIsBetter }} />

// Engine payload
<SPCVariationIcon data={{ variationIcon: VariationIcon.Improvement, polarity: MetricPolarity.HigherIsBetter }} />

// Triangle with run markers
<SPCVariationIcon
 variant="triangleWithRun"
 runLength={4}
 data={{ judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.HigherIsBetter }}
/>;
```

## Visual Variants

| Variant | Prop Value | Purpose | Notes |
|---------|------------|---------|-------|
| Classic (default) | `variant="classic"` | Original ring and 5 points | Last two points recoloured for special cause states. |
| Triangle | `variant="triangle"` | Large directional triangle / flat line | Orientation driven by inferred `direction` (not merely judgement). |
| Triangle and Run | `variant="triangleWithRun"` | Compact triangle plus 5 recent run markers | `runLength` (0–5) highlights most recent sequence consistent with special cause state. |

Shared options: `gradientWash` (lighter v2 wash), `dropShadow`, `size`.

### Rendering Logic (Summary)

* Special cause (improving/deteriorating): coloured ring and two highlighted points (classic) or a triangle (triangle variants) and optional letter.
* Special cause no judgement: arrow glyph (classic) or oriented triangle (triangle variants) – no letter.
* Common cause: neutral grey ring & points; no letter or arrow glyph.
* Triangle variants: orientation reflects `direction` so an improving metric where “lower is better” points **downwards** (direction = lower) – aligns visual semantics with actual statistical movement.

## API Reference

* `SPCVariationIcon`
* `SPCAssuranceIcon`
* `resolveStateAndLayout`
* `deriveVariationAriaDescription`

## API Reference

* `SPCVariationIcon`: Main icon component.
* `VARIATION_COLOURS`: Canonical colour mapping.
* `resolveStateAndLayout`: Normalizes all payloads to `{ state, direction, polarity }`.
* `deriveVariationAriaDescription`: Generates ARIA label for accessibility.

### New Props (polarity / direction decoupling)

### Letters (H / L)

Letters appear only for improving or deteriorating judgements *and* when derivable (suppressed for `ContextDependent` polarity in polarity mode). Logic precedence:

1. `letterOverride` ("H" | "L" | "") – `""` forces suppression
2. If not overridden and `showLetter=false` → suppressed
3. If judgement is not Improving/Deteriorating → suppressed
4. Else derive via `letterMode`:

* `polarity` (default): H if `HigherIsBetter`, L if `LowerIsBetter`, suppressed otherwise
* `direction`: H if `direction===Higher` else L
* `direction`: H if inferred direction is Higher, L if Lower (legacy behaviour).
* `polarity`: H if `polarity === HigherIsBetter`, L if `polarity === LowerIsBetter`, suppressed if `ContextDependent`.

### Key Props (Current API)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `SpcVariationInput` | — | Any supported payload shape. |
| `variant` | `'classic' | 'triangle' \| 'triangleWithRun'` \| `'classic'` | Selects visual style. |
| `runLength` | `number` | `0` | Highlight count (0–5) for `triangleWithRun`. Clamped internally. |
| `size` | `number` | `44` | Render size in px (square). |
| `gradientWash` | `boolean` | `false` | Apply diagonal colour wash (lighter opacity v2). |
| `dropShadow` | `boolean` | `true` | Adds subtle outer circle shadow. |
| `showLetter` | `boolean` | `true` | Global toggle for letter feature. |
| `letterMode` | `'polarity' | 'direction'` \| `'polarity'` | How to derive H/L when a letter is shown. |
| `letterOverride` | `'H' \| 'L' | ''` \| `undefined` | Explicit override ("" to suppress). |
| `ariaLabel` | `string` | auto | Override generated aria-label. |

| State/Judgement | Polarity              | Inferred Direction |

### Unified Direction Inference (Across All Payloads)

| Judgement      | Polarity              | Inferred Direction (when `trend` omitted) |
|----------------|-----------------------|-------------------------------------------|
| Improving      | HigherIsBetter        | Higher                                    |
| Improving      | LowerIsBetter         | Lower                                     |
| Deteriorating  | HigherIsBetter        | Lower                                     |
| Deteriorating  | LowerIsBetter         | Higher                                    |
| No_Judgement   | Any                   | Uses provided `trend` or defaults Higher  |
| None (Common)  | Any                   | Uses provided `trend` or defaults Higher  |

This inference is now identical for: direct state, engine icon, derived, and parsimonious payloads.
| Improving       | LowerIsBetter         | Lower              |
| Deteriorating   | HigherIsBetter        | Lower              |

## Best Practices

* Provide `trend` for neutral states (`no_judgement`, `none`) – don’t rely on the higher default unless that’s intentional.
* Prefer derived or engine payloads; reserve direct state payloads for legacy code.
* Use `letterMode="polarity"` (the default) for dashboards where “H means higher is better”. Switch to `direction` for raw process monitoring (pure geometric movement).
* Keep `runLength` modest (3–5) – it conveys recency of the special cause without overcrowding.
* In dense tables consider `size={32}` with `variant="triangle"` for maximum legibility.

In summary:
The current SPC icons communicate core variation class, direction, and (optionally) run recency. Further enhancements (rule type, magnitude, persistence, partitions, warnings, integrated assurance) remain possible extensions – reach out if you’d like a proposal or prototype.

## Analysis of Current SPC Icons

Here’s a structured analysis of what the current SPCIcons communicate, how that compares to the richer state machine in the SPCChart logic, and what could be added to the icons to better communicate underlying trends and states.

## 1. What SPCIcons Currently Communicate

Visual “bits” in the icon:

* Variation class: Special cause improving (blue), special cause deteriorating (orange), special cause no judgement (purple arrow), common cause (grey).
* Direction: For improving/deteriorating, the H/L letter and point layout (higher/lower).
* No judgement: Arrow glyph, orientation (up/down).
* Recent data points: Five points, last two highlighted for special cause.
* Colour: Encodes class (see above).
* Assurance icon: Separate, communicates target met/not met/uncertain.

What’s not shown:

* Which special cause rule(s) triggered (e.g., shift, trend, single point, etc.).
* Magnitude of deviation (how “strong” the signal is).
* Partition/baseline changes.
* Data volatility or run length.
* Whether the signal is new or persistent.
* Warnings (e.g., not enough data, conflicting signals).
* Target/assurance status in the same glyph as variation.

## 2. What SPCChart Logic Tracks (State Machine)

The SPCChart logic (v2 engine with spcDescriptors.ts) tracks much more:

* VariationIcon: improvement, concern, neither, none (mapped to icon).
* AssuranceIcon: pass, fail, none.
* Special cause rules: Which of 8+ rules triggered (shift, trend, single point, etc.).
* Zone: How far from mean (within 1σ, 1–2σ, 2–3σ, >3σ).
* Partition/baseline: Where a new baseline starts.
* Warnings: Not enough data, conflicting signals, etc.
* Target/assurance: Whether the process is likely to meet a target.
* Ghost points: Data excluded from calculation.
* Run length: How long a signal has persisted.
* Magnitude: How far a point is from the mean/limit.

## 3. Gaps: What the Icon Could Communicate (But Currently Doesn’t)

A. Special Cause Rule Type

* The icon could visually indicate which rule(s) triggered the special cause (e.g., a small badge, shape, or overlay for “shift”, “trend”, “single point”, etc.).
* This would help users distinguish between a trend and a single outlier at a glance.

B. Magnitude/Zone

* The icon could encode how far the signal is from the mean (e.g., a ring or background shade for >3σ, 2–3σ, etc.).
* This would help communicate the “strength” of the signal.

C. Persistence/Newness

* A visual indicator (e.g., a dot, underline, or animation) could show if the signal is new this period or has persisted for several periods.

D. Partition/Baseline

* A subtle baseline marker or color change could indicate a new baseline/partition.

E. Multiple Signals/Conflicts

* If multiple special cause rules are triggered, the icon could show a composite or stacked badge.
* If there’s a conflict (e.g., both improvement and concern in different rules), a warning overlay or color could be used.

F. Data Quality/Warnings

* A warning badge or color (e.g., yellow triangle) could indicate not enough data, ghost points, or other data quality issues.

G. Target/Assurance Integration

* The assurance (target met/not met) could be integrated into the variation icon (e.g., a border color, inner ring, or overlay), reducing the need for a separate icon.

H. Volatility/Run Length

* The icon could encode how long a run/trend has persisted (e.g., number of highlighted points, a “tail” on the glyph, or a numeric badge).

## 4. Recommendations for a Revised Icon

* Add a “rule badge”: Small overlay or symbol for shift, trend, single point, etc.
* Zone/magnitude ring: Outer ring color or thickness for >3σ, 2–3σ, etc.
* Persistence indicator: Animation, underline, or badge for new vs. persistent signals.
* Partition marker: Subtle baseline or color change for new baseline.
* Composite/conflict state: Overlay or color for multiple/conflicting signals.
* Warning badge: For data quality or insufficient data.
* Assurance integration: Border or inner ring for target status.
* Tooltip/ARIA: Ensure all this is available in accessible text for screen readers.

## 5. Example: “Super Icon” Concept

* Core glyph: As now (variation class, direction, points).
* Outer ring: Zone/magnitude (grey, yellow, orange, red).
* Small badge: Rule type (e.g., “S” for shift, “T” for trend, “!” for single point).
* Border color: Assurance (green for met, red for not met, grey for uncertain).
* Warning triangle: If data quality issue.
* Animated “pulse”: If signal is new this period.

## 6. Summary Table

| **Info Type**      | **SPCIcon Now** | **SPCChart Logic** | **Could Add to Icon?** |
| ------------------ | --------------- | ------------------ | ---------------------- |
| Variation class    | Yes             | Yes                | —                      |
| Direction          | Yes             | Yes                | —                      |
| No judgement       | Yes             | Yes                | —                      |
| Rule type          | No              | Yes                | Yes                    |
| Magnitude/zone     | No              | Yes                | Yes                    |
| Persistence        | No              | Yes                | Yes                    |
| Partition/baseline | No              | Yes                | Yes                    |
| Multiple signals   | No              | Yes                | Yes                    |
| Data warnings      | No              | Yes                | Yes                    |
| Assurance/target   | Separate        | Yes                | Yes (integrate)        |
| Volatility/runlen  | No              | Yes                | Yes                    |

In summary:
The current SPCIcons communicate the core variation class and direction, but the SPCChart logic tracks much richer state. A revised icon could visually encode rule type, signal strength, persistence, partition, warnings, and assurance making the icon a much more powerful, glanceable summary of the underlying process state.
