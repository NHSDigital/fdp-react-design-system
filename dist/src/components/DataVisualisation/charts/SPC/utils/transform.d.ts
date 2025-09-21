import { ChartType, ImprovementDirection, SpcVisualCategory } from "../engine";
import { SpcSettingsV26a as V2Settings } from "../SPCChart/logic_v2/types";
export declare function visualsToPointSignals(visuals: SpcVisualCategory[] | undefined): ("improvement" | "concern" | "neither" | null)[] | undefined;
export declare function visualsToNeutralFlags(visuals: SpcVisualCategory[] | undefined): boolean[] | undefined;
export declare function toV2Enums(chartType: ChartType, metricImprovement: ImprovementDirection): {
    chartType: ChartType;
    metricImprovement: ImprovementDirection;
};
export declare function toV2Settings(effEngineSettings: Partial<V2Settings> | undefined, rowsInputMaybeAuto: Array<{
    value?: number | null | undefined;
    ghost?: boolean;
}>, visualsEngineSettings?: Partial<V2Settings>): Partial<V2Settings> | undefined;
