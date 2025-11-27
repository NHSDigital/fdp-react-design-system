import type { LogicFile, Wizard, WizardNode, DataVizNode } from "./wizardTypes";
export declare function getWizard(logic: LogicFile, wizardId: string): Wizard;
export declare function getNode(wiz: Wizard, nodeId: string): WizardNode;
export declare const getTypedWizard: typeof getWizard;
export declare const getTypedNode: (wiz: Wizard, nodeId: string) => DataVizNode;
export type StepResult = {
    nextId?: string;
    recommend?: string[];
};
/** Given a yes/no node and an answer string ('yes'|'no'), return the next step */
export declare function evaluateYesNo(node: any, answer: "yes" | "no"): StepResult;
/**
 * Evaluate a choice for a single_choice node; returns the next node id (if any) and any recommendations.
 */
export declare function evaluateSingleChoice(node: any, label: string): StepResult;
/**
 * Evaluate a multi-select choice list; aggregates recommendations and only follows next
 * if all selected choices share the same explicit next id.
 */
export declare function evaluateMultiChoice(node: any, labels: string[]): StepResult;
/** Determine if a choice node allows multiple selections (supports new and legacy shapes). */
export declare function isMultipleChoice(node: any): boolean;
