/** Axis preset date/time formatting options (applies when formatTick is not provided). */
export type AxisTickFormatPreset =
  | "dayShortMonth"
  | "dayShortMonthYear"
  | "shortMonth"
  | "shortMonthYear"
  | "hourMinute";

/**
 * Zig-zag geometry configuration for the y-axis zero break indicator.
 * All values are in pixels and optional; sensible defaults are applied in the component.
 */
export interface AxisZigZagConfig {
  /** Height of the zig-zag portion itself (px). If omitted, derived from cycles and amplitude. */
  heightPx?: number;
  /** Vertical amplitude per half-step (px). Default 4. */
  amplitudePx?: number;
  /** Number of zig-zag cycles (each cycle consists of two diagonal segments). Default 6. */
  cycles?: number;
  /** Horizontal step per segment (px). Default 3. */
  stepXPx?: number;
}

/**
 * Y-axis zero break visual configuration. When enabled, a visual gap is left above the x-axis (zero)
 * and a centered zig-zag is drawn to indicate the axis is condensed. The y-scale domain is unchanged; a range-only
 * bottom offset should be applied by the scales provider (e.g., LineScalesProvider.yBottomGapPx) to lift plotted content.
 */
export interface AxisYZeroBreakConfig {
  /** If true, render the break indicator and fixed "0" label on the y-axis baseline. */
  enabled?: boolean;
  /** Visual gap in pixels below the plotting area used for the break indicator (does not affect domain). */
  gapPx?: number;
  /** Zig-zag geometry options. Fixed geometry; does not auto-fill space. */
  zigZag?: AxisZigZagConfig;
}

/** Props for the Axis component (x or y). */
export interface AxisProps {
  /** Axis orientation. */
  type: "x" | "y";
  /** Optional user-supplied scale override; otherwise taken from ScaleContext. */
  scale?: any;
  /** Desired tick count (used when scale supports ticks()). */
  tickCount?: number;
  /** Explicit tick values; if provided overrides tickCount/ticks() generation. */
  tickValues?: any[];
  /** Custom tick formatter. If omitted, a preset or fallback formatter is used. */
  formatTick?: (v: any) => string;
  /** Axis label (applies to y-axis). */
  label?: string;
  /** x-axis only: vertical offset (defaults to innerHeight). */
  offset?: number;
  /** Additional class name for the root <g>. */
  className?: string;
  /** x-axis only: minimum pixel spacing between adjacent tick labels. Intermediate ticks are dropped when overlapping. */
  minLabelSpacing?: number;
  /** Truncate tick label text to this many characters (adds ellipsis). Full value kept in <title> for tooltip/a11y. */
  maxTickLabelLength?: number;
  /** x-axis only: auto-compute a reasonable minLabelSpacing based on average label length when not provided. */
  autoMinLabelSpacing?: boolean;
  /** x-axis only: rotate tick labels (degrees). Negative leans left, positive right). */
  labelAngle?: number;
  /** If true, split labels containing \n into multiple tspans (multi-line). */
  allowLabelWrap?: boolean;
  /** Preset date/time formatting helper (applies only if formatTick not provided). */
  tickFormatPreset?: AxisTickFormatPreset;
  /** y-axis only: zero break visual configuration (centered-only zig-zag). */
  yZeroBreak?: AxisYZeroBreakConfig;
}

export default AxisProps;
