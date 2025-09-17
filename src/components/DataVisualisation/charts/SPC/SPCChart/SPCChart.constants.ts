// UI-only SPC constants for icon/gradient rendering. Defined locally to avoid storybook-only import paths.

export enum SpcGradientCategory {
  Concern = "concern",
  Improvement = "improvement",
  NoJudgement = "noJudgement",
  Common = "common",
}

export enum SpcEmbeddedIconVariant {
  Classic = "classic",
  Triangle = "triangle",
  TriangleWithRun = "triangleWithRun",
}

export enum LetterMode {
  Direction = "direction",
  Polarity = "polarity",
}

export enum SpcLetterGlyph {
  H = "H",
  L = "L",
  None = "",
}

export default SpcGradientCategory;
