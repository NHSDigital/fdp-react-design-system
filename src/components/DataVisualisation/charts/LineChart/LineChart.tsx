import * as React from "react";
import { createXTimeScale, createYLinearScale } from "../../utils/scales";
import { scaleTime } from "d3-scale";
import { useChartDimensions } from "../../hooks/useChartDimensions";
import { ChartRoot, useChartContext } from "../../core/ChartRoot";
import ScaleContext, {
	useScaleContext,
	LineScalesProvider,
} from "../../core/ScaleContext";
import Axis from "../../charts/Axis/Axis";
import GridLines from "../../charts/GridLines/GridLines";
import LineSeriesPrimitive from "../../series/LineSeriesPrimitive";
import { pickSeriesColor, pickRegionColor } from "../../utils/colors";
import VisuallyHiddenLiveRegion from "../../primitives/VisuallyHiddenLiveRegion";
import { TooltipProvider } from "../../core/TooltipContext";
import TooltipOverlay from "../../primitives/TooltipOverlay";
import { useTooltipContext } from "../../core/TooltipContext";
import { useVisibility } from "../../core/VisibilityContext";

export interface LineDatum {
	x: Date | string | number;
	y: number;
}
export interface LineSeries {
	id: string;
	data: LineDatum[];
	color?: string;
	label?: string;
}
export interface LineChartProps {
	series: LineSeries[];
	height?: number;
	yLabel?: string;
	ariaLabel?: string;
	showPoints?: boolean;
	focusablePoints?: boolean;
	/** Palette selection: 'categorical' (default 12‑colour data-viz set) or 'region' (maps series id to region tokens if possible) */
	palette?: "categorical" | "region";
	/** Optional date tick label formatter (defaults locale month short + day) */
	dateFormatter?: (d: Date) => string;
	/** Optional y-value tick formatter */
	valueFormatter?: (n: number) => string;
	/** Explicit x-axis tick values (dates); overrides automatic ticks. */
	xTickValues?: (Date | string | number)[];
	/** Convenience flag: when true, x-axis ticks align exactly to the unique set of data point x values (sorted). Ignored if xTickValues supplied. */
	alignXTicksToData?: boolean;
	/** Announce focused point changes via an aria live region (default true). Requires TooltipProvider higher in tree for focus changes; safe no-op otherwise. */
	announceFocus?: boolean;
	/** Show floating tooltip overlay (circle + label). Defaults true. */
	showTooltipOverlay?: boolean;
	/** Pad the x-domain by half a step on each side so edge points (focus ring) are fully visible (default true). */
	padXDomain?: boolean;
	/** Enable wrap-around keyboard navigation for points & series (Arrow keys wrap). */
	wrapAroundNav?: boolean;
	/** Opt-in: enable built-in keyboard navigation handler (Arrow/Home/End/Escape). Default false for explicit adoption. */
	keyboardNav?: boolean;
	/** Presentation of hidden series: 'remove' (default, series omitted) or 'fade' (dim visually, non-interactive). */
	visibilityMode?: "remove" | "fade";
	/** When true and some series are hidden, recompute y-domain using only visible series. */
	recomputeYDomainOnHidden?: boolean;
	/** Custom stroke width for all series (passed to LineSeriesPrimitive). */
	strokeWidth?: number;
	/** Enable / disable curve smoothing (monotoneX). Default true. */
	smooth?: boolean;
	/** Light gradient wash under lines (uses series stroke color fading to transparent). Default true. */
	gradientFills?: boolean;
}

// Internal renderer. If used inside a ChartRoot (context) it will use those dimensions; otherwise
// it falls back to creating its own via useChartDimensions (only for legacy direct usage path).
const InternalLineChart: React.FC<
	LineChartProps & {
		providedDims?: ReturnType<typeof useChartDimensions> | null;
	}
> = ({
	series,
	yLabel,
	ariaLabel = "Line chart",
	showPoints = true,
	focusablePoints = true,
	palette = "categorical",
	dateFormatter,
	valueFormatter,
	xTickValues,
	alignXTicksToData = false,
	announceFocus = true,
	showTooltipOverlay = true,
	padXDomain = true,
	wrapAroundNav = false,
	keyboardNav = false,
	visibilityMode = "remove",
	recomputeYDomainOnHidden = false,
	strokeWidth = 1,
	smooth = true,
	gradientFills = true,
	providedDims,
}) => {
	// Prefer explicit prop (legacy), then context (ChartRoot), else create local dimensions (standalone mode)
	const contextDims = useChartContext();
	const dims =
		providedDims ||
		(contextDims as any) ||
		useChartDimensions({ bottom: 48, left: 56, right: 16, top: 12 });
	const scaleCtx = useScaleContext();
	const visibility = useVisibility();
	const visibleSeries = React.useMemo(() => {
		if (!visibility) return series;
		return series.filter((s) => !visibility.isHidden(s.id));
	}, [series, visibility]);
	const allData = React.useMemo(() => {
		if (recomputeYDomainOnHidden && visibility)
			return visibleSeries.flatMap((s) => s.data);
		return series.flatMap((s) => s.data);
	}, [series, visibleSeries, recomputeYDomainOnHidden, visibility]);
	const parseX = React.useCallback(
		(d: LineDatum) => (d.x instanceof Date ? d.x : new Date(d.x)),
		[]
	);
	const xScale = scaleCtx
		? scaleCtx.xScale
		: React.useMemo(() => {
				if (!padXDomain)
					return createXTimeScale(allData, parseX, [0, dims.innerWidth]);
				// Derive padded domain: half typical step either side
				const times = allData
					.map((d) => parseX(d).getTime())
					.sort((a, b) => a - b);
				if (times.length === 0)
					return createXTimeScale(allData, parseX, [0, dims.innerWidth]);
				let step: number;
				if (times.length === 1) {
					step = 24 * 3600 * 1000; // 1 day default
				} else {
					// median of diffs for robustness
					const diffs = [] as number[];
					for (let i = 1; i < times.length; i++)
						diffs.push(times[i] - times[i - 1]);
					diffs.sort((a, b) => a - b);
					step =
						diffs[Math.floor(diffs.length / 2)] ||
						(times[times.length - 1] - times[0]) / (times.length - 1);
				}
				const pad = step / 2;
				const domain: [Date, Date] = [
					new Date(times[0] - pad),
					new Date(times[times.length - 1] + pad),
				];
				return scaleTime().domain(domain).range([0, dims.innerWidth]);
			}, [allData, parseX, dims.innerWidth, padXDomain]);
	const yScale = scaleCtx
		? scaleCtx.yScale
		: React.useMemo(
				() => createYLinearScale(allData, (d) => d.y, [dims.innerHeight, 0]),
				[allData, dims.innerHeight]
			);
	const formatDate =
		dateFormatter ||
		((d: Date) =>
			d.toLocaleDateString(undefined, { month: "short", day: "numeric" }));
	const computedDataTickValues: Date[] = React.useMemo(() => {
		if (xTickValues && xTickValues.length)
			return xTickValues.map((v) => (v instanceof Date ? v : new Date(v)));
		if (!alignXTicksToData) return [];
		const set = new Set<number>();
		for (const d of allData) set.add(parseX(d).getTime());
		return Array.from(set)
			.sort((a, b) => a - b)
			.map((ms) => new Date(ms));
	}, [xTickValues, alignXTicksToData, allData, parseX]);
	const formatValue = valueFormatter || ((v: number) => String(v));
	// Resolve per-series stroke colours once so we can reuse for both stroke and gradient fill
	const resolvedColors = React.useMemo(() =>
		series.map((s, i) =>
			s.color || (palette === "region" ? pickRegionColor(s.id, i) : pickSeriesColor(i))
		),
		[series, palette]
	);
	// Stable, instance-unique base for gradient defs to avoid ID collisions when multiple charts share series IDs on a page/MDX.
	const idBase = React.useId();
	const gradientIds = React.useMemo(
		() => series.map((_, i) => `${idBase}-fdp-line-grad-${i}`),
		[series, idBase]
	);
	const svgContent = (
		<svg width={dims.width} height={dims.height} role="img">
			<g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
				{gradientFills && (
					<defs>
						{series.map((s, i) => {
							const lineColor = resolvedColors[i];
							return (
								<linearGradient
									key={s.id}
									id={gradientIds[i]}
									x1="0%"
									y1="0%"
									x2="0%"
									y2="100%"
								>
									<stop offset="0%" stopColor={lineColor} stopOpacity={0.25} />
									<stop offset="100%" stopColor={lineColor} stopOpacity={0} />
								</linearGradient>
							);
						})}
					</defs>
				)}
				<Axis
					type="x"
					formatTick={formatDate}
					tickValues={
						computedDataTickValues.length ? computedDataTickValues : undefined
					}
				/>
				<Axis type="y" formatTick={formatValue} label={yLabel} />
				<GridLines axis="y" />
				{series.map((s, si) => (
					<LineSeriesPrimitive
						key={s.id}
						series={s as any}
						seriesIndex={si}
						palette={palette}
						showPoints={showPoints}
						focusablePoints={focusablePoints}
						focusIndex={-1} // legacy prop no longer used; tooltip context drives focus
						parseX={parseX}
						visibilityMode={visibilityMode}
						strokeWidth={strokeWidth}
						smooth={smooth}
						gradientFillId={gradientFills ? gradientIds[si] : undefined}
						colors={resolvedColors}
					/>
				))}
				{showTooltipOverlay && <TooltipOverlay />}
			</g>
		</svg>
	);

	const KeyboardNavWrapper: React.FC<{ children: React.ReactNode }> = ({
		children,
	}) => {
		const t = useTooltipContext();
		const onKeyDown = React.useCallback(
			(e: React.KeyboardEvent) => {
				if (!t) return;
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
					case "Escape":
						t.clear();
						e.preventDefault();
						break;
					default:
						break;
				}
			},
			[t]
		);
		return (
			<div
				className="fdp-line-chart"
				role="group"
				aria-label={ariaLabel}
				tabIndex={0}
				onKeyDown={onKeyDown}
			>
				{children}
			</div>
		);
	};

	const body = (
		<TooltipProvider wrapAround={wrapAroundNav}>
			{keyboardNav ? (
				<KeyboardNavWrapper>
					{svgContent}
					{announceFocus && <VisuallyHiddenLiveRegion />}
				</KeyboardNavWrapper>
			) : (
				<div className="fdp-line-chart" role="group" aria-label={ariaLabel}>
					{svgContent}
					{announceFocus && <VisuallyHiddenLiveRegion />}
				</div>
			)}
		</TooltipProvider>
	);
	if (scaleCtx) return body;
	// Provide ad-hoc ScaleContext so Axis/GridLines can function when no external provider.
	const value = {
		xScale,
		yScale,
		getXTicks: (c = 6) => xScale.ticks(c),
		getYTicks: (c = 5) => yScale.ticks(c),
	};
	return <ScaleContext.Provider value={value}>{body}</ScaleContext.Provider>;
};

export const LineChart: React.FC<LineChartProps> = (props) => {
	const ctx = useChartContext();
	const content = <InternalLineChart {...props} providedDims={ctx as any} />;
	if (ctx) {
		// If already inside ChartRoot and no ScaleContext provided higher up, mount a provider here.
		return useScaleContext() ? (
			content
		) : (
			<LineScalesProvider
				series={props.series}
				innerWidth={ctx.innerWidth}
				innerHeight={ctx.innerHeight}
			>
				{content}
			</LineScalesProvider>
		);
	}
	// Standalone: create ChartRoot then provide scales then render internal
	const ariaLabel = (props as any).ariaLabel;
	return (
		<ChartRoot
			height={(props as any).height ?? 240}
			ariaLabel={ariaLabel}
			margin={{ bottom: 48, left: 56, right: 16, top: 12 }}
		>
			{/* No ScaleContext in standalone mode so InternalLineChart builds its own scales with measured dims */}
			<InternalLineChart {...props} />
		</ChartRoot>
	);
};

export default LineChart;
