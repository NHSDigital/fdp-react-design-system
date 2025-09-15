// Re-export UI-only SPC constants for icon rendering to maintain stable import paths
// This preserves compatibility with tests and any consumers expecting this module.
export {
  SpcEmbeddedIconVariant,
  LetterMode,
  SpcLetterGlyph,
} from "./logic/storybook/SPCChart.constants";
