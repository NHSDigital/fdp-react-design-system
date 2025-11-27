/**
 * Embedded SPC icon builder utilities.
 *
 * This module constructs the top‑right summary icons (Variation + Assurance)
 * used by SPCChart. It selects the last eligible data row, maps the UI‑level
 * classification to the icon engine payload, and applies consistent gating and
 * semantics for orientation and letters.
 */
import type React from "react";
import {
	SPCVariationIcon,
	SPCAssuranceIcon,
	AssuranceResult,
	Direction,
} from "../../icons";
import type { EngineRowUI } from "../SPCChart.types";
import { ImprovementDirection, VariationIcon, AssuranceIcon } from "../types";
import { SpcEmbeddedIconVariant, LetterMode } from "../SPCChart.constants";
import { VariationIcon as V2VariationIcon } from "../logic_v2/types";

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
export function buildEmbeddedIcon(args: {
	show: boolean;
	rowsForUi: EngineRowUI[] | null;
	minPoints?: number | null;
	metricImprovement: ImprovementDirection;
	variant: SpcEmbeddedIconVariant;
	runLength?: number;
}): React.ReactNode | null {
	const { show, rowsForUi, minPoints, metricImprovement, variant, runLength } =
		args;
	if (!show || !rowsForUi?.length) return null;

	const engineRows = rowsForUi as EngineRowUI[];
	const min =
		typeof minPoints === "number" && !isNaN(minPoints) ? minPoints : 13;
	const nonGhostCount = engineRows.filter(
		(r) => !r.data.ghost && r.data.value != null
	).length;
	if (nonGhostCount < min) return null;

	// find last non-ghost data row
	let lastIdx = -1;
	for (let i = engineRows.length - 1; i >= 0; i--) {
		const r = engineRows[i];
		if (r && r.data.value != null && !r.data.ghost) {
			lastIdx = i;
			break;
		}
	}
	if (lastIdx === -1) return null;
	const lastRow = engineRows[lastIdx];

	const variation = lastRow.classification?.variation as
		| VariationIcon
		| undefined;
	const assuranceRaw = lastRow.classification?.assurance as
		| AssuranceIcon
		| undefined;
	const hasNeutralSpecialCause =
		variation === VariationIcon.Neither &&
		!!lastRow.classification?.neutralSpecialCauseValue;

	const assuranceRenderStatus: AssuranceResult =
		assuranceRaw === AssuranceIcon.Pass
			? AssuranceResult.Pass
			: assuranceRaw === AssuranceIcon.Fail
				? AssuranceResult.Fail
				: AssuranceResult.Uncertain;

	// Determine icon orientation (trend) for special‑cause neutral and suppressed cases
	let trend: Direction | undefined = undefined;
	if (variation === VariationIcon.Suppressed) {
		const singleHigh = !!lastRow.rules.singlePoint.up;
		const singleLow = !!lastRow.rules.singlePoint.down;
		if (metricImprovement === ImprovementDirection.Up) {
			if (singleHigh) trend = Direction.Higher;
			else if (singleLow) trend = Direction.Lower;
		} else if (metricImprovement === ImprovementDirection.Down) {
			if (singleLow) trend = Direction.Lower;
			else if (singleHigh) trend = Direction.Higher;
		} else {
			trend = Direction.Higher;
		}
	} else if (variation === VariationIcon.Neither && hasNeutralSpecialCause) {
		const anyHighSide =
			lastRow.rules.singlePoint.up ||
			lastRow.rules.twoOfThree.up ||
			lastRow.rules.fourOfFive.up ||
			lastRow.rules.shift.up ||
			lastRow.rules.trend.up;
		const anyLowSide =
			lastRow.rules.singlePoint.down ||
			lastRow.rules.twoOfThree.down ||
			lastRow.rules.fourOfFive.down ||
			lastRow.rules.shift.down ||
			lastRow.rules.trend.down;
		if (anyHighSide && !anyLowSide) trend = Direction.Higher;
		else if (anyLowSide && !anyHighSide) trend = Direction.Lower;
		else trend = Direction.Higher;
	}

	// Rendering size (px). Polarity is derived implicitly by the icon component from
	// `improvementDirection` and only affects letter semantics, not geometry.
	const iconSize = 80;

	const highSideSignal =
		lastRow.rules.singlePoint.up ||
		lastRow.rules.twoOfThree.up ||
		lastRow.rules.fourOfFive.up ||
		lastRow.rules.shift.up ||
		lastRow.rules.trend.up;
	const lowSideSignal =
		lastRow.rules.singlePoint.down ||
		lastRow.rules.twoOfThree.down ||
		lastRow.rules.fourOfFive.down ||
		lastRow.rules.shift.down ||
		lastRow.rules.trend.down;

	// Map UI variation to engine variant for SPCVariationIcon payload.
	// Note: High/Low is selected here only for neutral special‑cause rendering; the
	// Improving/Concern variants are resolved by the icon component using
	// improvementDirection → polarity to orient geometry appropriately.
	let variationEngine: V2VariationIcon = V2VariationIcon.CommonCause;
	if (variation === VariationIcon.Improvement)
		variationEngine = V2VariationIcon.ImprovementHigh;
	else if (variation === VariationIcon.Concern)
		variationEngine = V2VariationIcon.ConcernHigh;
	else if (variation === VariationIcon.Neither) {
		if (hasNeutralSpecialCause) {
			if (trend === Direction.Lower || (lowSideSignal && !highSideSignal))
				variationEngine = V2VariationIcon.NeitherLow;
			else variationEngine = V2VariationIcon.NeitherHigh;
		} else {
			variationEngine = V2VariationIcon.CommonCause;
		}
	}

	return (
		<div
			key={`embedded-icon-${lastIdx}`}
			style={{ display: "flex", gap: 12, marginRight: 16 }}
		>
			<div
				className="fdp-spc-chart__embedded-icon"
				data-variation={String(variation)}
				data-trend={trend ? String(trend) : "none"}
				style={{ width: iconSize, height: iconSize }}
			>
				<SPCVariationIcon
					dropShadow={false}
					data={{
						variationIcon: variationEngine,
						improvementDirection: metricImprovement,
						specialCauseNeutral: hasNeutralSpecialCause,
						highSideSignal,
						lowSideSignal,
						...(trend ? { trend } : {}),
					}}
					// Letter semantics:
					// - When a business polarity exists (Up/Down), use LetterMode.Polarity so
					//   H/L communicate "higher is better" / "lower is better".
					// - When polarity is neutral, fall back to LetterMode.Direction so H/L
					//   reflect the side of the signal (high‑side vs low‑side).
					letterMode={
						metricImprovement === ImprovementDirection.Neither
							? LetterMode.Direction
							: LetterMode.Polarity
					}
					size={iconSize}
					variant={variant}
					runLength={
						variant === SpcEmbeddedIconVariant.TriangleWithRun
							? runLength
							: undefined
					}
				/>
			</div>
			<div
				className="fdp-spc-chart__embedded-assurance-icon"
				data-assurance={String(assuranceRaw)}
				style={{ width: iconSize, height: iconSize }}
			>
				<SPCAssuranceIcon
					status={assuranceRenderStatus}
					size={iconSize}
					dropShadow={false}
				/>
			</div>
		</div>
	);
}
