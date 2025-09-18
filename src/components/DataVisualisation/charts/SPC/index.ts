// Barrel exports for SPC (Statistical Process Control) related components & types
// Provides a stable import surface: `import { SPCChart, SPCVariationIcon, SPCAssuranceIcon, buildSpc } from '.../DataVisualisation/charts/SPC';`

export { default as SPCChart } from './SPCChart/SPCChart';
export type { SPCChartProps, SPCDatum } from './SPCChart/SPCChart.props';

// Engine logic & enums
export { buildSpc, normaliseSpcSettings } from './SPCChart/logic/spc';
export { ImprovementDirection, VariationIcon, AssuranceIcon, ChartType, BaselineSuggestionReason, RULE_METADATA } from './SPCChart/types';
export { SpcWarningSeverity, SpcWarningCategory, SpcWarningCode } from './SPCChart/logic/spc';
export type { SpcSettings, SpcSettingsV2, SpcResult, SpcWarning } from './SPCChart/logic/spc';

// v2 engine (logic_v2): public exports
export { buildSpcV26a, buildSpcV26aWithVisuals, normaliseSpcSettingsV2, SpcVisualCategory } from './SPCChart/logic_v2';
export { withParityV26, PARITY_V26 } from './SPCChart/logic_v2';
export { computeSpcVisualCategories } from './SPCChart/logic_v2';
export type {
	SpcInputRowV2,
	SpcSettingsV26a as SpcSettingsV26a_V2,
	SpcSettingsHierarchical as SpcSettingsHierarchical_V2,
	SpcSettingsInput as SpcSettingsInput_V2,
	SpcResultV2,
	SpcRowV2,
} from './SPCChart/logic_v2';

// Descriptors & helpers (colour tokens, labels)
export { variationLabel, extractRuleIds, ruleGlossary, VARIATION_COLOR_TOKENS, getVariationColorHex, getVariationColorToken } from './SPCChart/descriptors';

// Icon system
export { SPCVariationIcon } from './SPCIcons/SPCIcon';
export { SPCAssuranceIcon } from './SPCIcons/SPCAssuranceIcon';
export { AssuranceResult, Direction, MetricPolarity, VariationJudgement, VariationState, getVariationColour, getVariationTrend } from './SPCIcons/SPCConstants';
export type { VariationColourDef } from './SPCIcons/SPCConstants';
export type { SPCVariationIconProps, SpcVariationAltIconProps, SpcAssuranceIconProps, SpcIconsProps, SpcIconBaseProps } from './SPCIcons/SPCIcon';

// Tooltip overlay (specialised)
export { default as SPCTooltipOverlay } from './SPCChart/SPCTooltipOverlay';
export { SpcEmbeddedIconVariant } from './SPCChart/SPCChart.constants';

// Icons-only barrel re-export (optional convenience)
export * as Icons from './icons';
