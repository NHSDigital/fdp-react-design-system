import * as React from 'react';
/**
 * ARIA live region announcing the currently focused data point for screen reader users.
 * Mount inside TooltipProvider scope (e.g. within LineChart). Hidden visually.
 */
declare const VisuallyHiddenLiveRegion: React.FC<{
    polite?: boolean;
    format?: (d: {
        seriesId: string;
        x: Date | string | number;
        y: number;
        index: number;
    }) => string;
}>;
export default VisuallyHiddenLiveRegion;
