import {
	buildSpcV26a,
	ChartType,
	computeSpcVisualCategories,
	SpcVisualCategory,
	VariationIcon,
} from "../engine";
import { ImprovementDirection } from "../engine";
import { mapIconToVariation } from "./state";
import { DEFAULT_MIN_POINTS } from "./constants";
import { visualsToNeutralFlags, visualsToPointSignals } from "./transform";
import type { VariationState } from "../SPCIcons/SPCConstants";

export type SpcDatum =
	| { x: string | number | Date; value: number | null }
	| { x: string | number | Date; y: number | null };

export interface SpcPrecomputedSummary {
	rows: any[];
	visuals: SpcVisualCategory[];
	latestState: VariationState | null;
	centerLine: number | null;
	controlLimits: { lower: number | null; upper: number | null } | null;
	sigmaBands: {
		upperOne: number | null;
		upperTwo: number | null;
		lowerOne: number | null;
		lowerTwo: number | null;
	} | null;
	/** Optional convenience arrays for spark fallback colouring when visuals aren’t used */
	pointSignals?: Array<"improvement" | "concern" | "neither" | null>;
	pointNeutralSpecialCause?: boolean[];
}

export interface ComputeSpcPrecomputedOptions {
	chartType?: ChartType;
	metricImprovement: ImprovementDirection;
	/** Minimum eligible points to turn on chart-level eligibility (defaults 13 to mirror SPCChart) */
	minimumPoints?: number;
	/** Whether to enable neutral no judgement categorisation (default true) */
	enableNeutralNoJudgement?: boolean;
	/** Include signal fallbacks (derived from visual categories). Default true */
	includeSignalFallbacks?: boolean;
}

/**
 * Compute engine rows and visual categories once for a series (e.g., one table row),
 * plus derived latest state and limits/bands for rendering SPCChart and SPCSpark with parity.
 */
export function computeSpcPrecomputed(
	data: SpcDatum[],
	opts: ComputeSpcPrecomputedOptions
): SpcPrecomputedSummary {
	const {
		chartType = ChartType.XmR,
		metricImprovement,
		minimumPoints = DEFAULT_MIN_POINTS,
		enableNeutralNoJudgement = true,
		includeSignalFallbacks = true,
	} = opts;

	// Normalise to engine rows shape { x, value }
	const normalized = data.map((d: any) => ({ x: d.x, value: d.value ?? d.y ?? null }));

	let engine: any = null;
	try {
		const eligibleCount = normalized.filter(
			(d) => typeof d.value === "number"
		).length;
		const settings: any = { minimumPoints };
		if (eligibleCount >= minimumPoints) settings.chartLevelEligibility = true;
		engine = buildSpcV26a({ chartType, metricImprovement, data: normalized, settings });
	} catch {
		engine = null;
	}

	const rows: any[] = (engine?.rows ?? []) as any[];
	// last real row for limits/means
	let last: any = rows[rows.length - 1] ?? null;
	for (let i = rows.length - 1; i >= 0; i--) {
		const r = rows[i];
		if (r && r.value != null && !r.ghost) {
			last = r;
			break;
		}
	}

	let visuals: SpcVisualCategory[] = [];
	try {
		visuals = computeSpcVisualCategories(rows as any, {
			metricImprovement,
			enableNeutralNoJudgement,
		});
	} catch {
		visuals = [];
	}

	const latestState = mapIconToVariation(
		last?.variationIcon as VariationIcon | null
	);
	const centerLine = (last?.mean ?? null) as number | null;
	const controlLimits = last
		? {
			lower: (last?.lowerProcessLimit ?? null) as number | null,
			upper: (last?.upperProcessLimit ?? null) as number | null,
			}
	: null;
	const sigmaBands = last
		? {
			upperOne: (last?.upperOneSigma ?? null) as number | null,
			upperTwo: (last?.upperTwoSigma ?? null) as number | null,
			lowerOne: (last?.lowerOneSigma ?? null) as number | null,
			lowerTwo: (last?.lowerTwoSigma ?? null) as number | null,
			}
	: null;

	let pointSignals: SpcPrecomputedSummary["pointSignals"] | undefined;
	let pointNeutralSpecialCause:
		| SpcPrecomputedSummary["pointNeutralSpecialCause"]
		| undefined;
	if (includeSignalFallbacks) {
		pointSignals = visualsToPointSignals(visuals as SpcVisualCategory[]);
		pointNeutralSpecialCause = visualsToNeutralFlags(visuals as SpcVisualCategory[]);
	}

	return {
		rows,
		visuals,
		latestState,
		centerLine,
		controlLimits,
		sigmaBands,
		pointSignals,
		pointNeutralSpecialCause,
	};
}
