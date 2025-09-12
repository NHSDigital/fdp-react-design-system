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

// UI-only enum controlling how H/L letters are derived in SPC icons
export enum LetterMode {
  Direction = "direction",
  Polarity = "polarity",
}

// UI-only enum for explicit letter override glyphs
export enum SpcLetterGlyph {
  H = "H",
  L = "L",
  None = "",
}

export default SpcGradientCategory;
