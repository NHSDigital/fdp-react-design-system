import * as React from "react";
import { useScaleContext } from "../core/ScaleContext";
import { useVisibility } from "../core/VisibilityContext";
import { useTooltipContext } from "../core/TooltipContext";
import { useChartContext } from "../core/ChartRoot";
import {
	pickSeriesColor,
	pickRegionColor,
	pickSeriesStroke,
	pickRegionStroke,
} from "../utils/colors";

export interface BarDatum {
	x: Date | string | number;
	y: number;
}
export interface BarSeries {
	id: string;
	data: BarDatum[];
	color?: string;
	label?: string;
	barWidth?: number;
}

export interface BarSeriesPrimitiveProps {
	series: BarSeries;
	seriesIndex: number;
	seriesCount: number; // total number of bar series rendered in the group (for width partitioning)
	palette: "categorical" | "region";
	/** Provide parseX so callers can reuse memoised function across series */
	parseX: (d: BarDatum) => Date;
	/** All series in the grouped chart (used for global x step inference on continuous scales to avoid overlap). */
	allSeries?: BarSeries[];
	/** Focusable bars (keyboard tab). For large sets you may disable. */
	focusable?: boolean;
	/** Width fill factor inside inferred step (0..1) */
	widthFactor?: number;
	/** Gap (px) between grouped bars (apportioned inside step) */
	groupGap?: number;
	/** Dynamic gap ratio (gap = barWidth * gapRatio) for grouped bars. Overrides static groupGap when provided. Default 0.15 */
	gapRatio?: number;
	/** Explicit per-bar width override (px). If provided, inference is skipped (continuous scales). For band scales this is clamped to available slot. */
	barWidth?: number;
	/** Adaptive mode: dynamically fill available step width up to an occupancy factor, ignoring widthFactor when continuous. */
	adaptive?: boolean;
	/** Fraction (0-1] of the step (distance to next category midpoint) to occupy as total group width in adaptive mode. Default 0.9 */
	adaptiveGroupOccupancy?: number;
	/** Minimum bar width (px) for continuous scales. If the inferred uniform bar width would be smaller and it is possible to satisfy the constraint within slot bounds, it will be raised to this value. (No effect for band scales or when explicit barWidth provided.) */
	minBarWidth?: number;
	/** Presentation for hidden series (consistency with line). */
	visibilityMode?: "remove" | "fade";
	/** Color assignment mode: by entire series (default) or per category (datum index within a single series). */
	colorMode?: "series" | "category";
	/** Optional stacked data: for a stacked vertical bar each datum gets y0,y1 absolute values (pre-normalised if percent). Mutually exclusive with grouped multi-series at same x (i.e., set seriesCount=1 for stacked multi-layer). */
	stacked?: { y0: number; y1: number }[];
	/** If true, renders stacked segments individually instead of grouping across series. Provided mainly for future extension (multi-encoded). */
	stackedMode?: boolean;
	/** Apply vertical gradient wash (solid at top -> transparent at baseline). Default false. */
	gradientFill?: boolean;
	/** When gradientFill is true, match stroke to primary bar colour. If false, fall back to token/dark stroke. Default true. */
	gradientStrokeMatch?: boolean;
	/** Overall opacity for visible bars (applied to wrapper group). Default 1 (fully opaque). */
	opacity?: number;
	/** Opacity applied when visibilityMode === 'fade'. Default 0.25 (existing visual behaviour). */
	fadedOpacity?: number;
	/** Fill opacity when gradientFill = false (flat colour mode). Default 1 (fully opaque). */
	flatFillOpacity?: number;
	/** Optional explicit colour palette overriding default pickSeriesColor / pickRegionColor logic.
	 *  Precedence: series.color (single override) > colors[index] > internal palette.
	 *  For colorMode = 'series' we use colors[seriesIndex]; for 'category' we use colors[datumIndex]. */
	colors?: string[];
}

/** Low-level primitive for vertical bars (time / ordinal X via ScaleContext time scale). */
export const BarSeriesPrimitive: React.FC<BarSeriesPrimitiveProps> = ({
	series,
	seriesIndex,
	seriesCount,
	palette,
	parseX,
	focusable = true,
	widthFactor = 0.8,
	groupGap = 2,
	barWidth,
	adaptive = false,
	adaptiveGroupOccupancy = 0.9,
	visibilityMode = "remove",
	colorMode = "series",
	allSeries,
	stacked,
	gapRatio = 0.15,
	minBarWidth,
	gradientFill = false,
	gradientStrokeMatch = true,
	opacity = 1,
	fadedOpacity = 0.25,
	flatFillOpacity = 1,
	colors,
}) => {
	const effectiveGapRatio = Math.max(0, gapRatio);
	const scaleCtx = useScaleContext();
	const chartDims = useChartContext();
	if (!scaleCtx || !chartDims) return null;
	const { xScale, yScale } = scaleCtx;
	const visibility = useVisibility();
	const isHidden = visibility?.isHidden(series.id) ?? false;
	const faded = isHidden && visibilityMode === "fade";
	if (isHidden && visibilityMode === "remove") return null;
	const tooltip = useTooltipContext();

	// Register for tooltip nearest lookup (treat bar top as focus coordinate)
	React.useEffect(() => {
		if (!tooltip) return;
		const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
		tooltip.registerSeries(series.id, normalized);
		return () => tooltip.unregisterSeries(series.id);
	}, [tooltip, series.id, series.data, parseX]);

	// Support band scale (categorical) if present, else fall back to pixel inference on continuous scale
	const isBandScale = typeof (xScale as any).bandwidth === "function";
	const bandwidth = isBandScale ? (xScale as any).bandwidth() : undefined;
	const inferredPixelWidth = React.useMemo(() => {
		if (bandwidth != null) return bandwidth; // band scale already encodes step
		// Use global x positions across all series if provided for consistent grouping width
		const sourceSeries = allSeries && allSeries.length ? allSeries : [series];
		const posSet: number[] = [];
		sourceSeries.forEach((s) => {
			s.data.forEach((d) => {
				const v = xScale(parseX(d));
				if (Number.isFinite(v)) posSet.push(v);
			});
		});
		const pxPositions = posSet.sort((a, b) => a - b);
		if (pxPositions.length <= 1) return 40; // fallback width for single bar
		const diffs: number[] = [];
		for (let i = 1; i < pxPositions.length; i++)
			diffs.push(pxPositions[i] - pxPositions[i - 1]);
		diffs.sort((a, b) => a - b);
		const median = diffs[Math.floor(diffs.length / 2)] || 40;
		return median * widthFactor;
	}, [series.data, allSeries, xScale, parseX, widthFactor, bandwidth]);

	// Group width = total width occupied by all bars in a group plus base single bar width candidate
	const { basePerBar } = React.useMemo(() => {
		// Band scale: derived from bandwidth then optional override (clamped)
		if (isBandScale) {
			const bw = inferredPixelWidth; // bandwidth
			const autoPerBar = Math.max(
				1,
				(bw - groupGap * (seriesCount - 1)) / seriesCount
			);
			const explicit = series.barWidth ?? barWidth;
			let finalPerBar = explicit ? Math.min(explicit, bw) : autoPerBar;
			if (adaptive) {
				const targetGroup =
					bw * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
				const adaptedPerBar = Math.max(
					1,
					(targetGroup - groupGap * (seriesCount - 1)) / seriesCount
				);
				finalPerBar = explicit
					? Math.min(finalPerBar, adaptedPerBar)
					: adaptedPerBar;
			}
			return { basePerBar: finalPerBar };
		}
		// Continuous scale: explicit override first
		const explicit = series.barWidth ?? barWidth;
		// Compute base auto width from inferredPixelWidth (median diff * widthFactor already baked into inferredPixelWidth)
		const maxAutoPer = Math.max(
			1,
			(inferredPixelWidth - groupGap * (seriesCount - 1)) / seriesCount
		);
		if (adaptive) {
			// Recompute step using nearest neighbor distance across global positions for tighter occupancy
			const sourceSeries = allSeries && allSeries.length ? allSeries : [series];
			const positions: number[] = [];
			sourceSeries.forEach((s) =>
				s.data.forEach((d) => {
					const v = xScale(parseX(d));
					if (Number.isFinite(v)) positions.push(v);
				})
			);
			positions.sort((a, b) => a - b);
			const diffs: number[] = [];
			for (let i = 1; i < positions.length; i++)
				diffs.push(positions[i] - positions[i - 1]);
			diffs.sort((a, b) => a - b);
			const step = diffs[Math.floor(diffs.length / 2)] || inferredPixelWidth;
			const targetGroup =
				step * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
			const adaptivePer = Math.max(
				1,
				(targetGroup - groupGap * (seriesCount - 1)) / seriesCount
			);
			const finalPer = explicit ? Math.min(explicit, adaptivePer) : adaptivePer;
			return { basePerBar: finalPer };
		}
		if (explicit) {
			const finalPer = Math.min(explicit, maxAutoPer);
			return { basePerBar: finalPer };
		}
		return { basePerBar: maxAutoPer };
	}, [
		isBandScale,
		inferredPixelWidth,
		groupGap,
		seriesCount,
		barWidth,
		series.barWidth,
		adaptive,
		adaptiveGroupOccupancy,
		allSeries,
		xScale,
		parseX,
	]);
	// Precompute global centers for continuous scale once
	const globalCenters = React.useMemo(() => {
		if (isBandScale) return [] as number[];
		const pts: number[] = [];
		const src = allSeries && allSeries.length ? allSeries : [series];
		src.forEach((s) =>
			s.data.forEach((pt) => {
				const v = xScale(parseX(pt));
				if (Number.isFinite(v)) pts.push(v);
			})
		);
		pts.sort((a, b) => a - b);
		return Array.from(new Set(pts));
	}, [isBandScale, allSeries, series, xScale, parseX]);
	// Slot bounds for continuous layout: each data center gets a slot from midpoint(prev, current) to midpoint(current, next);
	// first slot starts at 0, last slot ends at innerWidth -> ensures no overflow beyond plotting area.
	const continuousSlots = React.useMemo(() => {
		if (isBandScale)
			return [] as { center: number; left: number; right: number }[];
		if (!globalCenters.length) return [];
		if (globalCenters.length === 1) {
			return [
				{ center: globalCenters[0], left: 0, right: chartDims.innerWidth },
			];
		}
		const slots: { center: number; left: number; right: number }[] = [];
		for (let i = 0; i < globalCenters.length; i++) {
			const c = globalCenters[i];
			const left = i === 0 ? 0 : (globalCenters[i - 1] + c) / 2;
			const right =
				i === globalCenters.length - 1
					? chartDims.innerWidth
					: (c + globalCenters[i + 1]) / 2;
			slots.push({
				center: c,
				left: Math.max(0, left),
				right: Math.min(chartDims.innerWidth, right),
			});
		}
		return slots;
	}, [isBandScale, globalCenters, chartDims.innerWidth]);

	// Uniform group width across all continuous slots so first/last bars are same width.
	const continuousUniforms = React.useMemo(() => {
		if (isBandScale || !continuousSlots.length)
			return undefined as undefined | { groupWidth: number; barWidth: number };
		const occupancy = Math.min(1, Math.max(0.05, widthFactor));
		const slotSpans = continuousSlots.map((s) => Math.max(2, s.right - s.left));
		// Candidate width per slot capped by slot span minus a pixel padding, scaled by occupancy
		const candidates = slotSpans.map((span) =>
			Math.max(2, Math.min(span - 1, span * occupancy))
		);
		let uniformGroupWidth = Math.min(...candidates);
		// If a minBarWidth is provided we may be able to expand beyond occupancy (without exceeding any slot span - 1)
		if (minBarWidth) {
			if (seriesCount <= 1) {
				const maxFeasible = Math.min(...slotSpans.map((span) => span - 1));
				if (maxFeasible >= minBarWidth && uniformGroupWidth < minBarWidth) {
					uniformGroupWidth = Math.min(maxFeasible, minBarWidth);
				}
			} else {
				const maxFeasibleGroup = Math.min(...slotSpans.map((span) => span - 1));
				const requiredGroupForMin =
					minBarWidth * seriesCount +
					(seriesCount - 1) * (minBarWidth * effectiveGapRatio);
				if (
					requiredGroupForMin <= maxFeasibleGroup &&
					uniformGroupWidth < requiredGroupForMin
				) {
					uniformGroupWidth = requiredGroupForMin;
				}
			}
		}
		if (seriesCount <= 1) {
			// For single-series continuous bars we can attempt to respect minBarWidth directly (bounded by slot constraints)
			if (minBarWidth && uniformGroupWidth < minBarWidth) {
				// Only upgrade if all slots can accommodate minBarWidth (single series so groupWidth == barWidth)
				const canAllFit = slotSpans.every((span) => span >= minBarWidth);
				if (canAllFit)
					return { groupWidth: minBarWidth, barWidth: minBarWidth };
			}
			return { groupWidth: uniformGroupWidth, barWidth: uniformGroupWidth };
		}
		// Solve for barWidth where gap = barWidth * effectiveGapRatio and total group fits uniformGroupWidth
		// uniformGroupWidth = b*seriesCount + (seriesCount-1)*(b*effectiveGapRatio)
		// => b = uniformGroupWidth / (seriesCount + (seriesCount-1)*effectiveGapRatio)
		let b =
			uniformGroupWidth / (seriesCount + (seriesCount - 1) * effectiveGapRatio);
		if (b < 1) b = 1; // clamp minimal visibility
		if (minBarWidth && b < minBarWidth) {
			// Check if raising to minBarWidth still fits inside the smallest slot span
			const requiredGroup =
				minBarWidth * seriesCount +
				(seriesCount - 1) * (minBarWidth * effectiveGapRatio);
			if (requiredGroup <= uniformGroupWidth) {
				b = minBarWidth;
			}
		}
		// Recompute group width using derived b (might be slightly < uniformGroupWidth due to clamping)
		const groupWidth =
			b * seriesCount + (seriesCount - 1) * (b * effectiveGapRatio);
		return { groupWidth, barWidth: b };
	}, [
		isBandScale,
		continuousSlots,
		widthFactor,
		seriesCount,
		effectiveGapRatio,
		minBarWidth,
	]);

	// innerWidth not needed after uniform span logic (bounds derived from midpoints)

	// Resolve colours with explicit precedence hierarchy.
	// series.color always wins for primary (series-level) colour. Otherwise, for series mode use colors[seriesIndex];
	// for category mode each datum will consult colors[di] later.
	const resolvedSeriesPaletteColor =
		colors && colors[seriesIndex] ? colors[seriesIndex] : undefined;
	const baseSeriesColor =
		series.color ||
		resolvedSeriesPaletteColor ||
		(palette === "region"
			? pickRegionColor(series.id, seriesIndex)
			: pickSeriesColor(seriesIndex));
	const baseSeriesStroke =
		palette === "region"
			? pickRegionStroke(series.id, seriesIndex)
			: pickSeriesStroke(seriesIndex);
	// If explicit palette colour used we also adopt it for stroke when gradientStrokeMatch (unless series.color provided which is already in baseSeriesColor)
	const effectiveBaseStroke =
		gradientStrokeMatch && (series.color || resolvedSeriesPaletteColor)
			? baseSeriesColor
			: baseSeriesStroke;
	const baselineY = Number.isFinite(yScale(0)) ? yScale(0) : yScale.range()[0];

	// If stacked provided, render each datum as a single vertical rect spanning y0->y1 (ignore grouping logic beyond width allocation).
	const seriesGradientId = React.useId();
	if (stacked && stacked.length === series.data.length) {
		// For stacked bars we typically have one BarSeriesPrimitive per stacked layer OR a combined single series with stacked segments? Here we assume one primitive per layer (like stacked areas). Width partition among series becomes full slot per layer (overlap) so we treat seriesCount=1 for geometry.
		return (
			<g
				className="fdp-bar-series fdp-bar-series--stacked"
				data-series={series.id}
				opacity={faded ? fadedOpacity : opacity}
				aria-hidden={faded ? true : undefined}
			>
				{gradientFill && (
					<defs>
						{/* Vertical gradient from top-left downward (strong at top, soft toward baseline). */}
						<linearGradient
							id={seriesGradientId}
							x1="0%"
							y1="0%"
							x2="0%"
							y2="100%"
						>
							<stop offset="0%" stopColor={baseSeriesColor} stopOpacity={0.3} />
							<stop
								offset="60%"
								stopColor={baseSeriesColor}
								stopOpacity={0.14}
							/>
							<stop
								offset="100%"
								stopColor={baseSeriesColor}
								stopOpacity={0.06}
							/>
						</linearGradient>
					</defs>
				)}
				{series.data.map((d, di) => {
					const rawX = parseX(d);
					const xPos = isBandScale ? xScale(d.x as any) : xScale(rawX);
					let fullWidth: number;
					let barX: number;
					if (isBandScale) {
						fullWidth = inferredPixelWidth;
						barX = xPos;
					} else {
						const slot = continuousSlots.find(
							(s) => Math.abs(s.center - xPos) < 0.5
						);
						if (!slot || !continuousUniforms) {
							fullWidth = basePerBar;
							barX = xPos - basePerBar / 2;
						} else {
							const { groupWidth } = continuousUniforms;
							fullWidth = groupWidth;
							let groupLeft = xPos - groupWidth / 2;
							// Clamp within slot
							if (groupLeft < slot.left) groupLeft = slot.left;
							if (groupLeft + groupWidth > slot.right)
								groupLeft = Math.max(slot.left, slot.right - groupWidth);
							barX = groupLeft;
						}
					}
					const seg = stacked[di];
					const y0 = yScale(seg.y0);
					const y1 = yScale(seg.y1);
					const y = Math.min(y0, y1);
					const height = Math.abs(y1 - y0) || 1;
					// Fallback enforcement: ensure minBarWidth respected if possible
					if (!isBandScale && minBarWidth && fullWidth < minBarWidth) {
						const slot = continuousSlots.find(
							(s) => Math.abs(s.center - xPos) < 0.5
						);
						if (slot) {
							const maxFeasible = Math.max(2, slot.right - slot.left - 1);
							const target = Math.min(maxFeasible, minBarWidth);
							if (target > fullWidth) {
								fullWidth = target;
								barX = Math.max(
									slot.left,
									Math.min(slot.right - fullWidth, xPos - fullWidth / 2)
								);
							}
						}
					}
					const isFocused =
						!faded &&
						tooltip?.focused?.seriesId === series.id &&
						tooltip.focused.index === di;
					const onEnter = () => {
						if (!tooltip || faded) return;
						// Use top segment value for focus (y1)
						tooltip.setFocused({
							seriesId: series.id,
							index: di,
							x: rawX as any,
							y: seg.y1 - seg.y0,
							clientX: barX + fullWidth / 2,
							clientY: y,
						});
					};
					const onLeave = () => {
						if (
							tooltip?.focused?.seriesId === series.id &&
							tooltip.focused.index === di
						)
							tooltip.clear();
					};
					return (
						<rect
							key={di}
							x={barX}
							y={y}
							width={fullWidth}
							height={height}
							fill={
								gradientFill ? `url(#${seriesGradientId})` : baseSeriesColor
							}
							{...(!gradientFill ? { fillOpacity: flatFillOpacity } : {})}
							// Stroke now driven by CSS variable for non-matched gradient strokes (path 2c). Attribute only overrides for focus highlight or when matching base color.
							stroke={
								isFocused
									? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)"
									: gradientFill && gradientStrokeMatch
										? baseSeriesColor
										: undefined
							}
							strokeWidth={isFocused ? 2 : 1}
							className="fdp-bar fdp-bar--stacked"
							tabIndex={faded || !focusable ? -1 : 0}
							role="graphics-symbol"
							aria-label={`${series.label || series.id} ${rawX instanceof Date ? rawX.toDateString() : rawX} value ${seg.y1 - seg.y0}`}
							onMouseEnter={onEnter}
							onFocus={onEnter}
							onMouseLeave={onLeave}
							onBlur={onLeave}
						/>
					);
				})}
			</g>
		);
	}

	return (
		<g
			className="fdp-bar-series"
			data-series={series.id}
			opacity={faded ? fadedOpacity : opacity}
			aria-hidden={faded ? true : undefined}
		>
			{/* Gradients: one per series in series color mode, or per bar when category mode (unique id based on index) */}
			{gradientFill && (
				<defs>
					{colorMode === "series" && (
						<linearGradient
							id={seriesGradientId}
							x1="0%"
							y1="0%"
							x2="0%"
							y2="100%"
						>
							<stop offset="0%" stopColor={baseSeriesColor} stopOpacity={0.3} />
							<stop
								offset="60%"
								stopColor={baseSeriesColor}
								stopOpacity={0.14}
							/>
							<stop
								offset="100%"
								stopColor={baseSeriesColor}
								stopOpacity={0.06}
							/>
						</linearGradient>
					)}
					{colorMode === "category" &&
						series.data.map((d, di) => {
							const paletteOverride = colors && colors[di];
							const catColor =
								paletteOverride ||
								(palette === "region"
									? pickRegionColor(String(d.x), di)
									: pickSeriesColor(di));
							const gid = `${seriesGradientId}-${di}`;
							return (
								<linearGradient
									key={gid}
									id={gid}
									x1="0%"
									y1="0%"
									x2="0%"
									y2="100%"
								>
									<stop offset="0%" stopColor={catColor} stopOpacity={0.3} />
									<stop offset="60%" stopColor={catColor} stopOpacity={0.14} />
									<stop offset="100%" stopColor={catColor} stopOpacity={0.06} />
								</linearGradient>
							);
						})}
				</defs>
			)}
			{series.data.map((d, di) => {
				const rawX = parseX(d);
				const xPos = isBandScale ? xScale(d.x as any) : xScale(rawX);
				// For band scale we can position directly within the band; else group logic with inferred group width
				let barX: number;
				let barWidth: number;
				if (isBandScale) {
					const bw = inferredPixelWidth; // full categorical slot
					if (seriesCount <= 1) {
						barWidth = bw;
						barX = xPos;
					} else {
						barWidth = Math.max(
							1,
							bw / (seriesCount + (seriesCount - 1) * effectiveGapRatio)
						);
						const gap = barWidth * effectiveGapRatio;
						const groupWidth = barWidth * seriesCount + gap * (seriesCount - 1);
						const groupLeft = xPos + (bw - groupWidth) / 2;
						barX = groupLeft + seriesIndex * (barWidth + gap);
					}
				} else {
					const slot = continuousSlots.find((s) => s.center === xPos);
					if (!slot || !continuousUniforms) {
						barWidth = basePerBar;
						barX = xPos - basePerBar / 2;
						if (minBarWidth && barWidth < minBarWidth) {
							barWidth = minBarWidth;
							barX = xPos - barWidth / 2;
						}
					} else {
						const { barWidth: uBar } = continuousUniforms;
						barWidth = uBar;
						const gap = seriesCount > 1 ? uBar * effectiveGapRatio : 0;
						const computedGroupWidth =
							barWidth * seriesCount + gap * (seriesCount - 1);
						let groupLeft = xPos - computedGroupWidth / 2;
						if (groupLeft < slot.left) groupLeft = slot.left;
						if (groupLeft + computedGroupWidth > slot.right)
							groupLeft = Math.max(slot.left, slot.right - computedGroupWidth);
						barX = groupLeft + seriesIndex * (barWidth + gap);
					}
					// Fallback enforcement for continuous bars
					if (minBarWidth && barWidth < minBarWidth) {
						const slot2 = continuousSlots.find(
							(s) => Math.abs(s.center - xPos) < 0.5
						);
						if (slot2) {
							const maxFeasible = Math.max(2, slot2.right - slot2.left - 1);
							const target = Math.min(maxFeasible, minBarWidth);
							if (target > barWidth) {
								if (seriesCount <= 1) {
									barWidth = target;
									barX = Math.max(
										slot2.left,
										Math.min(slot2.right - barWidth, xPos - barWidth / 2)
									);
								} else {
									const gap = target * effectiveGapRatio;
									const neededGroup =
										target * seriesCount + gap * (seriesCount - 1);
									if (neededGroup <= slot2.right - slot2.left - 1) {
										barWidth = target;
										const groupWidth = neededGroup;
										let groupLeft = xPos - groupWidth / 2;
										if (groupLeft < slot2.left) groupLeft = slot2.left;
										if (groupLeft + groupWidth > slot2.right)
											groupLeft = Math.max(
												slot2.left,
												slot2.right - groupWidth
											);
										barX = groupLeft + seriesIndex * (barWidth + gap);
									}
								}
							}
						}
					}
				}
				const barCenterX = barX + barWidth / 2;
				const valueY = yScale(d.y);
				const y = Math.min(baselineY, valueY);
				const height = Math.abs(baselineY - valueY);
				const isFocused =
					!faded &&
					tooltip?.focused?.seriesId === series.id &&
					tooltip.focused.index === di;
				const onEnter = () => {
					if (!tooltip || faded) return;
					tooltip.setFocused({
						seriesId: series.id,
						index: di,
						x: rawX as any,
						y: d.y,
						clientX: barCenterX,
						clientY: valueY,
					});
				};
				const onLeave = () => {
					if (
						tooltip?.focused?.seriesId === series.id &&
						tooltip.focused.index === di
					)
						tooltip.clear();
				};
				const paletteOverride =
					colorMode === "category" && colors ? colors[di] : undefined;
				const catColor =
					colorMode === "category"
						? paletteOverride ||
							(palette === "region"
								? pickRegionColor(String(d.x), di)
								: pickSeriesColor(di))
						: baseSeriesColor;
				const fillId =
					colorMode === "category"
						? `${seriesGradientId}-${di}`
						: seriesGradientId;
				const baseStroke =
					gradientFill && gradientStrokeMatch
						? catColor
						: colorMode === "category"
							? palette === "region"
								? pickRegionStroke(String(d.x), di)
								: pickSeriesStroke(di)
							: effectiveBaseStroke;
				const barStrokeColor = isFocused
					? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)"
					: baseStroke || catColor;
				return (
					<rect
						key={di}
						x={barX}
						y={y}
						width={barWidth}
						height={height || 1} // ensure minimal visibility for zero-height
						fill={gradientFill ? `url(#${fillId})` : catColor}
						{...(!gradientFill ? { fillOpacity: flatFillOpacity } : {})}
						stroke={barStrokeColor}
						strokeWidth={isFocused ? 2 : 1}
						className="fdp-bar"
						tabIndex={faded || !focusable ? -1 : 0}
						role="graphics-symbol"
						aria-label={`${series.label || series.id} ${rawX instanceof Date ? rawX.toDateString() : rawX} value ${d.y}`}
						onMouseEnter={onEnter}
						onFocus={onEnter}
						onMouseLeave={onLeave}
						onBlur={onLeave}
					/>
				);
			})}
		</g>
	);
};

export default BarSeriesPrimitive;
