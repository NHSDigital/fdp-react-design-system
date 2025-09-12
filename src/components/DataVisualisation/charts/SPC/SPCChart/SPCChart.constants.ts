// UI-only category enum for gradient band sequences behind coloured point runs
// Keep string values stable as they are used in CSS and data attributes.
export enum SpcGradientCategory {
  Concern = "concern",
  Improvement = "improvement",
  NoJudgement = "noJudgement",
  Common = "common",
}

// UI-only enum for embedded SPCVariationIcon variants used by SPCChart
// Keep string values stable for compatibility with existing props and docs.
export enum SpcEmbeddedIconVariant {
  Classic = "classic",
  Triangle = "triangle",
  TriangleWithRun = "triangleWithRun",
}

export default SpcGradientCategory;
