import type { SPCSignalFocusInfo, EngineRowUI } from "./SPCChart.types";
import * as React from "react";
import { useTooltipContext } from "../../../core/TooltipContext";
import { VariationIcon, SpcRawRuleTag } from "./logic/spcConstants";
import {
	extractRuleIds,
	ruleGlossary,
	variationLabel,
	assuranceLabel,
} from "./descriptors";
import { Tag } from "../../../../Tag";

export interface SPCSignalsInspectorProps {
	/** Engine rows from buildSpc; used to read variation/assurance and rule flags */
	engineRows: EngineRowUI[] | null;
	/** Optional measure name/unit for labels */
	measureName?: string;
	measureUnit?: string;
	/** Optional callback fired whenever the focused point changes (via keyboard or nav buttons). */
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
}

/**
 * Minimal, additive Signals Inspector.
 * - Listens to TooltipContext focus and renders details for the focused point.
 * - Shows value, variation classification, assurance, and triggered rules (with narration).
 * - Keyboard arrows via InteractionLayer already drive focus; this panel mirrors that state.
 */
const SPCSignalsInspector: React.FC<SPCSignalsInspectorProps> = ({
	engineRows,
	measureName,
	measureUnit,
	onSignalFocus,
}) => {
	const t = useTooltipContext();
	const focused = t?.focused ?? null;
	const index = focused?.index ?? null;
	const row =
		typeof index === "number" && engineRows ? engineRows[index] : null;

	const rules = React.useMemo(
		() =>
			row
				? extractRuleIds({
						specialCauseSinglePointUp: !!row.rules.singlePoint.up,
						specialCauseSinglePointDown: !!row.rules.singlePoint.down,
						specialCauseTwoOfThreeUp: !!row.rules.twoOfThree.up,
						specialCauseTwoOfThreeDown: !!row.rules.twoOfThree.down,
						specialCauseFourOfFiveUp: !!row.rules.fourOfFive.up,
						specialCauseFourOfFiveDown: !!row.rules.fourOfFive.down,
						specialCauseShiftUp: !!row.rules.shift.up,
						specialCauseShiftDown: !!row.rules.shift.down,
						specialCauseTrendUp: !!row.rules.trend.up,
						specialCauseTrendDown: !!row.rules.trend.down,
				  })
				: [],
		[row]
	);
	const uniqueRuleNarr = React.useMemo(
		() =>
			Array.from(
				new Set(rules.map((r) => ruleGlossary[r]?.narration).filter(Boolean))
			),
		[rules]
	);

	// Derived descriptors (reuse tooltip overlay phrasing & colour classes)
	const variationDesc: string | null = row
		? variationLabel(row.classification?.variation)
		: null;
	const assuranceDesc: string | null = row
		? assuranceLabel(row.classification?.assurance)
		: null;
	const hasRules = rules.length > 0;
	const isNoJudgement = row
		? row.classification?.variation === VariationIcon.Neither && hasRules
		: false;

	// Fire onSignalFocus when the focused point changes (debounced to index change)
	const lastKeyRef = React.useRef<string | null>(null);
	React.useEffect(() => {
		if (!onSignalFocus) return;
		if (!focused || row == null) return;
		const key = `${focused.seriesId}:${focused.index}`;
		if (lastKeyRef.current === key) return;
		lastKeyRef.current = key;
		try {
			onSignalFocus({
				index: focused.index,
				x: focused.x,
				y: focused.y,
				row,
				rules,
			});
		} catch {
			// no-op: avoid throwing from effects
		}
	}, [focused?.seriesId, focused?.index, focused?.x, focused?.y, row, rules, onSignalFocus]);

	return (
		<div
			className="fdp-spc-inspector"
			role="region"
			aria-label="Signals inspector"
			data-testid="spc-signals-inspector"
		>
			<div
				className="fdp-spc-inspector__header"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<strong>Signals inspector</strong>
				<div className="fdp-spc-inspector__nav" aria-hidden={!t}>
					{/* Optional quick nav when tooltip context present */}
					{t && (
						<div style={{ display: "flex", gap: 8 }}>
							<button
								type="button"
								className="fdp-button fdp-button--secondary"
								onClick={() => {
									if (!t.focused) t.focusFirstPoint();
									else t.focusPrevPoint();
								}}
								aria-label="Previous point"
							>
								◀
							</button>
							<button
								type="button"
								className="fdp-button fdp-button--secondary"
								onClick={() => {
									if (!t.focused) t.focusFirstPoint();
									else t.focusNextPoint();
								}}
								aria-label="Next point"
							>
								▶
							</button>
						</div>
					)}
				</div>
			</div>
			{!row || !focused ? (
				<p className="fdp-spc-inspector__empty">No point selected.</p>
			) : (
				<div className="fdp-spc-inspector__body">
					<div
						className="fdp-spc-inspector__summary"
						style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
					>
						<span>
							<strong>Point:</strong> {focused.index + 1}
						</span>
						<span>
							<strong>Value:</strong> {focused.y}
							{measureUnit ? ` ${measureUnit}` : ""}
							{measureName ? ` ${measureName}` : ""}
						</span>
					</div>

					{/* Signals badges mirroring tooltip overlay styling */}
					{(variationDesc || isNoJudgement || assuranceDesc) && (
						<div
							className="fdp-spc-inspector__signals"
							style={{ marginTop: 8 }}
						>
							<div
								style={{
									display: "flex",
									gap: 8,
									flexWrap: "wrap",
									alignItems: "center",
								}}
							>
								{(() => {
									if (variationDesc?.toLowerCase().includes("concern")) {
										return (
											<Tag
												text={variationDesc}
												color="default"
												className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
											/>
										);
									}
									if (variationDesc?.toLowerCase().includes("improvement")) {
										return (
											<Tag
												text={variationDesc}
												color="default"
												className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
											/>
										);
									}
									if (isNoJudgement) {
										return (
											<Tag
												text="No judgement"
												color="default"
												className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement"
												aria-label="Neutral special cause (no directional judgement)"
											/>
										);
									}
									if (variationDesc) {
										return (
											<Tag
												text={variationDesc}
												color="default"
												className="fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
											/>
										);
									}
									return null;
								})()}
								{assuranceDesc &&
									(() => {
										const lower = assuranceDesc.toLowerCase();
										const isFail =
											lower.includes("not met") ||
											lower.includes("not achieved");
										const isPass =
											!isFail && (/(^|\b)(met|achieved)(\b|$)/).test(lower);
										return (
											<Tag
												text={assuranceDesc}
												color="default"
												className={`fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${isPass ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`}
												aria-label={`Assurance: ${assuranceDesc}`}
											/>
										);
									})()}
							</div>
						</div>
					)}

					{/* Special cause rule tags with same colour logic as tooltip (trend stays purple) */}
					<div className="fdp-spc-inspector__rules" style={{ marginTop: 8 }}>
						<strong>Special cause:</strong>
						<div
							className="fdp-spc-tooltip__rule-tags"
							aria-label="Special cause rules"
							style={{
								display: "flex",
								gap: 6,
								flexWrap: "wrap",
								marginTop: 4,
							}}
						>
							{rules.length === 0 ? (
								<span> None</span>
							) : (
								rules.map((r) => {
									const idStr = String(r);
									const isTrend =
										idStr === SpcRawRuleTag.TrendIncreasing ||
										idStr === SpcRawRuleTag.TrendDecreasing;
									const ruleColorClass = isTrend
										? "fdp-spc-tag--trend"
										: isNoJudgement
											? "fdp-spc-tag--no-judgement"
											: variationDesc
												? variationDesc.toLowerCase().includes("concern")
													? "fdp-spc-tag--concern"
													: variationDesc.toLowerCase().includes("improvement")
														? "fdp-spc-tag--improvement"
														: "fdp-spc-tag--common"
												: "fdp-spc-tag--common";
									const label = ruleGlossary[r]?.tooltip || idStr;
									return (
										<Tag
											key={idStr}
											text={label}
											color="default"
											className={`fdp-spc-tooltip__tag fdp-spc-tag ${ruleColorClass}`}
											data-rule-id={idStr}
											title={ruleGlossary[r]?.tooltip}
										/>
									);
								})
							)}
						</div>
					</div>

					{uniqueRuleNarr.length > 0 && (
						<div
							className="fdp-spc-inspector__narration"
							style={{ marginTop: 8 }}
						>
							<strong>Summary:</strong> {uniqueRuleNarr.join("; ")}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default SPCSignalsInspector;
