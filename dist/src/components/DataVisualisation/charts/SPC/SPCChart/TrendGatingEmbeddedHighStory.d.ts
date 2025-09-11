import React from "react";
import { TrendVisualMode } from "./SPCChart";
/**
 * Embedded chart replicating the "Special cause - High is good" dataset story
 * for inclusion in MDX documentation (trend gating rationale).
 * Kept isolated so MDX can import a concrete React component rather than Storybook's <Story /> runtime lookup.
 */
export type TrendGatingEmbeddedHighProps = {
    trendVisualMode?: TrendVisualMode;
};
export declare const TrendGatingEmbeddedHigh: React.FC<TrendGatingEmbeddedHighProps>;
export default TrendGatingEmbeddedHigh;
