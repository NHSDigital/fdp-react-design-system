import * as React from "react";
import { createLinePath } from "../utils/scales";
import { area as d3Area, curveMonotoneX } from "d3-shape";
import {
	pickSeriesColor,
	pickRegionColor,
	pickSeriesStroke,
	pickRegionStroke,
} from "../utils/colors";
import { useScaleContext } from "../core/ScaleContext";
import { useVisibility } from "../core/VisibilityContext";
import { useTooltipContext } from "../core/TooltipContext";

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

export interface LineSeriesPrimitiveProps {
	series: LineSeries;
	seriesIndex: number;
	palette: "categorical" | "region";
	showPoints: boolean;
	focusablePoints: boolean;
	focusIndex: number;
	/** Provide parseX to avoid reallocation across series */
	parseX: (d: LineDatum) => Date;
	/** Presentation for hidden series (inherited via LineChart). */
	visibilityMode?: "remove" | "fade";
	/** Custom stroke width for the series line (defaults to 1). */
	strokeWidth?: number;
	/** Enable curve smoothing (monotoneX). Defaults to true. */
	smooth?: boolean;
	/** Optional gradient fill id (linearGradient) for subtle wash under line. */
	gradientFillId?: string;
	/** Optional explicit colour palette overriding default pickSeriesColor / pickRegionColor logic.
	 *  Precedence: series.color > colors[seriesIndex] > internal palette pickers. */
	colors?: string[];
}

/** Low-level renderer for a single line series (no axes, assumes ScaleContext present). */
export const LineSeriesPrimitive: React.FC<LineSeriesPrimitiveProps> = ({
	series,
	seriesIndex,
	palette,
	showPoints,
	focusablePoints,
	focusIndex,
	parseX,
	visibilityMode = "remove",
	strokeWidth = 1,
	smooth = true,
	gradientFillId,
	colors,
}) => {
	const scaleCtx = useScaleContext();
	if (!scaleCtx) return null; // safeguard
	const { xScale, yScale } = scaleCtx;
	const visibility = useVisibility();
	const isHidden = visibility?.isHidden(series.id) ?? false;
	const faded = isHidden && visibilityMode === "fade";
	if (isHidden && visibilityMode === "remove") {
		return null;
	}
	const tooltip = useTooltipContext();

	// Register series with tooltip context for nearest-point computation
	React.useEffect(() => {
		if (!tooltip) return;
		const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
		tooltip.registerSeries(series.id, normalized);
		return () => tooltip.unregisterSeries(series.id);
	}, [tooltip, series.id, series.data, parseX]);
	const path = React.useMemo(
		() =>
			createLinePath(
				series.data,
				(d) => xScale(parseX(d)),
				(d) => yScale(d.y),
				{ smooth }
			),
		[series.data, xScale, yScale, parseX, smooth]
	);
	// Build an area path from the scale's lower domain bound (visual baseline) up to the series line so the gradient wash fills "down" fully.
	const areaPath = React.useMemo(() => {
		if (!series.data.length) return "";
		const [domainMin] = yScale.domain();
		const gen = d3Area<LineDatum>()
			.x((d) => xScale(parseX(d)))
			.y0(() => yScale(domainMin))
			.y1((d) => yScale(d.y));
		if (smooth) gen.curve(curveMonotoneX);
		return gen(series.data) || "";
	}, [series.data, xScale, yScale, parseX, smooth]);
	const paletteOverride = colors && colors[seriesIndex];
	const color =
		series.color ||
		paletteOverride ||
		(palette === "region"
			? pickRegionColor(series.id, seriesIndex)
			: pickSeriesColor(seriesIndex));
	const stroke =
		palette === "region"
			? pickRegionStroke(series.id, seriesIndex)
			: pickSeriesStroke(seriesIndex);

	return (
		<g
			className="fdp-line-series"
			data-series={series.id}
			opacity={faded ? 0.25 : 1}
			aria-hidden={faded ? true : undefined}
		>
			{gradientFillId && (
				<path
					d={areaPath}
					fill={`url(#${gradientFillId})`}
					stroke="none"
					role="presentation"
					className="fdp-line-series__gradient"
				/>
			)}
			<path
				d={path}
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
				role="presentation"
			/>
			{showPoints &&
				series.data.map((d, di) => {
					const cx = xScale(parseX(d));
					const cy = yScale(d.y);
					const tabIndex = focusablePoints ? 0 : -1;
					const isFocusedPoint =
						!faded &&
						((focusablePoints && di === focusIndex) ||
							(tooltip?.focused?.seriesId === series.id &&
								tooltip.focused.index === di));
					const handleEnter = () => {
						if (tooltip && !faded) {
							tooltip.setFocused({
								seriesId: series.id,
								index: di,
								x: parseX(d),
								y: d.y,
								clientX: cx,
								clientY: cy,
							});
						}
					};
					const handleLeave = () => {
						if (
							tooltip &&
							tooltip.focused?.seriesId === series.id &&
							tooltip.focused.index === di
						)
							tooltip.clear();
					};
					return (
						<circle
							key={di}
							cx={cx}
							cy={cy}
							r={isFocusedPoint ? 5 : 3.5}
							stroke={
								isFocusedPoint
									? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)"
									: stroke
							}
							strokeWidth={isFocusedPoint ? 2 : 1}
							fill={
								isFocusedPoint ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : color
							}
							className="fdp-line-point"
							tabIndex={faded ? -1 : tabIndex}
							aria-label={`${series.label || series.id} ${parseX(d).toDateString()} value ${d.y}`}
							data-series={series.id}
							data-index={di}
							onMouseEnter={handleEnter}
							onFocus={handleEnter}
							onMouseLeave={handleLeave}
							onBlur={handleLeave}
						/>
					);
				})}
		</g>
	);
};

export default LineSeriesPrimitive;
