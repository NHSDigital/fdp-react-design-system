import * as React from "react";
import { createLinePath } from "../utils/scales";
import { pickSeriesColor, pickRegionColor } from "../utils/colors";
import { useScaleContext } from "../core/ScaleContext";
import { useVisibility } from "../core/VisibilityContext";
import { useTooltipContext } from "../core/TooltipContext";
import { area as d3Area, curveMonotoneX } from "d3-shape";

export interface AreaDatum {
	x: Date | string | number;
	y: number;
}
export interface AreaSeries {
	id: string;
	data: AreaDatum[];
	color?: string;
	label?: string;
}

export interface AreaSeriesPrimitiveProps {
	series: AreaSeries;
	seriesIndex: number;
	palette: "categorical" | "region";
	focusablePoints?: boolean; // reserved for future parity with line points
	focusIndex?: number; // reserved for future keyboard focus impl
	parseX: (d: AreaDatum) => Date;
	/** If true, draws only the area fill (no outline). Default renders both. */
	areaOnly?: boolean;
	/** Hidden presentation mirrors LineSeriesPrimitive behaviour. */
	visibilityMode?: "remove" | "fade";
	/** Optional baseline (y value) for stacked / diverging future use. Defaults to 0. */
	baselineY?: number;
	/** Enable curve smoothing (monotoneX). Defaults to true. */
	smooth?: boolean;
	/** Optional stacked data providing per-datum y0/y1 (overrides baselineY & raw y). Length must match series.data. */
	stacked?: { y0: number; y1: number }[];
	/** When true, uses a vertical gradient (solid at line, transparent at baseline) instead of flat fill. */
	gradientFill?: boolean;
	/** Optional explicit colour palette overriding default pickSeriesColor / pickRegionColor logic.
	 *  Precedence: series.color > colors[seriesIndex] > internal palette. */
	colors?: string[];
}

/** Renders an area under a line (baseline -> series y). Provides tooltip registration like LineSeriesPrimitive. */
export const AreaSeriesPrimitive: React.FC<AreaSeriesPrimitiveProps> = ({
	series,
	seriesIndex,
	palette,
	parseX,
	areaOnly = false,
	visibilityMode = "remove",
	baselineY = 0,
	smooth = true,
	stacked,
	gradientFill = true,
	colors,
}) => {
	const scaleCtx = useScaleContext();
	if (!scaleCtx) return null;
	const { xScale, yScale } = scaleCtx;
	const visibility = useVisibility();
	const isHidden = visibility?.isHidden(series.id) ?? false;
	const faded = isHidden && visibilityMode === "fade";
	if (isHidden && visibilityMode === "remove") return null;
	const tooltip = useTooltipContext();

	React.useEffect(() => {
		if (!tooltip) return;
		const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
		tooltip.registerSeries(series.id, normalized);
		return () => tooltip.unregisterSeries(series.id);
	}, [tooltip, series.id, series.data, parseX]);

	const paletteOverride = colors && colors[seriesIndex];
	const color =
		series.color ||
		paletteOverride ||
		(palette === "region"
			? pickRegionColor(series.id, seriesIndex)
			: pickSeriesColor(seriesIndex));

	// Build area + optional line with smoothing toggle.
	// For stacked series we want the line to trace the TOP boundary (y1), not the raw datum y.
	const linePath = React.useMemo(() => {
		if (stacked && stacked.length === series.data.length) {
			// createLinePath expects (d: AreaDatum) => number; we derive index via reference equality.
			return createLinePath(
				series.data,
				(d) => xScale(parseX(d)),
				(d) => {
					const idx = series.data.indexOf(d);
					return yScale(stacked[idx].y1);
				},
				{ smooth }
			);
		}
		return createLinePath(
			series.data,
			(d) => xScale(parseX(d)),
			(d) => yScale(d.y),
			{ smooth }
		);
	}, [series.data, stacked, xScale, yScale, parseX, smooth]);
	const areaPath = React.useMemo(() => {
		if (stacked && stacked.length === series.data.length) {
			const gen = d3Area<AreaDatum & { __y0: number; __y1: number }>()
				.x((d) => xScale(parseX(d)))
				.y0((_, i) => yScale(stacked[i].y0))
				.y1((_, i) => yScale(stacked[i].y1));
			if (smooth) gen.curve(curveMonotoneX);
			return gen(series.data as any) || "";
		}
		// Clamp baseline so it never falls below the current y-domain minimum (otherwise the path
		// can extrapolate off the bottom when the domain has a positive lower bound).
		const [domainMin, domainMax] = yScale.domain();
		let effectiveBaseline = baselineY;
		if (effectiveBaseline < domainMin) effectiveBaseline = domainMin;
		else if (effectiveBaseline > domainMax) effectiveBaseline = domainMax; // safety clamp
		const gen = d3Area<AreaDatum>()
			.x((d) => xScale(parseX(d)))
			.y0(() => yScale(effectiveBaseline))
			.y1((d) => yScale(d.y));
		if (smooth) gen.curve(curveMonotoneX);
		return gen(series.data) || "";
	}, [series.data, stacked, xScale, yScale, parseX, baselineY, smooth]);

	const gradientId = React.useId();
	return (
		<g
			className="fdp-area-series"
			data-series={series.id}
			opacity={faded ? 0.25 : 1}
			aria-hidden={faded ? true : undefined}
		>
			{gradientFill && (
				<defs>
					<linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor={color} stopOpacity={0.25} />
						<stop offset="100%" stopColor={color} stopOpacity={0} />
					</linearGradient>
				</defs>
			)}
			<path
				className="fdp-area-series__fill"
				d={areaPath}
				fill={gradientFill ? `url(#${gradientId})` : color}
				{...(gradientFill ? {} : { fillOpacity: 0.25 })}
				stroke="none"
			/>
			{!areaOnly && (
				<path d={linePath} fill="none" stroke={color} strokeWidth={1} />
			)}
		</g>
	);
};

export default AreaSeriesPrimitive;
