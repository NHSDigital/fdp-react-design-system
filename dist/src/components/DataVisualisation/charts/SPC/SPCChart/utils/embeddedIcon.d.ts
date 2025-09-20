import type { EngineRowUI } from "../SPCChart.types";
import { ImprovementDirection } from "../types";
import { SpcEmbeddedIconVariant } from "../SPCChart.constants";
export declare function buildEmbeddedIcon(args: {
    show: boolean;
    rowsForUi: EngineRowUI[] | null;
    minPoints?: number | null;
    metricImprovement: ImprovementDirection;
    variant: SpcEmbeddedIconVariant;
    runLength?: number;
}): import("react/jsx-runtime").JSX.Element | null;
