import * as React from "react";
import "../../DataVisualisation.scss";
import "./SPCChart.scss";
import { ChartRoot } from "../../core/ChartRoot";
import { LineScalesProvider, useScaleContext } from "../../core/ScaleContext";
import { useChartContext } from "../../core/ChartRoot";
import { useTooltipContext } from "../../core/TooltipContext";
import Axis from "../../charts/Axis/Axis";
import GridLines from "../../charts/GridlLines/GridLines";
import LineSeriesPrimitive from "../../series/LineSeriesPrimitive";
// Replaced generic TooltipOverlay with SPC-specific enriched overlay
import SPCTooltipOverlay from "./SPCTooltipOverlay";
import { TooltipProvider } from "../../core/TooltipContext";
import VisuallyHiddenLiveRegion from "../../primitives/VisuallyHiddenLiveRegion";
import { SpcVariationIcon } from "../SPCIcons/SPCIcon";
import { SPCAssuranceIcon } from "../SPCIcons/SPCAssuranceIcon";
import { AssuranceResult } from "../SPCIcons/SPCConstants";
import { Direction } from "../SPCIcons/SPCConstants";
// Design tokens (accessibility colors)
import {
	buildSpc,
	ImprovementDirection,
	VariationIcon,
	AssuranceIcon,
	type ChartType,
	type SpcSettings,
} from "./logic/spc";
import { VariationJudgement, MetricPolarity } from "../SPCIcons/SPCConstants";
import { extractRuleIds, ruleGlossary, variationLabel } from './logic/spcDescriptors';

export interface SPCDatum {
	x: Date | string | number;
	y: number;
}
export interface SPCChartProps {
	data: SPCDatum[];
	ariaLabel?: string;
	height?: number;
	showZones?: boolean;
	showPoints?: boolean;
	announceFocus?: boolean;
	className?: string;
	/** Convenience unit alias (overrides narrationContext.measureUnit). Auto-detected as '%' when all y in [0,1] if not provided */
	unit?: string;
	/** Highlight points outside 3-sigma */
	highlightOutOfControl?: boolean;
	/** SPC chart type */
	chartType?: ChartType;
	/** Direction where higher/lower is better (affects variation + assurance icons) */
	metricImprovement?: ImprovementDirection;
	/** Show special-cause coloured point classes */
	enableRules?: boolean;
	/** Render variation/assurance icons (basic text markers for now) */
	showIcons?: boolean;
	/** Render embedded SPC variation icon in chart corner (defaults to true) */
	showEmbeddedIcon?: boolean;
	/** Optional targets per point (same length order as data) */
	targets?: (number | null | undefined)[];
	/** Baseline flags per point to start new partitions */
	baselines?: (boolean | null | undefined)[];
	/** Ghost flags per point (excluded from calc) */
	ghosts?: (boolean | null | undefined)[];
	/** Advanced engine settings (special-cause thresholds, rule toggles, assurance mode) */
	settings?: SpcSettings;
	/** Optional contextual metadata used to enrich accessible narration */
	narrationContext?: {
		measureName?: string;
		measureUnit?: string; // e.g. '%', 'ms', 'patients'
		datasetContext?: string; // e.g. "Monthly trust-wide data"
		organisation?: string;
		timeframe?: string; // free text timeframe summary
		additionalNote?: string; // intervention or caveat
	};
	/** When true, render light gradient band fills behind contiguous sequences of similarly coloured points (concern / improvement / common). */
	gradientSequences?: boolean;
	/** Stroke width (thickness) of the main process line. Defaults to 1. */
	processLineWidth?: number;
}

export const SPCChart: React.FC<SPCChartProps> = ({
	data,
	ariaLabel = "SPC chart",
	height = 260,
	showZones = true,
	showPoints = true,
	announceFocus = false,
	className,
	unit,
	highlightOutOfControl = true,
	chartType = "XmR",
	metricImprovement = ImprovementDirection.Neither,
	enableRules = true,
	showIcons = false,
	showEmbeddedIcon = true,
	targets: targetsProp,
	baselines,
	ghosts,
	settings,
	narrationContext,
	gradientSequences = false,
 	processLineWidth = 2,
}) => {
	const engine = React.useMemo(() => {
		const rowsInput = data.map((d, i) => ({
			x: d.x,
			value: d.y,
			target: targetsProp?.[i] ?? undefined,
			baseline: baselines?.[i] ?? undefined,
			ghost: ghosts?.[i] ?? undefined,
		}));
		try {
			return buildSpc({
				chartType,
				metricImprovement,
				data: rowsInput,
				settings,
			});
		} catch {
			return null;
		}
	}, [
		data,
		targetsProp,
		baselines,
		ghosts,
		chartType,
		metricImprovement,
		settings,
	]);

	// Representative row with populated limits (last available)
	const engineRepresentative = engine?.rows
		.slice()
		.reverse()
		.find((r) => r.mean != null);
	const mean = engineRepresentative?.mean ?? null;
	const ucl = engineRepresentative?.upperProcessLimit ?? null;
	const lcl = engineRepresentative?.lowerProcessLimit ?? null;
	const onePos = engineRepresentative?.upperOneSigma ?? null;
	const oneNeg = engineRepresentative?.lowerOneSigma ?? null;
	const twoPos = engineRepresentative?.upperTwoSigma ?? null;
	const twoNeg = engineRepresentative?.lowerTwoSigma ?? null;
	const sigma = mean != null && onePos != null ? Math.abs(onePos - mean) : 0;

	// Force SPC process line to neutral grey (#A6A6A6) to align with default point (common cause) colour.
	const series = React.useMemo(
		() => [{ id: "process", data, color: "#A6A6A6" }],
		[data]
	);
	const yDomain = React.useMemo(() => {
		const values = data.map((d) => d.y);
		const base = [...values];
		[mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg].forEach((v) => {
			if (v != null) base.push(v);
		});
		// Include any numeric targets so target line never sits outside vertical range
		if (targetsProp) targetsProp.forEach((t: number | null | undefined) => { if (typeof t === 'number' && !isNaN(t)) base.push(t); });
		if (!base.length) return undefined;
		return [Math.min(...base), Math.max(...base)];
	}, [data, mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg, targetsProp]);

	// Auto-detect percentage unit when all values in [0,1] and no explicit unit supplied
	const autoUnit = React.useMemo(() => {
		if (unit || narrationContext?.measureUnit) return undefined;
		if (!data.length) return undefined;
		return data.every(d => d.y >= 0 && d.y <= 1) ? '%' : undefined;
	}, [unit, narrationContext?.measureUnit, data]);

	const effectiveUnit = unit ?? narrationContext?.measureUnit ?? autoUnit;
	const effectiveNarrationContext = React.useMemo(() => {
		return effectiveUnit
			? { ...(narrationContext || {}), measureUnit: effectiveUnit }
			: narrationContext;
	}, [narrationContext, effectiveUnit]);

	// Derive embedded variation icon (now rendered above chart instead of inside SVG)
	const embeddedIcon = React.useMemo(() => {
		if (!showEmbeddedIcon || !engine?.rows?.length) return null;
		const engineRows = engine.rows;
		// Suppress embedded icon entirely when insufficient non-ghost points to establish stable limits
		const minPoints = settings?.minimumPoints ?? 13;
		const nonGhostCount = engineRows.filter(r => !r.ghost && r.value != null).length;
		if (nonGhostCount < minPoints) return null;
		let lastIdx = -1;
		for (let i = engineRows.length - 1; i >= 0; i--) {
			const r = engineRows[i];
			if (r && r.value != null && !r.ghost) { lastIdx = i; break; }
		}
		if (lastIdx === -1) return null;
		const lastRow = engineRows[lastIdx];
		const variation = lastRow.variationIcon as VariationIcon | undefined;
		const assuranceRaw = lastRow.assuranceIcon as AssuranceIcon | undefined;
		// Map engine assurance icon (which can be None) to visual AssuranceResult (which uses Uncertain)
		const assuranceRenderStatus: AssuranceResult = assuranceRaw === AssuranceIcon.Pass
			? AssuranceResult.Pass
			: assuranceRaw === AssuranceIcon.Fail
				? AssuranceResult.Fail
				: AssuranceResult.Uncertain; // treat None as Uncertain placeholder visually
		// Derive a trend/orientation hint for suppressed 'no judgement' cases so the purple arrow points towards the favourable direction
		let trend: Direction | undefined = undefined;
		if (variation === VariationIcon.None) {
			// A suppressed favourable single point will have exactly one of the singlePointAbove/Below flags set
			const singleHigh = lastRow.specialCauseSinglePointAbove;
			const singleLow = lastRow.specialCauseSinglePointBelow;
			if (metricImprovement === ImprovementDirection.Up) {
				// Higher is favourable: a suppressed high point should orient higher
				if (singleHigh) trend = Direction.Higher;
				else if (singleLow) trend = Direction.Lower; // defensive (should not be favourable)
			} else if (metricImprovement === ImprovementDirection.Down) {
				// Lower is favourable: a suppressed low point should orient lower
				if (singleLow) trend = Direction.Lower;
				else if (singleHigh) trend = Direction.Higher; // defensive
			} else {
				// Neutral metrics: default to higher to preserve legacy layout
				trend = Direction.Higher;
			}
		}
		let judgement: VariationJudgement;
		switch (variation) {
			case VariationIcon.Improvement:
				judgement = VariationJudgement.Improving;
				break;
			case VariationIcon.Concern:
				judgement = VariationJudgement.Deteriorating;
				break;
			case VariationIcon.None:
				judgement = VariationJudgement.No_Judgement;
				break;
			case VariationIcon.Neither:
			default:
				judgement = VariationJudgement.None;
		}
		let polarity: MetricPolarity;
		if (metricImprovement === ImprovementDirection.Up) {
			polarity = MetricPolarity.HigherIsBetter;
		} else if (metricImprovement === ImprovementDirection.Down) {
			polarity = MetricPolarity.LowerIsBetter;
		} else {
			polarity = MetricPolarity.ContextDependent;
		}
		const iconSize = 80;
		return (
			<div key={`embedded-icon-${lastIdx}`} style={{ display: 'flex', gap: 12, marginRight: 16 }}>
				<div
					className="fdp-spc-chart__embedded-icon"
					data-variation={String(variation)}
					data-variation-judgement={String(judgement)}
					data-trend-raw={trend ? String(trend) : 'none'}
					data-trend={trend ? String(trend) : 'none'}
					data-polarity={String(polarity ?? 'unknown')}
					style={{ width: iconSize, height: iconSize }}
				>
					<SpcVariationIcon
						dropShadow={false}
						data={{ judgement, polarity, ...(trend ? { trend } : {}) }}
						size={iconSize}
					/>
				</div>
				<div
					className="fdp-spc-chart__embedded-assurance-icon"
					data-assurance={String(assuranceRaw)}
					style={{ width: iconSize, height: iconSize }}
				>
					<SPCAssuranceIcon status={assuranceRenderStatus} size={iconSize} dropShadow={false} />
				</div>
			</div>
		);
	}, [showEmbeddedIcon, engine?.rows, metricImprovement, settings?.minimumPoints]);

	return (
		<div className={className ? `fdp-spc-chart-wrapper ${className}` : 'fdp-spc-chart-wrapper'}>
			{/* Top row containing right-aligned embedded variation icon */}
			{showEmbeddedIcon && (
				<div className="fdp-spc-chart__top-row" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
					{embeddedIcon}
				</div>
			)}
			<ChartRoot
				height={height}
				ariaLabel={ariaLabel}
				margin={{ bottom: 48, left: 56, right: 16, top: 12 }}
				className={undefined /* avoid duplicating outer class */}
			>
				<LineScalesProvider series={series as any} yDomain={yDomain as any}>
					<InternalSPC
						series={series as any}
						showPoints={showPoints}
						announceFocus={announceFocus}
						limits={{ mean, ucl, lcl, sigma, onePos, oneNeg, twoPos, twoNeg }}
						showZones={showZones}
						highlightOutOfControl={highlightOutOfControl}
						engineRows={engine?.rows || null}
						enableRules={enableRules}
						showIcons={showIcons}
						narrationContext={effectiveNarrationContext}
						metricImprovement={metricImprovement}
						gradientSequences={gradientSequences}
						processLineWidth={processLineWidth}
						effectiveUnit={effectiveUnit}
					/>
				</LineScalesProvider>
			</ChartRoot>
		</div>
	);
};

interface InternalProps {
	series: { id: string; data: SPCDatum[] }[];
	showPoints: boolean;
	announceFocus: boolean;
	limits: {
		mean?: number | null;
		ucl?: number | null;
		lcl?: number | null;
		sigma: number;
		onePos?: number | null;
		oneNeg?: number | null;
		twoPos?: number | null;
		twoNeg?: number | null;
	};
	showZones: boolean;
	highlightOutOfControl: boolean;
	engineRows: any[] | null;
	enableRules: boolean;
	showIcons: boolean;
	narrationContext?: {
		measureName?: string;
		measureUnit?: string;
		datasetContext?: string;
		organisation?: string;
		timeframe?: string;
		additionalNote?: string;
	};
	metricImprovement?: ImprovementDirection;
	gradientSequences: boolean;
	processLineWidth: number;
	effectiveUnit?: string;
}

const InternalSPC: React.FC<InternalProps> = ({
	series,
	showPoints,
	announceFocus,
	limits,
	showZones,
	highlightOutOfControl,
	engineRows,
	enableRules,
	showIcons,
	narrationContext,
	gradientSequences,
 	processLineWidth,
	effectiveUnit,
}) => {
	const scaleCtx = useScaleContext();
	const chartCtx = useChartContext();
	if (!scaleCtx) return null;
	const { xScale, yScale } = scaleCtx;
	const tooltipCtx = useTooltipContext();
	const all = series[0]?.data || [];
	const outOfControl = React.useMemo(() => {
		if (!limits.ucl && !limits.lcl) return new Set<number>();
		const set = new Set<number>();
		all.forEach((d, i) => {
			if (
				(limits.ucl != null && d.y > limits.ucl) ||
				(limits.lcl != null && d.y < limits.lcl)
			)
				set.add(i);
		});
		return set;
	}, [all, limits.ucl, limits.lcl]);

	// Map engine row signals by index (rowId is 1-based, order preserved relative to data input)
	const engineSignals = React.useMemo(() => {
		if (!engineRows) return null;
		const map: Record<
			number,
			{
				variation?: VariationIcon;
				assurance?: AssuranceIcon;
				special?: boolean;
				concern?: boolean;
				improvement?: boolean;
			}
		> = {};
		engineRows.forEach((r, idx) => {
			if (r.value == null || r.ghost) return;
			const anySpecial =
				r.specialCauseSinglePointAbove ||
				r.specialCauseSinglePointBelow ||
				r.specialCauseTwoOfThreeAbove ||
				r.specialCauseTwoOfThreeBelow ||
				r.specialCauseFourOfFiveAbove ||
				r.specialCauseFourOfFiveBelow ||
				r.specialCauseShiftHigh ||
				r.specialCauseShiftLow ||
				r.specialCauseTrendIncreasing ||
				r.specialCauseTrendDecreasing;
			map[idx] = {
				variation: r.variationIcon,
				assurance: r.assuranceIcon,
				special: anySpecial,
				concern: r.variationIcon === VariationIcon.Concern,
				improvement: r.variationIcon === VariationIcon.Improvement,
			};
		});
		return map;
	}, [engineRows]);

	// Derive a single uniform target (most common current usage) for drawing a horizontal reference line.
	const uniformTarget = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null;
		const values: number[] = [];
		for (const r of engineRows) {
			if (typeof r.target === 'number' && !isNaN(r.target)) values.push(r.target);
		}
		if (!values.length) return null;
		const first = values[0];
		return values.every(v => v === first) ? first : null; // only render when constant across series
	}, [engineRows]);

	// Preprocess categories with singleton coloured point absorption
	const categories = React.useMemo(() => {
		if (!engineSignals) return [] as ('concern' | 'improvement' | 'common')[];
		const raw: ('concern' | 'improvement' | 'common')[] = all.map((_d, i) => {
			const sig = engineSignals?.[i];
			if (sig?.concern) return 'concern';
			if (sig?.improvement) return 'improvement';
			return 'common';
		});
		// Absorb single coloured point interruptions (concern/improvement) flanked by identical common segments
		for (let i = 1; i < raw.length - 1; i++) {
			if ((raw[i] === 'concern' || raw[i] === 'improvement') && raw[i - 1] === 'common' && raw[i + 1] === 'common') {
				raw[i] = 'common';
			}
		}
		// New rule: absorb a single coloured point of one category that sits between two of the *other* coloured category
		// e.g. improvement (blue) between two concern (orange) points, or vice versa – treat as inconclusive (common) for wash fill
		for (let i = 1; i < raw.length - 1; i++) {
			const left = raw[i - 1];
			const mid = raw[i];
			const right = raw[i + 1];
			if (mid !== 'common' && left !== 'common' && right !== 'common' && left === right && mid !== left) {
				// Pattern: A B A with A,B both coloured -> make B common
				raw[i] = 'common';
			}
		}
		return raw;
	}, [engineSignals, all]);

	// Derive contiguous sequences after absorption
	const sequences = React.useMemo(() => {
		if (!gradientSequences || !categories.length) return [] as { start: number; end: number; category: 'concern' | 'improvement' | 'common' }[];
		const result: { start: number; end: number; category: 'concern' | 'improvement' | 'common' }[] = [];
		let runStart = 0;
		for (let i = 1; i <= categories.length; i++) {
			const changed = i === categories.length || categories[i] !== categories[runStart];
			if (changed) {
				const cat = categories[runStart];
				const runEnd = i - 1;
				const runLen = runEnd - runStart + 1;
				if (cat === 'common') {
					// Include all common runs (even single) to avoid gaps.
					result.push({ start: runStart, end: runEnd, category: 'common' });
				} else {
					// For coloured runs require length > 1 to show wash (skip isolated coloured point already absorbed earlier if flanked by common)
					if (runLen > 1) result.push({ start: runStart, end: runEnd, category: cat });
				}
				runStart = i;
			}
		}
		return result;
	}, [gradientSequences, categories]);

	// Precompute x positions for boundary calculations (after scales + data available)
	const xPositions = React.useMemo(() => all.map(d => xScale(d.x instanceof Date ? d.x : new Date(d.x))), [all, xScale]);
	const plotWidth = xScale.range()[1];

	// Build gradient definitions + rects
	const sequenceDefs = React.useMemo(() => {
		if (!sequences.length) return null;
		return (
			<defs>
				{sequences.map((seq, idx) => {
					const id = `spc-seq-grad-${idx}`;
					let baseVar: string;
					let top = 0.28, mid = 0.12, end = 0.045; // default (grey/common)
					switch (seq.category) {
						case 'concern':
							baseVar = 'var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)';
							// stronger wash for coloured sequences
							top = 0.28; mid = 0.12; end = 0.045;
							break;
						case 'improvement':
							baseVar = 'var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)';
							top = 0.26; mid = 0.11; end = 0.045;
							break;
						default:
							baseVar = 'var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)';
					}
					return (
						<linearGradient key={id} id={id} x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor={baseVar} stopOpacity={top} />
							<stop offset="70%" stopColor={baseVar} stopOpacity={mid} />
							<stop offset="100%" stopColor={baseVar} stopOpacity={end} />
						</linearGradient>
					);
				})}
			</defs>
		);
	}, [sequences]);

	const sequenceAreas = React.useMemo(() => {
		if (!sequences.length) return null;
		const [domainMin] = yScale.domain();
		const baseY = yScale(domainMin);
		const areas = sequences.map((seq, idx) => {
			const firstIdx = seq.start;
			const lastIdx = seq.end;
			const firstX = xPositions[firstIdx];
			const lastX = xPositions[lastIdx];
			const prevX = firstIdx > 0 ? xPositions[firstIdx - 1] : firstX;
			const nextX = lastIdx < xPositions.length - 1 ? xPositions[lastIdx + 1] : lastX;
			// Boundary midpoints (default behaviour for coloured runs)
			let left = firstIdx === 0 ? Math.max(0, firstX - (xPositions.length > 1 ? (xPositions[1] - firstX) / 2 : 10)) : (prevX + firstX) / 2;
			let right = lastIdx === xPositions.length - 1 ? Math.min(plotWidth, lastX + (xPositions.length > 1 ? (lastX - xPositions[xPositions.length - 2]) / 2 : 10)) : (lastX + nextX) / 2;
			// For common-cause (grey) sequences, extend to neighbouring actual point x positions so wash meets coloured washes directly.
			let extendLeftY: number | null = null;
			let extendRightY: number | null = null;
			if (seq.category === 'common') {
				if (firstIdx > 0) {
					left = xPositions[firstIdx - 1];
					// Always anchor left vertical to previous point's y so wash top aligns with preceding colour block
					extendLeftY = yScale(all[firstIdx - 1].y);
				}
				if (lastIdx < all.length - 1) {
					right = xPositions[lastIdx + 1];
					// Always anchor forward to next point height (even single-point run) for seamless bridge
					extendRightY = yScale(all[lastIdx + 1].y);
				}
			} else {
				// For coloured sequences (concern/improvement) start exactly under first point normally
				left = firstX;
				// But if previous point is a different coloured category, extend back to that previous point so seams align at point instead of midpoint
				if (firstIdx > 0) {
					const prevCat = categories[firstIdx - 1];
					if (prevCat !== 'common' && prevCat !== seq.category) {
						left = xPositions[firstIdx - 1];
						extendLeftY = yScale(all[firstIdx - 1].y);
					}
				}
			}
			// Build polygon: left baseline -> vertical up to first point -> through points -> down to baseline at lastX & right midpoint -> close
			let d = `M ${left} ${baseY}`;
			// Left side ascent: if we extended into previous point (common cause) use its Y, then go to first point
			const firstY = yScale(all[firstIdx].y);
			if (extendLeftY != null) {
				// vertical lift to previous point height
				d += ` L ${left} ${extendLeftY}`;
				if (firstX !== left) d += ` L ${firstX} ${firstY}`;
			} else {
				// standard: lift to first point height at left boundary (midpoint)
				d += ` L ${left} ${firstY}`;
				if (firstX !== left) d += ` L ${firstX} ${firstY}`;
			}
			for (let i = firstIdx; i <= lastIdx; i++) {
				const x = xPositions[i];
				const y = yScale(all[i].y);
				d += ` L ${x} ${y}`;
			}
			// Right descent: if common run and we extended to next point's x, bridge to that point height before dropping
			if (seq.category === 'common' && extendRightY != null) {
				// ensure path includes last point already; connect to next point height to avoid gap
				if (right !== lastX) {
					// draw towards next point height (straight line)
					d += ` L ${right} ${extendRightY}`;
				}
				// then drop to baseline at right boundary
				d += ` L ${right} ${baseY} Z`;
			} else {
				// standard closure via last point down to baseline then to right boundary baseline
				d += ` L ${lastX} ${baseY} L ${right} ${baseY} Z`;
			}
			return (
				<path
					key={`seq-area-${idx}`}
					d={d}
					fill={`url(#spc-seq-grad-${idx})`}
					stroke="none"
					className="fdp-spc__sequence-bg"
					aria-hidden="true"
				/>
			);
		});
		return <g className="fdp-spc__sequence-bgs">{areas}</g>;
	}, [sequences, xPositions, plotWidth, yScale, all]);

	// Live region formatter (invoked only when announceFocus prop true)
	// Derive descriptive timeframe if not explicitly provided
	const computedTimeframe = React.useMemo(() => {
		if (!narrationContext?.timeframe && all.length >= 2) {
			const xs = all.map((d) => (d.x instanceof Date ? d.x : new Date(d.x)));
			const min = new Date(Math.min(...xs.map((d) => d.getTime())));
			const max = new Date(Math.max(...xs.map((d) => d.getTime())));
			const diffDays =
				Math.round((max.getTime() - min.getTime()) / 86400000) || 0;
			if (diffDays < 14)
				return `The chart shows a timeframe of ${diffDays + 1} days`;
			const weeks = Math.round(diffDays / 7);
			if (weeks < 20) return `The chart shows a timeframe of ${weeks} weeks`;
			const months =
				(max.getFullYear() - min.getFullYear()) * 12 +
				(max.getMonth() - min.getMonth()) +
				1; // inclusive months span
			return `The chart shows a timeframe of ${months} months`;
		}
		if (narrationContext?.timeframe) {
			return `The chart shows a timeframe of ${narrationContext.timeframe}`;
		}
		return undefined;
	}, [narrationContext?.timeframe, all]);

	const ordinal = (n: number) => {
		const mod10 = n % 10,
			mod100 = n % 100;
		if (mod10 === 1 && mod100 !== 11) return `${n}st`;
		if (mod10 === 2 && mod100 !== 12) return `${n}nd`;
		if (mod10 === 3 && mod100 !== 13) return `${n}rd`;
		return `${n}th`;
	};
	const formatDateLong = (d: Date) =>
		`${ordinal(d.getDate())} ${d.toLocaleString("en-GB", { month: "long" })}, ${d.getFullYear()}`;

	const formatLive = React.useCallback(
		({ index, x, y }: { seriesId: string; x: Date; y: number; index: number }) => {
			const row = engineRows?.[index];
			const dateObj = x instanceof Date ? x : new Date(x);
			const dateLabel = formatDateLong(dateObj);
			const unit = narrationContext?.measureUnit ? ` ${narrationContext.measureUnit}` : "";
			const measure = narrationContext?.measureName ? ` ${narrationContext.measureName}` : "";
			if (!row) {
				return `General summary is: ${computedTimeframe ? computedTimeframe + ". " : ""}Point ${index + 1}, ${dateLabel}, ${y}${unit}${measure}`;
			}
			const varLabel = variationLabel(row.variationIcon) || "Variation";
			const ruleIds = extractRuleIds(row);
			const ruleNarr = ruleIds.length
				? ` Rules: ${[...new Set(ruleIds.map(r => ruleGlossary[r].narration))].join("; ")}.`
				: " No special cause rules.";
			const ctxParts: string[] = [];
			if (narrationContext?.measureName) ctxParts.push(`Measure: ${narrationContext.measureName}.`);
			if (narrationContext?.datasetContext) ctxParts.push(`${narrationContext.datasetContext}.`);
			if (narrationContext?.organisation) ctxParts.push(`Organisation: ${narrationContext.organisation}.`);
			if (narrationContext?.additionalNote) ctxParts.push(narrationContext.additionalNote);
			return [
				`General summary is:`,
				...ctxParts,
				`Point ${index + 1} recorded on `,
				dateLabel + ",",
				`with a value of ${y} ${unit}${measure}`,
				varLabel + ".",
				ruleNarr,
			]
				.join(" ")
				.replace(/\s+/g, " ")
				.trim();
		},
		[engineRows, narrationContext, computedTimeframe]
	);

	// Per-point aria-description (long form) reusing formatLive but omitting leading "Point N" for brevity.
	const describePoint = React.useCallback(
		(index: number, d: SPCDatum): string | undefined => {
			const row = engineRows?.[index];
			if (!row) return undefined;
			const base = formatLive({
				index,
				seriesId: "process",
				x: d.x instanceof Date ? d.x : new Date(d.x),
				y: d.y,
			});
			// Remove leading "Point N " if present to reduce repetition when screen reader announces label then description.
			return base
				.replace(/^General summary is:\s*/, "")
				.replace(/^Point \d+\s*/, "");
		},
		[engineRows, formatLive]
	);

	return (
		<TooltipProvider>
			<div
				className="fdp-spc-chart"
				role="group"
				aria-label="Statistical process control chart"
				aria-roledescription="chart"
			>
				<svg
					width={scaleCtx.xScale.range()[1] + 56 + 16}
					height={scaleCtx.yScale.range()[0] + 12 + 48}
					role="img"
				>
					<g transform={`translate(56,12)`}>
						<Axis type="x" />
						<Axis type="y" />
						<GridLines axis="y" />
						{sequenceDefs}
						{sequenceAreas}
						{limits.mean != null && (
							<line
								className="fdp-spc__cl"
								x1={0}
								x2={xScale.range()[1]}
								y1={yScale(limits.mean)}
								y2={yScale(limits.mean)}
								aria-hidden="true"
							/>
						)}
						{uniformTarget != null && (
							// Render later (after limits) for stacking; temporary placeholder (moved below)
							<></>
						)}
						{limits.ucl != null && (
							<line
								className="fdp-spc__limit fdp-spc__limit--ucl"
								x1={0}
								x2={xScale.range()[1]}
								y1={yScale(limits.ucl)}
								y2={yScale(limits.ucl)}
								aria-hidden="true"
								strokeWidth={2}
							/>
						)}
						{limits.lcl != null && (
							<line
								className="fdp-spc__limit fdp-spc__limit--lcl"
								x1={0}
								x2={xScale.range()[1]}
								y1={yScale(limits.lcl)}
								y2={yScale(limits.lcl)}
								aria-hidden="true"
								strokeWidth={2}
							/>
						)}
						{/* Target line drawn after limits for clear visibility */}
						{uniformTarget != null && (
							<g aria-hidden="true" className="fdp-spc__target-group">
								<line
									className="fdp-spc__target"
									data-testid="spc-target-line"
									x1={0}
									x2={xScale.range()[1]}
									y1={yScale(uniformTarget)}
									y2={yScale(uniformTarget)}
									strokeWidth={2.5}
								/>
								<text
									data-testid="spc-target-label"
									x={xScale.range()[0] - 7}
									y={yScale(uniformTarget) - 5}
									textAnchor="start"
									className="fdp-spc__target-label"
									fontSize={12}
								>
									Target {uniformTarget} {effectiveUnit || narrationContext?.measureUnit || ''}
								</text>
							</g>
						)}
						{showZones && limits.mean != null && (
							<>
								{limits.onePos != null && (
									<line
										className="fdp-spc__zone fdp-spc__zone--pos1"
										x1={0}
										x2={xScale.range()[1]}
										y1={yScale(limits.onePos)}
										y2={yScale(limits.onePos)}
										aria-hidden="true"
										strokeWidth={2}
									/>
								)}
								{limits.oneNeg != null && (
									<line
										className="fdp-spc__zone fdp-spc__zone--neg1"
										x1={0}
										x2={xScale.range()[1]}
										y1={yScale(limits.oneNeg)}
										y2={yScale(limits.oneNeg)}
										aria-hidden="true"
										strokeWidth={2}
									/>
								)}
								{limits.twoPos != null && (
									<line
										className="fdp-spc__zone fdp-spc__zone--pos2"
										x1={0}
										x2={xScale.range()[1]}
										y1={yScale(limits.twoPos)}
										y2={yScale(limits.twoPos)}
										aria-hidden="true"
										strokeWidth={2}
									/>
								)}
								{limits.twoNeg != null && (
									<line
										className="fdp-spc__zone fdp-spc__zone--neg2"
										x1={0}
										x2={xScale.range()[1]}
										y1={yScale(limits.twoNeg)}
										y2={yScale(limits.twoNeg)}
										aria-hidden="true"
										strokeWidth={2}
									/>
								)}
							</>
						)}
						<LineSeriesPrimitive
							series={series[0] as any}
							seriesIndex={0}
							palette="categorical"
							showPoints={false}
							focusablePoints={false}
							focusIndex={-1}
							parseX={(d: SPCDatum) =>
								d.x instanceof Date ? d.x : new Date(d.x)
							}
							smooth={false}
							strokeWidth={processLineWidth}
						/>
						{showPoints &&
							all.map((d, i) => {
								const cx = xScale(d.x instanceof Date ? d.x : new Date(d.x));
								const cy = yScale(d.y);
								const ooc = outOfControl.has(i);
								const sig = engineSignals?.[i];
								const classes = [
									"fdp-spc__point",
									ooc && highlightOutOfControl ? "fdp-spc__point--ooc" : null,
									enableRules && sig?.special && sig.concern
										? "fdp-spc__point--sc-concern"
										: null,
									enableRules && sig?.special && sig.improvement
										? "fdp-spc__point--sc-improvement"
										: null,
									sig?.assurance === AssuranceIcon.Pass
										? "fdp-spc__point--assurance-pass"
										: null,
									sig?.assurance === AssuranceIcon.Fail
										? "fdp-spc__point--assurance-fail"
										: null,
								]
									.filter(Boolean)
									.join(" ");
								const ariaLabel =
									`Point ${i + 1} value ${d.y}` +
									(sig?.special ? " special cause" : "") +
									(sig?.variation === VariationIcon.Improvement
										? " improving"
										: sig?.variation === VariationIcon.Concern
											? " concern"
											: "");
								// Removed per refined ARIA approach: rely on tooltip via aria-describedby for detailed context
								const isFocused = tooltipCtx?.focused?.index === i;
								return (
									<circle
										key={i}
										cx={cx}
										cy={cy}
										r={5} // unified radius for consistency across all points
										className={classes}
										data-variation={sig?.variation}
										data-assurance={sig?.assurance}
										aria-label={ariaLabel}
										{...(isFocused ? { 'aria-describedby': `spc-tooltip-${i}` } : {})}
									/>
								);
							})}
						{showIcons &&
							enableRules &&
							engineSignals &&
							all.map((d, i) => {
								const sig = engineSignals[i];
								if (!sig) return null;
								if (!(sig.concern || sig.improvement)) return null;
								const rawX = xScale(d.x instanceof Date ? d.x : new Date(d.x));
								const rawPointY = yScale(d.y);
								let iconY = rawPointY - 10; // preferred: above point
								const topPadding = 12; // must stay >= group translate y (12) for visibility
								const bottomLimit = yScale.range()[0] - 4; // small bottom padding
								if (iconY < topPadding) {
									// If too close to top, place below point instead (avoids clipping + overlap)
									// When forced below the point, add extra 10px vertical gap for clarity
									iconY = Math.min(rawPointY + 16, bottomLimit);
								}
								// Horizontal clamp so text anchor centre doesn't overflow
								const plotWidth = xScale.range()[1];
								const iconX = Math.min(Math.max(rawX, 0), plotWidth - 0);
								return (
									<text
										key={`icon-${i}`}
										x={iconX}
										y={iconY}
										textAnchor="middle"
										className={`fdp-spc__icon ${sig.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`}
										aria-hidden="true"
									>
										{sig.concern ? "!" : "★"}
									</text>
								);
							})}
						{/* Pointer / keyboard interaction layer (covers plot area) */}
						{chartCtx && (
							<InteractionLayer
								width={xScale.range()[1]}
								height={yScale.range()[0]}
							/>
						)}
						<SPCTooltipOverlay
							engineRows={engineRows}
							limits={{ mean: limits.mean, sigma: limits.sigma }}
							pointDescriber={describePoint}
							measureName={narrationContext?.measureName}
							measureUnit={narrationContext?.measureUnit}
							dateFormatter={(d: Date) => formatDateLong(d)}
						/>

						</g>
				</svg>
				{announceFocus && (
					<VisuallyHiddenLiveRegion
						format={(d) =>
							formatLive({ ...d, x: d.x instanceof Date ? d.x : new Date(d.x) })
						}
					/>
				)}
			</div>
		</TooltipProvider>
	);
};

// Transparent rectangle capturing pointer + keyboard events to drive tooltip focus
const InteractionLayer: React.FC<{ width: number; height: number }> = ({
	width,
	height,
}) => {
	const t = useTooltipContext();
	if (!t) return null;
	return (
		<rect
			className="fdp-spc__interaction-layer"
			width={width}
			height={height}
			fill="transparent"
			tabIndex={0}
			aria-label="Interactive chart area. Use arrow keys to move between points."
			onMouseMove={(e) => {
				const target = e.currentTarget as SVGRectElement;
				const bounds = target.getBoundingClientRect();
				const x = e.clientX - bounds.left;
				const y = e.clientY - bounds.top;
				t.focusNearest(x, y);
			}}
			onMouseLeave={() => t.clear()}
			onKeyDown={(e) => {
				switch (e.key) {
					case "ArrowRight":
						t.focusNextPoint();
						e.preventDefault();
						break;
					case "ArrowLeft":
						t.focusPrevPoint();
						e.preventDefault();
						break;
					case "ArrowDown":
						t.focusNextSeries();
						e.preventDefault();
						break;
					case "ArrowUp":
						t.focusPrevSeries();
						e.preventDefault();
						break;
					case "Home":
						t.focusFirstPoint();
						e.preventDefault();
						break;
					case "End":
						t.focusLastPoint();
						e.preventDefault();
						break;
				}
			}}
			style={{ cursor: "crosshair" }}
		/>
	);
};

export { ImprovementDirection, VariationIcon, AssuranceIcon };
export default SPCChart;
