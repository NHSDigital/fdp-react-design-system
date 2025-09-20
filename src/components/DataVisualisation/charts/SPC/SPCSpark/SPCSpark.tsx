import React, { useMemo } from "react";
import {
	SPCSparkProps,
	SPCSparkPoint,
	SparkSize,
	ComputedSparkMetrics,
	SparkClassificationInfo,
	SparkRule,
} from "./SPCSpark.types";
import { tokenColour, getGradientOpacities } from "../SPCIcons/tokenUtils";
import { VariationState, MetricPolarity, Direction } from "../SPCIcons/SPCConstants";
import { ImprovementDirection } from "../engine";
import { deriveVariationAriaDescription } from "../SPCIcons/SPCIcon";

const SIZE_PRESETS: Record<
	SparkSize,
	{ height: number; pointR: number; stroke: number }
> = {
	xs: { height: 24, pointR: 2, stroke: 1 },
	sm: { height: 32, pointR: 3, stroke: 1 },
	md: { height: 44, pointR: 4, stroke: 1 },
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

function stateColour(state?: VariationState): string {
	switch (state) {
		case VariationState.SpecialCauseImproving:
			return tokenColour("improvement", "#00B0F0");
		case VariationState.SpecialCauseDeteriorating:
			return tokenColour("concern", "#E46C0A");
		case VariationState.SpecialCauseNoJudgement:
			return tokenColour("no-judgement", "#490092");
		case VariationState.CommonCause:
			return tokenColour("common-cause", "#A6A6A6");
		default:
			return tokenColour("common-cause", "#A6A6A6");
	}
}

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
	autoClassify = false,
	metricImprovement,
	gradientWash = false,
	size = "sm",
	ariaLabel,
	className,
	onPointClick,
	onClassification,
	maxPoints,
	thinningStrategy = "stride",
	colorPointsBySignal = true,
	centerLine,
	controlLimits,
	sigmaBands,
	pointSignals,
	pointNeutralSpecialCause,
}) => {
	// Use engine improvement direction enum directly
	const dirEnum: ImprovementDirection | undefined = metricImprovement;
	// Use full data unless a windowSize is explicitly provided (previously defaulted to 30 which caused limit discrepancies vs full charts)
	const points = useMemo(
		() => computeWindow(data, windowSize),
		[data, windowSize]
	);
	const metrics = useMemo(() => computeMetrics(points), [points]);
	const preset = SIZE_PRESETS[size];
	const width = Math.max(points.length * 6, 60); // simple spacing heuristic (6px per point)
	const height = preset.height;
	const PAD_X = 4;
	const PAD_Y = 2;
	// When a window is applied, points[] is a tail slice of data[]; compute base index to access engine-mapped arrays
	const globalIndexBase = useMemo(() => {
		return (data?.length ?? 0) - (points?.length ?? 0);
	}, [data?.length, points?.length]);
	// Basic statistics for control limits (using full displayed window)
	const numericPoints = points.filter((p) => p.value != null) as Array<
		SPCSparkPoint & { value: number }
	>;
	const values = numericPoints.map((p) => p.value as number);
	// Centre line: prefer engine-provided, else compute from displayed numeric points
	const mean = centerLine ?? metrics.mean;
	// Prefer engine-provided sigma (from sigma bands or control limits). Fallback: XmR moving-range / 1.128
	const engineSigma = useMemo(() => {
		if (mean == null) return null;
		// Try 1σ bands first
		const sigmaCandidates: number[] = [];
		if (sigmaBands?.upperOne != null) sigmaCandidates.push(Math.abs(sigmaBands.upperOne - mean));
		if (sigmaBands?.lowerOne != null) sigmaCandidates.push(Math.abs(mean - sigmaBands.lowerOne));
		if (sigmaCandidates.length) return sigmaCandidates.reduce((a, b) => a + b, 0) / sigmaCandidates.length;
		// Derive from control limits (±3σ)
		const fromLimits: number[] = [];
		if (controlLimits?.upper != null) fromLimits.push(Math.abs(controlLimits.upper - mean) / 3);
		if (controlLimits?.lower != null) fromLimits.push(Math.abs(mean - controlLimits.lower) / 3);
		if (fromLimits.length) return fromLimits.reduce((a, b) => a + b, 0) / fromLimits.length;
		return null;
	}, [sigmaBands?.upperOne, sigmaBands?.lowerOne, controlLimits?.upper, controlLimits?.lower, mean]);

	const fallbackSigma = useMemo(() => {
		// Only compute moving-range sigma if engine didn't provide one
		if (engineSigma != null) return null;
		if (!values.length || mean == null) return null;
		if (values.length < 2) return null;
		const mrs: number[] = [];
		for (let i = 1; i < values.length; i++) {
			const a = values[i - 1];
			const b = values[i];
			if (a != null && b != null) mrs.push(Math.abs(b - a));
		}
		if (!mrs.length) return null;
		const mrBar = mrs.reduce((a, b) => a + b, 0) / mrs.length;
		return mrBar / 1.128; // d2 constant for n=2
	}, [engineSigma, values.join(","), mean]);

	const stdDev = engineSigma ?? fallbackSigma;

	// Prefer engine-provided limits if available; otherwise compute simple ±3σ from mean/stdDev
	const computedLimits = useMemo(() => {
		if (!showLimits) return null;
		// Prefer engine-provided control limits
		if (controlLimits) return controlLimits;
		// Else, derive from available sigma
		if (mean == null || stdDev == null) return null;
		const sigma3 = 3 * stdDev;
		return { lower: mean - sigma3, upper: mean + sigma3 };
	}, [showLimits, mean, stdDev, controlLimits?.lower, controlLimits?.upper]);

	// Simple auto-classification: if last point beyond 3-sigma classify improving/deteriorating relative to mean
	const classification = useMemo(() => {
		if (variationState)
			return {
				state: variationState,
				firedRules: [] as SparkRule[],
				mean: metrics.mean,
				stdDev: stdDev,
			} as SparkClassificationInfo;
		if (
			!autoClassify ||
			!stdDev ||
			stdDev === 0 ||
			mean == null ||
			metrics.latestValue == null
		)
			return {
				state: VariationState.CommonCause,
				firedRules: [],
				mean: metrics.mean,
				stdDev,
			} as SparkClassificationInfo;
		const rules: SparkRule[] = [];
		const latest = metrics.latestValue;
		// Prefer thresholds based on engine limits where available
		const upper3 = controlLimits?.upper ?? (stdDev != null && mean != null ? mean + 3 * stdDev : null);
		const lower3 = controlLimits?.lower ?? (stdDev != null && mean != null ? mean - 3 * stdDev : null);
		if (upper3 != null && lower3 != null) {
			if (latest > upper3 || latest < lower3) {
				rules.push("point-beyond-3sigma");
			}
		}
		const window8 = values.slice(-8);
		if (window8.length === 8) {
			const allAbove = window8.every((v) => v > mean);
			const allBelow = window8.every((v) => v < mean);
			if (allAbove || allBelow) rules.push("eight-point-run");
		}
		const seq5 = values.slice(-5);
		if (seq5.length === 5) {
			const inc = seq5.every((v, i, arr) => i === 0 || v >= arr[i - 1]);
			const dec = seq5.every((v, i, arr) => i === 0 || v <= arr[i - 1]);
			const upper1 = (sigmaBands?.upperOne ?? (stdDev != null && mean != null ? mean + stdDev : null));
			const lower1 = (sigmaBands?.lowerOne ?? (stdDev != null && mean != null ? mean - stdDev : null));
			if (inc && upper1 != null && seq5[seq5.length - 1] > upper1)
				rules.push("five-point-trend");
			if (dec && lower1 != null && seq5[seq5.length - 1] < lower1)
				rules.push("five-point-trend");
		}
		// Two-of-three near limit rule (2 of last 3 beyond 2σ same side, none beyond 3σ already)
		const last3 = values.slice(-3);
		if (last3.length === 3 && (stdDev != null || sigmaBands)) {
			const upper2 = (sigmaBands?.upperTwo ?? (mean != null && stdDev != null ? mean + 2 * stdDev : null));
			const lower2 = (sigmaBands?.lowerTwo ?? (mean != null && stdDev != null ? mean - 2 * stdDev : null));
			if (upper2 != null && lower2 != null) {
				const above2 = last3.filter((v) => v > upper2).length;
				const below2 = last3.filter((v) => v < lower2).length;
				if (above2 >= 2) rules.push("two-of-three-near-limit");
				if (below2 >= 2) rules.push("two-of-three-near-limit");
			}
		}
		let state = VariationState.CommonCause;
		if (rules.includes("point-beyond-3sigma")) {
			state =
				latest > mean
					? VariationState.SpecialCauseImproving
					: VariationState.SpecialCauseDeteriorating;
		} else if (rules.includes("eight-point-run")) {
			const last = values[values.length - 1];
			state =
				last > mean
					? VariationState.SpecialCauseImproving
					: VariationState.SpecialCauseDeteriorating;
		} else if (
			rules.includes("five-point-trend") ||
			rules.includes("two-of-three-near-limit")
		) {
			const last = values[values.length - 1];
			state =
				last > mean
					? VariationState.SpecialCauseImproving
					: VariationState.SpecialCauseDeteriorating;
		}
		// Suppress isolated favourable 3σ point if enabled: single rule fired and prior points mixed
		if (
			autoClassify &&
			!variationState &&
			rules.length === 1 &&
			rules[0] === "point-beyond-3sigma"
		) {
			const prev = values.slice(-9, -1);
			if (prev.length >= 5) {
				const above = prev.filter((v) => v > mean).length;
				const below = prev.filter((v) => v < mean).length;
				if (above > 0 && below > 0) {
					state = VariationState.SpecialCauseNoJudgement;
				}
			}
		}
		return {
			state,
			firedRules: rules,
			mean,
			stdDev,
			side:
				metrics.latestValue != null && mean != null
					? metrics.latestValue > mean
						? "above"
						: "below"
					: undefined,
		} as SparkClassificationInfo;
	}, [
		variationState,
		autoClassify,
		stdDev,
		mean,
		metrics.latestValue,
		values.join(","),
	]);

	// Emit classification changes
	React.useEffect(() => {
		if (autoClassify && !variationState && onClassification) {
			onClassification(classification);
		}
	}, [classification, autoClassify, variationState, onClassification]);

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
				(seq / (renderPoints.length - 1 || 1)) * (width - PAD_X * 2) + PAD_X;
			d += d ? ` L ${x} ${y}` : `M ${x} ${y}`;
		});
		return d;
	}, [renderPoints, width]);

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
					? "improvement"
					: derivedState === VariationState.SpecialCauseDeteriorating
						? "concern"
						: derivedState === VariationState.SpecialCauseNoJudgement
							? "none"
							: "neither",
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
			width={width}
			height={height}
			className={className}
			viewBox={`0 0 ${width} ${height}`}
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
						width={width}
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
							width={width}
							height={Math.abs(
								meanY(limits.upper as number) - meanY(limits.lower as number)
							)}
							fill={color}
							fillOpacity={0.08}
						/>
					)}
					<line
						x1={0}
						x2={width}
						y1={meanY(limits.lower as number)}
						y2={meanY(limits.lower as number)}
						stroke={color}
						strokeDasharray="4,4"
						strokeOpacity={0.3}
						strokeWidth={1}
					/>
					<line
						x1={0}
						x2={width}
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
									x2={width}
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
									x2={width}
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
									x2={width}
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
									x2={width}
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
			{showMean && metrics.mean != null && (
				<line
					x1={0}
					x2={width}
					y1={meanY(metrics.mean)}
					y2={meanY(metrics.mean)}
					stroke={tokenColour("common-cause", "#A6A6A6")}
					strokeWidth={1}
					strokeDasharray="2,2"
				/>
			)}
			<path
				d={pathD}
				fill="none"
				stroke={tokenColour("common-cause", "#A6A6A6")}
				strokeWidth={preset.stroke}
				strokeLinecap="round"
			/>
			{renderIndexes.map((origIdx, seq) => {
				const p = points[origIdx];

				if (!p || p.value == null) return null;

				const y = meanY(p.value as number);
				const x =
					(seq / (renderPoints.length - 1 || 1)) * (width - PAD_X * 2) + PAD_X;
				const isLatest = origIdx === latestIndex;
				const r =
					(isLatest && showLatestMarker ? preset.pointR + 1 : preset.pointR) -
					0.5;
				let fillColour = tokenColour("common-cause", "#A6A6A6");

				if (colorPointsBySignal) {
					// Prefer engine-provided per-point signal map
					const sig = pointSignals?.[globalIndexBase + origIdx];
					// SPCChart parity:
					if (sig === "improvement")
						fillColour = tokenColour("improvement", "#00B0F0");
					else if (sig === "concern")
						fillColour = tokenColour("concern", "#E46C0A");
					else {
						// Neutral signal case – show purple when neutral special cause is present
						const neutralSC = pointNeutralSpecialCause?.[globalIndexBase + origIdx];
						if (neutralSC) {
							fillColour = tokenColour("no-judgement", "#490092");
						} else if (mean != null) {
						// Fallback: local 3σ heuristic
						const v = p.value as number;
						const upper3 = controlLimits?.upper ?? (stdDev != null ? mean + 3 * stdDev : null);
						const lower3 = controlLimits?.lower ?? (stdDev != null ? mean - 3 * stdDev : null);
						if (upper3 != null && v > upper3) {
							fillColour = tokenColour("improvement", "#00B0F0");
							} else if (lower3 != null && v < lower3) {
								fillColour = tokenColour("concern", "#E46C0A");
						}
						else fillColour = tokenColour("common-cause", "#A6A6A6");
						} else {
							fillColour = tokenColour("common-cause", "#A6A6A6");
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
						x={width - 4}
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
