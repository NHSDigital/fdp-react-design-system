import type { SPCSignalFocusInfo } from "./SPCChart.types";
import * as React from "react";
export interface SPCSignalsInspectorProps {
    /** Engine rows from buildSpc; used to read variation/assurance and rule flags */
    engineRows: any[] | null;
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
declare const SPCSignalsInspector: React.FC<SPCSignalsInspectorProps>;
export default SPCSignalsInspector;
