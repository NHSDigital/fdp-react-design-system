import * as React from 'react';
export interface LegendItem {
    id: string;
    label: string;
    color?: string;
    stroke?: string;
    palette?: 'categorical' | 'region' | 'severity' | 'org-level';
    description?: string;
    /** Optional pattern data URI (e.g. from patternDataUrl). When provided overlays on top of colour for CVD-friendly distinction. */
    patternDataUrl?: string;
}
export interface LegendProps {
    /** Legend items. If omitted and a VisibilityProvider is present, auto inference may be added later. */
    items?: LegendItem[];
    palette?: 'categorical' | 'region' | 'severity' | 'org-level';
    direction?: 'row' | 'column';
    /** Make legend interactive – clicking toggles series visibility */
    interactive?: boolean;
    /** If true (default) adjust a white stroke token to dark on white page backgrounds for visibility */
    adjustStrokeForWhiteBackground?: boolean;
    /** Controlled hidden ids (when supplied component is controlled) */
    hiddenIds?: string[];
    /** Default hidden ids (uncontrolled) */
    defaultHiddenIds?: string[];
    /** Callback whenever visibility changes */
    onVisibilityChange?: (visibleIds: string[], hiddenIds: string[]) => void;
    /** Optional announcement override; return string describing change */
    formatAnnouncement?: (id: string, nowVisible: boolean, label: string) => string;
}
/** Legend with optional interactive show/hide toggling and aria-live announcements */
export declare const Legend: React.FC<LegendProps>;
export default Legend;
