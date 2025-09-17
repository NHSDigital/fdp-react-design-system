import { SpcSettingsHierarchical, SpcSettingsInput, SpcSettingsV26a } from "./types";

// Public helper: normalise v2 settings. Accepts flat (v2.6a) or hierarchical input and returns canonical flat settings.
export function normaliseSpcSettingsV2(input?: SpcSettingsInput): SpcSettingsV26a {
  if (!input) return {} as SpcSettingsV26a;
  // If it looks like flat settings, return as-is
  if (
    typeof input === "object" &&
    ("minimumPoints" in (input as any) ||
      "shiftPoints" in (input as any) ||
      "trendPoints" in (input as any))
  ) {
    return input as SpcSettingsV26a;
  }
  const h = input as SpcSettingsHierarchical;
  const out: SpcSettingsV26a = {};
  // thresholds
  if (h.thresholds) {
    const t = h.thresholds;
    if (t.minimumPoints != null) out.minimumPoints = t.minimumPoints;
    if (t.shiftPoints != null) out.shiftPoints = t.shiftPoints;
    if (t.trendPoints != null) out.trendPoints = t.trendPoints;
    if (t.excludeMovingRangeOutliers != null)
      out.excludeMovingRangeOutliers = t.excludeMovingRangeOutliers;
  }
  // eligibility
  if (h.eligibility) {
    if (h.eligibility.chartLevel != null)
      out.chartLevelEligibility = h.eligibility.chartLevel;
  }
  // parity
  if (h.parity) {
    if (h.parity.trendAcrossPartitions != null)
      out.trendAcrossPartitions = h.parity.trendAcrossPartitions;
    if (h.parity.twoSigmaIncludeAboveThree != null)
      out.twoSigmaIncludeAboveThree = h.parity.twoSigmaIncludeAboveThree;
    if (h.parity.enableFourOfFiveRule != null)
      out.enableFourOfFiveRule = h.parity.enableFourOfFiveRule;
  }
  // conflict
  if (h.conflict) {
    if (h.conflict.preferImprovementWhenConflict != null)
      out.preferImprovementWhenConflict = h.conflict.preferImprovementWhenConflict;
    if (h.conflict.preferTrendWhenConflict != null)
      out.preferTrendWhenConflict = h.conflict.preferTrendWhenConflict;
    if (h.conflict.strategy != null) out.conflictStrategy = h.conflict.strategy;
    if (h.conflict.ruleHierarchy != null)
      out.ruleHierarchy = h.conflict.ruleHierarchy;
    if (h.conflict.metricRuleOnTie != null)
      out.metricConflictRule = h.conflict.metricRuleOnTie;
  }
  // trend
  if (h.trend?.segmentation) {
    const s = h.trend.segmentation;
    if (s.mode != null) out.trendSegmentationMode = s.mode;
    if (s.favourableSegmentation != null)
      out.trendFavourableSegmentation = s.favourableSegmentation;
    if (s.strategy != null) out.trendSegmentationStrategy = s.strategy;
    if (s.dominatesHighlightedWindow != null)
      out.trendDominatesHighlightedWindow = s.dominatesHighlightedWindow;
  }
  return out;
}
