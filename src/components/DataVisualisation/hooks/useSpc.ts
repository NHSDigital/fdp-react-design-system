import * as React from "react";
import { buildSpc } from "../charts/SPC/SPCChart/logic/spc";
import { buildSpcSqlCompat } from "../charts/SPC/SPCChart/logic/spcSqlCompat";
import {
	VARIATION_COLOURS,
	VariationState,
} from "../charts/SPC/SPCIcons/SPCConstants";
import {
	ChartType,
	ImprovementDirection,
} from "../charts/SPC/SPCChart/logic/spcConstants";
import type {
	SPCSparkProps,
	SPCSparkPoint,
} from "../charts/SPC/SPCSpark/SPCSpark.types";
import { getGradientOpacities } from "../charts/SPC/SPCIcons/tokenUtils";

// Helper: map engine icon + neutral flag to VariationState (without series-level No Judgement override)
function mapIconToVariation(
	icon?: string,
	neutralSpecial?: boolean
): VariationState | null {
	if (icon === "improvement") return VariationState.SpecialCauseImproving;
	if (icon === "concern") return VariationState.SpecialCauseDeteriorating;
	if (icon === "suppressed" || (icon === "neither" && neutralSpecial))
		return VariationState.SpecialCauseNoJudgement;
	if (icon === "neither") return VariationState.CommonCause;
	return null;
}

// Helper: whether an icon/neutral combo represents a special-cause data point
function isSpecialCauseIcon(icon?: string, neutralSpecial?: boolean): boolean {
	return (
		icon === "improvement" ||
		icon === "concern" ||
		icon === "suppressed" ||
		(icon === "neither" && !!neutralSpecial)
	);
}

// Helper: hex -> rgb tuple
function hexToRgb(h: string): [number, number, number] {
	const v = h.replace("#", "");
	return [
		parseInt(v.slice(0, 2), 16),
		parseInt(v.slice(2, 4), 16),
		parseInt(v.slice(4, 6), 16),
	];
}

export interface UseSpcInput {
	values: Array<number | null>;
	x?: Array<string | number | Date>;
	chartType?: ChartType; // default XmR
	metricImprovement?: ImprovementDirection;
	/** When true, run the SQL-compatibility wrapper (post-hoc directional pruning) for parity with SPCChart's `useSqlCompatEngine`. */
	useSqlCompatEngine?: boolean;
	showLimits?: boolean;
	showLimitBand?: boolean;
	showInnerBands?: boolean;
	showMean?: boolean;
	autoClassify?: boolean; // spark auto-classification fallback
}

export interface UseSpcResult {
	sparkProps: Pick<
		SPCSparkProps,
		| "data"
		| "showMean"
		| "showLimits"
		| "showLimitBand"
		| "showInnerBands"
		| "metricImprovement"
		| "variationState"
		| "centerLine"
		| "controlLimits"
		| "pointSignals"
		| "autoClassify"
		| "onClassification"
	>;
	/** Inline style variables for MetricCard background and accent colour */
	metricCardStyle: React.CSSProperties;
	/** Latest SPC state (Improving/Concern/Common/No‑Judgement) */
	latestState: VariationState | null;
}

/**
 * useSpc – derive SPC-backed visual props for SPCSpark and SPCMetricCard from raw values.
 * It runs the full SPC engine for consistent classification and also computes a colour to
 * tint the MetricCard background/accent based on the latest point’s state.
 */
export function useSpc(input: UseSpcInput): UseSpcResult {
	const {
		values,
		x,
		chartType = ChartType.XmR,
		metricImprovement = ImprovementDirection.Neither,
		useSqlCompatEngine = false,
		showLimits = true,
		showLimitBand = false,
		showInnerBands = false,
		showMean = false,
		autoClassify = true,
	} = input;

	const rows = React.useMemo(() => {
		const pts: SPCSparkPoint[] = [];
		for (let i = 0; i < values.length; i++) {
			pts.push({ x: x?.[i], value: values[i] });
		}
		return pts;
	}, [values, x]);

	// Build engine result for consistent classification and limits
	const engine = React.useMemo(() => {
		try {
			const data = rows.map((r, i) => ({ x: (r.x as any) ?? i, value: r.value }));
			if (useSqlCompatEngine) {
				return buildSpcSqlCompat({ chartType, metricImprovement, data, settings: {} });
			}
			return buildSpc({ chartType, metricImprovement, data, settings: {} });
		} catch {
			return null;
		}
	}, [rows, chartType, metricImprovement, useSqlCompatEngine]);

	// Choose the last real row (value not null, not ghost) for centre/limits
	const lastRealRow = React.useMemo(() => {
		const rowsEngine: any[] | undefined = (engine as any)?.rows;
		if (!rowsEngine || rowsEngine.length === 0) return null;
		for (let i = rowsEngine.length - 1; i >= 0; i--) {
			const r = rowsEngine[i];
			if (r && r.value != null && !r.ghost) return r;
		}
		return rowsEngine[rowsEngine.length - 1] ?? null;
	}, [engine]);

	// Determine latest state from representative rows (or rows fallback)
	const latestState: VariationState | null = React.useMemo(() => {
		const repr = (engine as any)?.rowsRepresentative ?? (engine as any)?.rows;
		if (!repr || !Array.isArray(repr) || repr.length === 0) return null;
		const last = repr[repr.length - 1];
		return mapIconToVariation(
			last?.variationIcon as any,
			(last?.specialCauseNeitherValue ?? null) != null
		);
	}, [engine]);

	// Engine-derived centre line, limits, and per-point signals (prefer latest real row)
	const centerLine: number | null = React.useMemo(() => {
		return (lastRealRow?.mean ?? null) as number | null;
	}, [lastRealRow]);

	const controlLimits: { lower: number | null; upper: number | null } | null =
		React.useMemo(() => {
			if (!lastRealRow) return null;
			const lower = (lastRealRow?.lowerProcessLimit ?? null) as number | null;
			const upper = (lastRealRow?.upperProcessLimit ?? null) as number | null;
			if (lower == null && upper == null) return null;
			return { lower, upper };
		}, [lastRealRow]);

	const sigmaBands: {
		upperOne: number | null;
		upperTwo: number | null;
		lowerOne: number | null;
		lowerTwo: number | null;
	} | null = React.useMemo(() => {
		if (!lastRealRow) return null;
		return {
			upperOne: (lastRealRow?.upperOneSigma ?? null) as number | null,
			upperTwo: (lastRealRow?.upperTwoSigma ?? null) as number | null,
			lowerOne: (lastRealRow?.lowerOneSigma ?? null) as number | null,
			lowerTwo: (lastRealRow?.lowerTwoSigma ?? null) as number | null,
		};
	}, [lastRealRow]);

	const pointSignals:
		| Array<"improvement" | "concern" | "neither" | null>
		| undefined = React.useMemo(() => {
		const rowsEngine: any[] | undefined = (engine as any)?.rows;
		if (!rowsEngine || rowsEngine.length === 0) return undefined;
		// If using SQL compatibility wrapper, derive signals directly from the post-pruning variationIcon
		if (useSqlCompatEngine) {
			return rowsEngine.map((r) => {
				const icon = r?.variationIcon as string | undefined;
				if (icon === "improvement") return "improvement" as const;
				if (icon === "concern") return "concern" as const;
				return "neither" as const;
			});
		}
		// Default engine path: determine up/down then map via polarity
		return rowsEngine.map((r) => {
			const up =
				Boolean(r?.specialCauseSinglePointUp) ||
				Boolean(r?.specialCauseTwoOfThreeUp) ||
				Boolean(r?.specialCauseFourOfFiveUp) ||
				Boolean(r?.specialCauseShiftUp) ||
				Boolean(r?.specialCauseTrendUp);
			const down =
				Boolean(r?.specialCauseSinglePointDown) ||
				Boolean(r?.specialCauseTwoOfThreeDown) ||
				Boolean(r?.specialCauseFourOfFiveDown) ||
				Boolean(r?.specialCauseShiftDown) ||
				Boolean(r?.specialCauseTrendDown);
			// Map up/down to improvement/concern based on metricImprovement polarity
			switch (metricImprovement) {
				case ImprovementDirection.Up: {
					if (up) return "improvement" as const;
					if (down) return "concern" as const;
					return "neither" as const;
				}
				case ImprovementDirection.Down: {
					if (down) return "improvement" as const;
					if (up) return "concern" as const;
					return "neither" as const;
				}
				case ImprovementDirection.Neither:
				default:
					// In neutral metrics, avoid implying improvement/concern; leave as neither
					return "neither" as const;
			}
		});
	}, [engine, metricImprovement, useSqlCompatEngine]);

	// Neutral special-cause flags per point (variation 'neither' with specialCauseNeitherValue present)
	const pointNeutralSpecialCause: boolean[] | undefined = React.useMemo(() => {
		const rowsEngine: any[] | undefined = (engine as any)?.rows;
		if (!rowsEngine || rowsEngine.length === 0) return undefined;
		return rowsEngine.map((r) => Boolean(r?.specialCauseNeitherValue));
	}, [engine]);

	// Build gradient/accent style based on the final point's signal colour
	const metricCardStyle: React.CSSProperties = React.useMemo(() => {
		// Use the precomputed lastRealRow when available
		let lastSignalState: VariationState | null = null;
		if (lastRealRow && lastRealRow.value != null && !lastRealRow.ghost) {
			const icon: string | undefined = lastRealRow.variationIcon;
			const neutralSpecial = (lastRealRow?.specialCauseNeitherValue ?? null) != null;
			if (latestState === VariationState.SpecialCauseNoJudgement) {
				// In a No Judgement series context, any special-cause final point renders purple, else grey
				lastSignalState = isSpecialCauseIcon(icon, neutralSpecial)
					? VariationState.SpecialCauseNoJudgement
					: VariationState.CommonCause;
			} else {
				lastSignalState = mapIconToVariation(icon, neutralSpecial) ?? VariationState.CommonCause;
			}
		}
		const chosen = lastSignalState ?? VariationState.CommonCause;
		const hex = VARIATION_COLOURS[chosen].hex;
		const [r, g, b] = hexToRgb(hex);
		const stops = getGradientOpacities();
		const bg = `linear-gradient(180deg, rgba(${r}, ${g}, ${b}, ${stops.start}) 0%, rgba(${r}, ${g}, ${b}, ${stops.mid}) 50%, rgba(${r}, ${g}, ${b}, ${stops.end}) 100%)`;
		return {
			["--fdp-metric-card-bg"]: bg,
			["--fdp-metric-card-accent"]: hex,
		} as React.CSSProperties as Record<string, any>;
	}, [lastRealRow, latestState]);

	// Spark props – prefer engine-derived values and avoid duplicate classification
	const sparkProps: UseSpcResult["sparkProps"] = React.useMemo(() => {
		return {
			data: rows,
			showMean,
			showLimits,
			showLimitBand,
			showInnerBands,
			metricImprovement,
			centerLine,
			controlLimits,
			sigmaBands,
			pointSignals,
			pointNeutralSpecialCause,
			variationState: latestState ?? undefined,
			autoClassify: !!(autoClassify && !latestState),
			onClassification: () => {},
		};
	}, [
		rows,
		showMean,
		showLimits,
		showLimitBand,
		showInnerBands,
		metricImprovement,
		autoClassify,
		latestState,
		centerLine,
		controlLimits?.lower,
		controlLimits?.upper,
		sigmaBands?.upperOne,
		sigmaBands?.upperTwo,
		sigmaBands?.lowerOne,
		sigmaBands?.lowerTwo,
		pointSignals?.length,
		pointNeutralSpecialCause?.length,
	]);

	return { sparkProps, metricCardStyle, latestState };
}

export default useSpc;
