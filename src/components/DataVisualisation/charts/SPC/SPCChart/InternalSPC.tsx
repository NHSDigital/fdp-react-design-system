import * as React from "react";
import Axis from "../../Axis/Axis";
import GridLines from "../../GridLines/GridLines";
import LineSeriesPrimitive from "../../../series/LineSeriesPrimitive";
import { useChartContext } from "../../../core/ChartRoot";
import { useScaleContext } from "../../../core/ScaleContext";
import {
	TooltipProvider,
	useTooltipContext,
} from "../../../core/TooltipContext";
import SPCTooltipOverlay from "./SPCTooltipOverlay";
import VisuallyHiddenLiveRegion from "../../../primitives/VisuallyHiddenLiveRegion";
import SPCSignalsInspector from "./SPCSignalsInspector";
import { extractRuleIds, ruleGlossary, variationLabel } from "./descriptors";
import SpcGradientCategory from "./SPCChart.constants";
import { computeGradientSequences } from "./gradientSequences";
import { SpcVisualCategory } from "./logic_v2";
import { SequenceTransition, type SPCDatum } from "./SPCChart.props";
import type { EngineRowUI } from "./SPCChart.types";
import { ImprovementDirection, VariationIcon, AssuranceIcon } from "./types";
import { Side } from "../engine";

let spcSequenceInstanceCounter = 0;

import type { InternalSPCProps } from "./InternalSPC.types";

const InternalSPC: React.FC<InternalSPCProps> = ({
	series,
	showPoints,
	announceFocus,
	limits,
	showZones,
	highlightOutOfControl,
	engineRows,
	enableRules,
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
	zeroBreakSlotGapPx,
}) => {
	const scaleCtx = useScaleContext();
	const chartCtx = useChartContext();
	if (!scaleCtx) return null;
	const { xScale, yScale } = scaleCtx;
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

	const sequences = React.useMemo(() => {
		if (!gradientSequences || !categories.length)
			return [] as {
				start: number;
				end: number;
				category: SpcGradientCategory;
			}[];
		return computeGradientSequences(categories, true);
	}, [gradientSequences, categories, ariaLabel]);

	const xPositions = React.useMemo(
		() => all.map((d) => xScale(d.x instanceof Date ? d.x : new Date(d.x))),
		[all, xScale]
	);
	const plotWidth = xScale.range()[1];
	const plotLeft = xScale.range()[0];

	const trendInsights = React.useMemo(() => {
		if (!engineRows || !engineRows.length)
			return null as null | {
				direction: Side;
				detectedAt: number;
				firstFavourableCrossAt: number | null;
				persistedAcrossMean: boolean;
			};
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
			return metricImprovement === ImprovementDirection.Down
				? row.data.value < (row.limits.mean as number)
				: row.data.value > (row.limits.mean as number);
		};
		let firstFavourableCrossAt: number | null = null;
		for (let i = detectedAt; i < engineRows.length; i++) {
			const r = engineRows[i];
			const flagged = useUp ? !!r.rules.trend.up : !!r.rules.trend.down;
			if (!flagged) break;
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

	const limitSegments = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null;
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

	const sequenceDefs = React.useMemo(() => {
		if (!sequences.length) return null;
		return (
			<defs>
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
						end = 0.045;
					switch (seq.category) {
						case SpcGradientCategory.Concern:
							baseVar = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)";
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
						const prevSeq = idx > 0 ? sequences[idx - 1] : null;
					const nextSeq =
						idx < sequences.length - 1 ? sequences[idx + 1] : null;

					const leftX = prevSeq ? xPositions[prevSeq.end] : plotLeft;
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

					if (prevColoured) {
						const prevX = xPositions[prevSeq!.end];
						const prevY = yScale(all[prevSeq!.end].y);
						const deltaPrev = all[firstIdx].y - all[prevSeq!.end].y;
						if (
							sequenceTransition === SequenceTransition.Slope &&
							deltaPrev > 0
						) {
							d = `M ${prevX} ${prevY} L ${firstX} ${firstY}`;
							startBaselineX = prevX;
						} else {
							d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
							startBaselineX = firstX;
						}
					} else {
						d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
					}

					for (let i = firstIdx + 1; i <= lastIdx; i++) {
						d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
					}
					d += ` L ${lastX} ${lastY}`;

					if (nextColoured) {
						const nextFirstX = xPositions[nextSeq!.start];
						const nextFirstY = yScale(all[nextSeq!.start].y);
						const deltaNext = all[nextSeq!.start].y - all[lastIdx].y;
						if (
							(sequenceTransition === SequenceTransition.Slope &&
								deltaNext <= 0) ||
							sequenceTransition === SequenceTransition.Extend
						) {
							d += ` L ${nextFirstX} ${nextFirstY}`;
							endBaselineX = nextFirstX;
						}
					}

						d += ` L ${endBaselineX} ${baseY}`;
						d += ` L ${startBaselineX} ${baseY} Z`;

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
				1;
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
	
	const formatDateLong = (d: Date) => `${ordinal(d.getDate())} ${d.toLocaleString("en-GB", { month: "long" })}, ${d.getFullYear()}`;

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
			return base
				.replace(/^General summary is:\s*/, "")
				.replace(/^Point \d+\s*/, "");
		},
		[engineRows, formatLive]
	);

	const showZeroBreak = React.useMemo(() => {
		try {
			const dom =
				typeof yScale?.domain === "function" ? yScale.domain() : undefined;
			if (!dom || !Array.isArray(dom) || dom.length < 2) return false;
			const min = Math.min(dom[0], dom[1]);
			const max = Math.max(dom[0], dom[1]);
			return !(0 >= min && 0 <= max);
		} catch {
			return false;
		}
	}, [yScale]);

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
					height={
						(chartCtx?.innerHeight ?? scaleCtx.yScale.range()[0]) + 12 + 48
					}
					role="img"
				>
					<g transform={`translate(56,12)`}>
						<Axis type="x" />
						<Axis
							type="y"
							yZeroBreak={{
								enabled: showZeroBreak,
								gapPx: zeroBreakSlotGapPx,
								zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 },
							}}
						/>
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
												if (s.y === next.y) return null;
												const gap = Math.max(4, next.x1 - s.x2 || 0);
												const k = gap * 0.5;
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
						{uniformTarget != null && <></>}
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
								const isFocused = tooltipCtx?.focused?.index === i;
								return (
									<circle
										key={i}
										cx={cx}
										cy={cy}
										r={5}
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

export default InternalSPC;
