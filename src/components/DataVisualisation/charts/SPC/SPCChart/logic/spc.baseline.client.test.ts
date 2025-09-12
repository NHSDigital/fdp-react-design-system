import { describe, it, expect } from "vitest";
import spcModule from "./spc";
import { ImprovementDirection } from "./spcConstants";
import { ChartType } from './spcConstants';

// NOTE: Current implementation treats baseline flag as partition split (recalculation),
// not as "compute baseline then extend". This test asserts existing behaviour.

describe("SPC baseline partition recalculation behaviour", () => {
	it("computes separate means for partitions created by baseline flag", () => {
		// First 10 points around 10, then baseline flag at row 11, then shift to around 20
		const first = [10, 11, 9, 10, 10, 11, 9, 10, 10, 11];
		const second = [
			20, 19, 21, 20, 20, 19, 21, 20, 20, 19, 21, 20, 20, 19, 21, 20,
		]; // 16 points including baseline row
		const data = [
			...first.map((v, i) => ({ x: i + 1, value: v })),
			{ x: 11, value: second[0], baseline: true },
			...second.slice(1).map((v, i) => ({ x: 12 + i, value: v })),
		];
		const { rows } = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		const part1 = rows.filter((r) => r.partitionId === 1);
		const part2 = rows.filter((r) => r.partitionId === 2);
		const mean1 = part1[part1.length - 1].mean; // last row of partition holds mean
		const mean2 = part2[part2.length - 1].mean;
		expect(mean1).not.toBeNull();
		expect(mean2).not.toBeNull();
		expect(mean1! < mean2!).toBe(true); // second partition mean higher after shift
	});
});
