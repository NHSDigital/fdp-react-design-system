import * as React from "react";
import { useScaleContext } from "../../core/ScaleContext";
import { useChartContext } from "../../core/ChartRoot";
import type { AxisProps as Props, AxisTickFormatPreset } from "./Axis.types";
import {
	AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
	AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
	AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
	AXIS_ZIGZAG_DEFAULT_CYCLES,
	AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
	AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
} from "./Axis.tokens";

// AxisProps moved to Axis.types.ts (semantic structure with yZeroBreak config)

export const Axis: React.FC<Props> = ({
	type,
	scale,
	tickCount,
	tickValues,
	formatTick: rawFormatTick,
	label,
	offset,
	className,
	minLabelSpacing,
	maxTickLabelLength,
	autoMinLabelSpacing = type === "x" ? true : false,
	labelAngle = 0,
	allowLabelWrap = true,
	tickFormatPreset,
	yZeroBreak,
}) => {
	const scaleCtx = useScaleContext();
	const dims = useChartContext();
	const resolvedScale = scale || (type === "x" ? scaleCtx?.xScale : scaleCtx?.yScale);
	const defaultCount = tickCount ?? (type === "x" ? 6 : 5);
	// Derive formatter from preset if provided and no explicit formatter
	const hasUserFormatter = typeof rawFormatTick === "function";
	const presetFormatter: ((v: any) => string) | undefined =
	React.useMemo(() => {
		if (hasUserFormatter) return undefined;
		if (!tickFormatPreset) return undefined;
		const dtf = (opts: Intl.DateTimeFormatOptions) =>
			new Intl.DateTimeFormat(undefined, opts);
		switch (tickFormatPreset as AxisTickFormatPreset) {
			case "dayShortMonth":
				return (v: any) => {
					const d = v instanceof Date ? v : new Date(v);
					return `${d.getDate()}\n${dtf({ month: "short" }).format(d)}`;
				};
			case "dayShortMonthYear":
				return (v: any) => {
					const d = v instanceof Date ? v : new Date(v);
					return `${d.getDate()}\n${dtf({ month: "short" }).format(d)} ${d.getFullYear()}`;
				};
			case "shortMonth":
				return (v: any) => {
					const d = v instanceof Date ? v : new Date(v);
					return dtf({ month: "short" }).format(d);
				};
			case "shortMonthYear":
				return (v: any) => {
					const d = v instanceof Date ? v : new Date(v);
					return `${dtf({ month: "short" }).format(d)} ${d.getFullYear()}`;
				};
			case "hourMinute":
				return (v: any) => {
					const d = v instanceof Date ? v : new Date(v);
					return dtf({ hour: "2-digit", minute: "2-digit" }).format(d);
				};
			default:
				return undefined;
		}
	}, [hasUserFormatter, tickFormatPreset]);
	let effectiveFormatTick: (v: any) => string = hasUserFormatter
		? (rawFormatTick as (v: any) => string)
		: presetFormatter || ((v: any) => String(v));
	const ticks: any[] = React.useMemo(() => {
		if (tickValues && Array.isArray(tickValues)) return tickValues;
		if (!resolvedScale) return [];
		if (typeof resolvedScale.ticks === "function")
			return resolvedScale.ticks(defaultCount);
		return resolvedScale.domain ? resolvedScale.domain() : [];
	}, [resolvedScale, defaultCount, tickValues]);

	// Auto date formatting heuristic for x-axis when using time scale and no user/preset format provided
	if (
		type === "x" &&
		!hasUserFormatter &&
		!tickFormatPreset &&
		ticks.length &&
		ticks.every((t) => t instanceof Date)
	) {
		const first = ticks[0] as Date;
		const last = ticks[ticks.length - 1] as Date;
		const spanMs = last.getTime() - first.getTime();
		const oneDay = 24 * 3600 * 1000;
		const oneYear = 365 * oneDay;
		const sameYear = first.getFullYear() === last.getFullYear();
		const dtfMonth = new Intl.DateTimeFormat(undefined, { month: "short" });
		if (spanMs < 2 * oneDay) {
			const dtfTime = new Intl.DateTimeFormat(undefined, {
				hour: "2-digit",
				minute: "2-digit",
			});
			effectiveFormatTick = (v: any) => dtfTime.format(v as Date);
		} else if (spanMs < 32 * oneDay) {
			// Show day + short month
			effectiveFormatTick = (v: any) => {
				const d = v as Date;
				return `${d.getDate()} ${dtfMonth.format(d)}`;
			};
		} else if (spanMs < oneYear && sameYear) {
			// Show short month (year implied)
			effectiveFormatTick = (v: any) => dtfMonth.format(v as Date);
		} else if (spanMs < 2 * oneYear) {
			// Show short month + year on first month of each year maybe; keep simple: Mon YYYY
			const seenMonths = new Set<number>();
			effectiveFormatTick = (v: any) => {
				const d = v as Date;
				const key = d.getMonth();
				if (!seenMonths.has(key)) {
					seenMonths.add(key);
				}
				return `${dtfMonth.format(d)} ${d.getFullYear()}`;
			};
		} else {
			// Multi-year span – show year only
			effectiveFormatTick = (v: any) => String((v as Date).getFullYear());
		}
	}

	if (!resolvedScale || !dims) return null;

	if (type === "x") {
		const y = offset ?? dims.innerHeight;
		const isBandScale = typeof (resolvedScale as any).bandwidth === "function";
		const bandwidth = isBandScale ? (resolvedScale as any).bandwidth() : 0;
		const tickPos = (t: any) => {
			const base = resolvedScale(t);
			return isBandScale ? base + bandwidth / 2 : base;
		};
		// Determine min spacing (auto or explicit)
		let resolvedMinSpacing = minLabelSpacing ?? 0;
		if (
			autoMinLabelSpacing &&
			(minLabelSpacing === undefined || minLabelSpacing === null)
		) {
			// Approximate per-label pixel width = avg length * 6 (rough chars * px). Add padding.
			const labels = ticks.map((t) =>
				effectiveFormatTick(t).replace(/\n.*/g, "")
			); // first line only for width
			const avgLen = labels.length
				? labels.reduce((a, b) => a + b.length, 0) / labels.length
				: 0;
			resolvedMinSpacing = Math.max(12, Math.round(avgLen * 6 + 4));
		}
		// Optionally filter ticks to avoid overlap based on pixel distance
		const filteredTicks = React.useMemo(() => {
			// If user supplied explicit tickValues we render them all (no auto thinning) to keep alignment with data points.
			if (tickValues && Array.isArray(tickValues)) return ticks;
			if (resolvedMinSpacing <= 0) return ticks;
			const accepted: any[] = [];
			let lastPos = -Infinity;
			for (const t of ticks) {
				const pos = tickPos(t);
				if (pos - lastPos >= resolvedMinSpacing) {
					accepted.push(t);
					lastPos = pos;
				}
			}
			return accepted;
		}, [
			ticks,
			resolvedScale,
			resolvedMinSpacing,
			tickValues,
			isBandScale,
			bandwidth,
		]);
		return (
			<g
				className={["fdp-axis", "fdp-axis--x", className]
					.filter(Boolean)
					.join(" ")}
				transform={`translate(0,${y})`}
				fontFamily="var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))"
			>
				<line x1={0} x2={dims.innerWidth} y1={0} y2={0} stroke="currentColor" />
				{filteredTicks.map((t, i) => {
					const rawLabel = effectiveFormatTick(t);
					const displayLabel =
						maxTickLabelLength && rawLabel.length > maxTickLabelLength
							? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "…"
							: rawLabel;
					const lines = allowLabelWrap
						? displayLabel.split(/\n/)
						: [displayLabel.replace(/\n/g, " ")];
					const anchor =
						labelAngle < 0 ? "end" : labelAngle > 0 ? "start" : "middle";
					return (
						<g
							key={t?.toString?.() || i}
							transform={`translate(${tickPos(t)},0)`}
						>
							<line y2={6} stroke="currentColor" />
							<text
								y={9}
								textAnchor={anchor}
								className="fdp-axis__tick"
								dominantBaseline="hanging"
								transform={labelAngle ? `rotate(${labelAngle})` : undefined}
								fontFamily="inherit"
							>
								{lines.map((ln, li) => (
									<tspan key={li} x={0} dy={li === 0 ? 0 : "1.1em"}>
										{ln}
									</tspan>
								))}
								{displayLabel !== rawLabel && <title>{rawLabel}</title>}
							</text>
						</g>
					);
				})}
			</g>
		);
	}

	return (
		<g
			className={["fdp-axis", "fdp-axis--y", className]
				.filter(Boolean)
				.join(" ")}
			fontFamily="var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))"
		>
			{/* Y-axis baseline line. With a break, leave a visual gap ABOVE the zero/x-axis line (scale unchanged). */}
			{(() => {
				const showZeroAxisBreak = !!yZeroBreak?.enabled;
				const gapPx = Math.max(AXIS_Y_ZERO_BREAK_MIN_GAP_PX, yZeroBreak?.gapPx ?? AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX);
				if (!showZeroAxisBreak) {
					return <line x1={0} x2={0} y1={0} y2={dims.innerHeight} stroke="currentColor" />;
				}
				const topSolidEnd = Math.max(0, dims.innerHeight - gapPx);
				return <line x1={0} x2={0} y1={0} y2={topSolidEnd} stroke="currentColor" />;
			})()}
			{ticks.map((t, i) => {
				const rawLabel = effectiveFormatTick(t);
				const displayLabel =
					maxTickLabelLength && rawLabel.length > maxTickLabelLength
						? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "…"
						: rawLabel;
				const lines = allowLabelWrap
					? displayLabel.split(/\n/)
					: [displayLabel.replace(/\n/g, " ")];
				// Skip ticks that would render inside the visual break gap
				const showZeroAxisBreak = !!yZeroBreak?.enabled;
				if (showZeroAxisBreak) {
					const gapPx = Math.max(AXIS_Y_ZERO_BREAK_MIN_GAP_PX, yZeroBreak?.gapPx ?? AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX);
					const topSolidEnd = Math.max(0, dims.innerHeight - gapPx);
					const yPx = resolvedScale(t);
					if (yPx > topSolidEnd - 1) return null;
				}
				return (
					<g
						key={t?.toString?.() || i}
						transform={`translate(0,${resolvedScale(t)})`}
					>
						<line x2={-6} stroke="currentColor" />
						<text
							x={-9}
							dy="0.32em"
							textAnchor="end"
							className="fdp-axis__tick"
							fontFamily="inherit"
						>
							{lines.map((ln, li) => (
								<tspan key={li} x={-9} dy={li === 0 ? 0 : "1.1em"}>
									{ln}
								</tspan>
							))}
							{displayLabel !== rawLabel && <title>{rawLabel}</title>}
						</text>
					</g>
				);
			})}
			{!!yZeroBreak?.enabled && (() => {
				// Visual break entirely inside the plotting area (above the x-axis). Scale and ticks unchanged.
				const gapPx = Math.max(AXIS_Y_ZERO_BREAK_MIN_GAP_PX, yZeroBreak?.gapPx ?? AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX);
				// Define the vertical space available for the break indicator
				const bottom = dims.innerHeight;
				const top = 0;
				const topSolidEnd = Math.max(top, bottom - gapPx);
				// Centered-only behaviour: slot spans entire gap
				const slotTop = topSolidEnd;
				const slotBottom = bottom;
				const slotHeight = Math.max(4, slotBottom - slotTop);
				// Determine zig-zag geometry from props (fixed, do not auto-expand to fill)
				const defaultAmp = AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX;
				const defaultCycles = AXIS_ZIGZAG_DEFAULT_CYCLES;
				const amp = Math.max(1, Math.round(yZeroBreak?.zigZag?.amplitudePx ?? defaultAmp));
				const stepX = Math.max(1, Math.round(yZeroBreak?.zigZag?.stepXPx ?? AXIS_ZIGZAG_DEFAULT_STEP_X_PX));
				const desired = yZeroBreak?.zigZag?.heightPx ?? AXIS_ZIGZAG_DEFAULT_HEIGHT_PX;
				const heightDesired = Math.max(4, Math.round(desired ?? 0));
				let cycles: number;
				let zigLen: number;
				if (yZeroBreak?.zigZag?.heightPx && yZeroBreak.zigZag.heightPx > 0) {
					// Use desired height; compute cycles from height and amplitude
					const maxHeight = Math.max(4, Math.min(slotHeight - 2, heightDesired));
					cycles = Math.max(1, Math.floor(maxHeight / (2 * amp)));
					zigLen = Math.max(0, Math.min(maxHeight, cycles * 2 * amp));
				} else if (typeof yZeroBreak?.zigZag?.cycles === "number" && (yZeroBreak?.zigZag?.cycles as number) > 0) {
					cycles = Math.max(1, Math.round(yZeroBreak.zigZag!.cycles as number));
					zigLen = cycles * 2 * amp;
					// Ensure it doesn't exceed the available slot
					zigLen = Math.min(zigLen, slotHeight - 2);
					cycles = Math.max(1, Math.floor(zigLen / (2 * amp)));
				} else {
					// Defaults
					cycles = defaultCycles;
					zigLen = Math.min(slotHeight - 2, cycles * 2 * amp);
					cycles = Math.max(1, Math.floor(zigLen / (2 * amp)));
				}
				// Always center within slot
				const zigStart = slotTop + (slotHeight - zigLen) / 2;
				const zigEnd = zigStart + zigLen;
				// Build path starting halfway through a wave cycle (rightwards first): half-segment, then full pairs, then half-segment (mirrored)
				let d = `M0,0`;
				const pairCount = zigLen > 0 ? Math.max(0, Math.floor((zigLen - amp) / (2 * amp))) : 0;
				const halfDy = Math.max(0, (zigLen - pairCount * 2 * amp) / 2);
				const halfDx = amp > 0 ? (stepX * (halfDy / amp)) : 0;
				// Top half (right)
				if (halfDy > 0) {
					d += ` l${halfDx},${halfDy}`;
				}
				// Full pairs (left then right)
				for (let i = 0; i < pairCount; i++) {
					d += ` l-${stepX},${amp} l${stepX},${amp}`;
				}
				// Bottom half (left)
				if (halfDy > 0) {
					d += ` l-${halfDx},${halfDy}`;
				}
				return (
					<g>
						{/* Upper dotted guide from end of solid baseline down to zig-zag start */}
						<line x1={0} x2={0} y1={topSolidEnd} y2={zigStart} stroke="currentColor" />
						{/* Centered (or top-padded) zig-zag */}
						<g transform={`translate(0,${zigStart})`} aria-hidden="true">
							<path d={d} stroke="currentColor" fill="none" />
						</g>
						{/* Lower dotted guide from zig-zag end down to the x-axis line (0) */}
						<line x1={0} x2={0} y1={zigEnd} y2={bottom} stroke="currentColor" />
						{/* Zero label aligned with the x-axis line */}
						<g transform={`translate(0,${bottom})`}>
							<text x={-9} dy="0.32em" textAnchor="end" className="fdp-axis__tick" fontFamily="inherit">0</text>
						</g>
					</g>
				);
			})()}
			{label && (
				<text
					transform="rotate(-90)"
					x={-dims.innerHeight / 2}
					y={-dims.margin.left + 12}
					textAnchor="middle"
					className="fdp-axis__label"
					fontFamily="inherit"
				>
					{label}
				</text>
			)}
		</g>
	);
};

export default Axis;
