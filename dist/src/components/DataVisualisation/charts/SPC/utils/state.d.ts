import { VariationState } from "../SPCIcons/SPCConstants";
import { VariationIcon } from "../engine";
/** Map engine VariationIcon to VariationState used by icons and narration */
export declare function mapIconToVariation(icon?: VariationIcon | null): VariationState | null;
/** Whether a VariationIcon represents a special-cause data point */
export declare function isSpecialCauseIcon(icon?: VariationIcon | null): boolean;
