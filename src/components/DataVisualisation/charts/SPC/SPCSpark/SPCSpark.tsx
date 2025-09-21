import React, { useMemo } from "react";
import {
	SPCSparkProps,
	SPCSparkPoint,
	SparkSize,
	ComputedSparkMetrics,
} from "./SPCSpark.types";
import { tokenColour, getGradientOpacities, colourForState, colourForSignal, colourCommon } from "../SPCIcons/tokenUtils";
import { VariationState, MetricPolarity, Direction } from "../SPCIcons/SPCConstants";
import { ImprovementDirection, SpcVisualCategory } from "../engine";
import { VariationIcon as UiVariationIcon } from "../SPCChart/types";
import { deriveVariationAriaDescription } from "../SPCIcons/SPCIcon";

const SIZE_PRESETS: Record<
	SparkSize,
	{ height: number; pointR: number; stroke: number }
> = {
	[SparkSize.Xs]: { height: 24, pointR: 2, stroke: 1 },
	[SparkSize.Sm]: { height: 32, pointR: 3, stroke: 1 },
	[SparkSize.Md]: { height: 44, pointR: 4, stroke: 1 },
	[SparkSize.Lg]: { height: 56, pointR: 5, stroke: 1 },
	[SparkSize.Xl]: { height: 72, pointR: 6, stroke: 1 },
	// Full uses Md metrics for points; height adapts via 'height' attribute below
	[SparkSize.Full]: { height: 44, pointR: 4, stroke: 1 },
};

function computeWindow(
	data: SPCSparkPoint[],
	windowSize?: number
): SPCSparkPoint[] {
	if (!windowSize || data.length <= windowSize) return data;
	return data.slice(data.length - windowSize);
}

function computeMetrics(points: SPCSparkPoint[]): ComputedSparkMetrics {
	const numeric = points.filter((p) => typeof p.value === "number") as Array<
		SPCSparkPoint & { value: number }
	>;
	if (!numeric.length)
		return { mean: null, latestValue: null, latestIndex: null };
	const mean =
		numeric.reduce((a, b) => a + (b.value as number), 0) / numeric.length;
	const latestIndex = [...points].reverse().findIndex((p) => p.value != null);
	const absoluteLatestIndex =
		latestIndex >= 0 ? points.length - 1 - latestIndex : null;
	const latestValue =
		absoluteLatestIndex != null
			? (points[absoluteLatestIndex].value as number)
			: null;
	return { mean, latestValue, latestIndex: absoluteLatestIndex };
}

const stateColour = (state?: VariationState): string => colourForState(state);

export const SPCSpark: React.FC<SPCSparkProps> = ({
	data,
	windowSize,
	minPointsForSignals = 13,
	showMean = true,
	showLimits = true,
	showLimitBand = true,
	showInnerBands = false,
	showLatestMarker = true,
	showStateGlyph = true,
	variationState,
	metricImprovement,
	gradientWash = false,
	size = SparkSize.Sm,
	ariaLabel,
	className,
	onPointClick,
	maxPoints,
	thinningStrategy = "stride",
	colorPointsBySignal = true,
	centerLine,
	controlLimits,
	sigmaBands,
	pointSignals,
	pointNeutralSpecialCause,
  visualCategories,
}) => {
	// Use engine improvement direction enum directly
	const dirEnum: ImprovementDirection | undefined = metricImprovement;
	// Use full data unless a windowSize is explicitly provided (previously defaulted to 30 which caused limit discrepancies vs full charts)
	const points = useMemo(
		() => computeWindow(data, windowSize),
		[data, windowSize]
	);
	const metrics = useMemo(() => computeMetrics(points), [points]);
	// Normalise size to enum (accept back-compat string literals)
	const sizeEnum: SparkSize = ((): SparkSize => {
		if (typeof size === "string") {
			switch (size) {
				case "xs": return SparkSize.Xs;
				case "sm": return SparkSize.Sm;
				case "md": return SparkSize.Md;
				case "lg": return SparkSize.Lg;
				case "xl": return SparkSize.Xl;
				case "full": return SparkSize.Full;
				default: return SparkSize.Sm;
			}
		}
		return size ?? SparkSize.Sm;
	})();
	const preset = SIZE_PRESETS[sizeEnum];
	const computedWidth = Math.max(points.length * 6, 60); // simple spacing heuristic (6px per point)
	const canvasWidth = computedWidth; // geometry width in viewBox units
	const widthAttr: number | string = sizeEnum === SparkSize.Full ? "100%" : computedWidth;
	const height = preset.height;
	const PAD_X = 4;
	const PAD_Y = 2;
	// When a window is applied, points[] is a tail slice of data[]; compute base index to access engine-mapped arrays
	const globalIndexBase = useMemo(() => {
		return (data?.length ?? 0) - (points?.length ?? 0);
	}, [data?.length, points?.length]);
	// Basic statistics for control limits (using full displayed window)
	// Centre line: prefer engine-provided, else compute from displayed numeric points
	const mean = centerLine ?? (metrics.mean ?? null);
	// Prefer engine-provided sigma (from sigma bands or control limits). Fallback: XmR moving-range / 1.128
	// In pure mode, do not derive sigma locally
	// Pure renderer: no local sigma derivation

	// Prefer engine-provided limits if available; otherwise compute simple ±3σ from mean/stdDev
	const computedLimits = useMemo(() => {
		if (!showLimits) return null;
		// Prefer engine-provided limits when available
		if (controlLimits) return controlLimits;
		// Fallback: derive a simple band from displayed values around the mean
		const numeric = points.filter((p) => typeof p.value === "number") as Array<SPCSparkPoint & { value: number }>;
		if (!numeric.length || mean == null) return null;
		const vals = numeric.map((p) => p.value as number);
		const min = Math.min(...vals);
		const max = Math.max(...vals);
		return { lower: min, upper: max } as { lower: number; upper: number };
	}, [showLimits, controlLimits?.lower, controlLimits?.upper, points, mean]);

	// Simple auto-classification: if last point beyond 3-sigma classify improving/deteriorating relative to mean
	const classification = useMemo(() => {
		return {
			state: variationState ?? VariationState.CommonCause,
			firedRules: [],
			mean: mean ?? null,
			stdDev: null,
			side:
				metrics.latestValue != null && mean != null
					? metrics.latestValue > mean
						? "above"
						: "below"
					: undefined,
		};
	}, [variationState, mean, metrics.latestValue]);

	// Pure-only: no auto-classification side-effects

	const derivedState = classification.state;

	// Series-level No Judgement is informative, but per-point colouring should follow SPCChart rules:
	// - improvement => blue; concern => orange
	// - neutral special-cause (variation === neither with specialCauseNeitherValue) => purple
	// We do NOT recolour improvement/concern to purple based on series-level NJ.

	const color = stateColour(derivedState);
	const meanY = (v: number) => {
		const numeric = points.filter((p) => p.value != null) as Array<
			SPCSparkPoint & { value: number }
		>;
		if (!numeric.length) return height / 2;
		const vals = numeric.map((p) => p.value as number);
		// Include control limits in domain so lines are always visible
		if (computedLimits) {
			if (computedLimits.lower != null) vals.push(computedLimits.lower);
			if (computedLimits.upper != null) vals.push(computedLimits.upper);
		}
		const min = Math.min(...vals);
		const max = Math.max(...vals);
		if (min === max) return height / 2; // flat / no variation scenario
		return height - ((v - min) / (max - min)) * (height - PAD_Y * 2) - PAD_Y;
	};

	// Decide which indexes to render if thinning enabled
	const renderIndexes = useMemo(() => {
		if (!maxPoints || points.length <= maxPoints)
			return points.map((_, i) => i);
		if (thinningStrategy === "stride") {
			const desired = Math.max(2, maxPoints);
			const step = (points.length - 1) / (desired - 1);
			const keep = new Set<number>();
			for (let j = 0; j < desired; j++) keep.add(Math.round(j * step));
			keep.add(points.length - 1);
			return Array.from(keep).sort((a, b) => a - b);
		}
		// RDP simplification
		interface P {
			i: number;
			v: number | null;
		}
		const src: P[] = points.map((p, i) => ({ i, v: p.value }));
		function perpDist(p: P, a: P, b: P): number {
			const x = p.i,
				y = p.v ?? 0;
			const x1 = a.i,
				y1 = a.v ?? 0,
				x2 = b.i,
				y2 = b.v ?? 0;
			const num = Math.abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1);
			const den = Math.hypot(y2 - y1, x2 - x1);
			return den === 0 ? 0 : num / den;
		}
		function rdp(arr: P[], eps: number): P[] {
			if (arr.length <= 2) return arr;
			let maxD = -1,
				idx = -1;
			for (let i = 1; i < arr.length - 1; i++) {
				const d = perpDist(arr[i], arr[0], arr[arr.length - 1]);
				if (d > maxD) {
					maxD = d;
					idx = i;
				}
			}
			if (maxD > eps) {
				const left = rdp(arr.slice(0, idx + 1), eps);
				const right = rdp(arr.slice(idx), eps);
				return [...left.slice(0, -1), ...right];
			}
			return [arr[0], arr[arr.length - 1]];
		}
		let eps = 0.1;
		let simplified: P[] = src;
		for (let iter = 0; iter < 8; iter++) {
			simplified = rdp(src, eps);
			if (simplified.length <= maxPoints) break;
			eps *= 1.6;
		}
		const keep = new Set<number>(simplified.map((p) => p.i));
		keep.add(0);
		keep.add(points.length - 1);
		return Array.from(keep).sort((a, b) => a - b);
	}, [points, maxPoints, thinningStrategy]);

	const renderPoints = useMemo(
		() => renderIndexes.map((i) => points[i]),
		[renderIndexes, points]
	);

	const pathD = useMemo(() => {
		let d = "";
		renderPoints.forEach((p, seq) => {
			if (p.value == null) return;
			const y = meanY(p.value as number);
			const x =
				(seq / (renderPoints.length - 1 || 1)) * (canvasWidth - PAD_X * 2) + PAD_X;
			d += d ? ` L ${x} ${y}` : `M ${x} ${y}`;
		});
		return d;
	}, [renderPoints, canvasWidth]);

	const latestIndex = metrics.latestIndex ?? -1;

	// limits placeholder (simple min/max padding) until engine integration
	const limits = computedLimits;

	const gradient = getGradientOpacities();
	const gradientId = useMemo(
		() => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
		[points.length, gradientWash]
	);

	const glyphAllowed = points.length >= (minPointsForSignals || 0); // gating by min points
	const autoLabel = ariaLabel || "SPC sparkline";
	// Build minimal variation input for aria narrative (only if we have derivedState)
	const ariaDescription = (() => {
		if (!derivedState) return undefined;
		// Map derivedState + direction into SPCIcon's expectations
		const polarity =
			dirEnum === ImprovementDirection.Up
				? MetricPolarity.HigherIsBetter
				: dirEnum === ImprovementDirection.Down
					? MetricPolarity.LowerIsBetter
					: MetricPolarity.ContextDependent;
		const input = {
			variationIcon:
				derivedState === VariationState.SpecialCauseImproving
					? UiVariationIcon.Improvement
					: derivedState === VariationState.SpecialCauseDeteriorating
						? UiVariationIcon.Concern
						: derivedState === VariationState.SpecialCauseNoJudgement
							? UiVariationIcon.Suppressed
							: UiVariationIcon.Neither,
			trend:
				dirEnum === ImprovementDirection.Up
					? Direction.Higher
					: Direction.Lower,
			polarity,
		} as any;
		try {
			return deriveVariationAriaDescription(input);
		} catch {
			return undefined;
		}
	})();

	// Determine glyph vertical placement to avoid overlap with trailing data cluster
	const glyphY = useMemo(() => {
		if (!glyphAllowed) return 10; // default top
		// Use last 6 numeric points (or fewer if not available)
		const recent = [...points]
			.reverse()
			.filter((p) => p.value != null)
			.slice(0, 6)
			.map((p) => meanY(p.value as number));
		if (!recent.length) return 10;
		const avgY = recent.reduce((a, b) => a + b, 0) / recent.length;
		// If recent data sits in top half (avgY < height/2), move glyph to bottom half; else keep top.
		return avgY < height / 2 ? height : 10; // 8px bottom padding
	}, [points, glyphAllowed, height]);

	return (
		<svg
			role="img"
			aria-label={autoLabel}
			aria-description={ariaDescription}
			width={widthAttr}
			height={height}
			className={className}
			viewBox={`0 0 ${canvasWidth} ${height}`}
		>
			{gradientWash && (
				<>
					<defs>
						<linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="0%"
								stopColor={color}
								stopOpacity={Number(gradient.start)}
							/>
							<stop
								offset="60%"
								stopColor={color}
								stopOpacity={Number(gradient.mid)}
							/>
							<stop
								offset="100%"
								stopColor={color}
								stopOpacity={Number(gradient.end)}
							/>
						</linearGradient>
					</defs>
					<rect
						x={0}
						y={0}
						width={canvasWidth}
						height={height}
						fill={`url(#${gradientId})`}
					/>
				</>
			)}
			{limits && limits.lower != null && limits.upper != null && (
				<>
					{showLimitBand && (
						<rect
							x={0}
							y={Math.min(
								meanY(limits.upper as number),
								meanY(limits.lower as number)
							)}
							width={canvasWidth}
							height={Math.abs(
								meanY(limits.upper as number) - meanY(limits.lower as number)
							)}
							fill={color}
							fillOpacity={0.08}
						/>
					)}
					<line
						x1={0}
						x2={canvasWidth}
						y1={meanY(limits.lower as number)}
						y2={meanY(limits.lower as number)}
						stroke={color}
						strokeDasharray="4,4"
						strokeOpacity={0.3}
						strokeWidth={1}
					/>
					<line
						x1={0}
						x2={canvasWidth}
						y1={meanY(limits.upper as number)}
						y2={meanY(limits.upper as number)}
						stroke={color}
						strokeDasharray="4,4"
						strokeOpacity={0.3}
						strokeWidth={1}
					/>
					{sigmaBands && showInnerBands && (
						<>
							{sigmaBands.lowerTwo != null && (
								<line
									x1={0}
									x2={canvasWidth}
									y1={meanY(sigmaBands.lowerTwo)}
									y2={meanY(sigmaBands.lowerTwo)}
									stroke={color}
									strokeDasharray="3,6"
									strokeOpacity={0.2}
									strokeWidth={1}
								/>
							)}
							{sigmaBands.lowerOne != null && (
								<line
									x1={0}
									x2={canvasWidth}
									y1={meanY(sigmaBands.lowerOne)}
									y2={meanY(sigmaBands.lowerOne)}
									stroke={color}
									strokeDasharray="2,6"
									strokeOpacity={0.2}
									strokeWidth={1}
								/>
							)}
							{sigmaBands.upperOne != null && (
								<line
									x1={0}
									x2={canvasWidth}
									y1={meanY(sigmaBands.upperOne)}
									y2={meanY(sigmaBands.upperOne)}
									stroke={color}
									strokeDasharray="2,6"
									strokeOpacity={0.2}
									strokeWidth={1}
								/>
							)}
							{sigmaBands.upperTwo != null && (
								<line
									x1={0}
									x2={canvasWidth}
									y1={meanY(sigmaBands.upperTwo)}
									y2={meanY(sigmaBands.upperTwo)}
									stroke={color}
									strokeDasharray="3,6"
									strokeOpacity={0.2}
									strokeWidth={1}
								/>
							)}
						</>
					)}
				</>
			)}
						{showMean && mean != null && (
				<line
					x1={0}
								x2={canvasWidth}
								y1={meanY(mean as number)}
								y2={meanY(mean as number)}
					stroke={colourCommon()}
					strokeWidth={1}
					strokeDasharray="2,2"
				/>
			)}
			<path
				d={pathD}
				fill="none"
				stroke={colourCommon()}
				strokeWidth={preset.stroke}
				strokeLinecap="round"
			/>
			{renderIndexes.map((origIdx, seq) => {
				const p = points[origIdx];

				if (!p || p.value == null) return null;

				const y = meanY(p.value as number);
				const x =
					(seq / (renderPoints.length - 1 || 1)) * (canvasWidth - PAD_X * 2) + PAD_X;
				const isLatest = origIdx === latestIndex;
				const r =
					(isLatest && showLatestMarker ? preset.pointR + 1 : preset.pointR) -
					0.5;
				let fillColour = colourCommon();

				if (colorPointsBySignal) {
					// Prefer exact v2 visual categories for parity when provided
					const cat: SpcVisualCategory | undefined = visualCategories?.[globalIndexBase + origIdx];
					if (cat != null) {
						if (cat === SpcVisualCategory.Improvement) fillColour = colourForSignal(UiVariationIcon.Improvement);
						else if (cat === SpcVisualCategory.Concern) fillColour = colourForSignal(UiVariationIcon.Concern);
						else if (cat === SpcVisualCategory.NoJudgement) fillColour = tokenColour("no-judgement", "#490092");
						else fillColour = colourCommon();
					} else {
						// Fallback: per-point signal map with neutral special-cause flag
												const rawSig = pointSignals?.[globalIndexBase + origIdx] as UiVariationIcon | "improvement" | "concern" | "neither" | "suppressed" | null | undefined;
												const sig =
													rawSig === "improvement" ? UiVariationIcon.Improvement :
													rawSig === "concern" ? UiVariationIcon.Concern :
													rawSig === "neither" ? UiVariationIcon.Neither :
													rawSig === "suppressed" ? UiVariationIcon.Suppressed : rawSig;
												if (sig === UiVariationIcon.Improvement) fillColour = colourForSignal(sig);
												else if (sig === UiVariationIcon.Concern) fillColour = colourForSignal(sig);
						else {
							const neutralSC = pointNeutralSpecialCause?.[globalIndexBase + origIdx];
							fillColour = neutralSC
														? tokenColour("no-judgement", "#490092")
														: colourCommon();
						}
					}
				}

				return (
					<circle
						key={origIdx}
						cx={x}
						cy={y}
						r={r}
						fill={fillColour}
						stroke="none"
						strokeWidth={0}
						onClick={onPointClick ? () => onPointClick(origIdx, p) : undefined}
						style={onPointClick ? { cursor: "pointer" } : undefined}
						data-index={origIdx}
						data-signal-colour={colorPointsBySignal ? fillColour : undefined}
					/>
				);
			})}
			{showStateGlyph &&
				glyphAllowed &&
				derivedState &&
				derivedState !== VariationState.CommonCause &&
				dirEnum && (
					<text
						x={canvasWidth - 4}
						y={glyphY}
						textAnchor="end"
						fontSize={12}
						fontWeight="bold"
						fill={color}
						data-glyph-pos={glyphY < height / 2 ? "top" : "bottom"}
					>
						{dirEnum === ImprovementDirection.Up ? "H" : "L"}
					</text>
				)}
		</svg>
	);
};

SPCSpark.displayName = "SPCSpark";
