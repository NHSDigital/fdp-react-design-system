import { AssuranceIcon, ImprovementDirection } from "./spcConstants";
export type ImprovementDir = ImprovementDirection;
export type AssuranceResult = AssuranceIcon;
export declare function computeAssuranceIcon(args: {
    metricImprovement: ImprovementDirection;
    capabilityMode: boolean | undefined;
    value: number | null;
    mean: number | null;
    upperProcessLimit: number | null;
    lowerProcessLimit: number | null;
    target: number | null;
}): AssuranceIcon;
declare const _default: {
    computeAssuranceIcon: typeof computeAssuranceIcon;
};
export default _default;
