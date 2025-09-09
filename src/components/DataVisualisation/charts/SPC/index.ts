// Barrel exports for SPC (Statistical Process Control) related components & types
// Provides a stable import surface: `import { SPCChart, SPCVariationIcon, SPCAssuranceIcon, buildSpc } from '.../DataVisualisation/charts/SPC';`

export { default as SPCChart } from './SPCChart/SPCChart';
export type { SPCChartProps, SPCDatum } from './SPCChart/SPCChart';

// Engine logic & enums
export { buildSpc, ImprovementDirection, VariationIcon, AssuranceIcon, ChartType, SpcWarningSeverity, SpcWarningCategory, SpcWarningCode, BaselineSuggestionReason } from './SPCChart/logic/spc';
export type { SpcSettings, SpcResult, SpcWarning } from './SPCChart/logic/spc';

// Descriptors & helpers (colour tokens, labels)
export { variationLabel, extractRuleIds, ruleGlossary, VARIATION_COLOR_TOKENS, getVariationColorHex, getVariationColorToken } from './SPCChart/logic/spcDescriptors';

// Icon system
export { SPCVariationIcon } from './SPCIcons/SPCIcon';
export { SPCAssuranceIcon } from './SPCIcons/SPCAssuranceIcon';
export { AssuranceResult, Direction, MetricPolarity, VariationJudgement, VariationState, getVariationColour, getVariationTrend } from './SPCIcons/SPCConstants';
export type { VariationColourDef } from './SPCIcons/SPCConstants';
export type { SPCVariationIconProps, SpcVariationAltIconProps, SpcAssuranceIconProps, SpcIconsProps, SpcIconBaseProps } from './SPCIcons/SPCIcon';

// Tooltip overlay (specialised)
export { default as SPCTooltipOverlay } from './SPCChart/SPCTooltipOverlay';

// Icons-only barrel re-export (optional convenience)
export * as Icons from './icons';
