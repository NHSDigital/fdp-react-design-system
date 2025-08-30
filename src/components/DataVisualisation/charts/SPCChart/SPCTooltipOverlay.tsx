import * as React from "react";
import { createPortal } from "react-dom";
import { useTooltipContext } from "../../core/TooltipContext";
import { useChartContext } from "../../core/ChartRoot";
// pickSeriesColor intentionally not used in SPC tooltip overlay; keep import commented for future use
// import { pickSeriesColor } from "../../utils/colors";
// AssuranceIcon import removed (utility based)
import {
	extractRuleIds,
	ruleGlossary,
	variationLabel,
	assuranceLabel,
	zoneLabel,
} from "./logic/spcDescriptors";
import { Tag } from "../../../Tag";

interface SPCTooltipOverlayProps {
	engineRows: any[] | null;
	limits: { mean?: number | null; sigma: number };
	/** Optional callback to produce rich aria / tooltip narrative for a point (index, SPCDatum-like) */
	pointDescriber?: (
		index: number,
		d: { x: Date | string | number; y: number }
	) => string | undefined;
	/** Optional measure name for richer value line e.g. "85 % Hand Washing Compliance" */
	measureName?: string;
	/** Optional unit e.g. '%', 'ms' */
	measureUnit?: string;
	/** Optional date formatter (defaults to toDateString) */
	dateFormatter?: (d: Date) => string;
}

/**
 * SPC specific tooltip overlay enriching the basic overlay with:
 *  - Variation / assurance interpretation (improvement vs concern)
 *  - Specific special-cause rule(s) that triggered for the point
 *  - Zone classification relative to mean (inside 1σ, 1–2σ, 2–3σ, >3σ)
 */
const SPCTooltipOverlay: React.FC<SPCTooltipOverlayProps> = ({
	engineRows,
	limits,
	pointDescriber,
	measureName,
	measureUnit,
	dateFormatter,
}) => {
	const tooltip = useTooltipContext();
	const chart = useChartContext();

	// Sticky tooltip behaviour: retain last focused point while user hovers tooltip surface.
	// Hooks must run every render (even when no point focused) to keep order stable.
	const [cachedFocus, setCachedFocus] = React.useState<any | null>(null);
	const [hoveringTooltip, setHoveringTooltip] = React.useState(false);
	const hideTimeoutRef = React.useRef<number | null>(null);

	// When context focus changes to a real point, cache it
	React.useEffect(() => {
		if (!tooltip) return; // no context yet
		if (tooltip.focused) {
			setCachedFocus(tooltip.focused);
			if (hideTimeoutRef.current) {
				cancelAnimationFrame(hideTimeoutRef.current);
				hideTimeoutRef.current = null;
			}
		}
		if (!tooltip.focused && !hoveringTooltip) {
			const id = requestAnimationFrame(() => {
				setCachedFocus(null);
				hideTimeoutRef.current = null;
			});
			hideTimeoutRef.current = id;
		}
		return () => {
			if (hideTimeoutRef.current) {
				cancelAnimationFrame(hideTimeoutRef.current);
				hideTimeoutRef.current = null;
			}
		};
	}, [tooltip, tooltip?.focused, hoveringTooltip]);

	// Determine current focused point (may be null). No early returns until AFTER all hooks declared.
	const focused = tooltip && (tooltip.focused || (hoveringTooltip ? cachedFocus : null) || cachedFocus);

	// Visibility animation hooks MUST run every render to keep ordering stable.
	const [visible, setVisible] = React.useState(false);
	React.useEffect(() => {
		const id = requestAnimationFrame(() => setVisible(true));
		return () => cancelAnimationFrame(id);
	}, [focused?.index]);

	// Safe metrics (fallback to 0 if chart not ready so calculations still defined)
	const innerWidth = chart?.innerWidth ?? 0;
	const innerHeight = chart?.innerHeight ?? 0;
	const clampX = focused ? Math.min(Math.max(focused.clientX, 0), innerWidth) : 0;
	const clampY = focused ? Math.min(Math.max(focused.clientY, 0), innerHeight) : 0;

	// We'll render marker in SVG but move rich text into an absolutely positioned HTML portal so it can overflow chart.
	const containerEl = (chart as any).ref?.current as HTMLElement | undefined; // ChartRoot div (position: relative)
	const host = containerEl; // we rely on ChartRoot's positioned container

	// If no focused point yet, don't attempt to derive tooltip content.
	if (!focused) {
		return null;
	}
	// Single series assumption for SPCChart; index aligns with engineRows order used earlier.
	const row = engineRows?.[focused.index];
	const rules = extractRuleIds(row).map((r) => ruleGlossary[r].tooltip);
	const dateObj = focused.x instanceof Date ? focused.x : new Date(focused.x);
	const dateLabel = dateFormatter ? dateFormatter(dateObj) : dateObj.toDateString();
	const unit = measureUnit ? `${measureUnit}` : "";
	const valueLabel = measureName || unit ? `${focused.y}${unit ? " " + unit : " - "}${measureName ? " " + measureName : ""}` : `${focused.y}`;

	// Variation / assurance descriptors
	const variationDesc: string | null = variationLabel(row?.variationIcon);

	const assuranceDesc: string | null = assuranceLabel(row?.assuranceIcon);

	// Zone classification relative to mean & sigma
	const zone: string | null = zoneLabel(
		limits.mean ?? null,
		limits.sigma,
		focused.y
	);

	// Build structured content blocks for NHS styled tooltip
	const narrative = pointDescriber
		? pointDescriber(focused.index, { x: focused.x, y: focused.y })
		: undefined;
	const showBadges = variationDesc || assuranceDesc || zone;
	const hasRules = rules.length > 0;

	// focus ring colour
	const focusYellow = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
	// Tooltip inner dot colour: use SPC semantic tokens
	// Mapping: improvement -> spc-improvement, concern -> spc-concern, neither -> common-cause, none -> no-judgement
	const spcDotColor = (() => {
		const v = row?.variationIcon;
		switch (v) {
			case "improvement":
				return "var(--nhs-fdp-color-data-viz-spc-improvement, #00b0f0)"; // user-provided #00b0f0
			case "concern":
				return "var(--nhs-fdp-color-data-viz-spc-concern, #e46c0a)"; // user-provided #e46c0a
			case "none":
				return "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)"; // user-provided #490092
			case "neither":
			default:
				return "var(--nhs-fdp-color-data-viz-spc-common-cause, #a6a6a6)"; // user-provided #a6a6a6
		}
	})();

	// lineHeight constant removed (was only used for height calculation)
	// Height no longer needed for positioning (always placed below point)

	// Compute absolute positioning relative to chart container for portal.
	// Determine desired width from content (approximate character width heuristic) within bounds.
	const charPx = 6.2;
	// Estimate width using primary textual lines (narrative / date-value) – badges and list wrap naturally
	const baseLinesForMeasure = [
		narrative || "",
		`${dateLabel} • ${valueLabel}`,
	].filter(Boolean);
	const contentWidthEstimate = baseLinesForMeasure.reduce(
		(m, s) => Math.max(m, s.length * charPx + 32),
		0
	); // padding allowance
	const minWidth = 200;
	const maxWidth = 440;
	const boxWidth = Math.min(maxWidth, Math.max(minWidth, contentWidthEstimate));

	let left = clampX + 12; // initial: to the right of point
	// Account for chart margin.top (group translate) so portal top matches visual point position.
	const marginTop = (chart as any).margin?.top ?? 0;
	// Position tooltip below the point: top edge exactly 10px beneath the data point
	let top = marginTop + clampY + 16;
	// If overflowing right edge, flip to left side of point
	if (left + boxWidth > innerWidth) {
		const flipGap = -60; // smaller gap when flipped to sit closer to point
		left = clampX - flipGap - boxWidth;
	}
	// Final clamp to container bounds
	if (left < 0) left = Math.max(0, innerWidth - boxWidth);

	// Fade-in: mount flag already handled earlier; reuse existing visible state.
	const tooltipId = focused ? `spc-tooltip-${focused.index}` : 'spc-tooltip';
	const portal = host
		? createPortal(
				<div
					id={tooltipId}
					className={
						"fdp-spc-tooltip fdp-spc-tooltip-portal" +
						(visible ? " is-visible" : "")
					}
					style={{
						position: "absolute",
						left,
						top,
						width: boxWidth,
						maxWidth: maxWidth,
						zIndex: 10,
						pointerEvents: "auto",
						userSelect: "none",
					}}
					role="tooltip"
					aria-live="polite"
					aria-hidden={visible ? "false" : "true"}
					data-floating
					data-placement={left + boxWidth + 12 > innerWidth ? "left" : "right"}
					onPointerEnter={() => {
						setHoveringTooltip(true);
						if (hideTimeoutRef.current) {
							cancelAnimationFrame(hideTimeoutRef.current);
							hideTimeoutRef.current = null;
						}
					}}
					onPointerLeave={() => {
						setHoveringTooltip(false);
						// if context no longer focused, clear cached after a short animation frame
						if (!tooltip?.focused) {
							const id = requestAnimationFrame(() => {
								setCachedFocus(null);
								hideTimeoutRef.current = null;
							});
							hideTimeoutRef.current = id;
						}
					}}
				>
					<div className="fdp-spc-tooltip__body">
						<div className="fdp-spc-tooltip__section fdp-spc-tooltip__section--date">
							<div className="fdp-spc-tooltip__primary-line"><strong>Date:</strong> {dateLabel}</div>
					</div>
					<div className="fdp-spc-tooltip__section fdp-spc-tooltip__section--value">
						<div className="fdp-spc-tooltip__primary-line"><strong>Value:</strong> {valueLabel}</div>
					</div>
					{/* {narrative && (
						<div className="fdp-spc-tooltip__section fdp-spc-tooltip__section--narrative">
							<div className="fdp-spc-tooltip__narrative">{narrative}</div>
						</div>
					)} */}
					{showBadges && (
						<div className="fdp-spc-tooltip__section fdp-spc-tooltip__section--signals">
							<div className="fdp-spc-tooltip__badges" aria-label="Signals">
								{variationDesc && (
									variationDesc.toLowerCase().includes("concern") ? (
										<Tag text={variationDesc} color="default" className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern" />
									) : variationDesc.toLowerCase().includes("improvement") ? (
										<Tag text={variationDesc} color="default" className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement" />
									) : (
										<Tag text={variationDesc} color="default" className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common" />
									)
								)}
								{assuranceDesc && (
									<span className={`fdp-spc-badge fdp-spc-badge--assurance ${assuranceDesc.toLowerCase().includes("met") ? "is-pass" : "is-fail"}`}>{assuranceDesc}</span>
								)}
								{zone && (
									<Tag
										text={(() => { const z = zone.toLowerCase(); if (z.startsWith("within 1")) return "≤1σ"; if (z.startsWith("1–2")) return "1–2σ"; if (z.startsWith("2–3")) return "2–3σ"; if (z.startsWith(">3")) return ">3σ"; return zone; })()}
										color={zone.includes(">3") ? "orange" : zone.includes("2–3") ? "yellow" : "grey"}
										aria-label={`Sigma zone: ${zone}`}
										className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
									/>
								)}
							</div>
						</div>
					)}
					{hasRules && (
						<div className="fdp-spc-tooltip__section fdp-spc-tooltip__section--rules">
							<div className="fdp-spc-tooltip__section-label"><strong>Special cause</strong></div>
							<div className="fdp-spc-tooltip__rule-tags" aria-label="Special cause rules">
								{rules.map(r => {
									const ruleColorClass = variationDesc
										? variationDesc.toLowerCase().includes("concern")
											? "fdp-spc-tag--concern"
											: variationDesc.toLowerCase().includes("improvement")
												? "fdp-spc-tag--improvement"
												: "fdp-spc-tag--rule"
										: "fdp-spc-tag--rule";
									return (
										<Tag
											key={r}
											text={r}
											color="default"
											className={`fdp-spc-tooltip__tag fdp-spc-tag ${ruleColorClass}`}
										/>
									);
								})}
							</div>
						</div>
					)}
					</div>
				</div>,
				host
			)
		: null;

	return (
		<g
			className="fdp-tooltip-layer fdp-spc-tooltip"
			pointerEvents="none"
			aria-hidden="true"
		>
			<circle
				cx={clampX}
				cy={clampY}
				r={7}
				fill="none"
				stroke={focusYellow}
				strokeWidth={3}
			/>
			<circle
				cx={clampX}
				cy={clampY}
				r={5}
				fill="#000"
				stroke={focusYellow}
				strokeWidth={1.5}
			/>
			<circle
				cx={clampX}
				cy={clampY}
				r={2.5}
				fill={spcDotColor}
				stroke="#fff"
				strokeWidth={0.5}
			/>
			{portal}
		</g>
	);
};

export default SPCTooltipOverlay;
