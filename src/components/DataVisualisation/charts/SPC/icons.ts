// SPC Icons-only barrel
// Import just icons, their props, enums and helpers without pulling chart/engine code.

export { SPCVariationIcon } from "./SPCIcons/SPCIcon";
export { SPCAssuranceIcon } from "./SPCIcons/SPCAssuranceIcon";

export type {
	SPCVariationIconProps,
	SpcVariationAltIconProps,
	SpcAssuranceIconProps,
	SpcIconsProps,
	SpcIconBaseProps,
} from "./SPCIcons/SPCIcon";

export {
	AssuranceResult,
	Direction,
	MetricPolarity,
	VariationJudgement,
	VariationState,
	getVariationColour,
	getVariationTrend,
} from "./SPCIcons/SPCConstants";
