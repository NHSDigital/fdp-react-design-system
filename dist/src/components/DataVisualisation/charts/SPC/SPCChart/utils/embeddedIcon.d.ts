/**
 * Embedded SPC icon builder utilities.
 *
 * This module constructs the top‑right summary icons (Variation + Assurance)
 * used by SPCChart. It selects the last eligible data row, maps the UI‑level
 * classification to the icon engine payload, and applies consistent gating and
 * semantics for orientation and letters.
 */
import type React from "react";
import type { EngineRowUI } from "../SPCChart.types";
import { ImprovementDirection } from "../types";
import { SpcEmbeddedIconVariant } from "../SPCChart.constants";
/**
 * Build the embedded summary icon block for SPCChart.
 *
 * Behaviour:
 * - Applies a minimum points gate (default 13) — returns null until the chart has
 *   enough non‑ghost observations to form stable limits.
 * - Picks the last non‑ghost data row as the summary point.
 * - Chooses Variation icon geometry/orientation based on the final classification
 *   and derives a direction for special‑cause neutral cases (purple) from rule sides.
 * - Sets the letter semantics to match business polarity when available
 *   (ImprovementDirection.Up/Down ⇒ LetterMode.Polarity). When polarity is neutral
 *   (ImprovementDirection.Neither), letters reflect the signal side instead
 *   (LetterMode.Direction).
 * - Renders an Assurance icon alongside Variation; when the engine has no assurance
 *   outcome we render the neutral "Uncertain" placeholder to keep layout stable.
 *
 * IDE guidance:
 * - Pass `metricImprovement` from SPCChart’s effective engine props so letters (H/L)
 *   communicate business polarity when defined.
 * - Use `variant` to switch between Classic, Triangle, and TriangleWithRun; when using
 *   TriangleWithRun you can supply an optional `runLength` for the small dot series.
 * - This function is side‑effect free and can be memoized by callers. It returns a
 *   single React node or null when gated.
 *
 * Example:
 *   const node = buildEmbeddedIcon({
 *     show: true,
 *     rowsForUi,
 *     minPoints: 13,
 *     metricImprovement: ImprovementDirection.Up,
 *     variant: SpcEmbeddedIconVariant.Triangle,
 *   });
 *
 * @param args.show Controls visibility. If false, returns null immediately.
 * @param args.rowsForUi Engine rows mapped for UI (from SPCChart).
 * @param args.minPoints Optional minimum non‑ghost points gate (default 13).
 * @param args.metricImprovement Business polarity for the measure
 *   (Up = higher is better, Down = lower is better, Neither = neutral).
 * @param args.variant Icon rendering style.
 * @param args.runLength Optional run length indicator for TriangleWithRun variant (0–5 shown).
 * @returns React node containing Variation + Assurance icons, or null when gated/hidden.
 */
export declare function buildEmbeddedIcon(args: {
    show: boolean;
    rowsForUi: EngineRowUI[] | null;
    minPoints?: number | null;
    metricImprovement: ImprovementDirection;
    variant: SpcEmbeddedIconVariant;
    runLength?: number;
}): React.ReactNode | null;
