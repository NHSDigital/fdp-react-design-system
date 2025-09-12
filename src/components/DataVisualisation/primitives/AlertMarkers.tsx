import * as React from "react";
import { useChartContext } from "../core/ChartRoot";
import { useScaleContext } from "../core/ScaleContext";
import type { AlertStatus } from "./AlertThreshold";

export interface AlertMarkerPoint {
	x: Date | number | string;
	y?: number; // optional; if omitted, markers rendered near top
	status?: AlertStatus;
	label?: string;
}

export interface AlertMarkersProps {
	points: AlertMarkerPoint[];
	shape?: "triangle" | "diamond" | "dot";
	size?: number; // visual size (radius or half-width). Default 5
}

const statusColor = (s: AlertStatus | undefined): string => {
	switch (s) {
		case "critical":
			return "var(--nhs-fdp-color-critical,#d5281b)";
		case "warning":
			return "var(--nhs-fdp-color-warning,#ff7f0e)";
		case "info":
			return "var(--nhs-fdp-color-info,#1d70b8)";
		case "ok":
			return "var(--nhs-fdp-color-success,#007f3b)";
		default:
			return "var(--nhs-fdp-color-warning,#ff7f0e)";
	}
};

function Triangle({
	cx,
	cy,
	size,
	fill,
}: {
	cx: number;
	cy: number;
	size: number;
	fill: string;
}) {
	const h = size * 1.2;
	const points = `${cx},${cy - h} ${cx - size},${cy + h * 0.6} ${cx + size},${cy + h * 0.6}`;
	return (
		<polygon points={points} fill={fill} stroke="#fff" strokeWidth={0.5} />
	);
}

function Diamond({
	cx,
	cy,
	size,
	fill,
}: {
	cx: number;
	cy: number;
	size: number;
	fill: string;
}) {
	const points = `${cx},${cy - size} ${cx - size},${cy} ${cx},${cy + size} ${cx + size},${cy}`;
	return (
		<polygon points={points} fill={fill} stroke="#fff" strokeWidth={0.5} />
	);
}

/** Paints alert markers at specified points using the current scales. */
export const AlertMarkers: React.FC<AlertMarkersProps> = ({
	points,
	shape = "triangle",
	size = 5,
}) => {
	const chart = useChartContext();
	const scales = useScaleContext();
	if (!chart || !scales || !points.length) return null;
	// Note: innerHeight available on chart, not currently used here
	const mapX = (x: any) => (x instanceof Date ? x : new Date(x));
	return (
		<g className="fdp-annot-markers" aria-hidden>
			{points.map((p, i) => {
				const cx = scales.xScale(mapX(p.x));
				const cy = p.y === undefined ? Math.max(10, 10) : scales.yScale(p.y);
				const fill = statusColor(p.status);
				const key = `am-${i}`;
				if (Number.isNaN(cx) || Number.isNaN(cy)) return null;
				return (
					<g key={key}>
						{shape === "triangle" ? (
							<Triangle cx={cx} cy={cy} size={size} fill={fill} />
						) : shape === "diamond" ? (
							<Diamond cx={cx} cy={cy} size={size} fill={fill} />
						) : (
							<circle
								cx={cx}
								cy={cy}
								r={size}
								fill={fill}
								stroke="#fff"
								strokeWidth={0.5}
							/>
						)}
						{p.label && (
							<text
								x={cx + size + 2}
								y={cy - size - 2}
								fontSize={11}
								fill={fill}
							>
								{p.label}
							</text>
						)}
					</g>
				);
			})}
		</g>
	);
};

export default AlertMarkers;
