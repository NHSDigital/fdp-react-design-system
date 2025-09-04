# SPCIcon.tsx – NHS FDP Design System

## Overview

`SPCIcon.tsx` implements the core iconography for Statistical Process Control (SPC) charts in the NHS FDP Design System. It provides a unified, accessible, and brand-aligned visual representation of SPC variation states, supporting both direct and derived payloads for maximum flexibility and semantic clarity.

## Key Concepts

### Variation States

- **Special Cause Improving**: Indicates a statistically significant improvement (e.g., run above the mean).
- **Special Cause Deteriorating**: Indicates a statistically significant deterioration (e.g., run below the mean).
- **Common Cause**: No special cause detected; random variation.
- **Special Cause No Judgement**: Special cause detected, but no value judgement (e.g., shift in level, but not clearly better/worse).

### Colour System

- Canonical palette defined in `VARIATION_COLOURS`.
- Each state has a unique colour, label, and description.
- Accessible text colour is computed for each background.

### Icon Payloads

Supports multiple input shapes:

- **Direct State**: `{ state, trend?, polarity? }` – explicit state and direction.
- **Engine Icon**: `{ variationIcon, trend?, polarity? }` – maps engine enums to states.
- **Derived**: `{ judgement, polarity, trend? }` – infers state and direction from SPC logic.
- **Parsimonious**: Strict shape enforcing explicit direction for neutral states.

### Direction/Trend

- `Direction.Higher` or `Direction.Lower` controls icon geometry (e.g., arrow orientation, H/L letter).
- For ambiguous states (no judgement/none), `trend` must be provided or defaults to `Higher`.

### Accessibility

- Generates rich ARIA descriptions contextualized for screen readers.
- Exposes alt text and semantic labelling for all icon states.

### Rendering Logic

- SVG-based, scalable icons.
- Special cause states show coloured points and H/L letter.
- No judgement state shows a purple arrow, oriented by trend.
- Common cause state is fully grey, with no letter or arrow.

## Usage

Import and use the icon as follows:

```tsx
import { SpcVariationIcon } from "./SPCIcon";

<SpcVariationIcon data={{ state: VariationState.SpecialCauseImproving }} />
```

Or with engine payload:

```tsx
<SpcVariationIcon data={{ variationIcon: SpcEngineVariationIcon.Improvement }} />
```

Or with derived payload:

```tsx
<SpcVariationIcon data={{ judgement: VariationJudgement.Improving, polarity: MetricPolarity.HigherIsBetter }} />
```

## API Reference

- `SpcVariationIcon`: Main icon component.
- `VARIATION_COLOURS`: Canonical colour mapping.
- `resolveStateAndLayout`: Normalizes all payloads to `{ state, direction, polarity }`.
- `deriveVariationAriaDescription`: Generates ARIA label for accessibility.
 
### New Props (polarity / direction decoupling)

- `letterMode`: `'direction' | 'polarity'` (default `'direction'`). Controls how the H/L letter is derived when the variation judgement is improving or deteriorating.
	- `direction`: H if inferred direction is Higher, L if Lower (legacy behaviour).
	- `polarity`: H if `polarity === HigherIsBetter`, L if `polarity === LowerIsBetter`, suppressed if `ContextDependent`.
- `letterOverride`: `'H' | 'L' | ''` – Highest precedence. Supply `''` to hide the letter entirely even if it would normally render.

### Unified Direction Inference

All payload forms (engine, legacy state, derived) now use the same inference rules when `trend` is omitted and the state/judgement is improving or deteriorating:

| State/Judgement | Polarity              | Inferred Direction |
|-----------------|-----------------------|--------------------|
| Improving       | HigherIsBetter        | Higher             |
| Improving       | LowerIsBetter         | Lower              |
| Deteriorating   | HigherIsBetter        | Lower              |
| Deteriorating   | LowerIsBetter         | Higher             |

Previously, only the derived payload path applied this logic; engine and explicit state payloads defaulted to a fixed direction unless `trend` was provided. This change ensures consistent interpretation across all input shapes.

## Best Practices

- Always provide `trend` for ambiguous states (no judgement/none).
- Use canonical enums/types from the SPC engine for consistency.
- Test icon appearance in Storybook for all states and trends.

## File Location

`src/components/DataVisualisation/charts/SPCIcons/SPCIcon.tsx`

---
*This documentation was auto-generated to summarize the structure, logic, and usage of the SPCIcon component as implemented in the referenced file.*

## Analysis of Current SPC Icons

Here’s a structured analysis of what the current SPCIcons communicate, how that compares to the richer state machine in the SPCChart logic, and what could be added to the icons to better communicate underlying trends and states.

## 1. What SPCIcons Currently Communicate

Visual “bits” in the icon:

- Variation class: Special cause improving (blue), special cause deteriorating (orange), special cause no judgement (purple arrow), common cause (grey).
- Direction: For improving/deteriorating, the H/L letter and point layout (higher/lower).
- No judgement: Arrow glyph, orientation (up/down).
- Recent data points: Five points, last two highlighted for special cause.
- Colour: Encodes class (see above).
- Assurance icon: Separate, communicates target met/not met/uncertain.
What’s not shown:
- Which special cause rule(s) triggered (e.g., shift, trend, single point, etc.).
- Magnitude of deviation (how “strong” the signal is).
- Partition/baseline changes.
- Data volatility or run length.
- Whether the signal is new or persistent.
- Warnings (e.g., not enough data, conflicting signals).
- Target/assurance status in the same glyph as variation.

## 2. What SPCChart Logic Tracks (State Machine)

The SPCChart logic (spc.ts, spcDescriptors.ts) tracks much more:

- VariationIcon: improvement, concern, neither, none (mapped to icon).
- AssuranceIcon: pass, fail, none.
- Special cause rules: Which of 8+ rules triggered (shift, trend, single point, etc.).
- Zone: How far from mean (within 1σ, 1–2σ, 2–3σ, >3σ).
- Partition/baseline: Where a new baseline starts.
- Warnings: Not enough data, conflicting signals, etc.
- Target/assurance: Whether the process is likely to meet a target.
- Ghost points: Data excluded from calculation.
- Run length: How long a signal has persisted.
- Magnitude: How far a point is from the mean/limit.

## 3. Gaps: What the Icon Could Communicate (But Currently Doesn’t)

A. Special Cause Rule Type

- The icon could visually indicate which rule(s) triggered the special cause (e.g., a small badge, shape, or overlay for “shift”, “trend”, “single point”, etc.).
- This would help users distinguish between a trend and a single outlier at a glance.

B. Magnitude/Zone

- The icon could encode how far the signal is from the mean (e.g., a ring or background shade for >3σ, 2–3σ, etc.).
- This would help communicate the “strength” of the signal.

C. Persistence/Newness

- A visual indicator (e.g., a dot, underline, or animation) could show if the signal is new this period or has persisted for several periods.

D. Partition/Baseline

- A subtle baseline marker or color change could indicate a new baseline/partition.

E. Multiple Signals/Conflicts

- If multiple special cause rules are triggered, the icon could show a composite or stacked badge.
- If there’s a conflict (e.g., both improvement and concern in different rules), a warning overlay or color could be used.

F. Data Quality/Warnings

- A warning badge or color (e.g., yellow triangle) could indicate not enough data, ghost points, or other data quality issues.

G. Target/Assurance Integration

- The assurance (target met/not met) could be integrated into the variation icon (e.g., a border color, inner ring, or overlay), reducing the need for a separate icon.

H. Volatility/Run Length

- The icon could encode how long a run/trend has persisted (e.g., number of highlighted points, a “tail” on the glyph, or a numeric badge).

## 4. Recommendations for a Revised Icon

- Add a “rule badge”: Small overlay or symbol for shift, trend, single point, etc.
- Zone/magnitude ring: Outer ring color or thickness for >3σ, 2–3σ, etc.
- Persistence indicator: Animation, underline, or badge for new vs. persistent signals.
- Partition marker: Subtle baseline or color change for new baseline.
- Composite/conflict state: Overlay or color for multiple/conflicting signals.
- Warning badge: For data quality or insufficient data.
- Assurance integration: Border or inner ring for target status.
- Tooltip/ARIA: Ensure all this is available in accessible text for screen readers.

## 5. Example: “Super Icon” Concept

- Core glyph: As now (variation class, direction, points).
- Outer ring: Zone/magnitude (grey, yellow, orange, red).
- Small badge: Rule type (e.g., “S” for shift, “T” for trend, “!” for single point).
- Border color: Assurance (green for met, red for not met, grey for uncertain).
- Warning triangle: If data quality issue.
- Animated “pulse”: If signal is new this period.

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
The current SPCIcons communicate the core variation class and direction, but the SPCChart logic tracks much richer state. A revised icon could visually encode rule type, signal strength, persistence, partition, warnings, and assurance—making the icon a much more powerful, glanceable summary of the underlying process state.
Let me know if you want a concrete design proposal or a prototype implementation for any of these enhancements!
•
