import * as React from "react";
import clsx from "clsx";
import "../../DataVisualisation.scss";
import "./MetricCard.scss";

export type MetricStatus = "positive" | "negative" | "warning" | "neutral";
export type MetricVariant =
	| "default"
	| "primary"
	| "secondary"
	| "accent"
	| "success"
	| "warning"
	| "error";

export interface MetricDelta {
	/** Numeric change (positive, negative or zero). Sign used if direction not supplied. */
	value: number;
	/** Override auto direction (derived from value sign when omitted). */
	direction?: "up" | "down" | "neutral";
	/** Optional accessible label (e.g. "+12% compared to last week"). Auto‑generated if omitted. */
	ariaLabel?: string;
	/** If true, invert meaning (e.g. lower is better) for auto aria text wording. */
	invert?: boolean;
	/** Treat value as percentage and append % sign in visual text (ariaLabel can still override). */
	isPercent?: boolean;
	/** Additional context text for the delta (e.g. "this month", "this year") */
	period?: string;
}

export interface MetricCardProps {
	/** Primary textual label (short) */
	label: string;
	/** Value to display (string or number). When number, valueFormatter can adjust. */
	value: string | number;
	/** Unit displayed inline after value (e.g. % or ms) */
	unit?: string;
	/** Optional delta / change indicator */
	delta?: MetricDelta;
	/** Visual status accent (maps to border / colour modifiers) */
	status?: MetricStatus;
	/** Visual variant (maps to DataViz color palette) */
	variant?: MetricVariant;
	/** Optional subtitle/description text */
	subtitle?: string;
	/** Optional metadata (e.g. "Latest period: Aug 2025") */
	metadata?: string;
	/** Optional little trend sparkline values (reserved – visualisation to follow) */
	trendData?: number[];
	/** Show skeleton / placeholder instead of value */
	loading?: boolean;
	/** Error message overrides normal value layout */
	error?: string;
	/** Format numeric value (before unit). Default: locale string */
	valueFormatter?: (n: number) => string;
	/** Custom class name */
	className?: string;
	/** Optional inline style applied to the card root (used for dynamic SPC colours) */
	style?: React.CSSProperties;
	/** Stable id (auto generated if omitted) */
	id?: string;
	/** Announce delta changes in live region (polite) */
	announceDelta?: boolean;
		/** Optional visual content (e.g., SPCSpark or other chart). Rendered full width below the textual content. */
		visual?: React.ReactNode;
}

/**
 * MetricCard presents a headline KPI value with optional delta (change) and severity/status accent.
 * Features modern DataViz-inspired styling with left border accents and subtle gradients.
 * Accessibility:
 * - Wrapper uses role="group" with aria-labelledby referencing the label.
 * - Delta includes an aria-label conveying direction & magnitude; a live region announces updates.
 * - Colour alone isn't relied on: arrow + sign (+/−) supplied; neutral shows a dash.
 * Future:
 * - `trendData` will enable a miniature sparkline beneath or beside the value.
 */
export const MetricCard: React.FC<MetricCardProps> = ({
	label,
	value,
	unit,
	delta,
	status = "neutral",
	variant = "default",
	subtitle,
	metadata,
	trendData,
	loading = false,
	error,
	valueFormatter,
	className,
	style,
	id,
	announceDelta = true,
	visual,
}) => {
	const internalId = React.useId();
	const baseId = id || internalId;
	const labelId = `${baseId}-label`;
	const valueId = `${baseId}-value`;
	const deltaId = `${baseId}-delta`;

	const isNumber = typeof value === "number" && !Number.isNaN(value);
	const formattedValue = loading
		? "—"
		: error
			? ""
			: isNumber
				? valueFormatter
					? valueFormatter(value as number)
					: (value as number).toLocaleString()
				: value;

	let deltaDirection: "up" | "down" | "neutral" | undefined;
	let visualDelta = "";
	let deltaAria = "";
	if (delta && !loading && !error) {
		deltaDirection =
			delta.direction ||
			(delta.value > 0 ? "up" : delta.value < 0 ? "down" : "neutral");
		const absVal = Math.abs(delta.value);
		const signedDisplay =
			deltaDirection === "up"
				? `+${absVal}`
				: deltaDirection === "down"
					? `-${absVal}`
					: "0";
		const suffix = delta.isPercent ? "%" : "";
		// Plain representation (no arrow emojis) per design refinement
		visualDelta = `${signedDisplay}${suffix}`;
		if (delta.ariaLabel) {
			deltaAria = delta.ariaLabel;
		} else {
			const better = delta.invert
				? deltaDirection === "down"
				: deltaDirection === "up";
			const dirWord =
				deltaDirection === "neutral"
					? "no change"
					: deltaDirection === "up"
						? "up"
						: "down";
			deltaAria = `${dirWord} ${absVal}${suffix}${deltaDirection === "neutral" ? "" : better ? " (improvement)" : " (worse)"}`;
		}
	}

	return (
		<div
			className={clsx(
				"fdp-metric-card",
				variant && `fdp-metric-card--${variant}`,
				status && `fdp-metric-card--status-${status}`,
				loading && "fdp-metric-card--loading",
				error && "fdp-metric-card--error",
				className
			)}
			style={style}
			role="group"
			aria-labelledby={labelId}
			data-component="MetricCard"
		>
			<div className="fdp-metric-card__inner">
				<div className="fdp-metric-card__header">
					<h3 id={labelId} className="fdp-metric-card__label">
						{label}
					</h3>
					{metadata && (
						<div className="fdp-metric-card__metadata">{metadata}</div>
					)}
				</div>

				<div className="fdp-metric-card__content">
					<div className="fdp-metric-card__value-section">
						<div id={valueId} className="fdp-metric-card__value">
							{loading ? (
								<div className="fdp-metric-card__skeleton" aria-hidden="true">
									<div className="fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value"></div>
								</div>
							) : error ? (
								<div className="fdp-metric-card__error" role="alert">
									{error}
								</div>
							) : (
								<>
									<span className="fdp-metric-card__number">
										{formattedValue}
									</span>
									{unit && (
										<span className="fdp-metric-card__unit">{unit}</span>
									)}
								</>
							)}
						</div>

						{subtitle && !loading && !error && (
							<div className="fdp-metric-card__subtitle">{subtitle}</div>
						)}
					</div>

					{delta && !loading && !error && (
						<div className="fdp-metric-card__delta-section">
							<div
								id={deltaId}
								aria-label={deltaAria}
								className={clsx(
									"fdp-metric-card__delta",
									deltaDirection && `fdp-metric-card__delta--${deltaDirection}`
								)}
							>
								<span className="fdp-metric-card__delta-value">
									{visualDelta}
								</span>
								{delta.period && (
									<span className="fdp-metric-card__delta-period">
										{delta.period}
									</span>
								)}
							</div>
						</div>
					)}

					{trendData && trendData.length > 0 && !loading && !error && (
						<div className="fdp-metric-card__trend" aria-hidden="true">
							{/* Future: mini sparkline visualisation */}
						</div>
					)}
				</div>

						{visual && !error && (
							<div className="fdp-metric-card__visual" aria-hidden="true">
								{visual}
							</div>
						)}

				{announceDelta && delta && !delta.ariaLabel && !loading && !error && (
					<div className="fdp-visually-hidden" aria-live="polite">
						{deltaAria}
					</div>
				)}
			</div>
		</div>
	);
};

export default MetricCard;
