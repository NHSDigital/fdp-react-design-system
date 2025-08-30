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
import {
	buildSpc,
	ImprovementDirection,
	VariationIcon,
	AssuranceIcon,
	type ChartType,
	type SpcSettings,
} from "./logic/spc";
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
}

export const SPCChart: React.FC<SPCChartProps> = ({
	data,
	ariaLabel = "SPC chart",
	height = 260,
	showZones = true,
	showPoints = true,
	announceFocus = false,
	className,
	highlightOutOfControl = true,
	chartType = "XmR",
	metricImprovement = ImprovementDirection.Neither,
	enableRules = true,
	showIcons = false,
	targets,
	baselines,
	ghosts,
	settings,
	narrationContext,
}) => {
	const engine = React.useMemo(() => {
		const rowsInput = data.map((d, i) => ({
			x: d.x,
			value: d.y,
			target: targets?.[i] ?? undefined,
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
		targets,
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
		if (!base.length) return undefined;
		return [Math.min(...base), Math.max(...base)];
	}, [data, mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg]);

	return (
		<ChartRoot
			height={height}
			ariaLabel={ariaLabel}
			margin={{ bottom: 48, left: 56, right: 16, top: 12 }}
			className={className}
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
					narrationContext={narrationContext}
				/>
			</LineScalesProvider>
		</ChartRoot>
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
						{limits.ucl != null && (
							<line
								className="fdp-spc__limit fdp-spc__limit--ucl"
								x1={0}
								x2={xScale.range()[1]}
								y1={yScale(limits.ucl)}
								y2={yScale(limits.ucl)}
								aria-hidden="true"
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
							/>
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
