// Barrel exports for SPC (Statistical Process Control) related components & types
// Provides a stable import surface:
//   import { SPCChart } from '.../DataVisualisation/charts/SPC';
//   import type { SPCChartProps, SPCDatum } from '.../DataVisualisation/charts/SPC';
//
// Canonical import guidance:
// - Component props/enums: import from './SPCChart/SPCChart.props'
// - Engine helpers/enums: import from './engine'
// - Icons: prefer the Icons namespace export (e.g. SPC.Icons.SPCVariationIcon)

export { default as SPCChart } from './SPCChart/SPCChart';
export type { SPCChartProps, SPCDatum } from './SPCChart/SPCChart.props';

// Engine logic & enums
export { buildSpc, normaliseSpcSettings } from './SPCChart/logic/spc';
// Prefer enums via engine where available; keep other legacy enums from types
export { ImprovementDirection, VariationIcon, ChartType } from './engine';
// Minimal public constants (avoids dragging wider enum set into the analyzer)
export { AssuranceIcon, BaselineSuggestionReason, RULE_METADATA } from './SPCChart/public';
export { SpcWarningSeverity, SpcWarningCategory, SpcWarningCode } from './SPCChart/logic/spc';
export type { SpcSettings, SpcSettingsV2, SpcResult, SpcWarning } from './SPCChart/logic/spc';

// v2 engine public exports — routed via curated engine barrel
export {
	buildSpcV26a,
	buildSpcV26aWithVisuals,
	normaliseSpcSettingsV2,
	computeSpcVisualCategories,
	SpcVisualCategory,
	withParityV26,
	PARITY_V26,
} from './engine';
export type {
	SpcInputRowV2,
	SpcSettingsV26a as SpcSettingsV26a_V2,
	SpcSettingsHierarchical as SpcSettingsHierarchical_V2,
	SpcSettingsInput as SpcSettingsInput_V2,
	SpcResultV2,
	SpcRowV2,
} from './engine';

// Descriptors & helpers (colour tokens, labels)
export { variationLabel, extractRuleIds, ruleGlossary, VARIATION_COLOR_TOKENS, getVariationColorHex, getVariationColorToken } from './SPCChart/descriptors';

// Icon system
// Prefer the Icons namespace for all icon usage. Direct icon re-exports have been removed to reduce public surface area.

// Tooltip overlay (specialised)
export { default as SPCTooltipOverlay } from './SPCChart/SPCTooltipOverlay';
export { SpcEmbeddedIconVariant } from './SPCChart/SPCChart.constants';

// Icons-only barrel re-export (optional convenience)
export * as Icons from './icons';
