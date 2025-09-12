import * as React from "react";
import { SummaryList } from "../../../components";
import type { SummaryListItem } from "../../../components/SummaryList";

export interface WizardProgressItem {
	nodeId: string;
	question?: string;
	value: string | string[];
}

export interface WizardProgressProps {
	items: WizardProgressItem[];
	currentQuestion?: string;
	onJumpTo?: (index: number) => void;
}

/**
 * WizardProgress now renders a SummaryList of prior answers (one row per answer)
 * and shows the current step/question. Each row includes a Change link when onJumpTo is provided.
 */
export const WizardProgress: React.FC<WizardProgressProps> = ({
	items,
	currentQuestion,
	onJumpTo,
}) => {
	const listItems: SummaryListItem[] = items.map((a, i) => ({
		key: { text: a.question || a.nodeId },
		value: { text: Array.isArray(a.value) ? a.value.join(", ") : a.value },
		actions: onJumpTo
			? {
				items: [
						{
							href: "#",
							text: "Change",
							visuallyHiddenText: a.question || a.nodeId,
							attributes: {
								onClick: (e: any) => {
									e.preventDefault();
									onJumpTo(i);
								},
							} as any,
						},
					],
				}
			: undefined,
	}));

	return (
		<aside aria-label="Progress" style={{ position: "relative" }}>
			{currentQuestion && (
				<p style={{ marginTop: 0, marginBottom: 12 }}>{currentQuestion}</p>
			)}
			{items.length > 0 && <SummaryList items={listItems} />}
		</aside>
	);
};

export default WizardProgress;
