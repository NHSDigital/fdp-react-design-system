import { render, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { TrendVisualMode } from "./SPCChart.props";
import { VisualsScenario } from "../engine";
import grouped from "./test-data/Test Data.grouped.json";
import { deriveDirectionFromDatasetWithPoints } from "./logic_v2/utils/direction";

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

// Legacy helper no longer needed; use shared utility instead

// Heuristic: when group-level improvement is not specified, infer a plausible
// ImprovementDirection from the dataset by comparing the average value of
// points labelled as "improvement"/"concern" against the overall mean.
function inferDirectionFromGroup(grp: Group): ImprovementDirection {
	return deriveDirectionFromDatasetWithPoints(
		grp.metric,
		grp.improvement,
		grp.data.map((d) => ({ value: d.value, colour: d.colour }))
	);
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
			// Apply a manual baseline (recalculation) at index 15 for recalculation metrics
			let baselines: (boolean | null | undefined)[] | undefined;
			if (
				grp.metric === "Recalculations - Recalculated" ||
				grp.metric === "Baselines - Recalculated" ||
				grp.metric.startsWith("Special cause crossing recalculations")
			) {
				baselines = new Array(data.length).fill(undefined);
				const baselineIndex = Math.min(15, Math.max(0, data.length - 1));
				baselines[baselineIndex] = true;
			}
			// visualsScenario driven by metric name (test scaffolding only)
			let visualsScenario: VisualsScenario = VisualsScenario.None;
			if (grp.metric === "Recalculations - Recalculated") {
				visualsScenario = VisualsScenario.RecalculationsRecalculated;
			} else if (grp.metric === "Baselines - Recalculated") {
				visualsScenario = VisualsScenario.BaselinesRecalculated;
			} else if (grp.metric.startsWith("Special cause crossing recalculations - shift")) {
				visualsScenario = VisualsScenario.RecalcCrossingShift;
			} else if (grp.metric.startsWith("Special cause crossing recalculations - trend")) {
				visualsScenario = VisualsScenario.RecalcCrossingTrend;
			} else if (grp.metric.startsWith("Special cause crossing recalculations - two-sigma")) {
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
