import * as React from "react";
import { ChartRoot, useChartContext } from "../../core/ChartRoot";
import ScaleContext, {
	LineScalesProvider,
	useScaleContext,
} from "../../core/ScaleContext";
import { createXTimeScale, createYLinearScale } from "../../utils/scales";
import Axis from "../Axis/Axis";
import GridLines from "../GridLines/GridLines";
import LineSeriesPrimitive from "../../series/LineSeriesPrimitive";
import TooltipOverlay from "../../primitives/TooltipOverlay";
import { TooltipProvider } from "../../core/TooltipContext";
import VisuallyHiddenLiveRegion from "../../primitives/VisuallyHiddenLiveRegion";
import AlertMarkers from "../../primitives/AlertMarkers";
import { detectRunRuleEvents, type RunRuleEvent } from "./runRules.ts";
import { getCategoricalPalette, pickSeriesColor } from "../../utils/colors";

export interface RunDatum {
	x: Date | string | number;
	y: number;
	ghost?: boolean;
}
export interface RunSeries {
	id: string;
	data: RunDatum[];
	color?: string;
	label?: string;
}

export interface RunChartProps {
	series: RunSeries[];
	height?: number;
	yLabel?: string;
	ariaLabel?: string;
	showPoints?: boolean;
	focusablePoints?: boolean;
	/** Custom stroke width for the series line (px). Default 1. */
	strokeWidth?: number;
	/** Enable curve smoothing (monotoneX). Default true. */
	smooth?: boolean;
	/** Light gradient wash under lines (uses stroke colour fading to transparent). Default true. */
	gradientFills?: boolean;
	/** When true, computes a single-series median and draws a horizontal baseline. */
	showMedian?: boolean;
	/** Optional boolean flags per point to start new median partitions (phase changes). If provided, must be same length/order as series[0].data */
	partitionFlags?: (boolean | null | undefined)[];
	/** When true, render provisional visual markers for run-chart rules (trend / shift). Default false. */
	showRunRulesHints?: boolean;
	/** Select a single-series line colour from NHS data-viz palette. Default NHS Blue. */
	lineColor?: RunChartColor;
}

// Simple median calculator ignoring null/undefined; assumes numeric y's
const median = (values: number[]): number => {
	const v = values
		.slice()
		.filter((n) => Number.isFinite(n))
		.sort((a, b) => a - b);
	if (!v.length) return NaN;
	const mid = Math.floor(v.length / 2);
	return v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2;
};

// NHS data‑viz colour enum (categorical palette). NHSBlue aliases to Categorical1.
export enum RunChartColor {
	NHSBlue = "NHSBlue",
	Categorical1 = "Categorical1",
	Categorical2 = "Categorical2",
	Categorical3 = "Categorical3",
	Categorical4 = "Categorical4",
	Categorical5 = "Categorical5",
	Categorical6 = "Categorical6",
	Categorical7 = "Categorical7",
	Categorical8 = "Categorical8",
	Categorical9 = "Categorical9",
	Categorical10 = "Categorical10",
	Categorical11 = "Categorical11",
	Categorical12 = "Categorical12",
}

function resolveRunColor(id: RunChartColor | undefined): string | undefined {
	if (!id) return undefined;
	const pal = getCategoricalPalette();
	const map: Record<RunChartColor, number> = {
		[RunChartColor.NHSBlue]: 0,
		[RunChartColor.Categorical1]: 0,
		[RunChartColor.Categorical2]: 1,
		[RunChartColor.Categorical3]: 2,
		[RunChartColor.Categorical4]: 3,
		[RunChartColor.Categorical5]: 4,
		[RunChartColor.Categorical6]: 5,
		[RunChartColor.Categorical7]: 6,
		[RunChartColor.Categorical8]: 7,
		[RunChartColor.Categorical9]: 8,
		[RunChartColor.Categorical10]: 9,
		[RunChartColor.Categorical11]: 10,
		[RunChartColor.Categorical12]: 11,
	};
	const idx = map[id];
	return typeof idx === "number" ? pal[idx % pal.length] : undefined;
}
const Baseline: React.FC<{ value: number; label?: string }> = ({
	value,
	label,
}) => {
	const chart = useChartContext();
	const scales = useScaleContext();
	if (!chart || !scales || !Number.isFinite(value)) return null;
	const y = scales.yScale(value);
	return (
		<g className="fdp-run-baseline" aria-hidden>
			<line
				x1={0}
				x2={chart.innerWidth}
				y1={y}
				y2={y}
				stroke="var(--fdp-run-baseline,#6f777b)"
				strokeDasharray="6 4"
			/>
			{label && (
				<text
					x={chart.innerWidth - 4}
					y={y - 4}
					textAnchor="end"
					fontSize={12}
					fill="var(--fdp-run-baseline,#6f777b)"
				>
					{label}
				</text>
			)}
		</g>
	);
};

const InternalRunChart: React.FC<RunChartProps> = ({
	series,
	yLabel,
	ariaLabel = "Run chart",
	showPoints = true,
	focusablePoints = true,
	strokeWidth = 2,
	smooth = false,
	gradientFills = true,
	showMedian = true,
	partitionFlags,
	showRunRulesHints = false,
	lineColor = RunChartColor.NHSBlue,
}) => {
	const ctx = useChartContext();
	const scaleCtx = useScaleContext();
	const allData = React.useMemo(() => series.flatMap((s) => s.data), [series]);
	const parseX = React.useCallback(
		(d: RunDatum) => (d.x instanceof Date ? d.x : new Date(d.x)),
		[]
	);
	const xScale = React.useMemo(() => {
		if (!ctx) return null as any;
		return createXTimeScale(allData as any, parseX as any, [0, ctx.innerWidth]);
	}, [allData, parseX, ctx]);
	const yScale = React.useMemo(() => {
		if (!ctx) return null as any;
		return createYLinearScale(allData as any, (d: any) => d.y, [
			ctx.innerHeight,
			0,
		]);
	}, [allData, ctx]);
	// Resolve a stable per-series colour used for stroke and gradient.
	const resolvedColors = React.useMemo(() => {
		const singleColor = resolveRunColor(lineColor);
		return series.map(
			(s, i) =>
				s.color ||
				(series.length === 1 ? singleColor : undefined) ||
				pickSeriesColor(i)
		);
	}, [series, lineColor]);
	// Unique gradient ids per instance to avoid collisions in pages/MDX
	const idBase = React.useId();
	const gradientIds = React.useMemo(
		() => series.map((_, i) => `${idBase}-fdp-run-grad-${i}`),
		[series, idBase]
	);
	const content = (
		<TooltipProvider>
			<div className="fdp-run-chart" role="group" aria-label={ariaLabel}>
				<svg width={ctx?.width ?? 0} height={ctx?.height ?? 0} role="img">
					<g
						transform={`translate(${ctx?.margin.left ?? 0},${ctx?.margin.top ?? 0})`}
					>
						{gradientFills && (
							<defs>
								{series.map((s, i) => {
									const lineColorHex = resolvedColors[i];
									return (
										<linearGradient
											key={s.id}
											id={gradientIds[i]}
											x1="0%"
											y1="0%"
											x2="0%"
											y2="100%"
										>
											<stop
												offset="0%"
												stopColor={lineColorHex}
												stopOpacity={0.25}
											/>
											<stop
												offset="100%"
												stopColor={lineColorHex}
												stopOpacity={0}
											/>
										</linearGradient>
									);
								})}
							</defs>
						)}
						<Axis type="x" />
						<Axis type="y" label={yLabel} />
						<GridLines axis="y" />
						{series.map((s, si) => (
							<LineSeriesPrimitive
								key={s.id}
								series={s as any}
								seriesIndex={si}
								palette="categorical"
								showPoints={showPoints}
								focusablePoints={focusablePoints}
								focusIndex={-1}
								parseX={(d) => (d.x instanceof Date ? d.x : new Date(d.x))}
								strokeWidth={strokeWidth}
								smooth={smooth}
								gradientFillId={gradientFills ? gradientIds[si] : undefined}
								colors={resolvedColors}
							/>
						))}
						{/* Optional provisional 'run rules' hint markers (visual only) */}
						{showRunRulesHints &&
							series.length === 1 &&
							(() => {
								const s = series[0];
								const events = detectRunRuleEvents(s.data.map((d) => d.y));
								const points = events.map((ev: RunRuleEvent) => ({
									x: s.data[ev.index].x,
									label: ev.type.startsWith("trend")
										? "Run: trend"
										: "Run: shift",
									status: "info" as const,
								}));
								return points.length ? (
									<AlertMarkers points={points} shape="diamond" size={4} />
								) : null;
							})()}
						{/* Simple single-series median baseline (or partitioned) */}
						{showMedian &&
							series.length === 1 &&
							(partitionFlags &&
							partitionFlags.length === series[0].data.length ? (
								(() => {
									const parts: { start: number; end: number }[] = [];
									let start = 0;
									for (let i = 0; i < partitionFlags.length; i++) {
										if (i > 0 && partitionFlags[i]) {
											parts.push({ start, end: i - 1 });
											start = i;
										}
									}
									parts.push({ start, end: series[0].data.length - 1 });
									return parts.map((p, idx) => {
										const m = median(
											series[0].data.slice(p.start, p.end + 1).map((d) => d.y)
										);
										return (
											<Baseline
												key={idx}
												value={m}
												label={idx === parts.length - 1 ? "Median" : undefined}
											/>
										);
									});
								})()
							) : (
								<Baseline
									value={median(series[0].data.map((d) => d.y))}
									label="Median"
								/>
							))}
						<TooltipOverlay />
					</g>
				</svg>
				<VisuallyHiddenLiveRegion />
			</div>
		</TooltipProvider>
	);
	if (scaleCtx) return content;
	if (!xScale || !yScale) return content;
	const value = {
		xScale,
		yScale,
		getXTicks: (c = 6) => xScale.ticks(c),
		getYTicks: (c = 5) => yScale.ticks(c),
	};
	return <ScaleContext.Provider value={value}>{content}</ScaleContext.Provider>;
};

export const RunChart: React.FC<RunChartProps> = (props) => {
	const ctx = useChartContext();
	if (ctx) {
		return useScaleContext() ? (
			<InternalRunChart {...props} />
		) : (
			<LineScalesProvider
				series={props.series as any}
				innerWidth={ctx.innerWidth}
				innerHeight={ctx.innerHeight}
			>
				<InternalRunChart {...props} />
			</LineScalesProvider>
		);
	}
	return (
		<ChartRoot
			height={(props as any).height ?? 240}
			ariaLabel={(props as any).ariaLabel}
			margin={{ bottom: 48, left: 56, right: 16, top: 12 }}
		>
			<InternalRunChart {...props} />
		</ChartRoot>
	);
};

export default RunChart;
