/**
 * Structured SPC test/story definitions derived from the XmR testing specification document.
 * Each definition provides (at minimum) a title and a resolved numeric value series. Where possible we
 * reuse the canonical CSV-driven dataset (metricLookup) so there is a single source of truth for point
 * sequences already exercised elsewhere. Optional expected statistics & colour classifications can be
 * attached for more granular assertions in tests.
 */
import { ImprovementDirection } from "../SPCChart";
import { metricLookup } from "./parsedDataset";

export const SPC_POINT_COLOURS = {
	improvement: "#00B0F0",
	concern: "#E46C0A",
	noJudgement: "#490092",
	common: "#A6A6A6",
} as const;

export type SpcDirection = "higher" | "lower" | "neither";

export interface SpcTestCase {
	/** Human readable scenario title (also used as fallback lookup key into metricLookup) */
	title: string;
	/** Optional explicit metric name inside metricLookup when different from title */
	sourceMetric?: string;
	/** Explicit numeric values (if omitted we read from metricLookup[sourceMetric||title]) */
	values?: number[];
	/** High / low / neither improvement direction (maps to ImprovementDirection) */
	direction?: SpcDirection;
	/** Expected mean (last partition) */
	expectedMean?: number;
	/** Expected upper process limit (last partition) */
	expectedUcl?: number;
	/** Expected lower process limit (last partition) */
	expectedLcl?: number;
	/** Optional expected per-point colour hex codes (null = do not assert that index) */
	expectedPointColours?: (string | null)[];

	target?: number; // optional target value for assurance icon scenarios
}

/** Helper to resolve the numeric values for a test case */
function resolveValues(tc: SpcTestCase): number[] {
	if (tc.values) return tc.values.slice();
	const key = tc.sourceMetric || tc.title;
	const series = metricLookup[key];
	if (!series) return [];
	return series.map((p) => p.y);
}

/** Convenience mapping to the enum used by the component */
export function mapDirection(
	dir: SpcDirection | undefined
): ImprovementDirection {
	switch (dir) {
		case "higher":
			return ImprovementDirection.Up;
		case "lower":
			return ImprovementDirection.Down;
		default:
			return ImprovementDirection.Neither;
	}
}

/** Numeric tolerance for floating-point comparisons of derived stats */
export const STAT_TOLERANCE = 0.02; // generous (±0.02) – revise if tighter needed

/**
 * Core scenario catalogue. Where expected statistics are published in the markdown specification they
 * are captured here (currently only the first Process limits example publishes explicit values).
 */
export const spcTestCases: SpcTestCase[] = [
	{ title: "Number of points - 12", target: 45 },
	{ title: "Number of points - 13", target: 45 },
	{
		title: "Process limits - 15",
		expectedMean: 23.2,
		expectedUcl: 37.64,
		expectedLcl: 8.76,
	},
	{
		title: "Process limits - 10",
		expectedMean: 22.1,
		expectedUcl: 36.03,
		expectedLcl: 8.17,
	},
	{
		title: "Special cause - High is good",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			// Early favourable run is now neutralised (directional-first + grace), surfacing as no-judgement (purple)
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
		],
	},
	{
		title: "Special cause - Low is good",
		direction: "lower",
		expectedPointColours: [
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
		],
	},
	{
		title: "Special cause - Neither",
		direction: "neither",
		expectedPointColours: [
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.noJudgement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
		],
	},
	{
		title: "Special cause - single point - ends",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.concern,
		],
	},
	{
		title: "Special cause - single point - middle",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.improvement,
		],
	},
	{ title: "Special cause - shift - ends", direction: "higher" },
	{ title: "Special cause - shift - middle", direction: "higher" },
	{ title: "Special cause - trend - no pauses", direction: "higher" },
	{ title: "Special cause - trend - pauses", direction: "higher" },
	{ title: "Special cause - two-sigma - 1", direction: "higher" },
	{ title: "Special cause - two-sigma - 2", direction: "higher" },
	{ title: "Special cause - two-sigma - 3", direction: "higher" },
	{ title: "Special cause conflict - High is good", direction: "higher" },
	{ title: "Special cause conflict - Low is good", direction: "lower" },
	// Primary recalculation / baseline dataset emphasising early concern then improvement run
	{
		title: "Recalculations (recalculated)",
		sourceMetric: "Recalculations / Baselines",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
		],
	},
	{
		title: "Recalculations / Baselines",
		direction: "higher",
		sourceMetric: "Recalculations / Baselines",
		expectedPointColours: [
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
		],
	},
	// Variants of the recalculations/baselines dataset for story/test coverage (rules toggled, polarity, suggestions)
	{
		title: "Recalculations (late concerns)",
		sourceMetric: "Recalculations / Baselines",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
		],
	},
	{
		title: "Baselines (original)",
		sourceMetric: "Recalculations / Baselines",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.concern,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
		],
	},
	{
		title: "Baselines (shifted)",
		sourceMetric: "Recalculations / Baselines",
		direction: "higher",
		expectedPointColours: [
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.common,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
			SPC_POINT_COLOURS.improvement,
		],
	},
	{
		title: "Special cause crossing recalculations and baselines - shift",
		direction: "higher",
	},
	{
		title: "Special cause crossing recalculations and baselines - trend",
		direction: "higher",
	},
	{
		title: "Special cause crossing recalculations and baselines - two-sigma",
		direction: "higher",
	},
	{ title: "Summary icons - assurance", direction: "higher" },
	{ title: "Summary icons - assurance - too few points", direction: "higher" },
	{ title: "Summary icons - variation - 1", direction: "higher" },
	{ title: "Summary icons - variation - 2", direction: "higher" },
	{ title: "Summary icons - variation - 3", direction: "higher" },
	{ title: "Summary icons - variation - too few points", direction: "higher" },
	// Direction variants (reuse dataset) for colour polarity checks
	{
		title: "Special cause (low is good variant)",
		sourceMetric: "Special cause",
		direction: "lower",
	},
	{
		title: "Special cause (neither variant)",
		sourceMetric: "Special cause",
		direction: "neither",
	},
];

/** Export a resolved projection (values always populated) for convenience */
export const resolvedSpcTestCases = spcTestCases.map((tc) => ({
	...tc,
	values: resolveValues(tc),
}));
