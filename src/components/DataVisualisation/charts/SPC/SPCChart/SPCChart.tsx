import * as React from "react";
import "../../../DataVisualisation.scss";
import "./SPCChart.scss";
import { ChartRoot, useChartContext } from "../../../core/ChartRoot";
import {
	TooltipProvider,
	useTooltipContext,
} from "../../../core/TooltipContext";
import {
	LineScalesProvider,
	useScaleContext,
} from "../../../core/ScaleContext";
import Axis from "../../Axis/Axis";
import GridLines from "../../GridLines/GridLines";
import LineSeriesPrimitive, { type LineSeries as DVLineSeries } from "../../../series/LineSeriesPrimitive";
// Replaced generic TooltipOverlay with SPC-specific enriched overlay
import SPCTooltipOverlay from "./SPCTooltipOverlay";
import VisuallyHiddenLiveRegion from "../../../primitives/VisuallyHiddenLiveRegion";
import { SPCVariationIcon } from "../SPCIcons/SPCIcon";
import { SPCAssuranceIcon } from "../SPCIcons/SPCAssuranceIcon";
import {
	AssuranceResult,
	Direction,
	MetricPolarity,
} from "../SPCIcons/SPCConstants";
// SPC Logic & types
import {
	SpcWarningSeverity,
	SpcWarningCategory,
	SpcWarningCode,
} from "./logic/spc";
import {
	ImprovementDirection,
	VariationIcon,
	AssuranceIcon,
	ChartType,
} from "./types";
import SpcGradientCategory, {
	SpcEmbeddedIconVariant,
	LetterMode,
} from "./SPCChart.constants";
import { computeGradientSequences } from "./gradientSequences";
// import { buildSpcSqlCompat } from './logic/spcSqlCompat';
import computeAutoMetrics from "../utils/autoMetrics";
import { Tag } from "../../../../Tag/Tag";
import Table from "../../../../Tables/Table";
import SPCSignalsInspector from "./SPCSignalsInspector";
import type { SPCSignalFocusInfo, EngineRowUI } from "./SPCChart.types";
import { extractRuleIds, ruleGlossary, variationLabel } from "./descriptors";
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
import { normalizeSpcProps, TrendVisualMode, SequenceTransition } from "./SPCChart.props";
import { Side } from "../engine";

// Global counter to create stable, unique gradient id bases across multiple SPCChart instances
let spcSequenceInstanceCounter = 0;

// Visuals presets for boundary-window and dataset-specific overrides
// VisualsScenario is re-exported from engine presets

export const SPCChart: React.FC<SPCChartProps> = ({
	data,
	ariaLabel: ariaLabelProp = "SPC chart",
	height: heightProp = 260,
	showZones: showZonesProp = true,
	showPoints: showPointsProp = true,
	announceFocus = false,
	className: classNameProp,
	unit: unitProp,
	highlightOutOfControl: highlightOutOfControlProp = true,
	chartType = ChartType.XmR,
	metricImprovement = ImprovementDirection.Neither,
	enableRules = true,
	showIcons = false,
	showEmbeddedIcon = true,
	embeddedIconVariant = SpcEmbeddedIconVariant.Classic,
	embeddedIconRunLength,
	targets: targetsProp,
	baselines,
	ghosts,
	settings,
	narrationContext: narrationContextProp,
	gradientSequences = false,
	sequenceTransition = SequenceTransition.Slope,
	processLineWidth = 2,
	showWarningsPanel = false,
	warningsFilter,
	enableNeutralNoJudgement = true,
	showTrendGatingExplanation = true,
	trendVisualMode = TrendVisualMode.Ungated,
	disableTrendSideGating,
	source: sourceProp,
	alwaysShowZeroY = true,
	alwaysShowHundredY = false,
	percentScale = false,
	showPartitionMarkers = false,
	showTrendStartMarkers = false,
	showFirstFavourableCrossMarkers = false,
	showTrendBridgeOverlay = false,
	showSignalsInspector = false,
	onSignalFocus,
	visualsScenario: visualsScenarioProp = V2VisualsScenario.None,
	showFocusIndicator = true,
	visualsEngineSettings: visualsEngineSettingsProp,
	ui,
	input,
	engine: engineGroup,
	// New grouped aliases
	container,
	a11y,
	visualsEngine,
	meta,
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

	// Removed effectiveEnableTrendSideGating constant)
	if (
		process.env.NODE_ENV !== "production" &&
		disableTrendSideGating !== undefined
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
		effShowIcons,
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
	} = normalizeSpcProps({
		data,
		targets: targetsProp,
		baselines,
		ghosts,
		settings,
		chartType,
		metricImprovement,
		enableRules,
		gradientSequences,
		sequenceTransition,
		processLineWidth,
		showPartitionMarkers,
		showWarningsPanel,
		warningsFilter,
		enableNeutralNoJudgement,
		showTrendGatingExplanation,
		trendVisualMode,
		alwaysShowZeroY,
		alwaysShowHundredY,
		percentScale,
		showTrendStartMarkers,
		showFirstFavourableCrossMarkers,
		showTrendBridgeOverlay,
		showSignalsInspector,
		onSignalFocus,
		showIcons,
		showEmbeddedIcon,
		embeddedIconVariant,
		embeddedIconRunLength,
		showFocusIndicator,
		ui,
		input,
		engine: engineGroup,
		// pass grouped aliases through so normalize can prefer them
		container,
		a11y,
		visualsEngine,
		meta,
	});

	// Effective precedence: prefer grouped eff* when provided, otherwise fall back to flat props
	const ariaLabel = effAriaLabel ?? ariaLabelProp;
	const height = effHeight ?? heightProp;
	const className = effClassName ?? classNameProp;
	const unit = effUnit ?? unitProp;
	const narrationContext = effNarrationContext ?? narrationContextProp;
	const showZones = (effShowZones ?? showZonesProp) as boolean;
	const showPoints = (effShowPoints ?? showPointsProp) as boolean;
	const highlightOutOfControl = (
		effHighlightOutOfControl ?? highlightOutOfControlProp
	) as boolean;
	const visualsScenario = effVisualsScenario ?? visualsScenarioProp;
	const visualsEngineSettings =
		effVisualsEngineSettings ?? visualsEngineSettingsProp;
	const source = effSource ?? sourceProp;

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

	// Note: v2 visuals/rows are now the canonical path for UI; legacy engine build removed.

	// Effective UI options are provided by normalizeSpcProps

	// Compute engine v2 visuals (UI-agnostic categories) so the engine drives colour coding
	const v2Visuals: SpcVisualCategory[] = React.useMemo(() => {
		try {
			// Map legacy SPC settings to v2 engine settings for visual parity (typed)
			const minPts = effEngineSettings?.minimumPointsPartition ?? effEngineSettings?.minimumPoints;
			const v2Settings: Partial<V2Settings> = {};
			if (typeof minPts === "number" && !isNaN(minPts)) {
				v2Settings.minimumPoints = minPts;
				// When the series has at least minimum points overall, enable chart-level eligibility
				// so the engine backfills limits across the partition (colours available from index 0 in tests)
				const eligibleCount = rowsInput.filter(
					(r) => !r.ghost && typeof r.value === "number"
				).length;
				if (eligibleCount >= minPts) v2Settings.chartLevelEligibility = true;
			}
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
				data: rowsInput,
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
		rowsInput,
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
			const minPts = effEngineSettings?.minimumPointsPartition ?? effEngineSettings?.minimumPoints;
			const v2Settings: Partial<V2Settings> = {};
			if (typeof minPts === "number" && !isNaN(minPts)) {
				v2Settings.minimumPoints = minPts;
				const eligibleCount = rowsInput.filter(
					(r) => !r.ghost && typeof r.value === "number"
				).length;
				if (eligibleCount >= minPts) v2Settings.chartLevelEligibility = true;
			}
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
				data: rowsInput,
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
					target: rowsInput[i]?.target ?? null,
				})
			);
		} catch {
			return null;
		}
	}, [rowsInput, effChartTypeCore, effMetricImprovementCore, effEngineSettings, visualsEngineSettings]);

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
			const minPointsPartition = effEngineSettings?.minimumPointsPartition ?? 12;
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
	}, [rowsForUi, effEngineSettings?.minimumPoints, effEngineSettings?.minimumPointsPartition]);
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

	// Accessible live announcement for diagnostics panel updates
	const [diagnosticsMessage, setDiagnosticsMessage] =
		React.useState<string>("");
	const lastDiagnosticsRef = React.useRef<string>("");
	React.useEffect(() => {
		if (!effShowWarningsPanel) {
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
	}, [effShowWarningsPanel, filteredWarnings]);

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
	const yDomain = React.useMemo(() => {
		if (effPercentScale) {
			// If any values slightly exceed bounds (e.g. 100.2 due to rounding), widen just enough.
			const allVals = effData.map((d) => d.y);
			const overMax = Math.max(100, ...allVals);
			const underMin = Math.min(0, ...allVals);
			return [underMin < 0 ? underMin : 0, overMax > 100 ? overMax : 100] as [
				number,
				number,
			];
		}

		const values = effData.map((d) => d.y);
		const base = [...values];
		[mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg].forEach((v) => {
			if (v != null) base.push(v);
		});

		// Include any numeric targets so target line never sits outside vertical range
		if (effTargets)
			effTargets.forEach((t: number | null | undefined) => {
				if (typeof t === "number" && !isNaN(t)) base.push(t);
			});
		if (!base.length) return undefined;
		let min = Math.min(...base);
		let max = Math.max(...base);
		if (effAlwaysShowZeroY) min = Math.min(0, min);
		if (effAlwaysShowHundredY) max = Math.max(100, max);
		return [min, max] as [number, number];
	}, [
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

	const effectiveUnit =
		unit ?? narrationContext?.measureUnit ?? autoFromHelper.unit;
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

	// Derive embedded variation icon (now rendered above chart instead of inside SVG)
	const embeddedIcon = React.useMemo(() => {
		if (!effShowEmbeddedIcon || !rowsForUi?.length) return null;
		const engineRows = rowsForUi as EngineRowUI[];
		// Suppress embedded icon entirely when insufficient non-ghost points to establish stable limits
		const minPoints = effEngineSettings?.minimumPoints ?? 13;
		const nonGhostCount = engineRows.filter(
			(r) => !r.data.ghost && r.data.value != null
		).length;

		if (nonGhostCount < minPoints) return null;
		// Determine if targets exist (no longer used to suppress placeholder; kept for potential future diagnostics)
		// const hasAnyTargets = (targetsProp?.some(t => typeof t === 'number' && !isNaN(t as any))) ?? false;
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
		const canonicalVariation: VariationIcon | undefined = variation;
		const assuranceRaw = lastRow.classification?.assurance as
			| AssuranceIcon
			| undefined;
		const hasNeutralSpecialCause =
			canonicalVariation === VariationIcon.Neither &&
			!!lastRow.classification?.neutralSpecialCauseValue;

		// Map engine assurance icon (which can be None) to visual AssuranceResult (None -> Uncertain placeholder glyph)
		const assuranceRenderStatus: AssuranceResult =
			assuranceRaw === AssuranceIcon.Pass
				? AssuranceResult.Pass
				: assuranceRaw === AssuranceIcon.Fail
					? AssuranceResult.Fail
					: AssuranceResult.Uncertain;

		// Derive a trend/orientation hint for suppressed 'no judgement' cases so the purple arrow points towards the favourable direction
		let trend: Direction | undefined = undefined;
		if (canonicalVariation === VariationIcon.Suppressed) {
			// A suppressed favourable single point will have exactly one of the singlePointUp/Down flags set
			const singleHigh = !!lastRow.rules.singlePoint.up;
			const singleLow = !!lastRow.rules.singlePoint.down;
			if (effMetricImprovementCore === ImprovementDirection.Up) {
				// Higher is favourable: a suppressed high point should orient higher
				if (singleHigh) trend = Direction.Higher;
				else if (singleLow) trend = Direction.Lower; // defensive (should not be favourable)
			} else if (effMetricImprovementCore === ImprovementDirection.Down) {
				// Lower is favourable: a suppressed low point should orient lower
				if (singleLow) trend = Direction.Lower;
				else if (singleHigh) trend = Direction.Higher; // defensive
			} else {
				// Neutral metrics: default to higher to preserve legacy layout
				trend = Direction.Higher;
			}
		} else if (
			canonicalVariation === VariationIcon.Neither &&
			hasNeutralSpecialCause
		) {
			// Neutral special-cause (purple) orientation should reflect side of signal (high-side vs low-side)
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
			else trend = Direction.Higher; // conflicting or none -> default higher
		}

		// Determine metric polarity for embedded icon (higher/lower/context) based on improvement direction
		// NB: this is a change from previous behaviour where neutral metrics were marked as 'context dependent'
		// This better reflects the fact that the direction of the arrows in neutral metrics is purely indicative
		// and does not reflect any underlying business meaning.
		// Note: polarity is not currently used in rendering but is included in data attributes for potential future use.
		let polarity: MetricPolarity;
		if (effMetricImprovementCore === ImprovementDirection.Up)
			polarity = MetricPolarity.HigherIsBetter;
		else if (effMetricImprovementCore === ImprovementDirection.Down)
			polarity = MetricPolarity.LowerIsBetter;
		else polarity = MetricPolarity.ContextDependent;

		const iconSize = 80;

		// Compute side signals once for use in icon payload and engine VariationIcon mapping
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

		// Map UI variation to engine enum required by SPCVariationIcon's engine payload
		let variationEngine: V2VariationIcon = V2VariationIcon.CommonCause;
		if (canonicalVariation === VariationIcon.Improvement) {
			variationEngine = V2VariationIcon.ImprovementHigh;
		} else if (canonicalVariation === VariationIcon.Concern) {
			variationEngine = V2VariationIcon.ConcernHigh;
		} else if (canonicalVariation === VariationIcon.Neither) {
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
					data-variation={String(canonicalVariation)}
					data-trend-raw={trend ? String(trend) : "none"}
					data-trend={trend ? String(trend) : "none"}
					data-polarity={String(polarity ?? "unknown")}
					style={{ width: iconSize, height: iconSize }}
				>
					<SPCVariationIcon
						dropShadow={false}
						data={{
							variationIcon: variationEngine,
							improvementDirection: effMetricImprovementCore,
							polarity,
							specialCauseNeutral: hasNeutralSpecialCause,
							highSideSignal,
							lowSideSignal,
							...(trend ? { trend } : {}),
						}}
						// Letter semantics: use polarity (business improvement direction) when specified; fall back to signal side for neutral metrics
						letterMode={
							effMetricImprovementCore === ImprovementDirection.Neither
								? LetterMode.Direction
								: LetterMode.Polarity
						}
						size={iconSize}
						variant={effEmbeddedIconVariant}
						runLength={
							effEmbeddedIconVariant === SpcEmbeddedIconVariant.TriangleWithRun
								? effEmbeddedIconRunLength
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
		effShowEmbeddedIcon,
		rowsForUi,
		effMetricImprovementCore,
		effEngineSettings?.minimumPoints,
		effEmbeddedIconVariant,
		effEmbeddedIconRunLength,
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
			{effShowEmbeddedIcon && (
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
				<LineScalesProvider<SPCDatum> series={series} yDomain={yDomain}>
					<InternalSPC
						series={series}
						showPoints={showPoints}
						announceFocus={announceFocus}
						limits={{ mean, ucl, lcl, sigma, onePos, oneNeg, twoPos, twoNeg }}
						showZones={showZones}
						highlightOutOfControl={highlightOutOfControl}
						engineRows={rowsForUi}
						uniformTarget={uniformTarget}
						visualCategories={v2Visuals}
						enableRules={effEnableRules}
						showIcons={effShowIcons}
						narrationContext={effectiveNarrationContext}
						gradientSequences={effGradientSequences}
						sequenceTransition={effSequenceTransition}
						processLineWidth={effProcessLineWidth}
						effectiveUnit={effectiveUnit}
						partitionMarkers={effShowPartitionMarkers ? partitionMarkers : []}
						ariaLabel={ariaLabel}
						enableNeutralNoJudgement={effEnableNeutralNoJudgement}
						showTrendGatingExplanation={effShowTrendGatingExplanation}
						metricImprovement={effMetricImprovementCore}
						showTrendStartMarkers={effShowTrendStartMarkers}
						showFirstFavourableCrossMarkers={effShowFirstFavourableCrossMarkers}
						showTrendBridgeOverlay={effShowTrendBridgeOverlay}
						showSignalsInspector={effShowSignalsInspector}
						onSignalFocus={effOnSignalFocus}
						showFocusIndicator={effShowFocusIndicator}
					/>
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
			{/* Live diagnostics announcement (visually hidden) */}
			{effShowWarningsPanel && diagnosticsMessage && (
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
			{effShowWarningsPanel && filteredWarnings.length > 0 && (
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
	engineRows: EngineRowUI[] | null;
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
	sequenceTransition: SequenceTransition;
	processLineWidth: number;
	effectiveUnit?: string;
	partitionMarkers: number[];
	ariaLabel?: string;
	// Feature flags to control neutral purple and gating explanation behaviour
	enableNeutralNoJudgement?: boolean;
	showTrendGatingExplanation?: boolean;
	// UI overlays
	showTrendStartMarkers?: boolean;
	showFirstFavourableCrossMarkers?: boolean;
	showTrendBridgeOverlay?: boolean;
	showSignalsInspector?: boolean;
	/** UI-only: when Signals Inspector is shown, notify on focus changes. */
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
	/** Optional engine v2-provided UI-agnostic categories to drive colour coding */
	visualCategories: SpcVisualCategory[];
	/** Precomputed uniform target value (drawn as horizontal line) */
	uniformTarget: number | null;
	/** Also render a visible focus ring on the chart when a point is focused. */
	showFocusIndicator?: boolean;
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
	sequenceTransition,
	processLineWidth,
	effectiveUnit,
	partitionMarkers,
	ariaLabel,
	metricImprovement,
	enableNeutralNoJudgement = true,
	showTrendGatingExplanation = true,
	showTrendStartMarkers = false,
	showFirstFavourableCrossMarkers = false,
	showTrendBridgeOverlay = false,
	showSignalsInspector = false,
	onSignalFocus,
	visualCategories,
	uniformTarget,
	showFocusIndicator = false,
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
			if (typeof limits.ucl === "number" && d.y > limits.ucl) set.add(i);
			if (typeof limits.lcl === "number" && d.y < limits.lcl) set.add(i);
		});
		return set;
	}, [limits.ucl, limits.lcl, all]);

	// Map engine row flags into a lightweight per-index signals object for UI use
	const engineSignals = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null as null | any[];
		const map: any[] = [];
		engineRows.forEach((r: EngineRowUI, idx: number) => {
			const anySpecial =
				r.classification.variation === VariationIcon.Concern ||
				r.classification.variation === VariationIcon.Improvement ||
				!!r.classification.neutralSpecialCauseValue;
			const upAny =
				!!r.rules.singlePoint.up ||
				!!r.rules.twoOfThree.up ||
				!!r.rules.fourOfFive.up ||
				!!r.rules.shift.up ||
				!!r.rules.trend.up;
			const downAny =
				!!r.rules.singlePoint.down ||
				!!r.rules.twoOfThree.down ||
				!!r.rules.fourOfFive.down ||
				!!r.rules.shift.down ||
				!!r.rules.trend.down;
			map[idx] = {
				variation: r.classification.variation,
				assurance: r.classification.assurance,
				special: anySpecial,
				concern: r.classification.variation === VariationIcon.Concern,
				improvement: r.classification.variation === VariationIcon.Improvement,
				trendUp: !!r.rules.trend.up,
				trendDown: !!r.rules.trend.down,
				upAny,
				downAny,
				neutralSpecial: !!r.classification.neutralSpecialCauseValue,
				shiftUp: !!r.rules.shift.up,
				shiftDown: !!r.rules.shift.down,
				twoOfThreeUp: !!r.rules.twoOfThree.up,
				twoOfThreeDown: !!r.rules.twoOfThree.down,
				fourOfFiveUp: !!r.rules.fourOfFive.up,
				fourOfFiveDown: !!r.rules.fourOfFive.down,
				partitionId: r.partition.id ?? null,
			};
		});
		return map;
	}, [engineRows]);

	// uniformTarget is computed in the outer SPCChart and passed as a prop

	// Categories strictly from engine v2 visuals (engine is source of truth)
	const categories = React.useMemo(() => {
		return (visualCategories || []).map((c) => {
			if (c === SpcVisualCategory.Improvement)
				return SpcGradientCategory.Improvement;
			if (c === SpcVisualCategory.Concern) return SpcGradientCategory.Concern;
			if (c === SpcVisualCategory.NoJudgement)
				return SpcGradientCategory.NoJudgement;
			return SpcGradientCategory.Common;
		});
	}, [visualCategories]);

	// Derive contiguous sequences after absorption
	const sequences = React.useMemo(() => {
		if (!gradientSequences || !categories.length)
			return [] as {
				start: number;
				end: number;
				category: SpcGradientCategory;
			}[];
		return computeGradientSequences(categories, true);
	}, [gradientSequences, categories, ariaLabel]);

	// Precompute x positions for boundary calculations (after scales + data available)
	const xPositions = React.useMemo(
		() => all.map((d) => xScale(d.x instanceof Date ? d.x : new Date(d.x))),
		[all, xScale]
	);
	const plotWidth = xScale.range()[1];

	// Compute basic trend insights (UI-only) from engine rows
	const trendInsights = React.useMemo(() => {
		if (!engineRows || !engineRows.length)
			return null as null | {
				direction: Side;
				detectedAt: number; // index in series
				firstFavourableCrossAt: number | null;
				persistedAcrossMean: boolean;
			};
		// Find earliest trend window across up/down
		let earliestUp = Number.POSITIVE_INFINITY;
		let earliestDown = Number.POSITIVE_INFINITY;
		engineRows.forEach((r, i) => {
			if (r.rules.trend.up) earliestUp = Math.min(earliestUp, i);
			if (r.rules.trend.down) earliestDown = Math.min(earliestDown, i);
		});
		if (!Number.isFinite(earliestUp) && !Number.isFinite(earliestDown))
			return null;
		const useUp = earliestUp <= earliestDown;
		const direction: Side = useUp ? Side.Up : Side.Down;
		const detectedAt = useUp ? earliestUp : earliestDown;
		// Determine favourable side relative to metricImprovement and row mean
		const isFavourable = (row: EngineRowUI | null | undefined): boolean => {
			if (
				metricImprovement == null ||
				metricImprovement === ImprovementDirection.Neither
			)
				return false;
			if (
				row == null ||
				typeof row.data.value !== "number" ||
				typeof row.limits.mean !== "number"
			)
				return false;
			if (direction === Side.Up) {
				return metricImprovement === ImprovementDirection.Up
					? row.data.value > (row.limits.mean as number)
					: row.data.value < (row.limits.mean as number);
			}
			// direction === 'down'
			return metricImprovement === ImprovementDirection.Down
				? row.data.value < (row.limits.mean as number)
				: row.data.value > (row.limits.mean as number);
		};
		let firstFavourableCrossAt: number | null = null;
		for (let i = detectedAt; i < engineRows.length; i++) {
			const r = engineRows[i];
			const flagged = useUp ? !!r.rules.trend.up : !!r.rules.trend.down;
			if (!flagged) break; // end of contiguous trend window span
			if (isFavourable(r)) {
				firstFavourableCrossAt = i;
				break;
			}
		}
		let persistedAcrossMean = false;
		if (firstFavourableCrossAt != null) {
			let favourableCount = 0;
			for (let i = firstFavourableCrossAt; i < engineRows.length; i++) {
				const r = engineRows[i];
				const flagged = useUp ? !!r.rules.trend.up : !!r.rules.trend.down;
				if (!flagged) break;
				if (isFavourable(r)) favourableCount++;
			}
			persistedAcrossMean = favourableCount >= 2;
		}
		return {
			direction,
			detectedAt,
			firstFavourableCrossAt,
			persistedAcrossMean,
		};
	}, [engineRows, metricImprovement]);

	// Build horizontal line segments for limits that can change across partitions (means/limits per row)
	const limitSegments = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null;
		// Helper to extract segments from a numeric accessor
		const buildFrom = (
			extractor: (row: EngineRowUI) => number | null | undefined
		) => {
			const segs: { x1: number; x2: number; y: number }[] = [];
			let start: number | null = null;
			let current: number | null = null;
			for (let i = 0; i < engineRows.length; i++) {
				const row = engineRows[i];
				const raw = extractor(row);
				const v =
					typeof raw === "number" && !isNaN(raw) ? (raw as number) : null;
				if (v == null) {
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
				const EPS = 1e-9;
				if (current != null && Math.abs(v - current) <= EPS) {
					// same segment
				} else {
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
			mean: buildFrom((r) => r.limits.mean ?? null),
			ucl: buildFrom((r) => r.limits.ucl ?? null),
			lcl: buildFrom((r) => r.limits.lcl ?? null),
			onePos: buildFrom((r) => r.limits.oneSigma.upper ?? null),
			oneNeg: buildFrom((r) => r.limits.oneSigma.lower ?? null),
			twoPos: buildFrom((r) => r.limits.twoSigma.upper ?? null),
			twoNeg: buildFrom((r) => r.limits.twoSigma.lower ?? null),
		};
	}, [engineRows, xPositions, yScale]);

	// Build gradient definitions + rects
	const sequenceDefs = React.useMemo(() => {
		if (!sequences.length) return null;
		return (
			<defs>
				{/* Reusable common-cause gradient for transition wedges between coloured sequences */}
				<linearGradient
					id={`${gradientIdBaseRef.current}-grad-common`}
					x1="0%"
					y1="0%"
					x2="0%"
					y2="100%"
				>
					<stop
						offset="0%"
						stopColor={
							"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"
						}
						stopOpacity={0.28}
					/>
					<stop
						offset="70%"
						stopColor={
							"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"
						}
						stopOpacity={0.12}
					/>
					<stop
						offset="100%"
						stopColor={
							"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"
						}
						stopOpacity={0.045}
					/>
				</linearGradient>
				{sequences.map((seq, idx) => {
					const id = `${gradientIdBaseRef.current}-grad-${idx}`;
					let baseVar: string;
					let top = 0.28,
						mid = 0.12,
						end = 0.045; // default (grey/common)
					switch (seq.category) {
						case SpcGradientCategory.Concern:
							baseVar = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)";
							// stronger wash for coloured sequences
							top = 0.28;
							mid = 0.12;
							end = 0.045;
							break;
						case SpcGradientCategory.Improvement:
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)";
							top = 0.26;
							mid = 0.11;
							end = 0.045;
							break;
						case SpcGradientCategory.NoJudgement:
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

				if (category === SpcGradientCategory.Common) {
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
					const prevColoured =
						prevSeq && prevSeq.category !== SpcGradientCategory.Common;
					const nextColoured =
						nextSeq && nextSeq.category !== SpcGradientCategory.Common;
					const firstY = yScale(all[firstIdx].y);
					const lastY = yScale(all[lastIdx].y);
					let startBaselineX = firstX;
					let endBaselineX = lastX;

					// Start logic based on transition mode
					if (prevColoured) {
						const prevX = xPositions[prevSeq!.end];
						const prevY = yScale(all[prevSeq!.end].y);
						const deltaPrev = all[firstIdx].y - all[prevSeq!.end].y;
						if (
							sequenceTransition === SequenceTransition.Slope &&
							deltaPrev > 0
						) {
							// slope: rising -> attribute join to current colour
							d = `M ${prevX} ${prevY} L ${firstX} ${firstY}`;
							startBaselineX = prevX;
						} else {
							// neutral/extend/slope (falling or flat): start from baseline at first point
							d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
							startBaselineX = firstX;
						}
					} else {
						// no coloured predecessor
						d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
					}

					for (let i = firstIdx + 1; i <= lastIdx; i++) {
						d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
					}
					// Ensure path includes last point explicitly
					d += ` L ${lastX} ${lastY}`;

					// End logic based on transition mode
					if (nextColoured) {
						const nextFirstX = xPositions[nextSeq!.start];
						const nextFirstY = yScale(all[nextSeq!.start].y);
						const deltaNext = all[nextSeq!.start].y - all[lastIdx].y;
						if (
							(sequenceTransition === SequenceTransition.Slope &&
								deltaNext <= 0) ||
							sequenceTransition === SequenceTransition.Extend
						) {
							// attribute join to current (previous) colour by extending to next first
							d += ` L ${nextFirstX} ${nextFirstY}`;
							endBaselineX = nextFirstX;
						}
					}

					// Baseline closure
					d += ` L ${endBaselineX} ${baseY}`;
					d += ` L ${startBaselineX} ${baseY} Z`;

					// For neutral mode, insert a grey wedge at the start boundary (previous coloured -> current coloured)
					if (
						sequenceTransition === SequenceTransition.Neutral &&
						prevColoured
					) {
						const prevX = xPositions[prevSeq!.end];
						const prevY = yScale(all[prevSeq!.end].y);
						const wedge = (
							<path
								key={`seq-wedge-${idx}`}
								d={`M ${prevX} ${baseY} L ${prevX} ${prevY} L ${firstX} ${firstY} L ${firstX} ${baseY} Z`}
								fill={`url(#${gradientIdBaseRef.current}-grad-common)`}
								stroke="none"
								className="fdp-spc__sequence-bg"
								aria-hidden="true"
							/>
						);
						return (
							<g key={`seq-group-${idx}`}>
								{wedge}
								<path
									key={`seq-area-${idx}`}
									d={d}
									fill={`url(#${gradientIdBaseRef.current}-grad-${idx})`}
									stroke="none"
									className="fdp-spc__sequence-bg"
									aria-hidden="true"
								/>
							</g>
						);
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
	}, [sequences, xPositions, plotWidth, yScale, all, sequenceTransition]);

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

	// Build a minimal rule-flag carrier for extractRuleIds
	const toRuleFlags = (row: EngineRowUI | null | undefined) => ({
		specialCauseSinglePointUp: !!row?.rules.singlePoint.up,
		specialCauseSinglePointDown: !!row?.rules.singlePoint.down,
		specialCauseTwoOfThreeUp: !!row?.rules.twoOfThree.up,
		specialCauseTwoOfThreeDown: !!row?.rules.twoOfThree.down,
		specialCauseFourOfFiveUp: !!row?.rules.fourOfFive.up,
		specialCauseFourOfFiveDown: !!row?.rules.fourOfFive.down,
		specialCauseShiftUp: !!row?.rules.shift.up,
		specialCauseShiftDown: !!row?.rules.shift.down,
		specialCauseTrendUp: !!row?.rules.trend.up,
		specialCauseTrendDown: !!row?.rules.trend.down,
	});

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
			const varLabel =
				variationLabel(row.classification?.variation) || "Variation";
			const ruleIds = extractRuleIds(toRuleFlags(row));
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
						{/* Partition-aware mean (centre line) rendering with curved joins between recalculations */}
						{limitSegments?.mean.length
							? (() => {
									return (
										<g aria-hidden="true" className="fdp-spc__cl-group">
											{limitSegments.mean.map((s, i) => (
												<line
													key={`mean-${i}`}
													className="fdp-spc__cl"
													x1={s.x1}
													x2={s.x2}
													y1={s.y}
													y2={s.y}
												/>
											))}
											{limitSegments.mean.map((s, i) => {
												if (i === limitSegments.mean.length - 1) return null;
												const next = limitSegments.mean[i + 1];
												if (!next) return null;
												if (s.y === next.y) return null; // no join needed if level unchanged
												const gap = Math.max(4, next.x1 - s.x2 || 0); // pixel gap (may be 0 if contiguous)
												const k = gap * 0.5; // control point offset
												// Build cubic bezier from end of current to start of next
												const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
												return (
													<path
														key={`mean-join-${i}`}
														className="fdp-spc__cl fdp-spc__cl-join"
														d={d}
														fill="none"
													/>
												);
											})}
										</g>
									);
								})()
							: null}
						{uniformTarget != null && (
							// Render later (after limits) for stacking; temporary placeholder (moved below)
							<></>
						)}
						{limitSegments?.ucl.length
							? (() => (
									<g
										aria-hidden="true"
										className="fdp-spc__limit-group fdp-spc__limit-group--ucl"
									>
										{limitSegments.ucl.map((s, i) => (
											<line
												key={`ucl-${i}`}
												className="fdp-spc__limit fdp-spc__limit--ucl"
												x1={s.x1}
												x2={s.x2}
												y1={s.y}
												y2={s.y}
												strokeWidth={2}
											/>
										))}
										{limitSegments.ucl.map((s, i) => {
											if (i === limitSegments.ucl.length - 1) return null;
											const next = limitSegments.ucl[i + 1];
											if (!next) return null;
											if (s.y === next.y) return null;
											const gap = Math.max(4, next.x1 - s.x2 || 0);
											const k = gap * 0.5;
											const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
											return (
												<path
													key={`ucl-join-${i}`}
													className="fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join"
													d={d}
													fill="none"
													strokeWidth={2}
												/>
											);
										})}
									</g>
								))()
							: null}
						{limitSegments?.lcl.length
							? (() => (
									<g
										aria-hidden="true"
										className="fdp-spc__limit-group fdp-spc__limit-group--lcl"
									>
										{limitSegments.lcl.map((s, i) => (
											<line
												key={`lcl-${i}`}
												className="fdp-spc__limit fdp-spc__limit--lcl"
												x1={s.x1}
												x2={s.x2}
												y1={s.y}
												y2={s.y}
												strokeWidth={2}
											/>
										))}
										{limitSegments.lcl.map((s, i) => {
											if (i === limitSegments.lcl.length - 1) return null;
											const next = limitSegments.lcl[i + 1];
											if (!next) return null;
											if (s.y === next.y) return null;
											const gap = Math.max(4, next.x1 - s.x2 || 0);
											const k = gap * 0.5;
											const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
											return (
												<path
													key={`lcl-join-${i}`}
													className="fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join"
													d={d}
													fill="none"
													strokeWidth={2}
												/>
											);
										})}
									</g>
								))()
							: null}
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
						{/* Optional trend overlays: start/cross markers and bridge */}
						{trendInsights &&
							(showTrendStartMarkers ||
								showFirstFavourableCrossMarkers ||
								showTrendBridgeOverlay) &&
							(() => {
								const startIdx = trendInsights.detectedAt;
								const crossIdx = trendInsights.firstFavourableCrossAt;
								const sx = all[startIdx]
									? xScale(
											all[startIdx].x instanceof Date
												? (all[startIdx].x as Date)
												: new Date(all[startIdx].x)
										)
									: null;
								const sy = all[startIdx] ? yScale(all[startIdx].y) : null;
								const cx =
									crossIdx != null && all[crossIdx]
										? xScale(
												all[crossIdx].x instanceof Date
													? (all[crossIdx].x as Date)
													: new Date(all[crossIdx].x)
											)
										: null;
								const cy =
									crossIdx != null && all[crossIdx]
										? yScale(all[crossIdx].y)
										: null;
								return (
									<g aria-hidden="true" className="fdp-spc__trend-overlays">
										{showTrendBridgeOverlay &&
											sx != null &&
											sy != null &&
											cx != null &&
											cy != null && (
												<line
													x1={sx}
													y1={sy}
													x2={cx}
													y2={cy}
													stroke="#888"
													strokeDasharray="4 4"
													strokeWidth={2}
												>
													<title>
														Trend bridge: start to first favourable-side point
													</title>
												</line>
											)}
										{showTrendStartMarkers && sx != null && sy != null && (
											<circle
												cx={sx}
												cy={sy}
												r={6}
												fill="white"
												stroke="#555"
												strokeWidth={2}
											>
												<title>Trend start (run reached N)</title>
											</circle>
										)}
										{showFirstFavourableCrossMarkers &&
											cx != null &&
											cy != null && (
												<circle cx={cx} cy={cy} r={5} fill="#555">
													<title>First favourable-side inclusion</title>
												</circle>
											)}
									</g>
								);
							})()}
						<LineSeriesPrimitive
							series={series[0]}
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
								// Drive per-point classes from precomputed categories to ensure parity with gradient logic and overrides
								const cat = categories[i];
								const isImprovement = cat === SpcGradientCategory.Improvement;
								const isConcern = cat === SpcGradientCategory.Concern;
								const isNoJudgement = cat === SpcGradientCategory.NoJudgement;
								const classes = [
									"fdp-spc__point",
									ooc && highlightOutOfControl ? "fdp-spc__point--ooc" : null,
									enableRules && isConcern
										? "fdp-spc__point--sc-concern"
										: null,
									enableRules && isImprovement
										? "fdp-spc__point--sc-improvement"
										: null,
									// Neutral special-cause (no-judgement) from category, when enabled
									enableRules && enableNeutralNoJudgement && isNoJudgement
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
						{/* Optional chart-level focus indicator mirroring tooltip focus ring (only when inspector shown) */}
						{showFocusIndicator &&
							showSignalsInspector &&
							tooltipCtx?.focused &&
							(() => {
								const f = tooltipCtx.focused;
								const ix = typeof f.index === "number" ? f.index : -1;
								if (ix < 0 || !all[ix]) return null;
								const px = xScale(
									all[ix].x instanceof Date
										? (all[ix].x as Date)
										: new Date(all[ix].x)
								);
								const py = yScale(all[ix].y);
								const focusYellow =
									"var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
								return (
									<g className="fdp-spc__focus-indicator" aria-hidden="true">
										<circle
											cx={px}
											cy={py}
											r={7}
											fill="none"
											stroke={focusYellow}
											strokeWidth={3}
										/>
										<circle
											cx={px}
											cy={py}
											r={5}
											fill="#000"
											stroke={focusYellow}
											strokeWidth={1.5}
										/>
										<circle
											cx={px}
											cy={py}
											r={2.5}
											fill="var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"
											stroke="#fff"
											strokeWidth={0.5}
										/>
									</g>
								);
							})()}
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
						{!showSignalsInspector && (
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
						)}
					</g>
				</svg>
				{showSignalsInspector && (
					<div style={{ marginTop: 8 }}>
						<SPCSignalsInspector
							engineRows={engineRows}
							measureName={narrationContext?.measureName}
							measureUnit={effectiveUnit || narrationContext?.measureUnit}
							onSignalFocus={onSignalFocus}
						/>
					</div>
				)}
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

export default SPCChart;
