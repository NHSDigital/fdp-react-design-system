import * as React from "react";
import "../../../DataVisualisation.scss";
import "./SPCChart.scss";
import { ChartRoot } from "../../../core/ChartRoot";
import { LineScalesProvider } from "../../../core/ScaleContext";
import { type LineSeries as DVLineSeries } from "../../../series/LineSeriesPrimitive";
import { DiagnosticsPanel } from "./components/DiagnosticsPanel";
import { EmbeddedIconsRow } from "./components/EmbeddedIconsRow";
import { buildEmbeddedIcon } from "./utils/embeddedIcon";
import InternalSPC from "./InternalSPC";
import type { InternalSPCProps } from "./InternalSPC.types";
// (Embedded icon constants now encapsulated in utils/embeddedIcon)
// SPC Logic & types
import {
    SpcWarningSeverity,
    SpcWarningCategory,
    SpcWarningCode,
} from "./logic_v2/types";
import { ImprovementDirection, VariationIcon, ChartType } from "./types";
import computeAutoMetrics from "../utils/autoMetrics";
import type { EngineRowUI } from "./SPCChart.types";
// v2 engine visuals and presets
import { SpcVisualCategory } from "./logic_v2";
import {
	ChartType as V2ChartType,
	ImprovementDirection as V2ImprovementDirection,
	BuildArgsV2 as V2BuildArgs,
	SpcRowV2 as V2Row,
	SpcSettingsV26a as V2Settings,
} from "./logic_v2/types";
import { VariationIcon as V2VariationIcon } from "./logic_v2/types";
import {
	buildVisualsForScenario,
	VisualsScenario as V2VisualsScenario,
} from "./logic_v2/presets";
import { TrendVisualMode as V2TrendVisualMode } from "./logic_v2";
import { buildWithVisuals as buildWithVisualsV2 } from "./logic_v2/adapter";
// Centralised SPC props/types and normalisation helper
import type { SPCDatum, SPCChartProps } from "./SPCChart.props";
import { normalizeSpcProps, TrendVisualMode } from "./SPCChart.props";
import { useZeroAxisBreak } from "./hooks/useZeroAxisBreak";
import { computeYDomain } from "./utils/domain";
import { autoInsertBaselinesMultiV2 } from "./logic_v2/utils/autoRecalc";
// (InternalSPC owns gradient id base counter)

// Visuals presets for boundary-window and dataset-specific overrides
// VisualsScenario is re-exported from engine presets

export const SPCChart: React.FC<SPCChartProps> = (props) => {
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

	// Removed effectiveEnableTrendSideGating constant)
	if (
		process.env.NODE_ENV !== "production" &&
		props.disableTrendSideGating !== undefined
	) {
		console.warn(
			"SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
		);
	}

	// ----- Effective props resolution (grouped props take precedence over flat props) -----
	const {
		effData,
		effTargets,
		effBaselines,
		effGhosts,
		effChartTypeCore,
		effMetricImprovementCore,
		effEngineSettings,
		effAlwaysShowZeroY,
		effAlwaysShowHundredY,
		effPercentScale,
		effGradientSequences,
		effSequenceTransition,
		effProcessLineWidth,
		effTrendVisualMode,
		effShowTrendGatingExplanation,
		effEnableNeutralNoJudgement,
		effEnableRules,
		effShowPartitionMarkers,
		effShowTrendStartMarkers,
		effShowFirstFavourableCrossMarkers,
		effShowTrendBridgeOverlay,
		effShowSignalsInspector,
		effOnSignalFocus,
		effShowWarningsPanel,
		effWarningsFilter,
		effShowEmbeddedIcon,
		effEmbeddedIconVariant,
		effEmbeddedIconRunLength,
		effShowFocusIndicator,
		effHeight,
		effClassName,
		effAriaLabel,
		effUnit,
		effNarrationContext,
		effShowZones,
		effShowPoints,
		effHighlightOutOfControl,
		effVisualsScenario,
		effVisualsEngineSettings,
		effSource,
		effEngineAutoRecalc,
	} = normalizeSpcProps(props);

	// Effective precedence: prefer grouped eff* when provided, otherwise fall back to flat props
	const ariaLabel = effAriaLabel ?? props.ariaLabel;
	const height = effHeight ?? props.height ?? 260;
	const className = effClassName ?? props.className;
	const unit = effUnit ?? props.unit;
	const narrationContext = effNarrationContext ?? props.narrationContext;
	const showZones = (effShowZones ?? props.showZones) as boolean;
	const showPoints = (effShowPoints ?? props.showPoints) as boolean;
	const highlightOutOfControl = (
		effHighlightOutOfControl ?? props.highlightOutOfControl
	) as boolean;
	const visualsScenario = (effVisualsScenario ?? props.visualsScenario) ?? V2VisualsScenario.None;
	const visualsEngineSettings =
		effVisualsEngineSettings ?? props.visualsEngineSettings;
	const source = effSource ?? props.source;
	const announceFocus = props.a11y?.announceFocus ?? props.announceFocus ?? false;

	// Build SPC engine instance (memoised)
	// NB: settings object is assumed stable if not changing reference (no deep equality check)
	// NB: data array is assumed stable if not changing reference (no deep equality check)
	// NB: targets/baselines/ghosts are assumed stable if not changing reference (no deep equality check)
	// NB: chartType and metricImprovement are primitive values
	// NB: useSqlCompatEngine removed – always using native engine rows via v2 adapter for UI
	// If any of the above change by reference/value, a new engine is built.
	// If the build fails (e.g. insufficient data), engine will be null.
	// This is a best-effort attempt to avoid unnecessary rebuilds while still responding to changes.
	// Parent components should memoise props where possible to avoid unnecessary rebuilds.
	// If more granular control is needed, consider memoising settings and data at a higher level.
	// Shared canonical rows input used by both engines and v2 visuals
	const rowsInput = React.useMemo(() => {
		return effData.map((d, i) => ({
			x: d.x,
			value: d.y,
			target: effTargets?.[i] ?? undefined,
			baseline: effBaselines?.[i] ?? undefined,
			ghost: effGhosts?.[i] ?? undefined,
		}));
	}, [effData, effTargets, effBaselines, effGhosts]);

	// Optional UI pre-processor: auto-insert a baseline after a sustained favourable shift (XmR only)
	const rowsInputMaybeAuto = React.useMemo(() => {
		try {
			const cfg = effEngineAutoRecalc;
			if (!cfg?.enabled) return rowsInput;
			// Only applies to XmR via v2 UI helper; use core values already normalised
						return autoInsertBaselinesMultiV2(rowsInput, {
				chartType: effChartTypeCore as any,
				metricImprovement: effMetricImprovementCore as any,
				shiftLength: cfg.shiftLength,
				deltaSigma: cfg.deltaSigma,
							minGap: cfg.minGap,
							maxInsertions: (cfg as any).maxInsertions,
			});
		} catch {
			return rowsInput;
		}
	}, [rowsInput, effEngineAutoRecalc, effChartTypeCore, effMetricImprovementCore]);

	// Note: v2 visuals/rows are now the canonical path for UI; legacy engine build removed.

	// Effective UI options are provided by normalizeSpcProps

	// Compute engine v2 visuals (UI-agnostic categories) so the engine drives colour coding
	const v2Visuals: SpcVisualCategory[] = React.useMemo(() => {
		try {
			// Map legacy SPC settings to v2 engine settings for visual parity (typed)
			// Always resolve a concrete minimumPoints (default 13) and compute chart-level eligibility
			const resolvedMinPts =
				typeof effEngineSettings?.minimumPoints === "number" &&
				!isNaN(effEngineSettings!.minimumPoints!)
					? effEngineSettings!.minimumPoints!
					: 13;
			const v2Settings: Partial<V2Settings> = { minimumPoints: resolvedMinPts };
			// When the series has at least minimum points overall, enable chart-level eligibility
			// so the engine backfills limits across the partition (colours available from index 0 in tests)
			const eligibleCount = rowsInputMaybeAuto.filter(
				(r) => !r.ghost && typeof r.value === "number"
			).length;
			if (eligibleCount >= resolvedMinPts) v2Settings.chartLevelEligibility = true;
			if (effEngineSettings?.enableFourOfFiveRule != null) {
				v2Settings.enableFourOfFiveRule = !!effEngineSettings.enableFourOfFiveRule;
			}
			if (visualsEngineSettings) Object.assign(v2Settings, visualsEngineSettings);
			const mapChartTypeToV2 = (t: ChartType): V2ChartType => {
				switch (t) {
					case ChartType.XmR:
						return V2ChartType.XmR;
					case ChartType.T:
						return V2ChartType.T;
					case ChartType.G:
						return V2ChartType.G;
					default:
						return V2ChartType.XmR;
				}
			};
			const mapImprovementToV2 = (
				d: ImprovementDirection
			): V2ImprovementDirection => {
				switch (d) {
					case ImprovementDirection.Up:
						return V2ImprovementDirection.Up;
					case ImprovementDirection.Down:
						return V2ImprovementDirection.Down;
					default:
						return V2ImprovementDirection.Neither;
				}
			};
			const v2Args: V2BuildArgs = {
				chartType: mapChartTypeToV2(effChartTypeCore),
				metricImprovement: mapImprovementToV2(effMetricImprovementCore),
				data: rowsInputMaybeAuto,
				settings: Object.keys(v2Settings).length ? v2Settings : undefined,
			};
			const { visuals } = buildVisualsForScenario(v2Args, visualsScenario, {
				trendVisualMode:
					effTrendVisualMode === TrendVisualMode.Ungated
						? V2TrendVisualMode.Ungated
						: V2TrendVisualMode.Gated,
				enableNeutralNoJudgement: effEnableNeutralNoJudgement,
			});
			return visuals || [];
		} catch {
			return [];
		}
	}, [
		rowsInputMaybeAuto,
		effChartTypeCore,
		effMetricImprovementCore,
		effTrendVisualMode,
		effEnableNeutralNoJudgement,
		effEngineSettings,
		visualsScenario,
		visualsEngineSettings,
	]);

	// Optional: build v2 rows via adapter and map to a UI-compatible shape when enabled
	const v2RowsForUi: EngineRowUI[] | null = React.useMemo(() => {
		try {
			const resolvedMinPts =
				typeof effEngineSettings?.minimumPoints === "number" &&
				!isNaN(effEngineSettings!.minimumPoints!)
					? effEngineSettings!.minimumPoints!
					: 13;
			const v2Settings: Partial<V2Settings> = { minimumPoints: resolvedMinPts };
			const eligibleCount = rowsInputMaybeAuto.filter(
				(r) => !r.ghost && typeof r.value === "number"
			).length;
			if (eligibleCount >= resolvedMinPts) v2Settings.chartLevelEligibility = true;
			if (effEngineSettings?.enableFourOfFiveRule != null) {
				v2Settings.enableFourOfFiveRule = !!effEngineSettings.enableFourOfFiveRule;
			}
			if (visualsEngineSettings) Object.assign(v2Settings, visualsEngineSettings);
			const mapChartTypeToV2 = (t: ChartType): V2ChartType => {
				switch (t) {
					case ChartType.XmR:
						return V2ChartType.XmR;
					case ChartType.T:
						return V2ChartType.T;
					case ChartType.G:
						return V2ChartType.G;
					default:
						return V2ChartType.XmR;
				}
			};
			const mapImprovementToV2 = (
				d: ImprovementDirection
			): V2ImprovementDirection => {
				switch (d) {
					case ImprovementDirection.Up:
						return V2ImprovementDirection.Up;
					case ImprovementDirection.Down:
						return V2ImprovementDirection.Down;
					default:
						return V2ImprovementDirection.Neither;
				}
			};
			const v2Args: V2BuildArgs = {
				chartType: mapChartTypeToV2(effChartTypeCore),
				metricImprovement: mapImprovementToV2(effMetricImprovementCore),
				data: rowsInputMaybeAuto,
				settings: Object.keys(v2Settings).length ? v2Settings : undefined,
			};
			const { rows } = buildWithVisualsV2(v2Args);
			// Map v2 VariationIcon to UI VariationIcon for rendering booleans
			const mapVariation = (v: V2VariationIcon): VariationIcon => {
				switch (v) {
					case V2VariationIcon.ImprovementHigh:
					case V2VariationIcon.ImprovementLow:
						return VariationIcon.Improvement;
					case V2VariationIcon.ConcernHigh:
					case V2VariationIcon.ConcernLow:
						return VariationIcon.Concern;
					case V2VariationIcon.NeitherHigh:
					case V2VariationIcon.NeitherLow:
						return VariationIcon.Neither;
					case V2VariationIcon.CommonCause:
					default:
						return VariationIcon.Neither;
				}
			};
			return rows.map(
				(r: V2Row, i: number): EngineRowUI => ({
					data: {
						value: r.value,
						ghost: !!r.ghost,
					},
					partition: { id: r.partitionId },
					limits: {
						mean: r.mean,
						ucl: r.upperProcessLimit,
						lcl: r.lowerProcessLimit,
						oneSigma: { upper: r.upperOneSigma, lower: r.lowerOneSigma },
						twoSigma: { upper: r.upperTwoSigma, lower: r.lowerTwoSigma },
					},
					rules: {
						singlePoint: { up: !!r.singlePointUp, down: !!r.singlePointDown },
						twoOfThree: { up: !!r.twoSigmaUp, down: !!r.twoSigmaDown },
						fourOfFive: { up: !!r.fourOfFiveUp, down: !!r.fourOfFiveDown },
						shift: { up: !!r.shiftUp, down: !!r.shiftDown },
						trend: { up: !!r.trendUp, down: !!r.trendDown },
					},
					classification: {
						variation: mapVariation(r.variationIcon),
						neutralSpecialCauseValue:
							r.variationIcon === V2VariationIcon.NeitherHigh ||
							r.variationIcon === V2VariationIcon.NeitherLow
								? (r.specialCauseImprovementValue ??
									r.specialCauseConcernValue ??
									1)
								: null,
						assurance: undefined,
					},
					target: rowsInputMaybeAuto[i]?.target ?? null,
				})
			);
		} catch {
			return null;
		}
	}, [rowsInputMaybeAuto, effChartTypeCore, effMetricImprovementCore, effEngineSettings, visualsEngineSettings]);

	// Representative row with populated limits (last available)
	const rowsForUi: EngineRowUI[] | null = v2RowsForUi || null;

	// Representative row with populated limits (last available)
	const engineRepresentative = (rowsForUi || [])
		.slice()
		.reverse()
		.find((r) => r.limits.mean != null);
	const mean = engineRepresentative?.limits.mean ?? null;
	// Basic diagnostics derived in the chart (until v2 engine surfaces warnings directly)
	interface WarningItem {
		code: SpcWarningCode;
		severity: SpcWarningSeverity;
		category: SpcWarningCategory;
		message: string;
		context?: Record<string, unknown>;
	}
	const warnings = React.useMemo<WarningItem[]>(() => {
		const list: WarningItem[] = [];
		try {
			const engineRows = rowsForUi;
			const minPointsGlobal = effEngineSettings?.minimumPoints ?? 13;
			const minPointsPartition = effEngineSettings?.minimumPoints ?? 12;
			if (engineRows && engineRows.length) {
				// Global non-ghost count
				const nonGhostCount = engineRows.filter(
					(r) => !r.data.ghost && r.data.value != null
				).length;
				if (nonGhostCount < minPointsGlobal) {
					list.push({
						code: SpcWarningCode.InsufficientPointsGlobal,
						severity: SpcWarningSeverity.Warning,
						category: SpcWarningCategory.Data,
						message:
							"Not enough non-ghost points to compute stable limits/icons.",
						context: { nonGhostCount, minimumPoints: minPointsGlobal },
					});
				}
				// Partition sizing diagnostics
				const partitions = new Map<
					number,
					{ size: number; nonGhost: number }
				>();
				for (const r of engineRows) {
					const pid = r.partition.id ?? 0;
					const rec = partitions.get(pid) || { size: 0, nonGhost: 0 };
					rec.size += 1;
					if (!r.data.ghost && r.data.value != null) rec.nonGhost += 1;
					partitions.set(pid, rec);
				}
				for (const [pid, rec] of partitions) {
					if (rec.nonGhost > 0 && rec.nonGhost < minPointsPartition) {
						list.push({
							code: SpcWarningCode.InsufficientPointsPartition,
							severity: SpcWarningSeverity.Warning,
							category: SpcWarningCategory.Partition,
							message:
								"A partition/baseline segment has too few points for recommended stability.",
							context: {
								partitionId: pid,
								nonGhostCount: rec.nonGhost,
								minimumPointsPartition: minPointsPartition,
							},
						});
					}
				}
			}
		} catch {
			// swallow – diagnostics are best-effort
		}
		return list;
	}, [rowsForUi, effEngineSettings?.minimumPoints]);
	const filteredWarnings = React.useMemo(() => {
		if (!warnings.length) return [] as typeof warnings;
			if (!effWarningsFilter) return warnings;
		return warnings.filter((w) => {
			if (
					effWarningsFilter.severities &&
				w.severity &&
					!effWarningsFilter.severities.includes(w.severity)
			)
				return false;
			if (
					effWarningsFilter.categories &&
				w.category &&
					!effWarningsFilter.categories.includes(w.category)
			)
				return false;
			if (
					effWarningsFilter.codes &&
					!effWarningsFilter.codes.includes(w.code as SpcWarningCode)
			)
				return false;
			return true;
		});
		}, [warnings, effWarningsFilter]);

// Diagnostics live region and table are handled by DiagnosticsPanel now

	// Y-axis domain including limits
	const ucl = engineRepresentative?.limits.ucl ?? null;
	const lcl = engineRepresentative?.limits.lcl ?? null;
	const onePos = engineRepresentative?.limits.oneSigma.upper ?? null;
	const oneNeg = engineRepresentative?.limits.oneSigma.lower ?? null;
	const twoPos = engineRepresentative?.limits.twoSigma.upper ?? null;
	const twoNeg = engineRepresentative?.limits.twoSigma.lower ?? null;
	const sigma = mean != null && onePos != null ? Math.abs(onePos - mean) : 0;

	// Force SPC process line to neutral grey (#A6A6A6) to align with default point (common cause) colour.
	const series: DVLineSeries[] = React.useMemo(
		() => [{ id: "process", data: effData, color: "#A6A6A6" }],
		[effData]
	);
	const yDomain = React.useMemo(() =>
		computeYDomain(
			effData,
			{ mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg },
			{
				alwaysShowZeroY: !!effAlwaysShowZeroY,
				alwaysShowHundredY: !!effAlwaysShowHundredY,
				percentScale: !!effPercentScale,
			},
			effTargets ?? null
		),
	[
		effData,
		mean,
		ucl,
		lcl,
		onePos,
		oneNeg,
		twoPos,
		twoNeg,
		effTargets,
		effAlwaysShowZeroY,
		effAlwaysShowHundredY,
		effPercentScale,
	]);

	// Compute a uniform target once at the outer level (rows + raw targets available)
	const uniformTarget = React.useMemo(() => {
		const collectUniform = (
			arr: Array<number | null | undefined>
		): number | null => {
			const nums = arr.filter(
				(t): t is number => typeof t === "number" && !isNaN(t)
			);
			if (!nums.length) return null;
			const first = nums[0];
			return nums.every((v) => v === first) ? first : null;
		};
		// Try from adapter rows first (if targets were preserved)
		if (rowsForUi && rowsForUi.length) {
			const fromRows = collectUniform(rowsForUi.map((r) => r.target));
			if (fromRows != null) return fromRows;
		}
		// Fallback to the effective targets array
		if (effTargets && effTargets.length) {
			return collectUniform(effTargets);
		}
		return null;
	}, [rowsForUi, effTargets]);

	// Reserve extra bottom gap (range-only) when zero is not in the y-domain to visually accommodate the axis break
	const { show: showZeroBreakOuter, slotPx: slotGapPx, totalReservedPx } = useZeroAxisBreak(
		yDomain,
		height,
		{ maxFraction: 0.35 }
	);
	const yBottomGapPx = showZeroBreakOuter ? totalReservedPx : 0;

	// Use shared auto metrics helper to infer unit consistently with SPCMetricCard
	const autoFromHelper = React.useMemo(() => {
		// SPCDatum.x is already Date | string | number; pass through directly for auto metrics
		const dateCandidates = effData.map((d) => d.x);
		return computeAutoMetrics({
			values: effData.map((d) => d.y),
			dates: dateCandidates,
			providedUnit: unit || narrationContext?.measureUnit,
			percentHeuristic: "0-1",
			autoValue: false,
			autoDelta: false,
			autoMetadata: false,
		});
	}, [effData, unit, narrationContext?.measureUnit]);

	const effectiveUnit = unit ?? narrationContext?.measureUnit ?? autoFromHelper.unit;
	const effectiveNarrationContext = React.useMemo(() => {
		return effectiveUnit
			? { ...(narrationContext || {}), measureUnit: effectiveUnit }
			: narrationContext;
	}, [narrationContext, effectiveUnit]);

	// Partition markers (after engine available)
	const partitionMarkers = React.useMemo(() => {
		if (!rowsForUi) return [] as number[];
		const markers: number[] = [];
		for (let i = 1; i < rowsForUi.length; i++) {
			if (rowsForUi[i].partition.id !== rowsForUi[i - 1].partition.id)
				markers.push(i);
		}
		return markers;
	}, [rowsForUi]);

	// Derive embedded variation/assurance icons as a single React node
	const embeddedIcon = React.useMemo(
		() =>
			buildEmbeddedIcon({
				show: !!effShowEmbeddedIcon,
				rowsForUi,
				minPoints: effEngineSettings?.minimumPoints ?? 13,
				metricImprovement: effMetricImprovementCore,
				variant: effEmbeddedIconVariant,
				runLength: effEmbeddedIconRunLength,
			}),
		[
			effShowEmbeddedIcon,
			rowsForUi,
			effEngineSettings?.minimumPoints,
			effMetricImprovementCore,
			effEmbeddedIconVariant,
			effEmbeddedIconRunLength,
		]
	);

	return (
		<div
			className={
				className
					? `fdp-spc-chart-wrapper ${className}`
					: "fdp-spc-chart-wrapper"
			}
		>
			{/* Top row containing right-aligned embedded variation + assurance icons */}
			<EmbeddedIconsRow
				show={!!effShowEmbeddedIcon}
				variationNode={embeddedIcon}
				assuranceNode={null /* assurance icon is already part of embeddedIcon block */}
			/>

			<ChartRoot
				height={height}
				ariaLabel={ariaLabel}
				margin={{ bottom: 48, left: 56, right: 16, top: 12 }}
			>
				<LineScalesProvider<SPCDatum> series={series} yDomain={yDomain} yBottomGapPx={yBottomGapPx}>
					{(() => {
						const internalProps: InternalSPCProps = {
							series,
							showPoints,
							announceFocus,
							limits: { mean, ucl, lcl, sigma, onePos, oneNeg, twoPos, twoNeg },
							showZones,
							highlightOutOfControl,
							engineRows: rowsForUi,
							uniformTarget,
							visualCategories: v2Visuals,
							enableRules: effEnableRules,
							narrationContext: effectiveNarrationContext,
							gradientSequences: effGradientSequences,
							sequenceTransition: effSequenceTransition,
							processLineWidth: effProcessLineWidth,
							zeroBreakSlotGapPx: slotGapPx,
							effectiveUnit,
							partitionMarkers: effShowPartitionMarkers ? partitionMarkers : [],
							ariaLabel,
							enableNeutralNoJudgement: effEnableNeutralNoJudgement,
							showTrendGatingExplanation: effShowTrendGatingExplanation,
							metricImprovement: effMetricImprovementCore,
							showTrendStartMarkers: effShowTrendStartMarkers,
							showFirstFavourableCrossMarkers: effShowFirstFavourableCrossMarkers,
							showTrendBridgeOverlay: effShowTrendBridgeOverlay,
							showSignalsInspector: effShowSignalsInspector,
							onSignalFocus: effOnSignalFocus,
							showFocusIndicator: effShowFocusIndicator,
						};
						return <InternalSPC {...internalProps} />;
					})()}
				</LineScalesProvider>
			</ChartRoot>
			{source && (
				<div className="fdp-spc-chart__source" aria-label="Chart data source">
					{typeof source === "string" ? (
						<small>Source: {source}</small>
					) : (
						source
					)}
				</div>
			)}
			<DiagnosticsPanel
				show={!!effShowWarningsPanel}
				warnings={filteredWarnings as any}
				formatWarningCategory={formatWarningCategory}
				formatWarningCode={formatWarningCode}
			/>
		</div>
	);
};

// Transparent rectangle capturing pointer + keyboard events to drive tooltip focus
/* InteractionLayer lives with InternalSPC */

export default SPCChart;
