// Centralised descriptors & helper re-exports for SPC.
// Keeps call sites stable while we migrate internals.

export {
  variationLabel,
  assuranceLabel,
  zoneLabel,
  extractRuleIds,
  ruleGlossary,
  VARIATION_COLOR_TOKENS,
  getVariationColorHex,
  getVariationColorToken,
} from "./logic/spcDescriptors";
