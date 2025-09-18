import { describe, it, expect } from "vitest";
import {
	ImprovementDirection,
	VariationIcon,
	type SpcRowV2,
} from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import {
	computeSpcVisualCategories,
	SpcVisualCategory,
} from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/visualCategories";

function row(partial: Partial<SpcRowV2>): SpcRowV2 {
	return {
		rowId: 1,
		x: "0",
		value: 1,
		ghost: false,
		partitionId: 1,
		pointRank: 12,
		mean: 0,
		upperProcessLimit: 10,
		lowerProcessLimit: -10,
		upperTwoSigma: 7,
		lowerTwoSigma: -7,
		upperOneSigma: 3,
		lowerOneSigma: -3,
		singlePointUp: false,
		singlePointDown: false,
		twoSigmaUp: false,
		twoSigmaDown: false,
		fourOfFiveUp: false,
		fourOfFiveDown: false,
		shiftUp: false,
		shiftDown: false,
		trendUp: false,
		trendDown: false,
		specialCauseImprovementValue: null,
		specialCauseConcernValue: null,
		variationIcon: VariationIcon.CommonCause,
		...partial,
	};
}

describe("computeSpcVisualCategories", () => {
	it("prefers Improvement when both upAny and downAny are present (conflict)", () => {
		const rows = [
			row({
				singlePointUp: true,
				twoSigmaDown: true,
				variationIcon: VariationIcon.CommonCause,
			}),
		];
		const cats = computeSpcVisualCategories(rows, {
			metricImprovement: ImprovementDirection.Up,
			trendVisualMode: "Ungated",
			enableNeutralNoJudgement: true,
		});
		expect(cats[0]).toBe(SpcVisualCategory.Improvement);
	});

	it("returns NoJudgement for Neither with special cause in Gated mode", () => {
		const rows = [
			row({
				variationIcon: VariationIcon.NeitherHigh,
				shiftUp: true,
			}),
		];
		const cats = computeSpcVisualCategories(rows, {
			metricImprovement: ImprovementDirection.Neither,
			trendVisualMode: "Gated",
			enableNeutralNoJudgement: true,
		});
		expect(cats[0]).toBe(SpcVisualCategory.NoJudgement);
	});

	it("Ungated: colours directional by metricImprovement on Neither", () => {
		const upRows = [
			row({ variationIcon: VariationIcon.NeitherHigh, shiftUp: true }),
		];
		const upCats = computeSpcVisualCategories(upRows, {
			metricImprovement: ImprovementDirection.Up,
			trendVisualMode: "Ungated",
			enableNeutralNoJudgement: true,
		});
		expect(upCats[0]).toBe(SpcVisualCategory.Improvement);

		const downRows = [
			row({ variationIcon: VariationIcon.NeitherLow, shiftDown: true }),
		];
		const downCats = computeSpcVisualCategories(downRows, {
			metricImprovement: ImprovementDirection.Up,
			trendVisualMode: "Ungated",
			enableNeutralNoJudgement: true,
		});
		expect(downCats[0]).toBe(SpcVisualCategory.Concern);
	});
});
