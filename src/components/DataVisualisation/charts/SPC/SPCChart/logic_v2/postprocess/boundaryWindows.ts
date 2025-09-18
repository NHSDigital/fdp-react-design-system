import { ImprovementDirection, SpcRowV2 } from "../types";
import {
	SpcVisualCategory,
	computeSpcVisualCategories,
	TrendVisualMode,
} from "./visualCategories";

export type BoundaryWindowsMode = "Disabled" | "RecalcCrossing";

export interface BoundaryWindowsOptions {
	mode?: BoundaryWindowsMode; // default: Disabled
	preWindow?: number; // default: 2 (points immediately before boundary)
	postWindow?: number; // default: 3 (points starting at boundary)
	/**
	 * Controls the polarity of the pre-window category relative to the post-window.
	 * - "Opposite" (default): pre-window uses the opposite category of post-window (contrast around boundary)
	 * - "Same": pre-window uses the same category as post-window (uniform window around boundary)
	 */
	prePolarity?: "Opposite" | "Same";
	/**
	 * Optional explicit boundary indices to use instead of auto-detecting via partitionId changes.
	 * Each index should correspond to the first point of a new partition (i.e., the baseline-marked row).
	 */
	boundaryIndices?: number[];
}

/**
 * Compute visual categories with optional boundary-aware post-classification adjustments.
 *
 * Behaviour (RecalcCrossing):
 * - Detect each partition boundary (partitionId changes).
 * - Compute mean delta: first non-null mean in new partition minus last non-null mean in previous partition.
 * - Determine favourable direction based on metricImprovement (Up -> delta>0, Down -> delta<0).
 * - Apply small windows around the boundary:
 *   - postWindow points [boundary .. boundary+postWindow-1]: set to Improvement if favourable else Concern
 *   - preWindow points [boundary-preWindow .. boundary-1]: set to the opposite category
 * - Never override existing Improvement/Concern categories from base computation; only upgrade
 *   Common/NoJudgement into the window categories.
 * - If metricImprovement === Neither, or either side has no eligible mean, no adjustments are applied for that boundary.
 */
export function computeBoundaryWindowCategories(
	rows: ReadonlyArray<SpcRowV2>,
	metricImprovement: ImprovementDirection,
	options?: BoundaryWindowsOptions
): SpcVisualCategory[] {
	const mode = options?.mode ?? "Disabled";
	if (!rows.length) return [];
	// Start from base visual categories
	let out = computeSpcVisualCategories(rows, {
		metricImprovement,
		trendVisualMode: TrendVisualMode.Ungated,
		enableNeutralNoJudgement: true,
	});

	if (mode !== "RecalcCrossing") return out;
	if (metricImprovement === ImprovementDirection.Neither) return out;

	const preWin = Math.max(0, options?.preWindow ?? 2);
	const postWin = Math.max(0, options?.postWindow ?? 3);
	const prePolarity = options?.prePolarity ?? "Opposite";

	// Helper: safely set category if current is Common/NoJudgement only
	const setIfUpgrade = (idx: number, cat: SpcVisualCategory) => {
		if (idx < 0 || idx >= out.length) return;
		const cur = out[idx];
		if (
			cur === SpcVisualCategory.Common ||
			cur === SpcVisualCategory.NoJudgement
		) {
			out[idx] = cat;
		}
	};

	// Fallback mean when eligibility-gated means are unavailable: average raw values in the partition
	const partitionFallbackMean = (
		pid: number | string | null
	): number | null => {
		if (pid == null) return null;
		const values: number[] = [];
		for (const r of rows) {
			if (r.partitionId !== pid) continue;
			if (typeof r.value === "number" && !r.ghost) values.push(r.value);
		}
		if (!values.length) return null;
		const sum = values.reduce((a, b) => a + b, 0);
		return sum / values.length;
	};

	// Build list of boundary indices: prefer explicit list, otherwise detect by partitionId changes
	const boundaries: number[] = Array.isArray(options?.boundaryIndices) && options!.boundaryIndices!.length
		? options!.boundaryIndices!.slice().filter((b) => Number.isFinite(b))
		: (() => {
			const out: number[] = [];
			for (let i = 1; i < rows.length; i++) {
				const prev = rows[i - 1];
				const cur = rows[i];
				if (!prev || !cur) continue;
				if (cur.partitionId === prev.partitionId) continue;
				out.push(i);
			}
			return out;
		})();

	for (const boundary of boundaries) {
		const prev = rows[boundary - 1];
		const cur = rows[boundary];
		if (!prev || !cur) continue;

		// Find last non-null mean in previous partition
		let oldMean: number | null = null;
		for (let j = boundary - 1; j >= 0; j--) {
			const r = rows[j];
			if (r.partitionId !== prev.partitionId) break;
			if (typeof r.mean === "number") {
				oldMean = r.mean;
				break;
			}
		}
		// Find first non-null mean in new partition
		let newMean: number | null = null;
		for (let k = boundary; k < rows.length; k++) {
			const r = rows[k];
			if (r.partitionId !== cur.partitionId) break;
			if (typeof r.mean === "number") {
				newMean = r.mean;
				break;
			}
		}
		// If eligibility prevented means from materialising on either side, fall back to raw partition averages
		if (oldMean == null)
			oldMean = partitionFallbackMean(prev.partitionId ?? null);
		if (newMean == null)
			newMean = partitionFallbackMean(cur.partitionId ?? null);
		if (oldMean == null || newMean == null) continue; // still insufficient info
		const delta = newMean - oldMean;
		const favourable =
			metricImprovement === ImprovementDirection.Up ? delta > 0 : delta < 0;
		const postCat = favourable
			? SpcVisualCategory.Improvement
			: SpcVisualCategory.Concern;
		const preCat = prePolarity === "Same"
			? postCat
			: favourable
				? SpcVisualCategory.Concern
				: SpcVisualCategory.Improvement;

		// Apply pre-window
		for (let p = 1; p <= preWin; p++) setIfUpgrade(boundary - p, preCat);
		// Apply post-window
		for (let p = 0; p < postWin; p++) setIfUpgrade(boundary + p, postCat);
	}

	return out;
}

export default { computeBoundaryWindowCategories };
