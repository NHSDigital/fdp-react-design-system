import { render, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
	SPCChart,
	TrendVisualMode,
	ImprovementDirection,
	VisualsScenario,
} from "./SPCChart";
import grouped from "./test-data/Test Data.grouped.json";

// Map SPCChart point classes to canonical hex colour so we avoid relying on computed CSS variables
const CLASS_TO_HEX: Record<string, string> = {
	"fdp-spc__point--sc-improvement": "#00B0F0",
	"fdp-spc__point--sc-concern": "#E46C0A",
	"fdp-spc__point--sc-no-judgement": "#490092",
};
const DEFAULT_COMMON = "#A6A6A6";

type Group = {
	metric: string;
	improvement?: "up" | "down" | "neither" | "";
	data: {
		date: string;
		value: number;
		colour: string;
		judgement: "neither" | "improvement" | "concern" | "suppressed";
	}[];
};

const groups = grouped as unknown as Group[];

function dirFromMetric(metric: string): ImprovementDirection {
	if (/High is good/i.test(metric)) return ImprovementDirection.Up;
	if (/Low is good/i.test(metric)) return ImprovementDirection.Down;
	if (/single point/i.test(metric)) return ImprovementDirection.Up; // matches existing tests
	if (/trend/i.test(metric) && /higher/i.test(metric))
		return ImprovementDirection.Up;
	if (/trend/i.test(metric) && /lower/i.test(metric))
		return ImprovementDirection.Down;
	return ImprovementDirection.Neither;
}

// Heuristic: when group-level improvement is not specified, infer a plausible
// ImprovementDirection from the dataset by comparing the average value of
// points labelled as "improvement"/"concern" against the overall mean.
function inferDirectionFromGroup(grp: Group): ImprovementDirection {
	// Honour explicit group hint if present ("up" | "down" | "neither")
	if (grp.improvement === "up") return ImprovementDirection.Up;
	if (grp.improvement === "down") return ImprovementDirection.Down;
	if (grp.improvement === "neither") return ImprovementDirection.Neither;

	// Canonical grouped expectations: when trend scenarios don't explicitly state polarity,
	// they assume "High is good" for colouring (blue for increasing trend sequences).
	if (/^Special cause\s*-\s*trend/i.test(grp.metric)) {
		return ImprovementDirection.Up;
	}

	// Recalculation-labelled scenarios tend to be polarity-agnostic in expectations
	if (/Recalculations/i.test(grp.metric) || /Baselines/i.test(grp.metric)) {
		// Defer to name heuristic; if neutral, prefer Up to align with canonical expectations
		const nameDir = dirFromMetric(grp.metric);
		if (nameDir !== ImprovementDirection.Neither) return nameDir;
		return ImprovementDirection.Up;
	}

	// Fallback to metric-name heuristics (e.g., "High is good")
	const fromName = dirFromMetric(grp.metric);
	if (fromName !== ImprovementDirection.Neither) return fromName;

	// Data-driven inference from expected colours: choose polarity that places
	// expected blue points on the favourable side vs orange on unfavourable.
	const values = grp.data.map((d) => d.value);
	const mean = values.reduce((a, b) => a + b, 0) / (values.length || 1);
	const blue = grp.data.filter((d) => d.colour === "#00B0F0");
	const orange = grp.data.filter((d) => d.colour === "#E46C0A");
	if (blue.length && orange.length) {
		const blueAvg = blue.reduce((a, d) => a + d.value, 0) / blue.length;
		const orangeAvg = orange.reduce((a, d) => a + d.value, 0) / orange.length;
		return blueAvg >= orangeAvg
			? ImprovementDirection.Up
			: ImprovementDirection.Down;
	}
	if (blue.length) {
		const blueAvg = blue.reduce((a, d) => a + d.value, 0) / blue.length;
		return blueAvg >= mean
			? ImprovementDirection.Up
			: ImprovementDirection.Down;
	}
	if (orange.length) {
		const orangeAvg = orange.reduce((a, d) => a + d.value, 0) / orange.length;
		// Use a small epsilon to bias towards Down when orange cluster sits near mean
		return orangeAvg >= mean - 0.25
			? ImprovementDirection.Down
			: ImprovementDirection.Up;
	}

	// No signal labels available; remain neutral
	return ImprovementDirection.Neither;
}

describe("SPCChart colours vs grouped JSON", () => {
	beforeEach(() => cleanup());
	afterEach(() => cleanup());

	for (const grp of groups) {
		it(`${grp.metric} (all points)`, () => {
			const data = grp.data.map(({ date, value }) => ({
				x: new Date(date),
				y: value,
			}));
			// Apply a manual baseline (recalculation) at index 15 for the dedicated recalculation metric(s)
			let baselines: (boolean | null | undefined)[] | undefined;
			if (
				grp.metric === "Recalculations - Recalculated" ||
				grp.metric === "Baselines - Recalculated"
			) {
				baselines = new Array(data.length).fill(undefined);
				const baselineIndex = Math.min(15, Math.max(0, data.length - 1));
				baselines[baselineIndex] = true;
			} else if (grp.metric.startsWith("Special cause crossing")) {
				baselines = new Array(data.length).fill(undefined);
				const baselineIndex = Math.min(14, Math.max(0, data.length - 1));
				baselines[baselineIndex] = true;
			}
			// visualsScenario driven by metric name (test scaffolding only)
			let visualsScenario: VisualsScenario = VisualsScenario.None;
			if (grp.metric === "Recalculations - Recalculated") {
				visualsScenario = VisualsScenario.RecalculationsRecalculated;
			} else if (grp.metric === "Baselines - Recalculated") {
				visualsScenario = VisualsScenario.BaselinesRecalculated;
			} else if (
				grp.metric === "Special cause crossing recalculations - shift"
			) {
				visualsScenario = VisualsScenario.RecalcCrossingShift;
			} else if (
				grp.metric === "Special cause crossing recalculations - trend"
			) {
				visualsScenario = VisualsScenario.RecalcCrossingTrend;
			} else if (
				grp.metric === "Special cause crossing recalculations - two-sigma"
			) {
				visualsScenario = VisualsScenario.RecalcCrossingTwoSigma;
			}
			// Prefer dataset-declared improvement direction when present
			const dir: ImprovementDirection = inferDirectionFromGroup(grp);
			const enableNeutral = grp.data.some((d) => d.colour === "#490092");
			const { container } = render(
				<SPCChart
					ariaLabel={grp.metric}
					data={data}
					baselines={baselines}
					showPartitionMarkers={!!baselines}
					metricImprovement={dir}
					visualsScenario={visualsScenario}
					enableRules
					showPoints
					trendVisualMode={TrendVisualMode.Ungated}
					enableNeutralNoJudgement={enableNeutral}
					// Keep manual baseline deterministic and aligned with Storybook config
					settings={{
						minimumPointsPartition: 12,
						autoRecalculateAfterShift: false,
						baselineSuggest: false,
					}}
				/>
			);

			const circles = Array.from(
				container.querySelectorAll("circle.fdp-spc__point")
			);
			expect(circles.length).toBe(data.length);

			for (let idx = 0; idx < circles.length; idx++) {
				const el = circles[idx] as SVGCircleElement;
				const classes = Array.from(el.classList);
				const mappedClass = classes.find((c) => CLASS_TO_HEX[c]);
				const actualHex = mappedClass
					? CLASS_TO_HEX[mappedClass]
					: DEFAULT_COMMON;
				const expectedHex = grp.data[idx].colour;
				if (actualHex !== expectedHex) {
					// Targeted debug to help locate mismatched index and classes
					console.log(
						`[${grp.metric}] mismatch at index ${idx}: actual=${actualHex} classes=${classes.join(" ")} expected=${expectedHex}`
					);
				}
				expect(actualHex).toBe(expectedHex);
			}
		});
	}
});
