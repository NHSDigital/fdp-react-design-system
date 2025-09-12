import type { LogicFile, Wizard, WizardNode } from "./wizardTypes";

export function getWizard(logic: LogicFile, wizardId: string): Wizard {
	const wiz = (logic as any).wizards?.[wizardId];
	if (!wiz) throw new Error(`Wizard '${wizardId}' not found`);
	return wiz as Wizard;
}

export function getNode(wiz: Wizard, nodeId: string): WizardNode {
	const node = wiz.nodes?.[nodeId];
	if (!node) throw new Error(`Node '${nodeId}' not found`);
	return node as WizardNode;
}

export type StepResult = { nextId?: string; recommend?: string[] };

/** Given a yes/no node and an answer string ('yes'|'no'), return the next step */
export function evaluateYesNo(node: any, answer: "yes" | "no"): StepResult {
	const branch = answer === "yes" ? node.yes : node.no;
	if (!branch) return {};
	return { nextId: branch.next, recommend: branch.recommend };
}

/**
 * Evaluate a choice for a single_choice node; returns the next node id (if any) and any recommendations.
 */
export function evaluateSingleChoice(node: any, label: string): StepResult {
	const choice = (node.choices || []).find((c: any) => c.label === label);
	if (!choice) return {};
	return { nextId: choice.next, recommend: choice.recommend };
}

/**
 * Evaluate a multi-select choice list; aggregates recommendations and only follows next
 * if all selected choices share the same explicit next id.
 */
export function evaluateMultiChoice(node: any, labels: string[]): StepResult {
	const selected = (node.choices || []).filter((c: any) =>
		labels.includes(c.label)
	);
	if (selected.length === 0) return {};
	const rec: string[] = selected.flatMap(
		(c: any) => (c.recommend as string[] | undefined) || []
	);
	const nextIds = Array.from(
		new Set(selected.map((c: any) => c.next).filter(Boolean))
	);
	const nextId = nextIds.length === 1 ? (nextIds[0] as string) : undefined;
	// de-duplicate recommendations
	const recommend = Array.from(new Set(rec));
	return { nextId, recommend };
}

/** Determine if a choice node allows multiple selections (supports new and legacy shapes). */
export function isMultipleChoice(node: any): boolean {
    if (!node) return false;
    if (node.type === 'choice') return node.mode === 'multiple';
    if (node.type === 'single_choice') return !!node.multiple;
    return false;
}
