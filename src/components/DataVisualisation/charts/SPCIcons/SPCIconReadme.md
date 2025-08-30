# SPC Variation Icon (`SpcVariationIcon`)

A React SVG component that renders a compact Statistical Process Control (SPC) “variation” glyph for performance dashboards.  
It visualises:  
- SPC classification (special cause improving / deteriorating / no‑judgement, or common cause)  
- Direction of movement (higher / lower)  
- Optional H / L letter (contextual to direction)  
- Recent pattern of five data points with emphasised last two when a special cause exists  

## Design Goals
| Goal | Rationale |
| ---- | --------- |
| Single, glanceable object | Reduce table column clutter |
| Encodes both classification + direction | Faster triage vs text labels |
| Accessible & screen‑reader meaningful | Full sentence description auto‑derived |
| Flexible input models (V1 + V2) | Supports legacy “state” calls & new semantic API |
| Neutral about statistical engine | Consumes only judgements + polarity, not raw series |
| Vector-based (SVG) | Avoids rasterisation and given the challenges of legibility of the existing icon, at least avoids rasterisation. |
| Consistency with existing icons | Ensures consistency with previous SPC work of MDC team whilst creating a flexible API for potential redesign of the icons in future |
---

## Core Concepts

### Judgement vs State
- **Judgement** (`VariationJudgement`): semantic SPC outcome at the latest point (Improving, Deteriorating, No_Judgement, None).
- **State** (`VariationState`): visual classification bucket used for colour + glyph.
- The icon maps judgement → state internally. You normally supply a *judgement* (V2 API).

### Direction (Trend Geometry)
Determines which point layout is used (higher vs lower run) and which letter (H/L) appears.
- Inferred automatically for Improving / Deteriorating using *polarity*.
- Must be provided (`trend`) when judgement is `No_Judgement` or `None` (or when polarity is ambiguous).

### Polarity (`MetricPolarity`)
Explains which way is desirable (HigherIsBetter, LowerIsBetter, ContextDependent).  
Used only for derived ARIA description (not colour or letter).

---

## Input Shapes (APIs)

### 1. V2 Derivable (recommended)
Provide what you *know*; icon infers state + direction:
```ts
import { SpcVariationIcon } from "./SPCIcon";
import { VariationJudgement, MetricPolarity, Direction } from "./SPCConstants";

<SpcVariationIcon
  data={{
    judgement: VariationJudgement.Improving,
    polarity: MetricPolarity.HigherIsBetter
  }}
/>

<SpcVariationIcon
  data={{
    judgement: VariationJudgement.No_Judgement,
    polarity: MetricPolarity.ContextDependent,
    trend: Direction.Lower    // required here
  }}
/>
```

### 2. Parsimonious Helper Type
Compile‑time enforcement that neutral states supply `trend`:
```ts
const payload: SpcVariationParsimonious = {
  judgement: VariationJudgement.None,
  polarity: MetricPolarity.ContextDependent,
  trend: Direction.Higher
};
<SpcVariationIcon data={payload} />
```

### 3. Legacy / Explicit (V1)
Directly specify visual state + trend (bypasses derivation):
```ts
<SpcVariationIcon
  data={{
    state: VariationState.SpecialCauseDeteriorating,
    trend: Direction.Lower,
    polarity: MetricPolarity.HigherIsBetter
  }}
/>
```

---

## Derivation Rules (Judgement → State + Direction)

| Judgement | Polarity | Inferred Direction | Resulting State |
| --------- | -------- | ----------------- | --------------- |
| Improving | HigherIsBetter / ContextDependent | Higher | SpecialCauseImproving |
| Improving | LowerIsBetter | Lower | SpecialCauseImproving |
| Deteriorating | HigherIsBetter / ContextDependent | Lower | SpecialCauseDeteriorating |
| Deteriorating | LowerIsBetter | Higher | SpecialCauseDeteriorating |
| No_Judgement | (any) | Use provided `trend` (default Higher) | SpecialCauseNoJudgement |
| None | (any) | Use provided `trend` (default Higher) | CommonCause |

Provide `trend` explicitly for the last two rows to avoid ambiguous geometry.

---

## Visual Semantics

| State | Colour | Letter | Points | Special Glyph |
| ----- | ------ | ------ | ------ | ------------- |
| SpecialCauseImproving | Blue (#00B0F0) | H/L (directional) | Last 2 coloured | — |
| SpecialCauseDeteriorating | Orange (#E46C0A) | H/L | Last 2 coloured | — |
| SpecialCauseNoJudgement | Purple (#490092) | None | Last 2 coloured | Arrow (rotated if lower) |
| CommonCause | Grey (#A6A6A6) | None | All grey | None |

Letter “H” = run trending higher; “L” = lower (semantic, not good/bad).

---

## Props

```ts
interface SpcIconBaseProps {
  size?: number;          // px (default 44)
  ariaLabel?: string;     // override short label
  showLetter?: boolean;   // default true (H/L hidden if not applicable)
  dropShadow?: boolean;   // default true
}

interface SpcVariationIconProps extends SpcIconBaseProps {
  data: SpcVariationInput; // any of the 3 shapes above
}
```

Example:
```tsx
<SpcVariationIcon
  size={64}
  dropShadow={false}
  data={{ judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.LowerIsBetter }}
/>
```

---

## Accessibility

The component sets:
- `role="img"`
- `aria-label`: Short label (e.g. “Special Cause (Improving) – Higher”)
- `aria-description`: Full sentence from `deriveVariationAriaDescription()` (e.g. “Special cause improvement: recent data…”)

Override short label with `ariaLabel`. For custom narration you may also wrap with additional contextual text.

Utility exposed:
```ts
deriveVariationAriaDescription(data: SpcVariationInput): string;
```

---

## Colour System

Defined in `VARIATION_COLOURS` keyed by `VariationState`. Each entry:
```ts
interface VariationColourDef {
  hex: string;
  stroke?: string;
  fill?: string;
  text?: string; // auto contrast
  label: string;
  description: string;
  judgement?: VariationJudgement;
}
```
To extend (e.g., light backgrounds) you can add ramp shades or computed variants.

---

## Internal Geometry

- SVG viewBox: `0 0 300 300`
- Outer ring radius: 120
- Five recent data points plotted; layout chosen by state + direction (`computePointPositions`).
- Last two points highlighted for special cause states.

---

## When to Use Each API

| Situation | Recommended Input |
| --------- | ----------------- |
| You have SPC judgement + polarity | V2 (derivable) |
| You are migrating legacy code that already computes `VariationState` | V1 |
| You want compile‑time enforcement of required trends | Parsimonious |

---

## Guardrails / Pitfalls

| Issue | Guidance |
| ----- | -------- |
| Missing `trend` for neutral judgement | Provide `trend` explicitly or geometry defaults to Higher |
| Overriding inferred direction (e.g., Improving + LowerIsBetter but passing Higher) | Avoid – semantics become inconsistent |
| Using colour to imply good/bad | Colours indicate variation class, not performance vs target |

---

## Extensibility Ideas

1. Add assurance overlay (separate `SpcAssuranceIcon` placeholder exists).  
2. Animate last point entrance.  
3. Theme injection for NHS dark mode.  
4. Data tooltips on point hover.  
5. Export as data URL for PDF reporting.

---

## Minimal End‑to‑End Example

```tsx
import { SpcVariationIcon } from "./SPCIcon";
import { VariationJudgement, MetricPolarity } from "./SPCConstants";

export const Cell = () => (
  <SpcVariationIcon
    data={{
      judgement: VariationJudgement.Improving,
      polarity: MetricPolarity.LowerIsBetter // infers downward (L)
    }}
    size={56}
  />
);
```

---

## Utility Summary

| Function | Purpose |
| -------- | ------- |
| `deriveVariationAriaDescription(input)` | Builds narrative sentence for screen readers |
| `resolveStateAndLayout(input)` | (Internal) Normalises all input shapes |

---

## Testing Suggestions

| Aspect | Check |
| ------ | ----- |
| Accessibility | VoiceOver reads both label + description |
| Colour contrast | `pickTextColour` chooses legible text colour |
| Direction inference | Deteriorating + LowerIsBetter → direction Higher |
| Neutral trend | No_Judgement with provided trend rotates arrow |

---

## Change Log (local)
- V2 derivation model introduced (judgement + polarity + optional trend).
- Arrow glyph for No_Judgement.
- ARIA description generator.

---

## License / Ownership
Internal prototype component; ensure alignment with NHS design system guidelines before external publication.