import { useId } from "react";
import {
	AssuranceResult,
	DEFAULT_COLOURS,
	DEFAULT_LETTERS,
} from "./SPCConstants";

export interface AssuranceIconProps {
	status: AssuranceResult;
	size?: number; // px
	ariaLabel?: string; // override accessible label
	dropShadow?: boolean;
	/** When true apply a diagonal colour wash instead of solid white interior */
	gradientWash?: boolean;
	colourOverride?: string; // optional single colour override for ring, letter & accent path
	letterOverride?: string; // optional override for displayed letter
	showTrendLines?: boolean; // allow hiding decorative lines if needed
	"data-testid"?: string;
}

export const SPCAssuranceIcon = ({
	status,
	size = 44,
	ariaLabel,
	dropShadow = true,
	colourOverride,
	gradientWash = false,
	letterOverride,
	showTrendLines = true,
	...rest
}: AssuranceIconProps & Record<string, unknown>) => {
	const shadowId = useId();
	const washId = useId();
	const colour = colourOverride || DEFAULT_COLOURS[status];
	const letter = (letterOverride || DEFAULT_LETTERS[status]).slice(0, 2); // safety – limit length
	const aria = ariaLabel || `Assurance ${status}`;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 300 300"
			role="img"
			aria-label={aria}
			{...rest}
		>
			<defs>
				{dropShadow && (
					<filter id={shadowId} filterUnits="objectBoundingBox">
						<feGaussianBlur stdDeviation="3" />
						<feOffset dx="-1" dy="15" result="blur" />
						<feFlood floodColor="rgb(166,166,166)" floodOpacity="1" />
						<feComposite in2="blur" operator="in" result="colorShadow" />
						<feComposite in="SourceGraphic" in2="colorShadow" operator="over" />
					</filter>
				)}
				{gradientWash && (
					<linearGradient id={washId} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor={colour} stopOpacity={0.18} />
						<stop offset="65%" stopColor={colour} stopOpacity={0.06} />
						<stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
					</linearGradient>
				)}
			</defs>
			<circle
				stroke="none"
				fill={gradientWash ? `url(#${washId})` : '#ffffff'}
				{...(dropShadow ? { filter: `url(#${shadowId})` } : {})}
				cx="150"
				cy="150"
				r="120"
			/>
			{/* Letter */}
			<text
				fill={colour}
				fontFamily="Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif"
				fontWeight="bold"
				fontSize={176}
				x={0}
				y={0}
				transform="translate(121.01, 32) scale(0.5, 0.5)"
				textAnchor="middle"
			>
				<tspan x={60} y={184}>
					{letter}
				</tspan>
			</text>
			{showTrendLines && (
				<>
					{/* Coloured baseline / target line (changes geometry if Fail) */}
					{status === AssuranceResult.Fail ? (
						<path
							id="fail-line"
							stroke={colour}
							strokeWidth={9.5}
							strokeMiterlimit={9.5}
							strokeDasharray="35,10"
							strokeDashoffset={0}
							fill="none"
							d="M 33,143 L 268,143"
						/>
					) : status === AssuranceResult.Uncertain ? (
						<path
							id="uncertain-line"
							stroke="rgb(166, 166, 166)"
							strokeWidth={9.5}
							strokeMiterlimit={9.5}
							strokeDasharray="16.5,10"
							strokeDashoffset={0}
							fill="none"
							d="M 36,174 L 266,174"
						/>
					) : (
						<path
							id="pass-line"
							stroke={colour}
							strokeWidth={9.5}
							strokeMiterlimit={9.5}
							strokeDasharray="35,10"
							strokeDashoffset={0}
							fill="none"
							d="M 48,204 L 254,204"
						/>
					)}
					{/* Grey underlying squiggle / sparkline bezier */}
					<path
						id="data-sparkline"
						stroke="rgb(166, 166, 166)"
						strokeWidth={12}
						strokeMiterlimit={12}
						fill="none"
						d="M 59.9,187.91 C 72.79,171.72 87.33,158.06 104.4,157.83 121.91,158.58 140.94,187.85 153.4,189.91 164.1,192.12 163.78,171.38 169.17,170.53 172.87,169.55 174.88,187.45 184.94,189.24 197,191.86 230.54,184.47 239.01,185.9"
					/>
					<circle
						stroke={colour}
						strokeWidth={15}
						strokeMiterlimit={10}
						fill="none"
						cx="150"
						cy="150"
						r="120"
					/>
				</>
			)}
		</svg>
	);
};

SPCAssuranceIcon.displayName = "SPCAssuranceIcon";
