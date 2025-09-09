import * as React from "react";
import "../../../DataVisualisation.scss";
import "./SPCChart.scss";
import { ChartRoot } from "../../../core/ChartRoot";
import {
	LineScalesProvider,
	useScaleContext,
} from "../../../core/ScaleContext";
import { useChartContext } from "../../../core/ChartRoot";
import { useTooltipContext } from "../../../core/TooltipContext";
import Axis from "../../Axis/Axis";
import GridLines from "../../GridlLines/GridLines";
import LineSeriesPrimitive from "../../../series/LineSeriesPrimitive";
// Replaced generic TooltipOverlay with SPC-specific enriched overlay
import SPCTooltipOverlay from "./SPCTooltipOverlay";
import { TooltipProvider } from "../../../core/TooltipContext";
import VisuallyHiddenLiveRegion from "../../../primitives/VisuallyHiddenLiveRegion";
import { SPCVariationIcon } from "../SPCIcons/SPCIcon";
import { SPCAssuranceIcon } from "../SPCIcons/SPCAssuranceIcon";
import { AssuranceResult } from "../SPCIcons/SPCConstants";
import { Direction } from "../SPCIcons/SPCConstants";
// Design tokens (accessibility colors)
import {
	buildSpc,
	ImprovementDirection,
	VariationIcon,
	AssuranceIcon,
	ChartType,
	SpcWarningSeverity,
	SpcWarningCategory,
	SpcWarningCode,
	type SpcSettings,
} from "./logic/spc";
import { Tag } from "../../../../Tag/Tag";
import Table from "../../../../Tables/Table";
import { MetricPolarity } from "../SPCIcons/SPCConstants";
import {
	extractRuleIds,
	ruleGlossary,
	variationLabel,
} from "./logic/spcDescriptors";

// Global counter to create stable, unique gradient id bases across multiple SPCChart instances
let spcSequenceInstanceCounter = 0;

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
	/** Variant style for embedded SPC variation icon (classic triangle / triangleWithRun). */
	embeddedIconVariant?: "classic" | "triangle" | "triangleWithRun";
	/** Run length (0-5) for triangleWithRun embedded variation icon variant. Ignored otherwise. */
	embeddedIconRunLength?: number;
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
	/** When true, render vertical dashed markers at partition (baseline) boundaries */
	showPartitionMarkers?: boolean;
	/** When true, renders a diagnostics warnings panel below the icon row */
	showWarningsPanel?: boolean;
	/** Filter for warnings rendered in the panel */
	warningsFilter?: {
		severities?: SpcWarningSeverity[];
		categories?: SpcWarningCategory[];
		codes?: SpcWarningCode[];
	};
	/** Show neutral special-cause (no-judgement) purple styling on points and tooltip. Defaults to true. */
	enableNeutralNoJudgement?: boolean;
	/** Show the trend side-gating explanation text in the tooltip. Defaults to true. */
	showTrendGatingExplanation?: boolean;
	/** Engine-level: when true, disables trend side-gating so early trend points classify directionally (Concern/Improvement) even before crossing the mean. Defaults to true. */
	disableTrendSideGating?: boolean;
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
	chartType = ChartType.XmR,
	metricImprovement = ImprovementDirection.Neither,
	enableRules = true,
	showIcons = false,
	showEmbeddedIcon = true,
	embeddedIconVariant = "classic",
	embeddedIconRunLength,
	targets: targetsProp,
	baselines,
	ghosts,
	settings,
	narrationContext,
	gradientSequences = false,
	processLineWidth = 2,
	showWarningsPanel = false,
	warningsFilter,
	enableNeutralNoJudgement = true,
	showTrendGatingExplanation = true,
	disableTrendSideGating = true,
}) => {
	// Optional flags now available as props
	// Human-friendly label for SpcWarningCode values (snake_case -> Capitalised words)
	const formatWarningCode = React.useCallback(
		(code: SpcWarningCode | string): string => {
			const raw = String(code);
			return raw
				.replace(/^spc_warning_code\.?/i, "") // defensive: strip enum prefix if ever serialized
				.replace(/[_\-]+/g, " ") // underscores/hyphens -> space
				.trim()
				.split(" ")
				.filter(Boolean)
				.map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
				.join(" ");
		},
		[]
	);

	// Human friendly label for SpcWarningCategory values (snake_case -> Capitalised words)
	const formatWarningCategory = React.useCallback(
		(cat: SpcWarningCategory | string): string => {
			return String(cat)
				.replace(/[_\-]+/g, " ")
				.trim()
				.split(" ")
				.filter(Boolean)
				.map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
				.join(" ");
		},
		[]
	);
	const engine = React.useMemo(() => {
		const rowsInput = data.map((d, i) => ({
			x: d.x,
			value: d.y,
			target: targetsProp?.[i] ?? undefined,
			baseline: baselines?.[i] ?? undefined,
			ghost: ghosts?.[i] ?? undefined,
		}));
		try {
			// Merge settings shallowly and apply trendSideGatingEnabled override if requested.
			const engineSettings: SpcSettings | undefined = settings
				? { ...settings, trendSideGatingEnabled: settings.trendSideGatingEnabled ?? !disableTrendSideGating }
				: { trendSideGatingEnabled: !disableTrendSideGating };
			return buildSpc({
				chartType,
				metricImprovement,
				data: rowsInput,
				settings: engineSettings,
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
		disableTrendSideGating,
	]);

	// Representative row with populated limits (last available)
	const engineRepresentative = engine?.rows
		.slice()
		.reverse()
		.find((r) => r.mean != null);
	const mean = engineRepresentative?.mean ?? null;
	const warnings = engine?.warnings || [];
	const filteredWarnings = React.useMemo(() => {
		if (!warnings.length) return [] as typeof warnings;
		if (!warningsFilter) return warnings;
		return warnings.filter((w) => {
			if (
				warningsFilter.severities &&
				w.severity &&
				!warningsFilter.severities.includes(w.severity)
			)
				return false;
			if (
				warningsFilter.categories &&
				w.category &&
				!warningsFilter.categories.includes(w.category)
			)
				return false;
			if (
				warningsFilter.codes &&
				!warningsFilter.codes.includes(w.code as SpcWarningCode)
			)
				return false;
			return true;
		});
	}, [warnings, warningsFilter]);

	// Accessible live announcement for diagnostics panel updates
	const [diagnosticsMessage, setDiagnosticsMessage] =
		React.useState<string>("");
	const lastDiagnosticsRef = React.useRef<string>("");
	React.useEffect(() => {
		if (!showWarningsPanel) {
			if (lastDiagnosticsRef.current !== "") {
				lastDiagnosticsRef.current = "";
				setDiagnosticsMessage("");
			}
			return;
		}
		const total = filteredWarnings.length;
		if (!total) {
			const msg = "Diagnostics: no warnings.";
			if (msg !== lastDiagnosticsRef.current) {
				lastDiagnosticsRef.current = msg;
				setDiagnosticsMessage(msg);
			}
			return;
		}
		const counts = {
			error: filteredWarnings.filter(
				(w) => w.severity === SpcWarningSeverity.Error
			).length,
			warning: filteredWarnings.filter(
				(w) => w.severity === SpcWarningSeverity.Warning
			).length,
			info: filteredWarnings.filter(
				(w) => w.severity === SpcWarningSeverity.Info
			).length,
		};
		const breakdownParts: string[] = [];
		if (counts.error)
			breakdownParts.push(
				`${counts.error} error${counts.error === 1 ? "" : "s"}`
			);
		if (counts.warning)
			breakdownParts.push(
				`${counts.warning} warning${counts.warning === 1 ? "" : "s"}`
			);
		if (counts.info) breakdownParts.push(`${counts.info} info`);
		const msg = `Diagnostics updated: ${total} warning${total === 1 ? "" : "s"} (${breakdownParts.join(", ")}).`;
		if (msg !== lastDiagnosticsRef.current) {
			lastDiagnosticsRef.current = msg;
			setDiagnosticsMessage(msg);
		}
	}, [showWarningsPanel, filteredWarnings]);
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
		if (targetsProp)
			targetsProp.forEach((t: number | null | undefined) => {
				if (typeof t === "number" && !isNaN(t)) base.push(t);
			});
		if (!base.length) return undefined;
		return [Math.min(...base), Math.max(...base)];
	}, [data, mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg, targetsProp]);

	// Auto-detect percentage unit when all values in [0,1] and no explicit unit supplied
	const autoUnit = React.useMemo(() => {
		if (unit || narrationContext?.measureUnit) return undefined;
		if (!data.length) return undefined;
		return data.every((d) => d.y >= 0 && d.y <= 1) ? "%" : undefined;
	}, [unit, narrationContext?.measureUnit, data]);

	const effectiveUnit = unit ?? narrationContext?.measureUnit ?? autoUnit;
	const effectiveNarrationContext = React.useMemo(() => {
		return effectiveUnit
			? { ...(narrationContext || {}), measureUnit: effectiveUnit }
			: narrationContext;
	}, [narrationContext, effectiveUnit]);

	// Partition markers (after engine available)
	const partitionMarkers = React.useMemo(() => {
		if (!engine?.rows) return [] as number[];
		const markers: number[] = [];
		for (let i = 1; i < engine.rows.length; i++) {
			if (engine.rows[i].partitionId !== engine.rows[i - 1].partitionId)
				markers.push(i);
		}
		return markers;
	}, [engine?.rows]);

	// Derive embedded variation icon (now rendered above chart instead of inside SVG)
	const embeddedIcon = React.useMemo(() => {
		if (!showEmbeddedIcon || !engine?.rows?.length) return null;
		const engineRows = engine.rows;
		// Suppress embedded icon entirely when insufficient non-ghost points to establish stable limits
		const minPoints = settings?.minimumPoints ?? 13;
		const nonGhostCount = engineRows.filter(
			(r) => !r.ghost && r.value != null
		).length;

		if (nonGhostCount < minPoints) return null;
		// Determine if targets exist (no longer used to suppress placeholder; kept for potential future diagnostics)
		// const hasAnyTargets = (targetsProp?.some(t => typeof t === 'number' && !isNaN(t as any))) ?? false;
		let lastIdx = -1;
		for (let i = engineRows.length - 1; i >= 0; i--) {
			const r = engineRows[i];
			if (r && r.value != null && !r.ghost) {
				lastIdx = i;
				break;
			}
		}
		if (lastIdx === -1) return null;
		const lastRow = engineRows[lastIdx];
		const variation = lastRow.variationIcon as VariationIcon | undefined;
		const assuranceRaw = lastRow.assuranceIcon as AssuranceIcon | undefined;
		const hasNeutralSpecialCause =
			variation === VariationIcon.Neither && !!lastRow.specialCauseNeitherValue;
		// Map engine assurance icon (which can be None) to visual AssuranceResult (None -> Uncertain placeholder glyph)
		const assuranceRenderStatus: AssuranceResult =
			assuranceRaw === AssuranceIcon.Pass
				? AssuranceResult.Pass
				: assuranceRaw === AssuranceIcon.Fail
					? AssuranceResult.Fail
					: AssuranceResult.Uncertain;
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
		} else if (variation === VariationIcon.Neither && hasNeutralSpecialCause) {
			// Neutral special-cause (purple) orientation should reflect side of signal (high-side vs low-side)
			const anyHighSide =
				lastRow.specialCauseSinglePointAbove ||
				lastRow.specialCauseTwoOfThreeAbove ||
				lastRow.specialCauseFourOfFiveAbove ||
				lastRow.specialCauseShiftHigh ||
				lastRow.specialCauseTrendIncreasing;
			const anyLowSide =
				lastRow.specialCauseSinglePointBelow ||
				lastRow.specialCauseTwoOfThreeBelow ||
				lastRow.specialCauseFourOfFiveBelow ||
				lastRow.specialCauseShiftLow ||
				lastRow.specialCauseTrendDecreasing;
			if (anyHighSide && !anyLowSide) trend = Direction.Higher;
			else if (anyLowSide && !anyHighSide) trend = Direction.Lower;
			else trend = Direction.Higher; // conflicting or none -> default higher
		}
		let polarity: MetricPolarity;
		if (metricImprovement === ImprovementDirection.Up)
			polarity = MetricPolarity.HigherIsBetter;
		else if (metricImprovement === ImprovementDirection.Down)
			polarity = MetricPolarity.LowerIsBetter;
		else polarity = MetricPolarity.ContextDependent;
		const iconSize = 80;
		return (
			<div
				key={`embedded-icon-${lastIdx}`}
				style={{ display: "flex", gap: 12, marginRight: 16 }}
			>
				<div
					className="fdp-spc-chart__embedded-icon"
					data-variation={String(variation)}
					data-trend-raw={trend ? String(trend) : "none"}
					data-trend={trend ? String(trend) : "none"}
					data-polarity={String(polarity ?? "unknown")}
					style={{ width: iconSize, height: iconSize }}
				>
					<SPCVariationIcon
						dropShadow={false}
						data={{
							variationIcon: variation!,
							improvementDirection: metricImprovement,
							polarity,
							specialCauseNeutral: hasNeutralSpecialCause,
							highSideSignal:
								lastRow.specialCauseSinglePointAbove ||
								lastRow.specialCauseTwoOfThreeAbove ||
								lastRow.specialCauseFourOfFiveAbove ||
								lastRow.specialCauseShiftHigh ||
								lastRow.specialCauseTrendIncreasing,
							lowSideSignal:
								lastRow.specialCauseSinglePointBelow ||
								lastRow.specialCauseTwoOfThreeBelow ||
								lastRow.specialCauseFourOfFiveBelow ||
								lastRow.specialCauseShiftLow ||
								lastRow.specialCauseTrendDecreasing,
							...(trend ? { trend } : {}),
						}}
						// Letter semantics: use polarity (business improvement direction) when specified; fall back to signal side for neutral metrics
						letterMode={
							metricImprovement === ImprovementDirection.Neither
								? "direction"
								: "polarity"
						}
						size={iconSize}
						variant={embeddedIconVariant}
						runLength={
							embeddedIconVariant === "triangleWithRun"
								? embeddedIconRunLength
								: undefined
						}
					/>
				</div>
				{/* Always render assurance icon (mapping 'none' -> Uncertain placeholder) for consistent dual-icon display */}
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
	}, [
		showEmbeddedIcon,
		engine?.rows,
		metricImprovement,
		settings?.minimumPoints,
		targetsProp,
		embeddedIconVariant,
		embeddedIconRunLength,
	]);

	return (
		<div
			className={
				className
					? `fdp-spc-chart-wrapper ${className}`
					: "fdp-spc-chart-wrapper"
			}
		>
			{/* Top row containing right-aligned embedded variation icon */}
			{showEmbeddedIcon && (
				<div
					className="fdp-spc-chart__top-row"
					style={{
						display: "flex",
						justifyContent: "flex-end",
						marginBottom: 4,
					}}
				>
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
						partitionMarkers={partitionMarkers}
						ariaLabel={ariaLabel}
						enableNeutralNoJudgement={enableNeutralNoJudgement}
						showTrendGatingExplanation={showTrendGatingExplanation}
					/>
				</LineScalesProvider>
			</ChartRoot>
			{/* Live diagnostics announcement (visually hidden) */}
			{showWarningsPanel && diagnosticsMessage && (
				<div
					data-testid="spc-diagnostics-live"
					aria-live="polite"
					style={{
						position: "absolute",
						width: 1,
						height: 1,
						padding: 0,
						margin: 0,
						overflow: "hidden",
						clip: "rect(0 0 0 0)",
						whiteSpace: "nowrap",
						border: 0,
					}}
				>
					{diagnosticsMessage}
				</div>
			)}
			{showWarningsPanel && filteredWarnings.length > 0 && (
				<div
					className="fdp-spc-chart__warnings"
					role="region"
					aria-label="SPC diagnostics"
				>
					<p className="fdp-spc-chart__warnings-heading">Diagnostics</p>
					<Table
						firstCellIsHeader={false}
						panel={false}
						responsive={false}
						head={[
							{ text: "Severity" },
							{ text: "Category" },
							{ text: "Code" },
							{ text: "Details" },
						]}
						rows={filteredWarnings.map((w) => {
							let severityColor: any = "grey";
							if (w.severity === SpcWarningSeverity.Error)
								severityColor = "red";
							else if (w.severity === SpcWarningSeverity.Warning)
								severityColor = "orange";
							else if (w.severity === SpcWarningSeverity.Info)
								severityColor = "blue";
							return [
								{
									node: (
										<Tag
											color={severityColor}
											text={(w.severity ? String(w.severity) : "Info").replace(
												/^[a-z]/,
												(c) => c.toUpperCase()
											)}
										/>
									),
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity",
								},
								{
									node: w.category ? (
										<Tag
											color="purple"
											text={formatWarningCategory(w.category)}
										/>
									) : (
										<span className="fdp-spc-chart__warning-empty">–</span>
									),
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category",
								},
								{
									node: <Tag color="grey" text={formatWarningCode(w.code)} />,
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code",
								},
								{
									node: (
										<div className="fdp-spc-chart__warning-message">
											<span>{w.message}</span>
											{w.context && Object.keys(w.context).length > 0 && (
												<details
													className="fdp-spc-chart__warning-context"
													style={{ marginTop: 4 }}
												>
													<summary>context</summary>
													<pre>{JSON.stringify(w.context, null, 2)}</pre>
												</details>
											)}
										</div>
									),
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message",
								},
							];
						})}
						classes="fdp-spc-chart__warnings-table-wrapper"
						tableClasses="fdp-spc-chart__warnings-table"
					/>
				</div>
			)}
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
	partitionMarkers: number[];
	ariaLabel?: string;
	// Feature flags to control neutral purple and gating explanation behaviour
	enableNeutralNoJudgement?: boolean;
	showTrendGatingExplanation?: boolean;
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
	partitionMarkers,
	ariaLabel,
	enableNeutralNoJudgement = true,
	showTrendGatingExplanation = true,
}) => {
	const scaleCtx = useScaleContext();
	const chartCtx = useChartContext();
	if (!scaleCtx) return null;
	const { xScale, yScale } = scaleCtx;
	// Stable unique base ID for gradient defs per chart instance (prevents MDX multi-chart ID collisions)
	const gradientIdBaseRef = React.useRef<string>(
		"spc-seq-" + ++spcSequenceInstanceCounter
	);
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
			if (typeof r.target === "number" && !isNaN(r.target))
				values.push(r.target);
		}
		if (!values.length) return null;
		const first = values[0];
		return values.every((v) => v === first) ? first : null; // only render when constant across series
	}, [engineRows]);

	// Preprocess categories with singleton coloured point absorption
	// Added 'noJudgement' (purple) for neutral special-cause sequences (variation === Neither & special cause present)
	const categories = React.useMemo(() => {
		if (!engineSignals || !all.length)
			return [] as ("concern" | "improvement" | "noJudgement" | "common")[];
		const raw: ("concern" | "improvement" | "noJudgement" | "common")[] =
			all.map((_d, i) => {
				const sig = engineSignals?.[i];
				if (sig?.concern) return "concern";
				if (sig?.improvement) return "improvement";
				// Neutral special cause (purple) when variation icon is Neither but flagged special (only when enabled)
				if (
					enableNeutralNoJudgement &&
					sig?.special &&
					sig.variation === VariationIcon.Neither
				)
					return "noJudgement";
				return "common";
			});

		// Debug logging for Rule Clash charts
		const isRuleClash = ariaLabel?.includes("Rule Clash");
		if (isRuleClash) {
			console.log(
				`[${ariaLabel}] Raw categories:`,
				raw.map((cat, i) => `${i}:${cat}(${all[i].y})`).join(", ")
			);
		}

		return raw;
	}, [engineSignals, all, ariaLabel, enableNeutralNoJudgement]);

	// Derive contiguous sequences after absorption
	const sequences = React.useMemo(() => {
		if (!gradientSequences || !categories.length)
			return [] as {
				start: number;
				end: number;
				category: "concern" | "improvement" | "noJudgement" | "common";
			}[];
		// Copy categories so we can absorb single coloured points unconditionally
		const cats = [...categories];
		// Absorb ANY single coloured point (length-1 run) regardless of neighbours
		let i = 0;
		while (i < cats.length) {
			const cat = cats[i];
			let j = i + 1;
			while (j < cats.length && cats[j] === cat) j++;
			const runLen = j - i;
			if (runLen === 1 && cat !== "common") {
				cats[i] = "common";
			}
			i = j;
		}
		// Build sequences (coloured runs must be length >=2 after absorption)
		const out: {
			start: number;
			end: number;
			category: "concern" | "improvement" | "noJudgement" | "common";
		}[] = [];
		if (cats.length) {
			let start = 0;
			for (let k = 1; k <= cats.length; k++) {
				if (k === cats.length || cats[k] !== cats[start]) {
					const runCat = cats[start];
					const end = k - 1;
					const len = end - start + 1;
					if (runCat === "common" || len >= 2)
						out.push({ start, end, category: runCat });
					start = k;
				}
			}
		}
		const isRuleClash = ariaLabel?.includes("Rule Clash");
		if (isRuleClash) {
			console.log(
				`[${ariaLabel}] Final sequences:`,
				out.map((s) => `${s.start}-${s.end}:${s.category}`).join(", ")
			);
		}
		return out;
	}, [gradientSequences, categories, ariaLabel]);

	// Precompute x positions for boundary calculations (after scales + data available)
	const xPositions = React.useMemo(
		() => all.map((d) => xScale(d.x instanceof Date ? d.x : new Date(d.x))),
		[all, xScale]
	);
	const plotWidth = xScale.range()[1];

	// Build horizontal line segments for limits that can change across partitions (means/limits per row)
	const limitSegments = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null;
		// Helper to extract segments for a given numeric accessor key present on each row
		const build = (key: keyof (typeof engineRows)[number]) => {
			const segs: { x1: number; x2: number; y: number }[] = [];
			let start: number | null = null;
			let current: number | null = null;
			for (let i = 0; i < engineRows.length; i++) {
				const row = engineRows[i];
				const v = typeof row[key] === "number" ? (row[key] as number) : null;
				if (v == null || isNaN(v)) {
					// flush any active segment
					if (start !== null && current != null) {
						segs.push({
							x1: xPositions[start],
							x2: xPositions[i - 1],
							y: yScale(current),
						});
						start = null;
						current = null;
					}
					continue;
				}
				if (start === null) {
					start = i;
					current = v;
					continue;
				}
				// continue segment if value unchanged (within epsilon) else close & start new
				const EPS = 1e-9;
				if (current != null && Math.abs(v - current) <= EPS) {
					// still same segment
				} else {
					// close previous
					if (current != null) {
						segs.push({
							x1: xPositions[start],
							x2: xPositions[i - 1],
							y: yScale(current),
						});
					}
					start = i;
					current = v;
				}
			}
			if (start !== null && current != null) {
				segs.push({
					x1: xPositions[start],
					x2: xPositions[engineRows.length - 1],
					y: yScale(current),
				});
			}
			return segs;
		};
		return {
			mean: build("mean"),
			ucl: build("upperProcessLimit"),
			lcl: build("lowerProcessLimit"),
			onePos: build("upperOneSigma"),
			oneNeg: build("lowerOneSigma"),
			twoPos: build("upperTwoSigma"),
			twoNeg: build("lowerTwoSigma"),
		};
	}, [engineRows, xPositions, yScale]);

	// Build gradient definitions + rects
	const sequenceDefs = React.useMemo(() => {
		if (!sequences.length) return null;
		return (
			<defs>
				{sequences.map((seq, idx) => {
					const id = `${gradientIdBaseRef.current}-grad-${idx}`;
					let baseVar: string;
					let top = 0.28,
						mid = 0.12,
						end = 0.045; // default (grey/common)
					switch (seq.category) {
						case "concern":
							baseVar = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)";
							// stronger wash for coloured sequences
							top = 0.28;
							mid = 0.12;
							end = 0.045;
							break;
						case "improvement":
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)";
							top = 0.26;
							mid = 0.11;
							end = 0.045;
							break;
						case "noJudgement":
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)";
							// Use similar opacity profile to improvement for balance
							top = 0.26;
							mid = 0.11;
							end = 0.045;
							break;
						default:
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
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

		const areas = sequences
			.map((seq, idx) => {
				const { start: firstIdx, end: lastIdx, category } = seq;

				if (firstIdx < 0 || lastIdx >= xPositions.length || firstIdx > lastIdx)
					return null;

				const firstX = xPositions[firstIdx];
				const lastX = xPositions[lastIdx];

				let d = "";

				if (category === "common") {
					// --- Common Cause (Grey) Gradient ---
					const prevSeq = idx > 0 ? sequences[idx - 1] : null;
					const nextSeq =
						idx < sequences.length - 1 ? sequences[idx + 1] : null;

					const leftX = prevSeq ? xPositions[prevSeq.end] : 0;
					const leftY = prevSeq ? yScale(all[prevSeq.end].y) : baseY;

					const rightX = nextSeq ? xPositions[nextSeq.start] : plotWidth;
					const rightY = nextSeq ? yScale(all[nextSeq.start].y) : baseY;

					d = `M ${leftX} ${baseY}`;
					d += ` L ${leftX} ${leftY}`;

					for (let i = firstIdx; i <= lastIdx; i++) {
						d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
					}

					d += ` L ${rightX} ${rightY}`;
					d += ` L ${rightX} ${baseY} Z`;
				} else {
					// --- Special Cause (Colored) Gradient ---
					const prevSeq = idx > 0 ? sequences[idx - 1] : null;
					const nextSeq =
						idx < sequences.length - 1 ? sequences[idx + 1] : null;
					const prevColoured = prevSeq && prevSeq.category !== "common";
					const nextColoured = nextSeq && nextSeq.category !== "common";
					// When a coloured sequence follows another coloured sequence we start the polyline at the previous
					// sequence's last point (prevX, prevY) instead of introducing a vertical colour switch. This creates
					// a continuous sloped join between coloured regions (concern -> improvement or vice versa) per spec.
					const firstY = yScale(all[firstIdx].y);
					const lastY = yScale(all[lastIdx].y);

					if (prevColoured) {
						const prevX = xPositions[prevSeq!.end];
						const prevY = yScale(all[prevSeq!.end].y);
						// Start path at previous coloured sequence last data point
						d = `M ${prevX} ${prevY} L ${firstX} ${firstY}`;
					} else {
						// Standard start: baseline up to first point
						d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
					}

					for (let i = firstIdx + 1; i <= lastIdx; i++) {
						d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
					}
					// Ensure path includes last point explicitly
					d += ` L ${lastX} ${lastY}`;

					// End: if next sequence coloured, do vertical switch at line height by creating a minimal-width closure
					if (nextColoured) {
						// For a following coloured sequence we finish at last point only (no vertical switch) and drop to baseline
						d += ` L ${lastX} ${lastY} L ${lastX} ${baseY}`;
					} else {
						// Standard termination: last point then vertical to baseline
						d += ` L ${lastX} ${lastY} L ${lastX} ${baseY}`;
					}
					// Baseline closure: return to baseline under start reference
					if (prevColoured) {
						const prevX = xPositions[prevSeq!.end];
						// baseline back to previous coloured point's x
						d += ` L ${prevX} ${baseY} Z`;
					} else {
						// baseline back to firstX
						d += ` L ${firstX} ${baseY} Z`;
					}
				}

				return (
					<path
						key={`seq-area-${idx}`}
						d={d}
						fill={`url(#${gradientIdBaseRef.current}-grad-${idx})`}
						stroke="none"
						className="fdp-spc__sequence-bg"
						aria-hidden="true"
					/>
				);
			})
			.filter(Boolean);

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
		({
			index,
			x,
			y,
		}: {
			seriesId: string;
			x: Date;
			y: number;
			index: number;
		}) => {
			const row = engineRows?.[index];
			const dateObj = x instanceof Date ? x : new Date(x);
			const dateLabel = formatDateLong(dateObj);
			const unit = narrationContext?.measureUnit
				? ` ${narrationContext.measureUnit}`
				: "";
			const measure = narrationContext?.measureName
				? ` ${narrationContext.measureName}`
				: "";
			if (!row) {
				return `General summary is: ${computedTimeframe ? computedTimeframe + ". " : ""}Point ${index + 1}, ${dateLabel}, ${y}${unit}${measure}`;
			}
			const varLabel = variationLabel(row.variationIcon) || "Variation";
			const ruleIds = extractRuleIds(row);
			const ruleNarr = ruleIds.length
				? ` Rules: ${[...new Set(ruleIds.map((r) => ruleGlossary[r].narration))].join("; ")}.`
				: " No special cause rules.";
			const ctxParts: string[] = [];
			if (narrationContext?.measureName)
				ctxParts.push(`Measure: ${narrationContext.measureName}.`);
			if (narrationContext?.datasetContext)
				ctxParts.push(`${narrationContext.datasetContext}.`);
			if (narrationContext?.organisation)
				ctxParts.push(`Organisation: ${narrationContext.organisation}.`);
			if (narrationContext?.additionalNote)
				ctxParts.push(narrationContext.additionalNote);
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
						{partitionMarkers.map((idx: number, i: number) => {
							const d = all[idx];
							if (!d) return null;
							const x = xScale(d.x instanceof Date ? d.x : new Date(d.x));
							return (
								<line
									key={`partition-marker-${i}`}
									x1={x}
									x2={x}
									y1={0}
									y2={yScale.range()[0]}
									stroke="#555"
									strokeDasharray="4 4"
									strokeWidth={1}
									aria-hidden="true"
									className="fdp-spc__partition-marker"
								/>
							);
						})}
						{/* Partition-aware mean (centre line) rendering */}
						{limitSegments?.mean.map((s, i) => (
							<line
								key={`mean-${i}`}
								className="fdp-spc__cl"
								x1={s.x1}
								x2={s.x2}
								y1={s.y}
								y2={s.y}
								aria-hidden="true"
							/>
						))}
						{uniformTarget != null && (
							// Render later (after limits) for stacking; temporary placeholder (moved below)
							<></>
						)}
						{limitSegments?.ucl.map((s, i) => (
							<line
								key={`ucl-${i}`}
								className="fdp-spc__limit fdp-spc__limit--ucl"
								x1={s.x1}
								x2={s.x2}
								y1={s.y}
								y2={s.y}
								aria-hidden="true"
								strokeWidth={2}
							/>
						))}
						{limitSegments?.lcl.map((s, i) => (
							<line
								key={`lcl-${i}`}
								className="fdp-spc__limit fdp-spc__limit--lcl"
								x1={s.x1}
								x2={s.x2}
								y1={s.y}
								y2={s.y}
								aria-hidden="true"
								strokeWidth={2}
							/>
						))}
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
									Target {uniformTarget}{" "}
									{effectiveUnit || narrationContext?.measureUnit || ""}
								</text>
							</g>
						)}
						{showZones && limitSegments && limitSegments.mean.length > 0 && (
							<>
								{limitSegments.onePos.map((s, i) => (
									<line
										key={`onePos-${i}`}
										className="fdp-spc__zone fdp-spc__zone--pos1"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
								{limitSegments.oneNeg.map((s, i) => (
									<line
										key={`oneNeg-${i}`}
										className="fdp-spc__zone fdp-spc__zone--neg1"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
								{limitSegments.twoPos.map((s, i) => (
									<line
										key={`twoPos-${i}`}
										className="fdp-spc__zone fdp-spc__zone--pos2"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
								{limitSegments.twoNeg.map((s, i) => (
									<line
										key={`twoNeg-${i}`}
										className="fdp-spc__zone fdp-spc__zone--neg2"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
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
									// Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
									enableRules &&
									enableNeutralNoJudgement &&
									sig?.special &&
									sig.variation === VariationIcon.Neither
										? "fdp-spc__point--sc-no-judgement"
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
										{...(isFocused
											? { "aria-describedby": `spc-tooltip-${i}` }
											: {})}
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
							enableNeutralNoJudgement={enableNeutralNoJudgement}
							showTrendGatingExplanation={showTrendGatingExplanation}
						/>
					</g>
				</svg>
				{announceFocus && (
					<VisuallyHiddenLiveRegion
						format={(d: any) =>
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
