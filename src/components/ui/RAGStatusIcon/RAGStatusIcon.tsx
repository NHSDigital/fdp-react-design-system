/**
 * RAG Status Icon Component
 * 
 * Displays a Red/Amber/Green status as an SVG circle with a white letter.
 * Designed to match the size of SPC icons for visual consistency.
 */
import React from "react";

export type RAGStatus = "Red" | "Amber" | "Green" | undefined | null;

export interface RAGStatusIconProps {
	/** The RAG status to display */
	status: RAGStatus;
	/** Size in pixels (default: 64 to match SPC icons) */
	size?: number;
	/** Optional className */
	className?: string;
}

const STATUS_COLORS: Record<string, string> = {
	Red: "#d5281b",    // NHS Red
	Amber: "#ffb81c",  // NHS Warm Yellow (Amber)
	Green: "#007f3b",  // NHS Green
};

const STATUS_LETTERS: Record<string, string> = {
	Red: "R",
	Amber: "A",
	Green: "G",
};

export const RAGStatusIcon: React.FC<RAGStatusIconProps> = ({
	status,
	size = 64,
	className,
}) => {
	// If no valid status, show a neutral placeholder
	if (!status || !STATUS_COLORS[status]) {
		return (
			<svg
				width={size}
				height={size}
				viewBox="0 0 64 64"
				className={className}
				aria-label="No status"
				role="img"
			>
				<circle
					cx="32"
					cy="32"
					r="28"
					fill="#aeb7bd"
					stroke="#768692"
					strokeWidth="2"
				/>
				<text
					x="32"
					y="32"
					textAnchor="middle"
					dominantBaseline="central"
					fill="white"
					fontSize="28"
					fontWeight="bold"
					fontFamily="Arial, sans-serif"
				>
					–
				</text>
			</svg>
		);
	}

	const color = STATUS_COLORS[status];
	const letter = STATUS_LETTERS[status];

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 64 64"
			className={className}
			aria-label={`Status: ${status}`}
			role="img"
		>
			<circle
				cx="32"
				cy="32"
				r="28"
				fill={color}
				stroke={color}
				strokeWidth="2"
			/>
			<text
				x="32"
				y="32"
				textAnchor="middle"
				dominantBaseline="central"
				fill="white"
				fontSize="28"
				fontWeight="bold"
				fontFamily="Arial, sans-serif"
			>
				{letter}
			</text>
		</svg>
	);
};

export default RAGStatusIcon;
