import * as React from "react";
import type { EngineRowUI } from "./SPCChart.types";
interface SPCTooltipOverlayProps {
    engineRows: EngineRowUI[] | null;
    limits: {
        mean?: number | null;
        sigma: number;
    };
    /** Optional callback to produce rich aria / tooltip narrative for a point (index, SPCDatum-like) */
    pointDescriber?: (index: number, d: {
        x: Date | string | number;
        y: number;
    }) => string | undefined;
    /** Optional measure name for richer value line e.g. "85 % Hand Washing Compliance" */
    measureName?: string;
    /** Optional unit e.g. '%', 'ms' */
    measureUnit?: string;
    /** Optional date formatter (defaults to toDateString) */
    dateFormatter?: (d: Date) => string;
    /** Show neutral special-cause (no-judgement) purple styling in tooltip. Defaults to true. */
    enableNeutralNoJudgement?: boolean;
    /** Show trend side-gating explanation text. Defaults to true. */
    showTrendGatingExplanation?: boolean;
}
/**
 * SPC specific tooltip overlay enriching the basic overlay with:
 *  - Variation / assurance interpretation (improvement vs concern)
 *  - Specific special-cause rule(s) that triggered for the point
 *  - Zone classification relative to mean (inside 1σ, 1–2σ, 2–3σ, >3σ)
 */
declare const SPCTooltipOverlay: React.FC<SPCTooltipOverlayProps>;
export default SPCTooltipOverlay;
