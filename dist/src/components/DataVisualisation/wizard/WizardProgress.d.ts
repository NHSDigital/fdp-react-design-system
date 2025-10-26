import * as React from "react";
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
export declare const WizardProgress: React.FC<WizardProgressProps>;
export default WizardProgress;
